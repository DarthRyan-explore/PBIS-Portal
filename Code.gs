/**
 * Copley High School PBIS Portal - Google Apps Script Backend
 * File: Code.gs
 * 
 * Instructions:
 * 1. Open the Google Sheet linked to your Google Forms.
 * 2. Click Extensions > Apps Script.
 * 3. Paste the contents of this file into the Code.gs editor.
 * 4. Set up an Installable Trigger for 'onFormSubmitTrigger' (Event source: From spreadsheet, Event type: On form submit).
 * 5. Set up a Time-driven Trigger for 'sendWeeklyDigest' (Weekly timer, every Friday, 3 PM to 4 PM).
 */

// Configuration Constants
var CONFIG = {
  LEDGER_SHEET_NAME: "House_Cup_Totals",
  MODERATION_SHEET_NAME: "GenYES_Moderation_Queue",
  SHOUTOUT_FORM_SHEET_NAME: "Form Responses 1", // Standard Google Forms target sheet name
  MTSS_SHEET_NAME: "MTSS_Interventions_Log",
  CC_SHEET_NAME: "Check_Connect_Logs",
  DISTRICT_DOMAIN: "copley-fairlawn.org",
  EMAIL_SENDER_NAME: "Copley High School PBIS System",
  DEBUG_MODE: true // SAFETY GATE: Set to true to prevent sending live emails during testing
};

// Hardcoded Student-to-House (Grade Cohort) mapping for validation/fallbacks
var STUDENT_HOUSE_MAPPING = {
  "Frodo Baggins": "Seniors",
  "Ahsoka Tano": "Juniors",
  "Luke Skywalker": "Sophomores",
  "Jean Grey": "Juniors",
  "Peter Parker": "Freshmen",
  "Arwen Undomiel": "Seniors",
  "Dragonborn": "Freshmen",
  "Anakin Skywalker": "Sophomores",
  "Gwen Stacy": "Seniors",
  "Legolas Greenleaf": "Juniors",
  "Samwise Gamgee": "Sophomores",
  "Spock": "Freshmen"
};

/**
 * Trigger function to be bound to Form Submissions
 */
function onFormSubmitTrigger(e) {
  try {
    var range = e.range;
    var sheet = range.getSheet();
    var sheetName = sheet.getName();
    var values = e.values; // Array of submission values matching columns
    
    Logger.log("Form submitted on sheet: " + sheetName);
    
    // 1. Process Student Shout-Out Submission
    if (sheetName === CONFIG.SHOUTOUT_FORM_SHEET_NAME) {
      processShoutoutSubmission(values);
    }
  } catch (error) {
    Logger.log("Error in onFormSubmitTrigger: " + error.toString());
  }
}

/**
 * Processes shout-out inputs, updates house points, and routes to Moderation Queue
 */
function processShoutoutSubmission(values) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Columns mapping adjusted for Google Form verification & Name splitting:
  // [0] Timestamp, [1] Email Address, [2] First Name, [3] Last Name, [4] Target Staff, [5] Category, [6] Message, [7] Anonymous (Yes/No)
  var timestamp = values[0];
  var email = values[1] || "";
  var firstName = (values[2] || "").toString().trim();
  var lastName = (values[3] || "").toString().trim();
  var sender = (firstName + " " + lastName).trim() || "Anonymous Student";
  var teacher = values[4] || "";
  var category = values[5] || "";
  var message = values[6] || "";
  var isAnonymous = (values[7] || "").toString().toLowerCase() === "yes";
  
  Logger.log("Processing Shout-out from " + sender + " (" + email + ") to " + teacher);
  
  // Resolve House (Grade Cohort) mapping using Roster lookup
  var house = lookupStudentGrade(email, sender);
  
  // 1. Log transaction to House Cup ledger
  updateHouseCupLedger(ss, house, 5); // +5 Points for submitting a shoutout
  
  // 2. Append to GenYES Moderation Queue sheet
  var modSheet = ss.getSheetByName(CONFIG.MODERATION_SHEET_NAME);
  if (!modSheet) {
    modSheet = ss.insertSheet(CONFIG.MODERATION_SHEET_NAME);
    modSheet.appendRow(["Timestamp", "Sender", "House", "Target Staff", "Category", "Message", "Anonymous", "Status", "Audited By", "Audit Date"]);
    modSheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#0c2346").setFontColor("#ffcc04");
  }
  
  modSheet.appendRow([
    timestamp,
    sender,
    house,
    teacher,
    category,
    message,
    isAnonymous ? "Yes" : "No",
    "Pending", // Initial status
    "", // Moderator name placeholder
    ""  // Audit timestamp placeholder
  ]);
  
  Logger.log("Successfully routed shout-out to Moderation Queue.");
}

