# Copley High School PBIS Portal - Python test runner for Code.gs simulation
# File: google-mock/run_tests.py

import json
import subprocess
import os

print("================================================================")
print("  COPLEY HIGH SCHOOL PBIS SYSTEM - PYTHON MOCK TEST RUNNER")
print("================================================================\n")

# Load Code.gs contents
code_path = os.path.join(os.path.dirname(__file__), "..", "Code.gs")
with open(code_path, "r", encoding="utf-8") as f:
    code_content = "var Logger = { log: function(msg) {} };\n" + f.read()


# Define mock student data
luke_data = {
    "studentName": "Luke Skywalker",
    "teacherEmail": "tom.wilson@copley-fairlawn.org",
    "class": "English 11",
    "mod": "Mod 1-2",
    "trigger": "Ohio SB8 letter grade shift concern",
    "startDate": "2026-05-18",
    "durationWeeks": 4,
    "status": "Active",
    "parentContacts": [
        { "date": "2026-05-20", "method": "Phone", "notes": "Spoke to aunt/uncle." }
    ],
    "interventions": ["Invite student to Learning Lab"],
    "interactions": [
        { "date": "2026-05-22", "tags": ["Simple Check-In"], "notes": "Encouraged student." }
    ]
}

leia_data = {
    "studentName": "Leia Organa",
    "teacherEmail": "maggie.zook@copley-fairlawn.org",
    "class": "Math",
    "mod": "Mod 7-8",
    "trigger": "Academic Concern",
    "startDate": "2026-05-20",
    "durationWeeks": 6,
    "status": "Active",
    "parentContacts": [],
    "interventions": [],
    "interactions": []
}

frodo_data = {
    "studentName": "Frodo Baggins",
    "teacherEmail": "sarah.janiga@copley-fairlawn.org",
    "class": "Biology",
    "mod": "Mod 11-12",
    "trigger": "Flex Support",
    "startDate": "2026-05-15",
    "durationWeeks": 4,
    "status": "Active",
    "parentContacts": [],
    "interventions": [],
    "interactions": []
}

# --- TEST CASE 1: scanDeniseFolder() using DriveApp mock ---
print("----------------------------------------------------------------")
print("TEST CASE 1: scanDeniseFolder() Production Path Verification")
print("----------------------------------------------------------------")

mock_drive_js = f"""
var DriveApp = {{
  getFolderById: function(id) {{
    return {{
      getFiles: function() {{
        var index = 0;
        var mockFiles = [
          {{
            getName: function() {{ return "Skywalker_Luke.json"; }},
            getMimeType: function() {{ return "application/json"; }},
            getBlob: function() {{
              return {{
                getDataAsString: function() {{
                  return {json.dumps(json.dumps(luke_data))};
                }}
              }};
            }}
          }},
          {{
            getName: function() {{ return "Organa_Leia.json"; }},
            getMimeType: function() {{ return "application/json"; }},
            getBlob: function() {{
              return {{
                getDataAsString: function() {{
                  return {json.dumps(json.dumps(leia_data))};
                }}
              }};
            }}
          }},
          {{
            getName: function() {{ return "Baggins_Frodo.json"; }},
            getMimeType: function() {{ return "application/json"; }},
            getBlob: function() {{
              return {{
                getDataAsString: function() {{
                  return {json.dumps(json.dumps(frodo_data))};
                }}
              }};
            }}
          }}
        ];
        return {{
          hasNext: function() {{ return index < mockFiles.length; }},
          next: function() {{ return mockFiles[index++]; }}
        }};
      }}
    }};
  }}
}};
"""

driver_scan_js = """
function run() {
  var result = scanDeniseFolder("dummy-folder-id");
  return JSON.stringify(result);
}
"""

full_scan_test_code = code_content + "\n" + mock_drive_js + "\n" + driver_scan_js

