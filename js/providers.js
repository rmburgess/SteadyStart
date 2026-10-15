/* Steady Start: "Find a provider" listings.

   Rules for adding a practice:
   1. It gives prenatal care in a clinic or hospital setting in Texas:
      an OB/GYN practice, hospital midwives, a community clinic, or a
      hospital or university clinic. No home-birth providers and no
      freestanding birth centers.
   2. Its OWN website says its care is trauma-informed. Copy a short quote
      (under 15 words) from that page and link to the exact page.
   3. Reviews and Reddit may help find a practice, but never quote, paraphrase
      or link them here. Only the practice's own website counts.
   4. Record the date you checked. Re-check before the project is turned in.
   5. Never add ratings, reviews, or claims the practice doesn't make itself.
   6. Write `services` in very plain words.
   7. Optional, from the "Suggest a provider" form, only after a person reads it:
        patientSays:  a patient's words, with permission, no names or identifying details
        providerSays: the provider's own words, sent by someone allowed to speak for them
      A suggestion never counts as the trauma-informed check in rule 2.

   Field values:
   type:   "OB/GYN practice" | "Hospital midwives" | "Community clinic" |
           "Hospital or university clinic"
   region: "Region 1 (Panhandle)" | "Region 2/3 (North Texas, Dallas-Fort Worth)" |
           "Region 4/5N (East Texas)" | "Region 6/5S (Houston, Gulf Coast)" |
           "Region 7 (Central Texas, Austin)" | "Region 8 (San Antonio area)" |
           "Region 9/10 (West Texas, El Paso)" | "Region 11 (South Texas, Rio Grande Valley)"
*/
window.STEADY_PROVIDERS = [
  {
    name: "Luz de Atabey Midwifery Project (LAMP)",
    type: "Community clinic",
    city: "Austin",
    region: "Region 7 (Central Texas, Austin)",
    services: "Free pregnancy checkups, care after birth, baby checkups",
    quote: "Our approach is trauma-informed, culturally rooted",
    url: "https://www.lampatx.org/",
    checked: "2026-10-15"
  },
  {
    // The trauma-informed statement is in one provider's bio (Zoe Long, WHNP-BC),
    // not on a practice-wide page.
    name: "Austin Area Ob-Gyn & Fertility",
    type: "OB/GYN practice",
    city: "Austin",
    region: "Region 7 (Central Texas, Austin)",
    services: "Pregnancy checkups, having your baby, women's health visits",
    quote: "She believes in trauma-informed, patient-centered care",
    url: "https://aaobgyn.com/provider-bio/zoe-long-whnp-bc/",
    checked: "2026-10-15"
  },
  {
    name: "Legacy Community Health",
    type: "Community clinic",
    city: "Houston",
    region: "Region 6/5S (Houston, Gulf Coast)",
    services: "Pregnancy care, help planning your birth, breastfeeding help",
    quote: "Behavioral health referrals, postpartum screenings, and trauma-informed care",
    url: "https://www.legacycommunityhealth.org/wp-content/uploads/2025/08/NHCW-news-release-v3.0.pdf",
    checked: "2026-10-15"
  }
];