/**
 * Increments house score inside master ledger sheet
 */
function updateHouseCupLedger(ss, houseName, pointsToAdd) {
  var ledgerSheet = ss.getSheetByName(CONFIG.LEDGER_SHEET_NAME);
  if (!ledgerSheet) {
    ledgerSheet = ss.insertSheet(CONFIG.LEDGER_SHEET_NAME);
    ledgerSheet.appendRow(["House Name", "Total Points", "Last Updated"]);
    ledgerSheet.getRange(1, 1, 1, 3).setFontWeight("bold");
    ledgerSheet.appendRow(["Seniors", 0, new Date()]);
    ledgerSheet.appendRow(["Juniors", 0, new Date()]);
    ledgerSheet.appendRow(["Sophomores", 0, new Date()]);
    ledgerSheet.appendRow(["Freshmen", 0, new Date()]);
  }
  
  var dataRange = ledgerSheet.getDataRange();
  var rows = dataRange.getValues();
  var found = false;
  
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0].toString().toLowerCase() === houseName.toLowerCase()) {
      var currentVal = parseFloat(rows[i][1]) || 0;
      ledgerSheet.getRange(i + 1, 2).setValue(currentVal + pointsToAdd);
      ledgerSheet.getRange(i + 1, 3).setValue(new Date());
      found = true;
      break;
    }
  }
  
  if (!found) {
    ledgerSheet.appendRow([houseName, pointsToAdd, new Date()]);
  }
}

/**
 * Compiles and distributes weekly HTML email digests to students and staff
 * Scheduled to run automatically on Friday afternoons
 */
function sendWeeklyDigest() {
  Logger.log("Compiling Weekly HTML Digests...");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Gather stats from sheets
  var shoutoutSheet = ss.getSheetByName(CONFIG.SHOUTOUT_FORM_SHEET_NAME);
  var mtssSheet = ss.getSheetByName(CONFIG.MTSS_SHEET_NAME);
  
  if (!shoutoutSheet) {
    Logger.log("Shout-out response sheet not found. Skipping digest.");
    return;
  }
  
  var shoutouts = shoutoutSheet.getDataRange().getValues();
  var mtssLogs = mtssSheet ? mtssSheet.getDataRange().getValues() : [];
  
  // Resolve headers to find the Target Teacher column index dynamically
  var headers = shoutouts[0];
  var teacherColIdx = -1;
  for (var c = 0; c < headers.length; c++) {
    var h = headers[c].toString().toLowerCase().trim();
    if (h.indexOf("staff") !== -1 || h.indexOf("teacher") !== -1) {
      teacherColIdx = c;
      break;
    }
  }
  if (teacherColIdx === -1) teacherColIdx = 4; // Default to Column E (index 4)
  
  // Filter for records submitted in the last 7 days
  var now = new Date();
  var oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  var weeklyShoutoutsCount = 0;
  
  // Load staff recipients dynamically from the Staff_Directory sheet tab
  var staffRecipients = getStaffDirectory();
  
  // Reset/Initialize weekly counters
  for (var name in staffRecipients) {
    staffRecipients[name].received = 0;
  }

  // Count weekly shout-outs
  for (var i = 1; i < shoutouts.length; i++) {
    var ts = new Date(shoutouts[i][0]);
    if (ts >= oneWeekAgo) {
      weeklyShoutoutsCount++;
      var receiver = shoutouts[i][teacherColIdx] ? shoutouts[i][teacherColIdx].toString().trim() : "";
      
      if (staffRecipients[receiver]) {
        staffRecipients[receiver].received++;
      }
    }
  }
  
  // Count outstanding MTSS logs (mock check)
  var outstandingReminders = {
    "Sarah Janiga": 3,
    "Lee Malcolm": 2,
    "Maggie Steffen": 0
  };

  // Send digests to staff
  for (var staffName in staffRecipients) {
    var stats = staffRecipients[staffName];
    
    // Safety check: if they have no email configured, skip
    if (!stats.email) continue;
    
    var mtssCount = outstandingReminders[staffName] || 0;
    var htmlBody = compileStaffDigestHTML(staffName, stats.received, mtssCount);
    
    if (CONFIG.DEBUG_MODE) {
      Logger.log("[DEBUG MODE] Would send email to: " + stats.email + " with Subject: Weekly PBIS Digest");
    } else {
      MailApp.sendEmail({
        to: stats.email,
        subject: "Weekly PBIS Digest - Friday Appreciation & Caseload Summary 🏹",
        htmlBody: htmlBody,
        name: CONFIG.EMAIL_SENDER_NAME
      });
    }
    
    Logger.log("Processed weekly digest email to " + stats.email);
  }
  
  Logger.log("Weekly Digest transmission complete. Total shout-outs parsed: " + weeklyShoutoutsCount);
}

