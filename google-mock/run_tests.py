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
    "mod": "Period 1",
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
    "mod": "Period 4",
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
    "mod": "Period 6",
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
    ["MTSS_FORM_URL", "https://docs.google.com/forms/d/e/1FAIpQLSdf_staff_mtss_log_form_placeholder/viewform"]
  ],
  "Form Responses 1": [
    ["Timestamp", "Email", "First Name", "Last Name", "Target Teacher", "Category", "Message", "Anonymous"],
    [new Date(), "luke.s@copley-fairlawn.org", "Luke", "Skywalker", "Sarah Janiga", "GOAT VSO", "Great teacher!", "No"]
  ],
  "MTSS_Interventions_Log": [
    ["Timestamp", "Email", "Student First", "Student Last", "Interventions", "Notes"],
    // Frodo Baggins check-in logged this week by Sarah Janiga
    [new Date(), "sarah.janiga@copley-fairlawn.org", "Frodo", "Baggins", "Learning Lab", "Checked in"]
  ],
  "Staff_Directory": [
    ["Last Name", "First Name", "Staff Classification", "Department / Specific Role", "Email"],
    ["Wilson", "Tom", "Teacher", "English", "tom.wilson@copley-fairlawn.org"],
    ["Janiga", "Sarah", "Teacher", "Science", "sarah.janiga@copley-fairlawn.org"],
    ["Gray", "Amy", "Support Staff", "Counseling", "amy.gray@copley-fairlawn.org"]
  ]
}};

var SpreadsheetApp = {{
  getActiveSpreadsheet: function() {{
    return {{
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

for email in emails_sent:
    if email["to"] == "tom.wilson@copley-fairlawn.org":
        tom_wilson_email = email
    elif email["to"] == "sarah.janiga@copley-fairlawn.org":
        sarah_janiga_email = email
    elif email["to"] == "amy.gray@copley-fairlawn.org":
        amy_gray_email = email

# Tom Wilson: Luke Skywalker Active but not logged -> outstanding 1. Is Teacher -> shows warning
if not tom_wilson_email:
    print("❌ Tom Wilson did not receive weekly digest email.")
    digest_passed = False
else:
    # Check if MTSS log section is present (indicates outstanding)
    if "Log Strategies" not in tom_wilson_email["htmlBody"] or "Minor Detail" not in tom_wilson_email["htmlBody"]:
        print("❌ Tom Wilson digest missing outstanding MTSS warning.")
        digest_passed = False
    else:
        print("✅ Tom Wilson dynamic outstanding MTSS warnings verified!")

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
    if "MTSS" in amy_gray_email["htmlBody"] or "Log Strategies" in amy_gray_email["htmlBody"]:
        print("❌ Amy Gray (Support Staff) digest contains MTSS sections.")
        digest_passed = False
    else:
        print("✅ Amy Gray support classification exemption verified!")

if digest_passed:
    print("\n✨ TEST CASE 3 PASSED! Dynamic weekly digests resolved correctly.")
else:
    print("\n❌ TEST CASE 3 FAILED.")

print("\n================================================================")
if scan_passed and economy_passed and digest_passed:
    print("🎉 ALL CODE.GS BACKEND SIMULATION TESTS PASSED SUCCESSFULLY!")
    exit(0)
else:
    print("❌ TESTS COMPLETED WITH FAILURES.")
    exit(1)
