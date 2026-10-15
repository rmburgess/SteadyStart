/* Steady Start: "Paying for care" and "Care by video" tabs.
   Same card shapes and rules as js/guide-content.js:
   about a 3rd-grade reading level, no statistics, sources linked.
   Re-check programs and companies before turning the project in. */
var PAGES_CHECKED = "October 15, 2026";

window.STEADY_PAGES = {
  insurance: {
    heading: "Paying for care",
    intro: "Pregnancy care can cost a lot. There is help. This was checked on " + PAGES_CHECKED + ".",
    cards: [
      {
        tag: "No insurance",
        title: "If you have little money or no insurance",
        items: [
          "Texas Medicaid can pay for pregnancy care if you don't make much money. Lots of people who are pregnant can get it.",
          "In Texas, Medicaid keeps covering you for 12 months after your pregnancy ends.",
          "Can't get Medicaid because of your pay or your immigration papers? A program called CHIP Perinatal may still pay for your pregnancy care. It covers the pregnancy, the birth, and two checkups after.",
          { name: "Your Texas Benefits", text: "Apply for Medicaid or CHIP online.", url: "https://www.yourtexasbenefits.com/" },
          { name: "2-1-1 Texas", text: "Free help to apply, by phone.", call: "2-1-1" },
          { name: "Find a Health Center", text: "Community clinics that charge less if you earn less.", url: "https://findahealthcenter.hrsa.gov/" }
        ],
        sources: [
          { name: "Texas Governor: 12-month postpartum coverage", url: "https://gov.texas.gov/news/post/texas-extends-postpartum-coverage-for-medicaid-chip-recipients" },
          { name: "Texas Works Handbook: CHIP Perinatal", url: "https://fhb.hhs.texas.gov/handbooks/texas-works-handbook/d-110-general-policy" }
        ]
      },
      {
        tag: "Insurance",
        title: "If you have insurance",
        items: [
          "Plans from a job or from HealthCare.gov must cover pregnancy and birth.",
          "Call the number on your insurance card. Ask which doctors and hospitals are \"in network.\" Those cost you less.",
          "When your baby is born, you can sign up for a plan or change plans. You have 60 days to do it.",
          { name: "HealthCare.gov", text: "Find or change a health plan.", url: "https://www.healthcare.gov/" }
        ]
      },
      {
        tag: "Stay safe",
        title: "Keep your insurance mail private",
        intro: "Insurance companies mail letters about your visits. They often go to the person whose name is on the plan.",
        items: [
          { text: "If that person might hurt you, you can ask the insurance company to send letters somewhere else.", say: "Sending my mail to that address could put me in danger. Please send it here instead." },
          "A U.S. privacy rule says they must say yes if you tell them you could be in danger. They may ask you to write it down.",
          "You can ask your clinic, too, to send bills and messages only where you choose."
        ],
        sources: [
          { name: "Federal privacy rule, 45 CFR 164.522(b)", url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.522" }
        ]
      },
      {
        tag: "Get help",
        title: "Help for people who have been hurt",
        items: [
          { name: "Texas Crime Victims' Compensation", text: "If you were hurt by family violence or sexual assault, this state program may help pay for medical care and counseling. It can also help with moving costs.", call: "1-800-983-9933", url: "https://www.texasattorneygeneral.gov/crime-victims" }
        ],
        note: "You may need to have reported the crime. An advocate at the National Domestic Violence Hotline can help you with the steps."
      }
    ]
  },

  telehealth: {
    heading: "Care by video or phone",
    intro: "Some care can happen by video, phone, or text. This is called telehealth. It can be easier to get to, and you can do it from a place you choose.",
    cards: [
      {
        tag: "What to expect",
        title: "What video visits can and can't do",
        items: [
          "Good by video: questions, results, planning, feeling sad or worried, and help with feeding the baby.",
          "Still in person: ultrasounds, blood tests, checking the baby's heartbeat, and the birth.",
          "Many clinics have some visits by video. Texas Medicaid pays for some of them. Ask your clinic."
        ]
      },
      {
        tag: "Options",
        title: "Telehealth services",
        intro: "These are examples, not picks we tested. Check what your insurance covers.",
        items: [
          { name: "Maven Clinic", text: "Video visits with doctors, midwives, doulas, and more during and after pregnancy. Most people get it free through a job or health plan. Ask your HR office or insurance.", url: "https://www.mavenclinic.com/" },
          { name: "Hey Jane", text: "Abortion care and other care by video, in some states. Texas is not one of them. You must be in one of their states for the visit and to get the pills.", url: "https://www.heyjane.com/" },
          { name: "National Maternal Mental Health Hotline", text: "Call or text any time if you feel sad, scared, or alone while pregnant or after birth. Free.", call: "1-833-852-6262", url: "https://mchb.hrsa.gov/national-maternal-mental-health-hotline" },
          { name: "Postpartum Support International", text: "Help line and online support groups for parents.", call: "1-800-944-4773", url: "https://www.postpartum.net/" }
        ],
        sources: [
          { name: "Hey Jane: who can use it", url: "https://www.heyjane.com/faqs/about-hey-jane" }
        ]
      },
      {
        tag: "Stay safe",
        title: "Keep video visits private",
        items: [
          "Pick a time and place where no one can listen. A car or a walk can work.",
          "Use headphones.",
          "Ask if you can type in the chat instead of talking.",
          { text: "Pick a safe word with your provider. It means \"I can't talk right now.\"", say: "If I say \"I need to check the oven,\" it means I'm not safe to talk." },
          "Delete visit emails and texts if someone checks your phone."
        ]
      }
    ]
  }
};