/**
 * Compiles a beautifully formatted Copley High School HTML newsletter for Staff
 */
function compileStaffDigestHTML(name, praiseCount, mtssCount) {
  var mtssSection = "";
  if (mtssCount > 0) {
    mtssSection = [
      '<div style="background-color: #fff1f2; border: 1px solid #fecdd3; border-radius: 12px; padding: 15px; margin-top: 20px;">',
      '  <h3 style="color: #be123c; margin-top: 0; font-family: sans-serif; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">⚠️ Minor Detail (Action Required)</h3>',
      '  <p style="color: #4b5563; font-size: 13px; margin: 5px 0; line-height: 1.5;">',
      '    Look, we all love paperwork. Okay, maybe not. But you currently have <strong>' + mtssCount + '</strong> outstanding student MTSS Tier 1 strategy logs due. Let\'s get these documented so we can pretend we have our lives completely together.',
      '  </p>',
      '  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdf_staff_mtss_log_form_placeholder/viewform" target="_blank" style="background-color: #be123c; color: white; padding: 8px 15px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 11px; display: inline-block; margin-top: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Log Strategies</a>',
      '</div>'
    ].join('\n');
  } else {
    mtssSection = [
      '<div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 15px; margin-top: 20px;">',
      '  <h3 style="color: #15803d; margin-top: 0; font-family: sans-serif; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">✅ MTSS Review Status: Clear</h3>',
      '  <p style="color: #4b5563; font-size: 13px; margin: 0; line-height: 1.5;">',
      '    Look at you. Zero outstanding MTSS logs. Go buy yourself a coffee, or take an extra long deep breath. You earned it.',
      '  </p>',
      '</div>'
    ].join('\n');
  }

  // Witty greeting sentences (Ryan Reynolds style)
  var greetings = [
    "Hey " + name + ". Look at that, you made it to Friday. And turns out, people actually noticed you doing great things this week.",
    "Well " + name + ", another week down. The good news? You've got some fan mail.",
    "Hey " + name + ". Grab a coffee and sit down. We compiled your weekly appreciation digest, and you actually did pretty great."
  ];
  var greetingText = greetings[Math.floor(Math.random() * greetings.length)];

  var html = [
    '<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">',
    '  <!-- Header Banner -->',
    '  <div style="background-color: #0c2346; color: #ffcc04; padding: 25px; text-align: center; border-bottom: 4px solid #ffcc04;">',
    '    <h1 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; font-weight: 900;">Copley High School</h1>',
    '    <p style="margin: 5px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; opacity: 0.9;">Weekly PBIS Staff Report</p>',
    '  </div>',
    '  ',
    '  <!-- Body -->',
    '  <div style="padding: 24px; background-color: #fafbfc;">',
    '    <p style="color: #1f2937; font-size: 14px; margin-top: 0; font-weight: bold;">',
    '      ' + greetingText,
    '    </p>',
    '    <p style="color: #4b5563; font-size: 13px; line-height: 1.6;">',
    '      Here is your weekly summary of the Virtual Shout-Outs (VSOs) and points logged. Students who sent or received a shout-out are eligible to spin the PBIS lobby prize wheel today (Friday) for some glorious rewards.',
    '    </p>',
    '    ',
    '    <!-- Stats Card Grid -->',
    '    <div style="display: flex; gap: 15px; margin-top: 20px;">',
    '      <div style="flex: 1; background-color: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 15px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">',
    '        <span style="font-size: 24px; display: block; margin-bottom: 5px;">✉️</span>',
    '        <span style="font-size: 20px; font-weight: 900; color: #0c2346; display: block;">' + praiseCount + '</span>',
    '        <span style="font-size: 9px; text-transform: uppercase; color: #9ca3af; font-weight: bold; display: block; margin-top: 3px;">Shout-Outs Received</span>',
    '      </div>',
    '      <div style="flex: 1; background-color: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 15px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">',
    '        <span style="font-size: 24px; display: block; margin-bottom: 5px;">⚡</span>',
    '        <span style="font-size: 20px; font-weight: 900; color: #ffcc04; display: block;">+' + (praiseCount * 10) + '</span>',
    '        <span style="font-size: 9px; text-transform: uppercase; color: #9ca3af; font-weight: bold; display: block; margin-top: 3px;">Dept Points Earned</span>',
    '      </div>',
    '    </div>',
    '    ',
    '    ' + mtssSection,
    '    ',
    '    <div style="margin-top: 25px; border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">',
    '      <a href="https://github.com/DarthRyan-explore/PBIS-Portal" target="_blank" style="background-color: #0c2346; color: #ffcc04; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 11px; text-transform: uppercase; display: inline-block; border: 1px solid #ffcc04/20; letter-spacing: 0.5px;">View Public Scoreboard</a>',
    '    </div>',
    '  </div>',
    '  ',
    '  <!-- Footer -->',
    '  <div style="background-color: #f3f4f6; color: #9ca3af; font-size: 10px; text-align: center; padding: 15px; border-top: 1px solid #e5e7eb;">',
    '    © 2026 Copley-Fairlawn City School District. All rights reserved.<br>',
    '    CONFIDENTIAL: Internal staff report protected under school board policy.',
    '  </div>',
    '</div>'
  ].join('\n');
  
  return html;
}

