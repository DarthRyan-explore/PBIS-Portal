# Walkthrough - Copley High School PBIS Shout-Out & Data Center Integration

We have fully connected all the pieces of the Copley High School PBIS System: student praise dispatching, real-time input resets, double-click anti-spam safeguards, staff dashboard transparency, administrator portal discovery, and Excel-compatible district audits.

---

## 🚀 Key Integrations Implemented

### 1. Zero-Friction Shout-Out Form Resets
* **Automatic Resets:** Submitting a student virtual shout-out now fully resets the target staff selector and the category selector back to their default first options. The description textarea is fully cleared, and the anonymous checkbox is unchecked.
* **Celebratory Audio Chime:** A high-quality synthesizer success chime (`playSynthSuccess()`) triggers upon successful submission to give instant auditory confirmation alongside the archery particle burst and confetti explosions.

### 2. Bulletproof Double-Click Anti-Spam Guard
* **Boolean State Guard:** Integrated a robust `isStudentSlipSubmitting` throttle inside the submission script.
* **Haptic Visual Cooling:** Clicking the send button instantly locks it to `Sent! 🏹` and disables clicking. Even if a user attempts to bypass the disabled DOM state, the boolean guard locks out subsequent calls for 2 seconds to prevent duplicate spamming entirely.

### 3. Transparent Staff Slips Feed (`Pending Review` Cards)
* **Real-Time Integration:** Previously, shout-outs defaulted to `Pending` and were hidden from teachers until approved. Now, teachers can see their pending slips immediately!
* **Amber Dash Styling:** Pending slips render in the teacher's virtual slips grid with a **yellow dashed border**, a pulsing amber indicator bar, and an active `⏳ Pending Review` warning badge.
* **Moderation Sync:** As soon as a GenYES moderator approves the slip, the card dynamically transitions to a solid Copley border and removes the pending warning!

### 4. Excel-Compatible Data Center & CSV Exports
* **Administrative Data Center Card:** Pushed a premium analytics card inside the **Admin Fulfillment Desk** (accessible to advisor `debbi.spangler@copley-fairlawn.org`).
* **Live Statistics Counter:** Displays live counters for student-to-staff slips and staff-to-student praise.
* **Excel-Compliant CSV Downloads:** Features two one-click buttons to download clean `.csv` audit logs with full field escaping, supporting quotation marks, commas, and line breaks seamlessly.

### 5. Visible Footer Backdoor Access Link
* **High-Spirit Button:** Added a highly visible, glowing `🔑 Admin Portal` button next to the version text in the footer. Students and staff no longer need to remember hidden hotkeys or double-click logos to access GenYES moderation and Admin panels!

### 6. Crash-Proof DOM Standing Protections
* **Defensive Null Guards:** Refactored the Copley House Cup and podium rendering scripts with defensive null checks for every element. Toggling workspaces will never trigger silent TypeErrors again.

### 7. Quiet & Clean GenYES Student Login Transition
* **Confetti Omission:** When logging in as a GenYES student operator, the system transitions cleanly and quietly without triggering loud fanfare sounds or full-screen confetti explosions. Toast notifications are shown with a soft click tone instead, keeping the environment professional and quick. Confetti and fanfares are preserved for the Master Admin / Advisor login.

### 8. 12 Premium Designer Print Shop Templates
* **12 Thematic Fonts:** Loaded custom Google Web Fonts (e.g. `Playfair Display`, `UnifrakturMaguntia`, `Orbitron`, `Rye`, `MedievalSharp`, `Bubblegum Sans`, `Special Elite`) for 12 highly distinct styles:
  1. **Eco Ink-Saver:** Clean, ultra-minimal thin border with Lato font.
  2. **Copley Indians Classic:** Traditional double ruled border, varsity block heading, serif font.
  3. **Retro Vibes:** Chunky bold borders with 3D drop shadow, retro lettering.
  4. **Gothic Victorian:** Ornate dark heading, elegant serif message text.
  5. **Futuristic Cyber:** Glowing neon corners, typewriter coding font.
  6. **Steampunk Machinist:** Heavy industrial copper-plate borders, distressed typeface.
  7. **Fantasy Scroll:** Ancient parchment wavy border, calligraphic scroll font.
  8. **Vintage Newspaper:** Traditional editorial newsprint layout with CHS Daily Gazette title.
  9. **Chalkboard Sketch:** Handwritten casual blackboard with Caveat font.
  10. **Collegiate Varsity:** High-spirit athletic border trims with Graduate varsity block text.
  11. **Celestial Cosmic:** Dotted starry guidelines with indigo geometric header.
  12. **Cute Kawaii Doodle:** Playful rounded bubble curves, bubblegum lettering.

### 9. FERPA Decoupling & Customizer Cart Upgrade
* **FERPA Decoupling & Google Links Removal:** Replaced all real student names/initials in the MTSS Academic Tier 1 Requests and Tier 2 Check and Connect lists with fictional equivalents. Removed all external Google Sheets and Google Forms links, replacing them with fully interactive, local sandboxed mockup modals that record progress locally in the browser's local storage database.
* **Auto Cache-Wiping Guard:** Integrated defensive check-wiping routines in `initMTSSDatabase()` and `initCCDatabase()` to instantly clean stale client-side storage keys containing old student initials.
* **Avatars Tab Restructuring:** Split the overcrowded "Avatars" tab into two dedicated headers: `Shape & Bg` (avatar outlines and background gradients) and `Initials & Emoji` (monogram settings and custom emoji grids), removing scroll exhaustion. Completely stripped all legacy Academic Icon traces.
* **Double-Container Shape Rendering:** Created a double-container system for avatars where the outer div serves as the border/outline and the inner div holds the background gradient, both conforming to the selected clip-path shape. Configured parent dropshadows so the glows are not clipped.
* **Multi-Item Shopping Cart checkout:** Upgraded the customizer shop grids to allow students to "try on" and preview locked elements in the live preview badge without immediate purchase overlays. Drawn a small absolute `🔒 Xp` corner label on locked items instead. Integrated a dynamic cart details drawer at the bottom of all customizer tabs showing cart items, total cost, and a single-click checkout button.

---

## 🧪 Interactive Scenario Validation Guide

Follow these steps to verify that all systems are connected and work in perfect harmony:

### Step 1: Access the Admin Backdoor via Footer
1. Scroll down to the very bottom of the page (in either Student or Staff mode).
2. Locate and click the new **🔑 Admin Portal** button next to `Version 3.0.0` in the footer.
3. *Verify:* The secure authorization simulation terminal launches instantly!

---

### Step 2: Dispatch a Shout-Out to Amy Gray (Student Portal)
1. Close the terminal, toggle workspace mode to **Student** in the top-right header (defaults to Frodo Baggins).
2. Under the **Send a Shout-Out** tab, fill out the form:
   * **Select Target Staff / Teacher:** Choose `Amy Gray` (from Mental Health).
   * **Category:** Choose `GOAT VSO`.
   * **Appreciation Message:** Type: *"Mrs. Gray is simply the GOAT. She helped me feel so much better today!"*
   * Click **Send Virtual Shout-Out to Staff**.
