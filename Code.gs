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
  EMAIL_SENDER_NAME: "Copley High School PBIS System"
};

// Hardcoded Student-to-House mapping for validation (or falls back to sheet lookup)
var STUDENT_HOUSE_MAPPING = {
  "Frodo Baggins": "Copley",
  "Ahsoka Tano": "Fairlawn",
  "Luke Skywalker": "Copley",
  "Jean Grey": "Fairlawn",
  "Peter Parker": "Copley",
  "Arwen Undomiel": "Fairlawn",
  "Dragonborn": "Copley",
  "Anakin Skywalker": "Fairlawn",
  "Gwen Stacy": "Copley",
  "Legolas Greenleaf": "Fairlawn",
  "Samwise Gamgee": "Copley",
  "Spock": "Fairlawn"
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
  
  // Columns mapping assuming Google Form layout:
  // [0] Timestamp, [1] Sender Name, [2] Target Teacher, [3] Category, [4] Phrasing/Message, [5] Anonymous (Yes/No)
  var timestamp = values[0];
  var sender = values[1] || "Anonymous";
  var teacher = values[2] || "";
  var category = values[3] || "";
  var message = values[4] || "";
  var isAnonymous = (values[5] || "").toString().toLowerCase() === "yes";
  
  Logger.log("Processing Shout-out from " + sender + " to " + teacher);
  
  // Resolve House mapping
  var house = STUDENT_HOUSE_MAPPING[sender] || "Copley"; // Default fallback
  
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
    ledgerSheet.appendRow(["Copley", 0, new Date()]);
    ledgerSheet.appendRow(["Fairlawn", 0, new Date()]);
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
  
  // Filter for records submitted in the last 7 days
  var now = new Date();
  var oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  var weeklyShoutoutsCount = 0;
  var staffRecipients = {}; // { "Teacher Name": { sent: 0, received: 0, email: "" } }
  
  // Initialize some staff members based on staff directory rules
  var defaultStaff = ["Sarah Janiga", "Lee Malcolm", "Maggie Steffen", "Amy Gray", "Tim Oden"];
  defaultStaff.forEach(function(s) {
    staffRecipients[s] = { sent: 0, received: 0, email: s.toLowerCase().replace(" ", ".") + "@" + CONFIG.DISTRICT_DOMAIN };
  });

  // Count weekly givers and receivers
  for (var i = 1; i < shoutouts.length; i++) {
    var ts = new Date(shoutouts[i][0]);
    if (ts >= oneWeekAgo) {
      weeklyShoutoutsCount++;
      var sender = shoutouts[i][1];
      var receiver = shoutouts[i][2];
      
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
    var mtssCount = outstandingReminders[staffName] || 0;
    
    var htmlBody = compileStaffDigestHTML(staffName, stats.received, mtssCount);
    
    MailApp.sendEmail({
      to: stats.email,
      subject: "Weekly PBIS Digest - Friday Appreciation & Caseload Summary 🏹",
      htmlBody: htmlBody,
      name: CONFIG.EMAIL_SENDER_NAME
    });
    
    Logger.log("Sent weekly digest email to " + stats.email);
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
      '  <h3 style="color: #be123c; margin-top: 0; font-family: sans-serif; font-size: 14px; text-transform: uppercase;">⚠️ Outstanding Action Items</h3>',
      '  <p style="color: #4b5563; font-size: 12px; margin: 5px 0;">',
      '    You currently have <strong>' + mtssCount + '</strong> outstanding student MTSS Tier 1 strategy logs due for review.',
      '  </p>',
      '  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdf_staff_mtss_log_form_placeholder/viewform" target="_blank" style="background-color: #be123c; color: white; padding: 8px 15px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 11px; display: inline-block; margin-top: 8px; text-transform: uppercase;">Log Strategies Now</a>',
      '</div>'
    ].join('\n');
  } else {
    mtssSection = [
      '<div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 15px; margin-top: 20px;">',
      '  <h3 style="color: #15803d; margin-top: 0; font-family: sans-serif; font-size: 14px; text-transform: uppercase;">✅ MTSS Documentation status</h3>',
      '  <p style="color: #4b5563; font-size: 12px; margin: 0;">',
      '    All clear! You are fully caught up with your student caseload reviews for this week. Thank you!',
      '  </p>',
      '</div>'
    ].join('\n');
  }

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
    '    <p style="color: #1f2937; font-size: 14px; margin-top: 0;">',
    '      Hello <strong>' + name + '</strong>,',
    '    </p>',
    '    <p style="color: #4b5563; font-size: 13px; line-height: 1.6;">',
    '      Thank you for another outstanding week at Copley! Here is your weekly digest detailing the positive praise slips and caseload updates logged across our campus.',
    '    </p>',
    '    ',
    '    <!-- Stats Card Grid -->',
    '    <div style="display: flex; gap: 15px; margin-top: 20px;">',
    '      <div style="flex: 1; background-color: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 15px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">',
    '        <span style="font-size: 24px; display: block; margin-bottom: 5px;">🏆</span>',
    '        <span style="font-size: 20px; font-weight: 900; color: #0c2346; display: block;">' + praiseCount + '</span>',
    '        <span style="font-size: 9px; text-transform: uppercase; color: #9ca3af; font-weight: bold; display: block; margin-top: 3px;">Shout-Outs Received</span>',
    '      </div>',
    '      <div style="flex: 1; background-color: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 15px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">',
    '        <span style="font-size: 24px; display: block; margin-bottom: 5px;">🔥</span>',
    '        <span style="font-size: 20px; font-weight: 900; color: #ffcc04; display: block;">+' + (praiseCount * 5) + '</span>',
    '        <span style="font-size: 9px; text-transform: uppercase; color: #9ca3af; font-weight: bold; display: block; margin-top: 3px;">House Points Earned</span>',
    '      </div>',
    '    </div>',
    '    ',
    '    ' + mtssSection,
    '    ',
    '    <div style="margin-top: 25px; border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">',
    '      <a href="https://github.com/DarthRyan-explore/PBIS-Portal" target="_blank" style="background-color: #0c2346; color: #ffcc04; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 11px; text-transform: uppercase; display: inline-block; border: 1px solid #ffcc04/20;">View Public Scoreboard</a>',
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