/**
 * Scans Denise's Google Drive folder containing student MTSS JSON tracking sheets.
 * In a local simulation, it detects the environment and uses Node's filesystem module
 * to parse the mock files.
 *
 * PRODUCTION GOOGLE DRIVE BEHAVIOR:
 * 1. Locates the folder containing individual student JSON files by ID.
 * 2. Iterates through all files.
 * 3. Parses JSON content using Utilities and JSON.parse.
 * 4. Filters, compiles, and groups outstanding items by Teacher Email.
 *
 * @param {string} folderId The Google Drive Folder ID (simulated locally).
 * @returns {Object} Outstanding cases grouped by teacher email.
 */
function scanDeniseFolder(folderId) {
  var teacherGroups = {};
  
  // Detect if we are running in Node.js (Local Mock Simulation)
  if (typeof require !== 'undefined' && typeof process !== 'undefined') {
    try {
      var fs = require('fs');
      var path = require('path');
      // Resolve path to local mock directory
      var mockDir = path.resolve(__dirname, 'google-mock', 'denise-individual-sheets');
      if (fs.existsSync(mockDir)) {
        var files = fs.readdirSync(mockDir);
        files.forEach(function(fileName) {
          if (fileName.endsWith('.json')) {
            var filePath = path.join(mockDir, fileName);
            var fileContent = fs.readFileSync(filePath, 'utf8');
            try {
              var student = JSON.parse(fileContent);
              processStudentData(student, teacherGroups);
            } catch (err) {
              console.error("Local Mock: Error parsing " + fileName + ": " + err.message);
            }
          }
        });
        return teacherGroups;
      }
    } catch (nodeErr) {
      if (typeof Logger !== 'undefined') {
        Logger.log("Local Mock execution failed: " + nodeErr.toString());
      }
    }
  }

  // --- PRODUCTION GOOGLE DRIVE APPS SCRIPT PATH ---
  // If we reach here, we are running in the Google Workspace cloud environment
  if (typeof DriveApp !== 'undefined') {
    try {
      var folder = DriveApp.getFolderById(folderId || "YOUR_DENISE_FOLDER_ID_HERE");
      var files = folder.getFiles();
      
      while (files.hasNext()) {
        var file = files.next();
        var name = file.getName();
        if (name.toLowerCase().indexOf('.json') !== -1 || file.getMimeType() === "application/json") {
          try {
            var content = file.getBlob().getDataAsString();
            var student = JSON.parse(content);
            processStudentData(student, teacherGroups);
          } catch (parseError) {
            Logger.log("Production: Failed to parse student sheet " + name + ": " + parseError.toString());
          }
        }
      }
    } catch (driveError) {
      Logger.log("Production: Failed to read from Google Drive folder: " + driveError.toString());
    }
  } else {
    // If running in some other JS engine/browser sandboxes where DriveApp is not defined
    if (typeof Logger !== 'undefined') {
      Logger.log("DriveApp is not defined. Ensure you are running in Google Apps Script or a supported local Node environment.");
    }
  }

  return teacherGroups;
}

