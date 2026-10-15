/* Steady Start: guide content.
   Edit text here; the page builds itself from this list.

   Rules:
   - Pregnancy only (gynecologic care may come later).
   - Write at about a 3rd-grade reading level: short sentences, common words.
     Run `python3 tools/readability.py` to check.
   - General information only. No statistics.
   - Texas law changes often. Update LAW_CHECKED whenever the law card is re-checked.

   Item shapes inside a card's `items` list:
     "plain text"
     { text: "...", say: "words you can use" }
     { name: "Hotline name", text: "what they do", call: "1-800-...", textTo: "...", url: "https://..." }
*/
var LAW_CHECKED = "October 15, 2026";

window.STEADY_GUIDE = [
  {
    id: "prenatal",
    choice: "I am pregnant or want to be",
    sub: "Checkups while you are pregnant",
    heading: "Pregnancy checkups",
    cards: [
      {
        tag: "What to expect",
        title: "Your checkups",
        intro: "Care while you are pregnant is called prenatal care. You will go to checkups again and again.",
        items: [
          "The first visit is the longest. They ask about your health. They take some blood. They ask you to pee in a cup.",
          "Early on, you may get an ultrasound. This is a picture of the baby. Early ones are often done inside the vagina with a thin wand. Later ones are done on your belly.",
          "You do not need a pelvic exam at every visit. You can ask, \"Do I need this today? Why?\"",
          "At first, visits are about once a month. Near the end, they are every week. Most visits are short. They check your blood pressure, your belly, and the baby's heartbeat.",
          "Near the end, they test for a germ called Group B strep. It is a quick swab. Many clinics let you do the swab yourself.",
          "They may ask if you are safe at home. They ask everyone this. You choose what to say."
        ]
      },
      {
        tag: "Ask for it",
        title: "Things you can ask for",
        intro: "You are allowed to ask for these. You do not have to say why.",
        items: [
          { text: "Talk first, with your clothes on.", say: "Can we talk before I change?" },
          { text: "Stop at any time. Pick a stop word ahead of time.", say: "If I say \"pause,\" please stop and wait." },
          { text: "Bring a person you trust into the room.", say: "I want my friend to stay with me." },
          { text: "Do it a different way. You can put in the wand or swab yourself. You can stay more covered.", say: "Can I put it in myself?" },
          { text: "Hear each step before it happens.", say: "Please tell me before you touch me." },
          { text: "Put a note in your chart so you do not have to say it again.", say: "Can you write down that I need extra time for exams?" }
        ],
        note: "You can say you have been through something hard without any details. \"Exams are hard for me\" is enough."
      },
      {
        tag: "Bring this",
        title: "Questions to ask",
        items: [
          "What will happen today? Will you need to touch me?",
          "Do I need this exam today? Can it wait?",
          "What can I do if I don't want an exam inside my body?",
          "Who will be in the room? Can I say no to students?",
          "How do you help people who find exams hard?",
          "Who can see my records?"
        ]
      }
    ]
  },
  {
    id: "birth",
    choice: "I am getting ready to give birth",
    sub: "Plan ahead so there are fewer surprises",
    heading: "Getting ready to give birth",
    cards: [
      {
        tag: "What to expect",
        title: "At the hospital",
        items: [
          "While you are in labor, staff may check inside your vagina with their fingers. This shows how labor is going. You can talk about how often they do this.",
          "Many people may come in and out. You can ask each person who they are.",
          "You will be offered ways to ease the pain. You can ask about each one. You can change your mind.",
          "Plans can change. You may need a C-section. That is a surgery to take the baby out. Staff should tell you why and ask you first.",
          "After the baby comes, you will have a checkup for you, too. It is about your health, not only the baby's."
        ]
      },
      {
        tag: "Ask for it",
        title: "Things you can ask for",
        items: [
          { text: "Fewer checks inside your body, and only when you say yes.", say: "Please ask me before each check." },
          { text: "Fewer people in the room.", say: "I want as few people in here as we can." },
          { text: "A person you trust, or a doula, with you the whole time. A doula is a trained helper for birth." },
          { text: "A short note about what you need. You do not need to share details.", say: "I have been through trauma. Please tell me before you touch me. Stop if I say stop." },
          { text: "Your choice of how you lie or sit, what covers you, and how bright the lights are, when it is safe." }
        ],
        note: "Bring your note to a checkup before your due date. Ask them to add it to your chart."
      },
      {
        tag: "Bring this",
        title: "Questions to ask before your due date",
        items: [
          "How will your nurses and doctors help me if I have been through trauma?",
          "Can you put my note in my chart before I come in?",
          "Will students be there? Can I say no?",
          "If I need a C-section, can my person stay with me?",
          "Who can I call after the birth if I feel sad or scared?"
        ]
      }
    ]
  },
  {
    id: "options",
    choice: "I am not sure I want to stay pregnant",
    sub: "Your choices, Texas law, and who can help",
    heading: "If you are not sure you want to stay pregnant",
    cards: [
      {
        tag: "Your choices",
        title: "You have choices",
        intro: "This is your choice. No one should push you. That includes a partner.",
        items: [
          "You can stay pregnant and raise the baby.",
          "You can stay pregnant and let another family adopt the baby.",
          "You can end the pregnancy. This is called an abortion. In Texas, this almost always means going to another state.",
          "You can take time to think. But the laws in some places depend on how far along you are. Getting help early gives you more choices.",
          "If someone is forcing you to get pregnant, stay pregnant, or end a pregnancy, that is a kind of abuse. You can call the National Domestic Violence Hotline for help."
        ]
      },
      {
        tag: "Texas law",
        title: "Texas law in simple words",
        intro: "Laws change a lot. This was checked on " + LAW_CHECKED + ". This is not legal advice. For free legal help, call the Repro Legal Helpline below.",
        items: [
          "In Texas, abortion is against the law in almost every case. This has been true since 2022.",
          "There is no exception for rape or incest. Incest means sex with a close family member.",
          "Doctors may end a pregnancy if your life is in danger, or if your body could be badly hurt. A 2025 law says the danger does not have to be happening right now.",
          "Doctors can still treat a miscarriage. That is when a pregnancy ends on its own. They can also treat an ectopic pregnancy. That is a pregnancy outside the womb.",
          "You will not go to jail for getting your own abortion. The Texas laws are aimed at doctors and helpers.",
          "You are allowed to go to another state for an abortion.",
          "Some people get abortion pills by mail. A new Texas law lets people sue anyone who mails or gives pills in Texas. The pregnant person cannot be sued under it. Court cases about this are still going on.",
          "Birth control is legal in Texas. So is the morning-after pill, like Plan B."
        ],
        sources: [
          { name: "Texas State Law Library: Abortion Laws", url: "https://guides.sll.texas.gov/abortion-laws" },
          { name: "Texas Senate Bill 31 (2025)", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00031F.htm" },
          { name: "Texas Tribune: abortion pill law", url: "https://www.texastribune.org/2025/09/12/texas-abortion-pill-private-lawsuits-legal-fight/" }
        ]
      },
      {
        tag: "Get help",
        title: "Who can help",
        intro: "These are free. You do not have to give your name.",
        items: [
          { name: "Repro Legal Helpline", text: "Free, private help with legal questions.", call: "844-868-2812", url: "https://www.reprolegalhelpline.org/" },
          { name: "All-Options Talkline", text: "Talk about all your choices. They will not judge you.", call: "1-888-493-0092", url: "https://www.all-options.org/" },
          { name: "National Abortion Federation Hotline", text: "Help finding a clinic in another state and paying for it.", call: "1-800-772-9100", url: "https://prochoice.org/" },
          { name: "Miscarriage + Abortion Hotline", text: "Medical questions about pills or a miscarriage. Answered by doctors and nurses.", call: "1-833-246-2632", url: "https://mahotline.org/" },
          { name: "Jane's Due Process", text: "Help for Texas teens under 18.", call: "1-866-999-5263", url: "https://janesdueprocess.org/" },
          { name: "AbortionFinder", text: "Search for clinics in other states.", url: "https://www.abortionfinder.org/" },
          { name: "National Network of Abortion Funds", text: "Find groups that may help pay for care, travel, or a place to stay.", url: "https://abortionfunds.org/" }
        ]
      },
      {
        tag: "Stay safe",
        title: "Keep your plans private",
        items: [
          "Use a phone or computer that only you use, if you can.",
          "Use a private window in your web browser. It saves less history.",
          "Some places that offer free pregnancy tests do not give abortion care or send you to it. Ask what they offer before you share your plans.",
          "Be careful about what you write in texts and posts."
        ]
      }
    ]
  },
  {
    id: "privacy",
    choice: "I need to keep my care private",
    sub: "If someone in your life may be watching",
    heading: "Keeping your care private",
    cards: [
      {
        tag: "What to expect",
        title: "How clinics can help",
        items: [
          "Many clinics ask everyone about safety. They often ask when you are alone. This is normal.",
          "Staff can find a way to see you alone for part of a visit. They do not have to say why.",
          "Someone else may see your visits. This can happen through your patient website, reminder texts, bills, or insurance papers. You can often change this."
        ]
      },
      {
        tag: "Ask for it",
        title: "Things you can ask for",
        items: [
          { text: "Time alone with your doctor or midwife.", say: "Can I talk with you alone for a minute?" },
          { text: "A safer phone number, or no messages.", say: "Please don't leave messages. Only call this number." },
          { text: "Help with who can see your patient website and records." },
          { text: "Help from a local advocate, in a way that is safe for you. An advocate is a person whose job is to help you." }
        ],
        note: "Before you share details, you can ask what the clinic has to report, and to who."
      },
      {
        tag: "Bring this",
        title: "Questions to ask the clinic",
        items: [
          "Who can see my records and test results?",
          "Can you send reminders and bills only where I choose?",
          "If I tell you about abuse at home, what do you have to do?",
          "Can you help me talk to an advocate, today or later?"
        ]
      }
    ]
  }
];
