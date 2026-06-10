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
  SHOUTOUT_FORM_SHEET_NAME: "Form Responses 1", // Standard Student Google Forms target sheet name
  STAFF_FORM_SHEET_NAME: "Form Responses 2", // Standard Staff Google Forms target sheet name
  MTSS_SHEET_NAME: "MTSS_Interventions_Log",
  CC_SHEET_NAME: "Check_Connect_Logs",
  DISTRICT_DOMAIN: "copley-fairlawn.org",
  EMAIL_SENDER_NAME: "Copley High School PBIS System",
  DENISE_FOLDER_ID: "YOUR_DENISE_FOLDER_ID_HERE", // Folder ID containing student caseload JSONs
  MTSS_FORM_URL: "https://docs.google.com/forms/d/e/1FAIpQLSdf_staff_mtss_log_form_placeholder/viewform", // URL to staff MTSS Tier 1 logging Google Form
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
    if (!e) {
      Logger.log("onFormSubmitTrigger called manually with no event object.");
      return;
    }
    var range = e.range;
    var sheet = range ? range.getSheet() : null;
    var sheetName = sheet ? sheet.getName() : "";
    var values = e.values || (range ? range.getValues()[0] : null);
    
    Logger.log("Form submitted on sheet: '" + sheetName + "'");
    
    if (!values) {
      Logger.log("Error: No values found in submission event.");
      return;
    }
    
    Logger.log("Submitted values: " + JSON.stringify(values));
    
    var sysConfig = getSystemConfig();
    var studentFormSheet = CONFIG.SHOUTOUT_FORM_SHEET_NAME;
    var staffFormSheet = sysConfig.STAFF_FORM_SHEET_NAME || CONFIG.STAFF_FORM_SHEET_NAME || "Form Responses 2";
    
    var sheetNameLower = sheetName.toLowerCase().trim();
    
    if (sheetNameLower === studentFormSheet.toLowerCase().trim()) {
      processShoutoutSubmission(values, false);
    } else if (sheetNameLower === staffFormSheet.toLowerCase().trim()) {
      processShoutoutSubmission(values, true);
    } else {
      Logger.log("Form submit ignored: Sheet '" + sheetName + "' does not match expected student sheet '" + studentFormSheet + "' or staff sheet '" + staffFormSheet + "'");
    }
  } catch (error) {
    Logger.log("Error in onFormSubmitTrigger: " + error.toString());
  }
}

/**
 * Processes shout-out inputs, updates house points, and routes to Moderation Queue
 */