/**
 * Helper to process student JSON record and group by teacher email
 */
function processStudentData(student, teacherGroups) {
  if (!student || !student.teacherEmail) return;
  
  var email = student.teacherEmail.trim().toLowerCase();
  if (!teacherGroups[email]) {
    teacherGroups[email] = [];
  }
  
  // Extract and format clean details to avoid exposing full sensitive records
  teacherGroups[email].push({
    studentName: student.studentName || "Anonymous Student",
    class: student.class || "Unknown Course",
    mod: student.mod || "N/A",
    trigger: student.trigger || "General Check-In",
    startDate: student.startDate || "",
    durationWeeks: student.durationWeeks || 0,
    status: student.status || "Active",
    interactionsCount: (student.interactions || []).length,
    parentContactsCount: (student.parentContacts || []).length,
    lastInteraction: student.interactions && student.interactions.length > 0 
      ? student.interactions[student.interactions.length - 1].date 
      : "None"
  });
}

/**
 * Processes a list of VSO/Appreciation slips and calculates cumulative House and Department scores.
 * Implements the asymmetrical point economy and supports optional Pep Assembly overrides.
 *
 * ASYMMETRICAL POINT RULES:
 * 1. Student Shout-Out (Student-to-Staff VSO):
 *    - The student who sent the VSO earns 2 points for their House (Copley or Fairlawn).
 *    - The teacher's Department receives 10 points.
 * 2. Staff-to-Student Praise Slip (Staff-to-Student VSO):
 *    - The student who received the VSO earns 10 points for their House.
 *    - The teacher's Department receives 10 points.
 *
 * PEP ASSEMBLY OVERRIDES:
 * - pepOverrides.multiplier (number): Multiply all points earned from slips (e.g., 2.0 for double points).
 * - pepOverrides.flatPoints (object): Add flat point bonuses directly to houses (e.g., { "Copley": 100, "Fairlawn": 50 }).
 *
 * @param {Array<Object>} slips List of slip/VSO objects.
 * @param {Object} [pepOverrides] Optional overrides for Pep Assemblies.
 * @returns {Object} Cumulative results containing House and Department point totals.
 */
function calculateHousePoints(slips, pepOverrides) {
  var results = {
    houses: {
      "Seniors": 0,
      "Juniors": 0,
      "Sophomores": 0,
      "Freshmen": 0
    },
    departments: {}
  };

  // Safe check
  if (!slips || !Array.isArray(slips)) return results;
  
  // Resolve overrides
  pepOverrides = pepOverrides || {};
  var multiplier = parseFloat(pepOverrides.multiplier) || 1.0;
  var flatPoints = pepOverrides.flatPoints || {};

  // Department mapping helper (simulated inside Apps Script using the absolute source of truth)
  var STAFF_DEPARTMENTS = {
    // Math Department
    "Maggie Zook": "Math",
    "Allison Allen": "Math",
    "Doug Allen": "Math",
    "Michelle Flanagan": "Math",
    
    // English Department
    "Sarah Janiga": "English",
    "Kim Carothers": "English",
    "Amy Davis": "English",
    
    // Science Department
    "Patrick Bulford": "Science",
    "Alexandria Diana": "Science",
    "Joshua Eck": "Science",
    "Stephen Gambaccini": "Science",
    
    // Social Studies Department
    "Samantha Beagle": "Soc Studies",
    "Justin Beard": "Soc Studies",
    "Scott Chouinard": "Soc Studies",
    "Candice Chupek": "Soc Studies",
    "Jim Dies": "Soc Studies",
    
    // Support and Counseling
    "Amy Gray": "School Counseling",
    "Dan Campana": "School Counseling",
    "Christa Fuller": "School Counseling",
    
    // Other fallbacks
    "Lee Malcolm": "Spec Ed",
    "Maggie Steffen": "Spec Ed",
    "Tim Oden": "Music"
  };

  // Loop through slips
  slips.forEach(function(slip) {
    // Only count approved/valid slips
    if (slip.status && slip.status.toLowerCase() === "pending") {
      return; // Skip pending slips
    }

    var studentHouse = "Copley"; // Fallback default
    var staffName = "";
    var pointsToHouse = 0;
    var pointsToDept = 10; // 10 points base to department

    // Distinguish type:
    // If it's a student-to-staff shoutout, the sender is a student and the receiver is a staff member.
    // If it's a staff-to-student praise, the sender is a staff member and the receiver is a student.
    
    var isStaffToStudent = false;
    
    // We check if sender is a known student (in student house mapping)
    var senderName = slip.sender || slip.studentName || "";
    var receiverName = slip.receiver || slip.teacher || slip.teacherName || "";
    
    var senderIsStudent = STUDENT_HOUSE_MAPPING.hasOwnProperty(senderName);
    var receiverIsStudent = STUDENT_HOUSE_MAPPING.hasOwnProperty(receiverName);

    if (receiverIsStudent) {
      // Staff-to-Student Praise Slip
      isStaffToStudent = true;
      studentHouse = STUDENT_HOUSE_MAPPING[receiverName] || "Freshmen";
      staffName = senderName;
      pointsToHouse = 10; // Student VSO received = 10 pts
    } else {
      // Student-to-Staff Shoutout
      studentHouse = STUDENT_HOUSE_MAPPING[senderName] || "Freshmen";
      staffName = receiverName;
      pointsToHouse = 2; // Student VSO sent = 2 pts
    }

    // Apply multiplier
    var finalHousePoints = pointsToHouse * multiplier;
    var finalDeptPoints = pointsToDept * multiplier;

    // Credit House
    if (results.houses[studentHouse] !== undefined) {
      results.houses[studentHouse] += finalHousePoints;
    }

    // Credit Staff Department
    var dept = STAFF_DEPARTMENTS[staffName] || "General Staff";
    if (!results.departments[dept]) {
      results.departments[dept] = 0;
    }
    results.departments[dept] += finalDeptPoints;
  });

  // Apply flat Pep Assembly bonus points
  for (var house in flatPoints) {
    if (results.houses[house] !== undefined) {
      results.houses[house] += parseFloat(flatPoints[house]) || 0;
    }
  }

  return results;
}

