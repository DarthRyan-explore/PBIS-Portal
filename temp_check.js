
    // Absolute source of truth for CHS staff (111 members) mapped to their exact category and department from Master Roster PDF
    const StaffDirectory = {
      "Jeff Abraham": { category: "Teacher", department: "Health / Phys Ed" },
      "Laura Addis": { category: "Teacher", department: "Art" },
      "Allison Allen": { category: "Teacher", department: "Math" },
      "Doug Allen": { category: "Teacher", department: "Math" },
      "Katie Amos": { category: "Teacher", department: "Career Tech" },
      "Fiona Barclay": { category: "Educational Support", department: "Library/Media" },
      "Kristine Basnett": { category: "Educational Support", department: "Library/Media" },
      "Samantha Beagle": { category: "Teacher", department: "Soc Studies" },
      "Ashley Beard": { category: "Teacher", department: "World Lang" },
      "Justin Beard": { category: "Teacher", department: "Soc Studies" },
      "Patrick Bulford": { category: "Teacher", department: "Science" },
      "Dave Byrd": { category: "Cafeteria Staff", department: "Cafeteria" },
      "Dan Campana": { category: "Student Support Services", department: "School Counseling" },
      "Kim Carothers": { category: "Teacher", department: "English" },
      "Jodi Chalfant": { category: "Teacher", department: "Spec Ed" },
      "Scott Chouinard": { category: "Teacher", department: "Soc Studies" },
      "Candice Chupek": { category: "Teacher", department: "Soc Studies" },
      "Jason Collins": { category: "Teacher", department: "Spec Ed" },
      "Amy Davis": { category: "Teacher", department: "English" },
      "Ashley Davis": { category: "Teacher", department: "Academic Enrichment" },
      "Christina Davis": { category: "Educational Support", department: "Special Needs Assistant" },
      "Megan deLorme": { category: "Educational Support", department: "Special Needs Assistant" },
      "Alexandria Diana": { category: "Teacher", department: "Science" },
      "Jim Dies": { category: "Teacher", department: "Soc Studies" },
      "Darlene Dishion": { category: "Teacher", department: "Spec Ed" },
      "Joshua Eck": { category: "Teacher", department: "Science" },
      "Sam Elrassi": { category: "Maintenance", department: "Maintenance" },
      "Jamal Epps": { category: "Custodial Staff", department: "Custodial" },
      "Terrance Lee Evans": { category: "Custodial Staff", department: "Custodial" },
      "Samantha Ezzo": { category: "Teacher", department: "World Lang" },
      "Melissa Farmer": { category: "Cafeteria Staff", department: "Cafeteria" },
      "Mary Ferrise": { category: "Teacher", department: "Spec Ed" },
      "Nancy Finn": { category: "Educational Support", department: "Special Needs Assistant" },
      "Michelle Flanagan": { category: "Teacher", department: "Math" },
      "Tara Forgach": { category: "Educational Support", department: "Special Needs Assistant" },
      "Mike Foster": { category: "Teacher", department: "Music" },
      "Christa Fuller": { category: "Student Support Services", department: "School Counseling" },
      "Don Gaffney": { category: "Teacher", department: "Spec Ed" },
      "Stephen Gambaccini": { category: "Teacher", department: "Science" },
      "Jane Gathangan": { category: "Educational Support", department: "Special Needs Assistant" },
      "Kyle Geosits": { category: "Teacher", department: "Spec Ed" },
      "Carolyn Goldstein": { category: "Student Support Services", department: "Speech-Language Pathology" },
      "Jennifer Gordon": { category: "Office Support", department: "Athletics" },
      "Amy Gray": { category: "Student Support Services", department: "Mental Health" },
      "Kirby Harder": { category: "Teacher", department: "Technology" },
      "Ellie Hardesty": { category: "Educational Support", department: "Special Needs Assistant" },
      "Ryan Hendrickson": { category: "Teacher", department: "World Lang" },
      "Cathy Hoover": { category: "Teacher", department: "Math" },
      "Carol Hurd": { category: "Office Support", department: "Main Office" },
      "Andy Jalwan": { category: "Administration", department: "Athletics" },
      "Sarah Janiga": { category: "Teacher", department: "English" },
      "Kim Keith": { category: "Office Support", department: "Main Office" },
      "Katie King": { category: "Educational Support", department: "Special Needs Assistant" },
      "Andy Klein": { category: "Teacher", department: "Science" },
      "Jacob Kline": { category: "Maintenance", department: "Maintenance" },
      "Michelle Knoblock": { category: "Educational Support", department: "Special Needs Assistant" },
      "Elaina Kraft": { category: "Student Support Services", department: "School Counseling" },
      "John Kromalic": { category: "Teacher", department: "Soc Studies" },
      "Ann Krautheim": { category: "Cafeteria Staff", department: "Cafeteria" },
      "Ryan Lawrence": { category: "Student Support Services", department: "Mental Health" },
      "Jaala Lewis": { category: "Administration", department: "Main Office" },
      "Scott Little": { category: "Teacher", department: "Music" },
      "Melissa Lopez": { category: "Teacher", department: "Science" },
      "Gene Lynn": { category: "Teacher", department: "Science" },
      "Lee Malcolm": { category: "Teacher", department: "English" },
      "Rachel McClenaghan": { category: "Teacher", department: "Career Tech" },
      "Meghan McCoy": { category: "Teacher", department: "Spec Ed" },
      "Lloyd Miller": { category: "Custodial Staff", department: "Custodial" },
      "Mary Miller": { category: "Teacher", department: "Math" },
      "Sarah Miller": { category: "Educational Support", department: "Special Needs Assistant" },
      "Jodi Mirman": { category: "Educational Support", department: "Special Needs Assistant" },
      "Carry Moorer": { category: "Custodial Staff", department: "Custodial" },
      "Carmel Oberdorfer": { category: "Educational Support", department: "Special Needs Assistant" },
      "Tim Oden": { category: "Student Support Services", department: "Main Office" },
      "Shannon Pangas": { category: "Educational Support", department: "Special Needs Assistant" },
      "Jake Parsons": { category: "Teacher", department: "Health / Phys Ed" },
      "Antoine Pastor": { category: "Teacher", department: "Art" },
      "Jason Patton": { category: "Cafeteria Staff", department: "Cafeteria" },
      "Nate Perry": { category: "Teacher", department: "Soc Studies" },
      "Denise Polak": { category: "Student Support Services", department: "School Psychology" },
      "Sue Post": { category: "Educational Support", department: "Special Needs Assistant" },
      "John Rausch": { category: "Custodial Staff", department: "Custodial" },
      "Shannon Rote": { category: "Teacher", department: "English" },
      "Teresa Roush": { category: "Teacher", department: "Academic Enrichment" },
      "Dylan Ruff": { category: "Administration", department: "Main Office" },
      "Michele Scavdis": { category: "Teacher", department: "World Lang" },
      "Jacob Sexton": { category: "Educational Support", department: "Special Needs Assistant" },
      "Sheila Shuttlesworth": { category: "Cafeteria Staff", department: "Cafeteria" },
      "Marija Simcox": { category: "Office Support", department: "School Counseling" },
      "Karen Smith": { category: "Teacher", department: "Spec Ed" },
      "Eric Smith": { category: "Administration", department: "Main Office" },
      "Jennifer Soltis": { category: "Teacher", department: "Art" },
      "Debra Spangler": { category: "Teacher", department: "Technology" },
      "Robert Starkey": { category: "Teacher", department: "Math" },
      "Maggie Steffen": { category: "Teacher", department: "English" },
      "Andy Stephens": { category: "Teacher", department: "Math" },
      "Sandra Stewart": { category: "Teacher", department: "Career Tech" },
      "Jason Tomayko": { category: "Educational Support", department: "Special Needs Assistant" },
      "Eric Tomich": { category: "Custodial Staff", department: "Custodial" },
      "Alex Trebisky": { category: "Educational Support", department: "Special Needs Assistant" },
      "Kristin Vigar": { category: "Teacher", department: "Academic Enrichment" },
      "Cristina Wade": { category: "Teacher", department: "Music" },
      "Lamont Watson": { category: "Custodial Staff", department: "Custodial" },
      "Aaron Welker": { category: "Educational Support", department: "Special Needs Assistant" },
      "Laura Wilhite": { category: "Teacher", department: "Science" },
      "Tom Wilson": { category: "Teacher", department: "English" },
      "Carla Zahler": { category: "Office Support", department: "Main Office" },
      "Ping Zhou": { category: "Teacher", department: "World Lang" },
      "Sara Zimmerman": { category: "Teacher", department: "English" },
      "Maggie Zook": { category: "Teacher", department: "Math" },
      "Dave Beynon": { category: "Custodial Staff", department: "Custodial" }
    };

    // System Mock Database State
    const AppState = {
      activeTeacher: "Sarah Janiga",
      activeStudent: "Frodo Baggins",
      activeGenyesMember: null, // "username@cfcsindians.org" when logged in
      activeGenyesRole: null, // "Student" or "Admin"
      
      // GenYES Service Leaderboard Data
      genyesLeaderboard: [
        { email: "bradley.smith@cfcsindians.org", name: "Bradley Smith", approvedCount: 42, streak: 5, active: true },
        { email: "jenna.k@cfcsindians.org", name: "Jenna K.", approvedCount: 28, streak: 3, active: true },
        { email: "toby.j@cfcsindians.org", name: "Toby J.", approvedCount: 15, streak: 1, active: true },
        { email: "debbi.spangler@copley-fairlawn.org", name: "Debbi Spangler", approvedCount: 85, streak: 10, advisor: true }
      ],

      // Admin Rewards Fulfillment Queue
      rewardsQueue: [
        { id: 1, student: "Frodo Baggins", reward: "CHS Blue & Gold Tumbler", points: 20, date: "2026-05-28", status: "Pending" },
        { id: 2, student: "Ahsoka Tano", reward: "Copley C-Shield Sticker Pack", points: 5, date: "2026-05-29", status: "Pending" },
        { id: 3, student: "Jean Grey", reward: "Front-Row Flex Period Pass", points: 15, date: "2026-05-29", status: "Pending" }
      ],

      studentUsedSpins: {}, // Tracks spins used per student: {"Student Name": count}
      studentRaffleTickets: {}, // Tracks tickets won/allocated per student: {"Student Name": {unallocated: x, cfa: y...}}
      studentCosmetics: {}, // Tracks unlocked and equipped cosmetics per student: {"Student Name": {avatar: "x", border: "y", title: "z", unlocked: []}}
      globalBaselineYTDVSOs: 682, // Cumulative historical school-wide YTD baseline prior to current session logs
      
      teachers: Object.keys(StaffDirectory).sort(),

      // Track running year-to-date and monthly sent shout-outs + MTSS Check & Connect logs for badges
      teacherStats: {},

      students: [
        { name: "Frodo Baggins", email: "frodo.baggins@copley-fairlawn.org", parentEmail: "drogo.baggins@shire-mail.edu", points: 42, tier: "Tier 1", praiseCount: 12, grades: { "Algebra II": "B", "History": "C" } },
        { name: "Ahsoka Tano", email: "ahsoka.tano@copley-fairlawn.org", parentEmail: "anakin.s@jedi-temple.edu", points: 28, tier: "Tier 1", praiseCount: 5, grades: { "English 11": "A" } },
        { name: "Luke Skywalker", email: "luke.s@copley-fairlawn.org", parentEmail: "vader.a@imperial.gov", points: 8, tier: "Tier 2", praiseCount: 2, grades: { "History": "D" } },
        { name: "Jean Grey", email: "jean.grey@copley-fairlawn.org", parentEmail: "professor.x@xavier.edu", points: 35, tier: "Tier 1", praiseCount: 8, grades: { "Chemistry II": "A" } },
        
        // 1. Automatic Failure Trigger + Reverse Request Automation Seed Student (Peter Parker)
        { 
          name: "Peter Parker", 
          email: "spidey.p@copley-fairlawn.org", 
          parentEmail: "may.parker@queens.net", 
          points: 18, 
          tier: "Tier 2", 
          praiseCount: 4, 
          grades: { "Physics": "F" }, // Triggers automatic failure trigger!
          q1Grades: { "Physics": "B" },
          q2Grades: { "Physics": "C" },
          q3Grades: { "Physics": "F" },
          tier1Active: true,
          tier1Data: {
            course: "Physics",
            period: "Period 5",
            teacher: "Sarah Janiga",
            trigger: "Automatic Failure Trigger",
            parentContacts: [], // 0 parent contacts locked gatekeeper demonstration
            interventions: [],
            interactions: [],
            startDate: "2026-05-18",
            durationWeeks: 4,
            status: "Active",
            escalationPipeline: null
          }
        }, 
        
        { name: "Arwen Undomiel", email: "arwen.u@copley-fairlawn.org", parentEmail: "elrond.lord@rivendell.org", points: 50, tier: "Tier 1", praiseCount: 15, grades: { "English 11": "A" } },
        { name: "Dragonborn", email: "dovahkiin@copley-fairlawn.org", parentEmail: "greybeards@high-hrothgar.edu", points: 5, tier: "Tier 3", praiseCount: 1, grades: { "History": "F" } },
        
        // 3. Escalated Sync Pipeline Seed Student (Wanda Maximoff)
        { 
          name: "Wanda Maximoff", 
          email: "scarlet.w@copley-fairlawn.org", 
          parentEmail: "magneto.m@mutant.org", 
          points: 24, 
          tier: "Tier 1", 
          praiseCount: 6, 
          grades: { "English 11": "F" },
          tier1Active: true,
          tier1Data: {
            course: "English 11",
            period: "Period 2",
            teacher: "Sarah Janiga",
            trigger: "Automatic Failure Trigger",
            parentContacts: [
              { date: "2026-04-18", method: "Email", notes: "Emailed parent about grade concerns." }
            ],
            interventions: ["Invite student to Learning Lab"],
            interactions: [
              { date: "2026-04-20", tags: ["Simple Check-In"], notes: "Checked in during non-instructional Flex period." }
            ],
            startDate: "2026-04-10",
            durationWeeks: 4,
            status: "Escalated",
            escalationPipeline: "Under Team Review"
          }
        },
        
        { name: "Jarl Balgruuf", email: "jarl.b@copley-fairlawn.org", parentEmail: "hrongar@whiterun.gov", points: 15, tier: "Tier 1", praiseCount: 3, grades: { "Government": "C" } },
        { name: "Lydia", email: "lydia.housecarl@copley-fairlawn.org", parentEmail: "breezehome@whiterun.gov", points: 30, tier: "Tier 1", praiseCount: 9, grades: { "Algebra II": "C" } },
        { name: "Samwise Gamgee", email: "samwise.g@copley-fairlawn.org", parentEmail: "gaffer.g@shire-mail.edu", points: 38, tier: "Tier 1", praiseCount: 11, grades: { "English 11": "B" } },
        { name: "Gwen Stacy", email: "gwen.s@copley-fairlawn.org", parentEmail: "captain.stacy@nypd.gov", points: 40, tier: "Tier 1", praiseCount: 14, grades: { "Chemistry II": "A" } },
        
        // 2. Reverse Request Loop + Multi-Tier Overlap Seed Student (Anakin Skywalker)
        { 
          name: "Anakin Skywalker", 
          email: "anakin.s@copley-fairlawn.org", 
          parentEmail: "shmi.s@tatooine.net", 
          points: 11, 
          tier: "Tier 2", // Concurrently receiving Tier 2 support! (Academic Assist)
          praiseCount: 3, 
          grades: { "Algebra II": "D-", "Chemistry II": "B" }, 
          q1Grades: { "Algebra II": "F" },
          q2Grades: { "Algebra II": "F" },
          q3Grades: { "Algebra II": "D" }, // Failed consecutive Q1 & Q2 quarters, continues to struggle in Q3
          tier1Active: true,
          tier1Data: {
            course: "Algebra II",
            period: "Period 3",
            teacher: "Sarah Janiga",
            trigger: "Reverse Request Automation",
            parentContacts: [
              { date: "2026-05-10", method: "Phone", notes: "Spoke with Anakin's mother Shmi. She is supportive and will check his online gradebook daily." }
            ],
            interventions: ["Structured intervention during regular instructional class time"],
            interactions: [
              { date: "2026-05-12", tags: ["Missing Work Action Plan"], notes: "Identified three missing assignments. Created checklists." },
              { date: "2026-05-15", tags: ["Core Concept Review/Re-teaching"], notes: "Reviewed math logs and factoring formulas." }
            ],
            startDate: "2026-05-01",
            durationWeeks: 4,
            status: "Active",
            escalationPipeline: null
          }
        }, 
        
        { name: "Clark Kent", email: "superman.c@copley-fairlawn.org", parentEmail: "martha.kent@smallville.net", points: 48, tier: "Tier 1", praiseCount: 13, grades: { "Government": "A" } },
        { name: "Harley Quinn", email: "harley.q@copley-fairlawn.org", parentEmail: "arkham.asylum@gotham.gov", points: 14, tier: "Tier 2", praiseCount: 2, grades: { "Chemistry II": "F" } },
        { name: "Steve Rogers", email: "cap.s@copley-fairlawn.org", parentEmail: "sarah.rogers@brooklyn.net", points: 27, tier: "Tier 1", praiseCount: 7, grades: { "History": "A" } },
        { name: "Legolas Greenleaf", email: "legolas.g@copley-fairlawn.org", parentEmail: "thranduil.king@mirkwood.org", points: 55, tier: "Tier 1", praiseCount: 16, grades: { "Physics": "B" } },
        { name: "Spock", email: "spock.v@copley-fairlawn.org", parentEmail: "sarek.amb@vulcan.gov", points: 45, tier: "Tier 1", praiseCount: 10, grades: { "Physics": "A" } },
        { name: "James T. Kirk", email: "captain.k@copley-fairlawn.org", parentEmail: "george.kirk@starfleet.mil", points: 33, tier: "Tier 1", praiseCount: 9, grades: { "History": "C" } },
        { name: "Leia Organa", email: "leia.organa@copley-fairlawn.org", parentEmail: "bail.organa@alderaan.gov", points: 41, tier: "Tier 1", praiseCount: 10, grades: { "Government": "A", "English 11": "A" } },
        { name: "Han Solo", email: "han.solo@copley-fairlawn.org", parentEmail: "jabba.hutt@tatooine.net", points: 12, tier: "Tier 1", praiseCount: 3, grades: { "History": "C-", "Algebra II": "D" } },
        { name: "Chewbacca", email: "chewie@copley-fairlawn.org", parentEmail: "attichitcuk@kashyyyk.org", points: 33, tier: "Tier 1", praiseCount: 8, grades: { "Physics": "B", "Chemistry II": "B" } },
        { name: "Jean-Luc Picard", email: "picard.j@copley-fairlawn.org", parentEmail: "maurice.picard@starfleet.mil", points: 58, tier: "Tier 1", praiseCount: 17, grades: { "Government": "A", "History": "A" } },
        { name: "William Riker", email: "riker.w@copley-fairlawn.org", parentEmail: "kyle.riker@starfleet.mil", points: 46, tier: "Tier 1", praiseCount: 11, grades: { "History": "A", "Physics": "B" } },
        { name: "Data", email: "data.android@copley-fairlawn.org", parentEmail: "noonien.soong@starfleet.mil", points: 60, tier: "Tier 1", praiseCount: 20, grades: { "Physics": "A", "Algebra II": "A", "Chemistry II": "A" } },
        { name: "Geordi La Forge", email: "laforge.g@copley-fairlawn.org", parentEmail: "silva.laforge@starfleet.mil", points: 39, tier: "Tier 1", praiseCount: 9, grades: { "Physics": "A", "Algebra II": "B" } },
        { name: "Worf", email: "worf.mogh@copley-fairlawn.org", parentEmail: "sergey.rozh@starfleet.mil", points: 22, tier: "Tier 1", praiseCount: 4, grades: { "History": "B", "Government": "C" } },
        { name: "Deanna Troi", email: "troi.d@copley-fairlawn.org", parentEmail: "lwaxana.troi@betazed.gov", points: 37, tier: "Tier 1", praiseCount: 8, grades: { "English 11": "A", "History": "B" } },
        { name: "Beverly Crusher", email: "crusher.b@copley-fairlawn.org", parentEmail: "yvette.gessard@starfleet.mil", points: 43, tier: "Tier 1", praiseCount: 12, grades: { "Chemistry II": "A", "Physics": "B" } },
        { name: "Kathryn Janeway", email: "janeway.k@copley-fairlawn.org", parentEmail: "edward.janeway@starfleet.mil", points: 52, tier: "Tier 1", praiseCount: 15, grades: { "Physics": "A", "Government": "A" } },
        { name: "Seven of Nine", email: "seven.nine@copley-fairlawn.org", parentEmail: "magnus.hansen@starfleet.mil", points: 49, tier: "Tier 1", praiseCount: 13, grades: { "Physics": "A", "Chemistry II": "A" } },
        { name: "Aragorn", email: "aragorn.e@copley-fairlawn.org", parentEmail: "arathorn.e@gondor.org", points: 56, tier: "Tier 1", praiseCount: 16, grades: { "History": "A", "Government": "A" } },
        { name: "Gandalf the Grey", email: "gandalf.o@copley-fairlawn.org", parentEmail: "manwe@valinor.gov", points: 59, tier: "Tier 1", praiseCount: 18, grades: { "History": "A", "English 11": "A" } },
        { name: "Gimli", email: "gimli.gloin@copley-fairlawn.org", parentEmail: "gloin@lonelymountain.gov", points: 29, tier: "Tier 1", praiseCount: 6, grades: { "Chemistry II": "B", "Algebra II": "C" } },
        { name: "Boromir", email: "boromir.d@copley-fairlawn.org", parentEmail: "denethor@gondor.org", points: 26, tier: "Tier 1", praiseCount: 5, grades: { "History": "B", "Government": "D" } },
        { name: "Peregrin Took", email: "pippin.took@copley-fairlawn.org", parentEmail: "paladin.took@shire-mail.edu", points: 15, tier: "Tier 1", praiseCount: 2, grades: { "Algebra II": "D", "History": "C" } },
        { name: "Meriadoc Brandybuck", email: "merry.b@copley-fairlawn.org", parentEmail: "saradoc.b@shire-mail.edu", points: 18, tier: "Tier 1", praiseCount: 3, grades: { "English 11": "C", "History": "B" } },
        { name: "Galadriel", email: "galadriel.f@copley-fairlawn.org", parentEmail: "finarfin@valinor.gov", points: 57, tier: "Tier 1", praiseCount: 17, grades: { "English 11": "A", "History": "A" } },
        { name: "Elrond", email: "elrond.h@copley-fairlawn.org", parentEmail: "earendil@valinor.gov", points: 54, tier: "Tier 1", praiseCount: 15, grades: { "Chemistry II": "A", "History": "A" } },
        { name: "Faramir", email: "faramir.d@copley-fairlawn.org", parentEmail: "denethor@gondor.org", points: 34, tier: "Tier 1", praiseCount: 8, grades: { "English 11": "B", "History": "A" } },
        { name: "Eowyn", email: "eowyn.e@copley-fairlawn.org", parentEmail: "eomund@rohan.org", points: 38, tier: "Tier 1", praiseCount: 9, grades: { "History": "A", "English 11": "B" } },
        { name: "Kylo Ren", email: "kylo.ren@copley-fairlawn.org", parentEmail: "han.solo@starfleet.mil", points: 7, tier: "Tier 2", praiseCount: 1, grades: { "Chemistry II": "D-", "History": "F" } },
        { name: "Rey Skywalker", email: "rey.s@copley-fairlawn.org", parentEmail: "luke.s@jedi.edu", points: 36, tier: "Tier 1", praiseCount: 9, grades: { "Physics": "B", "Algebra II": "A" } },
        { name: "Finn", email: "finn.fn2187@copley-fairlawn.org", parentEmail: "captain.phasma@firstorder.mil", points: 31, tier: "Tier 1", praiseCount: 7, grades: { "History": "B", "English 11": "B" } },
        { name: "Poe Dameron", email: "poe.d@copley-fairlawn.org", parentEmail: "kes.dameron@rebel.org", points: 35, tier: "Tier 1", praiseCount: 8, grades: { "Algebra II": "B", "Physics": "A" } },
        { name: "Lando Calrissian", email: "lando.c@copley-fairlawn.org", parentEmail: "baron.calrissian@bespin.org", points: 32, tier: "Tier 1", praiseCount: 7, grades: { "Government": "B", "History": "B" } },
        { name: "Boba Fett", email: "boba.fett@copley-fairlawn.org", parentEmail: "jango.fett@kamino.gov", points: 19, tier: "Tier 1", praiseCount: 4, grades: { "Physics": "B", "History": "C" } },
        { name: "Sauron", email: "sauron.annatar@copley-fairlawn.org", parentEmail: "melkor@angband.gov", points: 2, tier: "Tier 3", praiseCount: 0, grades: { "Chemistry II": "F", "Government": "F" } },
        { name: "Saruman", email: "saruman.white@copley-fairlawn.org", parentEmail: "manwe@valinor.gov", points: 16, tier: "Tier 2", praiseCount: 2, grades: { "Chemistry II": "D", "Algebra II": "F" } },
        { name: "Gollum", email: "smeagol@copley-fairlawn.org", parentEmail: "grandma.smeagol@shire-mail.edu", points: 4, tier: "Tier 3", praiseCount: 1, grades: { "Algebra II": "F" } },
        { name: "Benjamin Sisko", email: "sisko.b@copley-fairlawn.org", parentEmail: "joseph.sisko@starfleet.mil", points: 50, tier: "Tier 1", praiseCount: 14, grades: { "Government": "A", "Physics": "A" } },
        { name: "Kira Nerys", email: "kira.nerys@copley-fairlawn.org", parentEmail: "kira.tabor@bajor.org", points: 29, tier: "Tier 1", praiseCount: 6, grades: { "History": "B", "English 11": "B" } },
        { name: "Odo", email: "odo.constable@copley-fairlawn.org", parentEmail: "dr.mora@bajor.org", points: 34, tier: "Tier 1", praiseCount: 7, grades: { "Government": "A", "Algebra II": "C" } },
        { name: "Jadzia Dax", email: "jadzia.dax@copley-fairlawn.org", parentEmail: "curzon.dax@trill.org", points: 48, tier: "Tier 1", praiseCount: 13, grades: { "Physics": "A", "Chemistry II": "A" } },
        { name: "Miles O'Brien", email: "obrien.m@copley-fairlawn.org", parentEmail: "michael.obrien@starfleet.mil", points: 44, tier: "Tier 1", praiseCount: 11, grades: { "Physics": "A", "Algebra II": "B" } },
        { name: "Quark", email: "quark.barman@copley-fairlawn.org", parentEmail: "keldar@ferenginar.gov", points: 14, tier: "Tier 2", praiseCount: 2, grades: { "Algebra II": "D", "Government": "C" } },
        { name: "Nyota Uhura", email: "uhura.n@copley-fairlawn.org", parentEmail: "alhamisi.uhura@starfleet.mil", points: 51, tier: "Tier 1", praiseCount: 14, grades: { "English 11": "A", "History": "A" } },
        { name: "Hikaru Sulu", email: "sulu.h@copley-fairlawn.org", parentEmail: "sulu.father@starfleet.mil", points: 41, tier: "Tier 1", praiseCount: 10, grades: { "Physics": "A", "Algebra II": "B" } },
        { name: "Pavel Chekov", email: "chekov.p@copley-fairlawn.org", parentEmail: "dmitri.chekov@starfleet.mil", points: 33, tier: "Tier 1", praiseCount: 7, grades: { "Physics": "B", "Algebra II": "A" } },
        { name: "Montgomery Scott", email: "scotty.m@copley-fairlawn.org", parentEmail: "scott.father@starfleet.mil", points: 47, tier: "Tier 1", praiseCount: 12, grades: { "Physics": "A", "Algebra II": "A" } },
        { name: "Leonard McCoy", email: "mccoy.l@copley-fairlawn.org", parentEmail: "david.mccoy@starfleet.mil", points: 45, tier: "Tier 1", praiseCount: 12, grades: { "Chemistry II": "A", "English 11": "B" } },
        { name: "Christopher Pike", email: "pike.c@copley-fairlawn.org", parentEmail: "pike.father@starfleet.mil", points: 53, tier: "Tier 1", praiseCount: 15, grades: { "Government": "A", "History": "A" } },
        { name: "Mace Windu", email: "mace.windu@copley-fairlawn.org", parentEmail: "jedi.temple@coruscant.edu", points: 46, tier: "Tier 1", praiseCount: 12, grades: { "Government": "A", "History": "B" } },
        { name: "Qui-Gon Jinn", email: "quigon.j@copley-fairlawn.org", parentEmail: "jedi.temple@coruscant.edu", points: 48, tier: "Tier 1", praiseCount: 13, grades: { "History": "A", "English 11": "A" } },
        { name: "Padme Amidala", email: "padme.a@copley-fairlawn.org", parentEmail: "ruwee.naberrie@naboo.gov", points: 55, tier: "Tier 1", praiseCount: 16, grades: { "Government": "A", "English 11": "A" } },
        { name: "Darth Maul", email: "darth.maul@copley-fairlawn.org", parentEmail: "mother.talzin@dathomir.org", points: 6, tier: "Tier 2", praiseCount: 1, grades: { "History": "F", "Government": "D" } },
        { name: "Count Dooku", email: "count.dooku@copley-fairlawn.org", parentEmail: "house.dooku@serenno.gov", points: 28, tier: "Tier 1", praiseCount: 6, grades: { "Government": "A", "History": "B" } },
        { name: "Sheev Palpatine", email: "emperor.p@copley-fairlawn.org", parentEmail: "house.palpatine@naboo.gov", points: 3, tier: "Tier 3", praiseCount: 0, grades: { "Government": "F", "History": "F" } },
        { name: "Bilbo Baggins", email: "bilbo.b@copley-fairlawn.org", parentEmail: "bungo.baggins@shire-mail.edu", points: 39, tier: "Tier 1", praiseCount: 9, grades: { "English 11": "A", "History": "B" } },
        { name: "Gloin", email: "gloin.dwarf@copley-fairlawn.org", parentEmail: "groin.dwarf@lonelymountain.gov", points: 28, tier: "Tier 1", praiseCount: 6, grades: { "Chemistry II": "B" } },
        { name: "Celeborn", email: "celeborn.l@copley-fairlawn.org", parentEmail: "galadhon@lothlorien.org", points: 35, tier: "Tier 1", praiseCount: 8, grades: { "History": "B", "English 11": "B" } },
        { name: "Eomer", email: "eomer.e@copley-fairlawn.org", parentEmail: "eomund@rohan.org", points: 39, tier: "Tier 1", praiseCount: 9, grades: { "History": "A", "Algebra II": "C" } },
        { name: "Theoden", email: "theoden.king@copley-fairlawn.org", parentEmail: "thengel@rohan.org", points: 42, tier: "Tier 1", praiseCount: 10, grades: { "History": "A", "Government": "B" } },
        { name: "Radagast", email: "radagast.brown@copley-fairlawn.org", parentEmail: "manwe@valinor.gov", points: 27, tier: "Tier 1", praiseCount: 5, grades: { "Chemistry II": "A", "Algebra II": "D" } },
        { name: "Glorfindel", email: "glorfindel.e@copley-fairlawn.org", parentEmail: "house.finwë@gondolin.org", points: 48, tier: "Tier 1", praiseCount: 12, grades: { "History": "A", "Physics": "A" } },
        { name: "Haldir", email: "haldir.l@copley-fairlawn.org", parentEmail: "galadhrim@lothlorien.org", points: 30, tier: "Tier 1", praiseCount: 7, grades: { "History": "B", "English 11": "C" } },
        { name: "Asajj Ventress", email: "asajj.v@copley-fairlawn.org", parentEmail: "sisters.dathomir@galaxy.org", points: 13, tier: "Tier 2", praiseCount: 2, grades: { "Chemistry II": "C", "History": "F" } },
        { name: "Plo Koon", email: "plo.koon@copley-fairlawn.org", parentEmail: "jedi.temple@coruscant.edu", points: 44, tier: "Tier 1", praiseCount: 11, grades: { "Physics": "A", "Government": "B" } },
        { name: "Kit Fisto", email: "kit.fisto@copley-fairlawn.org", parentEmail: "jedi.temple@coruscant.edu", points: 40, tier: "Tier 1", praiseCount: 10, grades: { "Chemistry II": "A", "Algebra II": "C" } },
        { name: "Shaak Ti", email: "shaak.ti@copley-fairlawn.org", parentEmail: "jedi.temple@coruscant.edu", points: 43, tier: "Tier 1", praiseCount: 11, grades: { "English 11": "A", "History": "B" } },
        { name: "Ezra Bridger", email: "ezra.b@copley-fairlawn.org", parentEmail: "ephraim.bridger@lothal.org", points: 26, tier: "Tier 1", praiseCount: 6, grades: { "Algebra II": "C", "Physics": "B" } },
        { name: "Kanan Jarrus", email: "kanan.j@copley-fairlawn.org", parentEmail: "depa.billaba@jedi.edu", points: 42, tier: "Tier 1", praiseCount: 10, grades: { "History": "A", "Physics": "B" } },
        { name: "Hera Syndulla", email: "hera.s@copley-fairlawn.org", parentEmail: "cham.syndulla@ryloth.org", points: 49, tier: "Tier 1", praiseCount: 13, grades: { "Physics": "A", "Government": "A" } },
        { name: "Sabine Wren", email: "sabine.w@copley-fairlawn.org", parentEmail: "ursa.wren@mandalore.gov", points: 38, tier: "Tier 1", praiseCount: 9, grades: { "Chemistry II": "A", "Algebra II": "B" } },
        { name: "Zeb Orrelios", email: "zeb.o@copley-fairlawn.org", parentEmail: "lasat.elders@lasan.org", points: 28, tier: "Tier 1", praiseCount: 5, grades: { "History": "C", "Algebra II": "C" } },
        { name: "Grand Admiral Thrawn", email: "thrawn@copley-fairlawn.org", parentEmail: "chiss.ascendancy@csilla.gov", points: 47, tier: "Tier 1", praiseCount: 12, grades: { "History": "A", "Physics": "A", "Algebra II": "A" } },
        { name: "Moff Gideon", email: "moff.gideon@copley-fairlawn.org", parentEmail: "imperial.remnant@outerrim.gov", points: 5, tier: "Tier 2", praiseCount: 1, grades: { "Government": "D", "History": "F" } },
        { name: "Cassian Andor", email: "cassian.a@copley-fairlawn.org", parentEmail: "marva.andor@ferrix.org", points: 32, tier: "Tier 1", praiseCount: 7, grades: { "History": "B", "Government": "C" } },
        { name: "Jyn Erso", email: "jyn.erso@copley-fairlawn.org", parentEmail: "galen.erso@deathstar.gov", points: 29, tier: "Tier 1", praiseCount: 6, grades: { "Physics": "C", "Chemistry II": "B" } },
        { name: "Din Djarin", email: "mando@copley-fairlawn.org", parentEmail: "armorer@mandalore.gov", points: 36, tier: "Tier 1", praiseCount: 9, grades: { "Physics": "B", "History": "B" } },
        { name: "Grogu", email: "grogu.child@copley-fairlawn.org", parentEmail: "mando@mandalore.gov", points: 38, tier: "Tier 1", praiseCount: 8, grades: { "English 11": "A" } },
        { name: "Bo-Katan Kryze", email: "bokatan@copley-fairlawn.org", parentEmail: "duke.adonai@mandalore.gov", points: 41, tier: "Tier 1", praiseCount: 10, grades: { "Government": "A", "History": "B" } },
        { name: "Gul Dukat", email: "dukat@copley-fairlawn.org", parentEmail: "cardassian.union@cardassia.gov", points: 4, tier: "Tier 3", praiseCount: 0, grades: { "Government": "F" } },
        { name: "Garak", email: "garak.elim@copley-fairlawn.org", parentEmail: "enabran.tain@obsidian.gov", points: 39, tier: "Tier 1", praiseCount: 10, grades: { "English 11": "A", "History": "A" } },
        { name: "Tuvok", email: "tuvok.vulcan@copley-fairlawn.org", parentEmail: "tpel.wife@vulcan.gov", points: 43, tier: "Tier 1", praiseCount: 11, grades: { "Physics": "A", "Algebra II": "A" } },
        { name: "Treebeard", email: "treebeard.fangorn@copley-fairlawn.org", parentEmail: "yavanna@valinor.gov", points: 22, tier: "Tier 1", praiseCount: 4, grades: { "History": "B", "Chemistry II": "C" } },
        { name: "Chakotay", email: "chakotay.commander@copley-fairlawn.org", parentEmail: "kolopak@alpha-quadrant.gov", points: 38, tier: "Tier 1", praiseCount: 9, grades: { "History": "B", "English 11": "A" } },
        { name: "Tom Paris", email: "tom.paris@copley-fairlawn.org", parentEmail: "admiral.paris@starfleet.mil", points: 27, tier: "Tier 1", praiseCount: 6, grades: { "Physics": "B", "Algebra II": "C" } },
        { name: "B'Elanna Torres", email: "torres.b@copley-fairlawn.org", parentEmail: "miral.torres@kqonos.gov", points: 37, tier: "Tier 1", praiseCount: 8, grades: { "Physics": "A", "Chemistry II": "B" } },
        { name: "Harry Kim", email: "harry.kim@copley-fairlawn.org", parentEmail: "kim.mother@starfleet.mil", points: 30, tier: "Tier 1", praiseCount: 7, grades: { "Physics": "B", "Algebra II": "B" } },
        { name: "Thorin Oakenshield", email: "thorin.o@copley-fairlawn.org", parentEmail: "thrain.dwarf@lonelymountain.gov", points: 44, tier: "Tier 1", praiseCount: 10, grades: { "History": "A", "Government": "B" } },
        { name: "Balin", email: "balin.dwarf@copley-fairlawn.org", parentEmail: "fundin.dwarf@lonelymountain.gov", points: 35, tier: "Tier 1", praiseCount: 8, grades: { "History": "A", "English 11": "B" } },
        { name: "Dwalin", email: "dwalin.dwarf@copley-fairlawn.org", parentEmail: "fundin.dwarf@lonelymountain.gov", points: 31, tier: "Tier 1", praiseCount: 6, grades: { "Algebra II": "C" } },
        { name: "Fili", email: "fili.dwarf@copley-fairlawn.org", parentEmail: "dis.dwarf@lonelymountain.gov", points: 29, tier: "Tier 1", praiseCount: 5, grades: { "History": "B" } },
        { name: "Kili", email: "kili.dwarf@copley-fairlawn.org", parentEmail: "dis.dwarf@lonelymountain.gov", points: 27, tier: "Tier 1", praiseCount: 6, grades: { "History": "B" } }
      ],

      mockVSOs: [
        { student: "Frodo Baggins", teacher: "Lee Malcolm", category: "Honorable", description: "Demonstrated incredible leadership and integrity during our English literature discussions.", points: 15, date: "2026-05-24" },
        { student: "Frodo Baggins", teacher: "Sarah Janiga", category: "Civil", description: "Extremely helpful in assisting classmates during the research projects this morning.", points: 10, date: "2026-05-26" },
        { student: "Arwen Undomiel", teacher: "Lee Malcolm", category: "Honorable", description: "Led the school-wide charity drive and successfully coordinated multiple classes.", points: 15, date: "2026-05-22" },
        { student: "Clark Kent", teacher: "Christina Davis", category: "Civil", description: "Helping clean the cafeteria tables when spills occurred, demonstrating exceptional care.", points: 10, date: "2026-05-22" },
        { student: "Gwen Stacy", teacher: "Sarah Janiga", category: "Civil", description: "Welcoming and mentoring a new transfer student during first period calculus.", points: 10, date: "2026-05-21" },
        { student: "Legolas Greenleaf", teacher: "Denise Polak", category: "Self-Managed", description: "Extremely tidy lockers and completing advanced chemistry logs ahead of schedule.", points: 10, date: "2026-05-20" },
        { student: "Spock", teacher: "Sarah Janiga", category: "Self-Managed", description: "Provided logical and highly detailed code templates for the robotics club.", points: 15, date: "2026-05-19" },
        { student: "Samwise Gamgee", teacher: "Lee Malcolm", category: "Civil", description: "Carrying heavy class materials for injured classmates, showing deep consideration.", points: 10, date: "2026-05-18" },
        { student: "Ahsoka Tano", teacher: "Denise Polak", category: "Honorable", description: "Outstanding performance during athletic leadership projects.", points: 15, date: "2026-05-17" }
      ],

      mockSlips: [
        { sender: "Frodo Baggins", teacher: "Sarah Janiga", message: "Mrs. Davis, thank you so much for spending extra time with me during study hall! The algebra test was so much easier after your visual walk-throughs.", category: "Super Support VSO", date: "2026-05-22" },
        { sender: "Gwen Stacy", teacher: "Sarah Janiga", message: "I really appreciated you checking in on me last week when I was having a rough day. It meant a lot to know my teacher cares about me.", category: "Welcome Wagon VSO", date: "2026-05-21" },
        { sender: "Spock", teacher: "Christina Davis", message: "Your mathematical formulas and explanations on the whiteboard are exceptionally logical and concise. Thank you for making geometry exciting.", category: "Captivating VSO", date: "2026-05-20" },
        { sender: "Ahsoka Tano", teacher: "Denise Polak", message: "Thank you for supporting our school club project after school! We couldn't have finished the banners without your encouragement and classroom access.", category: "GOAT VSO", date: "2026-05-18" }
      ],

      mockCheckAndConnect: [
        { student: "Anakin Skywalker", date: "2026-05-22", met: "Yes", goals: "Behavioral & Academic Goals", progress: "Steady Progress", notes: "Discussed focusing strategies during science labs. Anakin agreed to use his checklist." },
        { student: "Luke Skywalker", date: "2026-05-21", met: "Yes", goals: "Academic Focus", progress: "Significant Progress", notes: "Luke checked in with Q1 reading logs. All items are now fully caught up. Highly engaged!" },
        { student: "Peter Parker", date: "2026-05-20", met: "No", goals: "Behavioral Goals", progress: "No Progress / Stalled", notes: "Student was tardy and missed the Check & Connect meeting room. Follow up tomorrow." }
      ],

      selectedStudents: []
    };

    // Gamified Badge Definition Repository
    const BadgeDefs = {
      bronze: {
        name: "Bronze Arrowhead",
        requirement: "1 pt",
        tagline: "Congratulations, you earned your first point! Who says old dogs can't learn new tricks.",
        img: "assets/arrowhead_bronze_1779573390419.png"
      },
      silver: {
        name: "Silver Arrowhead",
        requirement: "3 pts",
        tagline: "Three points! Look at you go. Rumor has it the superintendent is personally drafting a thank you letter. (They aren't, but still, good job!)",
        img: "assets/arrowhead_silver_1779573411718.png"
      },
      gold: {
        name: "Gold Arrowhead",
        requirement: "5 pts",
        tagline: "Five points! You're on fire! We hope you have a fire extinguisher nearby.",
        img: "assets/arrowhead_gold_1779573431368.png"
      },
      obsidian: {
        name: "Obsidian Arrowhead",
        requirement: "10 pts",
        tagline: "Ten points! Double digits! You're officially a Copley Champion. Don't let all this power go to your head.",
        img: "assets/arrowhead_obsidian_1779573453926.png"
      },
      ruby: {
        name: "Ruby Arrowhead",
        requirement: "20 pts",
        tagline: "Twenty points! You've officially entered the upper echelon of CHS champions. Rumor has it the principal is jealous.",
        img: "assets/arrowhead_ruby_1780057236590.png"
      },
      diamond: {
        name: "Diamond Arrowhead",
        requirement: "30 pts",
        tagline: "Thirty points! Shining brighter than a diamond. Copley's own MVP of support.",
        img: "assets/arrowhead_diamond_1780057251053.png"
      },
      sapphire: {
        name: "Sapphire Arrowhead",
        requirement: "40 pts",
        tagline: "Forty points! The hall of fame is currently calling. They want to know if you prefer gold or marble for your bust.",
        img: "assets/arrowhead_sapphire_1780057263907.png"
      },
      prismatic: {
        name: "Ultimate Prismatic Arrowhead",
        requirement: "50 pts",
        tagline: "Fifty points! Ultimate Copley Legend. You have officially beaten the game of encouragement. Go get some coffee!",
        img: "assets/arrowhead_prismatic_1780057277204.png"
      },
      mtss: {
        name: "MTSS Crystal Arrowhead",
        requirement: "3 Support Logs",
        tagline: "Supporting student growth one check-in at a time. Psychologist Denise Polak nods in approval.",
        img: "assets/arrowhead_mtss_1779573475660.png"
      }
    };

    // Premium Web Audio API Haptic Synthesizers
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;

    function initAudio() {
      if (!audioCtx) {
        audioCtx = new AudioCtx();
      }
    }

    function playSynthClick() {
      // Silenced to ensure premium, clean, and silent UI transitions and clicks
    }

    function playSynthBasicClick() {
      try {
        initAudio();
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1500, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.01);

        gain.gain.setValueAtTime(0.012, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.01);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.01);
      } catch (e) {
        console.warn("Audio playback failed", e);
      }
    }

    function playSynthTemplateSelect() {
      try {
        initAudio();
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        const now = audioCtx.currentTime;
        
        // Soft premium bubble pop sound
        const osc1 = audioCtx.createOscillator();
        const gain1 = audioCtx.createGain();
        osc1.connect(gain1);
        gain1.connect(audioCtx.destination);
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(880, now);
        osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.04);
        gain1.gain.setValueAtTime(0.01, now);
        gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
        osc1.start(now);
        osc1.stop(now + 0.04);

        setTimeout(() => {
          try {
            if (audioCtx.state === 'suspended') return;
            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1320, audioCtx.currentTime);
            osc2.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.06);
            gain2.gain.setValueAtTime(0.008, audioCtx.currentTime);
            gain2.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.06);
            osc2.start();
            osc2.stop(audioCtx.currentTime + 0.06);
          } catch(e){}
        }, 30);
      } catch (e) {
        console.warn("Audio playback failed", e);
      }
    }

    function playSynthSuccess() {
      try {
        initAudio();
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        const now = audioCtx.currentTime;
        
        // Note 1 (E5)
        const osc1 = audioCtx.createOscillator();
        const gain1 = audioCtx.createGain();
        osc1.connect(gain1);
        gain1.connect(audioCtx.destination);
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(659.25, now);
        gain1.gain.setValueAtTime(0.04, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc1.start(now);
        osc1.stop(now + 0.15);

        // Note 2 (A5)
        setTimeout(() => {
          try {
            if (audioCtx.state === 'suspended') return;
            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(880, audioCtx.currentTime);
            gain2.gain.setValueAtTime(0.04, audioCtx.currentTime);
            gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
            osc2.start();
            osc2.stop(audioCtx.currentTime + 0.25);
          } catch(e){}
        }, 100);
      } catch (e) {
        console.warn("Audio playback failed", e);
      }
    }

    function playSynthFanfare() {
      try {
        initAudio();
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        const now = audioCtx.currentTime;
        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        notes.forEach((freq, idx) => {
          const startTime = now + idx * 0.08;
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, startTime);
          
          gain.gain.setValueAtTime(0, startTime);
          gain.gain.linearRampToValueAtTime(0.03, startTime + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
          
          osc.start(startTime);
          osc.stop(startTime + 0.45);
        });
      } catch (e) {
        console.warn("Audio playback failed", e);
      }
    }

    function playSynthBowString() {
      try {
        initAudio();
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        const now = audioCtx.currentTime;

        // --- Pluck/Friction Sweep ---
        // Represents the high-frequency snap/pluck of the string release
        const pluckOsc = audioCtx.createOscillator();
        const pluckGain = audioCtx.createGain();
        pluckOsc.connect(pluckGain);
        pluckGain.connect(audioCtx.destination);

        pluckOsc.type = 'triangle';
        // Pluck sweep: 800Hz down to 200Hz in 0.04 seconds
        pluckOsc.frequency.setValueAtTime(800, now);
        pluckOsc.frequency.exponentialRampToValueAtTime(200, now + 0.04);

        // Rapid amplitude envelope
        pluckGain.gain.setValueAtTime(0.06, now);
        pluckGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        pluckOsc.start(now);
        pluckOsc.stop(now + 0.04);

        // --- Low Resonant Twang ---
        // Represents the vibrating body and heavier release of the string
        const twangOsc = audioCtx.createOscillator();
        const twangGain = audioCtx.createGain();
        twangOsc.connect(twangGain);
        twangGain.connect(audioCtx.destination);

        twangOsc.type = 'sine';
        // Twang frequency sweep: 120Hz down to 80Hz in 0.15 seconds
        twangOsc.frequency.setValueAtTime(120, now);
        twangOsc.frequency.linearRampToValueAtTime(80, now + 0.15);

        // Twang amplitude envelope
        twangGain.gain.setValueAtTime(0.08, now);
        twangGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        twangOsc.start(now);
        twangOsc.stop(now + 0.15);

      } catch (e) {
        console.warn("Audio playback failed", e);
      }
    }

    function triggerArrowBurst(x, y) {
      try {
        const minAngle = -150;
        const maxAngle = -30;
        const step = (maxAngle - minAngle) / 11; // 12 elements fanning out

        for (let i = 0; i < 12; i++) {
          const baseAngle = minAngle + i * step;
          const jitter = (Math.random() - 0.5) * (step * 0.7);
          const angleDeg = baseAngle + jitter;
          const angleRad = angleDeg * Math.PI / 180;

          const distance = Math.random() * 200 + 180; // 180px to 380px
          const dx = Math.cos(angleRad) * distance;
          const dy = Math.sin(angleRad) * distance;

          const duration = Math.random() * 0.5 + 0.7; // 0.7s to 1.2s

          const isArrowhead = Math.random() > 0.5;
          const iconClass = isArrowhead ? 'fa-location-arrow' : 'fa-arrow-up';
          const rotationOffset = isArrowhead ? 45 : 90;
          const rotation = angleDeg + rotationOffset;

          // Create a container div representing the combined 'arrow carrying a letter' particle
          const container = document.createElement('div');
          container.className = 'appreciation-arrow flex items-center justify-center';
          
          const arrowSize = Math.random() * 8 + 16; // 16px to 24px
          const envelopeSize = arrowSize * 0.55; // Proportional sizing for the message envelope

          // Copley branding colors: Navy (#0c2346) or Gold (#ffcc04)
          const isGold = Math.random() > 0.4;
          const arrowColor = isGold ? '#ffcc04' : '#0c2346';
          
          // Contrasting colorful envelope color scheme
          const envelopeColor = isGold ? '#ffffff' : '#ffcc04';
          const strokeColor = isGold ? '#0c2346' : '#ffffff';

          // 1. The Arrow Element
          const arrowEl = document.createElement('i');
          arrowEl.className = `fa-solid ${iconClass}`;
          arrowEl.style.color = arrowColor;
          arrowEl.style.fontSize = `${arrowSize}px`;
          arrowEl.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))';

          // 2. The Tied Message Envelope Element
          const envelopeEl = document.createElement('i');
          // Alternate between sealed envelope and open letter envelope for rich visual variety
          const envelopeIcon = Math.random() > 0.5 ? 'fa-envelope' : 'fa-envelope-open-text';
          envelopeEl.className = `fa-solid ${envelopeIcon}`;
          envelopeEl.style.color = envelopeColor;
          envelopeEl.style.fontSize = `${envelopeSize}px`;
          envelopeEl.style.position = 'absolute';
          envelopeEl.style.filter = `drop-shadow(0 1px 2px rgba(0,0,0,0.2))`;
          envelopeEl.style.textShadow = `0 0 1.5px ${strokeColor}, 0 0 1.5px ${strokeColor}`;

          // Offset envelope perfectly to tie it to the arrow tail
          if (isArrowhead) {
            // Tail of fa-location-arrow (pointing northeast by default) is bottom-left
            envelopeEl.style.transform = `translate(-${arrowSize * 0.5}px, ${arrowSize * 0.5}px)`;
          } else {
            // Tail of fa-arrow-up is bottom
            envelopeEl.style.transform = `translate(0px, ${arrowSize * 0.65}px)`;
          }

          container.appendChild(arrowEl);
          container.appendChild(envelopeEl);

          // Apply physics and coordinates to the animated container
          container.style.left = `${x}px`;
          container.style.top = `${y}px`;

          container.style.setProperty('--dx', `${dx}px`);
          container.style.setProperty('--dy', `${dy}px`);
          container.style.setProperty('--rotate', `${rotation}deg`);
          container.style.setProperty('--duration', `${duration}s`);

          document.body.appendChild(container);

          // Automated garbage collection
          setTimeout(() => {
            container.remove();
          }, duration * 1000 + 100);
        }
      } catch (e) {
        console.warn("Arrow particle burst failed", e);
      }
    }

    function triggerConfetti() {
      try {
        const colors = ['#0c2346', '#ffcc04', '#3b82f6', '#10b981', '#f59e0b', '#ec4899'];
        const container = document.createElement('div');
        container.className = "fixed inset-0 pointer-events-none z-[100] overflow-hidden";
        document.body.appendChild(container);

        for (let i = 0; i < 80; i++) {
          const piece = document.createElement('div');
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          piece.style.position = 'absolute';
          piece.style.width = Math.random() * 8 + 6 + 'px';
          piece.style.height = Math.random() * 12 + 6 + 'px';
          piece.style.backgroundColor = color;
          piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
          
          // Scattered starting points at the top of the viewport
          piece.style.left = Math.random() * 100 + 'vw';
          piece.style.top = -20 + 'px';
          
          const duration = Math.random() * 2 + 1.8;
          const delay = Math.random() * 0.4;
          piece.style.opacity = Math.random() * 0.7 + 0.3;
          
          piece.animate([
            { transform: `translate3d(0, 0, 0) rotate(0deg)`, opacity: 1 },
            { transform: `translate3d(${(Math.random() - 0.5) * 250}px, 105vh, 0) rotate(${Math.random() * 1080}deg)`, opacity: 0 }
          ], {
            duration: duration * 1000,
            delay: delay * 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
            fill: 'both'
          });
          
          container.appendChild(piece);
        }

        // Auto clean-up
        setTimeout(() => {
          container.remove();
        }, 3000);
      } catch (e) {
        console.warn("Confetti display failed", e);
      }
    }

    function showToast(title, body) {
      try {
        const toast = document.getElementById('toastNotification');
        const titleEl = document.getElementById('toastTitle');
        const bodyEl = document.getElementById('toastBody');
        
        if (!toast || !titleEl || !bodyEl) return;
        
        titleEl.innerText = title;
        bodyEl.innerText = body;
        
        // Reset translation and classes
        toast.classList.remove('translate-y-24', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
        
        // Auto-close after 3.5 seconds
        if (window.toastTimer) {
          clearTimeout(window.toastTimer);
        }
        window.toastTimer = setTimeout(() => {
          toast.classList.remove('translate-y-0', 'opacity-100');
          toast.classList.add('translate-y-24', 'opacity-0');
        }, 3500);
      } catch (e) {
        console.warn("Toast error", e);
      }
    }

    // CHS PBIS School-Wide Expectations Matrix Repository
    const PBISMatrix = {
      Classroom: {
        Civil: {
          desc: "Someone who is polite, respectful, and considerate.",
          rules: [
            "We use polite and respectful language.",
            "We follow all classroom directives."
          ]
        },
        Honorable: {
          desc: "Someone who strives to do the right thing.",
          rules: [
            "We show up on time with all required materials.",
            "We are active participants and do our own work.",
            "We plan ahead if we need to attend a different class or learning lab."
          ]
        },
        SelfManaged: {
          desc: "Someone who avoids unnecessary risk, pays attention, and is careful.",
          rules: [
            "We keep our bodies and materials to self.",
            "We stay in our assigned learning space."
          ]
        }
      },
      Bus: {
        Civil: {
          desc: "Someone who is polite, respectful, and considerate.",
          rules: [
            "We use polite and respectful language.",
            "We listen to staff directives."
          ]
        },
        Honorable: {
          desc: "Someone who strives to do the right thing.",
          rules: [
            "We are prepared and ready.",
            "We respect others' property."
          ]
        },
        SelfManaged: {
          desc: "Someone who avoids unnecessary risk, pays attention, and is careful.",
          rules: [
            "We keep our bodies and materials to self.",
            "We stay in our assigned seats."
          ]
        }
      },
      Arrival: {
        Civil: {
          desc: "Someone who is polite, respectful, and considerate.",
          rules: [
            "We use polite and respectful language.",
            "We listen to staff directives."
          ]
        },
        Honorable: {
          desc: "Someone who strives to do the right thing.",
          rules: [
            "We are prepared and ready.",
            "We enter and exit the building in a timely manner."
          ]
        },
        SelfManaged: {
          desc: "Someone who avoids unnecessary risk, pays attention, and is careful.",
          rules: [
            "We keep our bodies and materials to self."
          ]
        }
      },
      Hallways: {
        Civil: {
          desc: "Someone who is polite, respectful, and considerate.",
          rules: [
            "We use polite and respectful language.",
            "We listen to staff directives."
          ]
        },
        Honorable: {
          desc: "Someone who strives to do the right thing.",
          rules: [
            "We take the most direct route to our destination.",
            "We keep our hallways clean."
          ]
        },
        SelfManaged: {
          desc: "Someone who avoids unnecessary risk, pays attention, and is careful.",
          rules: [
            "We keep our bodies and materials to self."
          ]
        }
      },
      Restroom: {
        Civil: {
          desc: "Someone who is polite, respectful, and considerate.",
          rules: [
            "We respect the privacy of others.",
            "We take care of school property."
          ]
        },
        Honorable: {
          desc: "Someone who strives to do the right thing.",
          rules: [
            "We are quick and limit trips.",
            "We ask for permission to use the restroom"
          ]
        },
        SelfManaged: {
          desc: "Someone who avoids unnecessary risk, pays attention, and is careful.",
          rules: [
            "We use the restroom for what it was designed for.",
            "One person in a stall at a time."
          ]
        }
      },
      Cafeteria: {
        Civil: {
          desc: "Someone who is polite, respectful, and considerate.",
          rules: [
            "We use polite and respectful language.",
            "We use restaurant voices.",
            "We respect others' personal space."
          ]
        },
        Honorable: {
          desc: "Someone who strives to do the right thing.",
          rules: [
            "We dispose of our own trash in a responsible manner.",
            "We arrive on time and stay in the cafeteria."
          ]
        },
        SelfManaged: {
          desc: "Someone who avoids unnecessary risk, pays attention, and is careful.",
          rules: [
            "We stay seated at our table unless necessary to get up.",
            "We avoid making messes."
          ]
        }
      }
    };

    function openMatrixDrawer() {
      const drawer = document.getElementById('matrixDrawer');
      drawer.classList.remove('hidden');
      // force reflow
      drawer.offsetHeight;
      drawer.classList.remove('translate-x-full');
      switchMatrixLocation('Classroom');
      playSynthClick();
    }

    function closeMatrixDrawer() {
      const drawer = document.getElementById('matrixDrawer');
      drawer.classList.add('translate-x-full');
      setTimeout(() => {
        drawer.classList.add('hidden');
      }, 300);
      playSynthClick();
    }

    function switchMatrixLocation(loc) {
      const buttons = ["Classroom", "Bus", "Arrival", "Hallways", "Restroom", "Cafeteria"];
      buttons.forEach(b => {
        const btn = document.getElementById(`matTab-${b}`);
        if (btn) {
          if (b === loc) {
            btn.className = "bg-copley-blue text-copley-gold p-2 rounded text-[10px] font-black uppercase text-center tracking-wider transition shadow-sm border border-copley-gold/30";
          } else {
            btn.className = "bg-slate-100 text-slate-600 hover:bg-slate-200 p-2 rounded text-[10px] font-black uppercase text-center tracking-wider transition border border-slate-200/50";
          }
        }
      });

      const container = document.getElementById('matrixActiveView');
      container.innerHTML = '';

      const data = PBISMatrix[loc];
      const categories = [
        { key: "Civil", label: "Civil", icon: "fa-heart", border: "border-copley-gold/30 bg-copley-gold/5", iconColor: "text-amber-500" },
        { key: "Honorable", label: "Honorable", icon: "fa-shield-halved", border: "border-copley-blue/20 bg-copley-blue/5", iconColor: "text-copley-blue" },
        { key: "SelfManaged", label: "Self-Managed", icon: "fa-clock-rotate-left", border: "border-emerald-200 bg-emerald-50/50", iconColor: "text-emerald-600" }
      ];

      categories.forEach(cat => {
        const item = data[cat.key];
        const rulesHTML = item.rules.map(r => `
          <div onclick="selectMatrixRule('${cat.key}', '${r.replace(/'/g, "\\'")}')" class="p-2 bg-white border border-slate-200 hover:border-copley-gold hover:shadow-sm rounded-lg cursor-pointer transition select-none flex items-start gap-2 text-[10px] font-bold">
            <i class="fa-solid fa-plus text-slate-400 mt-0.5"></i>
            <span class="text-slate-600 hover:text-slate-800 leading-normal">${r}</span>
          </div>
        `).join('');

        const col = document.createElement('div');
        col.className = `p-4 rounded-xl border flex flex-col justify-between ${cat.border}`;
        col.innerHTML = `
          <div>
            <h4 class="text-xs font-black text-copley-blue flex items-center gap-1.5 border-b border-slate-200 pb-1.5 mb-2 uppercase tracking-wider heading-style">
              <i class="fa-solid ${cat.icon} ${cat.iconColor}"></i>
              <span>${cat.label}</span>
            </h4>
            <p class="text-[10px] text-slate-400 italic mb-3 leading-normal">${item.desc}</p>
            <div class="space-y-2 mt-2">
              ${rulesHTML}
            </div>
          </div>
        `;
        container.appendChild(col);
      });

      playSynthClick();
    }

    function selectMatrixRule(category, ruleText) {
      document.getElementById('vsoCategory').value = category;
      document.getElementById('vsoNotes').value = ruleText;
      showToast("Expectation Copied!", `Selected ${category} rule and inserted it into the description.`);
    }

    // Navigation and Tab-switching Controller
    function switchTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('block');
      });

      const activeEl = document.getElementById(tabId === 'slips' ? 'slips-tab' : `tab-${tabId}`);
      if (activeEl) {
        activeEl.classList.remove('hidden');
        activeEl.classList.add('block');
      }

      // Handle CSS indicators
      document.querySelectorAll('nav button').forEach(btn => {
        btn.className = "flex items-center space-x-3 px-4 py-3.5 rounded-xl font-bold transition-all duration-200 text-sm text-slate-600 hover:bg-slate-100 hover:text-copley-blue border-l-4 border-transparent";
      });

      const activeBtn = document.getElementById(`nav-${tabId}`);
      if (activeBtn) {
        activeBtn.className = "flex items-center space-x-3 px-4 py-3.5 rounded-xl font-bold transition-all duration-200 text-sm shadow-md bg-copley-blue text-copley-gold border-l-4 border-copley-gold";
      }

      // Special Tab Hydrations
      if (tabId === 'mtss') {
        if (window.renderMTSSDashboard) {
          window.renderMTSSDashboard();
        }
      } else if (tabId === 'cc') {
        if (window.renderCCDashboard) {
          window.renderCCDashboard();
        }
      } else if (tabId === 'dashboard') {
        updateTeacherBadges();
      }
    }

    // =========================================================================
    // SECURE STUDENT PORTAL MODE SWITCHER & DIRECT RAFFLE TICKET ECONOMY
    // =========================================================================

    function togglePortalMode(mode) {
      playSynthBasicClick();
      
      const staffWorkspace = document.getElementById('staff-portal-workspace');
      const studentWorkspace = document.getElementById('student-portal-workspace');
      const toggleStaffBtn = document.getElementById('portal-toggle-staff');
      const toggleStudentBtn = document.getElementById('portal-toggle-student');
      const staffSel = document.getElementById('headerStaffSelectorContainer');
      const studentSel = document.getElementById('headerStudentSelectorContainer');
      
      if (mode === 'staff') {
        staffWorkspace.classList.remove('hidden');
        studentWorkspace.classList.add('hidden');
        
        toggleStaffBtn.className = "bg-copley-gold text-copley-blue px-3 py-1.5 rounded-lg font-black uppercase transition-all shadow-sm flex items-center gap-1";
        toggleStudentBtn.className = "text-slate-400 hover:text-white px-3 py-1.5 rounded-lg font-black uppercase transition-all flex items-center gap-1";
        
        staffSel.classList.remove('hidden');
        staffSel.classList.add('flex');
        studentSel.classList.add('hidden');
        studentSel.classList.remove('flex');
        
        recalculateDistrictStats();
      } else {
        staffWorkspace.classList.add('hidden');
        studentWorkspace.classList.remove('hidden');
        
        toggleStaffBtn.className = "text-slate-400 hover:text-white px-3 py-1.5 rounded-lg font-black uppercase transition-all flex items-center gap-1";
        toggleStudentBtn.className = "bg-copley-gold text-copley-blue px-3 py-1.5 rounded-lg font-black uppercase transition-all shadow-sm flex items-center gap-1";
        
        staffSel.classList.add('hidden');
        staffSel.classList.remove('flex');
        studentSel.classList.remove('hidden');
        studentSel.classList.add('flex');
        
        populateStudentProfiles();
        populateSlipTeachers();
        updateStudentDashboard();
        renderStudentLeaderboard();
        switchStudentTab('shoutout');
      }
    }

    function populateStudentProfiles() {
      const sel = document.getElementById('studentSelector');
      if (!sel) return;
      sel.innerHTML = '';
      
      const sortedStudents = [...AppState.students].sort((a, b) => a.name.localeCompare(b.name));
      
      sortedStudents.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.name;
        opt.innerText = s.name;
        if (s.name === AppState.activeStudent) opt.selected = true;
        sel.appendChild(opt);
      });
      
      document.getElementById('sessionStudentName').innerText = AppState.activeStudent;
    }

    function populateSlipTeachers() {
      const sel = document.getElementById('slipTeacherTarget');
      if (!sel) return;
      sel.innerHTML = '';
      
      AppState.teachers.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.innerText = t;
        sel.appendChild(opt);
      });
    }

    function handleStudentProfileChange(val) {
      AppState.activeStudent = val;
      document.getElementById('sessionStudentName').innerText = val;
      document.getElementById('studentSelector').value = val;
      
      showToast("Student Switched", `Viewing portal as CHS student ${val}.`);
      updateStudentDashboard();
      playSynthSuccess();
    }

    function buyRaffleTickets(qty) {
      const student = AppState.activeStudent;
      const std = AppState.students.find(s => s.name === student);
      if (!std) return;
      
      const cost = qty * 5;
      if (std.points < cost) {
        playSynthBasicClick();
        showToast("Insufficient Points!", `You need ${cost} points to buy ${qty} tickets, but you only have ${std.points} points.`);
        return;
      }
      
      // Deduct points from active student points balance
      std.points -= cost;
      
      // Add tickets to student's unallocated tickets
      if (!AppState.studentRaffleTickets[student]) {
        AppState.studentRaffleTickets[student] = { unallocated: 0, cfa: 0, gamestop: 0, starbucks: 0, canes: 0, citybbq: 0, bestbuy: 0, spiritshop: 0 };
      }
      AppState.studentRaffleTickets[student].unallocated += qty;
      
      playSynthSuccess();
      triggerConfetti();
      
      const ticketWord = qty === 1 ? "Ticket" : "Tickets";
      showToast("🎟️ PURCHASE SUCCESSFUL!", `Purchased ${qty} Raffle ${ticketWord} for ${cost} points!`);
      
      // Dynamic updates across dashboards immediately
      updateStudentDashboard();
      recalculateDistrictStats();
      hydrateScoreboard();
    }

    function exportCaseloadRaffleReport() {
      playSynthSuccess();
      triggerConfetti();
      
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += "Student Name,Grade Level,PBIS Points,Unallocated Tickets,Chick-fil-A Tickets,GameStop Tickets,Starbucks Tickets,Raising Cane's Tickets,City BBQ Tickets,Best Buy Tickets,Spirit Shop Tickets\n";
      
      AppState.students.forEach(std => {
        // Dynamic grade level mapping based on their class listings
        const classes = Object.keys(std.grades || {});
        let gradeLevel = "10th Grade";
        if (classes.some(c => c.includes("11") || c.includes("English 11"))) {
          gradeLevel = "11th Grade";
        } else if (classes.some(c => c.includes("Physics") || c.includes("Government"))) {
          gradeLevel = "12th Grade";
        } else if (classes.some(c => c.includes("Algebra II") || c.includes("Chemistry II"))) {
          gradeLevel = "10th Grade";
        } else {
          gradeLevel = "9th Grade";
        }
        
        const tickets = AppState.studentRaffleTickets[std.name] || { unallocated: 0, cfa: 0, gamestop: 0, starbucks: 0, canes: 0, citybbq: 0, bestbuy: 0, spiritshop: 0 };
        
        const row = [
          `"${std.name}"`,
          `"${gradeLevel}"`,
          std.points,
          tickets.unallocated || 0,
          tickets.cfa || 0,
          tickets.gamestop || 0,
          tickets.starbucks || 0,
          tickets.canes || 0,
          tickets.citybbq || 0,
          tickets.bestbuy || 0,
          tickets.spiritshop || 0
        ];
        
        csvContent += row.join(",") + "\n";
      });
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `copley_pbis_caseload_report_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      
      link.click();
      document.body.removeChild(link);
      
      showToast("📊 REPORT EXPORTED!", "PBIS caseload and raffle ticket CSV report downloaded successfully.");
    }

    function enterRaffleTicket(basketId) {
      const student = AppState.activeStudent;
      
      if (!AppState.studentRaffleTickets[student]) {
        AppState.studentRaffleTickets[student] = { unallocated: 0, cfa: 0, gamestop: 0, starbucks: 0, canes: 0, citybbq: 0, bestbuy: 0, spiritshop: 0 };
      }
      
      const tickets = AppState.studentRaffleTickets[student];
      
      if (tickets.unallocated <= 0) {
        playSynthBasicClick();
        showToast("No Tickets Available!", "Purchase Raffle Tickets in the Ticket Hub using your points!");
        return;
      }
      
      playSynthTemplateSelect();
      tickets.unallocated -= 1;
      tickets[basketId] = (tickets[basketId] || 0) + 1;
      
      updateStudentDashboard();
      showToast("Ticket Dropped!", `Successfully added 1 ticket into the ${basketId.toUpperCase()} Raffle Basket!`);
    }

    function submitStudentSlip() {
      const student = AppState.activeStudent;
      const targetTeacher = document.getElementById('slipTeacherTarget').value;
      const category = document.getElementById('slipCategory').value;
      const notes = document.getElementById('slipNotes').value;
      
      // Play snappy bow string release pluck/twang sound
      playSynthBowString();
      
      // Calculate submit button center coordinates for arrow particle launch
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;
      const submitBtn = document.querySelector('#studentSlipForm button[type="submit"]');
      if (submitBtn) {
        const rect = submitBtn.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
      
      // Launch Copley "Arrows of Appreciation" burst from button coordinates
      triggerArrowBurst(x, y);
      
      AppState.mockSlips.unshift({
        sender: student,
        teacher: targetTeacher,
        message: notes,
        category: category,
        date: new Date().toISOString().split('T')[0],
        status: 'Pending',
        anonymous: document.getElementById('slipAnonymous').checked
      });

      // Award the active student +5 points for showing gratitude!
      const stdObj = AppState.students.find(s => s.name === student);
      if (stdObj) {
        stdObj.points += 5;
        // Reactively update standings, hourglasses, and scores
        hydrateScoreboard(); 
      }
      
      document.getElementById('slipNotes').value = '';
      document.getElementById('slipAnonymous').checked = false;
      
      showToast("VSO Submitted for Review! 🎁", "Thank you! Your shout-out was routed to the GenYES Tech Crew for approval. You earned +5 points.");
      triggerConfetti();
      
      renderVirtualSlips();
      updateStudentDashboard();
      renderStudentLeaderboard();
      if (AppState.activeGenyesMember) {
        renderGenyesInbox();
      }
    }

    // =========================================================================
    // STUDENT PORTAL LEADERBOARD CONTROLLERS
    // =========================================================================
    let currentLeaderboardFilter = 'received';

    function toggleLeaderboardFilter(filter) {
      currentLeaderboardFilter = filter;
      
      const btnReceived = document.getElementById('leadBtn-received');
      const btnSent = document.getElementById('leadBtn-sent');
      
      if (!btnReceived || !btnSent) return;

      if (filter === 'received') {
        btnReceived.className = "flex-grow bg-white text-copley-blue px-2.5 py-1.5 rounded-lg shadow-sm font-black uppercase text-center transition-all";
        btnSent.className = "flex-grow text-slate-400 hover:text-slate-700 px-2.5 py-1.5 rounded-lg font-black uppercase text-center transition-all";
      } else {
        btnSent.className = "flex-grow bg-white text-copley-blue px-2.5 py-1.5 rounded-lg shadow-sm font-black uppercase text-center transition-all";
        btnReceived.className = "flex-grow text-slate-400 hover:text-slate-700 px-2.5 py-1.5 rounded-lg font-black uppercase text-center transition-all";
      }
      
      playSynthBasicClick();
      renderStudentLeaderboard();
    }

    function renderStudentLeaderboard() {
      const container = document.getElementById('studentLeaderboardList');
      if (!container) return;
      container.innerHTML = '';

      initStudentCosmetics();

      if (currentLeaderboardFilter === 'received') {
        // Sort by points received (Top Scholars)
        const sorted = [...AppState.students].sort((a, b) => b.points - a.points).slice(0, 5);
        sorted.forEach((std, idx) => {
          const grp = getStudentGradeGroup(std);
          
          // Get equipped cosmetics for avatar, border, and title display
          const cos = AppState.studentCosmetics[std.name] || {
            avatar: { type: "monogram", char: std.name.charAt(0), emoji: "cat", icon: "grad", font: "default", bg: "default" },
            border: "default",
            title: "default"
          };
          const avatarDef = cos.avatar;
          
          const avatarBgDef = CosmeticCatalog.avatarBg.find(bg => bg.id === avatarDef.bg) || CosmeticCatalog.avatarBg[0];
          const avatarEmojiDef = CosmeticCatalog.avatarEmoji.find(e => e.id === avatarDef.emoji) || CosmeticCatalog.avatarEmoji[0];
          const avatarIconDef = CosmeticCatalog.avatarIcon.find(i => i.id === avatarDef.icon) || CosmeticCatalog.avatarIcon[0];
          
          const borderDef = CosmeticCatalog.border.find(b => b.id === cos.border) || CosmeticCatalog.border[0];
          const titleDef = CosmeticCatalog.title.find(t => t.id === cos.title) || CosmeticCatalog.title[0];
          
          let borderMiniStyle = '';
          if (borderDef.id === 'gold') borderMiniStyle = 'border-2 border-copley-gold shadow-[0_0_5px_rgba(255,204,4,0.7)]';
          else if (borderDef.id === 'blue') borderMiniStyle = 'border-2 border-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.7)]';
          else if (borderDef.id === 'emerald') borderMiniStyle = 'border-2 border-emerald-500 shadow-[0_0_7px_rgba(16,185,129,0.8)]';
          else if (borderDef.id === 'cyber') borderMiniStyle = 'border-2 border-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.85)]';
          else borderMiniStyle = 'border border-slate-350';

          let avatarIconHTML = '';
          if (avatarDef.type === "monogram") {
            avatarIconHTML = `<span class="text-[9px] font-black text-white shrink-0 leading-none">${avatarDef.char || std.name.charAt(0)}</span>`;
          } else if (avatarDef.type === "emoji") {
            avatarIconHTML = `<span class="text-[10px] leading-none shrink-0 select-none">${avatarEmojiDef.char}</span>`;
          } else if (avatarDef.type === "icon") {
            avatarIconHTML = `<i class="fa-solid ${avatarIconDef.icon} text-[9px] text-white shrink-0"></i>`;
          }
          
          let titleBadgeHTML = '';
          if (titleDef.id !== 'default' && titleDef.titleText) {
            titleBadgeHTML = `<span class="text-[7.5px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded bg-copley-gold/10 text-copley-blue border border-copley-gold/10 heading-style ml-1.5">${titleDef.titleText}</span>`;
          }

          let badgeColor = "bg-slate-100 text-slate-500";
          if (idx === 0) badgeColor = "bg-copley-gold text-copley-blue border border-copley-gold/30";
          else if (idx === 1) badgeColor = "bg-slate-200 text-slate-700";
          else if (idx === 2) badgeColor = "bg-amber-700 text-white";

          const row = document.createElement('div');
          row.className = "flex items-center justify-between p-2 rounded-lg border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-colors";
          row.innerHTML = `
            <div class="flex items-center space-x-2.5 truncate min-w-0">
              <span class="w-5.5 h-5.5 rounded-full flex items-center justify-center font-black text-[9px] ${badgeColor} shrink-0">
                ${idx + 1}
              </span>
              <!-- Circular cosmetic avatar preview -->
              <div class="w-6.5 h-6.5 rounded-full p-0.2 shrink-0 flex items-center justify-center bg-slate-200/50">
                <div class="w-full h-full rounded-full bg-gradient-to-br ${avatarBgDef.gradient} flex items-center justify-center ${borderMiniStyle}">
                  ${avatarIconHTML}
                </div>
              </div>
              <div class="text-left leading-tight truncate min-w-0">
                <div class="flex items-center min-w-0">
                  <span class="text-xs font-black text-slate-800 truncate leading-none">${std.name}</span>
                  ${titleBadgeHTML}
                </div>
                <span class="text-[8px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5 leading-none">${grp}</span>
              </div>
            </div>
            <span class="text-[9px] font-black bg-copley-blue/10 text-copley-blue px-2.5 py-1 rounded-full whitespace-nowrap">${std.points} PTS</span>
          `;
          container.appendChild(row);
        });
      } else {
        // Sort by shoutouts sent (Top Givers)
        const sentCounts = {};
        AppState.mockSlips.forEach(slip => {
          const sender = slip.sender;
          sentCounts[sender] = (sentCounts[sender] || 0) + 1;
        });

        const studentsWithSent = AppState.students.map(std => ({
          ...std,
          sentCount: sentCounts[std.name] || 0
        })).sort((a, b) => b.sentCount - a.sentCount || b.points - a.points).slice(0, 5);

        studentsWithSent.forEach((std, idx) => {
          const grp = getStudentGradeGroup(std);
          
          // Get cosmetics
          const cos = AppState.studentCosmetics[std.name] || {
            avatar: { type: "monogram", char: std.name.charAt(0), emoji: "cat", icon: "grad", font: "default", bg: "default" },
            border: "default",
            title: "default"
          };
          const avatarDef = cos.avatar;
          
          const avatarBgDef = CosmeticCatalog.avatarBg.find(bg => bg.id === avatarDef.bg) || CosmeticCatalog.avatarBg[0];
          const avatarEmojiDef = CosmeticCatalog.avatarEmoji.find(e => e.id === avatarDef.emoji) || CosmeticCatalog.avatarEmoji[0];
          const avatarIconDef = CosmeticCatalog.avatarIcon.find(i => i.id === avatarDef.icon) || CosmeticCatalog.avatarIcon[0];
          
          const borderDef = CosmeticCatalog.border.find(b => b.id === cos.border) || CosmeticCatalog.border[0];
          const titleDef = CosmeticCatalog.title.find(t => t.id === cos.title) || CosmeticCatalog.title[0];
          
          let borderMiniStyle = '';
          if (borderDef.id === 'gold') borderMiniStyle = 'border-2 border-copley-gold shadow-[0_0_5px_rgba(255,204,4,0.7)]';
          else if (borderDef.id === 'blue') borderMiniStyle = 'border-2 border-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.7)]';
          else if (borderDef.id === 'emerald') borderMiniStyle = 'border-2 border-emerald-500 shadow-[0_0_7px_rgba(16,185,129,0.8)]';
          else if (borderDef.id === 'cyber') borderMiniStyle = 'border-2 border-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.85)]';
          else borderMiniStyle = 'border border-slate-350';

          let avatarIconHTML = '';
          if (avatarDef.type === "monogram") {
            avatarIconHTML = `<span class="text-[9px] font-black text-white shrink-0 leading-none">${avatarDef.char || std.name.charAt(0)}</span>`;
          } else if (avatarDef.type === "emoji") {
            avatarIconHTML = `<span class="text-[10px] leading-none shrink-0 select-none">${avatarEmojiDef.char}</span>`;
          } else if (avatarDef.type === "icon") {
            avatarIconHTML = `<i class="fa-solid ${avatarIconDef.icon} text-[9px] text-white shrink-0"></i>`;
          }
          
          let titleBadgeHTML = '';
          if (titleDef.id !== 'default' && titleDef.titleText) {
            titleBadgeHTML = `<span class="text-[7.5px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded bg-copley-gold/10 text-copley-blue border border-copley-gold/10 heading-style ml-1.5">${titleDef.titleText}</span>`;
          }

          let badgeColor = "bg-slate-100 text-slate-500";
          if (idx === 0) badgeColor = "bg-copley-gold text-copley-blue border border-copley-gold/30";
          else if (idx === 1) badgeColor = "bg-slate-200 text-slate-700";
          else if (idx === 2) badgeColor = "bg-amber-700 text-white";

          const row = document.createElement('div');
          row.className = "flex items-center justify-between p-2 rounded-lg border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-colors";
          row.innerHTML = `
            <div class="flex items-center space-x-2.5 truncate min-w-0">
              <span class="w-5.5 h-5.5 rounded-full flex items-center justify-center font-black text-[9px] ${badgeColor} shrink-0">
                ${idx + 1}
              </span>
              <div class="w-6.5 h-6.5 rounded-full p-0.2 shrink-0 flex items-center justify-center bg-slate-200/50">
                <div class="w-full h-full rounded-full bg-gradient-to-br ${avatarBgDef.gradient} flex items-center justify-center ${borderMiniStyle}">
                  ${avatarIconHTML}
                </div>
              </div>
              <div class="text-left leading-tight truncate min-w-0">
                <div class="flex items-center min-w-0">
                  <span class="text-xs font-black text-slate-800 truncate leading-none">${std.name}</span>
                  ${titleBadgeHTML}
                </div>
                <span class="text-[8px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5 leading-none">${grp}</span>
              </div>
            </div>
            <span class="text-[9px] font-black bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full whitespace-nowrap flex items-center gap-1">
              <i class="fa-solid fa-paper-plane text-[8px]"></i>
              <span>${std.sentCount} SENT</span>
            </span>
          `;
          container.appendChild(row);
        });
      }
    }

    function updateStudentDashboard() {
      const student = AppState.activeStudent;
      const std = AppState.students.find(s => s.name === student) || { email: "", points: 0, tier: "Tier 1" };
      
      document.getElementById('studentDashboardName').innerText = student;
      document.getElementById('studentDashboardEmail').innerText = std.email;
      
      // --- Student Cosmetics Integration ---
      initStudentCosmetics();
      if (!AppState.studentCosmetics[student]) {
        AppState.studentCosmetics[student] = {
          avatar: { type: "monogram", char: student.charAt(0), emoji: "cat", icon: "grad", font: "default", bg: "default" },
          border: "default",
          title: "default",
          theme: { backdrop: "default", nameFont: "default", nameColor: "default" },
          unlocked: ["avatarType-monogram", "avatarBg-default", "avatarFont-default", "avatarIcon-grad", "avatarEmoji-cat", "border-default", "title-default", "themeBackdrop-default", "themeNameFont-default", "themeNameColor-default"]
        };
      }
      
      const cos = AppState.studentCosmetics[student];
      const avatarDef = cos.avatar;
      
      const avatarBgDef = CosmeticCatalog.avatarBg.find(bg => bg.id === avatarDef.bg) || CosmeticCatalog.avatarBg[0];
      const avatarFontDef = CosmeticCatalog.avatarFont.find(f => f.id === avatarDef.font) || CosmeticCatalog.avatarFont[0];
      const avatarEmojiDef = CosmeticCatalog.avatarEmoji.find(e => e.id === avatarDef.emoji) || CosmeticCatalog.avatarEmoji[0];
      const avatarIconDef = CosmeticCatalog.avatarIcon.find(i => i.id === avatarDef.icon) || CosmeticCatalog.avatarIcon[0];
      
      const borderDef = CosmeticCatalog.border.find(b => b.id === cos.border) || CosmeticCatalog.border[0];
      const titleDef = CosmeticCatalog.title.find(t => t.id === cos.title) || CosmeticCatalog.title[0];
      
      const themeBackdropDef = CosmeticCatalog.themeBackdrop.find(t => t.id === cos.theme.backdrop) || CosmeticCatalog.themeBackdrop[0];
      const themeNameFontDef = CosmeticCatalog.themeNameFont.find(t => t.id === cos.theme.nameFont) || CosmeticCatalog.themeNameFont[0];
      const themeNameColorDef = CosmeticCatalog.themeNameColor.find(t => t.id === cos.theme.nameColor) || CosmeticCatalog.themeNameColor[0];

      // Update Student Identity Card theme
      const cardEl = document.getElementById('studentIdentityCard');
      if (cardEl) {
        cardEl.className = `${themeBackdropDef.cardClass} p-5 rounded-2xl text-center relative overflow-hidden shrink-0 transition-all duration-300`;
      }

      // Update procedurally rendered backdrops
      const studentMonoBg = document.getElementById('studentCardMonogramBg');
      const studentEmojiBg = document.getElementById('studentCardEmojiBg');
      const studentLofiBg = document.getElementById('studentCardLofiBg');
      
      if (studentMonoBg) studentMonoBg.classList.add('hidden');
      if (studentEmojiBg) studentEmojiBg.classList.add('hidden');
      if (studentLofiBg) studentLofiBg.classList.add('hidden');
      
      if (themeBackdropDef.hasMonogramBg) {
        if (studentMonoBg) {
          studentMonoBg.innerText = avatarDef.char || student.charAt(0);
          studentMonoBg.classList.remove('hidden');
        }
      } else if (themeBackdropDef.hasEmojiBg) {
        if (studentEmojiBg) {
          let activeChar = avatarDef.type === 'emoji' ? avatarEmojiDef.char : "🎓";
          studentEmojiBg.innerHTML = '';
          for (let i = 0; i < 16; i++) {
            const span = document.createElement('span');
            span.innerText = activeChar;
            studentEmojiBg.appendChild(span);
          }
          studentEmojiBg.classList.remove('hidden');
        }
      } else if (themeBackdropDef.isLofiGrid) {
        if (studentLofiBg) {
          studentLofiBg.classList.remove('hidden');
        }
      }

      // Update student name typography style
      const nameEl = document.getElementById('studentDashboardName');
      if (nameEl) {
        let nameClass = "text-base font-black heading-style mt-2 leading-none truncate z-10 ";
        nameClass += themeNameFontDef.fontClass + " ";
        if (themeNameColorDef.id === 'default') {
          if (themeBackdropDef.id === 'darkglass' || themeBackdropDef.id === 'nebula' || themeBackdropDef.id === 'lofi') {
            nameClass += "text-white ";
          } else {
            nameClass += "text-copley-blue ";
          }
        } else {
          nameClass += themeNameColorDef.textStyle + " ";
        }
        nameEl.className = nameClass;
      }
      
      const lvlLabel = document.getElementById('studentLevelLabel');
      if (lvlLabel) {
        if (themeBackdropDef.id === 'darkglass' || themeBackdropDef.id === 'nebula' || themeBackdropDef.id === 'lofi') {
          lvlLabel.className = "text-copley-gold font-black";
        } else {
          lvlLabel.className = "text-copley-blue font-black";
        }
      }
      
      // Update Name Badge Avatar Container & Icon & Letter
      const letterSpan = document.getElementById('studentDashboardLetter');
      const iconEl = document.getElementById('studentDashboardAvatarIcon');
      const avatarGlow = document.getElementById('studentDashboardAvatarGlow');
      const avatarContainer = document.getElementById('studentDashboardAvatarContainer');
      
      if (avatarGlow) {
        avatarGlow.className = "absolute inset-0 rounded-full transition-all duration-300";
        if (borderDef.id === "gold") {
          avatarGlow.classList.add('shadow-[0_0_15px_rgba(255,204,4,0.85)]', 'border-2', 'border-copley-gold');
        } else if (borderDef.id === "blue") {
          avatarGlow.classList.add('shadow-[0_0_15px_rgba(59,130,246,0.85)]', 'border-2', 'border-blue-500', 'animate-pulse');
        } else if (borderDef.id === "emerald") {
          avatarGlow.classList.add('shadow-[0_0_20px_rgba(16,185,129,0.9)]', 'border-2', 'border-emerald-500');
        } else if (borderDef.id === "cyber") {
          avatarGlow.classList.add('shadow-[0_0_25px_rgba(168,85,247,0.95)]', 'border-2', 'border-purple-500', 'animate-pulse');
        } else {
          avatarGlow.className = "absolute inset-1 border border-slate-200/40 rounded-full";
        }
      }

      if (avatarContainer) {
        avatarContainer.className = `w-20 h-20 rounded-full flex items-center justify-center border-2 border-white shadow-md relative group select-none transition-all duration-300 z-10 bg-gradient-to-br ${avatarBgDef.gradient}`;
      }

      if (letterSpan) letterSpan.classList.add('hidden');
      if (iconEl) iconEl.classList.add('hidden');

      if (avatarDef.type === "monogram") {
        if (letterSpan) {
          letterSpan.innerText = avatarDef.char || student.charAt(0);
          letterSpan.className = `text-3xl leading-none z-10 select-none ${avatarFontDef.fontClass}`;
          letterSpan.classList.remove('hidden');
        }
      } else if (avatarDef.type === "emoji") {
        if (letterSpan) {
          letterSpan.innerText = avatarEmojiDef.char;
          letterSpan.className = "text-4xl leading-none z-10 select-none";
          letterSpan.classList.remove('hidden');
        }
      } else if (avatarDef.type === "icon") {
        if (iconEl) {
          iconEl.className = `fa-solid ${avatarIconDef.icon} text-2xl z-10 select-none text-white`;
          iconEl.classList.remove('hidden');
        }
      }
      
      // Apply Custom Equipped Title Badge
      const titleBadge = document.getElementById('studentDashboardTitleBadge');
      if (titleBadge) {
        if (titleDef.id === "default" || !titleDef.titleText) {
          titleBadge.classList.add('hidden');
        } else {
          titleBadge.innerText = titleDef.titleText;
          titleBadge.classList.remove('hidden');
          titleBadge.className = "mt-2 inline-block text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded border select-none heading-style shadow-sm";
          if (titleDef.id === "spirit") {
            titleBadge.classList.add('bg-copley-blue', 'text-copley-gold', 'border-copley-gold/30');
          } else if (titleDef.id === "scholar") {
            titleBadge.classList.add('bg-amber-50', 'text-amber-600', 'border-amber-100');
          } else if (titleDef.id === "guru") {
            titleBadge.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-100');
          } else {
            titleBadge.classList.add('bg-slate-50', 'text-slate-600', 'border-slate-200');
          }
        }
      }
      
      let level = 1;
      let levelName = "Beginner";
      let progressPct = 0;
      let nextLevelPts = 10;
      
      if (std.points >= 50) {
        level = 5;
        levelName = "Grandmaster";
        progressPct = 100;
        nextLevelPts = 0;
      } else if (std.points >= 35) {
        level = 4;
        levelName = "Champion";
        progressPct = Math.round(((std.points - 35) / 15) * 100);
        nextLevelPts = 50 - std.points;
      } else if (std.points >= 20) {
        level = 3;
        levelName = "Scholar";
        progressPct = Math.round(((std.points - 20) / 15) * 100);
        nextLevelPts = 35 - std.points;
      } else if (std.points >= 10) {
        level = 2;
        levelName = "Novice";
        progressPct = Math.round(((std.points - 10) / 10) * 100);
        nextLevelPts = 20 - std.points;
      } else {
        level = 1;
        levelName = "Beginner";
        progressPct = Math.round((std.points / 10) * 100);
        nextLevelPts = 10 - std.points;
      }
      
      document.getElementById('studentLevelLabel').innerText = `Level ${level} (${levelName})`;
      document.getElementById('studentLevelProgressBar').style.width = `${progressPct}%`;
      document.getElementById('studentLifetimePoints').innerText = `${std.points} Lifetime Points`;
      
      // Update progress label text
      const subtext = document.getElementById('studentLevelProgressBar').parentNode.nextElementSibling.lastElementChild;
      if (subtext) {
        const nextLevelText = nextLevelPts > 0 ? `${nextLevelPts} pts to next level` : "Max Level Reached!";
        subtext.innerText = nextLevelText;
      }

      // Hydrate direct purchase available points
      document.getElementById('studentPointsAvailable').innerText = std.points;
      
      if (!AppState.studentRaffleTickets[student]) {
        AppState.studentRaffleTickets[student] = { unallocated: 0, cfa: 0, gamestop: 0, starbucks: 0, canes: 0, citybbq: 0, bestbuy: 0, spiritshop: 0 };
      }
      
      const tickets = AppState.studentRaffleTickets[student];
      document.getElementById('studentRaffleTicketsCount').innerText = tickets.unallocated;
      document.getElementById('studentRaffleTicketsLabel').innerText = tickets.unallocated;
      
      // Tactile purchase button disabling states
      const btnBuy1 = document.getElementById('btnBuyTicket1');
      const btnBuy5 = document.getElementById('btnBuyTicket5');
      if (btnBuy1) btnBuy1.disabled = std.points < 5;
      if (btnBuy5) btnBuy5.disabled = std.points < 25;

      // Update Class Clash standing text for active student
      const grp = getStudentGradeGroup(std);
      const scores = { seniors: 0, juniors: 0, sophomores: 0, freshmen: 0 };
      AppState.students.forEach(s => {
        scores[getStudentGradeGroup(s)] += s.points;
      });
      const sortedClasses = Object.keys(scores).map(key => ({ key: key, score: scores[key] })).sort((a, b) => b.score - a.score);
      const myRank = sortedClasses.findIndex(c => c.key === grp) + 1;
      const grpPretty = grp.charAt(0).toUpperCase() + grp.slice(1);
      const medals = { 1: "🥇", 2: "🥈", 3: "🥉", 4: "🏅" };
      const studentClassClashIcon = document.getElementById('studentClassClashIcon');
      if (studentClassClashIcon) {
        studentClassClashIcon.innerText = medals[myRank];
        document.getElementById('studentClassClashText').innerHTML = `<span class="capitalize text-copley-blue font-black">${grpPretty}</span> is currently <span class="text-emerald-600 font-black">#${myRank}</span> with <span class="text-slate-800 font-black">${scores[grp]} pts</span>!`;
      }
      
      document.getElementById('raffle-cfa-count').innerText = `${tickets.cfa} Tickets`;
      document.getElementById('raffle-gamestop-count').innerText = `${tickets.gamestop} Tickets`;
      document.getElementById('raffle-starbucks-count').innerText = `${tickets.starbucks} Tickets`;
      document.getElementById('raffle-canes-count').innerText = `${tickets.canes} Tickets`;
      document.getElementById('raffle-citybbq-count').innerText = `${tickets.citybbq} Tickets`;
      document.getElementById('raffle-bestbuy-count').innerText = `${tickets.bestbuy} Tickets`;
      const shopEl = document.getElementById('raffle-spiritshop-count');
      if (shopEl) shopEl.innerText = `${tickets.spiritshop || 0} Tickets`;
      renderReceivedVSOs();
    }

    // Department House Cup styling & icon mappings
    const DepartmentStyles = {
      "English": { icon: "fa-book-open", color: "from-blue-600 to-indigo-600", text: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
      "Math": { icon: "fa-calculator", color: "from-amber-500 to-yellow-500", text: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
      "Science": { icon: "fa-flask-vial", color: "from-emerald-500 to-green-600", text: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
      "Soc Studies": { icon: "fa-globe-americas", color: "from-orange-500 to-amber-600", text: "text-orange-600", bg: "bg-orange-50 border-orange-100" },
      "Art": { icon: "fa-palette", color: "from-purple-500 to-fuchsia-600", text: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
      "Music": { icon: "fa-music", color: "from-cyan-500 to-blue-500", text: "text-cyan-600", bg: "bg-cyan-50 border-cyan-100" },
      "Spec Ed": { icon: "fa-hand-holding-heart", color: "from-rose-500 to-pink-600", text: "text-rose-600", bg: "bg-rose-50 border-rose-100" },
      "World Lang": { icon: "fa-language", color: "from-violet-500 to-purple-600", text: "text-violet-600", bg: "bg-violet-50 border-violet-100" },
      "Special Needs Assistant": { icon: "fa-universal-access", color: "from-teal-500 to-emerald-600", text: "text-teal-600", bg: "bg-teal-50 border-teal-100" },
      "School Counseling": { icon: "fa-comments", color: "from-sky-500 to-blue-500", text: "text-sky-600", bg: "bg-sky-50 border-sky-100" },
      "Career Tech": { icon: "fa-screwdriver-wrench", color: "from-amber-600 to-yellow-600", text: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
      "Academic Enrichment": { icon: "fa-star", color: "from-indigo-500 to-violet-600", text: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
      "Library/Media": { icon: "fa-bookmark", color: "from-fuchsia-500 to-pink-600", text: "text-fuchsia-600", bg: "bg-fuchsia-50 border-fuchsia-100" },
      "Athletics": { icon: "fa-trophy", color: "from-yellow-500 to-amber-500", text: "text-yellow-600", bg: "bg-yellow-50 border-yellow-100" },
      "Cafeteria": { icon: "fa-bowl-food", color: "from-orange-400 to-yellow-500", text: "text-orange-500", bg: "bg-orange-50 border-orange-100" },
      "Maintenance": { icon: "fa-hammer", color: "from-slate-500 to-slate-600", text: "text-slate-600", bg: "bg-slate-50 border-slate-100" },
      "Custodial": { icon: "fa-broom", color: "from-zinc-500 to-slate-600", text: "text-zinc-600", bg: "bg-zinc-50 border-zinc-100" },
      "Technology": { icon: "fa-laptop-code", color: "from-cyan-600 to-teal-600", text: "text-cyan-600", bg: "bg-cyan-50 border-cyan-100" },
      "Main Office": { icon: "fa-building-columns", color: "from-blue-800 to-slate-700", text: "text-blue-800", bg: "bg-blue-50 border-blue-100" },
      "School Psychology": { icon: "fa-brain", color: "from-purple-600 to-indigo-600", text: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
      "Mental Health": { icon: "fa-face-smile", color: "from-pink-500 to-rose-500", text: "text-pink-600", bg: "bg-pink-50 border-pink-100" },
      "Speech-Language Pathology": { icon: "fa-comment-dots", color: "from-teal-400 to-cyan-500", text: "text-teal-600", bg: "bg-teal-50 border-teal-100" },
      "Health / Phys Ed": { icon: "fa-heart-pulse", color: "from-red-500 to-orange-500", text: "text-red-600", bg: "bg-red-50 border-red-100" }
    };

    function toggleClashTab(mode) {
      const btnDept = document.getElementById('tabBtn-deptClash');
      const btnClass = document.getElementById('tabBtn-classClash');
      const areaDept = document.getElementById('clashArea-dept');
      const areaClass = document.getElementById('clashArea-class');
      const panelTitle = document.getElementById('clashPanelTitle');
      
      if (!btnDept || !btnClass || !areaDept || !areaClass) return;

      if (mode === 'dept') {
        btnDept.className = "px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all bg-white text-copley-blue shadow-sm heading-style";
        btnClass.className = "px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all text-slate-400 hover:text-slate-600 heading-style";
        areaDept.classList.remove('hidden');
        areaClass.classList.add('hidden');
        if (panelTitle) panelTitle.innerText = "Department House Cup";
      } else {
        btnClass.className = "px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all bg-white text-copley-blue shadow-sm heading-style";
        btnDept.className = "px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all text-slate-400 hover:text-slate-600 heading-style";
        areaClass.classList.remove('hidden');
        areaDept.classList.add('hidden');
        if (panelTitle) panelTitle.innerText = "Class Clash Standings";
      }
      playSynthBasicClick();
    }

    function getDepartmentScores() {
      const scores = {};
      
      // Seed all unique departments in StaffDirectory with 0 baseline points
      for (let teacherName in StaffDirectory) {
        const dept = StaffDirectory[teacherName].department;
        if (!scores[dept]) {
          scores[dept] = { vsoPoints: 0, mtssPoints: 0, ccPoints: 0, total: 0, vsoCount: 0, mtssCount: 0, ccCount: 0 };
        }
      }

      // 1. Walk through AppState.teacherStats (cumulative VSO counts per staff member)
      for (let teacherName in AppState.teacherStats) {
        if (StaffDirectory[teacherName]) {
          const dept = StaffDirectory[teacherName].department;
          const stats = AppState.teacherStats[teacherName];
          scores[dept].vsoCount += stats.vsoCount;
          scores[dept].vsoPoints += stats.vsoCount * 10; // +10 points per sent VSO
        }
      }

      // 2. Walk through MTSS Tier 1 caseload (AppState_mtssCaseload completed docs)
      const mtssData = JSON.parse(localStorage.getItem('AppState_mtssCaseload') || '[]');
      mtssData.forEach(item => {
        if (item.completed) {
          const teacher = item.teacher;
          if (StaffDirectory[teacher]) {
            const dept = StaffDirectory[teacher].department;
            scores[dept].mtssCount += 1;
            scores[dept].mtssPoints += 25; // +25 points per completed MTSS Tier 1 intervention doc
          }
        }
      });

      // 3. Walk through Check & Connect caseload (AppState_ccCaseload completed meetings)
      const ccData = JSON.parse(localStorage.getItem('AppState_ccCaseload') || '[]');
      ccData.forEach(item => {
        if (item.completed) {
          const teacher = item.teacher;
          if (StaffDirectory[teacher]) {
            const dept = StaffDirectory[teacher].department;
            scores[dept].ccCount += 1;
            scores[dept].ccPoints += 50; // +50 points per logged Check & Connect mentor meeting
          }
        }
      });

      // 4. Sum totals
      for (let dept in scores) {
        scores[dept].total = scores[dept].vsoPoints + scores[dept].mtssPoints + scores[dept].ccPoints;
      }

      return scores;
    }

    function updateDepartmentLeaderboard() {
      const container = document.getElementById('departmentLeaderboardContainer');
      if (!container) return;
      
      const scores = getDepartmentScores();
      
      // Sort departments in descending order of total points, with secondary sort on VSO count
      const sortedDepts = Object.keys(scores).map(dept => ({
        name: dept,
        ...scores[dept]
      })).sort((a, b) => b.total - a.total || b.vsoCount - a.vsoCount);

      container.innerHTML = '';
      
      const maxScore = Math.max(...sortedDepts.map(d => d.total), 1);

      sortedDepts.forEach((deptObj, idx) => {
        const style = DepartmentStyles[deptObj.name] || { icon: "fa-shield", color: "from-slate-400 to-slate-500", text: "text-slate-600", bg: "bg-slate-50" };
        
        let rankColor = "bg-slate-100 text-slate-500";
        if (idx === 0) rankColor = "bg-copley-gold text-copley-blue font-black border border-copley-gold/30";
        else if (idx === 1) rankColor = "bg-slate-200 text-slate-800 font-bold";
        else if (idx === 2) rankColor = "bg-amber-700 text-white font-bold";

        const widthPercent = Math.max(8, Math.round((deptObj.total / maxScore) * 100));

        const row = document.createElement('div');
        row.className = "py-3 flex flex-col gap-1.5 transition-colors hover:bg-slate-50/50 rounded-xl px-2.5";
        row.innerHTML = `
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center space-x-2.5 min-w-0">
              <span class="w-5.5 h-5.5 rounded-full flex items-center justify-center text-[9px] ${rankColor} shrink-0">${idx + 1}</span>
              <div class="flex items-center gap-1.5 min-w-0">
                <div class="w-6 h-6 rounded-lg ${style.bg} border flex items-center justify-center shrink-0">
                  <i class="fa-solid ${style.icon} text-xs ${style.text}"></i>
                </div>
                <span class="text-[11px] font-black text-slate-800 truncate heading-style">${deptObj.name} House</span>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <div class="flex gap-1 text-[8px] font-bold text-slate-400">
                <span title="Virtual Shout-outs Sent" class="bg-blue-50 text-blue-600/80 px-1 py-0.2 rounded border border-blue-100/50">${deptObj.vsoCount} 🏹</span>
                <span title="Tier 1 Interventions Completed" class="bg-emerald-50 text-emerald-600/80 px-1 py-0.2 rounded border border-emerald-100/50">${deptObj.mtssCount} 📄</span>
                <span title="Check & Connect Logged" class="bg-rose-50 text-rose-600/80 px-1 py-0.2 rounded border border-rose-100/50">${deptObj.ccCount} 🤝</span>
              </div>
              <span class="text-xs font-black text-copley-blue w-16 text-right heading-style">${deptObj.total} PTS</span>
            </div>
          </div>
          <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden relative">
            <div class="bg-gradient-to-r ${style.color} h-full rounded-full transition-all duration-500 shadow-sm" style="width: ${widthPercent}%"></div>
          </div>
        `;
        container.appendChild(row);
      });
    }

    // Dynamic Database State Hydration
    function populateStaffProfiles() {
      const select = document.getElementById('staffSelector');
      select.innerHTML = '';
      
      AppState.teachers.forEach(teacher => {
        const opt = document.createElement('option');
        opt.value = teacher;
        opt.innerText = teacher;
        select.appendChild(opt);
      });

      select.value = AppState.activeTeacher;
      document.getElementById('sessionStaffName').innerText = AppState.activeTeacher;
    }

    function getStudentGradeGroup(student) {
      const classes = Object.keys(student.grades || {});
      if (classes.some(c => c.includes("11") || c.includes("English 11"))) {
        return "juniors";
      } else if (classes.some(c => c.includes("Physics") || c.includes("Government"))) {
        return "seniors";
      } else if (classes.some(c => c.includes("Algebra II") || c.includes("Chemistry II"))) {
        return "sophomores";
      } else {
        return "freshmen";
      }
    }

    // A function to get the maximum horizontal width of the hourglass at a given y-coordinate (from 0 to 1)
    function getHourglassWidthAtY(y) {
      // y ranges from 0 to 1
      // Neck is at y = 0.5 where width is narrowest (22% of max width)
      // Top/bottom are widest (87% of max width)
      const distFromNeck = Math.abs(y - 0.5);
      return 0.22 + (distFromNeck * 1.3);
    }

    function generateGemPositions(count, isTop) {
      const gems = [];
      if (isTop) {
        // Gems in the top bulb pile up from the neck (y = 0.44) upwards to y = 0.05
        for (let i = 0; i < count; i++) {
          const row = Math.floor(i / 5);
          const col = i % 5;
          const y = 0.44 - (row * 0.065) - (Math.random() * 0.02);
          if (y < 0.03) continue; // Stay inside top cap
          
          const maxWidth = getHourglassWidthAtY(y);
          // Distribute columns horizontally within the allowed width
          const xPercent = 0.5 + (col - 2) * (maxWidth * 0.16) + (Math.random() * 0.04 - 0.02);
          
          gems.push({
            x: Math.max(0.12, Math.min(0.88, xPercent)) * 100,
            y: y * 100,
            rotation: (i * 37) % 360
          });
        }
      } else {
        // Gems in the bottom bulb pile up from the bottom (y = 0.94) upwards to y = 0.56
        for (let i = 0; i < count; i++) {
          const row = Math.floor(i / 6);
          const col = i % 6;
          const y = 0.94 - (row * 0.062) - (Math.random() * 0.02);
          if (y < 0.54) continue; // Stay inside bottom bulb
          
          const maxWidth = getHourglassWidthAtY(y);
          const xPercent = 0.5 + (col - 2.5) * (maxWidth * 0.14) + (Math.random() * 0.04 - 0.02);
          
          gems.push({
            x: Math.max(0.12, Math.min(0.88, xPercent)) * 100,
            y: y * 100,
            rotation: (i * 37) % 360
          });
        }
      }
      return gems;
    }

    function hydrateHourglassGems(id, score, milestone, gemColorClass, fontAwesomeIcon) {
      if (!window.hourglassAnimated) {
        window.hourglassAnimated = {};
      }

      // We want to draw up to 50 physical gems in total
      const totalGems = 50;
      const ratio = milestone > 0 ? Math.min(score / milestone, 1.0) : 0;
      const bottomCount = Math.round(ratio * totalGems);
      const topCount = totalGems - bottomCount;

      const updateBulb = (prefix) => {
        const container = document.getElementById(`${prefix}hourglass-gems-container-${id}`);
        const stream = document.getElementById(`${prefix}hourglass-stream-${id}`);
        if (!container) return;

        // Check if we need to run the staggered onload animation
        const isFirstLoad = !window.hourglassAnimated[`${prefix}${id}`];
        
        if (isFirstLoad) {
          window.hourglassAnimated[`${prefix}${id}`] = true;
          container.innerHTML = '';

          // 1. Draw top gems immediately
          const topGems = generateGemPositions(topCount, true);
          topGems.forEach((pos) => {
            const gem = document.createElement('i');
            gem.className = `fa-solid ${fontAwesomeIcon} text-[7px] ${gemColorClass} absolute pointer-events-none`;
            gem.style.left = `${pos.x}%`;
            gem.style.top = `${pos.y}%`;
            gem.style.transform = `rotate(${pos.rotation}deg)`;
            container.appendChild(gem);
          });

          // 2. Draw stable bottom gems, but animate a subset of them falling down staggered!
          const bottomGems = generateGemPositions(bottomCount, false);
          const animateSubsetSize = Math.min(bottomCount, 12); // animate last 12 gems in a waterfall
          const stableSize = bottomCount - animateSubsetSize;

          // Stable bottom gems rendered immediately
          for (let i = 0; i < stableSize; i++) {
            const pos = bottomGems[i];
            const gem = document.createElement('i');
            gem.className = `fa-solid ${fontAwesomeIcon} text-[7px] ${gemColorClass} absolute pointer-events-none`;
            gem.style.left = `${pos.x}%`;
            gem.style.top = `${pos.y}%`;
            gem.style.transform = `rotate(${pos.rotation}deg)`;
            container.appendChild(gem);
          }

          // Animated bottom gems flowing down
          if (animateSubsetSize > 0 && stream) {
            stream.classList.remove('opacity-0');
          }
          
          for (let i = stableSize; i < bottomCount; i++) {
            const pos = bottomGems[i];
            const delay = (i - stableSize) * 90;
            
            setTimeout(() => {
              const gem = document.createElement('i');
              gem.className = `fa-solid ${fontAwesomeIcon} text-[7px] ${gemColorClass} absolute pointer-events-none transition-all`;
              
              // Start at top center
              gem.style.left = `${45 + Math.random() * 10}%`;
              gem.style.top = `${8 + Math.random() * 12}%`;
              gem.style.transform = `scale(0.4) rotate(0deg)`;
              gem.style.opacity = '0';
              container.appendChild(gem);

              // 1. Move to neck
              setTimeout(() => {
                gem.style.transition = 'left 0.35s cubic-bezier(0.47, 0, 0.74, 0.71), top 0.35s cubic-bezier(0.47, 0, 0.74, 0.71), opacity 0.2s';
                gem.style.opacity = '1';
                gem.style.left = '50%';
                gem.style.top = '50%';
                gem.style.transform = 'scale(0.8) rotate(180deg)';

                // 2. Drop from neck to pile
                setTimeout(() => {
                  gem.style.transition = 'left 0.45s cubic-bezier(0.21, 0.07, 0.17, 1), top 0.45s cubic-bezier(0.21, 0.07, 0.17, 1), transform 0.45s';
                  gem.style.left = `${pos.x}%`;
                  gem.style.top = `${pos.y}%`;
                  gem.style.transform = `scale(1) rotate(${pos.rotation}deg)`;

                  // Turn off stream at the very end
                  if (i === bottomCount - 1 && stream) {
                    setTimeout(() => stream.classList.add('opacity-0'), 400);
                  }
                }, 350);
              }, 30);
            }, delay);
          }

        } else {
          // Regular reactive rendering (already loaded, just update instantly)
          container.innerHTML = '';

          const topGems = generateGemPositions(topCount, true);
          topGems.forEach((pos) => {
            const gem = document.createElement('i');
            gem.className = `fa-solid ${fontAwesomeIcon} text-[7px] ${gemColorClass} absolute pointer-events-none`;
            gem.style.left = `${pos.x}%`;
            gem.style.top = `${pos.y}%`;
            gem.style.transform = `rotate(${pos.rotation}deg)`;
            container.appendChild(gem);
          });

          const bottomGems = generateGemPositions(bottomCount, false);
          bottomGems.forEach((pos) => {
            const gem = document.createElement('i');
            gem.className = `fa-solid ${fontAwesomeIcon} text-[7px] ${gemColorClass} absolute pointer-events-none`;
            gem.style.left = `${pos.x}%`;
            gem.style.top = `${pos.y}%`;
            gem.style.transform = `rotate(${pos.rotation}deg)`;
            container.appendChild(gem);
          });
        }
      };

      updateBulb(''); // Staff board
      updateBulb('student-'); // Student board
    }

    function triggerGemFallAnimation(classKey, points) {
      const gemIcons = {
        seniors: "fa-gem",
        juniors: "fa-gem",
        sophomores: "fa-gem",
        freshmen: "fa-gem"
      };
      const icon = gemIcons[classKey] || "fa-gem";

      const gemColorClass = {
        seniors: "text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]",
        juniors: "text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]",
        sophomores: "text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]",
        freshmen: "text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]"
      }[classKey];

      const animateFall = (prefix) => {
        const container = document.getElementById(`${prefix}hourglass-gems-container-${classKey}`);
        const stream = document.getElementById(`${prefix}hourglass-stream-${classKey}`);
        if (!container) return;

        if (stream) stream.classList.remove('opacity-0');

        // Spawn falling gems based on points awarded
        const spawnCount = Math.min(Math.floor(points / 3) || 2, 8);
        const bottomGems = generateGemPositions(spawnCount, false);

        bottomGems.forEach((pos, idx) => {
          const delay = idx * 150;
          setTimeout(() => {
            const gem = document.createElement('i');
            gem.className = `fa-solid ${icon} text-[7px] ${gemColorClass} absolute pointer-events-none transition-all`;
            gem.style.left = `${45 + Math.random() * 10}%`;
            gem.style.top = `${8 + Math.random() * 12}%`;
            gem.style.transform = `scale(0.4) rotate(0deg)`;
            gem.style.opacity = '0';
            container.appendChild(gem);

            // Step 1: Slide to neck
            setTimeout(() => {
              gem.style.transition = 'left 0.35s cubic-bezier(0.47, 0, 0.74, 0.71), top 0.35s cubic-bezier(0.47, 0, 0.74, 0.71), opacity 0.2s';
              gem.style.opacity = '1';
              gem.style.left = '50%';
              gem.style.top = '50%';
              gem.style.transform = 'scale(0.8) rotate(180deg)';

              // Step 2: Fall to bottom bulb pile position
              setTimeout(() => {
                gem.style.transition = 'left 0.45s cubic-bezier(0.21, 0.07, 0.17, 1), top 0.45s cubic-bezier(0.21, 0.07, 0.17, 1), transform 0.45s';
                gem.style.left = `${pos.x}%`;
                gem.style.top = `${pos.y}%`;
                gem.style.transform = `scale(1) rotate(${pos.rotation}deg)`;

                // Turn off stream at the very end
                if (idx === spawnCount - 1 && stream) {
                  setTimeout(() => stream.classList.add('opacity-0'), 400);
                }
              }, 350);
            }, 30);
          }, delay);
        });
      };

      animateFall('');
      animateFall('student-');
    }

    function hydrateClassClashLeaderboard() {
      // Calculate active scores for all students by class group
      const scores = { seniors: 0, juniors: 0, sophomores: 0, freshmen: 0 };
      AppState.students.forEach(std => {
        const grp = getStudentGradeGroup(std);
        scores[grp] += std.points;
      });

      // Update text scores in the HTML if elements exist
      const seniorsScore = document.getElementById('classClashScore-seniors');
      if (seniorsScore) {
        // Staff scores
        seniorsScore.innerText = `${scores.seniors} PTS`;
        document.getElementById('classClashScore-juniors').innerText = `${scores.juniors} PTS`;
        document.getElementById('classClashScore-sophomores').innerText = `${scores.sophomores} PTS`;
        document.getElementById('classClashScore-freshmen').innerText = `${scores.freshmen} PTS`;

        // Student scores
        const studentSeniorsScore = document.getElementById('student-classClashScore-seniors');
        if (studentSeniorsScore) {
          studentSeniorsScore.innerText = `${scores.seniors} PTS`;
          document.getElementById('student-classClashScore-juniors').innerText = `${scores.juniors} PTS`;
          document.getElementById('student-classClashScore-sophomores').innerText = `${scores.sophomores} PTS`;
          document.getElementById('student-classClashScore-freshmen').innerText = `${scores.freshmen} PTS`;
        }

        // Define a dynamic milestone capacity to represent 100% full bottom bulb.
        // Let's set it to 1.22 times the highest score (min 350) so that there are always
        // some gems remaining in the top bulb, matching Harry Potter aesthetics!
        const maxScore = Math.max(scores.seniors, scores.juniors, scores.sophomores, scores.freshmen, 1);
        const targetMilestone = Math.max(maxScore * 1.22, 350);
        
        // Populate and scale hourglass gem content reactively
        hydrateHourglassGems('seniors', scores.seniors, targetMilestone, 'text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]', 'fa-gem');
        hydrateHourglassGems('juniors', scores.juniors, targetMilestone, 'text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]', 'fa-gem');
        hydrateHourglassGems('sophomores', scores.sophomores, targetMilestone, 'text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]', 'fa-gem');
        hydrateHourglassGems('freshmen', scores.freshmen, targetMilestone, 'text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]', 'fa-gem');

        // Determine ranking/positions
        const sortedClasses = Object.keys(scores).map(key => ({ key: key, score: scores[key] })).sort((a, b) => b.score - a.score);
        
        // Update podium medals dynamically
        const medals = { 0: "🥇", 1: "🥈", 2: "🥉", 3: "🏅" };
        sortedClasses.forEach((clsObj, idx) => {
          document.getElementById(`podium-${clsObj.key}`).innerText = medals[idx];
          const studentPodium = document.getElementById(`student-podium-${clsObj.key}`);
          if (studentPodium) {
            studentPodium.innerText = medals[idx];
          }
        });

        // Update top leading badge name
        const leadingClassTitle = {
          seniors: "Seniors Leading",
          juniors: "Juniors Leading",
          sophomores: "Sophomores Leading",
          freshmen: "Freshmen Leading"
        };
        document.getElementById('classClashLeaderName').innerText = leadingClassTitle[sortedClasses[0].key];
        const studentClashLeader = document.getElementById('student-classClashLeaderName');
        if (studentClashLeader) {
          studentClashLeader.innerText = leadingClassTitle[sortedClasses[0].key];
        }
      }
    }

    function hydrateScoreboard() {
      const list = document.getElementById('scoreboardList');
      list.innerHTML = '';

      const sorted = [...AppState.students].sort((a, b) => b.points - a.points);
      sorted.forEach((std, idx) => {
        let medal = `<span class="text-slate-400 font-bold w-6 text-right text-xs">${idx + 1}</span>`;
        if (idx === 0) medal = `<span class="text-copley-gold w-6 text-right"><i class="fa-solid fa-crown text-xs"></i></span>`;
        else if (idx === 1) medal = `<span class="text-slate-400 w-6 text-right"><i class="fa-solid fa-medal text-xs"></i></span>`;
        else if (idx === 2) medal = `<span class="text-amber-700 w-6 text-right"><i class="fa-solid fa-medal text-xs"></i></span>`;

        let tagColor = "bg-slate-100 text-slate-600";
        if (std.points >= 35) tagColor = "bg-emerald-50 text-emerald-600 border border-emerald-100";
        else if (std.points < 15) tagColor = "bg-rose-50 text-rose-500 border border-rose-100";

        const div = document.createElement('div');
        div.className = "flex justify-between items-center py-2.5 px-3 hover:bg-slate-50/50 rounded-xl transition duration-150";
        div.innerHTML = `
          <div class="flex items-center space-x-3 truncate">
            ${medal}
            <span class="text-xs font-bold text-slate-800 truncate">${std.name}</span>
          </div>
          <span class="text-[9px] font-black px-2 py-0.5 rounded-full ${tagColor}">${std.points} PTS</span>
        `;
        list.appendChild(div);
      });
      
      // Reactively update Class Clash progress and standings
      hydrateClassClashLeaderboard();
    }

    function hydratePraiseTicker() {
      const ticker = document.getElementById('livePraiseTicker');
      ticker.innerHTML = '';

      let tickerContent = '';
      AppState.mockVSOs.forEach(v => {
        let badgeColor = "bg-copley-gold text-copley-blue";
        if (v.category === 'Honorable') badgeColor = "bg-copley-blue text-white";
        else if (v.category === 'Self-Managed') badgeColor = "bg-emerald-600 text-white";

        tickerContent += `
          <span class="inline-flex items-center space-x-2">
            <span class="text-xs font-black text-copley-blue heading-style">${v.student}</span>
            <span class="text-[8px] font-black uppercase px-2 py-0.5 rounded-full ${badgeColor}">${v.category}</span>
            <span class="text-xs text-slate-400 font-semibold italic">"${v.description}"</span>
            <span class="text-[10px] text-slate-400 font-bold">— ${v.teacher}</span>
          </span>
        `;
      });

      // Double the items to make the infinite marquee seamless
      ticker.innerHTML = tickerContent + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " + tickerContent;
    }

    function renderVirtualSlips() {
      const slipsContainer = document.getElementById('slipsGrid');
      if (!slipsContainer) return;
      slipsContainer.innerHTML = '';
      
      const teacher = AppState.activeTeacher;
      // Filter slips: show pre-seeded ones (without status) and explicitly Approved ones
      const mySlips = AppState.mockSlips.filter(s => s.teacher === teacher && s.status !== 'Pending' && s.status !== 'Denied');
      
      document.getElementById('mySlipsCount').innerText = mySlips.length;

      if (mySlips.length === 0) {
        slipsContainer.innerHTML = `
          <div class="col-span-2 text-center py-16 text-slate-400 text-xs font-semibold">
            <i class="fa-solid fa-envelope-open text-3xl block opacity-30 text-copley-blue mb-2.5"></i>
            No student virtual slips registered for ${teacher}. Let's keep teaching and inspiring!
          </div>
        `;
        return;
      }

      mySlips.forEach(s => {
        let indicatorColor = "bg-slate-400";
        if (s.category.includes("GOAT")) indicatorColor = "bg-copley-gold";
        else if (s.category.includes("Barrier")) indicatorColor = "bg-copley-blue";
        else if (s.category.includes("Captivating")) indicatorColor = "bg-emerald-600";
        else if (s.category.includes("Time-Turner")) indicatorColor = "bg-purple-600";
        else if (s.category.includes("Heard")) indicatorColor = "bg-orange-600";
        else if (s.category.includes("Support")) indicatorColor = "bg-rose-600";
        else if (s.category.includes("Welcome")) indicatorColor = "bg-sky-600";

        const card = document.createElement('div');
        card.className = "bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-200 relative overflow-hidden flex flex-col justify-between";
        card.innerHTML = `
          <div class="absolute inset-y-0 left-0 w-1.5 ${indicatorColor}"></div>
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="text-xs font-black text-copley-blue heading-style">${s.anonymous ? '🤫 Anonymous Student' : s.sender}</span>
              <span class="text-[8px] font-black text-slate-400">${s.date}</span>
            </div>
            <p class="text-xs text-slate-600 font-medium leading-relaxed italic bg-slate-50 p-3 rounded-xl border border-slate-100/50">
              "${s.message}"
            </p>
          </div>
          <div class="flex justify-end mt-4">
            <span class="text-[8px] font-black uppercase text-slate-400 tracking-wider">Category: ${s.category}</span>
          </div>
        `;
        slipsContainer.appendChild(card);
      });
    }

    // Dynamic Checklist Dropdown for Target Students
    function toggleDropdown() {
      const drop = document.getElementById('multiStudentDropdown');
      drop.classList.toggle('hidden');
    }

    function filterStudents(query) {
      const q = query.toLowerCase();
      document.querySelectorAll('#studentCheckboxList label').forEach(lbl => {
        const text = lbl.innerText.toLowerCase();
        lbl.style.display = text.includes(q) ? 'flex' : 'none';
      });
    }

    function renderStudentChecklist() {
      const list = document.getElementById('studentCheckboxList');
      list.innerHTML = '';
      
      AppState.students.sort((a,b) => a.name.localeCompare(b.name)).forEach(std => {
        const lbl = document.createElement('label');
        lbl.className = "flex items-center space-x-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition select-none text-xs font-bold text-slate-700";
        
        const isChecked = AppState.selectedStudents.includes(std.name) ? 'checked' : '';
        
        lbl.innerHTML = `
          <input type="checkbox" value="${std.name}" ${isChecked} onchange="handleStudentCheckToggle(this)" class="rounded text-copley-blue focus:ring-0 w-4.5 h-4.5">
          <span>${std.name}</span>
        `;
        list.appendChild(lbl);
      });
    }

    function handleStudentCheckToggle(cb) {
      const stdName = cb.value;
      if (cb.checked) {
        if (!AppState.selectedStudents.includes(stdName)) {
          AppState.selectedStudents.push(stdName);
        }
      } else {
        AppState.selectedStudents = AppState.selectedStudents.filter(s => s !== stdName);
      }
      playSynthClick();
      updateSelectedStudentLabels();
      renderEquityChecklist();
    }

    // Deselect multi-student helper
    function deselectAllStudents() {
      AppState.selectedStudents = [];
      const searchInp = document.getElementById('studentSearchInput');
      if (searchInp) {
        searchInp.value = '';
      }
      document.querySelectorAll('#studentCheckboxList label').forEach(lbl => {
        lbl.style.display = 'flex';
      });
      document.querySelectorAll('#studentCheckboxList input').forEach(inp => {
        inp.checked = false;
      });
      updateSelectedStudentLabels();
      renderEquityChecklist();
    }

    function updateSelectedStudentLabels() {
      const label = document.getElementById('selectedStudentsCountLabel');
      const container = document.getElementById('selectedStudentPills');
      
      const len = AppState.selectedStudents.length;
      label.innerText = len === 0 ? "0 Students Selected" : `${len} Student(s) Selected`;
      
      container.innerHTML = '';
      AppState.selectedStudents.forEach(std => {
        const pill = document.createElement('span');
        pill.className = "inline-flex items-center bg-copley-blue text-copley-gold text-[10px] font-black px-2.5 py-1 rounded-full gap-1 shadow-sm";
        pill.innerHTML = `
          <span>${std}</span>
          <i class="fa-solid fa-xmark text-slate-300 hover:text-white cursor-pointer ml-1 text-xs" onclick="removeStudentPill('${std}')"></i>
        `;
        container.appendChild(pill);
      });
    }

    function removeStudentPill(stdName) {
      AppState.selectedStudents = AppState.selectedStudents.filter(s => s !== stdName);
      
      // Sync checkboxes
      document.querySelectorAll('#studentCheckboxList input').forEach(inp => {
        if (inp.value === stdName) inp.checked = false;
      });
      
      updateSelectedStudentLabels();
      renderEquityChecklist();
      playSynthClick();
    }

    // Classroom Equity Tracker calculations
    function renderEquityChecklist() {
      const trackerContainer = document.getElementById('equityTrackerList');
      trackerContainer.innerHTML = '';

      if (AppState.selectedStudents.length === 0) {
        trackerContainer.innerHTML = `
          <div class="text-center py-12 text-slate-400 text-xs font-semibold">
            <i class="fa-solid fa-users text-2xl mb-2 block opacity-30 text-copley-blue"></i>
            Select student(s) to check their praise distribution frequency.
          </div>
        `;
        return;
      }

      AppState.selectedStudents.forEach(stdName => {
        const std = AppState.students.find(s => s.name === stdName);
        if (!std) return;

        let levelLabel = "Perfectly Balanced";
        let barColor = "bg-emerald-500";
        let statusBadge = "bg-emerald-50 text-emerald-600 border-emerald-100";
        
        if (std.praiseCount >= 14) {
          levelLabel = "Highly Praised! Spread Love?";
          barColor = "bg-rose-500";
          statusBadge = "bg-rose-50 text-rose-600 border-rose-100";
        } else if (std.praiseCount < 4) {
          levelLabel = "Rarely Praised (Great Choice)";
          barColor = "bg-copley-gold animate-pulse";
          statusBadge = "bg-amber-50 text-amber-600 border-amber-100";
        }

        const div = document.createElement('div');
        div.className = "bg-slate-50 border border-slate-200/60 p-3.5 rounded-xl space-y-2";
        div.innerHTML = `
          <div class="flex justify-between items-center text-xs">
            <span class="font-black text-copley-blue heading-style">${std.name}</span>
            <span class="text-[9px] font-black px-2 py-0.5 rounded border ${statusBadge}">${levelLabel}</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="flex-grow bg-slate-200 h-2 rounded-full overflow-hidden">
              <div class="${barColor} h-2 rounded-full" style="width: ${Math.min(100, (std.praiseCount / 18) * 100)}%"></div>
            </div>
            <span class="text-[10px] font-black text-slate-500 whitespace-nowrap">${std.praiseCount} VSOs Month</span>
          </div>
        `;
        trackerContainer.appendChild(div);
      });
    }

    // Quick-Award Shortcuts Click Handler
    function applyQuickAward(category, notes, points) {
      if (AppState.selectedStudents.length === 0) {
        showToast("Select Student", "Please select at least one target student first.");
        return;
      }
      
      document.getElementById('vsoCategory').value = category;
      document.getElementById('vsoNotes').value = notes;
      document.getElementById('vsoValue').value = points;
      
      playSynthTemplateSelect();
      showToast("Template Applied!", `Successfully configured quick award details for ${category}.`);
    }

    // Submit Virtual Shout-Out & Trigger Simulated Email popup
    function submitVSO() {
      if (AppState.selectedStudents.length === 0) {
        showToast("Error", "Please select at least one target student before submitting.");
        return;
      }

      const category = document.getElementById('vsoCategory').value;
      const notes = document.getElementById('vsoNotes').value;
      const points = parseInt(document.getElementById('vsoValue').value);
      const vsoCount = AppState.selectedStudents.length;

      try {
        // Snappy bow string release pluck/twang sound
        playSynthBowString();

        // Calculate submit button center coordinates for arrow particle launch
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        const submitBtn = document.querySelector('#vsoForm button[type="submit"]');
        if (submitBtn) {
          const rect = submitBtn.getBoundingClientRect();
          x = rect.left + rect.width / 2;
          y = rect.top + rect.height / 2;
        }

        // Launch fanning "Arrows of Appreciation" from button coordinates
        triggerArrowBurst(x, y);

        // Distribute points, register logs
        AppState.selectedStudents.forEach(stdName => {
          const std = AppState.students.find(s => s.name === stdName);
          if (std) {
            std.points += points;
            std.praiseCount += 1;
            
            // Trigger beautiful falling gem animation for their class hourglass!
            const grp = getStudentGradeGroup(std);
            triggerGemFallAnimation(grp, points);
          }

          // Add mock VSO log to live feed list
          AppState.mockVSOs.unshift({
            student: stdName,
            teacher: AppState.activeTeacher,
            category: category,
            description: notes,
            points: points,
            date: new Date().toISOString().split('T')[0]
          });
        });

        // Gamification Hook: Increment sent VSO total stats
        const teacherStatsObj = AppState.teacherStats[AppState.activeTeacher] || { vsoCount: 0, mtssCount: 0 };
        const oldVsoCount = teacherStatsObj.vsoCount;
        // Anti-Abuse Group Count Rule: counts as exactly 1 VSO transaction event towards the teacher's badge progression to prevent spam-farming
        teacherStatsObj.vsoCount += 1;
        AppState.teacherStats[AppState.activeTeacher] = teacherStatsObj;

        // Evaluate new badge unlocks!
        evaluateBadgeUnlocks(AppState.activeTeacher, oldVsoCount, teacherStatsObj.vsoCount, teacherStatsObj.mtssCount, teacherStatsObj.mtssCount);

        // Visual updates
        hydrateScoreboard();
        hydratePraiseTicker();
        recalculateDistrictStats();
        updateTeacherBadges(); // Hydrate new gallery view
        updateDepartmentLeaderboard();
        
        // Show success confirmation toast
        showToast("Your VSO has just been sent! 🏹", `Distributed +${points} pts to ${vsoCount} student(s) successfully.`);
        
        // Celebrate with premium hardware-accelerated confetti burst!
        triggerConfetti();

        // Trigger Email Notification Popup preview
        openEmailModal(category, notes, points);
      } catch (err) {
        console.error("Error submitting VSO: ", err);
      } finally {
        // Reset and completely clear the Shout-Out Builder form and selectors
        document.getElementById('vsoNotes').value = '';
        document.getElementById('vsoCategory').value = 'Civil';
        document.getElementById('vsoValue').value = '10';
        deselectAllStudents();
      }
    }

    function openEmailModal(category, notes, points) {
      // Simulate receipt using first chosen student in set
      const firstStudentName = AppState.mockVSOs[0].student;
      const std = AppState.students.find(s => s.name === firstStudentName) || AppState.students[0];

      document.getElementById('emailToField').innerText = std.email;
      document.getElementById('emailCcField').innerText = std.parentEmail + " (Parent Carbon-Copy)";
      document.getElementById('certStudentName').innerText = std.name;
      document.getElementById('emailCategoryLabel').innerText = `${category} Commendation`;
      document.getElementById('emailDescBox').innerText = `"${notes}"`;
      document.getElementById('emailSenderLabel').innerText = AppState.activeTeacher;
      document.getElementById('emailValueLabel').innerHTML = `<i class="fa-solid fa-gem"></i> <span>+${points} Points</span>`;

      // Set category theme style
      let badgeStyle = "bg-copley-gold/15 text-copley-blue border border-copley-gold/30";
      if (category === 'Honorable') badgeStyle = "bg-copley-blue/10 text-copley-blue border border-copley-blue/20";
      else if (category === 'Self-Managed') badgeStyle = "bg-emerald-50 text-emerald-700 border border-emerald-200/50";
      
      document.getElementById('emailCategoryLabel').className = `text-[9px] font-black uppercase tracking-wider heading-style py-1 px-2.5 rounded-md ${badgeStyle}`;

      const modal = document.getElementById('emailModal');
      modal.classList.remove('hidden');
      // Force repaint to allow transition to register
      modal.offsetHeight;
      modal.classList.add('opacity-100', 'translate-x-0');
      modal.classList.remove('opacity-0', 'translate-x-12');

      // Clear any existing timers
      if (window.emailModalTimer) {
        clearTimeout(window.emailModalTimer);
      }
      if (window.emailModalProgressInterval) {
        clearInterval(window.emailModalProgressInterval);
      }

      const progressBar = document.getElementById('emailModalProgress');
      if (progressBar) {
        progressBar.style.width = '0%';
      }

      // Smoothly animate progress bar over 4 seconds
      const duration = 4000;
      const start = Date.now();
      window.emailModalProgressInterval = setInterval(() => {
        const elapsed = Date.now() - start;
        const pct = Math.min((elapsed / duration) * 100, 100);
        if (progressBar) {
          progressBar.style.width = `${pct}%`;
        }
        if (elapsed >= duration) {
          clearInterval(window.emailModalProgressInterval);
        }
      }, 30);

      window.emailModalTimer = setTimeout(() => {
        closeEmailModal();
      }, duration);
    }

    function closeEmailModal() {
      // Clear timers to prevent double triggers
      if (window.emailModalTimer) {
        clearTimeout(window.emailModalTimer);
        window.emailModalTimer = null;
      }
      if (window.emailModalProgressInterval) {
        clearInterval(window.emailModalProgressInterval);
        window.emailModalProgressInterval = null;
      }

      const modal = document.getElementById('emailModal');
      modal.classList.remove('opacity-100', 'translate-x-0');
      modal.classList.add('opacity-0', 'translate-x-12');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
      playSynthClick();
    }

    // =========================================================================
    // STUDENT NAME BADGE COSMETIC CUSTOMIZER transactions engine
    // =========================================================================
    const CosmeticCatalog = {
      avatarType: [
        { id: "monogram", name: "Classic Monogram", cost: 0, desc: "Initials typography style." },
        { id: "emoji", name: "Emoji Character", cost: 5, desc: "Expressive lo-fi character face." },
        { id: "icon", name: "Academic / Club Icon", cost: 5, desc: "Scholastic and extra-curricular symbols." }
      ],
      avatarEmoji: [
        { id: "cat", name: "Chill Cat 🐱", char: "🐱", cost: 5, desc: "Cozy feline scholar aesthetic." },
        { id: "dog", name: "Loyal Dog 🐶", char: "🐶", cost: 5, desc: "Playful, friendly advisor vibe." },
        { id: "fox", name: "Clever Fox 🦊", char: "🦊", cost: 5, desc: "Sharp-witted, logical strategist." },
        { id: "lion", name: "Bold Lion 🦁", char: "🦁", cost: 5, desc: "School spirit and athletic power." },
        { id: "panda", name: "Cozy Panda 🐼", char: "🐼", cost: 5, desc: "Deep study relax energy." },
        { id: "frog", name: "Zen Frog 🐸", char: "🐸", cost: 5, desc: "Mindful, self-managed leader." },
        { id: "unicorn", name: "Unicorn 🦄", char: "🦄", cost: 8, desc: "Rare creative spark & innovator." },
        { id: "alien", name: "Explorer 👽", char: "👽", cost: 8, desc: "Out-of-this-world sci-tech vision." },
        { id: "robot", name: "AI Builder 🤖", char: "🤖", cost: 8, desc: "Technology club operator." },
        { id: "dino", name: "T-Rex 🦖", char: "🦖", cost: 5, desc: "Mighty curiosity and historical strength." },
        { id: "gamepad", name: "Gamer Elite 🎮", char: "🎮", cost: 6, desc: "Strategic check-ins and problem solver." },
        { id: "headphones", name: "Lo-Fi Beats 🎧", char: "🎧", cost: 6, desc: "Deep focus study session vibes." },
        { id: "rocket", name: "Rocket 🚀", char: "🚀", cost: 8, desc: "Shooting for high academic honors." },
        { id: "bolt", name: "Thunder Spark ⚡", char: "⚡", cost: 5, desc: "Charged with raw creative drive." },
        { id: "sparkles", name: "Sparkles ✨", char: "✨", cost: 6, desc: "Shining bright in community service." },
        { id: "skate", name: "Skateboard 🛹", char: "🛹", cost: 5, desc: "Active, cool-headed peer guide." }
      ],
      avatarBg: [
        { id: "default", name: "Classic Slate", gradient: "from-slate-700 to-slate-800", cost: 0, desc: "Clean solid dark neutral grey." },
        { id: "copley", name: "Copley Blue & Gold", gradient: "from-copley-blue to-indigo-950 border border-copley-gold/30", cost: 5, desc: "Official Copley Indians school theme." },
        { id: "sunset", name: "Sunset Horizon", gradient: "from-pink-500 via-rose-500 to-amber-500", cost: 6, desc: "Warm and radiant color sweep." },
        { id: "aurora", name: "Neon Aurora", gradient: "from-teal-400 to-emerald-500", cost: 6, desc: "Glow northerly neon lights." },
        { id: "cyber", name: "Cyberpunk Wave", gradient: "from-purple-600 via-pink-500 to-blue-500", cost: 8, desc: "High-contrast dynamic synthwave loop." },
        { id: "obsidian", name: "Obsidian Space", gradient: "from-zinc-950 via-neutral-900 to-slate-950", cost: 8, desc: "Sleek, premium matte-dark sphere." },
        { id: "mint", name: "Lime Splash", gradient: "from-lime-400 to-emerald-600", cost: 5, desc: "Energetic and fresh minty tones." },
        { id: "candy", name: "Cotton Candy", gradient: "from-blue-200 via-purple-200 to-pink-200", cost: 5, desc: "Soft pastel, cozy cloud tones." }
      ],
      avatarFont: [
        { id: "default", name: "Sleek Sans", fontClass: "font-sleek-sans", cost: 0, desc: "Modern sans-serif typography." },
        { id: "varsity", name: "Varsity Block", fontClass: "font-display-varsity", cost: 5, desc: "Collegiate high-spirit block letters." },
        { id: "serif", name: "Royal Serif", fontClass: "font-editorial-serif", cost: 5, desc: "Elegant literary academic script." },
        { id: "neon", name: "Cyber Neon", fontClass: "font-cyber-neon text-shadow-neon", cost: 6, desc: "Glowing tech-lab console letters." }
      ],
      avatarIcon: [
        { id: "grad", name: "User Graduate (Default)", icon: "fa-user-graduate", cost: 0, desc: "Standard scholar profile symbol." },
        { id: "shield", name: "Brand Shield", icon: "fa-shield-halved", cost: 5, desc: "Primary brand shield for academic prestige." },
        { id: "atom", name: "Sci-Tech Atom", icon: "fa-atom", cost: 5, desc: "For technical innovators and coders." },
        { id: "trophy", name: "Champion Trophy", icon: "fa-trophy", cost: 5, desc: "For athletic and leadership team captains." },
        { id: "palette", name: "Creative Palette", icon: "fa-palette", cost: 5, desc: "For visual arts, music, and writers." },
        { id: "brain", name: "Logic Brain", icon: "fa-brain", cost: 5, desc: "Represents critical thinking and memory masters." },
        { id: "gavel", name: "Debate Gavel", icon: "fa-gavel", cost: 5, desc: "For public speech and student council leaders." },
        { id: "globe", name: "Global Thinker", icon: "fa-globe", cost: 5, desc: "For languages, history, and international studies." }
      ],
      border: [
        { id: "default", name: "Classic Slate", borderClass: "shadow-sm border-slate-200", cost: 0, desc: "Standard clean Copley styling." },
        { id: "gold", name: "Gold Topaz Aura", borderClass: "shadow-[0_0_12px_rgba(255,204,4,0.7)] border-2 border-copley-gold", cost: 10, desc: "Rich athletic gold glow representing school excellence." },
        { id: "blue", name: "Sapphire Spark", borderClass: "shadow-[0_0_12px_rgba(59,130,246,0.7)] border-2 border-blue-500", cost: 10, desc: "Cool blue haptic wave representing peace and wisdom." },
        { id: "emerald", name: "Emerald Fire", borderClass: "shadow-[0_0_15px_rgba(16,185,129,0.8)] border-2 border-emerald-500", cost: 12, desc: "Vibrant deep green fire for self-managed leaders." },
        { id: "cyber", name: "Cyberpunk Pulse", borderClass: "shadow-[0_0_20px_rgba(168,85,247,0.9)] border-2 border-purple-500", cost: 15, desc: "highly premium pulsing purple gradient haptic ring." }
      ],
      title: [
        { id: "default", name: "No Title", titleText: "", cost: 0, desc: "Clean, name-only badge layout." },
        { id: "scholar", name: "Copley Scholar", titleText: "Copley Scholar", cost: 5, desc: "Dedicated student committed to learning." },
        { id: "guru", name: "Gratitude Guru", titleText: "Gratitude Guru", cost: 0, reqVso: 3, desc: "FREE unlock after sending 3 gratitude virtual slips to staff!" },
        { id: "spirit", name: "Spirit Leader", titleText: "Spirit Leader", cost: 10, desc: "A vocal advocate for graduating Class Clash points." },
        { id: "trailblazer", name: "Quiet Achiever", titleText: "Quiet Achiever", cost: 8, desc: "For the unsung heroes of focus, care, and kindness." }
      ],
      themeBackdrop: [
        { id: "default", name: "Classic Copley", cardClass: "bg-white border border-slate-200/80 text-slate-800", cost: 0, desc: "Standard Copley High slate-and-white card." },
        { id: "darkglass", name: "Stealth Cyber", cardClass: "bg-slate-900 border border-purple-500/30 text-white shadow-[0_0_15px_rgba(168,85,247,0.15)] dark", cost: 10, desc: "Sleek dark-mode card with glowing purple energy." },
        { id: "royal", name: "Royal Prestige", cardClass: "bg-gradient-to-br from-amber-50 via-white to-orange-50/50 border border-copley-gold text-copley-blue shadow-[0_4px_12px_rgba(212,175,55,0.1)]", cost: 10, desc: "Premium collegiate gold trim with warm parchment." },
        { id: "nebula", name: "Cosmic Nebula", cardClass: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-indigo-500/40 text-slate-100 shadow-[0_4px_15px_rgba(99,102,241,0.15)] dark", cost: 12, desc: "Deep space purple-to-blue starlight gradient." },
        { id: "monogram", name: "Translucent Monogram", cardClass: "bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 border border-slate-200 text-copley-blue", hasMonogramBg: true, cost: 8, desc: "Large translucent initials watermark behind card contents." },
        { id: "emoji", name: "Emoji Wallpaper Grid", cardClass: "bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border border-slate-200 text-slate-800", hasEmojiBg: true, cost: 8, desc: "Cool repeat floating wall pattern of your active emoji." },
        { id: "lofi", name: "Retro Vaporwave Grid", cardClass: "bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 border border-pink-500/40 text-pink-100 shadow-[0_4px_15px_rgba(236,72,153,0.2)] dark", isLofiGrid: true, cost: 12, desc: "Retro synthwave 3D neon wireframe mesh card." }
      ],
      themeNameFont: [
        { id: "default", name: "Sleek Sans", fontClass: "font-sleek-sans", cost: 0, desc: "Standard sans-serif styling." },
        { id: "varsity", name: "Varsity Block", fontClass: "font-display-varsity", cost: 5, desc: "Collegiate block varsity lettering style." },
        { id: "serif", name: "Royal Serif", fontClass: "font-editorial-serif", cost: 5, desc: "Graceful classic academic script." },
        { id: "neon", name: "Cyber Neon Glow", fontClass: "font-cyber-neon theme-name-purple", cost: 6, desc: "Futuristic glowing terminal lettering." }
      ],
      themeNameColor: [
        { id: "default", name: "Default Contrast", textStyle: "", cost: 0, desc: "Standard theme text contrast colors." },
        { id: "gold", name: "Gold Topaz Glow", textStyle: "theme-name-gold", cost: 5, desc: "Radiant Copley Gold prestige lettering." },
        { id: "purple", name: "Purple Cyber Glow", textStyle: "theme-name-purple", cost: 5, desc: "Glowing cyberpunk neon purple tones." },
        { id: "mint", name: "Emerald Mint Glow", textStyle: "theme-name-mint", cost: 5, desc: "Fresh fluorescent green glowing shadow." },
        { id: "crimson", name: "Ruby Crimson Glow", textStyle: "theme-name-crimson", cost: 5, desc: "Burning ruby-red intense highlight text." }
      ]
    };

    let activeCustomizerTab = "avatar";
    let currentPreviewState = {
      avatar: {
        type: "monogram",
        char: "",
        emoji: "cat",
        icon: "grad",
        font: "default",
        bg: "default"
      },
      border: "default",
      title: "default",
      theme: {
        backdrop: "default",
        nameFont: "default",
        nameColor: "default"
      }
    };

    function initStudentCosmetics() {
      if (Object.keys(AppState.studentCosmetics).length === 0) {
        const cached = localStorage.getItem('AppState_studentCosmetics');
        if (cached) {
          AppState.studentCosmetics = JSON.parse(cached);
        } else {
          // Initialize defaults for active students
          AppState.students.forEach(s => {
            AppState.studentCosmetics[s.name] = {
              avatar: {
                type: "monogram",
                char: s.name.charAt(0),
                emoji: "cat",
                icon: "grad",
                font: "default",
                bg: "default"
              },
              border: "default",
              title: "default",
              theme: {
                backdrop: "default",
                nameFont: "default",
                nameColor: "default"
              },
              unlocked: [
                "avatarType-monogram",
                "avatarBg-default",
                "avatarFont-default",
                "avatarIcon-grad",
                "avatarEmoji-cat",
                "border-default",
                "title-default",
                "themeBackdrop-default",
                "themeNameFont-default",
                "themeNameColor-default"
              ]
            };
          });
          // Seed Frodo and Ahsoka with base titles
          AppState.studentCosmetics["Frodo Baggins"].title = "scholar";
          AppState.studentCosmetics["Frodo Baggins"].unlocked.push("title-scholar");
          
          localStorage.setItem('AppState_studentCosmetics', JSON.stringify(AppState.studentCosmetics));
        }
      }

      // Execute schema migrations on active database records to support old string-based values safely!
      AppState.students.forEach(s => {
        let cos = AppState.studentCosmetics[s.name];
        if (!cos) {
          AppState.studentCosmetics[s.name] = {
            avatar: { type: "monogram", char: s.name.charAt(0), emoji: "cat", icon: "grad", font: "default", bg: "default" },
            border: "default",
            title: "default",
            theme: { backdrop: "default", nameFont: "default", nameColor: "default" },
            unlocked: ["avatarType-monogram", "avatarBg-default", "avatarFont-default", "avatarIcon-grad", "avatarEmoji-cat", "border-default", "title-default", "themeBackdrop-default", "themeNameFont-default", "themeNameColor-default"]
          };
          cos = AppState.studentCosmetics[s.name];
        }

        // 1. Migrate old flat string avatar field to structured object
        if (typeof cos.avatar === "string") {
          const oldAvatar = cos.avatar;
          cos.avatar = {
            type: (oldAvatar === "default") ? "monogram" : "icon",
            char: s.name.charAt(0),
            emoji: "cat",
            icon: (oldAvatar !== "default") ? oldAvatar : "grad",
            font: "default",
            bg: "default"
          };
          // Make sure baseline unlocks are preserved
          if (!cos.unlocked.includes("avatarType-monogram")) cos.unlocked.push("avatarType-monogram");
          if (!cos.unlocked.includes("avatarBg-default")) cos.unlocked.push("avatarBg-default");
          if (!cos.unlocked.includes("avatarFont-default")) cos.unlocked.push("avatarFont-default");
          if (!cos.unlocked.includes("avatarIcon-grad")) cos.unlocked.push("avatarIcon-grad");
          if (!cos.unlocked.includes("avatarEmoji-cat")) cos.unlocked.push("avatarEmoji-cat");
        }

        // 2. Migrate old flat string theme field to structured theme object
        if (typeof cos.theme === "string") {
          const oldTheme = cos.theme || "default";
          cos.theme = {
            backdrop: oldTheme,
            nameFont: "default",
            nameColor: "default"
          };
          if (!cos.unlocked.includes(`themeBackdrop-${oldTheme}`)) {
            cos.unlocked.push(`themeBackdrop-${oldTheme}`);
          }
          if (!cos.unlocked.includes("themeNameFont-default")) cos.unlocked.push("themeNameFont-default");
          if (!cos.unlocked.includes("themeNameColor-default")) cos.unlocked.push("themeNameColor-default");
        }

        // Double check standard unlocked contents
        if (!cos.unlocked) {
          cos.unlocked = [
            "avatarType-monogram",
            "avatarBg-default",
            "avatarFont-default",
            "avatarIcon-grad",
            "avatarEmoji-cat",
            "border-default",
            "title-default",
            "themeBackdrop-default",
            "themeNameFont-default",
            "themeNameColor-default"
          ];
        }
      });
      
      // Persist modifications
      localStorage.setItem('AppState_studentCosmetics', JSON.stringify(AppState.studentCosmetics));
    }

    function openCosmeticsModal() {
      initStudentCosmetics();
      playSynthClick();
      
      const modal = document.getElementById('cosmeticsModal');
      modal.classList.remove('hidden');
      modal.offsetHeight; // force reflow
      modal.classList.remove('opacity-0');
      modal.classList.add('opacity-100');
      
      const card = modal.querySelector('div');
      card.classList.remove('scale-95');
      card.classList.add('scale-100');
      
      // Load current student stats
      const student = AppState.activeStudent;
      document.getElementById('previewStudentName').innerText = student;
      
      // Initialize temporary preview state with equipped cosmetics
      const cos = AppState.studentCosmetics[student] || {
        avatar: { type: "monogram", char: student.charAt(0), emoji: "cat", icon: "grad", font: "default", bg: "default" },
        border: "default",
        title: "default",
        theme: { backdrop: "default", nameFont: "default", nameColor: "default" }
      };
      
      currentPreviewState = {
        avatar: JSON.parse(JSON.stringify(cos.avatar)),
        border: cos.border || "default",
        title: cos.title || "default",
        theme: JSON.parse(JSON.stringify(cos.theme))
      };
      
      updateCustomizerPreview();
      switchCustomizerTab(activeCustomizerTab);
    }

    function closeCosmeticsModal() {
      const modal = document.getElementById('cosmeticsModal');
      const card = modal.querySelector('div');
      card.classList.remove('scale-100');
      card.classList.add('scale-95');
      
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
      playSynthClick();
    }

    function updateCustomizerPreview() {
      const student = AppState.activeStudent;
      const std = AppState.students.find(s => s.name === student) || { points: 0 };
      
      document.getElementById('customizerPointsBalance').innerText = `${std.points} PTS`;
      
      const cos = currentPreviewState;
      const avatarDef = cos.avatar;
      
      const avatarBgDef = CosmeticCatalog.avatarBg.find(bg => bg.id === avatarDef.bg) || CosmeticCatalog.avatarBg[0];
      const avatarFontDef = CosmeticCatalog.avatarFont.find(f => f.id === avatarDef.font) || CosmeticCatalog.avatarFont[0];
      const avatarEmojiDef = CosmeticCatalog.avatarEmoji.find(e => e.id === avatarDef.emoji) || CosmeticCatalog.avatarEmoji[0];
      const avatarIconDef = CosmeticCatalog.avatarIcon.find(i => i.id === avatarDef.icon) || CosmeticCatalog.avatarIcon[0];
      
      const borderDef = CosmeticCatalog.border.find(b => b.id === cos.border) || CosmeticCatalog.border[0];
      const titleDef = CosmeticCatalog.title.find(t => t.id === cos.title) || CosmeticCatalog.title[0];
      
      const themeBackdropDef = CosmeticCatalog.themeBackdrop.find(t => t.id === cos.theme.backdrop) || CosmeticCatalog.themeBackdrop[0];
      const themeNameFontDef = CosmeticCatalog.themeNameFont.find(t => t.id === cos.theme.nameFont) || CosmeticCatalog.themeNameFont[0];
      const themeNameColorDef = CosmeticCatalog.themeNameColor.find(t => t.id === cos.theme.nameColor) || CosmeticCatalog.themeNameColor[0];
      
      // Update preview card theme class
      const previewCard = document.getElementById('previewCard');
      if (previewCard) {
        previewCard.className = `${themeBackdropDef.cardClass} md:col-span-5 p-5 rounded-2xl text-center relative overflow-hidden h-[330px] flex flex-col items-center justify-between transition-all duration-300`;
      }
      
      // Update procedurally rendered backdrops in preview
      const cardMonoBg = document.getElementById('previewCardMonogramBg');
      const cardEmojiBg = document.getElementById('previewCardEmojiBg');
      const cardLofiBg = document.getElementById('previewCardLofiBg');
      
      if (cardMonoBg) cardMonoBg.classList.add('hidden');
      if (cardEmojiBg) cardEmojiBg.classList.add('hidden');
      if (cardLofiBg) cardLofiBg.classList.add('hidden');
      
      if (themeBackdropDef.hasMonogramBg) {
        if (cardMonoBg) {
          cardMonoBg.innerText = avatarDef.char || student.charAt(0);
          cardMonoBg.classList.remove('hidden');
        }
      } else if (themeBackdropDef.hasEmojiBg) {
        if (cardEmojiBg) {
          let activeChar = avatarDef.type === 'emoji' ? avatarEmojiDef.char : "🎓";
          cardEmojiBg.innerHTML = '';
          for (let i = 0; i < 16; i++) {
            const span = document.createElement('span');
            span.innerText = activeChar;
            cardEmojiBg.appendChild(span);
          }
          cardEmojiBg.classList.remove('hidden');
        }
      } else if (themeBackdropDef.isLofiGrid) {
        if (cardLofiBg) {
          cardLofiBg.classList.remove('hidden');
        }
      }

      const previewName = document.getElementById('previewStudentName');
      if (previewName) {
        let nameClass = "text-base font-black heading-style leading-none truncate z-10 ";
        nameClass += themeNameFontDef.fontClass + " ";
        if (themeNameColorDef.id === 'default') {
          if (themeBackdropDef.id === 'darkglass' || themeBackdropDef.id === 'nebula' || themeBackdropDef.id === 'lofi') {
            previewName.className = nameClass + "text-white";
          } else {
            previewName.className = nameClass + "text-copley-blue";
          }
        } else {
          previewName.className = nameClass + themeNameColorDef.textStyle;
        }
      }
      
      // Update preview elements
      const previewLetter = document.getElementById('previewLetter');
      const previewIcon = document.getElementById('previewAvatarIcon');
      const previewGlow = document.getElementById('previewAvatarGlow');
      const previewContainer = document.getElementById('previewAvatarContainer');
      const previewTitle = document.getElementById('previewTitleBadge');
      
      if (previewLetter) previewLetter.classList.add('hidden');
      if (previewIcon) previewIcon.classList.add('hidden');
      
      if (previewContainer) {
        previewContainer.className = `w-20 h-20 rounded-full flex items-center justify-center border-2 border-white shadow-md relative select-none transition-all duration-300 z-10 bg-gradient-to-br ${avatarBgDef.gradient}`;
      }
      
      if (avatarDef.type === "monogram") {
        if (previewLetter) {
          previewLetter.innerText = avatarDef.char || student.charAt(0);
          previewLetter.className = `text-3xl leading-none z-10 select-none ${avatarFontDef.fontClass}`;
          previewLetter.classList.remove('hidden');
        }
      } else if (avatarDef.type === "emoji") {
        if (previewLetter) {
          previewLetter.innerText = avatarEmojiDef.char;
          previewLetter.className = "text-4xl leading-none z-10 select-none";
          previewLetter.classList.remove('hidden');
        }
      } else if (avatarDef.type === "icon") {
        if (previewIcon) {
          previewIcon.className = `fa-solid ${avatarIconDef.icon} text-2xl z-10 select-none text-white`;
          previewIcon.classList.remove('hidden');
        }
      }
      
      // Apply glowing class in preview
      if (previewGlow) {
        previewGlow.className = "absolute inset-0 rounded-full transition-all duration-300";
        if (borderDef.id === "gold") {
          previewGlow.classList.add('shadow-[0_0_15px_rgba(255,204,4,0.85)]', 'border-2', 'border-copley-gold');
        } else if (borderDef.id === "blue") {
          previewGlow.classList.add('shadow-[0_0_15px_rgba(59,130,246,0.85)]', 'border-2', 'border-blue-500', 'animate-pulse');
        } else if (borderDef.id === "emerald") {
          previewGlow.classList.add('shadow-[0_0_20px_rgba(16,185,129,0.9)]', 'border-2', 'border-emerald-500');
        } else if (borderDef.id === "cyber") {
          previewGlow.classList.add('shadow-[0_0_25px_rgba(168,85,247,0.95)]', 'border-2', 'border-purple-500', 'animate-pulse');
        } else {
          previewGlow.className = "absolute inset-1 border border-slate-200/40 rounded-full";
        }
      }
      
      if (previewTitle) {
        if (titleDef.id === "default" || !titleDef.titleText) {
          previewTitle.classList.add('hidden');
        } else {
          previewTitle.innerText = titleDef.titleText;
          previewTitle.classList.remove('hidden');
          previewTitle.className = "inline-block text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded border heading-style shadow-sm";
          if (titleDef.id === "spirit") {
            previewTitle.classList.add('bg-copley-blue', 'text-copley-gold', 'border-copley-gold/30');
          } else if (titleDef.id === "scholar") {
            previewTitle.classList.add('bg-amber-50', 'text-amber-600', 'border-amber-100');
          } else if (titleDef.id === "guru") {
            previewTitle.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-100');
          } else {
            previewTitle.classList.add('bg-slate-50', 'text-slate-600', 'border-slate-200');
          }
        }
      }
    }

    function switchCustomizerTab(tabId) {
      activeCustomizerTab = tabId;
      playSynthBasicClick();
      
      const tabs = ["avatar", "border", "title", "theme"];
      tabs.forEach(t => {
        const btn = document.getElementById(`custTab-${t}`);
        if (btn) {
          if (t === tabId) {
            btn.className = "flex-grow bg-white text-copley-blue px-2.5 py-1.5 rounded-lg shadow-sm font-black uppercase text-center transition-all";
          } else {
            btn.className = "flex-grow text-slate-500 hover:text-slate-700 px-2.5 py-1.5 rounded-lg font-black uppercase text-center transition-all";
          }
        }
      });
      
      renderCustomizerShop();
    }

    function changePreviewAvatarType(typeId) {
      currentPreviewState.avatar.type = typeId;
      playSynthBasicClick();
      updateCustomizerPreview();
      renderCustomizerShop();
    }

    function changePreviewMonogramChar(text) {
      const sanitized = text.replace(/[^a-zA-Z0-9 ]/g, '').substring(0, 2);
      currentPreviewState.avatar.char = sanitized;
      updateCustomizerPreview();
    }

    function equipDirectItem(category, itemId) {
      const student = AppState.activeStudent;
      const cosState = AppState.studentCosmetics[student];
      if (!cosState) return;
      
      cosState[category] = itemId;
      currentPreviewState[category] = itemId;
      playSynthBasicClick();
      showToast("Equipped! 🛡️", "Cosmetic successfully equipped!");
      
      localStorage.setItem('AppState_studentCosmetics', JSON.stringify(AppState.studentCosmetics));
      updateCustomizerPreview();
      renderCustomizerShop();
      updateStudentDashboard();
      hydrateScoreboard();
      renderStudentLeaderboard();
    }

    function buyOrEquipDirectCosmetic(category, itemId) {
      const student = AppState.activeStudent;
      const std = AppState.students.find(s => s.name === student);
      if (!std) return;
      
      const cosState = AppState.studentCosmetics[student];
      const items = CosmeticCatalog[category];
      const item = items.find(i => i.id === itemId);
      if (!item) return;
      
      if (std.points < item.cost) {
        playSynthBasicClick();
        showToast("Insufficient Points!", `You need ${item.cost} points.`);
        return;
      }
      
      std.points -= item.cost;
      cosState.unlocked.push(`${category}-${itemId}`);
      cosState[category] = itemId;
      currentPreviewState[category] = itemId;
      
      playSynthSuccess();
      triggerConfetti();
      showToast("🎟️ UNLOCKED!", `Successfully unlocked ${item.name}!`);
      
      localStorage.setItem('AppState_studentCosmetics', JSON.stringify(AppState.studentCosmetics));
      updateCustomizerPreview();
      renderCustomizerShop();
      updateStudentDashboard();
      hydrateScoreboard();
      renderStudentLeaderboard();
    }

    function buyOrEquipGridItem(categoryName, itemId, cost) {
      const student = AppState.activeStudent;
      const std = AppState.students.find(s => s.name === student);
      if (!std) return;
      
      initStudentCosmetics();
      const cosState = AppState.studentCosmetics[student];
      
      if (std.points < cost) {
        playSynthBasicClick();
        showToast("Insufficient Points!", `You need ${cost} points, but you have ${std.points} points.`);
        return;
      }
      
      // Deduct points
      std.points -= cost;
      // Add unlock
      cosState.unlocked.push(`${categoryName}-${itemId}`);
      
      // Equip or apply in preview immediately
      if (categoryName.startsWith('avatar')) {
        const key = categoryName.replace('avatar', '');
        const keyLower = key.charAt(0).toLowerCase() + key.slice(1);
        currentPreviewState.avatar[keyLower] = itemId;
      } else if (categoryName.startsWith('theme')) {
        const key = categoryName.replace('theme', '');
        const keyLower = key.charAt(0).toLowerCase() + key.slice(1);
        currentPreviewState.theme[keyLower] = itemId;
      }
      
      playSynthSuccess();
      triggerConfetti();
      showToast("🎟️ ASSET UNLOCKED!", `Successfully unlocked!`);
      
      localStorage.setItem('AppState_studentCosmetics', JSON.stringify(AppState.studentCosmetics));
      
      updateCustomizerPreview();
      renderCustomizerShop();
    }

    function saveChangesTransaction() {
      const student = AppState.activeStudent;
      const cosState = AppState.studentCosmetics[student];
      if (!cosState) return;

      // Copy preview state back to active equipped cosmetics
      cosState.avatar = JSON.parse(JSON.stringify(currentPreviewState.avatar));
      cosState.theme = JSON.parse(JSON.stringify(currentPreviewState.theme));

      playSynthSuccess();
      showToast("Design Applied! 🎨", "Your fully customized name badge & contact poster has been published!");
      
      localStorage.setItem('AppState_studentCosmetics', JSON.stringify(AppState.studentCosmetics));
      
      updateCustomizerPreview();
      renderCustomizerShop();
      updateStudentDashboard();
      hydrateScoreboard();
      renderStudentLeaderboard();
    }

    function renderUpgradeGrid(title, categoryName, itemsArray, activeId, onSelectCallback, cosState, std, isEmoji = false, isIcon = false, isBg = false) {
      const container = document.getElementById('customizerShopContainer');
      
      const titleEl = document.createElement('h6');
      titleEl.className = "text-[9px] font-black text-slate-400 uppercase tracking-widest mt-4 mb-1.5";
      titleEl.innerText = title;
      container.appendChild(titleEl);

      const grid = document.createElement('div');
      grid.className = "grid grid-cols-4 gap-2.5 mb-4";
      
      itemsArray.forEach(item => {
        const isUnlocked = cosState.unlocked.includes(`${categoryName}-${item.id}`);
        const isActive = activeId === item.id;
        
        const card = document.createElement('div');
        let borderClass = isActive ? 'border-copley-gold bg-amber-50/15' : 'border-slate-200/80 bg-white hover:border-slate-300';
        card.className = `relative cursor-pointer border rounded-xl p-2 flex flex-col items-center justify-center text-center transition-all ${borderClass} h-[68px]`;
        
        let itemDisplayHTML = '';
        if (isBg) {
          itemDisplayHTML = `
            <div class="w-7 h-7 rounded-full bg-gradient-to-br ${item.gradient} border border-white shadow-sm flex items-center justify-center"></div>
            <span class="text-[8px] font-bold text-slate-500 truncate w-full mt-1 leading-none block">${item.name}</span>
          `;
        } else if (isEmoji) {
          itemDisplayHTML = `
            <span class="text-xl leading-none block select-none">${item.char}</span>
            <span class="text-[8px] font-bold text-slate-500 truncate w-full mt-1 leading-none block">${item.name.split(' ')[0]}</span>
          `;
        } else if (isIcon) {
          itemDisplayHTML = `
            <i class="fa-solid ${item.icon} text-lg text-copley-blue"></i>
            <span class="text-[7px] font-bold text-slate-500 truncate w-full mt-1.5 leading-none block">${item.name.replace(' (Default)', '')}</span>
          `;
        } else if (categoryName === 'avatarFont' || categoryName === 'themeNameFont') {
          itemDisplayHTML = `
            <span class="${item.fontClass} text-base leading-none block text-copley-blue select-none">Aa</span>
            <span class="text-[8px] font-bold text-slate-500 truncate w-full mt-1.5 leading-none block">${item.name}</span>
          `;
        } else if (categoryName === 'themeNameColor') {
          let textStyle = item.id === 'default' ? 'text-slate-800' : item.textStyle;
          itemDisplayHTML = `
            <span class="text-sm font-black leading-none block ${textStyle} select-none">Aa</span>
            <span class="text-[8px] font-bold text-slate-500 truncate w-full mt-1.5 leading-none block">${item.name.replace(' Glow', '')}</span>
          `;
        } else if (categoryName === 'themeBackdrop') {
          let cardStyle = '';
          if (item.id === 'darkglass') cardStyle = 'bg-slate-900 border border-purple-500/30';
          else if (item.id === 'royal') cardStyle = 'bg-gradient-to-br from-amber-50 to-orange-50/50 border border-copley-gold';
          else if (item.id === 'nebula') cardStyle = 'bg-gradient-to-br from-slate-950 to-indigo-950 border border-indigo-500/40';
          else if (item.id === 'monogram') cardStyle = 'bg-gradient-to-br from-blue-50 to-indigo-50/30 border border-slate-200';
          else if (item.id === 'emoji') cardStyle = 'bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200';
          else if (item.id === 'lofi') cardStyle = 'bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-950 border border-pink-500/40';
          else cardStyle = 'bg-white border border-slate-200';
          
          itemDisplayHTML = `
            <div class="w-8 h-4 rounded border ${cardStyle} shrink-0 mb-1 flex items-center justify-center"><i class="fa-solid fa-square-poll-horizontal text-[6px] text-copley-gold/30"></i></div>
            <span class="text-[8px] font-bold text-slate-500 truncate w-full mt-0.5 leading-none block">${item.name}</span>
          `;
        }

        if (!isUnlocked) {
          card.classList.add('opacity-90');
          const canAfford = std.points >= item.cost;
          let lockColor = canAfford ? 'text-copley-gold' : 'text-slate-300';
          
          const lockHTML = `
            <div class="absolute inset-0 bg-slate-900/40 border border-slate-800 rounded-xl flex flex-col items-center justify-center text-white gap-0.5">
              <i class="fa-solid fa-lock text-[10px] ${lockColor}"></i>
              <span class="text-[8px] font-black">${item.cost}p</span>
            </div>
          `;
          card.innerHTML = lockHTML + itemDisplayHTML;
          card.onclick = () => {
            buyOrEquipGridItem(categoryName, item.id, item.cost);
          };
        } else {
          card.innerHTML = itemDisplayHTML;
          card.onclick = () => {
            onSelectCallback(item.id);
          };
        }
        grid.appendChild(card);
      });
      container.appendChild(grid);
    }

    function renderSaveButton(container, cosState, std) {
      const saveDiv = document.createElement('div');
      saveDiv.className = "bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-md flex justify-between items-center mt-6 select-none";
      saveDiv.innerHTML = `
        <div class="text-left">
          <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Customizer Studio</span>
          <span class="text-[10px] font-extrabold text-slate-700 block mt-1">Mix & Match Active Layout</span>
        </div>
        <button onclick="saveChangesTransaction()" class="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[9px] px-5 py-2.5 rounded-lg transition uppercase shadow active:scale-95 flex items-center gap-1.5 border border-transparent">
          <i class="fa-solid fa-floppy-disk"></i>
          <span>Save & Apply Customization</span>
        </button>
      `;
      container.appendChild(saveDiv);
    }

    function renderCustomizerShop() {
      const container = document.getElementById('customizerShopContainer');
      if (!container) return;
      container.innerHTML = '';
      
      const student = AppState.activeStudent;
      const std = AppState.students.find(s => s.name === student) || { points: 0 };
      const cosState = AppState.studentCosmetics[student] || {
        avatar: { type: "monogram", char: student.charAt(0), emoji: "cat", icon: "grad", font: "default", bg: "default" },
        border: "default",
        title: "default",
        theme: { backdrop: "default", nameFont: "default", nameColor: "default" },
        unlocked: []
      };

      const gratitudeSlips = AppState.mockSlips.filter(slip => slip.sender === student).length;

      // Render tab-specific shops
      if (activeCustomizerTab === 'avatar') {
        const activeType = currentPreviewState.avatar.type || "monogram";
        
        const typeSelectionHTML = `
          <div class="space-y-1.5 mb-4">
            <label class="block text-[9px] font-black text-slate-400 uppercase tracking-widest">1. Select Avatar Type</label>
            <div class="flex bg-slate-200/60 p-0.5 rounded-lg border border-slate-200/20 font-bold text-[9px] select-none">
              <button onclick="changePreviewAvatarType('monogram')" class="flex-grow ${activeType === 'monogram' ? 'bg-white text-copley-blue shadow-sm font-black' : 'text-slate-500'} px-2 py-1.5 rounded-lg uppercase text-center transition-all">Monogram</button>
              <button onclick="changePreviewAvatarType('emoji')" class="flex-grow ${activeType === 'emoji' ? 'bg-white text-copley-blue shadow-sm font-black' : 'text-slate-500'} px-2 py-1.5 rounded-lg uppercase text-center transition-all">Emoji</button>
              <button onclick="changePreviewAvatarType('icon')" class="flex-grow ${activeType === 'icon' ? 'bg-white text-copley-blue shadow-sm font-black' : 'text-slate-500'} px-2 py-1.5 rounded-lg uppercase text-center transition-all">Academic Icon</button>
            </div>
          </div>
        `;

        const typeContainer = document.createElement('div');
        typeContainer.innerHTML = typeSelectionHTML;
        container.appendChild(typeContainer);

        if (activeType === "monogram") {
          const inputHTML = `
            <div class="space-y-2 mb-4 bg-white border border-slate-200/60 p-3 rounded-xl shadow-sm">
              <label class="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Type custom initials (Max 2 chars)</label>
              <input type="text" id="monogramTextVal" maxlength="2" placeholder="${student.charAt(0)}" value="${currentPreviewState.avatar.char || student.charAt(0)}" oninput="changePreviewMonogramChar(this.value)" class="w-full bg-slate-50 border border-slate-200 p-2 rounded-lg text-slate-800 font-black text-xs focus:outline-none focus:border-copley-blue">
            </div>
          `;
          const inputDiv = document.createElement('div');
          inputDiv.innerHTML = inputHTML;
          container.appendChild(inputDiv);

          renderUpgradeGrid("Monogram Typography Font Style", "avatarFont", CosmeticCatalog.avatarFont, currentPreviewState.avatar.font, (itemId) => {
            currentPreviewState.avatar.font = itemId;
            playSynthBasicClick();
            updateCustomizerPreview();
            renderCustomizerShop();
          }, cosState, std);
        } else if (activeType === "emoji") {
          renderUpgradeGrid("Select Custom Emoji Face", "avatarEmoji", CosmeticCatalog.avatarEmoji, currentPreviewState.avatar.emoji, (itemId) => {
            currentPreviewState.avatar.emoji = itemId;
            playSynthBasicClick();
            updateCustomizerPreview();
            renderCustomizerShop();
          }, cosState, std, true);
        } else if (activeType === "icon") {
          renderUpgradeGrid("Select Academic Icon Symbol", "avatarIcon", CosmeticCatalog.avatarIcon, currentPreviewState.avatar.icon, (itemId) => {
            currentPreviewState.avatar.icon = itemId;
            playSynthBasicClick();
            updateCustomizerPreview();
            renderCustomizerShop();
          }, cosState, std, false, true);
        }

        renderUpgradeGrid("2. Select Profile Background Glow Gradient", "avatarBg", CosmeticCatalog.avatarBg, currentPreviewState.avatar.bg, (itemId) => {
          currentPreviewState.avatar.bg = itemId;
          playSynthBasicClick();
          updateCustomizerPreview();
          renderCustomizerShop();
        }, cosState, std, false, false, true);

        renderSaveButton(container, cosState, std);

      } else if (activeCustomizerTab === 'theme') {
        renderUpgradeGrid("Select Poster Backdrop Wallpaper", "themeBackdrop", CosmeticCatalog.themeBackdrop, currentPreviewState.theme.backdrop, (itemId) => {
          currentPreviewState.theme.backdrop = itemId;
          playSynthBasicClick();
          updateCustomizerPreview();
          renderCustomizerShop();
        }, cosState, std, false, false, false, true);

        renderUpgradeGrid("Select Name Typography Font Style", "themeNameFont", CosmeticCatalog.themeNameFont, currentPreviewState.theme.nameFont, (itemId) => {
          currentPreviewState.theme.nameFont = itemId;
          playSynthBasicClick();
          updateCustomizerPreview();
          renderCustomizerShop();
        }, cosState, std);

        renderUpgradeGrid("Select Glowing Name Text Color", "themeNameColor", CosmeticCatalog.themeNameColor, currentPreviewState.theme.nameColor, (itemId) => {
          currentPreviewState.theme.nameColor = itemId;
          playSynthBasicClick();
          updateCustomizerPreview();
          renderCustomizerShop();
        }, cosState, std);

        renderSaveButton(container, cosState, std);

      } else {
        const items = CosmeticCatalog[activeCustomizerTab];
        const activeEquipped = cosState[activeCustomizerTab];
        
        const label = document.createElement('h6');
        label.className = "text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2";
        label.innerText = activeCustomizerTab === 'border' ? "Select Glowing Border Aura" : "Select Customized Scholar Title";
        container.appendChild(label);

        items.forEach(item => {
          const isUnlocked = cosState.unlocked.includes(`${activeCustomizerTab}-${item.id}`);
          const isEquipped = activeEquipped === item.id;
          const isPreviewed = currentPreviewState[activeCustomizerTab] === item.id;
          
          let buttonHTML = '';
          
          if (isEquipped) {
            buttonHTML = `
              <button class="bg-emerald-50 text-emerald-600 border border-emerald-200 font-black text-[9px] px-3.5 py-2 rounded-lg flex items-center gap-1.5 uppercase cursor-default select-none shadow-sm">
                <i class="fa-solid fa-circle-check"></i>
                <span>Equipped</span>
              </button>
            `;
          } else if (isUnlocked) {
            buttonHTML = `
              <button onclick="equipDirectItem('${activeCustomizerTab}', '${item.id}')" class="bg-copley-blue hover:opacity-95 text-copley-gold border border-copley-blue/30 font-black text-[9px] px-4 py-2 rounded-lg transition uppercase shadow-sm active:scale-95 flex items-center gap-1.5">
                <i class="fa-solid fa-shirt"></i>
                <span>Equip</span>
              </button>
            `;
          } else {
            if (item.reqVso !== undefined) {
              const progress = Math.min(gratitudeSlips, item.reqVso);
              const met = gratitudeSlips >= item.reqVso;
              if (met) {
                buttonHTML = `
                  <button onclick="buyOrEquipDirectCosmetic('${activeCustomizerTab}', '${item.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500 font-black text-[9px] px-4 py-2 rounded-lg transition uppercase shadow-sm active:scale-95 flex items-center gap-1.5">
                    <i class="fa-solid fa-lock-open animate-bounce"></i>
                    <span>Unlock!</span>
                  </button>
                `;
              } else {
                buttonHTML = `
                  <button disabled class="bg-slate-100 text-slate-400 border border-slate-200 font-black text-[8px] px-2.5 py-2 rounded-lg flex items-center gap-1.5 uppercase cursor-not-allowed select-none">
                    <i class="fa-solid fa-lock text-[8px]"></i>
                    <span>Slips: ${progress}/${item.reqVso}</span>
                  </button>
                `;
              }
            } else {
              const canAfford = std.points >= item.cost;
              if (canAfford) {
                buttonHTML = `
                  <button onclick="buyOrEquipDirectCosmetic('${activeCustomizerTab}', '${item.id}')" class="bg-copley-gold text-copley-blue border border-copley-gold/30 hover:opacity-95 font-black text-[9px] px-3.5 py-2 rounded-lg transition uppercase shadow-sm active:scale-95 flex items-center gap-1">
                    <i class="fa-solid fa-unlock-keyhole"></i>
                    <span>Buy (-${item.cost}p)</span>
                  </button>
                `;
              } else {
                buttonHTML = `
                  <button disabled class="bg-slate-100 text-slate-400 border border-slate-200 font-black text-[9px] px-3 py-2 rounded-lg flex items-center gap-1 uppercase cursor-not-allowed select-none">
                    <i class="fa-solid fa-lock text-[8px]"></i>
                    <span>-${item.cost} PTS</span>
                  </button>
                `;
              }
            }
          }

          let iconPreviewHTML = '';
          if (activeCustomizerTab === 'border') {
            let borderStyle = '';
            if (item.id === 'gold') borderStyle = 'border border-copley-gold shadow-[0_0_5px_rgba(255,204,4,0.8)]';
            else if (item.id === 'blue') borderStyle = 'border border-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)] animate-pulse';
            else if (item.id === 'emerald') borderStyle = 'border border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.85)]';
            else if (item.id === 'cyber') borderStyle = 'border border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9)] animate-pulse';
            else borderStyle = 'border border-slate-300';
            
            iconPreviewHTML = `
              <div class="w-9 h-9 rounded-full bg-slate-100 p-0.5 shrink-0 flex items-center justify-center">
                <div class="w-full h-full rounded-full bg-white flex items-center justify-center ${borderStyle}">
                  <i class="fa-solid fa-user text-[10px] text-slate-400"></i>
                </div>
              </div>
            `;
          } else {
            iconPreviewHTML = `
              <div class="w-9 h-9 rounded bg-copley-blue text-copley-gold flex items-center justify-center shrink-0 font-serif font-black text-xs border border-copley-gold/30">
                T
              </div>
            `;
          }

          const row = document.createElement('div');
          const isPreviewedText = (isPreviewed && !isEquipped) ? ' <span class="text-[8px] font-black text-copley-gold uppercase ml-1 animate-pulse">(Previewing)</span>' : '';
          let borderClass = 'border-slate-200/80';
          if (isPreviewed) {
            borderClass = 'border-copley-gold bg-amber-50/20 shadow-sm';
          }
          
          row.className = `flex items-center justify-between p-3 border rounded-xl gap-3 shadow-sm hover:border-copley-gold/40 transition-all cursor-pointer ${borderClass}`;
          row.onclick = (e) => {
            if (e.target.closest('button')) return;
            currentPreviewState[activeCustomizerTab] = item.id;
            playSynthBasicClick();
            updateCustomizerPreview();
            renderCustomizerShop();
          };
          
          row.innerHTML = `
            <div class="flex items-center space-x-3.5 min-w-0">
              ${iconPreviewHTML}
              <div class="text-left leading-tight min-w-0">
                <h5 class="text-xs font-black text-slate-800 truncate heading-style">${item.name}${isPreviewedText}</h5>
                <p class="text-[9px] text-slate-400 font-semibold leading-normal mt-0.5 whitespace-normal">${item.desc}</p>
              </div>
            </div>
            <div class="shrink-0">
              ${buttonHTML}
            </div>
          `;
          container.appendChild(row);
        });
      }
    }

    // MTSS Student Tiers Controller
    function hydrateMTSSTabs() {
      const mtssSelector = document.getElementById('mtssStudent');
      const ccSelector = document.getElementById('ccStudent');
      
      mtssSelector.innerHTML = '';
      ccSelector.innerHTML = '';

      let tier2Size = 0;
      let tier3Size = 0;

      // Group students into dropdown lists and count sizes
      AppState.students.forEach(std => {
        if (std.tier === 'Tier 1') {
          const opt = document.createElement('option');
          opt.value = std.name;
          opt.innerText = std.name;
          mtssSelector.appendChild(opt);
        } else {
          const opt = document.createElement('option');
          opt.value = std.name;
          opt.innerText = `${std.name} (${std.tier})`;
          ccSelector.appendChild(opt);

          if (std.tier === 'Tier 2') tier2Size++;
          if (std.tier === 'Tier 3') tier3Size++;
        }
      });

      document.getElementById('tier2Count').innerText = `${tier2Size} Students`;
      document.getElementById('tier3Count').innerText = `${tier3Size} Students`;
      document.getElementById('dashMTSSActive').innerText = tier2Size + tier3Size;
    }

    // Submit academic MTSS recommendations (T2 / T3 support)
    function submitMTSSRec() {
      const studentName = document.getElementById('mtssStudent').value;
      const intervention = document.getElementById('mtssIntervention').value;
      const notes = document.getElementById('mtssNotes').value;

      // Gather red flags checked
      const flags = [];
      if (document.getElementById('flagMidterm').checked) flags.push("Failing Midterm");
      if (document.getElementById('flagMissing').checked) flags.push("Missing Work");
      if (document.getElementById('flagAssessment').checked) flags.push("Low Assessment Scores");
      if (document.getElementById('flagDisengaged').checked) flags.push("Disengaged Behavior");

      // Elevate student tier, assign recommendation
      const std = AppState.students.find(s => s.name === studentName);
      if (std) {
        std.tier = 'Tier 2';
      }

      // Add mock Check & Connect log
      AppState.mockCheckAndConnect.unshift({
        student: studentName,
        date: new Date().toISOString().split('T')[0],
        met: "Yes",
        goals: "Target Intervention Pathway Assigned",
        progress: "Steady Progress",
        notes: `MTSS support pathway deployed: ${intervention}. Reason flags registered: [${flags.join(', ')}]. Coordinator notes: ${notes}`
      });

      // Gamification Hook: Increment MTSS log counter
      const stats = AppState.teacherStats[AppState.activeTeacher] || { vsoCount: 0, mtssCount: 0 };
      const oldMtssCount = stats.mtssCount;
      stats.mtssCount += 1;
      AppState.teacherStats[AppState.activeTeacher] = stats;
      evaluateBadgeUnlocks(AppState.activeTeacher, stats.vsoCount, stats.vsoCount, oldMtssCount, stats.mtssCount);

      // Clear forms
      document.getElementById('mtssNotes').value = '';
      document.getElementById('flagMidterm').checked = false;
      document.getElementById('flagMissing').checked = false;
      document.getElementById('flagAssessment').checked = false;
      document.getElementById('flagDisengaged').checked = false;

      hydrateMTSSTabs();
      renderCCTimeline();
      recalculateDistrictStats();
      updateTeacherBadges();
      showToast("Intervention Active!", `Assigned ${studentName} to ${intervention}.`);
      playSynthSuccess();
    }

    // Submit check and connect progress log
    function submitCCLog() {
      const studentName = document.getElementById('ccStudent').value;
      const met = document.getElementById('ccMet').value;
      const progress = document.getElementById('ccProgress').value;
      const notes = document.getElementById('ccNotes').value;

      // Check focus areas
      const focus = [];
      if (document.getElementById('focusAcademic').checked) focus.push("Academic");
      if (document.getElementById('focusBehavioral').checked) focus.push("Behavior");
      if (document.getElementById('focusAttendance').checked) focus.push("Social");

      AppState.mockCheckAndConnect.unshift({
        student: studentName,
        date: new Date().toISOString().split('T')[0],
        met: met,
        goals: focus.length === 0 ? "General Mentoring Support" : focus.join(' & '),
        progress: progress,
        notes: notes
      });

      // Gamification Hook: Increment MTSS log counter
      const stats = AppState.teacherStats[AppState.activeTeacher] || { vsoCount: 0, mtssCount: 0 };
      const oldMtssCount = stats.mtssCount;
      stats.mtssCount += 1;
      AppState.teacherStats[AppState.activeTeacher] = stats;
      evaluateBadgeUnlocks(AppState.activeTeacher, stats.vsoCount, stats.vsoCount, oldMtssCount, stats.mtssCount);

      // Clear fields
      document.getElementById('ccNotes').value = '';
      document.getElementById('focusAcademic').checked = false;
      document.getElementById('focusBehavioral').checked = false;
      document.getElementById('focusAttendance').checked = false;

      renderCCTimeline();
      updateTeacherBadges();
      showToast("Check-In Saved!", `Successfully registered daily progress meeting details for ${studentName}.`);
      playSynthSuccess();
    }

    function renderCCTimeline() {
      const container = document.getElementById('ccTimeline');
      container.innerHTML = '';

      if (AppState.mockCheckAndConnect.length === 0) {
        container.innerHTML = `
          <div class="text-center py-12 text-slate-400 text-xs font-semibold">
            No history of mentoring check-ins found.
          </div>
        `;
        return;
      }

      // Draw vertical line guide
      const timelineLine = document.createElement('div');
      timelineLine.className = "absolute left-4.5 top-2 bottom-2 w-0.5 bg-slate-200 pointer-events-none z-0";
      container.appendChild(timelineLine);

      AppState.mockCheckAndConnect.forEach(log => {
        if (!log.student) return; // safety check

        let metPill = "bg-emerald-50 text-emerald-600 border-emerald-100";
        if (log.met === 'No') metPill = "bg-rose-50 text-rose-500 border-rose-100";
        else if (log.met === 'Refused') metPill = "bg-amber-50 text-amber-500 border-amber-100";

        let progressPill = "bg-slate-50 text-slate-500 border-slate-200";
        if (log.progress === 'Significant Progress') progressPill = "bg-green-50 text-green-700 border-green-200";
        else if (log.progress === 'Steady Progress') progressPill = "bg-sky-50 text-sky-700 border-sky-200";
        else if (log.progress === 'Regression') progressPill = "bg-rose-50 text-rose-700 border-rose-200";

        const item = document.createElement('div');
        item.className = "relative pl-10 z-10 font-bold text-xs";
        item.innerHTML = `
          <!-- Dot indicator -->
          <div class="absolute left-2.5 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-copley-blue shadow-sm"></div>
          
          <div class="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl space-y-2 hover:bg-slate-100/30 transition">
            <div class="flex justify-between items-center flex-wrap gap-2">
              <div class="flex items-center space-x-2">
                <span class="text-sm font-black text-copley-blue heading-style">${log.student}</span>
                <span class="text-[9px] font-black uppercase px-2 py-0.5 rounded border ${metPill}">Met: ${log.met}</span>
              </div>
              <span class="text-[9px] text-slate-400 font-bold">${log.date}</span>
            </div>
            
            <div class="flex flex-wrap gap-1.5 font-bold">
              <span class="text-[8px] font-black bg-copley-blue/5 text-copley-blue px-2 py-0.5 rounded border border-copley-blue/10">Focus: ${log.goals}</span>
              <span class="text-[8px] font-black px-2 py-0.5 rounded border ${progressPill}">${log.progress}</span>
            </div>
            
            <p class="text-xs text-slate-500 font-medium leading-relaxed mt-1">
              "${log.notes}"
            </p>
            <div class="text-[9px] text-slate-400 mt-2">
              Log verified by Coordinator: <span class="text-copley-blue font-black">${AppState.activeTeacher}</span>
            </div>
          </div>
        `;
        container.appendChild(item);
      });
    }

    /* 
      ========================================================================
      MTSS TIER 1 WORKFLOWS & SB8 LOGIC
      ========================================================================
    */

    // 1. Core Brain: Auto-Trigger Scans
    function autoFlagStrugglingStudents() {
      AppState.students.forEach(std => {
        // Path A: Automatic Failure Trigger
        let hasActiveFailure = false;
        let failingCourse = "";
        if (std.grades) {
          for (let course in std.grades) {
            if (std.grades[course] === 'F') {
              hasActiveFailure = true;
              failingCourse = course;
              break;
            }
          }
        }

        // Path C: Reverse Request Automation (Consecutive Quarter Fs continuing to struggle in Q3)
        let isConsecutiveQuarterFailing = false;
        let reverseCourse = "";
        if (std.q1Grades && std.q2Grades && std.q3Grades) {
          for (let c in std.grades) {
            if (std.q1Grades[c] === 'F' && std.q2Grades[c] === 'F' && (std.q3Grades[c] === 'F' || std.q3Grades[c] === 'D')) {
              isConsecutiveQuarterFailing = true;
              reverseCourse = c;
              break;
            }
          }
        }

        // Auto trigger Tier 1 workflow card if either path matches and not already initialized
        if ((hasActiveFailure || isConsecutiveQuarterFailing) && !std.tier1Active) {
          std.tier1Active = true;
          std.tier1Data = {
            course: failingCourse || reverseCourse,
            period: "Period 5",
            teacher: AppState.activeTeacher,
            trigger: isConsecutiveQuarterFailing ? "Reverse Request Automation" : "Automatic Failure Trigger",
            parentContacts: [],
            interventions: [],
            interactions: [],
            startDate: new Date().toISOString().split('T')[0],
            durationWeeks: 4,
            status: "Active",
            escalationPipeline: null
          };
        }
      });
    }

    // Toggle Manual SB8 Flag Form
    function toggleManualFlagForm() {
      const panel = document.getElementById('manualFlagPanel');
      panel.classList.toggle('hidden');
      playSynthClick();
      populateSB8StudentsList();
    }

    // Populates standard manual flagging list dropdown
    function populateSB8StudentsList() {
      const select = document.getElementById('sb8Student');
      select.innerHTML = '';

      const unflagged = AppState.students.filter(s => !s.tier1Active);
      unflagged.forEach(std => {
        const opt = document.createElement('option');
        opt.value = std.name;
        opt.innerText = `${std.name} (${std.tier})`;
        select.appendChild(opt);
      });
    }

    // Path B: Submit Manual district policy SB8 flag
    function triggerSB8ManualFlag() {
      const studentName = document.getElementById('sb8Student').value;
      const course = document.getElementById('sb8Course').value;
      const period = document.getElementById('sb8Period').value;
      const notes = document.getElementById('sb8Notes').value;

      const std = AppState.students.find(s => s.name === studentName);
      if (std) {
        std.tier1Active = true;
        std.tier1Data = {
          course: course,
          period: period,
          teacher: AppState.activeTeacher,
          trigger: "District Policy SB8 Memo Criteria",
          parentContacts: [],
          interventions: [],
          interactions: [],
          startDate: new Date().toISOString().split('T')[0],
          durationWeeks: 4,
          status: "Active",
          escalationPipeline: null,
          sb8ReasonNotes: notes
        };

        // Clear forms
        document.getElementById('sb8Course').value = '';
        document.getElementById('sb8Period').value = '';
        document.getElementById('sb8Notes').value = '';
        document.getElementById('sb8TierOverlap').checked = false;
        document.getElementById('sb8GradeShift').checked = false;
        document.getElementById('sb8AcademicSupport').checked = false;

        toggleManualFlagForm();
        renderTier1Cards();
        recalculateDistrictStats();
        showToast("Tier 1 Active", `Successfully initiated Tier 1 monitoring card for ${studentName}.`);
        playSynthSuccess();
      }
    }

    // Render active Tier 1 tracking cards
    function renderTier1Cards() {
      const container = document.getElementById('tier1CardsContainer');
      container.innerHTML = '';

      const activeList = AppState.students.filter(s => s.tier1Active);

      if (activeList.length === 0) {
        container.innerHTML = `
          <div class="col-span-2 text-center py-12 text-slate-400 text-xs font-semibold">
            <i class="fa-solid fa-graduation-cap text-3xl block opacity-30 text-copley-blue mb-2"></i>
            No active Tier 1 intervention monitoring cards currently generated.
          </div>
        `;
        return;
      }

      activeList.forEach(std => {
        const data = std.tier1Data;
        const parentContactsCount = data.parentContacts.length;
        const isLocked = parentContactsCount === 0;

        // Trigger Type Badge style
        let triggerBadge = "bg-amber-50 text-amber-600 border-amber-100";
        if (data.trigger === 'Automatic Failure Trigger') triggerBadge = "bg-rose-50 text-rose-500 border-rose-100";
        else if (data.trigger === 'Reverse Request Automation') triggerBadge = "bg-indigo-50 text-indigo-600 border-indigo-100 font-bold";

        // Multi-Tier Overlap check
        let overlapBanner = '';
        if (std.tier === 'Tier 2' || std.tier === 'Tier 3') {
          overlapBanner = `
            <div class="bg-rose-50 border border-rose-200 text-rose-800 text-[10px] p-3 rounded-xl flex items-start gap-2 leading-relaxed">
              <i class="fa-solid fa-triangle-exclamation text-rose-600 mt-0.5 shrink-0 text-sm"></i>
              <p>
                <strong>⚠️ Multi-Tier Overlap Rule:</strong> Student is concurrently receiving <strong>${std.tier} Support</strong> through Academic Assist/Enrichment. Core classroom teachers must continue logging unique instructional-level Tier 1 classroom strategies.
              </p>
            </div>
          `;
        }

        // Parent contacts list HTML
        let contactsHTML = '';
        if (parentContactsCount === 0) {
          contactsHTML = `
            <div class="bg-slate-50 border border-slate-200 border-dashed p-3 rounded-xl text-slate-500 italic text-[10px] text-center font-bold">
              🔒 Parent Contact Required: You must log at least one parent contact before you can record classroom interventions.
            </div>
          `;
        } else {
          contactsHTML = `
            <div class="space-y-1.5 max-h-[100px] overflow-y-auto custom-scrollbar pr-1 divide-y divide-slate-100">
              ${data.parentContacts.map(c => `
                <div class="pt-1.5 first:pt-0">
                  <div class="flex justify-between items-center text-[9px]">
                    <span class="text-copley-blue uppercase">${c.method}</span>
                    <span class="text-slate-400">${c.date}</span>
                  </div>
                  <p class="text-[10px] text-slate-500 italic">"${c.notes}"</p>
                </div>
              `).join('')}
            </div>
          `;
        }

        // Interventions array checked conditions
        const isLabChecked = data.interventions.includes("Invite student to Learning Lab") ? "checked" : "";
        const isClassChecked = data.interventions.includes("Structured intervention during regular instructional class time") ? "checked" : "";
        const isFlexChecked = data.interventions.includes("Support session during non-instructional periods (Flex, Lunch, or another agreed-upon time)") ? "checked" : "";

        // Interaction sessions list HTML
        let sessionsHTML = '';
        if (data.interactions.length === 0) {
          sessionsHTML = `<div class="text-slate-400 italic text-[9px] text-center py-2">No interaction support sessions logged yet.</div>`;
        } else {
          sessionsHTML = `
            <div class="space-y-2 max-h-[150px] overflow-y-auto custom-scrollbar pr-1 divide-y divide-slate-100 mt-2">
              ${data.interactions.map(i => `
                <div class="pt-2 first:pt-0">
                  <div class="flex justify-between items-center text-[9px]">
                    <span class="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-100">${i.tags.join(', ')}</span>
                    <span class="text-slate-400">${i.date}</span>
                  </div>
                  <p class="text-[10px] text-slate-500 italic mt-1 leading-normal">"${i.notes}"</p>
                </div>
              `).join('')}
            </div>
          `;
        }

        // Step 3 progress evaluation & escalation status
        let step3HTML = '';
        if (data.status === 'Active') {
          step3HTML = `
            <div class="space-y-3 pt-3 border-t border-slate-100">
              <label class="block text-[10px] text-slate-400 uppercase tracking-widest">Progress Evaluation Status Assessment</label>
              <div class="flex items-center gap-3">
                <select id="eval-${std.name}" class="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-slate-800 focus:outline-none focus:border-copley-blue flex-grow font-semibold text-xs" ${isLocked ? 'disabled' : ''}>
                  <option value="Active">Protocol cycle in progress (Active)</option>
                  <option value="Archived - Tier 1 Successful">Passing / Stabilized (Archive Successful)</option>
                  <option value="Unresponsive">Unresponsive to classroom Tier 1 (Escalate)</option>
                </select>
                <button onclick="applyProgressEvaluation('${std.name}')" class="bg-copley-blue text-copley-gold hover:opacity-90 font-bold px-3 py-2.5 rounded-xl text-xs" ${isLocked ? 'disabled' : ''}>Apply</button>
              </div>
            </div>
          `;
        } else if (data.status === 'Archived - Tier 1 Successful') {
          step3HTML = `
            <div class="bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] p-3 rounded-xl flex items-center justify-center gap-2">
              <i class="fa-solid fa-circle-check text-emerald-600 text-base"></i>
              <span class="font-bold">Intervention Successful! Workflow Protocol is [Archived - Tier 1 Successful]</span>
            </div>
          `;
        } else if (data.status === 'Escalated') {
          // Sync pipeline details
          let step1Active = "text-copley-blue";
          let step2Active = "text-slate-400";
          let step3Active = "text-slate-400";
          let pipelineProgress = "w-0";

          if (data.escalationPipeline === 'Feedback/Suggestions Collection') {
            step2Active = "text-copley-blue font-bold";
            pipelineProgress = "w-1/2";
          } else if (data.escalationPipeline === 'Tier 2/3 Support Evaluation') {
            step2Active = "text-copley-blue font-bold";
            step3Active = "text-copley-blue font-bold";
            pipelineProgress = "w-full";
          }

          step3HTML = `
            <div class="bg-rose-50 border border-rose-200 p-4 rounded-xl space-y-4">
              <div class="flex justify-between items-center border-b border-rose-100 pb-2">
                <span class="font-black text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                  <i class="fa-solid fa-triangle-exclamation animate-pulse text-rose-600"></i>
                  <span>Escalated MTSS Review Pipeline</span>
                </span>
                <button onclick="simulateReviewStage('${std.name}')" class="bg-rose-600 hover:bg-rose-700 text-white text-[9px] font-black uppercase px-2 py-1 rounded shadow-sm transition">Progress Review Stage</button>
              </div>
              
              <!-- Pipeline progress bar visualization -->
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between text-[8px] font-bold uppercase tracking-wider text-slate-500">
                  <div class="${step1Active}">Under Team Review</div>
                  <div class="${step2Active}">Suggestions Collection</div>
                  <div class="${step3Active}">Tier 2/3 Evaluation</div>
                </div>
                <div class="overflow-hidden h-1.5 text-xs flex rounded bg-slate-200">
                  <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-rose-600 transition-all duration-300 ${pipelineProgress}"></div>
                </div>
              </div>
            </div>
          `;
        }

        const card = document.createElement('div');
        card.className = "bg-white border border-slate-200/80 p-5 rounded-2xl shadow-glass flex flex-col justify-between space-y-4 border-t-4 border-copley-blue relative";
        card.innerHTML = `
          <!-- Contextual Meta-Data -->
          <div>
            <div class="flex justify-between items-start gap-4 mb-2">
              <div class="truncate">
                <h4 class="text-sm font-black text-copley-blue truncate heading-style leading-none">${std.name}</h4>
                <span class="text-[9px] font-semibold text-slate-400 block mt-1">${std.grades ? 'Class Grade: ' + Object.keys(std.grades).map(k => `${k} (${std.grades[k]})`).join(', ') : ''} • Period/Mod: ${data.period}</span>
              </div>
              <span class="text-[8px] font-black px-2 py-1 rounded-md border uppercase tracking-wider whitespace-nowrap ${triggerBadge}">${data.trigger}</span>
            </div>
            
            ${overlapBanner}
          </div>

          <!-- STEP 1: Parent Contact Gatekeeper -->
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3 font-bold">
            <h5 class="text-[10px] text-copley-blue uppercase tracking-widest border-b border-slate-200 pb-1 flex justify-between items-center">
              <span>Step 1: Log Parent Contacts (${parentContactsCount})</span>
              <span class="text-[8px] font-black text-slate-400">Gatekeeper Indicator</span>
            </h5>
            
            ${contactsHTML}

            <!-- Log contact Form -->
            <div class="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-200/50">
              <input type="date" id="cdate-${std.name}" class="bg-white border border-slate-200 p-2 rounded-lg text-[10px] focus:outline-none" value="${new Date().toISOString().split('T')[0]}">
              <select id="cmethod-${std.name}" class="bg-white border border-slate-200 p-2 rounded-lg text-[10px] focus:outline-none">
                <option value="Phone">Phone Call</option>
                <option value="Email">Email Thread</option>
                <option value="In-Person">In-Person Meeting</option>
              </select>
              <textarea id="cnotes-${std.name}" required class="col-span-2 bg-white border border-slate-200 p-2 rounded-lg text-[10px] focus:outline-none font-medium" placeholder="Provide notes of parent contact session..."></textarea>
              <button onclick="saveParentContact('${std.name}')" class="col-span-2 bg-copley-blue text-copley-gold hover:opacity-95 text-[10px] font-bold py-2 rounded-lg border border-transparent shadow transition">Save Parent Contact</button>
            </div>
          </div>

          <!-- STEP 2: Classroom Interventions (Unlocked if parent contacts > 0) -->
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3 font-bold ${isLocked ? 'opacity-40 select-none' : ''}">
            <h5 class="text-[10px] text-copley-blue uppercase tracking-widest border-b border-slate-200 pb-1 flex justify-between items-center">
              <span>Step 2: Interventions & Support logs</span>
              <span class="text-[8px] font-black text-slate-400">Classroom Tracking</span>
            </h5>

            <!-- Interventions Array multi-select checkboxes -->
            <div class="space-y-1.5 text-[9px] text-slate-600 font-semibold leading-tight">
              <label class="flex items-center space-x-2">
                <input type="checkbox" onchange="saveTier1Interventions('${std.name}')" id="lab-${std.name}" ${isLabChecked} ${isLocked ? 'disabled' : ''} class="rounded text-copley-blue focus:ring-0">
                <span>Invite student to Learning Lab support</span>
              </label>
              <label class="flex items-center space-x-2">
                <input type="checkbox" onchange="saveTier1Interventions('${std.name}')" id="class-${std.name}" ${isClassChecked} ${isLocked ? 'disabled' : ''} class="rounded text-copley-blue focus:ring-0">
                <span>Structured intervention during instructional class time</span>
              </label>
              <label class="flex items-center space-x-2">
                <input type="checkbox" onchange="saveTier1Interventions('${std.name}')" id="flex-${std.name}" ${isFlexChecked} ${isLocked ? 'disabled' : ''} class="rounded text-copley-blue focus:ring-0">
                <span>Support session during Flex, Lunch, or agreed time</span>
              </label>
            </div>

            <!-- Interaction/Activity Incrementer log history -->
            <div class="border-t border-slate-200/50 pt-2 space-y-2 mt-2">
              <div class="grid grid-cols-2 gap-2">
                <input type="date" id="idate-${std.name}" class="bg-white border border-slate-200 p-2 rounded-lg text-[9px] focus:outline-none" value="${new Date().toISOString().split('T')[0]}" ${isLocked ? 'disabled' : ''}>
                <select id="itag-${std.name}" class="bg-white border border-slate-200 p-2 rounded-lg text-[9px] focus:outline-none" ${isLocked ? 'disabled' : ''}>
                  <option value="Simple Check-In">Simple Check-In</option>
                  <option value="Missing Work Action Plan">Missing Work Action Plan</option>
                  <option value="Core Concept Review/Re-teaching">Core Concept Review/Re-teaching</option>
                </select>
                <textarea id="inotes-${std.name}" required class="col-span-2 bg-white border border-slate-200 p-2 rounded-lg text-[9px] focus:outline-none font-medium" placeholder="Activity observation/feedback..." ${isLocked ? 'disabled' : ''}></textarea>
                <button onclick="addSupportSession('${std.name}')" class="col-span-2 bg-emerald-600 text-white hover:bg-emerald-700 text-[10px] font-bold py-2 rounded-lg shadow-sm transition" ${isLocked ? 'disabled' : ''}>Record Support Session</button>
              </div>
              
              <!-- Session history log list -->
              ${sessionsHTML}
            </div>
          </div>

          <!-- STEP 3: Progress Evaluation and Actions -->
          ${step3HTML}
        `;
        container.appendChild(card);
      });
    }

    // Dynamic checkboxes state updates
    function saveTier1Interventions(studentName) {
      const std = AppState.students.find(s => s.name === studentName);
      if (std && std.tier1Data) {
        const interventions = [];
        if (document.getElementById(`lab-${studentName}`).checked) interventions.push("Invite student to Learning Lab");
        if (document.getElementById(`class-${studentName}`).checked) interventions.push("Structured intervention during regular instructional class time");
        if (document.getElementById(`flex-${studentName}`).checked) interventions.push("Support session during non-instructional periods (Flex, Lunch, or another agreed-upon time)");
        
        std.tier1Data.interventions = interventions;
        showToast("Interventions Updated", `Successfully logged active classroom strategy array for ${studentName}.`);
        playSynthClick();
      }
    }

    // Save Parent Contact Log (Gatekeeper check unlocks Step 2)
    function saveParentContact(studentName) {
      const std = AppState.students.find(s => s.name === studentName);
      if (std && std.tier1Data) {
        const date = document.getElementById(`cdate-${studentName}`).value;
        const method = document.getElementById(`cmethod-${studentName}`).value;
        const notes = document.getElementById(`cnotes-${studentName}`).value;

        if (!notes.trim()) {
          showToast("Notes Required", "Please provide notes details of parent contact.");
          return;
        }

        std.tier1Data.parentContacts.unshift({
          date: date,
          method: method,
          notes: notes
        });

        renderTier1Cards();
        showToast("Parent Contact Logged", `Gatekeeper passed! Support recording is now unlocked for ${studentName}.`);
        playSynthSuccess();
      }
    }

    // Interaction/Activity incrementer
    function addSupportSession(studentName) {
      const std = AppState.students.find(s => s.name === studentName);
      if (std && std.tier1Data) {
        const date = document.getElementById(`idate-${studentName}`).value;
        const tag = document.getElementById(`itag-${studentName}`).value;
        const notes = document.getElementById(`inotes-${studentName}`).value;

        if (!notes.trim()) {
          showToast("Notes Required", "Please provide support observation feedback.");
          return;
        }

        std.tier1Data.interactions.unshift({
          date: date,
          tags: [tag],
          notes: notes
        });

        renderTier1Cards();
        showToast("Support Session Saved", `Logged ${tag} session for ${studentName}.`);
        playSynthSuccess();
      }
    }

    // Apply evaluation assessment changes
    function applyProgressEvaluation(studentName) {
      const std = AppState.students.find(s => s.name === studentName);
      if (std && std.tier1Data) {
        const statusVal = document.getElementById(`eval-${studentName}`).value;
        
        if (statusVal === 'Archived - Tier 1 Successful') {
          std.tier1Data.status = 'Archived - Tier 1 Successful';
          showToast("Protocol Successful!", `${studentName} marked as stabilized. Cards archived.`);
          renderTier1Cards();
          playSynthSuccess();
        } else if (statusVal === 'Unresponsive') {
          // Open referral escalation modal
          openMTSSReferralModal(studentName);
        } else {
          showToast("Status Active", "Evaluation saved. Continue tracking classroom logs.");
        }
      }
    }

    // Open standardized Referral Escalation Simulator modal
    let activeReferralStudent = "";
    function openMTSSReferralModal(studentName) {
      const std = AppState.students.find(s => s.name === studentName);
      if (!std || !std.tier1Data) return;

      activeReferralStudent = studentName;
      document.getElementById('refStudentName').innerText = std.name;
      document.getElementById('refStudentGrade').innerText = std.praiseCount > 10 ? "11th Grade" : "10th Grade";
      document.getElementById('refTeacher').innerText = std.tier1Data.teacher;
      document.getElementById('refCoursePeriod').innerText = `${std.tier1Data.course} (${std.tier1Data.period})`;

      // Parent logs assembly
      const pContainer = document.getElementById('refParentLogsContainer');
      pContainer.innerHTML = '';
      std.tier1Data.parentContacts.forEach(c => {
        const div = document.createElement('div');
        div.className = "py-2";
        div.innerHTML = `<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-black text-[9px] uppercase border mr-2">${c.method}</span><span class="text-slate-400 font-bold mr-2">${c.date}</span><p class="text-slate-500 italic inline">"${c.notes}"</p>`;
        pContainer.appendChild(div);
      });

      // Deployed Interventions
      const iContainer = document.getElementById('refInterventionsContainer');
      iContainer.innerHTML = '';
      if (std.tier1Data.interventions.length === 0) {
        iContainer.innerHTML = `<span class="text-slate-400 italic text-[10px]">No active structured interventions tracked.</span>`;
      } else {
        std.tier1Data.interventions.forEach(i => {
          const span = document.createElement('span');
          span.className = "bg-rose-50 text-rose-600 border border-rose-100 px-2.5 py-1 rounded-full font-black text-[9px] uppercase";
          span.innerText = i;
          iContainer.appendChild(span);
        });
      }

      // Sessions list assembly
      const sContainer = document.getElementById('refSessionsContainer');
      sContainer.innerHTML = '';
      if (std.tier1Data.interactions.length === 0) {
        sContainer.innerHTML = `<span class="text-slate-400 italic text-[10px]">No academic sessions logged.</span>`;
      } else {
        std.tier1Data.interactions.forEach(s => {
          const div = document.createElement('div');
          div.className = "py-2";
          div.innerHTML = `<span class="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-black text-[9px] border mr-2">${s.tags.join(', ')}</span><span class="text-slate-400 font-bold mr-2">${s.date}</span><p class="text-slate-500 italic inline">"${s.notes}"</p>`;
          sContainer.appendChild(div);
        });
      }

      // Bind Route Referral payload submit button
      const routeBtn = document.getElementById('btnRouteReferral');
      routeBtn.onclick = function() {
        routeMTSSReferral(studentName);
      };

      const modal = document.getElementById('referralModal');
      modal.classList.remove('hidden');
      // Force repaint to allow transition to register
      modal.offsetHeight;
      modal.classList.add('opacity-100');
      modal.classList.remove('opacity-0');
      const innerDiv = modal.querySelector('div');
      innerDiv.classList.add('scale-100');
      innerDiv.classList.remove('scale-95');

      playSynthClick();
    }

    function closeReferralModal() {
      const modal = document.getElementById('referralModal');
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0');
      const innerDiv = modal.querySelector('div');
      innerDiv.classList.remove('scale-100');
      innerDiv.classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
      playSynthClick();
    }

    // Automated Routing & Pipeline initialization
    function routeMTSSReferral(studentName) {
      const std = AppState.students.find(s => s.name === studentName);
      if (std && std.tier1Data) {
        std.tier1Data.status = 'Escalated';
        std.tier1Data.escalationPipeline = 'Under Team Review';

        closeReferralModal();
        renderTier1Cards();
        showToast("Payload Routed Successfully!", `Standardized MTSS payload received by Denise Polak (Room 166) & the team.`);
        playSynthFanfare();
      }
    }

    // Simulated review pipeline progression stepper
    function simulateReviewStage(studentName) {
      const std = AppState.students.find(s => s.name === studentName);
      if (std && std.tier1Data) {
        const cur = std.tier1Data.escalationPipeline;
        
        if (cur === 'Under Team Review') {
          std.tier1Data.escalationPipeline = 'Feedback/Suggestions Collection';
          showToast("Pipeline Synced Stage Upgraded", `${studentName}'s review advanced: [Feedback/Suggestions Collection].`);
          playSynthSuccess();
        } else if (cur === 'Feedback/Suggestions Collection') {
          std.tier1Data.escalationPipeline = 'Tier 2/3 Support Evaluation';
          showToast("Pipeline Synced Stage Upgraded", `${studentName}'s review advanced: [Tier 2/3 Support Evaluation].`);
          playSynthSuccess();
        } else if (cur === 'Tier 2/3 Support Evaluation') {
          // Resolve review: elevate student actual tier to Tier 2 and archive card!
          std.tier = 'Tier 2';
          std.tier1Active = false;
          std.tier1Data = null;

          hydrateMTSSTabs();
          renderTier1Cards();
          recalculateDistrictStats();
          
          showToast("MTSS Referral Approved!", `Ohio Multidisciplinary Team has approved Tier 2 support plans. Student is officially promoted to Tier 2!`);
          playSynthFanfare();
        }
        
        renderTier1Cards();
      }
    }

    /* 
      ========================================================================
      GAMIFIED ACHIEVEMENTS & ARROWHEAD SYSTEM LOGIC
      ========================================================================
    */

    // Real-time badge locks / unlock gallery evaluations
    function updateTeacherBadges() {
      const teacher = AppState.activeTeacher;
      const stats = AppState.teacherStats[teacher] || { vsoCount: 0, mtssCount: 0 };
      
      const vCount = stats.vsoCount;
      const mCount = stats.mtssCount;
      const impactScore = vCount * 1 + mCount * 1; // 1 point per VSO sent, 1 point per MTSS action

      document.getElementById('badgeVSOCount').innerText = vCount;
      document.getElementById('badgeImpactScore').innerText = impactScore;

      // Update achievements title to show the staff person's name dynamically
      const titleSpan = document.getElementById('achievementsTitleSpan');
      if (titleSpan) {
        const possessiveName = teacher.endsWith('s') ? `${teacher}'` : `${teacher}'s`;
        titleSpan.innerText = `${possessiveName} Achievements`;
      }

      // Unlocks tracking evaluations
      const unlocks = {
        bronze: impactScore >= 1,
        silver: impactScore >= 3,
        gold: impactScore >= 5,
        obsidian: impactScore >= 10,
        ruby: impactScore >= 20,
        diamond: impactScore >= 30,
        sapphire: impactScore >= 40,
        prismatic: impactScore >= 50,
        mtss: mCount >= 3
      };

      // Set Lock Overlays in visual gallery
      for (let id in unlocks) {
        const el = document.getElementById(`gallery-badge-${id}`);
        if (el) {
          const overlay = el.querySelector('.badge-lock-overlay');
          const img = el.querySelector('.badge-img-element');
          
          if (unlocks[id]) {
            overlay.classList.add('hidden');
            img.classList.remove('grayscale', 'opacity-30');
            el.classList.add('unlocked');
          } else {
            overlay.classList.remove('hidden');
            img.classList.add('grayscale', 'opacity-30');
            el.classList.remove('unlocked');
          }
        }
      }

      // Update the dynamic milestone tooltip levels to match this teacher's stats!
      const itemLevels = document.querySelectorAll('.badge-item-level');
      itemLevels.forEach(el => {
        el.innerText = impactScore;
      });

      // Determine active spotlight badge
      let activeBadge = null;
      if (unlocks.prismatic) activeBadge = BadgeDefs.prismatic;
      else if (unlocks.sapphire) activeBadge = BadgeDefs.sapphire;
      else if (unlocks.diamond) activeBadge = BadgeDefs.diamond;
      else if (unlocks.ruby) activeBadge = BadgeDefs.ruby;
      else if (unlocks.obsidian) activeBadge = BadgeDefs.obsidian;
      else if (unlocks.gold) activeBadge = BadgeDefs.gold;
      else if (unlocks.silver) activeBadge = BadgeDefs.silver;
      else if (unlocks.bronze) activeBadge = BadgeDefs.bronze;
      else if (unlocks.mtss) activeBadge = BadgeDefs.mtss; // backup secondary support

      const spotlightImg = document.getElementById('spotlightBadgeImg');
      const spotlightTitle = document.getElementById('spotlightBadgeTitle');
      const spotlightTagline = document.getElementById('spotlightBadgeTagline');
      const spotlightContainer = document.getElementById('latestBadgeSpotlight');

      if (activeBadge) {
        spotlightImg.src = activeBadge.img;
        spotlightImg.classList.remove('grayscale', 'opacity-40');
        spotlightTitle.innerText = activeBadge.name;
        spotlightTagline.innerText = `"${activeBadge.tagline}"`;
        spotlightContainer.classList.add('border-copley-gold');
        spotlightContainer.classList.remove('border-slate-300');
      } else {
        // Zero unlocked placeholder state
        spotlightImg.src = BadgeDefs.bronze.img;
        spotlightImg.classList.add('grayscale', 'opacity-40');
        spotlightTitle.innerText = "No Arrowheads Unlocked";
        spotlightTagline.innerText = `"Welcome to Copley High! Earn your first PBIS point by sending a student Virtual Shout-Out or logging an MTSS check-in."`;
        spotlightContainer.classList.remove('border-copley-gold');
        spotlightContainer.classList.add('border-slate-300');
      }

      // Next Milestone Hint & Progress Bar logic based on combined Impact Score
      let nextBadge = null;
      let nextThreshold = 0;
      if (impactScore < 1) { nextBadge = BadgeDefs.bronze; nextThreshold = 1; }
      else if (impactScore < 3) { nextBadge = BadgeDefs.silver; nextThreshold = 3; }
      else if (impactScore < 5) { nextBadge = BadgeDefs.gold; nextThreshold = 5; }
      else if (impactScore < 10) { nextBadge = BadgeDefs.obsidian; nextThreshold = 10; }
      else if (impactScore < 20) { nextBadge = BadgeDefs.ruby; nextThreshold = 20; }
      else if (impactScore < 30) { nextBadge = BadgeDefs.diamond; nextThreshold = 30; }
      else if (impactScore < 40) { nextBadge = BadgeDefs.sapphire; nextThreshold = 40; }
      else if (impactScore < 50) { nextBadge = BadgeDefs.prismatic; nextThreshold = 50; }

      const nextEl = document.getElementById('nextBadgeHintContainer');
      if (nextEl) {
        if (nextBadge) {
          const diff = nextThreshold - impactScore;
          nextEl.innerHTML = `
            <div class="flex items-center justify-between gap-3 flex-wrap text-[10px] font-bold">
              <span class="text-slate-500">🎯 Next Milestone:</span>
              <span class="text-copley-blue font-black flex items-center gap-1">
                <img src="${nextBadge.img}" class="w-4 h-4 object-contain inline grayscale opacity-70">
                <span>${nextBadge.name}</span>
              </span>
              <span class="bg-copley-blue/5 text-copley-blue font-black px-2 py-0.5 rounded border border-copley-blue/15 text-[9px]">
                ${diff} more ${diff === 1 ? 'point' : 'points'} required
              </span>
            </div>
            <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2 relative">
              <div class="bg-copley-gold h-full transition-all duration-300" style="width: ${Math.min(100, Math.round((impactScore / nextThreshold) * 100))}%"></div>
            </div>
          `;
        } else {
          nextEl.innerHTML = `
            <div class="text-emerald-600 font-black text-center flex items-center justify-center gap-1 text-[10px]">
              <i class="fa-solid fa-circle-check text-xs animate-bounce"></i>
              <span>All Milestones Unlocked! Maximum PBIS Level Achieved!</span>
            </div>
          `;
        }
      }
    }

    // Milestone unlocking evaluate triggers
    function evaluateBadgeUnlocks(teacher, oldVso, newVso, oldMtss, newMtss) {
      const oldScore = oldVso * 1 + oldMtss * 1;
      const newScore = newVso * 1 + newMtss * 1;

      const milestones = [
        { count: 1, id: 'bronze', label: "Bronze Arrowhead" },
        { count: 3, id: 'silver', label: "Silver Arrowhead" },
        { count: 5, id: 'gold', label: "Gold Arrowhead" },
        { count: 10, id: 'obsidian', label: "Obsidian Arrowhead" },
        { count: 20, id: 'ruby', label: "Ruby Arrowhead" },
        { count: 30, id: 'diamond', label: "Diamond Arrowhead" },
        { count: 40, id: 'sapphire', label: "Sapphire Arrowhead" },
        { count: 50, id: 'prismatic', label: "Ultimate Prismatic Arrowhead" }
      ];

      milestones.forEach(m => {
        if (oldScore < m.count && newScore >= m.count) {
          triggerMilestoneUnlockedAlert(m.label, BadgeDefs[m.id].img, BadgeDefs[m.id].tagline);
        }
      });

      // Check subsequent increments of 10 beyond 50
      if (newScore > 50 && Math.floor(newScore / 10) > Math.floor(oldScore / 10)) {
        const level = Math.floor(newScore / 10) * 10;
        triggerMilestoneUnlockedAlert(`Prismatic Arrowhead (Level ${level})`, BadgeDefs.prismatic.img, `Incredible! You have crossed the outstanding milestone of ${level} combined PBIS points!`);
      }

      // Check MTSS Milestone: 3
      if (oldMtss < 3 && newMtss >= 3) {
        triggerMilestoneUnlockedAlert("MTSS Crystal Arrowhead", BadgeDefs.mtss.img, BadgeDefs.mtss.tagline);
      }
    }

    function triggerMilestoneUnlockedAlert(title, img, tagline) {
      setTimeout(() => {
        playSynthFanfare();
        showToast("🏆 ACHIEVEMENT UNLOCKED!", `Congratulations! You have earned the ${title}!`);
      }, 1500);
    }

    function handleStaffProfileChange(val) {
      AppState.activeTeacher = val;
      document.getElementById('sessionStaffName').innerText = val;
      document.getElementById('staffSelector').value = val;
      
      // Dynamic stats shift for demonstration
      const stats = AppState.teacherStats[val] || { vsoCount: 0, mtssCount: 0 };
      document.getElementById('dashMonthlyVSOs').innerText = Math.round(stats.vsoCount * 0.15 + 1); // Mock monthly as stable subset of YTD VSOs
      document.getElementById('dashYearlyVSOs').innerText = stats.vsoCount;
      
      showToast("Session Switched", `Now operating as CHS Coordinator ${val}.`);
      updateTeacherBadges(); // Recalculate and display the new staff's badges!
      recalculateDistrictStats(); // Force dynamic recalculation of caseload indicators and global metrics
      updateSidebarMTSSAlerts(); // Force update of MTSS Action Center alerts in left sidebar
      renderVirtualSlips(); // Force reload of received student VSO slips!
    }

    function getTeacherMTSSCaseloadCount(teacher) {
      const allData = JSON.parse(localStorage.getItem('AppState_mtssCaseload') || '[]');
      const tier1Count = allData.filter(s => s.teacher === teacher && !s.completed).length;
      
      const ccData = JSON.parse(localStorage.getItem('AppState_ccCaseload') || '[]');
      const ccCount = ccData.filter(s => s.teacher === teacher && !s.completed).length;
      
      return tier1Count + ccCount;
    }

    function updateSidebarMTSSAlerts() {
      const teacher = AppState.activeTeacher;
      const container = document.getElementById('sidebarMTSSAlerts');
      if (!container) return;
      
      container.innerHTML = '';
      
      const allData = JSON.parse(localStorage.getItem('AppState_mtssCaseload') || '[]');
      const activeCaseload = allData.filter(s => s.teacher === teacher && !s.completed);
      
      const ccData = JSON.parse(localStorage.getItem('AppState_ccCaseload') || '[]');
      const activeCC = ccData.filter(s => s.teacher === teacher && !s.completed);
      
      let alerts = [];
      
      activeCaseload.forEach(s => {
        alerts.push({
          student: s.student,
          type: "warning",
          icon: "fa-clock",
          title: "Tier 1 Active",
          desc: `Tier 1 custom sheet update due for ${s.class} (${s.mod}).`
        });
      });

      activeCC.forEach(s => {
        alerts.push({
          student: s.student,
          type: "danger",
          icon: "fa-circle-exclamation",
          title: "C&C Active",
          desc: `C&C mentor meeting check-in due this week.`
        });
      });
      
      if (alerts.length === 0) {
        alerts = [
          { 
            student: "All Clear", 
            type: "success", 
            icon: "fa-circle-check",
            title: "No Actions", 
            desc: "You have no active Tier 1 or C&C cases assigned this quarter." 
          }
        ];
      }
      
      alerts.forEach(a => {
        let borderClass = "border-rose-100 bg-rose-50 text-rose-800";
        let iconColor = "text-rose-500";
        if (a.type === 'warning') {
          borderClass = "border-amber-100 bg-amber-50 text-amber-800";
          iconColor = "text-amber-500";
        } else if (a.type === 'info') {
          borderClass = "border-sky-100 bg-sky-50 text-sky-800";
          iconColor = "text-sky-500";
        } else if (a.type === 'success') {
          borderClass = "border-emerald-100 bg-emerald-50 text-emerald-800";
          iconColor = "text-emerald-500";
        }
        
        const card = document.createElement('div');
        card.className = `p-3 rounded-lg border ${borderClass} text-[11px] font-semibold transition-all hover:translate-x-0.5 duration-150`;
        card.innerHTML = `
          <div class="flex items-center justify-between mb-1">
            <span class="font-black heading-style text-slate-800 uppercase tracking-tight">${a.student}</span>
            <span class="text-[9px] font-black uppercase flex items-center gap-1 ${iconColor}">
              <i class="fa-solid ${a.icon}"></i>
              <span>${a.title}</span>
            </span>
          </div>
          <p class="text-slate-500 leading-normal font-medium">${a.desc}</p>
        `;
        container.appendChild(card);
      });
    }

    function recalculateDistrictStats() {
      document.getElementById('statStudentCount').innerText = AppState.students.length;
      document.getElementById('statStaffCount').innerText = AppState.teachers.length;
      
      // Calculate true cumulative YTD VSOs (baseline + new logs)
      const totalVSOs = AppState.globalBaselineYTDVSOs + AppState.mockVSOs.length;
      document.getElementById('statTotalVSOs').innerText = totalVSOs;
      
      // Global school-wide Tier 2/3 supported students
      const supportsCount = AppState.students.filter(s => s.tier !== 'Tier 1').length;
      document.getElementById('statTotalInterventions').innerText = supportsCount;
      
      // Personal active caseload for the current teacher
      const caseloadCount = getTeacherMTSSCaseloadCount(AppState.activeTeacher);
      document.getElementById('dashMTSSActive').innerText = caseloadCount;
    }

    // =========================================================================
    // 🛠️ GENYES TECH SERVICE PORTAL & ADMINISTRATIVE HUB CONTROLLERS
    // =========================================================================

    let currentGenyesTab = 'inbox';

    // Authorization Terminal UI Modal Controls
    function openAuthTerminal() {
      playSynthBasicClick();
      const modal = document.getElementById('authModal');
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('#authModal > div').classList.remove('scale-95');
      }, 10);
    }

    function closeAuthTerminal() {
      playSynthClick();
      const modal = document.getElementById('authModal');
      modal.classList.add('opacity-0');
      modal.querySelector('#authModal > div').classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('authErrorMsg').classList.add('hidden');
        document.getElementById('authEmailInput').value = '';
        document.getElementById('authSelectSim').value = '';
      }, 300);
    }

    function fillAuthEmail(val) {
      if (val) {
        document.getElementById('authEmailInput').value = val;
        document.getElementById('authErrorMsg').classList.add('hidden');
        playSynthClick();
      }
    }

    function submitAuth() {
      const email = document.getElementById('authEmailInput').value.trim().toLowerCase();
      const err = document.getElementById('authErrorMsg');

      if (!email) {
        err.innerText = "Please provide a login email address!";
        err.classList.remove('hidden');
        playSynthError();
        return;
      }

      // Check if email ends with @cfcsindians.org, @copley-fairlawn.org OR is debbi.spangler@copley-fairlawn.org
      const isDomainOk = email.endsWith('@cfcsindians.org') || email.endsWith('@copley-fairlawn.org');
      const isMasterAdmin = email === 'debbi.spangler@copley-fairlawn.org';

      if (!isDomainOk && !isMasterAdmin) {
        err.innerText = "Access Denied: Unrecognized email domain or credentials! Must be @cfcsindians.org";
        err.classList.remove('hidden');
        playSynthError();
        return;
      }

      err.classList.add('hidden');

      // Identify user from pre-seeded leaderboard or create temporary profile
      let user = AppState.genyesLeaderboard.find(u => u.email === email);
      if (!user) {
        // Build a fresh user profile
        const nameParts = email.split('@')[0].split('.');
        const firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1);
        const lastName = nameParts[1] ? (nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1)) : 'Student';
        user = {
          email: email,
          name: `${firstName} ${lastName}`,
          approvedCount: 0,
          streak: 1,
          active: true
        };
        AppState.genyesLeaderboard.push(user);
      }

      // Set AppState session active member
      AppState.activeGenyesMember = user.email;
      AppState.activeGenyesRole = (user.advisor || isMasterAdmin) ? 'Admin' : 'Student';

      // Update workspace profile widget
      document.getElementById('genyesProfileName').innerText = user.name;
      document.getElementById('genyesProfileAvatar').innerText = user.name.charAt(0);
      document.getElementById('genyesProfileCount').innerText = user.approvedCount;
      document.getElementById('genyesProfileStreak').innerHTML = `<i class="fa-solid fa-fire text-amber-500 animate-pulse mr-0.5"></i>${user.streak} Days`;
      
      const roleBadge = document.getElementById('genyesProfileRoleBadge');
      if (AppState.activeGenyesRole === 'Admin') {
        roleBadge.innerText = "Advisor / Coordinator";
        roleBadge.className = "inline-block bg-red-100 text-red-700 font-black text-[7px] uppercase tracking-widest px-1.5 py-0.5 rounded border border-red-200 mt-1";
        document.getElementById('gnav-fulfillment').classList.remove('hidden');
        document.getElementById('gnav-fulfillment').classList.add('flex');
      } else {
        roleBadge.innerText = "GenYES Crew";
        roleBadge.className = "inline-block bg-copley-gold/15 text-copley-blue font-black text-[7px] uppercase tracking-widest px-1.5 py-0.5 rounded border border-copley-gold/25 mt-1";
        document.getElementById('gnav-fulfillment').classList.add('hidden');
        document.getElementById('gnav-fulfillment').classList.remove('flex');
      }

      // Switch screen workspaces to GenYES Hub
      // Hide other portals
      document.getElementById('staff-portal-workspace').classList.add('hidden');
      document.getElementById('student-portal-workspace').classList.add('hidden');
      document.getElementById('genyes-portal-workspace').classList.remove('hidden');

      // Adjust Portal Switcher Header Buttons to neutral (not active)
      document.getElementById('portal-toggle-staff').className = "text-slate-400 hover:text-white px-3 py-1.5 rounded-lg font-black uppercase transition-all flex items-center gap-1";
      document.getElementById('portal-toggle-student').className = "text-slate-400 hover:text-white px-3 py-1.5 rounded-lg font-black uppercase transition-all flex items-center gap-1";

      // Hide selector dropdowns from header
      document.getElementById('headerStaffSelectorContainer').classList.add('hidden');
      document.getElementById('headerStudentSelectorContainer').classList.add('hidden');

      closeAuthTerminal();
      switchGenyesTab('inbox');
      renderGenyesInbox();
      renderPrintShop();
      renderGenyesLeaderboard();
      renderRewardsFulfillment();

      showToast("🔑 GenYES Portal Authorized", `Logged in as operator ${user.name}. Welcome to the Copley PBIS Tech Hub!`);
      playSynthFanfare();
      triggerConfetti();
    }

    function logoutGenyes() {
      AppState.activeGenyesMember = null;
      AppState.activeGenyesRole = null;

      // Lock GenYES Workspace and return to staff portal
      document.getElementById('genyes-portal-workspace').classList.add('hidden');
      togglePortalMode('staff');

      showToast("Logged Out Successfully", "GenYES service portal secure session terminated.");
      playSynthClick();
    }

    function switchGenyesTab(tabId) {
      currentGenyesTab = tabId;
      playSynthClick();

      document.querySelectorAll('.genyes-tab-content').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('block');
      });

      const activeEl = document.getElementById(`gtab-${tabId}`);
      if (activeEl) {
        activeEl.classList.remove('hidden');
        activeEl.classList.add('block');
      }

      // Sidebar button active styles
      document.querySelectorAll('#genyes-portal-workspace nav button').forEach(btn => {
        btn.className = "flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs text-slate-600 hover:bg-slate-50 hover:text-copley-blue border-l-4 border-transparent w-full text-left font-bold";
      });

      const activeBtn = document.getElementById(`gnav-${tabId}`);
      if (activeBtn) {
        if (tabId === 'inbox') {
          activeBtn.className = "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs bg-copley-blue text-copley-gold shadow border-l-4 border-copley-gold w-full text-left font-bold";
        } else {
          activeBtn.className = "flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs bg-copley-blue text-copley-gold shadow border-l-4 border-copley-gold w-full text-left font-bold";
        }
      }

      // Trigger specific refreshes
      if (tabId === 'inbox') renderGenyesInbox();
      else if (tabId === 'printer') renderPrintShop();
      else if (tabId === 'leaderboard') renderGenyesLeaderboard();
      else if (tabId === 'fulfillment') renderRewardsFulfillment();
    }

    // 1. Inbox Moderation render
    function renderGenyesInbox() {
      const container = document.getElementById('genyesPendingList');
      const emptyMsg = document.getElementById('genyesEmptyInboxMsg');
      const badge = document.getElementById('genyesInboxCountBadge');

      if (!container) return;
      container.innerHTML = '';

      // Get pending shout-outs from students (mockSlips)
      const pendingSlips = AppState.mockSlips.map((s, index) => ({ ...s, originalIndex: index })).filter(s => s.status === 'Pending');

      badge.innerText = pendingSlips.length;

      if (pendingSlips.length === 0) {
        emptyMsg.classList.remove('hidden');
        container.classList.add('hidden');
        return;
      }

      emptyMsg.classList.add('hidden');
      container.classList.remove('hidden');

      pendingSlips.forEach(s => {
        const card = document.createElement('div');
        card.className = "bg-white border border-slate-200 p-4 rounded-xl shadow-sm space-y-3 relative overflow-hidden flex flex-col justify-between";
        card.innerHTML = `
          <div>
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
              <div class="flex items-center gap-2 text-xs">
                <span class="font-black text-slate-500">From:</span>
                <span class="font-black text-copley-blue">${s.sender}</span>
                <span class="text-slate-400 font-bold">➔</span>
                <span class="font-black text-slate-500">To Staff:</span>
                <span class="font-black text-copley-blue">${s.teacher}</span>
              </div>
              <div class="text-[8px] bg-slate-100 text-slate-400 font-bold px-2 py-0.5 rounded uppercase tracking-wider">${s.date}</div>
            </div>
            
            <div class="py-2.5">
              <span class="text-[8px] font-black text-copley-gold uppercase tracking-widest block mb-1">Category: ${s.category}</span>
              
              <!-- Editable textarea for sanitization -->
              <div class="bg-slate-50 border border-slate-150 p-2.5 rounded-xl mt-1">
                <textarea id="editMessageText-${s.originalIndex}" class="w-full bg-transparent text-xs font-semibold text-slate-700 focus:outline-none resize-none leading-relaxed" rows="2" onchange="updateSlipMessageText(${s.originalIndex}, this.value)">${s.message}</textarea>
                <div class="flex justify-end text-[7px] text-slate-400 font-bold uppercase mt-1 italic"><i class="fa-solid fa-pen mr-1"></i>Edit text above to sanitize if needed</div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between border-t border-slate-100 pt-3 gap-2">
            <!-- Anonymity Toggle checkbox -->
            <label class="flex items-center gap-2 text-[10px] font-bold text-slate-500 select-none cursor-pointer">
              <input type="checkbox" ${s.anonymous ? 'checked' : ''} onchange="toggleSlipAnonymity(${s.originalIndex}, this.checked)" class="w-4 h-4 rounded cursor-pointer text-copley-blue focus:ring-copley-gold focus:ring-1">
              <span>Student requested anonymity (hide sender name)</span>
            </label>
            
            <!-- Controls -->
            <div class="flex gap-2">
              <button onclick="denySlip(${s.originalIndex})" class="bg-red-50 hover:bg-red-100 border border-red-200 text-red-650 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider flex items-center gap-1.5 transition">
                <i class="fa-solid fa-ban text-[10px]"></i>
                <span>Deny / Silly</span>
              </button>
              <button onclick="approveSlip(${s.originalIndex})" class="bg-emerald-600 hover:opacity-95 text-white px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider flex items-center gap-1.5 border border-transparent shadow shadow-emerald-700/15 transition">
                <i class="fa-solid fa-circle-check text-[10px]"></i>
                <span>Approve & Publish</span>
              </button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    function updateSlipMessageText(index, val) {
      if (AppState.mockSlips[index]) {
        AppState.mockSlips[index].message = val;
        showToast("Text Updated", "Slip phrasing sanitized and auto-saved.");
        playSynthClick();
      }
    }

    function toggleSlipAnonymity(index, checked) {
      if (AppState.mockSlips[index]) {
        AppState.mockSlips[index].anonymous = checked;
        showToast("Anonymity Synced", checked ? "Student sender name is now masked." : "Student sender name is now public.");
        playSynthClick();
      }
    }

    function approveSlip(index) {
      const slip = AppState.mockSlips[index];
      if (!slip) return;

      slip.status = 'Approved';
      
      // Increment stats for logged-in operator
      const user = AppState.genyesLeaderboard.find(u => u.email === AppState.activeGenyesMember);
      if (user) {
        user.approvedCount += 1;
        user.streak = Math.min(15, user.streak + 1); // increment streak
        // Update sidebar profile stats
        document.getElementById('genyesProfileCount').innerText = user.approvedCount;
        document.getElementById('genyesProfileStreak').innerHTML = `<i class="fa-solid fa-fire text-amber-500 animate-pulse mr-0.5"></i>${user.streak} Days`;
      }

      showToast("🏆 Shout-Out Approved!", `Operator has routed this VSO slip targeting ${slip.teacher} to their door queue!`);
      playSynthFanfare();
      triggerConfetti();

      // Refresh
      renderGenyesInbox();
      renderPrintShop();
      renderVirtualSlips(); // updates staff board
      renderGenyesLeaderboard();
    }

    function denySlip(index) {
      const slip = AppState.mockSlips[index];
      if (!slip) return;

      slip.status = 'Denied';
      showToast("Slip Denied", "Inappropriate or silly shout-out has been rejected and archived.");
      playSynthError();

      renderGenyesInbox();
      renderPrintShop();
    }

    // 2. Print Shop tab render
    let selectedPrintIndices = [];
    function renderPrintShop() {
      const container = document.getElementById('genyesApprovedPrintGrid');
      const emptyMsg = document.getElementById('genyesEmptyPrintMsg');

      if (!container) return;
      container.innerHTML = '';

      // Get approved slips (pre-seeded + moderated approved ones)
      const approvedSlips = AppState.mockSlips.map((s, index) => ({ ...s, originalIndex: index })).filter(s => s.status === 'Approved' || !s.status);

      if (approvedSlips.length === 0) {
        emptyMsg.classList.remove('hidden');
        container.classList.add('hidden');
        document.getElementById('printSelectedCountBadge').innerText = 0;
        return;
      }

      emptyMsg.classList.add('hidden');
      container.classList.remove('hidden');

      approvedSlips.forEach(s => {
        const card = document.createElement('div');
        const isChecked = selectedPrintIndices.includes(s.originalIndex);
        card.className = `bg-white border p-4 rounded-xl flex items-start gap-3 transition cursor-pointer select-none ${isChecked ? 'border-copley-blue bg-copley-blue/5 shadow-sm' : 'border-slate-200 hover:border-slate-350 shadow-inner bg-slate-50/40'}`;
        card.onclick = (e) => {
          if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL') {
            const chk = card.querySelector('.print-card-checkbox');
            chk.checked = !chk.checked;
            handlePrintSelection(s.originalIndex, chk.checked);
          }
        };

        card.innerHTML = `
          <input type="checkbox" class="print-card-checkbox w-4.5 h-4.5 rounded text-copley-blue cursor-pointer border-slate-300 mt-1 shrink-0" ${isChecked ? 'checked' : ''} onchange="handlePrintSelection(${s.originalIndex}, this.checked)">
          <div class="space-y-1.5 flex-grow truncate">
            <div class="flex items-center justify-between gap-1 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
              <span>${s.anonymous ? '🤫 Anonymous' : s.sender} ➔ ${s.teacher}</span>
              <span>${s.date}</span>
            </div>
            <p class="text-xs font-semibold text-slate-700 whitespace-normal leading-relaxed truncate-2-lines">
              "${s.message}"
            </p>
            <span class="text-[8px] font-black text-copley-gold uppercase tracking-widest block">${s.category}</span>
          </div>
        `;
        container.appendChild(card);
      });

      updateSelectedPrintCount();
    }

    function handlePrintSelection(index, checked) {
      if (checked) {
        if (!selectedPrintIndices.includes(index)) selectedPrintIndices.push(index);
      } else {
        selectedPrintIndices = selectedPrintIndices.filter(i => i !== index);
      }
      playSynthClick();
      renderPrintShop();
    }

    function toggleSelectAllPrint(checked) {
      selectedPrintIndices = [];
      if (checked) {
        const approvedSlips = AppState.mockSlips.map((s, index) => ({ ...s, originalIndex: index })).filter(s => s.status === 'Approved' || !s.status);
        approvedSlips.forEach(s => selectedPrintIndices.push(s.originalIndex));
      }
      playSynthClick();
      renderPrintShop();
    }

    function updateSelectedPrintCount() {
      document.getElementById('printSelectedCountBadge').innerText = selectedPrintIndices.length;
      document.getElementById('printSelectedCountBadge').className = selectedPrintIndices.length > 0 ? "text-emerald-500 font-bold" : "text-slate-400";
    }

    function triggerStickyPrint() {
      if (selectedPrintIndices.length === 0) {
        showToast("Print Shop Backlog Empty", "Please select at least one approved virtual slip card to compile for printing!");
        playSynthError();
        return;
      }

      const template = document.getElementById('printTemplateSelect').value;
      const printContainer = document.getElementById('print-area');
      printContainer.innerHTML = '';

      // Build pages of 6 cards (2x3 grid)
      let notesHtml = '';
      const cards = selectedPrintIndices.length;
      let finalPagesHtml = '';
      for (let offset = 0; offset < cards; offset += 6) {
        const pageCards = selectedPrintIndices.slice(offset, offset + 6);
        let pageNotesHtml = '';
        pageCards.forEach(origIdx => {
          const s = AppState.mockSlips[origIdx];
          const senderName = s.anonymous ? '🤫 Anonymous Student' : s.sender;
          
          let templateClass = 'template-retro';
          if (template === 'copley') templateClass = 'template-copley';
          else if (template === 'academic') templateClass = 'template-academic';
          else if (template === 'eco') templateClass = 'template-eco';

          pageNotesHtml += `
            <div class="printable-note ${templateClass}">
              <div class="print-header">
                COPLEY APPRECIATION SHOUT-OUT
              </div>
              <div class="print-sender-recip">
                <strong>To Staff:</strong> ${s.teacher}<br>
                <strong>From Student:</strong> ${senderName}
              </div>
              <div class="print-message font-medium">
                "${s.message}"
              </div>
              <div class="print-footer text-slate-500">
                <span>Category: ${s.category}</span>
                <span>Date: ${s.date}</span>
              </div>
            </div>
          `;
        });

        finalPagesHtml += `
          <div class="print-page">
            ${pageNotesHtml}
          </div>
        `;
      }

      printContainer.innerHTML = finalPagesHtml;

      showToast("Print Job Compiled 🖨️", `Successfully generated ${Math.ceil(cards/6)} sheet(s) for browser print spooling.`);
      playSynthFanfare();
      
      setTimeout(() => {
        window.print();
      }, 550);
    }

    // 3. GenYES Leaderboard Render
    function renderGenyesLeaderboard() {
      const tbody = document.getElementById('genyesLeaderboardBody');
      if (!tbody) return;
      tbody.innerHTML = '';

      // Sort leaderboard by approvedCount descending
      const sorted = [...AppState.genyesLeaderboard].sort((a, b) => b.approvedCount - a.approvedCount);

      sorted.forEach((u, i) => {
        const tr = document.createElement('tr');
        tr.className = `border-b border-slate-100 hover:bg-slate-50/50 ${u.email === AppState.activeGenyesMember ? 'bg-copley-gold/5 font-bold' : ''}`;
        
        let rankBadge = `${i + 1}`;
        if (i === 0) rankBadge = `<span class="bg-amber-100 text-amber-600 font-bold px-2 py-0.5 rounded border border-amber-200">🥇 1st</span>`;
        else if (i === 1) rankBadge = `<span class="bg-slate-150 text-slate-650 font-bold px-2 py-0.5 rounded border border-slate-200">🥈 2nd</span>`;
        else if (i === 2) rankBadge = `<span class="bg-orange-100 text-orange-650 font-bold px-2 py-0.5 rounded border border-orange-200">🥉 3rd</span>`;

        tr.innerHTML = `
          <td class="px-4 py-3">${rankBadge}</td>
          <td class="px-4 py-3 font-semibold text-slate-800 flex items-center gap-1.5">
            <span class="h-6 w-6 rounded-full bg-copley-blue/5 text-copley-blue flex items-center justify-center font-black text-[10px] heading-style uppercase">${u.name.charAt(0)}</span>
            <span>${u.name} ${u.advisor ? '<span class="text-[7px] bg-red-100 text-red-650 font-bold px-1 py-0.2 rounded uppercase ml-1">Advisor</span>' : ''}</span>
          </td>
          <td class="px-4 py-3 text-center text-slate-600 font-bold">${u.approvedCount}</td>
          <td class="px-4 py-3 text-center text-emerald-600 font-black"><i class="fa-solid fa-fire text-amber-500 mr-0.5"></i>${u.streak} Days</td>
        `;
        tbody.appendChild(tr);
      });
    }

    // 4. Admin Fulfillment Desk render
    function renderRewardsFulfillment() {
      const container = document.getElementById('adminRewardsBacklogList');
      const emptyMsg = document.getElementById('adminEmptyRewardsMsg');

      if (!container) return;
      container.innerHTML = '';

      const pendingRewards = AppState.rewardsQueue.filter(r => r.status === 'Pending');

      if (pendingRewards.length === 0) {
        emptyMsg.classList.remove('hidden');
        container.classList.add('hidden');
        return;
      }

      emptyMsg.classList.add('hidden');
      container.classList.remove('hidden');

      pendingRewards.forEach(r => {
        const item = document.createElement('div');
        item.className = "bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-between gap-4 shadow-sm";
        item.innerHTML = `
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-xs font-black">
              <span class="text-slate-450 uppercase text-[9px] tracking-wider font-bold">Student:</span>
              <span class="text-copley-blue font-bold">${r.student}</span>
              <span class="text-slate-300">|</span>
              <span class="text-slate-450 uppercase text-[9px] tracking-wider font-bold">Reward claimed:</span>
              <span class="text-emerald-605 font-black flex items-center gap-1"><i class="fa-solid fa-gift"></i>${r.reward}</span>
            </div>
            <div class="text-[8px] font-bold text-slate-400">
              Claim Date: ${r.date} &nbsp; &nbsp; <span class="bg-copley-gold/15 text-copley-blue font-black px-1.5 py-0.5 rounded border border-copley-gold/20 text-[7px] uppercase font-bold">Cost: ${r.points} pts</span>
            </div>
          </div>
          <button onclick="fulfillReward(${r.id})" class="bg-copley-blue hover:opacity-95 text-copley-gold px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider flex items-center gap-1.5 transition shrink-0 border border-transparent shadow">
            <i class="fa-solid fa-clipboard-check"></i>
            <span>Complete & Deliver</span>
          </button>
        `;
        container.appendChild(item);
      });
    }

    function fulfillReward(id) {
      const reward = AppState.rewardsQueue.find(r => r.id === id);
      if (!reward) return;

      reward.status = 'Fulfilled';
      showToast("Reward Dispatched! 📦", `Successfully completed reward delivery: ${reward.reward} allocated to student ${reward.student}.`);
      playSynthFanfare();
      triggerConfetti();

      renderRewardsFulfillment();
    }

    // System Startup
    window.onload = function() {
      // Dynamic Staff Statistics Seeding
      AppState.teachers.forEach(teacher => {
        if (!AppState.teacherStats[teacher]) {
          const seed = teacher.charCodeAt(0) + (teacher.charCodeAt(teacher.length - 1) || 0);
          const vsoCount = 5 + (seed % 20); // 5 to 24 VSOs YTD
          const mtssCount = seed % 3 === 0 ? 1 + (seed % 3) : 0; // 0 to 3 active MTSS cases
          AppState.teacherStats[teacher] = { vsoCount, mtssCount };
        }
      });
      // Preserve stable demonstration stats
      AppState.teacherStats["Sarah Janiga"] = { vsoCount: 18, mtssCount: 4 };
      AppState.teacherStats["Lee Malcolm"] = { vsoCount: 12, mtssCount: 1 };
      AppState.teacherStats["Christina Davis"] = { vsoCount: 15, mtssCount: 2 };

      // Dynamic received VSO slips (mockSlips) Seeding for all 111 teachers
      const studentPool = ["Frodo Baggins", "Ahsoka Tano", "Luke Skywalker", "Jean Grey", "Peter Parker", "Arwen Undomiel", "Dragonborn", "Anakin Skywalker", "Gwen Stacy", "Legolas Greenleaf", "Samwise Gamgee", "Spock"];
      
      AppState.teachers.forEach(teacher => {
        // Skip teachers with default hardcoded demonstration slips
        const hasExisting = AppState.mockSlips.some(s => s.teacher === teacher);
        if (!hasExisting) {
          const charSum = teacher.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
          const nameParts = teacher.split(' ');
          const lastName = nameParts[nameParts.length - 1];
          const titles = ["Mr.", "Mrs.", "Ms.", "Dr."];
          const title = titles[charSum % titles.length];

          const personalizedTemplates = [
            {
              category: "Super Support VSO",
              message: `Thank you so much for the extra help after class today, ${title} ${lastName}! The concepts make a lot more sense now.`
            },
            {
              category: "Welcome Wagon VSO",
              message: `Thank you for making our classroom feel like a safe and friendly space, ${title} ${lastName}. I always look forward to coming to your class.`
            },
            {
              category: "Captivating VSO",
              message: `Your lessons are absolutely engaging! Even when the topic is tough, ${title} ${lastName}, you explain it with so much energy.`
            },
            {
              category: "GOAT VSO",
              message: `You are hands down one of the greatest teachers in this school. Thanks for always pushing me to do my best!`
            },
            {
              category: "Barrier Breaker VSO",
              message: `Thank you for working through my learning challenges with me this week and finding a path that helped me understand.`
            },
            {
              category: "Time-Turner VSO",
              message: `I really appreciate the understanding you showed about my project timeline, ${title} ${lastName}. It really helped me succeed.`
            },
            {
              category: "'You Heard Me' VSO",
              message: `Thank you for taking time to listen to my concerns and giving me honest, caring advice. It truly made a huge difference.`
            }
          ];

          // Deterministically generate 2 beautiful received slips for each teacher
          for (let i = 0; i < 2; i++) {
            const studentIdx = (charSum + i * 3) % studentPool.length;
            const templateIdx = (charSum + i * 5) % personalizedTemplates.length;
            
            const studentName = studentPool[studentIdx];
            const template = personalizedTemplates[templateIdx];
            
            // Stable date in the last week
            const dateOffset = (charSum + i) % 6; // 0 to 5 days ago
            const date = new Date(Date.now() - dateOffset * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

            AppState.mockSlips.push({
              sender: studentName,
              teacher: teacher,
              message: template.message,
              category: template.category,
              date: date
            });
          }
        }
      });

      // autoFlagStrugglingStudents();
      populateStaffProfiles();
      hydrateScoreboard();
      hydratePraiseTicker();
      renderVirtualSlips();
      renderStudentChecklist();
      updateSelectedStudentLabels();
      renderStudentLeaderboard();
      renderEquityChecklist();
      // hydrateMTSSTabs();
      // renderCCTimeline();
      if (window.initMTSSDatabase) window.initMTSSDatabase();
      if (window.renderMTSSDashboard) window.renderMTSSDashboard();
      if (window.initCCDatabase) window.initCCDatabase();
      if (window.renderCCDashboard) window.renderCCDashboard();
      recalculateDistrictStats();
      updateSidebarMTSSAlerts();
      updateTeacherBadges();
      updateDepartmentLeaderboard();
    };

    // =========================================================================
    // STUDENT PORTAL TAB CONTROLLERS
    // =========================================================================
    let currentStudentTab = 'shoutout';
    function switchStudentTab(tabId) {
      currentStudentTab = tabId;
      playSynthClick();

      // Toggle hidden on all tab-content blocks
      document.querySelectorAll('.student-tab-content').forEach(el => {
        el.classList.add('hidden');
      });

      const activeEl = document.getElementById(`studentTab-${tabId}`);
      if (activeEl) {
        activeEl.classList.remove('hidden');
      }

      // Toggle selected button states
      document.querySelectorAll('#student-portal-workspace nav button').forEach(btn => {
        btn.className = "flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all duration-200 text-xs text-slate-650 hover:bg-slate-100 hover:text-copley-blue border-l-4 border-transparent text-left w-full";
      });

      const activeBtn = document.getElementById(`snav-${tabId}`);
      if (activeBtn) {
        activeBtn.className = "flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all duration-200 text-xs shadow-md bg-copley-blue text-copley-gold border-l-4 border-copley-gold text-left w-full";
      }
    }

    function renderReceivedVSOs() {
      const student = AppState.activeStudent;
      const deck = document.getElementById('studentReceivedVSODeck');
      if (!deck) return;

      deck.innerHTML = '';
      
      // Filter slips given to this student
      const slips = AppState.mockVSOs.filter(s => s.student === student);
      
      if (slips.length === 0) {
        deck.innerHTML = `
          <div class="flex flex-col items-center justify-center p-8 text-center bg-slate-50 border border-dashed border-slate-200 rounded-2xl select-none">
            <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3 text-lg">
              <i class="fa-solid fa-heart-crack"></i>
            </div>
            <p class="text-xs font-bold text-slate-500">No shout-outs received yet.</p>
            <p class="text-[10px] text-slate-400 mt-1">Keep demonstrating Civil, Honorable, and Self-Managed leadership around school!</p>
          </div>
        `;
        return;
      }
      
      // Sort slips by date descending
      slips.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      slips.forEach(s => {
        // Initials for teacher monogram
        const initials = s.teacher.split(' ').map(n => n[0]).join('');
        
        // Category styling mappings
        let badgeBg = "bg-copley-blue/10 text-copley-blue border-copley-blue/20";
        let cardBorder = "border-slate-200";
        let icon = "fa-circle-check";
        
        if (s.category === "Honorable") {
          badgeBg = "bg-copley-gold/10 text-copley-blue border-copley-gold/30";
          cardBorder = "border-copley-gold/40 shadow-sm";
          icon = "fa-shield-halved text-copley-gold";
        } else if (s.category === "Civil") {
          badgeBg = "bg-blue-50 text-blue-700 border-blue-100";
          cardBorder = "border-blue-200";
          icon = "fa-handshake text-blue-500";
        } else if (s.category === "Self-Managed") {
          badgeBg = "bg-emerald-50 text-emerald-700 border-emerald-100";
          cardBorder = "border-emerald-200";
          icon = "fa-user-check text-emerald-500";
        }
        
        const card = document.createElement('div');
        card.className = `bg-slate-50 border ${cardBorder} p-3.5 rounded-xl relative transition-all duration-200 hover:shadow-md flex flex-col gap-3 group`;
        
        card.innerHTML = `
          <!-- Top Row: Teacher Avatar & Category Badge & Points -->
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-copley-blue text-copley-gold font-black font-serif text-[11px] flex items-center justify-center border border-white/25 shadow-sm group-hover:scale-105 transition-transform select-none">
                ${initials}
              </div>
              <div class="text-left leading-tight">
                <span class="text-[10px] font-black text-slate-800 block">${s.teacher}</span>
                <span class="text-[8px] text-slate-400 font-bold uppercase block">${s.date}</span>
              </div>
            </div>
            
            <div class="flex items-center gap-1.5">
              <span class="inline-block text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded border heading-style ${badgeBg}">
                <i class="fa-solid ${icon} mr-1"></i>${s.category}
              </span>
              <div class="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 font-black text-[9px] flex items-center justify-center shadow-inner select-none" title="PBIS Points awarded">
                +${s.points}
              </div>
            </div>
          </div>
          
          <!-- Appreciation Text -->
          <p class="text-[11.5px] font-semibold text-slate-650 leading-relaxed italic bg-white border border-slate-100/50 p-2.5 rounded-lg shadow-inner">
            "${s.description}"
          </p>
        `;
        deck.appendChild(card);
      });
    }

    // 🔑 Stealth Backdoor Controller (Double-click Logo, Hotkey Ctrl+Shift+Y, or type "genyes")
    let typedBuffer = '';
    window.addEventListener('keydown', function(e) {
      // 1. Hotkey: Ctrl + Shift + Y
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        openAuthTerminal();
        return;
      }
      // 2. Word Sequence: typing 'genyes'
      typedBuffer += e.key.toLowerCase();
      if (typedBuffer.endsWith('genyes')) {
        openAuthTerminal();
        typedBuffer = '';
      } else if (typedBuffer.length > 20) {
        typedBuffer = typedBuffer.slice(-10);
      }
    });
  