function processShoutoutSubmission(values, isStaffForm) {
  isStaffForm = isStaffForm === true;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Columns mapping:
  // [0] Timestamp, [1] Email Address (Collected verified email)
  // [2] First Name, [3] Last Name, [4] Target Name
  // For Student form: [5] Category, [6] Message, [7] Anonymous (Yes/No)
  // For Staff form: [5] Category, [6] Quick Pick, [7] Write-in
  var timestamp = values[0];
  var email = values[1] || "";
  var firstName = (values[2] || "").toString().trim();
  var lastName = (values[3] || "").toString().trim();
  var sender = (firstName + " " + lastName).trim() || (isStaffForm ? "Anonymous Staff" : "Anonymous Student");
  var teacher = values[4] || ""; // Target Student (for staff form) or target Staff (for student form)
  var category = values[5] || "";
  
  var message = "";
  var isAnonymous = false;
  
  if (isStaffForm) {
    var quickPick = values[6] ? values[6].toString().trim() : "";
    var writeIn = values[7] ? values[7].toString().trim() : "";
    message = writeIn || quickPick || "";
    isAnonymous = false; // Staff slips are never anonymous
  } else {
    message = values[6] || "";
    isAnonymous = (values[7] || "").toString().toLowerCase() === "yes";
  }
  
  Logger.log("Processing Shout-out from " + sender + " (" + email + ") to " + teacher + " (isStaffForm=" + isStaffForm + ")");
  
  // Resolve if the submitter is a staff member
  var staffDirectory = getStaffDirectory();
  var isStaffSender = false;
  if (email) {
    var cleanEmail = email.trim().toLowerCase();
    var districtDomain = CONFIG.DISTRICT_DOMAIN || "copley-fairlawn.org";
    var domainSuffix = "@" + districtDomain.toLowerCase().trim();
    if (cleanEmail.endsWith(domainSuffix)) {
      isStaffSender = true;
    } else {
      for (var sName in staffDirectory) {
        if (staffDirectory[sName].email.toLowerCase().trim() === cleanEmail) {
          isStaffSender = true;
          break;
        }
      }
    }
  }
  if (!isStaffSender && sender) {
    var cleanSender = sender.trim().toLowerCase();
    for (var sName in staffDirectory) {
      if (sName.toLowerCase().trim() === cleanSender) {
        isStaffSender = true;
        break;
      }
    }
  }
  
  var house = "Freshmen";
  var points = 2; // Default student-to-staff points (sender gets 2 points)
  var status = "Pending";
  var auditedBy = "";
  var auditDate = "";
  var featureOnTv = false;
  
  if (isStaffForm) {
    if (isStaffSender) {
      // Valid Staff-to-Student Praise Slip
      // Target is a student, we resolve their house by name
      house = lookupStudentGrade("", teacher);
      points = 10; // Student receiver gets 10 points
      status = "Approved";
      auditedBy = "Auto-Approved (Staff)";
      auditDate = new Date();
      featureOnTv = false; // Kept unchecked by default to prevent TV flooding!
      Logger.log("Staff-to-Student VSO detected. Recipient: " + teacher + " (" + house + ") gets " + points + " house points (Auto-Approved).");
    } else {
      // Security warning: Student tried to spoof the staff form!
      status = "Rejected";
      auditedBy = "System Security (Unauthorized Student Submitter)";
      auditDate = new Date();
      points = 0;
      Logger.log("SECURITY WARNING: Student " + sender + " (" + email + ") attempted to submit to the Staff Praise Form! Auto-rejected.");
    }
  } else {
    // Student-to-Staff Shout-out
    house = lookupStudentGrade(email, sender);
    points = 2; // Student sender gets 2 points
    Logger.log("Student-to-Staff VSO detected. Sender: " + sender + " (" + house + ") gets " + points + " house points.");
  }
  
  // 1. Log transaction to House Cup ledger (only if not rejected)
  if (points > 0) {
    updateHouseCupLedger(ss, house, points);
  }
  
  // 2. Append to GenYES Moderation Queue sheet
  var modSheet = ss.getSheetByName(CONFIG.MODERATION_SHEET_NAME);
  if (!modSheet) {
    modSheet = ss.insertSheet(CONFIG.MODERATION_SHEET_NAME);
    modSheet.appendRow(["Timestamp", "Sender", "House", "Target Staff", "Category", "Message", "Anonymous", "Status", "Audited By", "Audit Date", "Feature on TV?"]);
    modSheet.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#0c2346").setFontColor("#ffcc04");
  }
  
  modSheet.appendRow([
    timestamp,
    sender,
    house, // Storing student's house (sender for student-to-staff, recipient for staff-to-student)
    teacher,
    category,
    message,
    isAnonymous ? "Yes" : "No",
    status,
    auditedBy,
    auditDate,
    featureOnTv
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
 * Loads system configuration settings from the "_System_Config" sheet tab dynamically.
 * If the sheet doesn't exist, it falls back to hardcoded CONFIG defaults.
 * This keeps private folder IDs and form links safe from open-source repositories.
 */
function getSystemConfig() {
  var config = {
    DENISE_FOLDER_ID: CONFIG.DENISE_FOLDER_ID,
    MTSS_FORM_URL: CONFIG.MTSS_FORM_URL,
    STAFF_FORM_SHEET_NAME: CONFIG.STAFF_FORM_SHEET_NAME
  };
  
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = ss.getSheets();
    var sheet = null;
    for (var i = 0; i < sheets.length; i++) {
      var nameNormalized = sheets[i].getName().toLowerCase().replace(/[\s_]/g, "");
      if (nameNormalized === "systemconfig") {
        sheet = sheets[i];
        break;
      }
    }
    
    if (sheet) {
      var data = sheet.getDataRange().getValues();
      for (var i = 0; i < data.length; i++) {
        var key = data[i][0] ? data[i][0].toString().trim() : "";
        var val = data[i][1] ? data[i][1].toString().trim() : "";
        if (key && val) {
          config[key] = val;
        }
      }
    }
  } catch (err) {
    if (typeof Logger !== 'undefined') {
      Logger.log("getSystemConfig Error: " + err.toString());
    }
  }
  
  return config;
}

/**
 * Compiles and distributes weekly HTML email digests to students and staff
 * Scheduled to run automatically on Friday afternoons
 */
function sendWeeklyDigest() {
  Logger.log("Compiling Weekly HTML Digests...");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sysConfig = getSystemConfig();
  
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
  var senderColIdx = -1;
  var msgColIdx = -1;
  
  for (var c = 0; c < headers.length; c++) {
    var h = headers[c].toString().toLowerCase().trim();
    if (h.indexOf("staff") !== -1 || h.indexOf("teacher") !== -1) {
      teacherColIdx = c;
    } else if (h.indexOf("first name") !== -1 || h.indexOf("sender") !== -1 || h.indexOf("your name") !== -1) {
      senderColIdx = c;
    } else if (h.indexOf("message") !== -1 || h.indexOf("shoutout") !== -1 || h.indexOf("praise") !== -1) {
      msgColIdx = c;
    }
  }
  if (teacherColIdx === -1) teacherColIdx = 4; // Default to Column E (index 4)
  if (senderColIdx === -1) senderColIdx = 2; // Default fallback
  if (msgColIdx === -1) msgColIdx = 6;    // Default fallback
  
  // Filter for records submitted in the last 7 days (for shoutouts received)
  var now = new Date();
  var oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  var weeklyShoutoutsCount = 0;
  
  // Load staff recipients dynamically from the Staff_Directory sheet tab
  var staffRecipients = getStaffDirectory();
  
  // Reset/Initialize weekly counters
  for (var name in staffRecipients) {
    staffRecipients[name].received = 0;
  }

  // Count weekly shout-outs & collect messages
  var teacherWeeklyVSOs = {};
  for (var staffName in staffRecipients) {
    teacherWeeklyVSOs[staffName] = [];
  }
  
  // Calculate cumulative department points
  var deptPoints = {};

  for (var i = 1; i < shoutouts.length; i++) {
    var receiver = shoutouts[i][teacherColIdx] ? shoutouts[i][teacherColIdx].toString().trim() : "";
    if (receiver && staffRecipients[receiver]) {
      var dept = staffRecipients[receiver].dept || "General Staff";
      deptPoints[dept] = (deptPoints[dept] || 0) + 10;
      
      // Check if submitted in the last 7 days
      var ts = new Date(shoutouts[i][0]);
      if (ts >= oneWeekAgo) {
        weeklyShoutoutsCount++;
        staffRecipients[receiver].received++;
        
        var sender = shoutouts[i][senderColIdx] ? shoutouts[i][senderColIdx].toString().trim() : "Anonymous";
        var msg = shoutouts[i][msgColIdx] ? shoutouts[i][msgColIdx].toString().trim() : "";
        var isAnon = shoutouts[i][7] && shoutouts[i][7].toString().toLowerCase().trim() === "yes";
        if (isAnon) {
          sender = "Anonymous";
        }
        teacherWeeklyVSOs[receiver].push({ sender: sender, message: msg });
      }
    }
  }
  
  // Sort departments by points
  var sortedDepts = [];
  for (var d in deptPoints) {
    sortedDepts.push({ name: d, points: deptPoints[d] });
  }
  sortedDepts.sort(function(a, b) { return b.points - a.points; });
  
  // 3. Compile MTSS Logs by student name -> array of submission timestamps
  var studentLogDates = {};
  if (mtssLogs.length > 1) {
    var mtssHeaders = mtssLogs[0];
    var studentFirstCol = -1;
    var studentLastCol = -1;
    
    for (var c = 0; c < mtssHeaders.length; c++) {
      var h = mtssHeaders[c].toString().toLowerCase().trim();
      if (h.indexOf("first name") !== -1 || h.indexOf("student first") !== -1) studentFirstCol = c;
      else if (h.indexOf("last name") !== -1 || h.indexOf("student last") !== -1) studentLastCol = c;
    }
    
    if (studentFirstCol === -1) studentFirstCol = 2; // Column C fallback
    if (studentLastCol === -1) studentLastCol = 3;  // Column D fallback
    
    for (var i = 1; i < mtssLogs.length; i++) {
      var logTs = new Date(mtssLogs[i][0]);
      var fName = mtssLogs[i][studentFirstCol] ? mtssLogs[i][studentFirstCol].toString().trim() : "";
      var lName = mtssLogs[i][studentLastCol] ? mtssLogs[i][studentLastCol].toString().trim() : "";
      var fullName = (fName + " " + lName).trim().toLowerCase();
      if (fullName) {
        if (!studentLogDates[fullName]) {
          studentLogDates[fullName] = [];
        }
        studentLogDates[fullName].push(logTs);
      }
    }
  }

  // 4. Scan Denise's folder to find active student caseloads grouped by teacher email
  var teacherCaseloads = scanDeniseFolder(sysConfig.DENISE_FOLDER_ID);
  
  var outstandingReminders = {}; // Maps staffName -> Array of outstanding student objects
  var activeCaseloadSizes = {}; // Maps staffName -> count
  
  for (var staffName in staffRecipients) {
    var stats = staffRecipients[staffName];
    var teacherEmail = stats.email ? stats.email.trim().toLowerCase() : "";
    var caseload = teacherCaseloads[teacherEmail] || [];
    
    var outstandingStudents = [];
    var activeCount = 0;
    
    caseload.forEach(function(student) {
      if (student.status && student.status.toLowerCase() === "active") {
        activeCount++;
        var cleanStudentName = student.studentName.trim().toLowerCase();
        
        // Find if they have been logged on/after their caseload start date
        var isLogged = false;
        var startTs = student.startDate ? new Date(student.startDate) : new Date(0);
        
        var logs = studentLogDates[cleanStudentName] || [];
        for (var j = 0; j < logs.length; j++) {
          if (logs[j] >= startTs) {
            isLogged = true;
            break;
          }
        }
        
        if (!isLogged) {
          outstandingStudents.push({
            name: student.studentName,
            class: student.class || "Unknown Course",
            mod: student.mod || "N/A",
            trigger: student.trigger || "Failing Class"
          });
        }
      }
    });
    
    outstandingReminders[staffName] = outstandingStudents;
    activeCaseloadSizes[staffName] = activeCount;
  }

  // Send digests to staff
  for (var staffName in staffRecipients) {
    var stats = staffRecipients[staffName];
    
    // Safety check: if they have no email configured, skip
    if (!stats.email) continue;
    
    // Check if staff classification is Teacher (support staff don't do MTSS strategy reviews)
    var isTeacher = stats.classification ? stats.classification.toLowerCase().indexOf("teacher") !== -1 : true;
    var outstandingList = isTeacher ? (outstandingReminders[staffName] || []) : [];
    var mtssCount = outstandingList.length;
    var activeCaseloadCount = isTeacher ? (activeCaseloadSizes[staffName] || 0) : 0;
    var weeklyVSOs = teacherWeeklyVSOs[staffName] || [];
    var teacherDept = stats.dept || "General Staff";
    
    var htmlBody = compileStaffDigestHTML(
      staffName, 
      stats.received, 
      mtssCount, 
      isTeacher, 
      activeCaseloadCount, 
      outstandingList,
      weeklyVSOs,
      sortedDepts,
      teacherDept
    );
    
    if (CONFIG.DEBUG_MODE) {
      Logger.log("[DEBUG MODE] Would send email to: " + stats.email + " with Subject: Weekly PBIS Digest (Teacher: " + isTeacher + ")");
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
/**
 * Helper to build a pre-filled Google Form URL for a specific student's caseload intervention.
 * Reads field parameter IDs from _System_Config sheet tab if present (e.g. entry.12345).
 */
function getPreFilledFormUrl(s, sysConfig) {
  var url = sysConfig.MTSS_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSdf_staff_mtss_log_form_placeholder/viewform";
  if (url.indexOf("viewform") === -1) return url;
  
  var params = [];
  
  // Try to parse first and last name
  var nameParts = s.name.trim().split(" ");
  var firstName = nameParts[0] || "";
  var lastName = nameParts.slice(1).join(" ") || "";
  
  // Load entry IDs from configuration dynamically
  var entryFirstName = sysConfig.FORM_FIELD_FIRST_NAME || "entry.111111"; // Default placeholders
  var entryLastName = sysConfig.FORM_FIELD_LAST_NAME || "entry.222222";
  var entryClass = sysConfig.FORM_FIELD_CLASS || "entry.333333";
  var entryMod = sysConfig.FORM_FIELD_MOD || "entry.444444";
  var entryReferral = sysConfig.FORM_FIELD_REFERRAL || "entry.555555";
  
  if (firstName) params.push(entryFirstName + "=" + encodeURIComponent(firstName));
  if (lastName) params.push(entryLastName + "=" + encodeURIComponent(lastName));
  if (s.class) params.push(entryClass + "=" + encodeURIComponent(s.class));
  if (s.mod) params.push(entryMod + "=" + encodeURIComponent(s.mod));
  
  // Pre-fill the referral trigger. If blank/missing, default to "Unknown"
  var triggerVal = s.trigger ? s.trigger.trim() : "Unknown";
  params.push(entryReferral + "=" + encodeURIComponent(triggerVal));
  
  if (params.length > 0) {
    var separator = url.indexOf("?") === -1 ? "?" : "&";
    return url + separator + params.join("&");
  }
  return url;
}

/**
 * Compiles a beautifully formatted Copley High School HTML newsletter for Staff
 */
function compileStaffDigestHTML(name, praiseCount, mtssCount, isTeacher, activeCaseloadCount, outstandingStudents, weeklyVSOs, sortedDepts, teacherDept) {
  isTeacher = isTeacher !== false; // Default to true if not specified
  activeCaseloadCount = activeCaseloadCount || 0;
  praiseCount = praiseCount || 0;
  weeklyVSOs = weeklyVSOs || [];
  sortedDepts = sortedDepts || [];
  teacherDept = teacherDept || "General Staff";
  
  var mtssSection = "";
  var sysConfig = getSystemConfig();
  
  if (isTeacher) {
    if (activeCaseloadCount === 0) {
      var mtssNoCaseloads = [
        "You currently have no students on your active Tier 1 caseload. You have successfully Matrix-dodged additional paperwork this week. Enjoy the peace while it lasts.",
        "Your active caseload is currently empty. No strategy logging required. Go ahead and take credit for a job well done anyway.",
        "No active caseload students assigned to you this week. Zero paperwork due. Have a relaxing, form-free weekend!"
      ];
      var mtssNoCaseloadText = mtssNoCaseloads[Math.floor(Math.random() * mtssNoCaseloads.length)];
      
      mtssSection = [
        '<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-top: 25px;">',
        '  <h3 style="color: #5e738b; margin-top: 0; font-family: Arial, sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">📋 MTSS Caseload: Empty</h3>',
        '  <p style="color: #36506e; font-size: 13px; margin: 0; line-height: 1.6;">',
        '    ' + mtssNoCaseloadText,
        '  </p>',
        '</div>'
      ].join('\n');
    } else if (mtssCount > 0) {
      var mtssWarnings = [
        "Look, we all love paperwork. Okay, maybe not. But you currently have outstanding student MTSS Tier 1 strategy logs due. Let\'s get these documented so we can pretend we have our lives completely together.",
        "A quick heads-up: there are outstanding MTSS Tier 1 strategy logs with your name on them. Let\'s get these filed before Denise has to hunt us down.",
        "Friendly reminder (or as friendly as an automated bot can be): you have active caseload students missing their weekly MTSS log. Click below to make the red box go away.",
        "Just a minor detail, but you\'ve got student MTSS logs outstanding this week. Take a quick moment to log them so we can keep the records clean and tidy."
      ];
      var mtssWarningText = mtssWarnings[Math.floor(Math.random() * mtssWarnings.length)];
      
      var studentRows = [];
      (outstandingStudents || []).forEach(function(s) {
        var preFilledUrl = getPreFilledFormUrl(s, sysConfig);
        var triggerText = s.trigger || "Unknown";
        studentRows.push(
          '    <li style="margin-bottom: 10px; line-height: 1.5; color: #334155;">',
          '      <strong style="color: #0c2346; font-size: 13px;">' + s.name + '</strong> — <em style="color: #475569; font-size: 13px;">' + s.class + ' (' + s.mod + ')</em>',
          '      <span style="font-size: 11px; color: #64748b; display: block; margin: 2px 0 4px 0;">Referral: ' + triggerText + '</span>',
          '      <a href="' + preFilledUrl + '" target="_blank" style="background-color: #be123c; color: #ffffff; padding: 3px 10px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 10px; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;">Log Intervention</a>',
          '    </li>'
        );
      });
      
      mtssSection = [
        '<div style="background-color: #fff1f2; border: 1px solid #fecdd3; border-radius: 12px; padding: 20px; margin-top: 25px;">',
        '  <h3 style="color: #be123c; margin-top: 0; font-family: Arial, sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">⚠️ MTSS Strategy Logs Outstanding</h3>',
        '  <p style="color: #4b5563; font-size: 13px; margin: 5px 0 15px 0; line-height: 1.6;">',
        '    ' + mtssWarningText,
        '  </p>',
        '  <ul style="margin: 0 0 10px 0; padding-left: 20px; line-height: 1.6; list-style-type: disc;">',
        studentRows.join('\n'),
        '  </ul>',
        '</div>'
      ].join('\n');
    } else {
      var mtssClears = [
        "Look at you. Zero outstanding MTSS logs. Go buy yourself a coffee, or take an extra long deep breath. You earned it.",
        "MTSS status: clean. Zero outstanding logs. You are officially an overachiever. Keep it up.",
        "No outstanding MTSS logs. Denise is happy, you\'re happy, I\'m happy. Well, as happy as code can get. Have a great weekend!",
        "Zero outstanding MTSS logs due. Seriously, teach us your secrets. Have a relaxing weekend."
      ];
      var mtssClearText = mtssClears[Math.floor(Math.random() * mtssClears.length)];
      
      mtssSection = [
        '<div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px; margin-top: 25px;">',
        '  <h3 style="color: #15803d; margin-top: 0; font-family: Arial, sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">✅ MTSS Review Status: Clear</h3>',
        '  <p style="color: #36506e; font-size: 13px; margin: 0; line-height: 1.6;">',
        '    ' + mtssClearText,
        '  </p>',
        '</div>'
      ].join('\n');
    }
  }

  // Witty greeting sentences (Ryan Reynolds style)
  var greetings = [];
  if (praiseCount > 0) {
    greetings = [
      "Hey " + name + ". Look at that, you made it to Friday. And turns out, people actually noticed you doing great things this week. You received " + praiseCount + " shout-out(s)!",
      "Well " + name + ", another week down. The good news? You\'ve got some fan mail. " + praiseCount + " shout-out(s), to be exact.",
      "Hey " + name + ". Grab a coffee and sit down. We compiled your weekly appreciation digest, and you actually did pretty great (+" + (praiseCount * 10) + " points for the " + teacherDept + " department).",
      "Hey " + name + ". Good news: you got " + praiseCount + " shout-out(s) this week. Bad news: I still don\'t have a coffee for you. But hey, take the win.",
      "Well, " + name + ", you did it. You survived the week, AND you actually managed to inspire some students. You\'ve got " + praiseCount + " shout-out(s) waiting."
    ];
  } else {
    greetings = [
      "Hey " + name + ". You made it to Friday. No specific shout-outs this week, but honestly, just getting to the weekend is a solid accomplishment.",
      "Well " + name + ", another week down. Quiet on the fan mail front this week, but we still appreciate you keeping the wheels turning.",
      "Hey " + name + ". Grab a coffee and relax. No shout-outs logged for you this week, but hey, less emails for you to read, right?",
      "Hey " + name + ". Happy Friday! The universe was quiet on the VSO front for you this week, but your department still needs you."
    ];
  }
  var greetingText = greetings[Math.floor(Math.random() * greetings.length)];

  // 1. Build weekly VSO list if they received any
  var vsoSection = "";
  if (weeklyVSOs.length > 0) {
    var vsoBlocks = [];
    weeklyVSOs.forEach(function(v) {
      vsoBlocks.push(
        '      <div style="margin-bottom: 14px; padding: 12px 16px; background-color: #fcfaf2; border-left: 4px solid #ffcc04; border-radius: 4px;">',
        '        <p style="color: #36506e; font-size: 13px; font-style: italic; margin: 0 0 8px 0; line-height: 1.5;">"' + v.message + '"</p>',
        '        <p style="color: #0c2346; font-size: 11px; font-weight: bold; margin: 0; text-align: right;">— ' + v.sender + '</p>',
        '      </div>'
      );
    });
    
    vsoSection = [
      '<div style="margin-top: 25px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">',
      '  <div style="background-color: #0c2346; padding: 12px 18px; border-bottom: 3px solid #ffcc04;">',
      '    <h3 style="margin: 0; color: #ffffff; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif; font-weight: bold;">📩 Friday Fan Mail</h3>',
      '  </div>',
      '  <div style="padding: 18px; background-color: #ffffff;">',
      vsoBlocks.join('\n'),
      '  </div>',
      '</div>'
    ].join('\n');
  }

  // 2. Build running scoreboard table
  var scoreboardRows = [];
  (sortedDepts || []).forEach(function(dept, idx) {
    var rank = idx + 1;
    var rankStr = rank.toString();
    if (rank === 1) rankStr = "🥇";
    else if (rank === 2) rankStr = "🥈";
    else if (rank === 3) rankStr = "🥉";
    
    var isTeacherDept = dept.name.toLowerCase() === teacherDept.toLowerCase();
    var rowBg = isTeacherDept ? "background-color: #fefcbf; border-left: 4px solid #ffcc04;" : (idx % 2 === 1 ? "background-color: #f8fafc;" : "background-color: #ffffff;");
    var rowWeight = isTeacherDept ? "font-weight: bold; color: #0c2346;" : "color: #36506e;";
    var labelSuffix = isTeacherDept ? ' <span style="font-size: 9px; background-color: #ffcc04; color: #0c2346; padding: 1px 5px; border-radius: 3px; font-weight: bold; margin-left: 4px; text-transform: uppercase; display: inline-block; vertical-align: middle;">You</span>' : "";
    
    scoreboardRows.push(
      '        <tr style="' + rowBg + '">',
      '          <td style="padding: 8px 10px; text-align: center; ' + rowWeight + '">' + rankStr + '</td>',
      '          <td style="padding: 8px 10px; ' + rowWeight + '">' + dept.name + labelSuffix + '</td>',
      '          <td style="padding: 8px 10px; text-align: right; ' + rowWeight + '">' + dept.points + ' pts</td>',
      '        </tr>'
    );
  });
  
  var scoreboardSection = "";
  if (sortedDepts.length > 0) {
    scoreboardSection = [
      '<div style="margin-top: 25px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">',
      '  <div style="background-color: #0c2346; padding: 12px 18px; border-bottom: 3px solid #ffcc04;">',
      '    <h3 style="margin: 0; color: #ffffff; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif; font-weight: bold;">🏆 Department Standings Scoreboard</h3>',
      '  </div>',
      '  <div style="padding: 15px; background-color: #ffffff;">',
      '    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; border-collapse: collapse; font-family: Arial, sans-serif;">',
      '      <thead>',
      '        <tr style="border-bottom: 2px solid #e2e8f0; text-align: left;">',
      '          <th style="padding: 6px 10px; font-weight: bold; color: #0c2346; width: 15%; text-align: center;">Rank</th>',
      '          <th style="padding: 6px 10px; font-weight: bold; color: #0c2346; width: 60%;">Department</th>',
      '          <th style="padding: 6px 10px; font-weight: bold; color: #0c2346; width: 25%; text-align: right;">Total Points</th>',
      '        </tr>',
      '      </thead>',
      '      <tbody>',
      scoreboardRows.join('\n'),
      '      </tbody>',
      '    </table>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  var actionButtonHtml = "";
  if (sysConfig.SLIDES_PRESENTATION_ID && sysConfig.SLIDES_PRESENTATION_ID !== "YOUR_SLIDES_PRESENTATION_ID_HERE" && sysConfig.SLIDES_PRESENTATION_ID !== "") {
    var slidesUrl = "https://docs.google.com/presentation/d/" + sysConfig.SLIDES_PRESENTATION_ID + "/present";
    actionButtonHtml = [
      '      <div style="margin-top: 35px; border-top: 1px solid #e2e8f0; padding-top: 25px; text-align: center;">',
      '        <a href="' + slidesUrl + '" target="_blank" style="background-color: #0c2346; color: #ffcc04; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 11px; text-transform: uppercase; display: inline-block; border: 2px solid #ffcc04; letter-spacing: 0.5px;">View Hallway TV Slideshow Loop</a>',
      '      </div>'
    ].join('\n');
  }

  var html = [
    '<div style="background-color: #eef2f6; padding: 30px 10px; font-family: Arial, Helvetica, sans-serif;">',
    '  <div style="max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(12,35,70,0.05); background-color: #ffffff;">',
    '    <!-- Header Banner -->',
    '    <div style="background-color: #0c2346; text-align: center; border-bottom: 6px solid #ffcc04; overflow: hidden; padding: 0;">',
    '      <img src="https://raw.githubusercontent.com/DarthRyan-explore/PBIS-Portal/google-workspace-pivot/assets/copley_pbis_banner.png?v=3" alt="Copley High School Weekly PBIS Staff Report" style="display: block; width: 100%; height: auto; max-width: 650px; margin: 0 auto;" />',
    '    </div>',
    '    ',
    '    <!-- Body -->',
    '    <div style="padding: 30px 25px; background-color: #ffffff;">',
    '      <p style="color: #1e293b; font-size: 15px; margin-top: 0; font-weight: bold; line-height: 1.5;">',
    '        ' + greetingText,
    '      </p>',
    '      <p style="color: #475569; font-size: 13px; line-height: 1.6;">',
    '        Here is your weekly summary of the Virtual Shout-Outs (VSOs) and points logged. Students who sent or received a shout-out are eligible to spin the PBIS prize wheel in the commons today (Friday) for some glorious rewards.',
    '      </p>',
    '      ',
    '      <!-- Stats Card Grid -->',
    '      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 20px; font-family: Arial, sans-serif;">',
    '        <tr>',
    '          <td width="48%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; text-align: center;">',
    '            <span style="font-size: 28px; display: block; margin-bottom: 8px;">✉️</span>',
    '            <span style="font-size: 24px; font-weight: 800; color: #0c2346; display: block;">' + praiseCount + '</span>',
    '            <span style="font-size: 10px; text-transform: uppercase; color: #64748b; font-weight: bold; display: block; margin-top: 4px; letter-spacing: 0.5px;">Shout-Outs Received</span>',
    '          </td>',
    '          <td width="4%">&nbsp;</td>',
    '          <td width="48%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; text-align: center;">',
    '            <span style="font-size: 28px; display: block; margin-bottom: 8px;">⚡</span>',
    '            <span style="font-size: 24px; font-weight: 800; color: #36506e; display: block;">+' + (praiseCount * 10) + '</span>',
    '            <span style="font-size: 10px; text-transform: uppercase; color: #64748b; font-weight: bold; display: block; margin-top: 4px; letter-spacing: 0.5px;">For ' + teacherDept + ' Dept</span>',
    '          </td>',
    '        </tr>',
    '      </table>',
    '      ',
    '      ' + vsoSection,
    '      ',
    '      ' + mtssSection,
    '      ',
    '      ' + scoreboardSection,
    '      ',
    actionButtonHtml,
    '    </div>',
    '    ',
    '    <!-- Footer -->',
    '    <div style="background-color: #f8fafc; color: #64748b; font-size: 10px; text-align: center; padding: 20px; border-top: 1px solid #e2e8f0; line-height: 1.5;">',
    '      © 2026 Copley-Fairlawn City School District. All rights reserved.<br>',
    '      CONFIDENTIAL: Internal staff report protected under school board policy.',
    '    </div>',
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
  
  // Clean folderId if a URL was passed
  if (folderId) {
    var match = folderId.toString().trim().match(/\/folders\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      folderId = match[1];
    } else {
      folderId = folderId.toString().trim();
    }
  }
  
  
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
function updateFeaturedShoutOutSlides(presentationId, limit, filterDirection) {
  limit = 12; // Enforce a hard cap of 12 featured slides at any given time to prevent slide flooding!
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

    // Determine the template slide index (0 if no Title/Intro slide, 1 if Title slide is present)
    var sysConfig = getSystemConfig();
    var templateIndex = 0; // Default to first slide (index 0) if not specified
    if (sysConfig.SLIDES_TEMPLATE_INDEX !== undefined && sysConfig.SLIDES_TEMPLATE_INDEX !== "") {
      templateIndex = parseInt(sysConfig.SLIDES_TEMPLATE_INDEX);
    }
    var templateSlide = slides[templateIndex] || slides[0];

    // Read approved shoutouts from GenYES Moderation Queue
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var modSheet = ss.getSheetByName(CONFIG.MODERATION_SHEET_NAME);
    if (!modSheet) {
      Logger.log("Moderation queue sheet not found. Cannot populate slides.");
      return;
    }

    var data = modSheet.getDataRange().getValues();
    var headers = data[0];
    
    // Dynamically find "Feature on TV" column
    var featureColIdx = -1;
    for (var c = 0; c < headers.length; c++) {
      var hName = headers[c].toString().toLowerCase().trim();
      if (hName.indexOf("feature") !== -1 || hName.indexOf("tv") !== -1) {
        featureColIdx = c;
        break;
      }
    }
    
    var approvedShoutouts = [];

    // Columns: [0] Timestamp, [1] Sender, [2] House, [3] Target Staff, [4] Category, [5] Message, [6] Anonymous, [7] Status
    for (var i = data.length - 1; i >= 1; i--) {
      var status = data[i][7] ? data[i][7].toString().trim() : "";
      
      var isFeatured = true;
      if (featureColIdx !== -1) {
        var featVal = data[i][featureColIdx] ? data[i][featureColIdx].toString().trim().toLowerCase() : "";
        isFeatured = (featVal === "yes" || featVal === "true" || featVal === "1" || data[i][featureColIdx] === true);
      }
      
      if (status.toLowerCase() === "approved" && isFeatured) {
        var senderName = data[i][1] || "Anonymous";
        var receiverName = data[i][3] || "Staff Member";
        
        // Determine if sender is staff
        var senderIsStaff = false;
        var auditedBy = data[i][8] ? data[i][8].toString().trim() : "";
        if (auditedBy === "Auto-Approved (Staff)") {
          senderIsStaff = true;
        } else {
          var staffDirectory = getStaffDirectory();
          if (senderName && staffDirectory.hasOwnProperty(senderName)) {
            senderIsStaff = true;
          }
        }
        
        var direction = senderIsStaff ? "staff_to_student" : "student_to_staff";
        
        // Filter by direction if specified
        if (filterDirection && filterDirection !== "all" && direction !== filterDirection) {
          continue;
        }
        
        var studentName = "";
        var teacherName = "";
        
        if (senderIsStaff) {
          studentName = receiverName; // Student is the receiver
          teacherName = senderName;   // Teacher is the sender
        } else {
          var isAnonymous = data[i][6] && data[i][6].toString().toLowerCase() === "yes";
          studentName = isAnonymous ? "Anonymous Copley Indian" : senderName;
          teacherName = receiverName;
        }
        
        approvedShoutouts.push({
          student: studentName,
          teacher: teacherName,
          category: data[i][4] || "Shout-out",
          message: data[i][5] || "",
          direction: direction
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
    // We keep all slides up to the template slide (inclusive)
    var slidesToDelete = [];
    var keepCount = templateIndex + 1;
    for (var j = slides.length - 1; j >= keepCount; j--) {
      slidesToDelete.push(slides[j]);
    }
    slidesToDelete.forEach(function(s) {
      s.remove();
    });

    // Generate new slides by duplicating the template slide
    approvedShoutouts.forEach(function(shoutout) {
      var newSlide = deck.appendSlide(templateSlide);
      
      // Build dynamic placeholders dictionary supporting all variations/typos
      var placeholders = {
        message: shoutout.message,
        teacher: shoutout.teacher,
        staff: shoutout.teacher,
        sender: shoutout.student,
        student: shoutout.student,
        category: shoutout.category
      };
      
      // Add custom TO and FROM based on direction
      if (shoutout.direction === "student_to_staff") {
        placeholders["to"] = shoutout.teacher;
        placeholders["from"] = shoutout.student;
      } else {
        placeholders["to"] = shoutout.student;
        placeholders["from"] = shoutout.teacher;
      }
      
      // Replace double-brace and single-brace variations
      for (var key in placeholders) {
        var val = placeholders[key];
        var keyUpper = key.toUpperCase();
        var keyLower = key.toLowerCase();
        
        newSlide.replaceAllText("{{" + keyUpper + "}}", val);
        newSlide.replaceAllText("{{" + keyLower + "}}", val);
        newSlide.replaceAllText("{" + keyUpper + "}", val);
        newSlide.replaceAllText("{" + keyLower + "}", val);
        newSlide.replaceAllText("{{ " + keyUpper + " }}", val);
        newSlide.replaceAllText("{{ " + keyLower + " }}", val);
      }
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
  
  // 2. Try exact name lookup
  if (name) {
    var cleanName = name.trim().toLowerCase().replace(/\s+/g, " ");
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
  
  // 3. Smart Name Resolver & Nickname Fallbacks
  if (name) {
    var cleanName = name.trim().toLowerCase().replace(/\s+/g, " ");
    var nameParts = cleanName.split(" ");
    
    if (nameParts.length >= 2) {
      var inputFirst = nameParts[0];
      var inputLast = nameParts[nameParts.length - 1];
      
      // Resolve common nicknames
      var nicknames = {
        "izzy": ["isabella", "elizabeth"],
        "bella": ["isabella"],
        "abby": ["abigail"],
        "alex": ["alexander", "alexandra", "alexis"],
        "ben": ["benjamin"],
        "chris": ["christopher", "christian"],
        "dan": ["daniel"],
        "gaby": ["gabrielle", "gabriela"],
        "gwen": ["gwendolyn"],
        "grey": ["gwen", "gwendolyn"],
        "jack": ["john"],
        "jake": ["jacob"],
        "josh": ["joshua"],
        "kate": ["katherine", "kaitlyn"],
        "luke": ["lucas"],
        "maddy": ["madeline", "madison"],
        "matt": ["matthew"],
        "max": ["maxwell", "maximilian"],
        "nick": ["nicholas"],
        "sam": ["samuel", "samantha"],
        "will": ["william"],
        "zach": ["zachary"]
      };
      
      var firstNamesToSearch = [inputFirst];
      if (nicknames.hasOwnProperty(inputFirst)) {
        firstNamesToSearch = firstNamesToSearch.concat(nicknames[inputFirst]);
      }
      
      for (var r = 1; r < data.length; r++) {
        var fName = firstColIdx !== -1 && data[r][firstColIdx] ? data[r][firstColIdx].toString().trim().toLowerCase() : "";
        var lName = lastColIdx !== -1 && data[r][lastColIdx] ? data[r][lastColIdx].toString().trim().toLowerCase() : "";
        
        if (lName === inputLast) {
          for (var k = 0; k < firstNamesToSearch.length; k++) {
            var searchName = firstNamesToSearch[k];
            if (fName.indexOf(searchName) === 0 || searchName.indexOf(fName) === 0) {
              Logger.log("Smart Name Lookup: Resolved '" + name + "' to '" + data[r][firstColIdx] + " " + data[r][lastColIdx] + "'");
              return normalizeGradeToHouse(data[r][gradeColIdx]);
            }
          }
        }
      }
      
      // 4. Try Unique Last Name Match (Tolkien resolving to Gwen Tolkien)
      var matchingRows = [];
      for (var r = 1; r < data.length; r++) {
        var lName = lastColIdx !== -1 && data[r][lastColIdx] ? data[r][lastColIdx].toString().trim().toLowerCase() : "";
        if (lName === inputLast) {
          matchingRows.push(r);
        }
      }
      if (matchingRows.length === 1) {
        var r = matchingRows[0];
        Logger.log("Smart Name Lookup: Resolved unique last name '" + name + "' to '" + data[r][firstColIdx] + " " + data[r][lastColIdx] + "'");
        return normalizeGradeToHouse(data[r][gradeColIdx]);
      }
    }
  }
  
  // 5. Fallback to hardcoded list, then to Freshmen
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
        dept: "General Staff",
        classification: "Teacher"
      };
    });
    return staff;
  }
  
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return staff;
  
  // Resolve column indexes dynamically from headers in Row 1
  var headers = data[0];
  var emailColIdx = -1;
  var deptColIdx = -1;
  var firstColIdx = -1;
  var lastColIdx = -1;
  var classColIdx = -1;
  
  for (var c = 0; c < headers.length; c++) {
    var h = headers[c].toString().toLowerCase().trim();
    if (h.indexOf("email") !== -1) emailColIdx = c;
    else if (h.indexOf("dept") !== -1 || h.indexOf("role") !== -1) deptColIdx = c;
    else if (h.indexOf("first") !== -1) firstColIdx = c;
    else if (h.indexOf("last") !== -1) lastColIdx = c;
    else if (h.indexOf("class") !== -1 || h.indexOf("type") !== -1) classColIdx = c;
  }
  
  // Fallbacks if headers are not clearly matching
  if (firstColIdx === -1) firstColIdx = 1; // Default to Column B
  if (lastColIdx === -1) lastColIdx = 0;   // Default to Column A
  if (classColIdx === -1) classColIdx = 2; // Default to Column C
  if (deptColIdx === -1) deptColIdx = 3;   // Default to Column D
  
  for (var i = 1; i < data.length; i++) {
    var fName = data[i][firstColIdx] ? data[i][firstColIdx].toString().trim() : "";
    var lName = data[i][lastColIdx] ? data[i][lastColIdx].toString().trim() : "";
    var name = (fName + " " + lName).trim();
    
    // Auto-generate fallback email if the email column doesn't exist or is empty
    var email = "";
    if (emailColIdx !== -1 && data[i][emailColIdx]) {
      email = data[i][emailColIdx].toString().trim().toLowerCase();
    } else if (fName && lName) {
      email = (fName + "." + lName).toLowerCase().replace(/\s+/g, "") + "@" + CONFIG.DISTRICT_DOMAIN;
    }
    
    var dept = deptColIdx !== -1 && data[i][deptColIdx] ? data[i][deptColIdx].toString().trim() : "General Staff";
    var classification = classColIdx !== -1 && data[i][classColIdx] ? data[i][classColIdx].toString().trim() : "Teacher";
    
    if (name) {
      staff[name] = {
        name: name,
        email: email,
        dept: dept,
        classification: classification
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
  
  var mockStudents = [
    { name: "Luke Skywalker", class: "English 11", mod: "Mod 14-15", trigger: "Academic Concern" },
    { name: "Frodo Baggins", class: "Biology", mod: "Mod 10-11", trigger: "Failing Class after 3 weeks" }
  ];
  
  var mockVSOs = [
    { sender: "Luke Skywalker", message: "Thank you for taking extra time to help me understand the essay format after mod 14! You\'re the best!" },
    { sender: "Anonymous Student", message: "Thanks for making science class so fun and engaging every day!" }
  ];
  
  var mockDepts = [
    { name: "English", points: 140 },
    { name: "Science", points: 110 },
    { name: "Math", points: 90 },
    { name: "Soc Studies", points: 80 },
    { name: "Art & Music", points: 60 }
  ];
  
  var htmlBody = compileStaffDigestHTML(
    "Test Instructor", 
    2, // praiseCount
    mockStudents.length, 
    true, // isTeacher
    4, // activeCaseloadCount
    mockStudents, 
    mockVSOs, 
    mockDepts, 
    "English" // teacherDept
  );
  
  MailApp.sendEmail({
    to: myEmail,
    subject: "🎨 Preview: Weekly PBIS Digest (Staff Copy) 🏹",
    htmlBody: htmlBody,
    name: CONFIG.EMAIL_SENDER_NAME
  });
  
  Logger.log("Test digest email successfully sent to " + myEmail);
}

/**
 * Compiles and returns secure, public-facing House Cup and Department standing points.
 * Excludes student names, emails, VSO texts, or MTSS comments to ensure FERPA compliance.
 *
 * @returns {Object} JSON-serializable public scoreboard data.
 */
function getPublicScoreboardData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Load House Cup Standings
  var houseScores = {
    "Seniors": 0,
    "Juniors": 0,
    "Sophomores": 0,
    "Freshmen": 0
  };
  
  var ledgerSheet = ss.getSheetByName(CONFIG.LEDGER_SHEET_NAME);
  if (ledgerSheet) {
    var ledgerData = ledgerSheet.getDataRange().getValues();
    for (var i = 1; i < ledgerData.length; i++) {
      var houseName = ledgerData[i][0] ? ledgerData[i][0].toString().trim() : "";
      var points = parseFloat(ledgerData[i][1]) || 0;
      if (houseName && houseScores.hasOwnProperty(houseName)) {
        houseScores[houseName] = points;
      }
    }
  }
  
  // 2. Load Department Standings
  var staffRecipients = getStaffDirectory();
  var deptPoints = {};
  
  var shoutoutSheet = ss.getSheetByName(CONFIG.SHOUTOUT_FORM_SHEET_NAME);
  if (shoutoutSheet) {
    var shoutouts = shoutoutSheet.getDataRange().getValues();
    if (shoutouts.length > 1) {
      var headers = shoutouts[0];
      var teacherColIdx = -1;
      for (var c = 0; c < headers.length; c++) {
        var h = headers[c].toString().toLowerCase().trim();
        if (h.indexOf("staff") !== -1 || h.indexOf("teacher") !== -1) {
          teacherColIdx = c;
          break;
        }
      }
      if (teacherColIdx === -1) teacherColIdx = 4; // Column E fallback
      
      for (var i = 1; i < shoutouts.length; i++) {
        var receiver = shoutouts[i][teacherColIdx] ? shoutouts[i][teacherColIdx].toString().trim() : "";
        if (receiver && staffRecipients[receiver]) {
          var dept = staffRecipients[receiver].dept || "General Staff";
          deptPoints[dept] = (deptPoints[dept] || 0) + 10;
        }
      }
    }
  }
  
  // Sort departments by points
  var sortedDepts = [];
  for (var d in deptPoints) {
    sortedDepts.push({ name: d, points: deptPoints[d] });
  }
  sortedDepts.sort(function(a, b) { return b.points - a.points; });
  
  return {
    houses: houseScores,
    departments: sortedDepts
  };
}

/**
 * Web App endpoint (REST API) serving real-time public scoreboard data.
 * Configured in Google Sheets under Deploy > New deployment > Web app.
 */
function doGet(e) {
  var data = getPublicScoreboardData();
  var JSONString = JSON.stringify(data);
  return ContentService.createTextOutput(JSONString).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Sheets Open Trigger. Creates a custom administrative menu toolbar item
 * for executing slide syncs and weekly digest distributions manually.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("🏹 PBIS Admin")
    .addItem("Sync Hallway TV Slides", "triggerSlidesSyncManual")
    .addItem("Send Friday Staff Digests Now", "sendWeeklyDigest")
    .addSeparator()
    .addItem("Trigger Setup Guide / Diagnostics", "showTriggerSetupGuide")
    .addToUi();
}

/**
 * Displays a popup dialog inside Google Sheets outlining the necessary triggers
 * to operate the PBIS ecosystem (Option 1 - Pure Google Workspace Model).
 */
function showTriggerSetupGuide() {
  var ui = SpreadsheetApp.getUi();
  var message = [
    "🏹 Copley High School PBIS System Setup Guide (Pure Google Workspace Model)",
    "===========================================================",
    "",
    "To enable automated Friday emails and real-time hallway TV Slide updates, you must configure three triggers in this Apps Script project:",
    "",
    "1. Form Submit Trigger (For student shout-outs):",
    "   - Function: onFormSubmitTrigger",
    "   - Event Source: From spreadsheet",
    "   - Event Type: On form submit",
    "",
    "2. Edit Trigger (For automatic GenYES Slides synchronization):",
    "   - Function: onEditTrigger",
    "   - Event Source: From spreadsheet",
    "   - Event Type: On edit",
    "   * (This automatically fills in 'Audited By', 'Audit Date', and syncs approved shout-outs to slides!)",
    "",
    "3. Weekly Timer Trigger (For Friday digest emails):",
    "   - Function: sendWeeklyDigest",
    "   - Event Source: Time-driven",
    "   - Type: Weekly timer (Every Friday, 3:00 PM to 4:00 PM)",
    "",
    "===========================================================",
    "Note: To configure these triggers, click the clock icon (Triggers) in the left panel of this editor, click '+ Add Trigger', and select the settings above.",
    "",
    "DEBUG MODE Status: " + (CONFIG.DEBUG_MODE ? "ACTIVE (Emails are simulated in logs)" : "OFF (Live emails will be sent)")
  ].join("\n");
  
  ui.alert("PBIS Admin Trigger Setup Guide", message, ui.ButtonSet.OK);
}

/**
 * Manual trigger for slides sync. Reads presentation ID from _System_Config sheet tab.
 */
function triggerSlidesSyncManual() {
  var sysConfig = getSystemConfig();
  var presentationId = sysConfig.SLIDES_PRESENTATION_ID;
  var staffPresentationId = sysConfig.STAFF_SLIDES_PRESENTATION_ID || sysConfig.STAFF_TO_STUDENT_SLIDES_ID;
  
  if ((!presentationId || presentationId === "YOUR_SLIDES_PRESENTATION_ID_HERE") && (!staffPresentationId || staffPresentationId === "YOUR_STAFF_SLIDES_PRESENTATION_ID_HERE")) {
    SpreadsheetApp.getUi().alert("Error: No valid SLIDES_PRESENTATION_ID or STAFF_SLIDES_PRESENTATION_ID found in _System_Config sheet tab. Please configure it first.");
    return;
  }
  
  SpreadsheetApp.getActiveSpreadsheet().toast("Starting Google Slides signage update...", "Slides Sync", 3);
  runSlidesSync(sysConfig);
  SpreadsheetApp.getActiveSpreadsheet().toast("Google Slides signage sync complete!", "Slides Sync", 5);
}

/**
 * Triggers slides synchronization for all configured presentations.
 */
function runSlidesSync(sysConfig) {
  var presentationId = sysConfig.SLIDES_PRESENTATION_ID;
  var staffPresentationId = sysConfig.STAFF_SLIDES_PRESENTATION_ID || sysConfig.STAFF_TO_STUDENT_SLIDES_ID;
  
  var hasStudentDeck = (presentationId && presentationId !== "YOUR_SLIDES_PRESENTATION_ID_HERE" && presentationId !== "");
  var hasStaffDeck = (staffPresentationId && staffPresentationId !== "YOUR_STAFF_SLIDES_PRESENTATION_ID_HERE" && staffPresentationId !== "" && staffPresentationId !== presentationId);
  
  if (hasStudentDeck) {
    if (hasStaffDeck) {
      // Sync student-to-staff to main presentation, staff-to-student to staff presentation
      updateFeaturedShoutOutSlides(presentationId, 15, "student_to_staff");
      updateFeaturedShoutOutSlides(staffPresentationId, 15, "staff_to_student");
    } else {
      // Sync all to the same presentation
      updateFeaturedShoutOutSlides(presentationId, 15);
    }
  } else if (hasStaffDeck) {
    // Sync only staff-to-student
    updateFeaturedShoutOutSlides(staffPresentationId, 15, "staff_to_student");
  } else {
    Logger.log("No valid slide presentations configured for sync.");
  }
}

/**
 * Installable Trigger function for Spreadsheet edits.
 * Automatically handles recording GenYES audit metadata and syncing to Google Slides.
 * 
 * @param {Object} e The Apps Script Edit event object.
 */
function onEditTrigger(e) {
  if (!e) return;
  var range = e.range;
  var sheet = range.getSheet();
  var sheetName = sheet.getName();
  
  // Only process edits on the GenYES Moderation Queue sheet
  if (sheetName !== CONFIG.MODERATION_SHEET_NAME) {
    return;
  }
  
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var statusColIdx = -1;
  var featureColIdx = -1;
  
  for (var c = 0; c < headers.length; c++) {
    var hName = headers[c].toString().toLowerCase().trim();
    if (hName.indexOf("status") !== -1) {
      statusColIdx = c;
    } else if (hName.indexOf("feature") !== -1 || hName.indexOf("tv") !== -1) {
      featureColIdx = c;
    }
  }
  
  if (statusColIdx === -1) statusColIdx = 7; // Column 8 fallback
  
  var statusCol = statusColIdx + 1;
  var featureCol = featureColIdx !== -1 ? featureColIdx + 1 : -1;
  
  var startRow = range.getRow();
  var endRow = range.getLastRow();
  var startCol = range.getColumn();
  var endCol = range.getLastColumn();
  
  // Detect if edited range overlaps status or feature columns
  var isStatusEdited = (startCol <= statusCol && endCol >= statusCol);
  var isFeatureEdited = (featureCol !== -1 && startCol <= featureCol && endCol >= featureCol);
  
  if (isStatusEdited || isFeatureEdited) {
    var runSync = true; // Always trigger a sync when these columns change to handle both checkbox additions and slide deletions
    var auditUser = "Unknown Operator";
    try {
      auditUser = Session.getActiveUser().getEmail() || "GenYES Operator";
    } catch(err) {
      auditUser = "GenYES Operator";
    }
    var auditDate = new Date();
    
    for (var r = startRow; r <= endRow; r++) {
      if (r === 1) continue; // Skip header row
      
      if (isStatusEdited) {
        var statusVal = sheet.getRange(r, statusCol).getValue().toString().trim();
        var statusValLower = statusVal.toLowerCase();
        
        if (statusValLower === "approved" || statusValLower === "rejected") {
          // Set Audited By in Column 9 (Col I)
          sheet.getRange(r, 9).setValue(auditUser);
          // Set Audit Date in Column 10 (Col J)
          sheet.getRange(r, 10).setValue(auditDate);
        }
      }
    }
    
    if (runSync) {
      var sysConfig = getSystemConfig();
      try {
        sheet.getParent().toast("Syncing approved shout-outs to Google Slides...", "Slides Sync", 3);
        runSlidesSync(sysConfig);
        sheet.getParent().toast("Google Slides signage sync complete!", "Slides Sync", 5);
      } catch(err) {
        Logger.log("Failed automatic Slides sync: " + err.toString());
      }
    }
  }
}