/**
 * Automatically updates a Google Slides presentation with the latest approved featured shout-outs.
 * This function operates entirely within the secure Google Workspace ecosystem (FERPA-compliant),
 * reading approved shout-outs from the GenYES_Moderation_Queue sheet, and generating visual slides.
 *
 * How it works:
 * 1. Opens the target Slides Presentation by ID.
 * 2. Finds the second slide (or first slide) as a template.
 * 3. Clears old generated slides (keeping the template/title slide).
 * 4. Pulls the latest N approved shoutouts from the GenYES Moderation Queue sheet.
 * 5. For each shoutout, duplicates the template slide and replaces placeholders:
 *    - {{MESSAGE}} -> The appreciation text
 *    - {{TEACHER}} -> The target staff/teacher name
 *    - {{SENDER}} -> "Anonymous" or the student's name/ID depending on preference.
 *    - {{CATEGORY}} -> The appreciation category (e.g. GOAT VSO)
 * 
 * @param {string} presentationId The Google Slides File ID.
 * @param {number} [limit] Maximum number of shout-outs to display (default: 10).
 */
function updateFeaturedShoutOutSlides(presentationId, limit) {
  limit = limit || 10;
  if (!presentationId || presentationId === "YOUR_SLIDES_PRESENTATION_ID_HERE") {
    Logger.log("Google Slides update skipped: No valid presentationId provided.");
    return;
  }

  try {
    var deck = SlidesApp.openById(presentationId);
    var slides = deck.getSlides();
    if (slides.length === 0) {
      Logger.log("Error: Target Slides presentation is empty.");
      return;
    }

    // Use the first slide or second slide as the template
    // We assume the first slide is the Title/Intro, and the second slide is the Shout-out Template
    var templateSlide = slides.length > 1 ? slides[1] : slides[0];

    // Read approved shoutouts from GenYES Moderation Queue
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var modSheet = ss.getSheetByName(CONFIG.MODERATION_SHEET_NAME);
    if (!modSheet) {
      Logger.log("Moderation queue sheet not found. Cannot populate slides.");
      return;
    }

    var data = modSheet.getDataRange().getValues();
    var approvedShoutouts = [];

    // Columns: [0] Timestamp, [1] Sender, [2] House, [3] Target Staff, [4] Category, [5] Message, [6] Anonymous, [7] Status
    for (var i = data.length - 1; i >= 1; i--) {
      var status = data[i][7] ? data[i][7].toString().trim() : "";
      if (status.toLowerCase() === "approved") {
        var isAnonymous = data[i][6] && data[i][6].toString().toLowerCase() === "yes";
        approvedShoutouts.push({
          sender: isAnonymous ? "Anonymous Copley Indian" : (data[i][1] || "Anonymous"),
          teacher: data[i][3] || "Staff Member",
          category: data[i][4] || "Shout-out",
          message: data[i][5] || ""
        });
        if (approvedShoutouts.length >= limit) {
          break;
        }
      }
    }

    if (approvedShoutouts.length === 0) {
      Logger.log("No approved shout-outs found to push to slides.");
      return;
    }

    // Delete existing shout-out slides from previous runs to avoid growing indefinitely
    // We keep slide 0 (Title) and slide 1 (Template)
    var slidesToDelete = [];
    for (var j = slides.length - 1; j >= 2; j--) {
      slidesToDelete.push(slides[j]);
    }
    slidesToDelete.forEach(function(s) {
      s.remove();
    });

    // Generate new slides by duplicating the template slide
    approvedShoutouts.forEach(function(shoutout) {
      var newSlide = deck.appendSlide(templateSlide);
      
      // Replace placeholders in the newly created slide
      newSlide.replaceAllText("{{MESSAGE}}", shoutout.message);
      newSlide.replaceAllText("{{TEACHER}}", shoutout.teacher);
      newSlide.replaceAllText("{{SENDER}}", shoutout.sender);
      newSlide.replaceAllText("{{CATEGORY}}", shoutout.category);
    });

    Logger.log("Successfully generated " + approvedShoutouts.length + " featured shout-out slides!");
  } catch (err) {
    Logger.log("Failed to update Google Slides: " + err.toString());
  }
}