3. *Verify:* A tactile archery arrow burst coordinates trigger, a clean success sound plays, confetti launches, and the toast pop-up alerts the student.
4. *Verify:* The button shows `Sent! 🏹` and disables clicks. Clicking it during the next 2s does nothing.
5. *Verify:* All form inputs are cleared completely back to default placeholders and first select options!

---

### Step 3: View the Pending Card (Staff Portal)
1. Switch Portal Mode to **Staff** in the top-right header, and select **Amy Gray** from the teacher dropdown in the header.
2. Scroll to the **My Virtual Slips** section.
3. *Verify:* The new shout-out shows up in her grid styled with a stunning **yellow dashed border** and a pulsing `⏳ Pending Review` label, showing that the system has successfully registered and routed it!

---

### Step 4: moderate & Approve the Shout-Out (GenYES Portal)
1. Click the **🔑 Admin Portal** button in footer, choose **Bradley Smith (GenYES Student)**, and log in.
2. Navigate to the **Moderation Queue**.
3. Locate the pending slip from Frodo Baggins to Amy Gray.
4. Click **Approve & Publish**.
5. *Verify:* Confetti and fanfare trigger, operator streak and approved counts update in real-time.

---

### Step 5: Check Published Slip (Staff Portal)
1. Log out of GenYES profile, return to Staff portal, and select **Amy Gray**.
2. *Verify:* The card has seamlessly updated to a solid border with standard styling, and the approved slips count badge has successfully incremented!

---

### Step 6: Data Auditing & CSV Exports (Master Admin Desk)
1. Click the **🔑 Admin Portal** button in footer, choose **Mrs. Debbi Spangler (GenYES Advisor / Master Admin)**, and log in.
2. Click the **🔑 Admin Fulfillment Desk** tab.
3. *Verify:* The new `📊 Copley Administrative Data Center` card is fully visible with accurate counts (e.g. `5 Records` and `9 Records`).
4. Click **Export Student Slips (CSV)** and **Export Staff Slips (CSV)**.
5. *Verify:* Excel/Google Sheets compliant `.csv` spreadsheets are successfully downloaded locally!

---

## 🛠️ JavaScript Syntax Bug Fixes (Recent Resolution)

We resolved critical JavaScript syntax issues that were causing parsing/compilation errors in the browser, rendering the page unresponsive:
1. **Orphaned MTSS Snippet Removal:** Deleted a duplicate `return JSON.parse(localStorage.getItem('AppState_mtssCaseload') || '[]'); }` code fragment inside the MTSS strategy update script block.
2. **Orphaned Check & Connect Snippet Removal:** Deleted a duplicate `return JSON.parse(localStorage.getItem('AppState_ccCaseload') || '[]'); }` fragment inside the Check & Connect weekly check-in block.
3. **Restored `closeEmailModal()` Closing Brace:** Replaced the missing closing brace `}` for the `closeEmailModal` function right before `const CosmeticCatalog = {`. This prevents the entire cosmetic catalog and subsequent helper functions from nesting inside the modal closing logic, ensuring all UI rendering routines and click handlers are properly registered in the global scope.

---

## 🔑 Google Workspace Pivot & Hybrid Ecosystem (`google-workspace-pivot`)

We have fully migrated the project's data entry architecture to a 100% FERPA-compliant Google Workspace integration:

### 1. Anonymous Public Scoreboard View
* **Student Identity Masking:** Replaced all visual student names in the student leaderboards, profile dropdown switchers, and reward queues with hashed anonymous identifiers (e.g., `Student #4928`), ensuring zero public identity exposure.
* **Aggregated Dashboards:** Replaced MTSS Tier 1 and Check & Connect caseload lists in the Staff Portal with aggregate metrics showing case volumes, target completion rates, and response SLAs. Hides all individual tracking cards.
* **Sanitized Slips Feed:** The Virtual Slips Feed now displays anonymous senders and generic category statements (`"Appreciation registered securely in Google Forms. Text archived in the district Workspace ledger."`), preventing raw comment notes from leaking student information.
* **GenYES Sheets Redirection:** Replaced the local inbox moderation list with an information card linking directly to the secure moderation spreadsheet inside Google Drive.

### 2. Native Google Forms Linkage
* Map student shout-out submissions, staff MTSS logs, and C&C logs to secure Google Forms via `GOOGLE_FORM_URLS` constants. Forms open seamlessly in a new tab when action buttons are clicked.

