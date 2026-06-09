/**
 * Copley High School PBIS Portal - Local simulation Test Runner
 * File: google-mock/test_runner.js
 *
 * Runs locally under Node.js to evaluate Code.gs syntax, and verifies:
 * 1. scanDeniseFolder() logic using local mock student sheets
 * 2. calculateHousePoints() logic using the asymmetrical point economy and Pep Assembly overrides
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("================================================================");
console.log("  COPLEY HIGH SCHOOL PBIS SYSTEM - LOCAL MOCK CORE TEST RUNNER  ");
console.log("================================================================\n");

// 1. Load Code.gs into a sandboxed environment
const codeGsPath = path.resolve(__dirname, '..', 'Code.gs');
const codeGsContent = fs.readFileSync(codeGsPath, 'utf8');

// Define global stubs to mimic Google Apps Script environment
const sandbox = {
  // Stubs for GAS utilities and globals
  Logger: {
    log: function(msg) {
      console.log("[GAS Logger] " + msg);
    }
  },
  console: console,
  require: require,
  process: process,
  __dirname: path.resolve(__dirname, '..') // set to base workspace directory
};

// Run the script in VM to populate functions in sandbox
try {
  const context = vm.createContext(sandbox);
  vm.runInContext(codeGsContent, context);
  console.log("✅ Code.gs parsed and compiled successfully (Zero Syntax Errors)!\n");
} catch (compileErr) {
  console.error("❌ Code.gs Compilation Error:", compileErr.message);
  process.exit(1);
}

// Extract functions from sandboxed context
const scanDeniseFolder = sandbox.scanDeniseFolder;
const calculateHousePoints = sandbox.calculateHousePoints;

// Run Test Case 1: scanDeniseFolder()
console.log("----------------------------------------------------------------");
console.log("TEST CASE 1: scanDeniseFolder() Directory Scanning");
console.log("----------------------------------------------------------------");

const scannedData = scanDeniseFolder("dummy-folder-id");
console.log("Scanned Teacher Caseload groups:");
console.log(JSON.stringify(scannedData, null, 2));

// Verify that our three mock students exist
const expectedEmails = [
  "tom.wilson@copley-fairlawn.org",
  "maggie.zook@copley-fairlawn.org",
  "sarah.janiga@copley-fairlawn.org"
];

let scanPassed = true;
expectedEmails.forEach(email => {
  if (!scannedData[email]) {
    console.error(`❌ Expected teacher email group not found: ${email}`);
    scanPassed = false;
  } else {
    console.log(`✅ Found caseload group for: ${email} (${scannedData[email].length} student(s))`);
  }
});

if (scanPassed) {
  console.log("\n✨ TEST CASE 1 PASSED! scanDeniseFolder() correctly parsed the mock directory.");
} else {
  console.error("\n❌ TEST CASE 1 FAILED.");
}


// Run Test Case 2: calculateHousePoints() asymmetrical economy & pep overrides
console.log("\n----------------------------------------------------------------");
console.log("TEST CASE 2: calculateHousePoints() Asymmetrical Economy");
console.log("----------------------------------------------------------------");

// Define test slips
const testSlips = [
  // Student-to-Staff Shoutout (sender: student, receiver: staff)
  // Frodo Baggins is in Copley House. Sarah Janiga is in English Department.
  // Rule: Sender gets 2 house pts. Department gets 10 dept pts.
  {
    sender: "Frodo Baggins",
    receiver: "Sarah Janiga",
    category: "Super Support VSO",
    status: "Approved"
  },
  // Staff-to-Student Praise (sender: staff, receiver: student)
  // Ahsoka Tano is in Fairlawn House. Maggie Zook is in Math Department.
  // Rule: Receiver gets 10 house pts. Department gets 10 dept pts.
  {
    sender: "Maggie Zook",
    receiver: "Ahsoka Tano",
    category: "Academic Excellence",
    status: "Approved"
  },
  // Pending slip (should be skipped)
  {
    sender: "Luke Skywalker",
    receiver: "Sarah Janiga",
    category: "Helper",
    status: "Pending"
  }
];

console.log("Processing standard point calculation...");
const standardResults = calculateHousePoints(testSlips);
console.log("Standard Results:", JSON.stringify(standardResults, null, 2));

// Verifications
const expectedCopley = 2; // Frodo sent VSO
const expectedFairlawn = 10; // Ahsoka received VSO
const expectedEnglishDept = 10; // Sarah Janiga's department
const expectedMathDept = 10; // Maggie Zook's department

let economyPassed = true;
if (standardResults.houses.Copley !== expectedCopley) {
  console.error(`❌ House Copley score mismatch. Expected: ${expectedCopley}, Got: ${standardResults.houses.Copley}`);
  economyPassed = false;
}
if (standardResults.houses.Fairlawn !== expectedFairlawn) {
  console.error(`❌ House Fairlawn score mismatch. Expected: ${expectedFairlawn}, Got: ${standardResults.houses.Fairlawn}`);
  economyPassed = false;
}
if (standardResults.departments.English !== expectedEnglishDept) {
  console.error(`❌ English Department score mismatch. Expected: ${expectedEnglishDept}, Got: ${standardResults.departments.English}`);
  economyPassed = false;
}
if (standardResults.departments.Math !== expectedMathDept) {
  console.error(`❌ Math Department score mismatch. Expected: ${expectedMathDept}, Got: ${standardResults.departments.Math}`);
  economyPassed = false;
}

if (economyPassed) {
  console.log("✅ Asymmetrical point allocations match design specifications!");
}


console.log("\nTesting Pep Assembly Overrides (Multiplier = 2.0, Flat points for Copley = 100)...");
const overrideResults = calculateHousePoints(testSlips, {
  multiplier: 2.0,
  flatPoints: {
    "Copley": 100
  }
});
console.log("Override Results:", JSON.stringify(overrideResults, null, 2));

// Multiplier 2.0 doubles base points:
// Copley house points = (2 * 2.0) + 100 = 104
// Fairlawn house points = (10 * 2.0) = 20
// English department points = (10 * 2.0) = 20
// Math department points = (10 * 2.0) = 20

const expectedCopleyOverride = 104;
const expectedFairlawnOverride = 20;
const expectedEnglishOverride = 20;

let overridePassed = true;
if (overrideResults.houses.Copley !== expectedCopleyOverride) {
  console.error(`❌ Override Copley score mismatch. Expected: ${expectedCopleyOverride}, Got: ${overrideResults.houses.Copley}`);
  overridePassed = false;
}
if (overrideResults.houses.Fairlawn !== expectedFairlawnOverride) {
  console.error(`❌ Override Fairlawn score mismatch. Expected: ${expectedFairlawnOverride}, Got: ${overrideResults.houses.Fairlawn}`);
  overridePassed = false;
}
if (overrideResults.departments.English !== expectedEnglishOverride) {
  console.error(`❌ Override English Department score mismatch. Expected: ${expectedEnglishOverride}, Got: ${overrideResults.departments.English}`);
  overridePassed = false;
}

if (overridePassed) {
  console.log("✅ Pep Assembly multipliers and flat overrides computed successfully!");
}

if (economyPassed && overridePassed) {
  console.log("\n✨ TEST CASE 2 PASSED! Point calculations are completely correct.");
} else {
  console.error("\n❌ TEST CASE 2 FAILED.");
}

console.log("\n================================================================");
if (scanPassed && economyPassed && overridePassed) {
  console.log("🎉 ALL LOCAL MOCK TESTS PASSED SUCCESSFULLY!");
  process.exit(0);
} else {
  console.error("❌ TEST RUN COMPLETED WITH FAILURES.");
  process.exit(1);
}