/**
 * Looks up a student's Grade/House in the Master_Roster tab by email or name.
 * Supports auto-resolving columns based on spreadsheet headers.
 *
 * Roster Sheet Layout expected:
 * - Column A: First Name
 * - Column B: Last Name
 * - Column C: Email
 * - Column D: Grade (9, 10, 11, 12)
 *
 * @param {string} email The verified email address from form submission.
 * @param {string} name The reconstructed sender full name.
 * @returns {string} The resolved House name (Seniors, Juniors, Sophomores, Freshmen).
 */
function lookupStudentGrade(email, name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var rosterSheet = ss.getSheetByName("Master_Roster");
  if (!rosterSheet) {
    // If the roster sheet doesn't exist yet, fall back to our hardcoded map
    Logger.log("Master_Roster sheet tab not found. Using hardcoded STUDENT_HOUSE_MAPPING fallback.");
    return STUDENT_HOUSE_MAPPING[name] || "Freshmen";
  }
  
  var data = rosterSheet.getDataRange().getValues();
  if (data.length <= 1) {
    return STUDENT_HOUSE_MAPPING[name] || "Freshmen";
  }
  
  // Resolve column indexes dynamically from headers
  var headers = data[0];
  var emailColIdx = -1;
  var gradeColIdx = -1;
  var firstColIdx = -1;
  var lastColIdx = -1;
  
  for (var c = 0; c < headers.length; c++) {
    var h = headers[c].toString().toLowerCase().trim();
    if (h.indexOf("email") !== -1) emailColIdx = c;
    else if (h.indexOf("grade") !== -1 || h.indexOf("house") !== -1 || h.indexOf("class") !== -1) gradeColIdx = c;
    else if (h.indexOf("first") !== -1) firstColIdx = c;
    else if (h.indexOf("last") !== -1) lastColIdx = c;
  }
  
  // Fallbacks if headers are not clearly matching
  if (emailColIdx === -1) emailColIdx = 2; // Default to Column C
  if (gradeColIdx === -1) gradeColIdx = 3; // Default to Column D
  
  // 1. Try email lookup (most secure, no typos)
  if (email) {
    var cleanEmail = email.trim().toLowerCase();
    for (var r = 1; r < data.length; r++) {
      var rowEmail = data[r][emailColIdx] ? data[r][emailColIdx].toString().trim().toLowerCase() : "";
      if (rowEmail === cleanEmail) {
        return normalizeGradeToHouse(data[r][gradeColIdx]);
      }
    }
  }
  
  // 2. Try name lookup (if email wasn't matched)
  if (name) {
    var cleanName = name.trim().toLowerCase();
    for (var r = 1; r < data.length; r++) {
      var fName = firstColIdx !== -1 && data[r][firstColIdx] ? data[r][firstColIdx].toString().trim() : "";
      var lName = lastColIdx !== -1 && data[r][lastColIdx] ? data[r][lastColIdx].toString().trim() : "";
      
      // Fallback if name is in a single column
      if (firstColIdx === -1 && lastColIdx === -1) {
        var rowName = data[r][0] ? data[r][0].toString().trim().toLowerCase() : "";
        if (rowName === cleanName) {
          return normalizeGradeToHouse(data[r][gradeColIdx]);
        }
      } else {
        var fullName = (fName + " " + lName).trim().toLowerCase();
        if (fullName === cleanName) {
          return normalizeGradeToHouse(data[r][gradeColIdx]);
        }
      }
    }
  }
  
  // 3. Fallback to hardcoded list, then to Freshmen
  return STUDENT_HOUSE_MAPPING[name] || "Freshmen";
}