### 3. Google Apps Script Backend (`Code.gs`)
* Created the standalone [Code.gs](file:///Users/elise/Desktop/PBIS-APP-Vibe/Code.gs) script file:
  * **`onFormSubmitTrigger`:** Handles form callbacks, processes student shout-outs, updates the `House_Cup_Totals` sheet totals automatically, and logs pending moderation rows in the `GenYES_Moderation_Queue` sheet tab.
  * **`sendWeeklyDigest`:** Scheduled weekly timer compiling individual sent/received counts, points totals, and outstanding MTSS logs, emailing a premium HTML-formatted newsletter to staff on Friday afternoons.
  * **`scanDeniseFolder`:** Directory scanning logic that supports reading local student tracking sheets in development and parses student JSON logs from Google Drive folder in production, grouping outstanding cases by teacher email.
  * **`calculateHousePoints`:** Calculates cumulative house scores (implementing the asymmetrical point rules: 2 points for sending a shoutout, 10 points for receiving praise) and staff department scores. Supports flat point additions and point multipliers for Pep Assembly overrides.

### 4. Local Simulation Core & Mock Student Database
* **Fictional Student Directory:** Set up a mock database of individual student files under [google-mock/denise-individual-sheets/](file:///Users/elise/Desktop/PBIS-APP-Vibe/google-mock/denise-individual-sheets/) containing:
  * [Skywalker_Luke.json](file:///Users/elise/Desktop/PBIS-APP-Vibe/google-mock/denise-individual-sheets/Skywalker_Luke.json) (Teacher: Tom Wilson, English, Period 1, SB8 grade concern)
  * [Organa_Leia.json](file:///Users/elise/Desktop/PBIS-APP-Vibe/google-mock/denise-individual-sheets/Organa_Leia.json) (Teacher: Maggie Zook, Math, Period 4, Academic Concern)
  * [Baggins_Frodo.json](file:///Users/elise/Desktop/PBIS-APP-Vibe/google-mock/denise-individual-sheets/Baggins_Frodo.json) (Teacher: Sarah Janiga, Biology, Period 6, Flex Support)
* **Automated Test Runner Suite:** Built a test driver in [google-mock/run_tests.py](file:///Users/elise/Desktop/PBIS-APP-Vibe/google-mock/run_tests.py) which executes the App Script backend code against the mock database inside a sandboxed macOS `osascript` engine, verifying:
  * Zero syntax/compilation issues in `Code.gs` (resolved `Logger` global reference error in local runs).
  * Proper reading and parsing of student JSONs and grouping by teacher emails.
  * Flawless execution of the asymmetrical point economy and Pep Assembly overrides.
  * Full end-to-end simulation of dynamic weekly digests (Test Case 3) including caseload cross-referencing and teacher vs support staff exemptions.


### 5. Frontend Scoreboard & Showcase Redesign (`index.html`)
* **Redesigned Rewards & Showcase Catalog:** Transformed the points-spending and raffle-basket tabs inside the Student Portal into a read-only visual **"PBIS Rewards Showcase & Raffle Basket Catalog"**. Removed interactive ticket purchase buttons and cart totals.
* **Physical Redemption Instructions:** Added a high-contrast info banner explaining that the scoreboard is public and does not store user logins; students redeem points/spins at the school's physical table by presenting the Weekly PBIS Email Digest sent to their district inbox.
* **Full FERPA Anonymization on Dashboard:** Sanitized the Student Portal dashboard views and name badge customizer to dynamically display hashed anonymized IDs (e.g., `Student #4105` and `student.4105@copley-fairlawn.org`) instead of raw names.

### 6. Secure Google Slides Featured Shout-Out Generator
* **Native Slides Automation:** Added `updateFeaturedShoutOutSlides(presentationId, limit)` to [Code.gs](file:///Users/elise/Desktop/PBIS-APP-Vibe/Code.gs).
* **Safe Internal Presentation:** This parses the approved, moderated shoutouts directly from the spreadsheet and updates placeholders (`{{MESSAGE}}`, `{{TEACHER}}`, `{{SENDER}}`, `{{CATEGORY}}`) on a Google Slides template deck within the school's private Google Drive.
* **FERPA Compliant:** This visual slideshow runs entirely within the district’s core Google ecosystem and can be shared internally or loaded securely onto TVs using Rise Vision's Google Slides component, guaranteeing zero public PII leaks.

### 7. Branch Commit & Remote Push
* **Successful Deployment:** Verified, committed, and pushed the entire workspace changes on the `google-workspace-pivot` branch directly to the hosted repository at `https://github.com/DarthRyan-explore/PBIS-Portal.git` on GitHub.

### 8. Grade-Based House Resolution & Roster Email Lookup
* **Cohort House Cup:** Updated the scoreboard ledger and points engine to accumulate points for grade-level cohorts ("Seniors", "Juniors", "Sophomores", "Freshmen") instead of generic houses, mapping directly to the frontend's hourglass standing UI.
* **Master Roster Integration:** Added the `lookupStudentGrade(email, name)` function to `Code.gs` which dynamically scans the spreadsheet's `Master_Roster` tab.
* **Robust Resolution & Suffix Handling:** The lookup automatically resolves matching email and split first/last names using dynamic header parsing. This allows you to simply copy and paste roster reports from school databases without editing the code.
* **Email Safety Gate:** Added a `CONFIG.DEBUG_MODE: true` switch to prevent accidental mass emails to students and staff during test submissions.

### 9. Flexible Staff Directory & Classification Logic
* **Dynamic Header Resolution:** Updated the `getStaffDirectory()` function to search dynamically for split names (`First Name`, `Last Name`), `Staff Classification`, `Department`, and `Email`. The directory structure can be in any column order.
* **Auto-generated Suffixes:** If a teacher's email column is missing or empty, the script auto-generates the district suffix email address based on Copley's standard formatting (`first.last@copley-fairlawn.org`).
* **Teacher-Only MTSS Documentation:** Non-teaching support staff (e.g. counseling, custodial) are exempted from student MTSS documentation warnings. The HTML digest automatically hides the MTSS reminders box for staff classified as anything other than a Teacher.

### 10. Phase 3: Visual & Scoreboard Enhancements
* **Premium Copley-Fairlawn Branding, Image Cropping, & Cache-Busting:** Redesigned the Weekly Staff Digest email width to `650px` (optimized for modern email clients) and styled it using Copley's official Navy (`#0c2346`) and Gold (`#ffcc04`) brand colors. Programmatically cropped the banner image vertically and horizontally to remove all gray mockup borders, and appended a cache-buster parameter (`?v=3`) to ensure Google Mail displays the fresh, full-bleed card header.
* **Friday Fan Mail Card:** Rendered the actual appreciation text and student sender names inside blockquotes with gold borders for all shout-outs received by a teacher during the week.
* **Caseload Referral Details & Pre-fill Defaults:** Included the referral reason in the caseload log list for visibility, and updated the pre-filled URL generation to default to `"Unknown"` if the student's trigger reason was blank, avoiding empty fields in Google Forms.
* **Redundancy Clean-Up:** Removed the generic "Log Strategies" button at the bottom of the MTSS card, keeping only the specific pre-filled `[Log Intervention]` buttons to streamline the teacher's experience.
* **Running Department Scoreboard:** Added the **Department Standings Scoreboard** listing rankings (with first, second, and third-place medals: 🥇, 🥈, 🥉) and points, highlighting the teacher's own department in gold. Named the department specifically on the points card (e.g. "+30 Points for English Dept").
* **Dynamic Scoreboard / Slideshow Action Button (Hiding Security):** Replaced the public GitHub Pages scoreboard link with a dynamic button that automatically routes to the private Google Slides Presentation view (if `SLIDES_PRESENTATION_ID` is defined). To protect the master spreadsheet from accidental exposure, the button is completely hidden from the email if the Slides Presentation ID is not set.
* **Automated Moderation & Slides Synchronization Trigger with Checklist Filters:** Added an installable edit trigger `onEditTrigger(e)` that automatically records the GenYES auditor's email and timestamp. If a "Feature on TV?" column checkbox exists in the sheet and is checked, the script updates the Google Slides TV display loop immediately upon checking a shoutout as 'Approved'. Otherwise, it safely defaults to updating all approved shout-outs.
* **Single-Slide Template support (Preamble-free Mode):** Updated the Google Slides integration to support decks with no Title/Intro slide. The script automatically detects if a deck has only 1 slide initially, treating slide 0 as the template and deleting generated slides from index 1 onwards. This allows you to skip the preamble and launch straight into shout-outs.
* **Case-Insensitive & Robust Form Submit Handling:** Updated `onFormSubmitTrigger` to perform case-insensitive and trimmed name comparisons on the sheet tab name (e.g. supporting `"form responses 1"` vs `"Form Responses 1"` seamlessly). Added a fallback that parses values directly from the submission range if the standard event array is empty, and added detailed execution logging to make troubleshooting column mismatches easy.
* **Flexible Config Sheet tab Resolution:** Updated `getSystemConfig` to resolve configuration sheet tab names case-insensitively and ignore space/underscore variations (matching `"System Config"`, `"_System_Config"`, `"System_Config"`, etc. dynamically). This guarantees settings are loaded correctly even if the user names their config tab differently.
* **PBIS Admin Setup Diagnostics Guide:** Added a Diagnostics popup under the custom toolbar `🏹 PBIS Admin` menu explaining the three required installable triggers for district IT and advisors.

---

## 🏹 Phase 4: Dynamic Slides Gating, Typo-Resistant Placeholders & Staff Shout-outs

We have completed the following enhancements to streamline the hallway TV slides loop, resolve placeholder issues, and support teacher-to-student shout-outs:

### 1. Simple Checkbox-driven Slide Updates (No Manual Deletes)
* **GenYES Workflow:** Moderators only need to check or uncheck the `"Feature on TV?"` checkbox in Google Sheets. They do NOT need to manually delete slides or mark them `"Unapproved"`.
* **Automatic Deletions:** When a checkbox is unchecked, the script automatically removes the slide from the presentation on the next sync.
* **Instant Sync on Toggles:** We updated `onEditTrigger` to run the Slide Sync whenever either `"Status"` OR `"Feature on TV?"` changes (handling both checked/unchecked states).

### 2. Staff-to-Student Praise & Scoring Integration
* **Automatic Role Detection & Email Suffix Gating:** The script checks form submissions against the `Staff_Directory` email/name list. To handle floating, unlisted, or newly hired staff (who might not be in the current directory yet), the gate automatically validates any submitter whose email ends with the district domain suffix (e.g., `@copley-fairlawn.org`) as a verified staff member.
* **Asymmetrical Point Ledger Rules:**
  * **Student-to-Staff Shout-out:** Student sender earns **2 points** for their House (Seniors/Juniors/Sophomores/Freshmen).
  * **Staff-to-Student Praise Slip:** Student recipient earns **10 points** for their House.
* **Smart House Column Resolution:** For staff-to-student slips, the recipient student's resolved House is written to the moderation queue's `"House"` column for easy GenYES review.

### 3. Case-Insensitive & Typo-Resistant Placeholders
* **Brace Variation Tolerance:** Replaced placeholders using a case-insensitive, spacing-agnostic, and brace-tolerant matcher. This replaces `{{STUDENT}}`, `{{student}}`, `{student}`, `{{ student }}`, `{{SENDER}}`, `{{sender}}`, `{sender}`, `{{SENDER_NAME}}`, `{{sender_name}}`, `{{FROM}}`, and `{{from}}`.
* **Dynamic TO/FROM Alignment:**
  * **Student-to-Staff:** `{{TO}}` -> Teacher name, `{{FROM}}` -> Student name.
  * **Staff-to-Student:** `{{TO}}` -> Student name, `{{FROM}}` -> Teacher name.
  This allows using a single slide design with `To: {{TO}}` and `From: {{FROM}}` that works perfectly for both directions.

### 4. Same or Separate Slide Presentation Configurations
* **Centralized Sync Router:** Created `runSlidesSync` in `Code.gs`.
* **Flexible Deck Routing:**
  * If a separate presentation ID is set in the `_System_Config` tab (e.g., `STAFF_SLIDES_PRESENTATION_ID` or `STAFF_TO_STUDENT_SLIDES_ID`), staff-to-student shoutouts will sync to that deck.
  * If only one presentation ID is set, both types of shout-outs merge into the same slide presentation automatically.
* **Template Index Defaults:** Defaulted the template slide index to `0` (the first slide) if `SLIDES_TEMPLATE_INDEX` is not specified, which works perfectly for presentations without title slides.

### 5. Automated Validation & JXA Test Suites
* **New Test Case 4:** Added dynamic test suites inside `google-mock/run_tests.py` using macOS's JXA engine to verify:
  * Proper score allocations (2 points to Seniors for student VSOs, 10 points to Juniors for staff VSOs).
  * Automatic exclusion of unchecked `"Feature on TV?"` rows.
  * Correct inversion of `{{TO}}` and `{{FROM}}` placeholders for both directions.
  * Security gating check blocking spoofed student submissions on the staff form, marking them as `"Rejected"` with `0` points.
* **JXA run() Auto-Execution Fix:** Renamed the mock test function to `runTest4()` to prevent JXA from double-executing `run()`, resolving score doubling bugs during test simulation.
* **Spoof Rejection Assertion:** Integrated Python assertions verifying that spoofed submissions are rejected by `"System Security (Unauthorized Student Submitter)"` with no points awarded.

### 6. Hallway TV Slides Cap & Flood Gating
* **12 Slides Hard Cap:** Configured the slides synchronization script to enforce a hard cap of 12 featured slides on the hallway TV slideshow loop.
* **Staff-to-Student Auto-Approval Gating:** Automatically routes approved staff submissions directly to the moderation queue with `"Status" = "Approved"`, but keeps `"Feature on TV?"` unchecked (`false`) to ensure GenYES operators or advisors must manually approve a slide for display, preventing the TV loop from being flooded.
* **Dynamic Moderation Queue Column Mapping:** Replaced hardcoded column index offsets with dynamic header searches for `Sender`, `Target Staff`, `Status`, `Audited By`, and `Feature on TV?`. This immunizes the slide generator and audit trackers against column insertions or reordering in your moderation queue sheet tab, preventing To/From values from being mixed up.
* **Dynamic Form Submissions Parser:** Configured `processShoutoutSubmission` to dynamically match spreadsheet headers (e.g. `First Name`, `Last Name`, `Your Name`, `Which student are you shouting out?`, `Category`, `Quick Pick`, `Write-in`, `Anonymous`). This allows you to customize the Form fields, use single name fields for teachers (enabling display names like `"Mrs. Janiga"` or `"Officer Oden"`), or reword questions without breaking form ingestion.

---

## 🏹 Phase 5: Dynamic Slides URL & Student/Parent Weekly HTML Email Digests

We have successfully integrated the slideshow URL fix and implemented the Student and Parent Weekly HTML Email Digests:

### 1. Slides URL Parameter Update
* **Present Mode Optimization:** Changed the hallway slideshow URL format from `.../present#slide=p2` to `.../present?slide=id.p2` in the weekly staff email. This ensures that when staff members open the loop, Google Slides skips the static template slide (slide 1) and boots presentation view directly on the second slide (which holds the first active shout-out).

### 2. Student & Parent HTML Digests Templates
* **Student Weekly Digest:** Created `compileStudentDigestHTML(...)` which compiles and formats an email for active students showing:
  * Student banner: `assets/Copley_PBIS_Banner_Student_01.png`.
  * Received praise count and sent shout-out stats.
  * Weekly House points contribution summary (+10 points for each praise received, +2 points for each shoutout sent).
  * An hourglass House Cup Standings scoreboard table highlighting the student's own House in yellow/gold.
  * Link button to open the hallway slideshow starting on slide 2.
  * Physical PBIS rewards wheel spinning instructions.
* **Parent Weekly Digest:** Created `compileParentDigestHTML(...)` which compiles a celebrating letter for parents showing:
  * Parent banner: `assets/Copley_PBIS_Banner_Parent_01.png`.
  * Details of praise slips received by their child.
  * Contribution summary celebrating how many points they added to their child's House standings.

### 3. Dynamic Roster Emails Routing
* **Roster Scans:** Updated `sendWeeklyDigest()` to dynamically look up student emails and parent emails in the `Master_Roster` sheet using student names.
* **Parent Email Parsing:** Resolves comma-separated or semicolon-separated parent emails, sending copy digests to each parent/guardian.
* **Fallback Student Emails:** If a student is not found in the roster but has form activity, the script auto-resolves their district email using their name (e.g. `first.last@cfcsindians.org`) to guarantee digest distribution.
* **Approved Filtering:** Filters all compiled weekly shout-outs and praise slips directly from the moderated `GenYES_Moderation_Queue` (relying only on approved rows in the last 7 days), preventing unmoderated comments from being emailed.

### 4. Mock Verification Test Expansion
* Expanded Test Case 3 in `google-mock/run_tests.py` to add `Master_Roster` with parent columns, `House_Cup_Totals`, and approved rows in `GenYES_Moderation_Queue`.
* Verified that a weekly digest run successfully generates 6 emails (3 staff, 2 student, 1 parent digest copies) with correct subjects, recipients, and raw banner URLs.

---

## 🏹 Phase 6: Refined Email Copy & Toolbar Preview Menu (Option 1)

We have successfully refined the weekly student and parent newsletter templates, updated email subject lines, implemented direct toolbar preview triggers, and verified all components with an expanded automated test suite:

### 1. Refined Parent Digest Email Copy & Subject
* **Parent Subject Line:** Updated to `"Weekly Copley PBIS Update - [Student Name]'s Achievements This Week 🏹"`.
* **Exclusion of Standings Scoreboards:** Completely removed the green points impact summary card and the grade/house scoreboard from parent digests.
* **Refined Copy Phrases:** Incorporates custom district wording celebrating the child's praise:
  * Salutation: `"Dear Parent/Guardian of [Student Name],"`
  * Intro: `"Your child received Virtual Shout-Out(s) at Copley High School! We can see the pride swelling in you from here! It has to make you think someone's doing something right. Keep it up."`
  * Praise Slip Line Format: `🛡️ [Teacher] said your child deserved the [Category] VSO.`
  * Gratitude Explanation: `"These weekly Virtual Shout-Outs (VSOs) make your child eligible to win PBIS incentives... It's sort of like playing catch with a big ball of gratitude-injected sunshine."`

### 2. Playful Student Digest Email Copy & CTA Button
* **Student Subject Line:** `"Weekly PBIS Digest - Student Rewards & Standings 🏹"`.
* **PBIS Quarterly Parties Promo:** Added the Ryan Reynolds/Nick Wilde style promo card at the bottom: *"Even though the world may not always reward good things for those who are doing the right thing, Copley PBIS is trying to. Do the decent human thing of getting to class, not using personal communication devices (PCDs) during school, and locking in, and you'll inevitably find an invite to the PBIS quarterly party..."*
* **Teacher Shout-out CTA Button:** Added a visual golden button labeled `"🏹 Send a Shout-Out to a Teacher or Staff Member"` pointing dynamically to the configured student shout-out form URL.

### 3. Toolbar Preview Triggers for Administrators
* **Menu Upgrades:** The `🏹 PBIS Admin` custom spreadsheet menu registers three instant preview actions:
  * `"Preview Staff Digest Email"` -> calls `sendTestDigestToMe`
  * `"Preview Student Digest Email"` -> calls `testSendStudentDigest`
  * `"Preview Parent Digest Email"` -> calls `testSendParentDigest`
* **Direct Sandbox Dispatch:** When clicked, these functions automatically build a sample newsletter copy filled with realistic mock data and email it directly to the active user's Google account (`Session.getActiveUser().getEmail()`).

### 4. Automated Verification & Verification Results
* Updated `google-mock/run_tests.py` to assert that:
  * Student emails contain the quarterly party promo card and shoutout CTA buttons.
  * Parent emails contain the refined copy, custom praise formats, and exclude the House Cup standings board.
  * Subject lines match the new templates exactly.
* Ran the test suite successfully with all test cases reporting `PASSED` status.

---

## 🎨 Phase 7: Student Digest Rewards Dashboard Redesign

We have fully redesigned the Student Weekly Digest email template to feel like an energetic, high-spirit student rewards dashboard and school spirit campaign rather than an administrative report:

### 1. Terminology Cleanup ("Shout-Outs" instead of "Praise Slips")
* Stripped out references to "praise slips" from greetings, stats labels, and header text.
* Replaced them with "Virtual Shout-Outs (VSOs)" or "Shout-Outs" to align with student-friendly vernacular.

### 2. At-a-Glance Weekly Dashboard Summary Card
* Rendered a dashboard summary container immediately below the greeting:
  * **Interactive Stat Boxes:** Displays Shout-Outs Received, Shout-Outs Sent, and Points Contributed.
  * **Standing & Status Badges:** Displays Grade Cohort Cup Ranking (e.g. `🥇 1st Place (Seniors)`) and Spin Wheel Eligibility Status (`✅ Eligible! 🎟️`) side-by-side.

### 3. Rotating Section Headings
* Implemented random string pickers to swap heading names on every weekly distribution:
  * *Received headers rotate between:* `"Here's What Staff Said Behind Your Back"`, `"What Staff Are Saying About You"`, `"Staff Shout-Outs"`, `"Good Things Were Said"`, `"Staff Noticed"`, `"Caught Doing Something Right"`, and `"What We Heard About You This Week"`.
  * *Sent headers rotate between:* `"You Made Someone's Day"`, `"Kind Words You Shared"`, `"Shout-Outs You Sent"`, `"Here's What You Had To Say"`, `"Encouragement You Passed Along"`, and `"Positive Vibes Delivered"`.

### 4. Visual Progress-Bar Leaderboard
* Converted the tabular scoreboard into a dynamic horizontal race track:
  * Uses nested, border-rounded tables representing point percentages (scaled dynamically against the leading house's total) for universal email client compatibility.
  * Highlights the student's own house using a bold gold border (`2px solid #ffcc04`), soft yellow background (`#fcfaf2`), and a gold bar color. Other houses render using a clean navy bar on a white card.

### 5. Dashed Incentive Card & High-Contrast CTA Buttons
* **PBIS Quarterly Party Incentive Card:** Replaced the plain gray box with a double-dashed navy border reward card, complete with a prominent green status badge (`⚡ Current Status: On Track & Eligible! 🎉`) and target metrics.
* **Gold-Filled CTA Button:** Styled the student shout-out button with a solid gold background (`#ffcc04`), navy text (`#0c2346`), a bold outline, and a soft shadow for an engaging, intentional click target.

---

## 🎨 Phase 8: Premium Athletic Scoreboard Design Refinements

We have completed an additional design refinement phase to transform the Student Weekly Digest email into a personalized weekly scoreboard with strong visual hierarchy and high brand confidence:

### 1. Scoreboard Section Headers
* **Visual Upgrades:** Upgraded all major section subheadings to large (`20px`), bold, uppercase typography.
* **Branded Accent Bands:** Housed them inside solid navy header bands (`background-color: #0c2346;`) featuring a thick gold left-accent border (`border-left: 6px solid #ffcc04;`) and matching `🏹` spear icons, resembling scoreboard banners.

### 2. Dominant Stats Dashboard
* **Hierarchy Gaining:** Made the Weekly PBIS Dashboard the dominant visual element immediately below the banner.
* **Super-Sized Numbers & Icons:** Enlarged stat numbers to `44px` (font-weight: 900) and emojis/icons to `38px`.
* **Thick Scoreboard Border:** Wrapped the dashboard in a high-contrast container with a thick navy border (`4px solid #0c2346`) and a gold top-accent band (`10px solid #ffcc04`).
* **Enhanced Spacing:** Increased margins and cell padding for improved scanability.

### 3. Premium Athletic Buttons
* **Omission of Gold Flats:** Replaced flat gold buttons with high-contrast, premium navy background buttons.
* **Gold Border Trims:** Styled the buttons with a thick gold border (`border: 3px solid #ffcc04`), bold white text, uppercase lettering, and a letter-spacing offset to provide significant visual weight.

### 4. High-Energy Standings Board
* **Competitive Standings Aesthetic:** Rebuilt the House Cup standings block to look like an athletic competition standings board.
* **Bold Rank Indicators:** Enlarged the ranking icons and numbers (🥇, 🥈, 🥉) to `28px` to emphasize standings.
* **Student House Highlight:** Surrounded the student's own house card with a thick gold border (`3px solid #ffcc04`), soft gold background (`#fbf8eb`), and a high-contrast `🛡️ Your House` badge.
* **Thick Progress Tracks:** Enlarged the horizontal progress bars representing point ratios to a thick `12px` height with rounded corners.

### 5. Low Density Quick-Scan Formats
* **Checking Lists & Badges:** Converted paragraphs into checklist tables and status cards so students can comprehend the entire digest in under 10 seconds.
* **Decoupled Eligibility:** Listed target attendance, phone policies, and lock-in requirements on the quarterly party card but decoupled them from live behavior database syncs, avoiding promises of automated eligibility status.

### 6. Subtle Spear-Themed Branded Accents
* Added subtle `🏹` spear icons beside section titles, inside CTA buttons, and as divider motifs.

### 7. Zero Exclamation Marks Tone & Style
* Ensured the student email contains zero exclamation marks in headers, statuses, and greetings to maintain a cool, witty, and personalized weekly scoreboard vibe.
* Verified that the full automated test suite passes with 100% success.

---

## 🎨 Phase 9: Punctuation, Tone, and Syntax Refinements

We have completed several key polish items to align the staff and parent templates with our clean punctuation and branding goals:

### 1. Punctuation & Tone Polishing (Exclamation Mark Reductions)
* Updated the parent email greeting to change multiple exclamation marks to periods:
  * Old: `"Your child received Virtual Shout-Out(s) at Copley High School! We can see the pride swelling in you from here! It has to make you think someone's doing something right. Keep it up."`
  * New: `"Your child received Virtual Shout-Out(s) at Copley High School. We can see the pride swelling in you from here. It has to make you think someone's doing something right. Keep it up."`
  This aligns parent emails with the directive to use exclamation marks sparingly.

### 2. Capitalization and Terminology Consistency
* Updated all greetings and explanation copy in the staff digest (`compileStaffDigestHTML`) to capitalize `"Shout-Outs"` and `"Shout-Out(s)"` rather than lowercase `"shout-outs"`.

### 3. Syntax Restorations & Bug Fixes
* Resolved a duplicate array close syntax error around line 1356 in `compileStudentDigestHTML` (`dashboardHtml` declaration), restoring full code health.
* Updated test assertions in `google-mock/run_tests.py` to match the updated period punctuation.
* Executed the Python test runner to confirm that all test cases pass successfully.

### 4. Custom Wording & Button Refinements
* Changed the text of the slideshow button at the bottom of the staff and student weekly digests from `"View Hallway TV Slideshow Loop"` to `"See What's Scrolling on the Big Screen"` (reflecting that the display is located in the commons).
* Changed the parent email's heading from `"Shout-Out Details"` to a more professional and suitable title: `"What Staff Said About Your Child"`.
* Updated the automated python test assertions to match these new texts.

---

## 🛡️ Phase 10: Google Forms Alignment & Big Screen Consent Gate (Option C)

We have successfully integrated a teacher consent question on the staff-to-student praise form (Form Responses 2) and updated the backend script, mock environments, and automated testing suite:

### 1. Staff Form Consent Question Integration
* We have aligned the ingestion scripts with the new Staff-to-Student Form question:
  * **Question:** `"Is it okay to display this Shout-Out on the big screen in the commons?"`
  * **Options:**
    1. `"Yes, let's celebrate them publicly!"`
    2. `"No, keep this praise private between us."`

### 2. Ingestion Script (`Code.gs`) Logic
* **`processShoutoutSubmission`**:
  * Scans headers dynamically for `"consent"`, `"screen"`, `"display"`, or `"public"` to find the consent response index.
  * If the submitter opts out (selecting `"No, keep this praise private between us."`), the script writes `"No"` to a new column `"Big Screen Consent"` (column 12 in the moderation queue) and automatically registers `"No Consent"` to the `"Feature on TV?"` column.
  * If the submitter consents (`"Yes, let's celebrate..."`), the script writes `"Yes"` to `"Big Screen Consent"` and sets `"Feature on TV?"` to `false` (unchecked checkbox), awaiting GenYES operator moderation.
* **`updateFeaturedShoutOutSlides`**:
  * Scans headers for the `"Big Screen Consent"` column.
  * Ensures that if the consent value is `"No"`, the row is completely bypassed and no slide is created, establishing a bulletproof double-gate that respects teacher/student privacy.

### 3. Mock Environment & Test Runner Fixes (`run_tests.py`)
* **`getLastColumn` Mock Addition:** Added the `getLastColumn` method to the mock sheet objects in the test suite to resolve the `TypeError: modSheet.getLastColumn is not a function` error.
* **Chainable Mocks:** Updated the mock `getRange` returns to be fully chainable with stubs for `setFontWeight`, `setBackground`, and `setFontColor` to prevent runtime exceptions.
* **Correct Points Assertions:** Fixed the points assertion for the Juniors house to correctly expect 20 points, since the test executes two valid staff-to-student praise submissions for Ahsoka Tano (each earning 10 points for Juniors).
* **Validation Success:** Executed the entire test suite, verifying that all 4 test cases (including the consent gate routing and slide exclusions) pass successfully.

---

## 🛡️ Phase 11: Monthly Teacher VSO Leaderboard on Google Slides

We have successfully integrated a monthly VSO Leaderboard slide generator for teachers/staff who are shouting out students:

### 1. Leaderboard Computation (`Code.gs`)
* **Monthly Window Filtering:** The leaderboard dynamically scans the moderation queue and extracts submissions that occurred in the **current calendar month** based on the timestamp.
* **Staff Filtering:** Automatically identifies staff senders and filters out student senders to prevent student data from displaying on the leaderboard.
* **Top 5 Podium Sorting:** Groups the VSOs by teacher name, counts them, and sorts them in descending order to identify the top 5 staff members.
* **Department Affiliation Lookup:** Looks up each teacher in the `Staff_Directory` to resolve their department (e.g. `Science` or `Social Studies`), defaulting to `"Staff"` if missing.
* **Dynamic Template Replacement:** Automatically duplicates the template slide (at slide index 0) of the configured leaderboard deck and replaces:
  * `{{MONTH}}` -> The current month's name (e.g. `"June"`).
  * `{{T1_NAME}}` -> The name of the teacher (e.g. `"Sarah Janiga"`).
  * `{{T1_DEPT}}` / `{{T1_DEPARTMENT}}` -> The resolved department of the teacher (e.g. `"Science"`).
  * `{{T1_COUNT}}` -> The monthly count (e.g. `"2"`).
  * (Repeated for `T1` through `T5`, cleanly falling back to `"-"` for names/departments and `"0"` for counts if fewer than 5 exist).
* **Automatic Cleanup:** Removes any old leaderboard slides from previous runs (slide index 1 onwards) to keep the slideshow clean and size-bounded.

### 2. Sheets Toolbar Menu Integration
* Added a new menu action `"Sync Monthly Staff Leaderboard"` to the `🏹 PBIS Admin` custom spreadsheet toolbar menu which calls `triggerLeaderboardSyncManual()`. This triggers a spreadsheet toast notification, queries the configuration, and updates the leaderboard deck.
* Updated `runSlidesSync()` to automatically trigger the leaderboard slides update if the key `LEADERBOARD_SLIDES_PRESENTATION_ID` is defined.

### 3. Automated Test Runner Coverage
* Mocked `LEADERBOARD_SLIDES_PRESENTATION_ID` configuration in the testing database.
* Integrated month-filtering checks, department resolutions, slide count increments (verifying exactly 3 slides are generated—2 shoutouts and 1 leaderboard), and placeholder replacements in `google-mock/run_tests.py`.
* Verified that all tests run and pass successfully.

---

## 🛡️ Phase 12: Live Copley Cup TV Standings Slide, Speaker Notes Tagging, & Database Templates Tool

We have finalized the Live Copley Cup TV Slide setup, updated our school-wide verbiage from "House Cup" to "Copley Cup" (using "Cup Points" / "Grade Cohort Standings"), implemented a speaker-notes-based slide tagging safety gate to allow sharing a single slide deck, and finalized the database template initialization tool:

### 1. Renaming Hallway References to TV Slides
* Renamed `"Sync Hallway TV Slides"` references and diagnostic instructions to `"Sync TV Slides"` (since Copley's screens are in the Commons, Main office, and Guidance office, rather than hallways).

### 2. Copley Cup Verbiage Pivoting
* Replaced the term `"House Cup"` with `"Copley Cup"` in both the Google Apps Script backend (`Code.gs`) and the web portal frontend (`index.html`).
* Updated student weekly digests to refer to `"Copley Cup Standings"` and replaced `"🛡️ Your House"` badges with `"🛡️ Your Grade"`.
* Implemented a flexible database loader that looks for a tab named `"Copley_Cup_Totals"` first, falling back to `"House_Cup_Totals"` if that's what's in the spreadsheet. You can safely rename your spreadsheet tab to `"Copley_Cup_Totals"` at any time without breaking the code!

### 3. Bulletproof Shared Presentation Deck Safety (Speaker Notes Tagging)
* **The Problem:** In a shared presentation deck where shout-outs, teacher leaderboards, and standings slides all reside in the same file, the standard index-based deletion code would delete slides belonging to the other functions.
* **The Solution:** We implemented a **speaker notes tagging** mechanism:
  * Individual shout-out slides are automatically tagged with `[PBIS_SHOUTOUT]` in their speaker notes.
  * Leaderboard slides are tagged with `[PBIS_LEADERBOARD]`.
  * Standings slides are tagged with `[PBIS_COPLEY_CUP]`.
* **Safe Deletions:** When a sync runs, the script scans the deck and deletes *only* the generated slides containing its matching tag, leaving the templates and slides generated by other functions completely untouched. This enables you to combine all slides into a single deck URL without any conflict.

### 4. Create/Verify Database Sheet Templates Tool
* **One-Click Init Function:** Implemented `initializeDatabaseTemplates()` which checks and creates the following sheet tabs if missing, complete with correct header rows, colors, and notes:
  * **`_System_Config`**: Pre-populates all keys (`DENISE_FOLDER_ID`, `LEADERBOARD_SLIDES_PRESENTATION_ID`, `HOUSE_CUP_SLIDES_PRESENTATION_ID`, etc.) and default values.
  * **`Master_Roster`**: Creates columns (`First Name`, `Last Name`, `Email`, `Grade`, `Parent Email`) and adds dummy students for validation.
  * **`Staff_Directory`**: Creates columns (`Last Name`, `First Name`, `Class/Type`, `Department/Role`, `Email`) and adds dummy teachers.
  * **`House_Cup_Totals`**: Sets up the 4 grade cohorts (`Seniors`, `Juniors`, `Sophomores`, `Freshmen`) with `0` points.
  * **`GenYES_Moderation_Queue`**, **`MTSS_Interventions_Log`**, and **`Check_Connect_Logs`**: Sets up their respective columns to exactly match Apps Script dynamic parsers.
* **Sheets Toolbar Registration:** Exposed under the custom menu item `"Create/Verify Database Sheet Templates"` under the `🏹 PBIS Admin` toolbar.

---

## 🛡️ Phase 13: Shared Slide Deck Synchronization & Multi-Template Protection

We have resolved the template duplication issues and legacy slide accumulation bugs when running multiple sync routines within a single shared Google Slides deck:

### 1. Template Protection & Max Index Gating
* **Multi-Template Safe Zone:** Calculated `maxTemplateIdx = Math.max(shoutOutIdx, Math.max(leaderboardIdx, houseCupIdx))` dynamically in all three synchronization routines (`updateFeaturedShoutOutSlides`, `updateStaffLeaderboardSlides`, and `updateHouseCupStandingsSlides`).
* **Protected Indices:** Prevented any slide with index `j <= maxTemplateIdx` (as well as explicit indices matching any of the template configuration keys) from being deleted. This guarantees that Slide 1 (Shout-out template), Slide 2 (Leaderboard template), Slide 3 (Copley Cup template), and any other static/intro slides at the front of the deck are never deleted.

### 2. Smart Legacy/Untagged Slides Cleanup
* **Auto-Cleanup of Remnants:** If a slide has an index `j > maxTemplateIdx` and does **not** contain any of the three active tags (`[PBIS_SHOUTOUT]`, `[PBIS_LEADERBOARD]`, or `[PBIS_COPLEY_CUP]`) in its speaker notes, it is classified as a legacy slide (e.g. from an aborted or legacy script execution) and is automatically deleted.
* **Targeted Deletions:** Each sync function now selectively removes only its own generated slides (using tags) or untagged legacy slides, ensuring they coexist in the same slide presentation deck without overwriting each other.

### 3. Setup Diagnostics & User Configuration Guide
* Provided clear user instructions to configure **`_System_Config`** keys:
  * **`LEADERBOARD_TEMPLATE_INDEX`** ➔ `1` (Slide 2: Staff Leaderboard template)
  * **`HOUSE_CUP_TEMPLATE_INDEX`** ➔ `2` (Slide 3: Copley Cup Standings template)
  * **`SLIDES_TEMPLATE_INDEX`** ➔ `0` (Slide 1: Shout-out template)

### 4. Standard Speaker Notes API Correction (`getSpeakerNotesShape()`)
* **The API Bug:** The previous code was using a non-existent method `.getNotesBody()` on the slide's `NotesPage` object. Because this method doesn't exist in the actual Google Apps Script SlidesApp environment, it threw a silent runtime exception in the catch-block. This meant the tags (e.g. `[PBIS_LEADERBOARD]` or `[PBIS_COPLEY_CUP]`) were never actually written to the speaker notes of the new slides, causing the deletion loop to overlook them and leading to duplicate slide accumulation.
* **The Correction:** Replaced all `.getNotesBody()` calls in `Code.gs` with the standard `.getSpeakerNotesShape()` method, and updated the JXA test suite mocks in `run_tests.py` to match this API structure. The tags are now correctly written and read, ensuring that only one active leaderboard slide and one active standings slide remain in the presentation loop at any time.

---

## 🛡️ Phase 14: Red Team Stress-Testing & Data Integrity Enhancements

We analyzed the system's resilience under high-risk scenarios and implemented critical fail-safes inside the Apps Script backend to enforce data privacy and operational stability:

### 1. Zero-Value Staff Email Suppression
* **The Vulnerability:** During summer vacation, winter breaks, or low-activity weeks, the system would mail empty digests to all 100+ teachers in the directory, causing inbox fatigue and wasting daily email quotas.
* **The Fix:** Inserted a guard statement in `sendWeeklyDigest()` to skip compiling and sending digests to any staff member who has `0` weekly VSOs, `0` received shout-outs, and `0` active/outstanding caseload students.

### 2. Guessed Email Delivery Safety Gate
* **The Vulnerability:** When a student who is missing from the roster submits a shout-out, the fallback code would guess their email using initials-based conventions (e.g. `first.last@cfcsindians.org`). If the guess was wrong or matched a different student, behavior stats and personal data would be sent to the wrong inbox (a major PII leak).
* **The Fix:** Removed the fallback initials-based email generator. If a student is not found in the roster, the script logs a descriptive warning to the Apps Script console and leaves the email address empty to skip sending entirely, ensuring zero accidental PII leaks.

### 3. Duplicate Roster Name Collision Warnings
* **The Vulnerability:** High school rosters frequently contain students with identical first and last names. Mapping them to a flat name-keyed dictionary (`studentDirectory[fullName]`) causes subsequent entries to overwrite previous ones, routing Student A's praise slips directly to Student B and Student B's parents.
* **The Fix:** Added an active collision detector in `getStudentDirectory()` that raises a high-priority `CRITICAL SYSTEM ALERT` in the execution logs if duplicate names are parsed from the roster, prompting the administrator to resolve the collision.

---

## 🛡️ Phase 15: Security Collision Gates, Inclusion, and Administrative Queue Archiving

We have implemented key upgrades to address user feedback, improve security, ensure support staff inclusion, and introduce easy administrative queue archiving:

### 1. Zero-Friction Google Forms Action Buttons
* **Resilient Direct CTAs:** Integrated direct links to the active Google Forms. In the Student Weekly Digest email, students get a prominent button labeled `"🏹 Send a Shout-Out to a Teacher or Staff Member"` pointing directly to `STUDENT_TO_STAFF_FORM_URL`. In the Staff Weekly Digest email, staff get a button labeled `"🏹 Send a Shout-Out to a Student"` pointing to `STAFF_TO_STUDENT_FORM_URL`. These fall back to standard Copley Form URLs if not customized in the spreadsheet.

### 2. Roster Collision Isolation & Routing
* **Preventing Data Leaks:** If a name collision occurs in the roster (e.g. two students named "Sarah Smith" exist in different grades) and a teacher submits a praise slip typing "Sarah Smith", the script does not guess the recipient. It automatically flags the row and routes it to `"Pending Review (Roster Collision)"` status in the moderation queue with `0` points, logging a system security audit log. This prevents private student praise from being sent to the wrong parent's inbox.
* **Email verified lookups:** For student-to-staff forms, the sender's identity is resolved by their verified Google account email. Since email addresses are unique, student senders are resolved with 100% accuracy and avoid collisions.

### 3. Witty & Inclusive Support Staff Digests
* **Exemptions for Support Staff:** Non-teaching staff (custodial, cafeteria, counseling) with zero weekly activity (no VSOs received, no VSOs sent, no MTSS logs due) have active dashboards and MTSS cards hidden.
* **Culture of Gratitude Card:** Replaced empty stat tables with an encouraging card explaining that PBIS positivity is contagious and encouraging them to send a shout-out.
* **Scoreboard Inclusion:** Retained the running department scoreboard and Copley Cup standings to keep them involved in department points and school spirit.

### 4. Administrative Queue Archiving & Alerts
* **Manual Archiving Menu:** Added `"Archive Processed Queue Rows"` to the custom `🏹 PBIS Admin` spreadsheet menu. When selected, this automatically moves all Approved, Rejected, and Collision-marked entries from the active `GenYES_Moderation_Queue` sheet to a backup sheet tab named `GenYES_Moderation_Queue_Archive`.
* **Toast Warning Alert:** Added an automated check upon opening the spreadsheet. If the active queue exceeds 200 rows, a toast message alerts the admin to run the archiving tool, keeping spreadsheet performance fast.
* **Admin Diagnostic Report:** Weekly diagnostic reports summarize Roster Collision warnings, duplicate names, missing roster students, and archiving alerts, emailed directly to the administrator every Friday afternoon.

---

## 🛡️ Phase 15: Concurrency Gating & First-Name Compatibility Safeguards

We have implemented critical upgrades to resolve visual slide duplication issues and prevent incorrect name mappings in the fuzzy teacher name resolver:

### 1. Safe Concurrency Locking for Slides Synchronization
* **The Problem:** Simultaneous trigger executions (e.g. parallel form submissions or concurrent edit triggers) caused multiple instances of `runSlidesSync()` to run in parallel, resulting in duplicate slides (up to 37 slides in the presentation deck).
* **The Fix:** Added robust concurrency locking using `LockService.getDocumentLock()` with a 30-second wait lock directly within `runSlidesSync` in `Code.gs`. This forces concurrent slide sync executions to queue and process sequentially, ensuring old slides are deleted and new slides are created without replication. The lock is safely released inside a `finally` block.

### 2. Typo-Resistant First-Name Compatibility Gating
* **The Problem:** When a student submitted a VSO for a teacher who was not in the `Staff_Directory` (e.g. the Principal, "Eric Smith"), the fuzzy resolver fell back to the closest match in the directory, mapping it incorrectly to "Karen Smith" (since she was the only Smith in the directory).
* **The Fix:** Upgraded `resolveTeacherName` in `Code.gs` to enforce first-name compatibility checks:
  * In Step 2 (substring matching), first names are cleaned of non-alphanumeric characters (to support initials like `"K."` matching `"Karen"`) and compared.
  * In Step 3 (Levenshtein distance fallback), a first-name compatibility check is now enforced. If the user typed a first name and it does not align with the candidate name's first name, the candidate is bypassed.
  * Enforced a character-length-based Levenshtein distance threshold (maximum 25% of character length) so that completely unrelated or ambiguous names (e.g. typing just `"Smith"`) return `null` instead of mapping to a random entry.
  * When name resolution returns `null`, the ingestion script leaves the target teacher as the original name typed (e.g. `"Eric Smith"`), generating a helpful log warning so administrators can see and add the missing staff member manually.

### 3. Automated Test Runner Coverage
* Mocked `LockService` in the macOS-based testing runner in `google-mock/run_tests.py`.
* Added test cases simulating "Eric Smith" form submissions alongside Karen Smith directory entries.
* Verified that:
  * Concurrency locks execute without runtime errors in the simulated environment.
  * "Eric Smith" resolves to `"Eric Smith"` (leaving the name unmodified and logging a warning) instead of matching to `"Karen Smith"`.
  * All 4 test cases report `PASSED` status successfully.


