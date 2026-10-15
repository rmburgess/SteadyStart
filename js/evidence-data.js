/* Steady Start: "Why this exists" charts.

   Rule: never type a number here that you didn't copy from the named source.
   A chart with an empty `rows` list shows a "data not added yet" box instead
   of bars. To fill one in, add rows like:
     rows: [ { label: "Region 1", value: 12.3 }, ... ]
   and fill in source.years with the years the numbers cover.
   Page text is written at about a 3rd-grade reading level.

   Where each number came from (copied exactly, not rounded or recalculated):
   - region-outcomes: Texas DSHS, 2022/2023 Healthy Texas Mothers and Babies
     Data Book (revised Feb 2025), Appendix B, Table B-12f "Linked Maternal
     Death Rates by Geographic Location, Texas, 2016-2019 (N=407)", PDF page 101.
     Column: "Rate (per 100,000 live births)". Labels are the Public Health
     Region codes so app.js can draw them on a map.
   - late-prenatal-care: same Data Book, Appendix B, Table B-6 "Percent of Live
     Births Where Mother Received Prenatal Care in the First Trimester by Race
     and Ethnicity, 2012-2021", PDF page 92. Column: "Texas". 2021 is marked
     provisional in the source. Planned source was CDC WONDER, but WONDER needs
     a data-use agreement accepted in the browser, and the DSHS table gives the
     same measure from the Texas birth files.
   - violence-around-pregnancy: Texas DSHS, 2018 PRAMS Data Book, "Physical
     Abuse" table (Q44, Q45), PDF page 8. Column: Physical Abuse "PCT".
     Rows: "Total" and the "Intention" group. The 1.5% to 3.3% range is the
     95% LCL/UCL for "Total" in that table.
   - abuse-effects (facts, no bars):
     1. Same 2022/2023 Data Book, Appendix B, Table B-11 "Linked Maternal Deaths
        by Timing and Cause of Death, Texas, 2016-2019", Homicide row, Total
        column = 60, out of the 407 linked maternal deaths (N stated in the
        table and in the text on PDF page 76). Deaths from cancer or car crashes
        were left out of that count.
     2. Wallace M, et al. "Homicide During Pregnancy and the Postpartum Period
        in the United States, 2018-2019." Obstetrics & Gynecology 2021;
        138(5):762-769. PMID 34619735. Abstract, Conclusion: homicide is a
        leading cause of death during pregnancy and the postpartum period.
     3. Donovan BM, et al. "Intimate partner violence during pregnancy and the
        risk for adverse infant outcomes: a systematic review and
        meta-analysis." BJOG 2016;123(8):1289-99. PMID 26956568. Abstract,
        Main results: IPV linked to preterm birth and low birthweight.
     4. Cha S, Masho SW. "Intimate partner violence and utilization of prenatal
        care in the United States." J Interpers Violence 2014;29(5):911-27.
        PMID 24203982. Abstract: women abused before and/or during pregnancy
        were more likely to have inadequate prenatal care (national PRAMS
        2004-2008).
     5. Howard LM, et al. "Domestic violence and perinatal mental disorders: a
        systematic review and meta-analysis." PLoS Medicine 2013;10(5):
        e1001452. PMID 23723741. Abstract: partner violence during pregnancy
        linked to high levels of depression symptoms after birth.
     Facts 2-5 state the effect without a number, because their numbers are
     odds ratios that can't be put in plain words without changing them.
*/
window.STEADY_EVIDENCE = {
  why:
    "Some people have been hurt by a partner or forced into sex. " +
    "For them, a visit to the doctor during pregnancy can feel scary. " +
    "It can bring back bad memories. So some people wait to go, or skip visits. " +
    "Care can feel safer when the doctor explains each step and lets you say stop. " +
    "The facts below come from Texas and national health groups. " +
    "They show why safe, kind care matters.",

  charts: [
    {
      id: "region-outcomes",
      display: "map",
      title: "Mothers who died, by part of Texas",
      question:
        "Texas is split into health regions. This shows how many mothers died " +
        "within one year of having a baby or losing a pregnancy. " +
        "The number is out of every 100,000 babies born in that region. " +
        "Deaths from cancer or car crashes are not counted. " +
        "Region 1 is the Panhandle. Region 11 is South Texas.",
      unit: "",
      source: {
        name: "Texas DSHS, 2022/2023 Healthy Texas Mothers and Babies Data Book, Table B-12f",
        url: "https://www.dshs.texas.gov/sites/default/files/mch/pdf/HTMB_Data_Book_2022-2023_revFeb2025.pdf",
        years: "deaths 2016-2019"
      },
      rows: [
        { label: "1", value: 40.9 },
        { label: "2/3", value: 26.9 },
        { label: "4/5N", value: 33.1 },
        { label: "6/5S", value: 27.2 },
        { label: "7", value: 25.7 },
        { label: "8", value: 26.9 },
        { label: "9/10", value: 28.9 },
        { label: "11", value: 14.4 }
      ]
    },
    {
      id: "late-prenatal-care",
      title: "Starting pregnancy care early",
      question:
        "Prenatal care means doctor or nurse visits while you are pregnant. " +
        "It is best to start in the first 3 months. " +
        "This shows the percent of Texas births where care started in the first 3 months. " +
        "The rest started later or got no care. " +
        "In 2020, Texas had the lowest share of any state. " +
        "Across the U.S. that year, it was 76.1%.",
      unit: "%",
      source: {
        name: "Texas DSHS, 2022/2023 Healthy Texas Mothers and Babies Data Book, Table B-6",
        url: "https://www.dshs.texas.gov/sites/default/files/mch/pdf/HTMB_Data_Book_2022-2023_revFeb2025.pdf",
        years: "2012-2021 (2021 provisional)"
      },
      rows: [
        { label: "2012", value: 66.2 },
        { label: "2013", value: 66.1 },
        { label: "2014", value: 65.2 },
        { label: "2015", value: 65.9 },
        { label: "2016", value: 65.1 },
        { label: "2017", value: 66.4 },
        { label: "2018", value: 67.5 },
        { label: "2019", value: 67.1 },
        { label: "2020", value: 67.7 },
        { label: "2021", value: 68.6 }
      ]
    },
    {
      id: "violence-around-pregnancy",
      title: "Being hurt by a partner",
      question:
        "Texas mothers were asked a question on a survey. " +
        "Did a husband or partner push, hit, slap, kick, choke, or hurt you? " +
        "This means in the year before the pregnancy or during it. " +
        "The bars show the percent who said yes. " +
        "Some bars are split by whether the person wanted to get pregnant then. " +
        "Surveys are not exact. For all mothers, the real number could be from 1.5% to 3.3%. " +
        "Many people never tell anyone about abuse.",
      unit: "%",
      source: {
        name: "Texas DSHS, 2018 Texas PRAMS Data Book (Physical Abuse, Q44 and Q45)",
        url: "https://www.dshs.texas.gov/sites/default/files/mch/pdf/2018-PRAMS-Databook.pdf",
        years: "2018 births"
      },
      rows: [
        { label: "All mothers", value: 2.4 },
        { label: "Wanted it then", value: 1.7 },
        { label: "Not sure", value: 4.3 },
        { label: "Did not want it", value: 2.9 }
      ]
    },
    {
      id: "abuse-effects",
      title: "How abuse can hurt a pregnancy",
      question:
        "Being hurt by a partner is not your fault. " +
        "But it can harm a parent and a baby. Here is what studies have found.",
      facts: [
        {
          text:
            "In Texas, 407 mothers died within one year of having a baby or losing a pregnancy, from 2016 to 2019. " +
            "60 of them were killed by another person. " +
            "(Deaths from cancer or car crashes were not counted.)",
          source: {
            name: "Texas DSHS, 2022/2023 Healthy Texas Mothers and Babies Data Book, Table B-11",
            url: "https://www.dshs.texas.gov/sites/default/files/mch/pdf/HTMB_Data_Book_2022-2023_revFeb2025.pdf"
          }
        },
        {
          text:
            "Across the U.S., being killed by another person is one of the top causes " +
            "of death while pregnant and in the year after.",
          source: {
            name: "Wallace et al., Obstetrics & Gynecology, 2021",
            url: "https://pubmed.ncbi.nlm.nih.gov/34619735/"
          }
        },
        {
          text:
            "When a partner hurts someone while they are pregnant, the baby is more likely " +
            "to be born too early. The baby is also more likely to be born too small.",
          source: {
            name: "Donovan et al., BJOG (review of 50 studies), 2016",
            url: "https://pubmed.ncbi.nlm.nih.gov/26956568/"
          }
        },
        {
          text:
            "People who were hurt by a partner before or during pregnancy were more likely " +
            "to not get enough prenatal care.",
          source: {
            name: "Cha and Masho, Journal of Interpersonal Violence, 2014",
            url: "https://pubmed.ncbi.nlm.nih.gov/24203982/"
          }
        },
        {
          text:
            "People hurt by a partner while pregnant were more likely to feel very sad " +
            "or depressed after the baby was born.",
          source: {
            name: "Howard et al., PLoS Medicine (review), 2013",
            url: "https://pubmed.ncbi.nlm.nih.gov/23723741/"
          }
        }
      ],
      rows: []
    }
  ]
};