/**
 * Normalizes grade integers or descriptions to matching UI House names.
 */
function normalizeGradeToHouse(gradeVal) {
  if (!gradeVal) return "Freshmen";
  var g = gradeVal.toString().trim().toLowerCase();
  
  if (g === "9" || g.indexOf("9th") !== -1 || g.indexOf("fresh") !== -1) return "Freshmen";
  if (g === "10" || g.indexOf("10th") !== -1 || g.indexOf("sopho") !== -1) return "Sophomores";
  if (g === "11" || g.indexOf("11th") !== -1 || g.indexOf("junior") !== -1) return "Juniors";
  if (g === "12" || g.indexOf("12th") !== -1 || g.indexOf("senior") !== -1) return "Seniors";
  
  // Return input directly if it matches our houses
  var capitalize = g.charAt(0).toUpperCase() + g.slice(1);
  if (["Seniors", "Juniors", "Sophomores", "Freshmen"].indexOf(capitalize) !== -1) {
    return capitalize;
  }
  
  return "Freshmen";
}

/**
 * Loads staff members dynamically from the Staff_Directory tab in Google Sheets.
 * Falls back to a default list if the sheet doesn't exist yet.
 *
 * Expected columns:
 * - Column A: Staff Name
 * - Column B: Email
 * - Column C: Department
 *
 * @returns {Object} Grouped directory metadata mapping.
 */
function getStaffDirectory() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Staff_Directory");
  var staff = {};
  
  if (!sheet) {
    // Fallback list to keep the system active before they paste the directory
    Logger.log("Staff_Directory sheet tab not found. Using default staff fallback list.");
    var defaultStaff = ["Sarah Janiga", "Lee Malcolm", "Maggie Steffen", "Amy Gray", "Tim Oden"];
    defaultStaff.forEach(function(s) {
      staff[s] = { 
        name: s, 
        email: s.toLowerCase().replace(" ", ".") + "@" + CONFIG.DISTRICT_DOMAIN, 
        dept: "General Staff" 
      };
    });
    return staff;
  }
  
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return staff;
  
  // Columns: [0] Staff Name, [1] Email, [2] Department
  for (var i = 1; i < data.length; i++) {
    var name = data[i][0] ? data[i][0].toString().trim() : "";
    var email = data[i][1] ? data[i][1].toString().trim().toLowerCase() : "";
    var dept = data[i][2] ? data[i][2].toString().trim() : "General Staff";
    
    if (name) {
      staff[name] = {
        name: name,
        email: email,
        dept: dept
      };
    }
  }
  
  return staff;
}

/**
 * Safety preview function. Sends a test copy of the dynamic, Ryan Reynolds-voiced
 * weekly digest directly to your logged-in Google inbox. 
 *
 * Open this in Google Apps Script toolbar, select 'sendTestDigestToMe', and click 'Run'.
 */
function sendTestDigestToMe() {
  var myEmail = Session.getActiveUser().getEmail();
  Logger.log("Compiling mock digest for testing...");
  
  var htmlBody = compileStaffDigestHTML("Test Instructor", 3, 2);
  
  MailApp.sendEmail({
    to: myEmail,
    subject: "🎨 Preview: Weekly PBIS Digest (Staff Copy) 🏹",
    htmlBody: htmlBody,
    name: CONFIG.EMAIL_SENDER_NAME
  });
  
  Logger.log("Test digest email successfully sent to " + myEmail);
}