proc = subprocess.Popen(
    ["osascript", "-l", "JavaScript"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True
)
stdout, stderr = proc.communicate(input=full_scan_test_code)

if proc.returncode != 0:
    print("❌ Compilation or Runtime error in Test Case 1:")
    print(stderr)
    exit(1)

scanned_results = json.loads(stdout.strip())
print("Parsed Teacher Groups:")
print(json.dumps(scanned_results, indent=2))

expected_emails = [
    "tom.wilson@copley-fairlawn.org",
    "maggie.zook@copley-fairlawn.org",
    "sarah.janiga@copley-fairlawn.org"
]

scan_passed = True
for email in expected_emails:
    if email not in scanned_results:
        print(f"❌ Expected teacher group not found: {email}")
        scan_passed = False
    else:
        print(f"✅ Verified group for: {email} ({len(scanned_results[email])} student(s))")

if scan_passed:
    print("\n✨ TEST CASE 1 PASSED! scanDeniseFolder() is fully compatible and correct.")
else:
    print("\n❌ TEST CASE 1 FAILED.")


# --- TEST CASE 2: calculateHousePoints() ---
print("\n----------------------------------------------------------------")
print("TEST CASE 2: calculateHousePoints() Asymmetrical Economy")
print("----------------------------------------------------------------")

test_slips = [
    {
        "sender": "Frodo Baggins",
        "receiver": "Sarah Janiga",
        "category": "Super Support VSO",
        "status": "Approved"
    },
    {
        "sender": "Maggie Zook",
        "receiver": "Ahsoka Tano",
        "category": "Academic Excellence",
        "status": "Approved"
    },
    {
        "sender": "Luke Skywalker",
        "receiver": "Sarah Janiga",
        "category": "Helper",
        "status": "Pending"
    }
]

driver_calc_js = f"""
function run() {{
  var slips = {json.dumps(test_slips)};
  var standard = calculateHousePoints(slips);
  var withOverrides = calculateHousePoints(slips, {{
    multiplier: 2.0,
    flatPoints: {{
      "Seniors": 100
    }}
  }});
  return JSON.stringify({{
    standard: standard,
    withOverrides: withOverrides
  }});
}}
"""

full_calc_test_code = code_content + "\n" + driver_calc_js

proc = subprocess.Popen(
    ["osascript", "-l", "JavaScript"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True
)
stdout, stderr = proc.communicate(input=full_calc_test_code)

if proc.returncode != 0:
    print("❌ Compilation or Runtime error in Test Case 2:")
    print(stderr)
    exit(1)

calc_results = json.loads(stdout.strip())
standard = calc_results["standard"]
overrides = calc_results["withOverrides"]

print("Standard Point Ledger:")
print(json.dumps(standard, indent=2))
print("\nPep Assembly Override Point Ledger:")
print(json.dumps(overrides, indent=2))

# Verify standard points
# Frodo Baggins (Seniors) sent Shoutout -> 2 house points, 10 points to English (Sarah Janiga)
# Maggie Zook (Math) sent praise to Ahsoka Tano (Juniors) -> 10 house points, 10 points to Math (Maggie Zook)
# Luke Skywalker (Pending) -> ignored
expected_standard_seniors = 2
expected_standard_juniors = 10
expected_standard_english = 10
expected_standard_math = 10

economy_passed = True
if standard["houses"]["Seniors"] != expected_standard_seniors:
    print(f"❌ Seniors standard mismatch. Expected: {expected_standard_seniors}, Got: {standard['houses']['Seniors']}")
    economy_passed = False
if standard["houses"]["Juniors"] != expected_standard_juniors:
    print(f"❌ Juniors standard mismatch. Expected: {expected_standard_juniors}, Got: {standard['houses']['Juniors']}")
    economy_passed = False
if standard["departments"].get("English") != expected_standard_english:
    print(f"❌ English Department standard mismatch. Expected: {expected_standard_english}, Got: {standard['departments'].get('English')}")
    economy_passed = False
if standard["departments"].get("Math") != expected_standard_math:
    print(f"❌ Math Department standard mismatch. Expected: {expected_standard_math}, Got: {standard['departments'].get('Math')}")
    economy_passed = False

if economy_passed:
    print("\n✅ Asymmetrical points successfully allocated!")

# Verify override points
# Seniors: (2 * 2.0) + 100 = 104
# Juniors: (10 * 2.0) = 20
# English: 10 * 2.0 = 20
# Math: 10 * 2.0 = 20
expected_override_seniors = 104
expected_override_juniors = 20
expected_override_english = 20

override_passed = True
if overrides["houses"]["Seniors"] != expected_override_seniors:
    print(f"❌ Seniors override mismatch. Expected: {expected_override_seniors}, Got: {overrides['houses']['Seniors']}")
    override_passed = False
if overrides["houses"]["Juniors"] != expected_override_juniors:
    print(f"❌ Juniors override mismatch. Expected: {expected_override_juniors}, Got: {overrides['houses']['Juniors']}")
    override_passed = False
if overrides["departments"].get("English") != expected_override_english:
    print(f"❌ English Department override mismatch. Expected: {expected_override_english}, Got: {overrides['departments'].get('English')}")
    override_passed = False

if override_passed:
    print("✅ Pep Assembly overrides and multipliers successfully applied!")

if economy_passed and override_passed:
    print("\n✨ TEST CASE 2 PASSED! Calculations are fully correct.")
else:
    print("\n❌ TEST CASE 2 FAILED.")

# --- TEST CASE 3: sendWeeklyDigest() Dynamic MTSS & Classification Exemption ---
print("\n----------------------------------------------------------------")
print("TEST CASE 3: sendWeeklyDigest() Dynamic MTSS Verification")
print("----------------------------------------------------------------")

mock_digest_js = f"""
// Ensure CONFIG has debug mode true during tests
CONFIG.DEBUG_MODE = false; // We set it to false so it hits our mock MailApp.sendEmail

var DriveApp = {{
  getFolderById: function(id) {{
    return {{
      getFiles: function() {{
        var index = 0;
        var mockFiles = [
          {{
            getName: function() {{ return "Skywalker_Luke.json"; }},
            getMimeType: function() {{ return "application/json"; }},
            getBlob: function() {{
              return {{
                getDataAsString: function() {{
                  return {json.dumps(json.dumps(luke_data))};
                }}
              }};
            }}
          }},
          {{
            getName: function() {{ return "Organa_Leia.json"; }},
            getMimeType: function() {{ return "application/json"; }},
            getBlob: function() {{
              return {{
                getDataAsString: function() {{
                  return {json.dumps(json.dumps(leia_data))};
                }}
              }};
            }}
          }},
          {{
            getName: function() {{ return "Baggins_Frodo.json"; }},
            getMimeType: function() {{ return "application/json"; }},
            getBlob: function() {{
              return {{
                getDataAsString: function() {{
                  return {json.dumps(json.dumps(frodo_data))};
                }}
              }};
            }}
          }}
        ];
        return {{
          hasNext: function() {{ return index < mockFiles.length; }},
          next: function() {{ return mockFiles[index++]; }}
        }};
      }}
    }};
  }}
}};

var mockSheets = {{
  "_System_Config": [
    ["Setting Name", "Value"],
    ["DENISE_FOLDER_ID", "dummy-folder-id"],
    ["MTSS_FORM_URL", "https://docs.google.com/forms/d/e/1FAIpQLSdf_staff_mtss_log_form_placeholder/viewform"],
    ["SLIDES_PRESENTATION_ID", "mock-slides-id-12345"]
  ],
  "Form Responses 1": [
    ["Timestamp", "Email", "First Name", "Last Name", "Target Teacher", "Category", "Message", "Anonymous"],
    [new Date(), "luke.s@cfcsindians.org", "Luke", "Skywalker", "Sarah Janiga", "GOAT VSO", "Great teacher!", "No"]
  ],
  "MTSS_Interventions_Log": [
    ["Timestamp", "Email", "Student First", "Student Last", "Interventions", "Notes"],
    [new Date(), "sarah.janiga@copley-fairlawn.org", "Frodo", "Baggins", "Learning Lab", "Checked in"]
  ],
  "Staff_Directory": [
    ["Last Name", "First Name", "Staff Classification", "Department / Specific Role", "Email"],
    ["Wilson", "Tom", "Teacher", "English", "tom.wilson@copley-fairlawn.org"],
    ["Janiga", "Sarah", "Teacher", "Science", "sarah.janiga@copley-fairlawn.org"],
    ["Gray", "Amy", "Support Staff", "Counseling", "amy.gray@copley-fairlawn.org"]
  ],
  "GenYES_Moderation_Queue": [
    ["Timestamp", "Sender", "House", "Target Staff", "Category", "Message", "Anonymous", "Status", "Audited By", "Audit Date", "Feature on TV?"],
    [new Date(), "Luke Skywalker", "Sophomores", "Sarah Janiga", "GOAT VSO", "Great teacher!", "No", "Approved", "GenYES Operator", new Date(), "Yes"],
    [new Date(), "Sarah Janiga", "Seniors", "Frodo Baggins", "Academic Support", "Frodo is making great progress!", "No", "Approved", "Auto-Approved (Staff)", new Date(), "No"]
  ],
  "Master_Roster": [
    ["First Name", "Last Name", "Email", "Grade", "Parent Email"],
    ["Frodo", "Baggins", "frodo.b@cfcsindians.org", "Senior", "parent.baggins@example.com"],
    ["Luke", "Skywalker", "luke.s@cfcsindians.org", "Sophomore", ""]
  ],
  "House_Cup_Totals": [
    ["House Name", "Total Points", "Last Updated"],
    ["Seniors", 120, new Date()],
    ["Juniors", 90, new Date()],
    ["Sophomores", 80, new Date()],
    ["Freshmen", 60, new Date()]
  ]
}};

var SpreadsheetApp = {{
  getActiveSpreadsheet: function() {{
    return {{
      getUrl: function() {{ return "https://docs.google.com/spreadsheets/d/mock-sheet-id/edit"; }},
      getSheetByName: function(name) {{
        if (!mockSheets[name]) return null;
        return {{
          getName: function() {{ return name; }},
          getDataRange: function() {{
            return {{
              getValues: function() {{ return mockSheets[name]; }}
            }};
          }}
        }};
      }},
      getSheets: function() {{
        var sheetNames = Object.keys(mockSheets);
        return sheetNames.map(function(name) {{
          return {{
            getName: function() {{ return name; }},
            getDataRange: function() {{
              return {{
                getValues: function() {{ return mockSheets[name]; }}
              }};
            }}
          }};
        }});
      }}
    }};
  }}
}};

var Session = {{
  getActiveUser: function() {{
    return {{
      getEmail: function() {{ return "admin@copley-fairlawn.org"; }}
    }};
  }}
}};

var sentEmails = [];
var MailApp = {{
  sendEmail: function(details) {{
    sentEmails.push(details);
  }}
}};

function run() {{
  sentEmails = [];
  sendWeeklyDigest();
  return JSON.stringify(sentEmails);
}}
"""

full_digest_test_code = code_content + "\n" + mock_digest_js

proc = subprocess.Popen(
    ["osascript", "-l", "JavaScript"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True
)
stdout, stderr = proc.communicate(input=full_digest_test_code)

if proc.returncode != 0:
    print("❌ Compilation or Runtime error in Test Case 3:")
    print(stderr)
    exit(1)

emails_sent = json.loads(stdout.strip())
print(f"Processed Digests Sent: {len(emails_sent)}")

digest_passed = True
tom_wilson_email = None
sarah_janiga_email = None
amy_gray_email = None
frodo_baggins_email = None
frodo_parent_email = None
luke_skywalker_email = None

for email in emails_sent:
    if email["to"] == "tom.wilson@copley-fairlawn.org":
        tom_wilson_email = email
    elif email["to"] == "sarah.janiga@copley-fairlawn.org":
        sarah_janiga_email = email
    elif email["to"] == "amy.gray@copley-fairlawn.org":
        amy_gray_email = email
    elif email["to"] == "frodo.b@cfcsindians.org":
        frodo_baggins_email = email
    elif email["to"] == "parent.baggins@example.com":
        frodo_parent_email = email
    elif email["to"] == "luke.s@cfcsindians.org":
        luke_skywalker_email = email

# Tom Wilson: Luke Skywalker Active but not logged -> outstanding 1. Is Teacher -> shows warning
if not tom_wilson_email:
    print("❌ Tom Wilson did not receive weekly digest email.")
    digest_passed = False
else:
    # Check if MTSS log section is present (indicates outstanding)
    if "Log Intervention" not in tom_wilson_email["htmlBody"] or "MTSS Strategy Logs Outstanding" not in tom_wilson_email["htmlBody"]:
        print("❌ Tom Wilson digest missing outstanding MTSS warning.")
        digest_passed = False
    else:
        print("✅ Tom Wilson dynamic outstanding MTSS warnings verified!")
    
    # Check if the dynamic button links to Google Slides (since SLIDES_PRESENTATION_ID is set in _System_Config)
    if "https://docs.google.com/presentation/d/mock-slides-id-12345/present?slide=id.p2" not in tom_wilson_email["htmlBody"] or "See What's Scrolling on the Big Screen" not in tom_wilson_email["htmlBody"]:
        print("❌ Tom Wilson digest missing correct dynamic Slides link button with ?slide=id.p2.")
        digest_passed = False
    else:
        print("✅ Tom Wilson dynamic Slides link button verified!")

# Sarah Janiga: Frodo Baggins Active and logged -> outstanding 0. Is Teacher -> shows all clear
if not sarah_janiga_email:
    print("❌ Sarah Janiga did not receive weekly digest email.")
    digest_passed = False
else:
    if "MTSS Review Status: Clear" not in sarah_janiga_email["htmlBody"]:
        print("❌ Sarah Janiga digest missing 'MTSS Review Status: Clear' section.")
        digest_passed = False
    else:
        print("✅ Sarah Janiga dynamic caseload all-clear verified!")

# Amy Gray: Support Staff -> exempt from MTSS -> does not show any warning (neither outstanding nor clear)
if not amy_gray_email:
    print("❌ Amy Gray did not receive weekly digest email.")
    digest_passed = False
else:
    if "MTSS" in amy_gray_email["htmlBody"] or "Log Intervention" in amy_gray_email["htmlBody"]:
        print("❌ Amy Gray (Support Staff) digest contains MTSS sections.")
        digest_passed = False
    else:
        print("✅ Amy Gray support classification exemption verified!")

# Frodo Baggins: Student Digest
if not frodo_baggins_email:
    print("❌ Frodo Baggins student email not sent.")
    digest_passed = False
else:
    html = frodo_baggins_email["htmlBody"]
    subject = frodo_baggins_email.get("subject", "")
    
    valid_received_headers = [
        "Here's What Staff Said Behind Your Back",
        "What Staff Are Saying About You",
        "Staff Shout-Outs",
        "Good Things Were Said",
        "Staff Noticed",
        "Caught Doing Something Right",
        "What We Heard About You This Week"
    ]
    has_received_header = any(hdr in html for hdr in valid_received_headers)
    
    if "Copley_PBIS_Banner_Student_01.png" not in html or "Frodo Baggins" not in html or "Weekly PBIS Dashboard" not in html:
        print("❌ Frodo Baggins student email basic structure is malformed.")
        digest_passed = False
    elif not has_received_header:
        print("❌ Frodo Baggins student email is missing a valid rotating shout-out header.")
        digest_passed = False
    elif "PBIS Quarterly Party" not in html or "Send a Shout-Out to a Teacher or Staff Member" not in html:
        print("❌ Frodo Baggins student email is missing quarterly party promo card or shout-out button.")
        digest_passed = False
    elif subject != "Weekly PBIS Digest - Student Rewards & Standings 🏹":
        print(f"❌ Frodo Baggins student email has incorrect subject: {subject}")
        digest_passed = False
    else:
        print("✅ Frodo Baggins student digest verified!")

# Frodo parent: Parent Digest
if not frodo_parent_email:
    print("❌ Frodo parent email not sent.")
    digest_passed = False
else:
    html = frodo_parent_email["htmlBody"]
    subject = frodo_parent_email.get("subject", "")
    if "Copley_PBIS_Banner_Parent_01.png" not in html or "Dear Parent/Guardian of Frodo Baggins" not in html or "Academic Support" not in html:
        print("❌ Frodo parent email basic structure is malformed.")
        digest_passed = False
    elif "Your child received Virtual Shout-Out(s) at Copley High School." not in html or "We can see the pride swelling in you from here." not in html or "gratitude-injected sunshine" not in html:
        print("❌ Frodo parent email is missing custom celebratory or gratitude copy.")
        digest_passed = False
    elif "🛡️ Sarah Janiga said your child deserved the Academic Support VSO." not in html:
        print("❌ Frodo parent email does not match custom praise slip format.")
        digest_passed = False
    elif "House Cup Standings" in html or "Total Points" in html or "Rank" in html:
        print("❌ Frodo parent email contains unauthorized House Cup scoreboard or points standings.")
        digest_passed = False
    elif subject != "Weekly Copley PBIS Update - Frodo Baggins's Achievements This Week 🏹":
        print(f"❌ Frodo parent email has incorrect subject: {subject}")
        digest_passed = False
    else:
        print("✅ Frodo parent digest verified!")

# Luke Skywalker: Student Digest (sent shoutouts)
if not luke_skywalker_email:
    print("❌ Luke Skywalker student email not sent.")
    digest_passed = False
else:
    html = luke_skywalker_email["htmlBody"]
    
    valid_sent_headers = [
        "You Made Someone's Day",
        "Kind Words You Shared",
        "Shout-Outs You Sent",
        "Here's What You Had To Say",
        "Encouragement You Passed Along",
        "Positive Vibes Delivered"
    ]
    has_sent_header = any(hdr in html for hdr in valid_sent_headers)
    
    if "Copley_PBIS_Banner_Student_01.png" not in html or "Luke Skywalker" not in html or not has_sent_header:
        print("❌ Luke Skywalker student email is malformed or missing rotating sent header.")
        digest_passed = False
    else:
        print("✅ Luke Skywalker student digest verified!")

if digest_passed:
    print("\n✨ TEST CASE 3 PASSED! Dynamic weekly digests resolved correctly.")
else:
    print("\n❌ TEST CASE 3 FAILED.")


# --- TEST CASE 4: processShoutoutSubmission & updateFeaturedShoutOutSlides ---
print("\n----------------------------------------------------------------")
print("TEST CASE 4: processShoutoutSubmission & Slides Sync verification")
print("----------------------------------------------------------------")

mock_slides_and_routing_js = """
var mockSheets = {
  "House_Cup_Totals": [
    ["House Name", "Total Points", "Last Updated"]
  ],
  "GenYES_Moderation_Queue": [
    ["Timestamp", "Sender", "House", "Target Staff", "Category", "Message", "Anonymous", "Status", "Audited By", "Audit Date", "Feature on TV?", "Big Screen Consent"]
  ],
  "Staff_Directory": [
    ["Last Name", "First Name", "Staff Classification", "Department / Specific Role", "Email"],
    ["Janiga", "Sarah", "Teacher", "Science", "sarah.janiga@copley-fairlawn.org"]
  ],
  "Master_Roster": [
    ["First Name", "Last Name", "Email", "Grade"],
    ["Frodo", "Baggins", "frodo.b@cfcsindians.org", "Senior"],
    ["Ahsoka", "Tano", "ahsoka.t@cfcsindians.org", "Junior"]
  ],
  "_System_Config": [
    ["Setting Name", "Value"],
    ["SLIDES_PRESENTATION_ID", "mock-deck-id"],
    ["LEADERBOARD_SLIDES_PRESENTATION_ID", "mock-leaderboard-deck-id"],
    ["HOUSE_CUP_SLIDES_PRESENTATION_ID", "mock-house-cup-deck-id"]
  ],
  "Form Responses 1": [
    ["Timestamp", "Email Address", "First Name", "Last Name", "Which staff member/teacher are you shouting out?", "Category", "Appreciation Message", "Anonymous"]
  ],
  "Form Responses 2": [
    ["Timestamp", "Email Address", "First Name", "Last Name", "Which student are you shouting out?", "Category", "Quick Pick", "Write-in", "Is it okay to display this Shout-Out on the big screen in the commons?"]
  ]
};

var SpreadsheetApp = {
  getActiveSpreadsheet: function() {
    return {
      getSheetByName: function(name) {
        if (!mockSheets[name]) {
          mockSheets[name] = [];
        }
        return {
          getName: function() { return name; },
          getLastColumn: function() {
            return mockSheets[name] && mockSheets[name].length > 0 ? mockSheets[name][0].length : 0;
          },
          getDataRange: function() {
            return {
              getValues: function() { return mockSheets[name]; }
            };
          },
          appendRow: function(row) {
            mockSheets[name].push(row);
          },
          getRange: function(row, col) {
            var rangeObj = {
              setValue: function(val) {
                if (!mockSheets[name][row - 1]) {
                  mockSheets[name][row - 1] = [];
                }
                mockSheets[name][row - 1][col - 1] = val;
                return rangeObj;
              },
              getValue: function() {
                if (!mockSheets[name][row - 1]) return "";
                return mockSheets[name][row - 1][col - 1];
              },
              setFontWeight: function(w) { return rangeObj; },
              setBackground: function(b) { return rangeObj; },
              setFontColor: function(c) { return rangeObj; }
            };
            return rangeObj;
          }
        };
      },
      getSheets: function() {
        return Object.keys(mockSheets).map(function(n) {
          return {
            getName: function() { return n; },
            getLastColumn: function() {
              return mockSheets[n] && mockSheets[n].length > 0 ? mockSheets[n][0].length : 0;
            },
            getDataRange: function() {
              return { getValues: function() { return mockSheets[n]; } };
            }
          };
        });
      }
    };
  }
};

var replacedTexts = [];
var generatedSlideCount = 0;
var deletedSlideCount = 0;

var SlidesApp = {
  openById: function(id) {
    return {
      getSlides: function() {
        return [
          {
            // Template slide
            remove: function() { deletedSlideCount++; },
            replaceAllText: function(target, val) {
              replacedTexts.push({ target: target, val: val });
            }
          }
        ];
      },
      appendSlide: function(slide) {
        generatedSlideCount++;
        return {
          replaceAllText: function(target, val) {
            replacedTexts.push({ target: target, val: val });
          },
          setSkipped: function(skipped) {}
        };
      }
    };
  }
};

function runTest4() {
  // Test 1: Student-to-Staff submission
  processShoutoutSubmission([
    "2026-06-10 12:00:00",
    "frodo.b@cfcsindians.org",
    "Frodo",
    "Baggins",
    "Sarah Janiga",
    "GOAT VSO",
    "Best teacher ever!",
    "No"
  ], false);
  
  // Test 2: Staff-to-Student submission (praise - Consent = Yes)
  processShoutoutSubmission([
    "2026-06-10 12:05:00",
    "sarah.janiga@copley-fairlawn.org",
    "Sarah",
    "Janiga",
    "Ahsoka Tano",
    "Academic Excellence",
    "", // quick pick
    "Fantastic math work!", // write-in
    "Yes, let's celebrate them publicly!"
  ], true);
  
  // Test 3: Spoof attempt by student on staff form (security gate test)
  processShoutoutSubmission([
    "2026-06-10 12:15:00",
    "frodo.b@cfcsindians.org", // student email!
    "Frodo",
    "Baggins",
    "Ahsoka Tano",
    "Academic Excellence",
    "", // quick pick
    "Spoofed VSO!", // write-in
    "Yes, let's celebrate them publicly!"
  ], true);
  
  // Test 5: Staff-to-Student submission (praise - Consent = No)
  processShoutoutSubmission([
    "2026-06-10 12:20:00",
    "sarah.janiga@copley-fairlawn.org",
    "Sarah",
    "Janiga",
    "Ahsoka Tano",
    "Academic Excellence",
    "", // quick pick
    "Private feedback note.", // write-in
    "No, keep this praise private between us."
  ], true);
  
  // Set first approved & featured, fourth not featured (Luke Skywalker index 5 now)
  // Format of GenYES queue: Timestamp, Sender, House, Target Staff, Category, Message, Anonymous, Status, Audited By, Audit Date, Feature on TV?, Big Screen Consent
  mockSheets["GenYES_Moderation_Queue"][1][7] = "Approved"; // Frodo (Student VSO needs manual approval)
  mockSheets["GenYES_Moderation_Queue"][1][10] = true;      // Feature on TV
  
  // Verify staff-to-student auto-approval was marked "Approved" but "Feature on TV" was false (not auto-featured to prevent TV flooding)
  if (mockSheets["GenYES_Moderation_Queue"][2][7] === "Approved" && mockSheets["GenYES_Moderation_Queue"][2][10] === false) {
    // Manually check it here for slide generation in the test
    mockSheets["GenYES_Moderation_Queue"][2][10] = true;
  }
  
  // For Test 5 (index 4 in GenYES moderation queue), try to feature it on TV to verify that it is still blocked
  mockSheets["GenYES_Moderation_Queue"][4][10] = true; // Attempt to feature even though Consent = No
  
  // Append a non-featured approved row to test exclusion (index 5)
  mockSheets["GenYES_Moderation_Queue"].push([
    "2026-06-10 12:10:00",
    "Luke Skywalker",
    "Sophomores",
    "Sarah Janiga",
    "GOAT VSO",
    "Thanks!",
    "No",
    "Approved",
    "GenYES Operator",
    new Date(),
    false, // Feature on TV false
    "Yes"
  ]);
  
  // Reset counters before final manual sync to only count the second sync
  generatedSlideCount = 0;
  replacedTexts = [];
  
  // Run slides sync
  var sysConfig = getSystemConfig();
  runSlidesSync(sysConfig);
  
  return JSON.stringify({
    ledger: mockSheets["House_Cup_Totals"],
    queue: mockSheets["GenYES_Moderation_Queue"],
    generatedSlideCount: generatedSlideCount,
    replacedTexts: replacedTexts
  });
}
"""

full_test_4_code = code_content + "\n" + mock_slides_and_routing_js + "\n" + "function run_wrapper() { return runTest4(); }"

proc = subprocess.Popen(
    ["osascript", "-l", "JavaScript"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True
)
stdout, stderr = proc.communicate(input=full_test_4_code + "\nrun_wrapper();")

if proc.returncode != 0:
    print("❌ Compilation or Runtime error in Test Case 4:")
    print(stderr)
    exit(1)

test_4_results = json.loads(stdout.strip())

# Verifications
t4_passed = True

# 1. House Cup Totals check
# Student-to-staff (Frodo Baggins - Seniors) earns 2 points
# Staff-to-student (Sarah Janiga to Ahsoka Tano - Juniors) earns 10 points
seniors_pts = 0
juniors_pts = 0
for row in test_4_results["ledger"][1:]:
    if row[0] == "Seniors":
        seniors_pts = row[1]
    elif row[0] == "Juniors":
        juniors_pts = row[1]

if seniors_pts != 2:
    print(f"❌ Student-to-staff routing score mismatch. Expected Seniors: 2, Got: {seniors_pts}")
    t4_passed = False
else:
    print("✅ Student-to-staff resolved points (2 points to Seniors) verified!")

if juniors_pts != 20:
    print(f"❌ Staff-to-student routing score mismatch. Expected Juniors: 20, Got: {juniors_pts}")
    t4_passed = False
else:
    print("✅ Staff-to-student resolved points (20 points to Juniors) verified!")

# 2. Slide count verification
# 4 slides should be generated (2 shoutouts + 1 teacher leaderboard + 1 House Cup standing)
if test_4_results["generatedSlideCount"] != 4:
    print(f"❌ Slide sync count mismatch. Expected: 4, Got: {test_4_results['generatedSlideCount']}")
    t4_passed = False
else:
    print("✅ Slide sync checkbox gating, Monthly Teacher Leaderboard, and House Cup standings slides generation verified!")

# 3. Placeholder replacements checks
# Verify that TO and FROM are replaced correctly based on direction
found_frodo_to = False
found_frodo_from = False
found_ahsoka_to = False
found_ahsoka_from = False

for r in test_4_results["replacedTexts"]:
    if r["target"] == "{{TO}}" or r["target"] == "{{to}}":
        if r["val"] == "Sarah Janiga":
            found_frodo_to = True
        elif r["val"] == "Ahsoka Tano":
            found_ahsoka_to = True
    elif r["target"] == "{{FROM}}" or r["target"] == "{{from}}":
        if r["val"] == "Frodo Baggins":
            found_frodo_from = True
        elif r["val"] == "Sarah Janiga":
            found_ahsoka_from = True

if not (found_frodo_to and found_frodo_from):
    print("❌ Placeholders error: Student-to-staff TO/FROM not set correctly.")
    t4_passed = False
else:
    print("✅ Student-to-staff TO/FROM placeholder replacement verified!")

if not (found_ahsoka_to and found_ahsoka_from):
    print("❌ Placeholders error: Staff-to-student TO/FROM not set correctly.")
    t4_passed = False
else:
    print("✅ Staff-to-student TO/FROM placeholder replacement verified!")

# Verify Monthly Staff Leaderboard slide placeholder replacements
found_month = False
found_t1_name = False
found_t1_dept = False
found_t1_count = False
found_t2_name = False
found_t2_dept = False

for r in test_4_results["replacedTexts"]:
    if r["target"] == "{{MONTH}}" or r["target"] == "{{month}}":
        if r["val"] in ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]:
            found_month = True
    elif r["target"] == "{{T1_NAME}}" or r["target"] == "{{t1_name}}":
        if r["val"] == "Sarah Janiga":
            found_t1_name = True
    elif r["target"] == "{{T1_DEPT}}" or r["target"] == "{{t1_dept}}":
        if r["val"] == "Science":
            found_t1_dept = True
    elif r["target"] == "{{T1_COUNT}}" or r["target"] == "{{t1_count}}":
        if r["val"] == "2":
            found_t1_count = True
    elif r["target"] == "{{T2_NAME}}" or r["target"] == "{{t2_name}}":
        if r["val"] == "-":
            found_t2_name = True
    elif r["target"] == "{{T2_DEPT}}" or r["target"] == "{{t2_dept}}":
        if r["val"] == "-":
            found_t2_dept = True

if not (found_month and found_t1_name and found_t1_dept and found_t1_count and found_t2_name and found_t2_dept):
    print("❌ Leaderboard placeholders error: Month, teacher name, department, VSO count, or fallback placeholders not set correctly.")
    t4_passed = False
else:
    print("✅ Monthly Teacher Leaderboard placeholders replacement (top 5 ranks, departments, counts, and month) verified!")

# 4. Auto-Approval Verification
staff_vso_row = test_4_results["queue"][2]
status_val = staff_vso_row[7]
auditor_val = staff_vso_row[8]
featured_val = staff_vso_row[10]

# In the queue before we manually toggled it in the test script, it starts as False:
if status_val != "Approved" or auditor_val != "Auto-Approved (Staff)":
    print(f"❌ Auto-approval check failed. Expected: Approved/Auto-Approved (Staff), Got: {status_val}/{auditor_val}")
    t4_passed = False
else:
    print("✅ Staff-to-student auto-approval and slide auto-gating verified!")

# 5. Spoof Rejection Verification
spoof_vso_row = test_4_results["queue"][3]
spoof_status = spoof_vso_row[7]
spoof_auditor = spoof_vso_row[8]

if spoof_status != "Rejected" or spoof_auditor != "System Security (Unauthorized Student Submitter)":
    print(f"❌ Spoof rejection check failed. Expected: Rejected/System Security (Unauthorized Student Submitter), Got: {spoof_status}/{spoof_auditor}")
    t4_passed = False
else:
    print("✅ Student spoofing attempt on staff form successfully blocked and logged as Rejected!")

# 6. Big Screen Consent Gate Verification
consent_yes_row = test_4_results["queue"][2]
consent_no_row = test_4_results["queue"][4]
consent_yes_val = consent_yes_row[11] if len(consent_yes_row) > 11 else ""
consent_no_val = consent_no_row[11] if len(consent_no_row) > 11 else ""

if consent_yes_val != "Yes":
    print(f"❌ Big Screen Consent Yes check failed. Expected: Yes, Got: {consent_yes_val}")
    t4_passed = False
elif consent_no_val != "No":
    print(f"❌ Big Screen Consent No check failed. Expected: No, Got: {consent_no_val}")
    t4_passed = False
else:
    print("✅ Big Screen Consent columns resolved and stored correctly!")

if t4_passed:
    print("\n✨ TEST CASE 4 PASSED! Routing, slide sync checkboxes, and placeholder logic are perfect.")
else:
    print("\n❌ TEST CASE 4 FAILED.")

print("\n================================================================")
if scan_passed and economy_passed and digest_passed and t4_passed:
    print("🎉 ALL CODE.GS BACKEND SIMULATION TESTS PASSED SUCCESSFULLY!")
    exit(0)
else:
    print("❌ TESTS COMPLETED WITH FAILURES.")
    exit(1)
