import type { Slide, Unit } from "./types";

export const units: Unit[] = [
  { id: "pass", label: "How you pass", short: "Pass" },
  { id: "fence", label: "The ECA line", short: "Scope" },
  { id: "triage", label: "A · Triage", short: "A" },
  { id: "decide", label: "B · Decisions", short: "B" },
  { id: "arrest", label: "R · Cardiac arrest", short: "R" },
  { id: "airway", label: "F · Airway", short: "F" },
  { id: "shock", label: "K · Shock and fluid", short: "K" },
  { id: "obs", label: "L · Obstetrics", short: "L" },
  { id: "gynae", label: "M · Gynaecology", short: "M" },
  { id: "bones", label: "C · Bones and burns", short: "C" },
  { id: "neuro", label: "D · Neurotrauma", short: "D" },
  { id: "seizure", label: "E · Seizures", short: "E" },
  { id: "pain", label: "G · Pain", short: "G" },
  { id: "lungs", label: "H · Breathing", short: "H" },
  { id: "heart", label: "I · Heart and vessels", short: "I" },
  { id: "toxins", label: "N · Toxicology", short: "N" },
  { id: "endo", label: "O · Endocrine", short: "O" },
  { id: "paeds", label: "P · Children", short: "P" },
  { id: "neo", label: "Q · Newborn", short: "Q" },
  { id: "traps", label: "Exam traps", short: "Traps" },
];

export const slides: Slide[] = [
  {
    id: "welcome",
    unit: "pass",
    kicker: "ECP150S · Higher Certificate",
    title: "This is a second-semester subject about doing the job, not collecting facts.",
    lead: "Emergency Care Practice asks you to make a plan and carry it out, inside the Emergency Care Assistant scope. The drug book is bigger than you are. The subject guide is the exam.",
    blocks: [
      {
        kind: "points",
        items: [
          "You already did Primary Emergency Care (PEC150S). This subject assumes that work is in place.",
          "It links to anatomy, emergency care skills, clinical emergency care, and rescue. They are one course wearing different names.",
          "16 credits. About 160 hours. Roughly 12 hours a week, of which about 7 are class. The other 5 are yours.",
          "Read: Nancy Caroline’s Emergency Care in the Streets, 8th edition, or the Mosby equivalent. Extra notes live on Blackboard.",
        ],
      },
      {
        kind: "callout",
        tone: "exam",
        title: "How to use this deck",
        text: "Each slide is one idea an examiner can mark. The orange boxes are pass rules or scope fences. If a drug is in the drug book but not on the ECA list, you learn the illness and you do not give the drug.",
      },
    ],
  },
  {
    id: "marks",
    unit: "pass",
    kicker: "Continuous assessment",
    title: "Fifty percent overall is not a pass.",
    lead: "You need the overall mark and two separate hurdles. Fail either hurdle and you fail the subject even if the average looks fine.",
    blocks: [
      {
        kind: "table",
        headers: ["Assessment", "Weight", "Hurdle", "2026 date"],
        rows: [
          ["Simulation 1", "20%", "None", "18 September"],
          ["Test 1", "25%", "None", "15 September"],
          ["Test 2", "30%", "50% subminimum", "2 November · remedial 16 November"],
          ["Simulation 2", "25%", "50% subminimum", "11–12 November · remedial 19 November"],
        ],
      },
      {
        kind: "callout",
        tone: "stop",
        title: "The sentence to memorise",
        text: "Pass mark = 50% overall, AND at least 50% for theory paper 2, AND at least 50% for simulation 2. Dates can move. A remedial is not a second chance after you already wrote and failed without a valid reason.",
      },
    ],
  },
  {
    id: "rules",
    unit: "pass",
    kicker: "Rules that remove marks",
    title: "Attendance and test-day rules are part of the subject.",
    lead: "The guide is blunt. Missing the rule is how people with good knowledge still fail.",
    blocks: [
      {
        kind: "pairs",
        items: [
          { k: "Theory attendance", v: "At least 80%. Sign in and sign out yourself." },
          { k: "Practical attendance", v: "100%, including nights, weekends and rescue. Without it you do not sit the practical exams." },
          { k: "Late", v: "Collect a late slip from the secretary. Miss more than half the session and you are absent." },
          { k: "Sick", v: "Original medical certificate within five working days of return. No certificate, no mark, no supplementary." },
          { k: "Test room", v: "No phone, tablet, computer or smartwatch. A real calculator only if one is required." },
          { k: "Fraud", v: "Signing for someone else is a disciplinary matter." },
        ],
      },
      {
        kind: "points",
        items: [
          "Uniform: blue cargo pants, safety boots, white embroidered shirt, reflective jacket.",
          "Lecturers: Ms R. Maritz (maritzr@cput.ac.za) and Ms M. Francis (francismu@cput.ac.za), New Education Building, Bellville. By appointment.",
          "Plagiarism, including undeclared AI text, is dealt with as academic dishonesty. Write in your own words.",
        ],
      },
    ],
  },
  {
    id: "fence-idea",
    unit: "fence",
    kicker: "HPCSA PBEC annexure, 2018",
    title: "Your scope is a column, not a vibe.",
    lead: "The drug book was written for several registers. The ECA column of the capability list decides what you may do in this course. Higher-scope drugs appear so you can recognise them and hand over.",
    blocks: [
      {
        kind: "split",
        leftTitle: "Yours",
        rightTitle: "Not yours",
        left: [
          "Arrest adrenaline and anaphylaxis adrenaline",
          "Aspirin, inhaled salbutamol, ipratropium, oxygen",
          "Lorazepam, diazepam, midazolam for seizures",
          "Adult IV dextrose, oral glucose, glucagon, thiamine",
          "Naloxone, charcoal by mouth, atropine for organophosphate",
          "IM magnesium for eclampsia",
          "Nitrous oxide and methoxyflurane",
          "Adult IV fluids, adult IO, needle decompression",
        ],
        right: [
          "Amiodarone, adenosine, GTN, morphine, fentanyl",
          "Oxytocin, furosemide, TXA, thrombolysis",
          "Intubation, RSI, surgical cric, pacing, cardioversion",
          "IV magnesium, IV salbutamol, calcium, bicarbonate",
          "Paediatric IV fluids and paediatric IV dextrose",
          "Supraglottic airway unless the patient is in arrest",
          "12-lead diagnosis and vagal manoeuvres",
          "Flumazenil for a mystery overdose",
        ],
      },
      {
        kind: "callout",
        tone: "scope",
        title: "The phrase the guide keeps using",
        text: "“Consultation or referral as contextually appropriate” means: do the ABC you are allowed to do, then get a higher practitioner or a hospital. It does not mean invent a drug.",
      },
    ],
  },
  {
    id: "fence-same-drug",
    unit: "fence",
    kicker: "Same bottle, different permission",
    title: "Several drugs are only half in your scope.",
    lead: "Examiners write the drug name and wait to see if you quote the whole monograph. Quote the line you are allowed to stand on.",
    blocks: [
      {
        kind: "table",
        headers: ["Drug", "You may", "You may not"],
        rows: [
          ["Adrenaline", "Arrest bolus. Anaphylaxis IM", "Post-ROSC infusion. Routine bradycardia infusion"],
          ["Atropine", "Organophosphate, until dry", "Bradycardia and heart block"],
          ["Magnesium", "5 g IM each buttock for eclampsia", "IV bolus, infusion, asthma dose"],
          ["Dextrose 50%", "Adult, 20 ml slowly IV", "Child and neonate IV dextrose"],
          ["Flumazenil", "Benzo you just gave", "Street overdose, tricyclic, status"],
          ["Salbutamol", "Nebulised, half dose in children", "IV tocolysis"],
          ["Lignocaine", "Local anaesthetic for adult IO", "Anti-arrhythmic infusion"],
          ["Midazolam", "Seizure dose, including IM or nasal", "Induction of anaesthesia"],
        ],
      },
    ],
  },
  {
    id: "sats-idea",
    unit: "triage",
    kicker: "Unit A",
    title: "SATS is a colour, not a gut feeling.",
    lead: "The South African Triage Scale turns vital signs into a Triage Early Warning Score, then lets a dangerous clinical sign jump the queue.",
    blocks: [
      {
        kind: "table",
        headers: ["Adult TEWS", "Colour", "Meaning"],
        rows: [
          ["0–2", "Green", "Routine, if nothing else is wrong"],
          ["3–4", "Yellow", "Urgent"],
          ["5–6", "Orange", "Very urgent"],
          ["7 or more", "Red", "Emergency"],
        ],
      },
      {
        kind: "points",
        items: [
          "An emergency sign is red even if the number is small: not breathing, obstructed airway, fitting now, unresponsive, hypoglycaemia, major uncontrolled bleeding.",
          "When two patients compete, the higher colour goes first. Same colour: the higher score, or the one who will die of a time-critical problem, goes first.",
          "Do not finish a full secondary survey on the first green patient while a red patient waits.",
          "Children use an age-specific chart. Do not force adult numbers onto a toddler.",
        ],
      },
      {
        kind: "callout",
        tone: "do",
        title: "Worked example",
        text: "Stretcher 2, respiratory rate 28 scores 2, heart rate 120 scores 2, systolic 88 scores 1, normal temperature 0, responds to voice 1, trauma 1. Total 9. That is red. A walking patient with normal signs and a sore ankle is green. The red patient is first.",
      },
    ],
  },
  {
    id: "sats-table",
    unit: "triage",
    kicker: "Unit A · adult TEWS",
    title: "The adult score, in one table.",
    lead: "Add one number from each row. There is a calculator in the Maths tab so you can drill this until it is boring.",
    blocks: [
      {
        kind: "table",
        headers: ["Measure", "2 or 3 points", "1 point", "0"],
        rows: [
          ["Mobility", "Stretcher / immobile = 2", "With help", "Walking"],
          ["Respiratory rate", "Under 9 = 2 · 21–29 = 2 · 30+ = 3", "15–20", "9–14"],
          ["Heart rate", "Under 41 = 2 · 111–129 = 2 · 130+ = 3", "41–50 or 101–110", "51–100"],
          ["Systolic BP", "Under 71 = 3 · 71–80 = 2 · 200+ = 2", "81–100", "101–199"],
          ["Temperature", "Under 35 = 2 · 38.5 or more = 2", "—", "35–38.4"],
          ["AVPU", "Pain = 2 · Unresponsive = 3", "Voice", "Alert"],
          ["Trauma", "—", "Yes", "No"],
        ],
      },
    ],
  },
  {
    id: "mims",
    unit: "triage",
    kicker: "Unit A · major incident",
    title: "MIMS is a chain of command so one loud scene does not become ten freelancers.",
    lead: "Major Incident Management System. You will be asked what each level does, and what you do when you are not the commander.",
    blocks: [
      {
        kind: "pairs",
        items: [
          { k: "Gold · strategic", v: "Off the scene. Policy, hospitals, extra ambulances, the big picture." },
          { k: "Silver · tactical", v: "On scene. Sets the plan and coordinates the sectors." },
          { k: "Bronze · operational", v: "Does the work: triage sector, treatment sector, transport sector." },
        ],
      },
      {
        kind: "steps",
        items: [
          "Do not become casualty number one. Stop, look for hazards, put PPE on.",
          "Declare it. Send METHANE: major incident, exact location, type, hazards, access, number of casualties, extra services needed.",
          "Triage first. A sieve, not a 20-minute consultation with the first person who grabs your sleeve.",
          "Tag, move, treat what saves a life inside your scope, and talk up the chain.",
          "One commander. If you are bronze, you do not redesign the incident.",
        ],
      },
    ],
  },
  {
    id: "decide",
    unit: "decide",
    kicker: "Unit B",
    title: "A decision is history plus exam plus one or two tests, then a destination.",
    lead: "The outcome is not “list the steps of a primary survey”. You already know that. It is: change the exam for this patient, fold in the test, and say whether they stay at your level.",
    blocks: [
      {
        kind: "points",
        items: [
          "Mechanism changes the exam. Ejection, a fall from height, or a pedestrian versus a car means you look for the injury you cannot see yet.",
          "Physiology changes the exam. A pregnant woman is tilted. A child crashes late. An older person shows less tachycardia for the same blood loss.",
          "Altered consciousness: you will not get the history from them. Ask the family, read the medication bag, check glucose.",
          "Tests you can actually do: glucose, saturation, end-tidal CO2, 3-lead, peak flow, blood pressure, temperature, urine dipstick in pregnancy.",
          "Refer up when the problem is outside your drugs, when they do not improve, when the colour is red, or when the clock matters (chest pain, stroke, birth, bleeding).",
        ],
      },
      {
        kind: "callout",
        tone: "exam",
        title: "A clean answer shape",
        text: "Finding, what it means, what you will do now, what you will not do because it is not your scope, and where the patient is going. Markers can tick that.",
      },
    ],
  },
  {
    id: "arrest-quality",
    unit: "arrest",
    kicker: "Unit R",
    title: "Arrest is a team drill with a metronome, not a heroic injection.",
    lead: "You must run the team, judge the quality of the CPR, and name the rhythm. Adrenaline is yours. Amiodarone is not.",
    blocks: [
      {
        kind: "pairs",
        items: [
          { k: "Rate", v: "100–120 compressions a minute." },
          { k: "Depth", v: "Adult 5–6 cm. Child about one third of the chest. Let the chest come all the way back." },
          { k: "Pauses", v: "Under 10 seconds. Change the person compressing every 2 minutes." },
          { k: "Breaths", v: "30:2 with a mask. Once an airway is in, continuous compressions and about 10 breaths a minute. Do not blast the lungs." },
          { k: "CO2", v: "A stubbornly low end-tidal CO2 means the CPR is weak or the patient is dead. A sudden rise can mean the pulse is back." },
        ],
      },
      {
        kind: "split",
        leftTitle: "Shock these",
        rightTitle: "Do not shock these",
        left: ["Ventricular fibrillation", "Pulseless ventricular tachycardia"],
        right: ["Asystole", "Pulseless electrical activity"],
      },
      {
        kind: "callout",
        tone: "do",
        title: "Roles",
        text: "One person leads. Name the jobs out loud: compressions, airway, defibrillator, drugs, time. Closed loop: “Adrenaline 1 mg given.” Shock, then straight back on the chest.",
      },
    ],
  },
  {
    id: "arrest-hs",
    unit: "arrest",
    kicker: "Unit R · why they arrested",
    title: "Hs and Ts, translated into things an ECA can touch.",
    lead: "You need the whole list in your mouth. You only treat the causes that sit inside your column.",
    blocks: [
      {
        kind: "table",
        headers: ["Cause", "What you actually do"],
        rows: [
          ["Hypovolaemia", "Stop external bleeding. Adult IV fluid. Pelvic binder if the pelvis is broken."],
          ["Hypoxia", "Open, oxygen, bag-mask. Supraglottic tube is allowed because this is an arrest."],
          ["Hydrogen ion / acidosis", "Better CPR and better ventilation. Bicarbonate is not yours."],
          ["Potassium high or low", "Recognise the story (crush, dialysis, wide bizarre rhythm). Calcium is not yours. Move."],
          ["Hypothermia", "Dry them, cover them, handle them gently. Still shock and still give arrest adrenaline."],
          ["Tension pneumothorax", "Needle decompression is in your scope for adult and child."],
          ["Tamponade", "Recognise Beck’s triad. No needle in the heart. Transport."],
          ["Toxins", "Naloxone if they are not breathing and it looks opioid. Atropine if it is organophosphate. Charcoal is not an arrest drug."],
          ["Thrombosis — heart", "Shock VF. After ROSC, aspirin if they can swallow and the story is cardiac."],
          ["Thrombosis — lungs", "Sudden collapse, clear lungs, swollen neck veins. Support and transport. No thrombolytic."],
        ],
      },
    ],
  },
  {
    id: "arrest-special",
    unit: "arrest",
    kicker: "Unit R · special situations",
    title: "Five arrests that are not a generic manikin.",
    lead: "The outcome lists drowning, pregnancy, trauma, anaphylaxis and asthma. The rhythm treatment stays. The extras change.",
    blocks: [
      {
        kind: "pairs",
        items: [
          { k: "Drowning", v: "They died of hypoxia. Ventilate early. Do not roll them to empty the stomach. Think spine if they dived." },
          { k: "Pregnancy", v: "Push the uterus to the left with a hand. Do not tip the board so far that compressions bounce off. Shock and adrenaline still happen." },
          { k: "Trauma and blood loss", v: "External bleeding off. Chest decompression if the chest is the cause. Fluids in the adult. Do not stay on scene for a medical-style 20 minutes." },
          { k: "Anaphylaxis", v: "Arrest adrenaline IV, plus the IM dose if that is all you can reach. Adult fluids. Salbutamol if the tubes are tight. Remove the trigger." },
          { k: "Asthma", v: "They trap air. Squeeze the bag slowly and let them exhale. A tension pneumothorax is possible. Needle it if the signs are there. IV magnesium is not yours." },
        ],
      },
    ],
  },
  {
    id: "airway-anatomy",
    unit: "airway",
    kicker: "Unit F",
    title: "The airway is a tube that fails in a predictable order.",
    lead: "You must describe the anatomy simply, say how a child differs, and then pick a plan. Intubation is not in the plan.",
    blocks: [
      {
        kind: "points",
        items: [
          "Air in through nose or mouth, past tongue and soft palate, through the larynx (voice box) and trachea, into bronchi.",
          "The epiglottis is the lid. The vocal cords are the narrow gate. The cricoid ring is the only complete cartilage.",
          "A child: bigger head, bigger tongue, higher and floppier larynx, narrower tube. One millimetre of swelling halves the airflow.",
          "Oxygen failure follows airway failure. Fix the hole before you discuss the gas.",
        ],
      },
      {
        kind: "split",
        leftTitle: "Hard bag-mask — MOANS",
        rightTitle: "Hard supraglottic — RODS",
        left: ["Mask seal (beard, blood, anatomy)", "Obesity or obstruction", "Age, stiff tissues", "No teeth", "Stiff lungs (asthma, oedema, pregnancy)"],
        right: ["Restricted mouth opening", "Obstruction", "Disrupted airway (trauma, tumour)", "Stiff lungs"],
      },
      {
        kind: "steps",
        items: [
          "Talk to them. A voice means the airway is open enough, for now.",
          "Position. Adult: head tilt chin lift if no spine risk. Jaw thrust if there is. Child: neutral, a pad under the shoulders, not a big pillow.",
          "Suction what you can see. Adjunct: OPA only if they have no gag. NPA if they do, unless the nose is smashed or the skull base might be open.",
          "Oxygen and a bag-mask. Two hands on the mask if the seal is bad.",
          "In arrest only, a supraglottic airway. Needle cricothyroidotomy if you truly cannot oxygenate any other way.",
        ],
      },
    ],
  },
  {
    id: "vent",
    unit: "airway",
    kicker: "Unit F · ventilation",
    title: "Ventilation is how much the chest moves, not how hard you squeeze.",
    lead: "Respiratory physiology in one breath: oxygen in, carbon dioxide out, driven by a brainstem that fails when it is tired, drunk, injured or poisoned.",
    blocks: [
      {
        kind: "points",
        items: [
          "Bag-mask: enough volume to see the chest rise. Adult rescue breath about 1 second. Too much air goes into the stomach and drops venous return.",
          "Oxygen-driven non-invasive ventilation is in your scope when they are awake, tiring, and have pulmonary oedema or a suitable respiratory failure. A mechanical ventilator NIV mode is not.",
          "Pulse oximetry is how full the blood is. End-tidal CO2 is how well they are ventilating. A high CO2 with a tiring patient is failure.",
          "Target saturation about 94% or more in most people. In known COPD, about 88–92%, so you do not remove their drive to breathe.",
          "Respiratory failure means they cannot keep oxygen up or carbon dioxide down. ARDS is inflamed, wet, stiff lungs — you support and refer, you do not diagnose it with a stethoscope alone.",
        ],
      },
    ],
  },
  {
    id: "shock-types",
    unit: "shock",
    kicker: "Unit K",
    title: "Shock is not a low blood pressure. It is cells not getting what they need.",
    lead: "The blood pressure is the last number to fall. A fast heart, cool skin, fast breathing and anxiety are the early chapter.",
    blocks: [
      {
        kind: "table",
        headers: ["Type", "The problem", "The picture"],
        rows: [
          ["Hypovolaemic", "Not enough volume", "Cool, fast, flat neck veins. Blood or fluid left the vessels."],
          ["Cardiogenic", "The pump failed", "Cool, wet lungs, swollen neck veins. Often a cardiac history."],
          ["Distributive", "The pipes dilated", "Anaphylaxis, sepsis, neurogenic. Early on they can look warm."],
          ["Obstructive", "The pump is blocked", "Tension pneumothorax, tamponade, massive clot in the lung."],
        ],
      },
      {
        kind: "points",
        items: [
          "Compensated: still a measurable pressure, but the body is spending its reserves.",
          "Decompensated: pressure falls, consciousness falls.",
          "Then organs fail. You are trying to interrupt the slide, not to normalise a chart.",
        ],
      },
    ],
  },
  {
    id: "shock-plans",
    unit: "shock",
    kicker: "Unit K · plans",
    title: "Four shock plans, each with a fence.",
    lead: "The guide wants a plan you can execute. Execution includes knowing when to stop and hand over.",
    blocks: [
      {
        kind: "pairs",
        items: [
          { k: "Hypovolaemic", v: "Bleeding off, pelvis bound, legs-up if it helps breathing, oxygen, adult IV fluid if they are an adult. Look for hidden loss: thigh, belly, chest, street. PASG is discussable, not first choice, and not on a pregnant abdomen or a wet chest." },
          { k: "Cardiogenic", v: "Sit them up. Oxygen if hypoxic. Do not pour fluid into a failed pump. No furosemide, no GTN. This is a handover." },
          { k: "Obstructive", v: "Tension: needle the chest, adult or child. Tamponade or massive pulmonary clot: recognise, oxygen, move. Do not needle a tamponade." },
          { k: "Anaphylaxis", v: "IM adrenaline first. Then oxygen, lie them flat unless they cannot breathe that way, salbutamol if wheezy, adult fluid if shocked, steroid after, glucagon if a beta-blocker is blocking the adrenaline." },
        ],
      },
      {
        kind: "callout",
        tone: "scope",
        title: "Allergy is not anaphylaxis",
        text: "A rash and an itch, with a clear airway and a normal pressure, is an allergy. Anaphylaxis is airway swelling, bronchospasm, or shock. The moment it crosses that line, adrenaline moves to the front of the plan.",
      },
    ],
  },
  {
    id: "fluids",
    unit: "shock",
    kicker: "Unit K · fluid",
    title: "Crystalloid is salty water. Know which salt.",
    lead: "You must compare the bags, calculate a drip, and match the fluid to the illness. Adult veins only for IV fluid.",
    blocks: [
      {
        kind: "table",
        headers: ["Fluid", "What is in it", "Use"],
        rows: [
          ["Isotonic saline 0.9%", "Sodium and chloride, both about 154. No potassium", "Volume. A lot of it can cause a hyperchloraemic acidosis."],
          ["Ringer’s lactate", "A bit less chloride, some potassium, calcium, lactate buffer", "Burns and bleeding. Closer to plasma."],
          ["Balsol", "A balanced South African crystalloid, with magnesium and a bicarbonate precursor", "Another plasma-like choice when that is what the truck carries."],
          ["Hypertonic saline", "Much more sodium. Pulls water out of cells", "Not your routine resuscitation bag."],
          ["Colloid", "Big molecules that stay in the vessel longer, in theory", "Not your default. Crystalloid is the prehospital workhorse."],
        ],
      },
      {
        kind: "pairs",
        items: [
          { k: "Drops per minute", v: "(millilitres × drop factor) ÷ minutes. Factors you will see: 10, 15, 20, or 60 for a micro-drip." },
          { k: "Example", v: "500 ml over 1 hour on a 20-drop set: 500 × 20 ÷ 60 = 167 drops a minute. That is a fast drip." },
          { k: "Who gets IV fluid", v: "Hypovolaemic adults, anaphylactic adults, dehydrated adults, adult burns by Parkland. Not a routine bolus for cardiogenic oedema. Not a paediatric IV infusion." },
        ],
      },
    ],
  },
  {
    id: "oedema",
    unit: "shock",
    kicker: "Unit K · lungs full of water",
    title: "Heart failure and pulmonary oedema are a backup, not a dry patient.",
    lead: "The guide parked this under shock and fluid. The mistake is to treat wet lungs like bleeding.",
    blocks: [
      {
        kind: "points",
        items: [
          "Heart failure means the pump does not move blood forward, so pressure backs up.",
          "Pulmonary oedema is fluid pushed into the alveoli. They drown from the inside: pink froth, crackles, sitting bolt upright, often a high pressure.",
          "Causes: heart attack, failed ventricle, fluid overload, kidney failure, altitude, inhaled toxins. Cardiogenic versus non-cardiogenic is the split.",
          "Your plan: sit up, legs down, oxygen to target, a 3-lead, no fluid bolus, urgent care that can give nitrates and diuretics.",
          "Furosemide is not on your list. Saying “I would give it” is an out-of-scope answer.",
        ],
      },
    ],
  },
  {
    id: "obs-normal",
    unit: "obs",
    kicker: "Unit L",
    title: "Birth is normal until it is not. Your job is to notice the change.",
    lead: "Dignity is an outcome, not a courtesy. Explain, cover, ask, and do not perform for an audience.",
    blocks: [
      {
        kind: "points",
        items: [
          "Pregnancy raises pulse and respiratory rate, drops the blood pressure a little, and lifts the diaphragm. A “normal” pressure may already be low for her.",
          "After 20 weeks the uterus compresses the vena cava when she lies flat. Tilt her, or wedge her, left side down.",
          "Booking care you should be able to list: blood pressure, urine, bloods, HIV and syphilis, rhesus, tetanus, iron, foetal growth. You are not repeating the clinic. You are asking what it found.",
          "History: dates, previous births, bleeding, headache, swelling, baby moving, waters, contractions.",
          "Exam: fundal height in centimetres roughly matches weeks from 20 to 36. Leopold’s hands tell you lie and which end is down. Listen for a foetal heart, normally 110–160.",
          "Urine protein plus a high pressure is pre-eclampsia until proved otherwise.",
        ],
      },
    ],
  },
  {
    id: "obs-birth",
    unit: "obs",
    kicker: "Unit L · the birth",
    title: "Four stages, then a baby who needs a minute of your attention.",
    lead: "Do not pull. The mother pushes. You keep the airway, the cord and the bleeding honest.",
    blocks: [
      {
        kind: "pairs",
        items: [
          { k: "First stage", v: "Regular contractions until the cervix is fully open. Comfort, fluids, any position she likes, nitrous if it suits." },
          { k: "Second stage", v: "Full dilation until the baby. Passive first, then the urge to push. Support the perineum. Check for a cord around the neck." },
          { k: "Third stage", v: "Baby out until placenta out. Normally under 30 minutes if managed actively. Do not pull on a cord that has not lengthened, and do not massage a uterus that still holds the placenta." },
          { k: "Fourth stage", v: "The first hour after the placenta. This is when she bleeds. Watch the fundus and the pad." },
        ],
      },
      {
        kind: "callout",
        tone: "stop",
        title: "Oxytocin",
        text: "Active management is: check there is no second twin, give oxytocin 10 units IM, wait for a contraction, then controlled cord traction with a hand pushing the uterus up. You must be able to describe that. You may not give the oxytocin. Twins: nobody gives it until the second baby is out.",
      },
      {
        kind: "points",
        items: [
          "Well baby: delayed cord clamp, about a minute or until the cord stops pulsing, skin to skin, dry hat, feed in the first hour.",
          "Unwell baby: clamp and cut now so you can resuscitate. APGAR at 1 minute.",
          "Nuchal cord: loose, slip it over the head. Tight, do not yank. Somersault the baby out through the loop, or clamp and cut only if the cord is stopping the birth.",
          "Meconium and a vigorous baby: no routine suction.",
        ],
      },
    ],
  },
  {
    id: "apgar",
    unit: "obs",
    kicker: "Unit L · APGAR",
    title: "Five signs, zero to two, at one minute and five.",
    lead: "Score the baby you see, not the baby you hope for. Under 7 at five minutes: keep helping and score again.",
    blocks: [
      {
        kind: "table",
        headers: ["Sign", "0", "1", "2"],
        rows: [
          ["Appearance", "Blue or pale all over", "Pink body, blue hands and feet", "Pink all over"],
          ["Pulse", "Absent", "Under 100", "100 or more"],
          ["Grimace", "Nothing", "A face, a weak response", "Cry, cough, pull away"],
          ["Activity", "Limp", "Some flexion", "Active, well flexed"],
          ["Respiration", "Absent", "Slow, irregular, weak cry", "Strong cry"],
        ],
      },
      {
        kind: "pairs",
        items: [
          { k: "7–10", v: "Reassuring. Keep warm, keep with the mother." },
          { k: "4–6", v: "Needs help. Airway, stimulation, oxygen, ventilation if they are not breathing." },
          { k: "0–3", v: "Emergency. Ventilate. Compress if the heart stays under 60 after ventilation." },
        ],
      },
    ],
  },
  {
    id: "obs-bad",
    unit: "obs",
    kicker: "Unit L · the emergencies",
    title: "Learn the picture in one line, then the action you are allowed.",
    lead: "Some of these you manage. Some you only recognise and run. Postpartum haemorrhage is both.",
    blocks: [
      {
        kind: "table",
        headers: ["Problem", "Picture", "Your move"],
        rows: [
          ["Ectopic", "Missed period, one-sided pain, shoulder tip, collapse", "Oxygen, shock care, no internal exam, theatre"],
          ["Praevia", "Painless fresh bleeding, late pregnancy", "No vaginal exam. Left side. Oxygen. Theatre-capable hospital"],
          ["Abruption", "Painful, woody uterus, dark blood, shock bigger than the blood you see", "Same. Concealed abruption can hide the blood"],
          ["Cord prolapse", "Cord at the vulva after the waters go, baby’s heart falls", "Knee-chest. Fingers hold the head off the cord. Do not put the cord back"],
          ["Breech", "Bottom or feet first", "Hands off. Let the body hang. Help the head only if it delays. Call early"],
          ["Shoulder dystocia", "Head out, turtle sign, body stuck", "Help, flat, McRoberts, suprapubic pressure. No fundal shove"],
          ["Preterm", "Labour before 37 weeks", "No IV salbutamol. Warm plan. Hospital with a nursery"],
          ["Obstructed", "Hours, no progress, exhausted, Bandl ring", "Stop telling her to push harder. Transport"],
          ["Nuchal cord", "Cord around the neck", "Slip over if loose. Do not tear it"],
        ],
      },
    ],
  },
  {
    id: "obs-bp-pph",
    unit: "obs",
    kicker: "Unit L · blood pressure and bleeding",
    title: "Pre-eclampsia kills in South Africa. So does bleeding after birth.",
    lead: "Both outcomes ask you to say why they matter here, then to prioritise a plan.",
    blocks: [
      {
        kind: "split",
        leftTitle: "Hypertension",
        rightTitle: "Postpartum haemorrhage",
        left: [
          "140/90 or more after 20 weeks, with protein or symptoms.",
          "Imminent eclampsia: headache, seeing lights, epigastric pain, brisk reflexes, clonus.",
          "Eclampsia is the seizure.",
          "Left side, quiet, oxygen, protect the airway.",
          "Your drug: magnesium 5 g IM in each buttock.",
          "If she is still seizing, a benzodiazepine, and you must be able to ventilate.",
          "Do not chase the blood pressure with nifedipine. That is not your drug.",
        ],
        right: [
          "Bleeding that shocks her, or roughly more than 500 ml.",
          "Four causes: tone, trauma, tissue, thrombin. Tone is the common one.",
          "South Africa: it is a leading killer because of delay, anaemia and no access to theatre.",
          "Placenta out, uterus soft: rub the fundus until it is a cricket ball.",
          "Baby to the breast. Oxygen. Lie her flat. Adult IV if she is shocked.",
          "Laceration: direct pressure, do not pack blindly.",
          "Inverted uterus: do not keep pulling the cord. Cover, shock care, urgent help.",
          "Oxytocin and tranexamic acid save lives and are not in your hands.",
        ],
      },
    ],
  },
  {
    id: "obs-trauma",
    unit: "obs",
    kicker: "Unit L · pregnant trauma",
    title: "Treat the mother. The baby is a passenger of her blood pressure.",
    lead: "A normal-looking pressure can still be too low. The uterus hides bleeding and compresses the big vein.",
    blocks: [
      {
        kind: "points",
        items: [
          "Tilt or manually displace the uterus after mid-pregnancy, including during spinal motion restriction.",
          "Oxygen early. External bleeding off. Adult fluids if she is shocked.",
          "Abruption can follow a seatbelt or a blow, with pain and a irritable uterus, even when the external wound looks minor.",
          "Foetal heart if you can hear it. Distress is a fast or slow rate. Explain, left side, oxygen, and a hospital that can operate.",
          "Rh-negative sensitising is a hospital problem. Do not delay transport to discuss it.",
        ],
      },
    ],
  },
  {
    id: "gynae",
    unit: "gynae",
    kicker: "Unit M",
    title: "Gynaecology here is two illnesses plus the way you behave.",
    lead: "Ovarian cyst and pelvic inflammatory disease. The marking is the picture, the abdominal-pain assessment, and whether you are safe to be in the room.",
    blocks: [
      {
        kind: "pairs",
        items: [
          { k: "Ovarian cyst", v: "Sudden one-sided lower pain, may follow sex or exercise. Rupture can cause shoulder-tip pain and shock if she bleeds. Support, do not press for sport, transport if peritoneal or pale." },
          { k: "PID", v: "Both sides, fever, discharge, pain with intercourse, a sexual history you ask for without a speech. This can become sepsis. You do not start antibiotics." },
        ],
      },
      {
        kind: "points",
        items: [
          "Ask about the last period before you decide this is “just gynae”. Ectopic lives next door.",
          "Pain: where, where to, sudden or grinding, relation to bleeding, bowel, bladder, fainting.",
          "Vitals, a look for shock, glucose only so you do not miss a collapse from sugar. No speculum exam.",
          "Privacy, a chaperone, consent before you touch the abdomen, and language that does not shame her.",
        ],
      },
    ],
  },
  {
    id: "bones",
    unit: "bones",
    kicker: "Unit C",
    title: "A fracture is a bleeding wound that happens to involve a bone.",
    lead: "The plan is the limb plus the person. Pain relief and blood loss sit inside the fracture, not after it.",
    blocks: [
      {
        kind: "split",
        leftTitle: "Closed",
        rightTitle: "Open",
        left: [
          "Skin intact.",
          "Align grossly if the pulse is gone or the limb is blue, then splint where it lies.",
          "Check pulse, colour, movement, sensation before and after.",
          "Ice, elevation if it does not worsen shock, a splint that includes the joint above and below.",
        ],
        right: [
          "Bone or a wound over the fracture talking to the outside world.",
          "Sterile wet-to-dry cover. Do not shove bone back under the skin for neatness.",
          "Align only to restore a dead pulse or to allow a splint.",
          "Higher infection and higher blood loss. Tell the hospital it is open.",
        ],
      },
      {
        kind: "points",
        items: [
          "Pain: methoxyflurane or nitrous if nothing in the contraindication list says no. Splint is a pain drug.",
          "Femur and pelvis bleed enough to kill. Pelvic binder at the trochanters. Do not rock the pelvis to “see”.",
          "Crush and rhabdomyolysis: muscle dies under a load, releases potassium and myoglobin, urine goes tea-coloured, the kidney fails and the heart arrests.",
          "Recognise it before the concrete comes off. Oxygen, pain control, adult fluid if you are running fluid, and a handover that says the word rhabdomyolysis. Calcium for the potassium is not yours.",
        ],
      },
    ],
  },
  {
    id: "burns",
    unit: "bones",
    kicker: "Unit C · burns",
    title: "Stop the burning, then count the surface, then fear the airway.",
    lead: "Electrical, thermal and chemical are not the same illness. Inhalation is the one that kills quietly.",
    blocks: [
      {
        kind: "pairs",
        items: [
          { k: "Thermal", v: "Cool running water 20 minutes. Not ice. Remove jewellery and non-stuck clothing. Cling film loosely. Warm the person while you cool the burn." },
          { k: "Chemical", v: "Brush powder off, then flood with water for a long time. Do not neutralise acid with alkali. Eyes get water from the nose side outward." },
          { k: "Electrical", v: "Scene safe, switch off. The skin wound lies about the deep burn. Rhythm on the 3-lead. Think falls and other trauma. Think rhabdomyolysis." },
          { k: "Inhalation", v: "Fire in a closed room, soot, singed nasal hair, hoarse voice, stridor. Sit up, oxygen, prepare to lose the airway, do not lie them flat for fun. This is time-critical." },
        ],
      },
      {
        kind: "callout",
        tone: "exam",
        title: "Parkland",
        text: "4 ml × body weight in kg × percent burn = millilitres in 24 hours. Half in the first 8 hours from the time of the burn, half over the next 16. Adult rule of nines: head 9, each arm 9, front of trunk 18, back 18, each leg 18, perineum 1. Use Ringer’s or a balanced crystalloid. Count only partial and full thickness, not simple redness. The Maths tab does the arithmetic.",
      },
    ],
  },
  {
    id: "tbi",
    unit: "neuro",
    kicker: "Unit D",
    title: "A brain injury is a pressure problem and an oxygen problem.",
    lead: "Swelling and blood have nowhere to go. Carbon dioxide and low oxygen make the swelling worse. Your exam is the pupils, the motor response, and the sugar.",
    blocks: [
      {
        kind: "points",
        items: [
          "AVPU or GCS, pupils (size, equal, light), which limbs move, glucose, and whether they are on a blood thinner.",
          "Airway open, oxygen to target, ventilation that does not over-breathe them into a collapsed brain perfusion. A very high CO2 dilates brain vessels.",
          "Head up about 30 degrees if the spine and the pressure allow. Collar tight enough to hurt is not a treatment — a hard collar can raise intracranial pressure.",
          "Do not pour hypotonic fluid. Adult saline if they are shocked. Look for the other injury that is actually dropping the pressure. The head injury rarely causes shock in an adult.",
          "One pupil blowing, a falling score, vomiting, seizure: this is a theatre conversation. You cannot drill the skull.",
        ],
      },
    ],
  },
  {
    id: "spine",
    unit: "neuro",
    kicker: "Unit D · spine",
    title: "Restrict the spine when the rules fail. Clear it when they all pass.",
    lead: "Cervical clearance is on the ECA list. So is justifying why you did not clear.",
    blocks: [
      {
        kind: "points",
        items: [
          "Clear only if: sober, no distracting injury, no midline neck pain, no tenderness, normal neurology, and they can rotate the neck without pain. Any doubt, restrict.",
          "Motion restriction is not “strap everyone to a board for an hour”. Boards cause sores and pain. A collar plus blocks plus a scoop, used for the move, is the idea. Log-roll as a team.",
          "Spinal shock: reflexes and tone vanish below the injury for hours to weeks. The cord is stunned.",
          "Neurogenic shock: high cord, sympathetic nerves offline. Low pressure and a slow heart. Skin warm and dry. This is the opposite of bleeding, which is fast and cold.",
          "Autonomic hyperreflexia: later, in someone who already lives with a high cord injury. A full bladder or a tight strap causes a pounding headache, flushing above the injury, and a dangerous blood pressure with a slow pulse. Remove the trigger. This is not acute spinal shock.",
        ],
      },
      {
        kind: "callout",
        tone: "exam",
        title: "The collar question",
        text: "A collar limits movement. It also raises intracranial pressure, makes airway care harder, and hurts. Use it as part of restriction when the neck is at risk. Do not use it as a decoration on a cleared patient, and do not crank it so tight that the neck veins bulge.",
      },
    ],
  },
  {
    id: "seizure",
    unit: "seizure",
    kicker: "Unit E",
    title: "Most seizures stop. Status is the one that does not.",
    lead: "Protect, time, oxygen, glucose, then a benzodiazepine if it is still going. You must be able to bag them.",
    blocks: [
      {
        kind: "points",
        items: [
          "Causes to say out loud: hypoglycaemia, hypoxia, head injury, eclampsia, meningitis, withdrawal, overdose, fever in a child, missed epilepsy tablets.",
          "First aid: nothing in the mouth, recovery position when they stop, oxygen, do not restrain the limbs hard.",
          "Status epilepticus: one seizure around 5 minutes, or repeated seizures with no recovery between. Do not wait half an hour to use the word.",
          "Refractory status: still seizing after an adequate benzodiazepine dose. Reorganise. Consult. Move. Do not keep stacking drug until they stop breathing with no plan.",
          "Lorazepam is the monograph’s preferred first-line because it lasts. Diazepam is acceptable and shorter. Midazolam if there is no vein: IM, buccal or nasal.",
          "Watch the effect of the benzo: slow breathing, a drop in pressure if you pushed it fast, and occasionally more agitation instead of sleep.",
        ],
      },
      {
        kind: "callout",
        tone: "scope",
        title: "Doses to be able to write",
        text: "Lorazepam adult 2–4 mg slowly IV, repeat 4 mg in 10 minutes, max 8 mg in 12 hours. Diazepam adult up to 5 mg per minute slowly IV, max 20 mg. Child diazepam 0.2 mg/kg, max 10 mg over 5 years and 5 mg under 5. Midazolam seizure dose 0.15 mg/kg IV or IM.",
      },
    ],
  },
  {
    id: "pain",
    unit: "pain",
    kicker: "Unit G",
    title: "Pain is a vital sign you are trusted to believe.",
    lead: "The guide’s analgesics for you are methoxyflurane and nitrous oxide, plus ice, a splint, distraction and a calm voice. Morphine is not the answer they want.",
    blocks: [
      {
        kind: "points",
        items: [
          "Pathway, simply: tissue damage releases bradykinin and prostaglandins. The nerve fires glutamate and substance P into the spinal cord. The spinothalamic tract carries it to the brain. Descending fibres using endorphins, serotonin and noradrenaline can turn the volume down.",
          "Scales: number 0–10, a visual line (VAS), words (mild, moderate, severe), Wong-Baker faces for children, FLACC for babies and people who cannot talk (face, legs, activity, cry, consolability).",
          "People get less analgesia when the provider decides their culture, race, gender, age or addiction history means they are exaggerating. That is a patient-rights failure.",
          "Penthrox: conscious, stable, trauma, self-given, up to 6 ml a day. Not a head injury, not shocked, not kidney failure.",
          "Nitrous: self-given, moderate effect, warn about nausea and odd memories. Not a pneumothorax, not a head injury, not a pressure under 90.",
        ],
      },
    ],
  },
  {
    id: "lungs",
    unit: "lungs",
    kicker: "Unit H",
    title: "Respiratory distress is a position and a cause, not just a mask.",
    lead: "Sit the people who are working hard. Differentiate the cause. Then decide if this is still a nebuliser problem or a failure problem.",
    blocks: [
      {
        kind: "table",
        headers: ["Cause", "Clues", "Lean"],
        rows: [
          ["Asthma", "Wheeze, known asthma, tight chest, long expiratory phase", "Salbutamol neb, ipratropium, oxygen to target, steroid, sit up"],
          ["COPD", "Smoker, sputum, barrel chest, hypoxic drive", "Same drugs, smaller oxygen target, 88–92%"],
          ["Pulmonary oedema", "Wet, upright, high pressure, cardiac history", "Sit up. No fluid. No furosemide. Move"],
          ["Pneumonia", "Fever, one-sided crackles, pleuritic pain", "Oxygen, position, hospital"],
          ["Tension pneumothorax", "One silent side, shock, tracheal shift is late", "Needle decompression, adult or child"],
          ["Failure / ARDS", "Tiring, rising CO2, falling oxygen, floppy speech", "Support ventilation. Refer. Do not coach them to calm down"],
        ],
      },
      {
        kind: "points",
        items: [
          "Carbon dioxide rides in the blood mostly as bicarbonate, some bound to haemoglobin, a little dissolved. That is the “transport of CO2” line.",
          "Severe or refractory asthma and COPD: if the neb is not working, you are allowed to consult and you are expected to move. Silent chest, falling consciousness and rising CO2 are peri-arrest.",
          "A wheeze can be anaphylaxis or a inhaled foreign body. Look at the story before you label it asthma.",
        ],
      },
    ],
  },
  {
    id: "heart",
    unit: "heart",
    kicker: "Units I and J",
    title: "The guide lists cardiovascular disorders twice. Learn them once.",
    lead: "Chest pain, acute coronary syndrome, the big vessels, and two impersonators: pulmonary embolism and tamponade. Your drugs are oxygen if hypoxic, and aspirin if it is cardiac.",
    blocks: [
      {
        kind: "points",
        items: [
          "Chest pain causes worth saying: heart muscle starved of blood, aortic dissection, pulmonary clot, pneumothorax, oesophageal tear, muscle and reflux. Reflux is what you call it after the dangerous ones are impossible, not before.",
          "Framework: onset, what provoked it, quality, radiation, severity, time, plus nausea, sweat, breathlessness, and risk (diabetes, smoking, pressure, family, cocaine).",
          "ACS: recognise it and refer. Aspirin 150–300 mg chewed if they are awake, not allergic, not bleeding, not a child, not pregnant.",
          "A normal 3-lead does not clear ACS. You cannot perform or diagnose a 12-lead on this scope. Say that limitation out loud in the exam.",
          "GTN and morphine are not yours. Do not add them to look thorough.",
        ],
      },
    ],
  },
  {
    id: "vessels",
    unit: "heart",
    kicker: "Units I and J · the others",
    title: "Four illnesses that look like chest pain and are not a stent you can offer.",
    lead: "Your plan for all four is the same shape: see it, do not make it worse, support, go.",
    blocks: [
      {
        kind: "pairs",
        items: [
          { k: "Aortic dissection", v: "Sudden tearing pain to the back, unequal pulses or pressures, neurological deficit, collapse. Aspirin can harm. Do not call it indigestion." },
          { k: "Aneurysm", v: "Abdominal aortic: back or flank pain, a pulsatile mass, shock. Do not press it. This is bleeding until proved otherwise." },
          { k: "Pulmonary embolism", v: "Sudden breathlessness, clear lungs, pleuritic pain, risk of clot, sometimes haemoptysis. Oxygen. Not a needle decompression." },
          { k: "Tamponade", v: "Muffled heart sounds, low pressure, distended neck veins. Trauma or cancer. Distinguish from tension, where the breath sounds are the clue." },
        ],
      },
    ],
  },
  {
    id: "tox-pictures",
    unit: "toxins",
    kicker: "Unit N",
    title: "A toxidrome is a pattern. Name the pattern before you reach for a vial.",
    lead: "The guide’s list is organophosphate, methamphetamine, cocaine, snake, scorpion, hydrocarbon, benzodiazepine, opioid.",
    blocks: [
      {
        kind: "table",
        headers: ["Pattern", "Looks like", "Your drug, if any"],
        rows: [
          ["Organophosphate", "Wet, small pupils, slow heart, weak, seizing. SLUDGE", "Atropine until the chest dries. No charcoal"],
          ["Opioid", "Slow breathing, pinpoint pupils, low consciousness", "Ventilate, then naloxone titrated to breathing"],
          ["Benzodiazepine", "Sleepy, normal-ish pupils, low breathing", "Airway. Flumazenil only if you gave the benzo"],
          ["Meth / cocaine", "Hot, fast, agitated, big pupils, chest pain", "Cool, calm, benzo if they seize, aspirin only if it is clearly cardiac and safe"],
          ["Snake", "Pain, swelling, bleeding or paralysis depending on the snake", "Immobilise, mark the swelling, no cut, no suction, no tight tourniquet. Antivenom is hospital"],
          ["Scorpion", "Severe local pain, sometimes autonomic storm", "Pain control if they qualify, supportive, refer"],
          ["Hydrocarbon", "Cough after a sip of paraffin, chemical pneumonia", "Do not vomit. Do not give charcoal. Oxygen. Watch the chest"],
        ],
      },
    ],
  },
  {
    id: "tox-rules",
    unit: "toxins",
    kicker: "Unit N · rules",
    title: "Three antidotes with a trap in each.",
    lead: "Charcoal, atropine, naloxone, flumazenil. The trap is giving them to the wrong patient.",
    blocks: [
      {
        kind: "points",
        items: [
          "Charcoal: 0.5–1 g/kg by mouth, awake patient, within about an hour, and not for iron, fuel, alcohol, lithium, acids, alkalis, cyanide or organophosphate.",
          "Atropine: poisoning only. Adult 0.5–2.5 mg IV every 4 minutes. Child 0.02 mg/kg. The endpoint is less secretion, not a heart rate of 140.",
          "Naloxone: adult 0.4 mg slowly IV every 5 minutes up to 2 mg. Child 0.1 mg/kg. Not to fully wake them. Not to the baby of a dependent mother.",
          "Flumazenil: adult 0.2 mg then 0.1 mg doses, max 1 mg. Only iatrogenic. Never a diagnostic toy in coma.",
          "Glucagon is also on the antidote page for beta-blocker and calcium-channel overdose. Know it exists. The firm ECA uses are hypoglycaemia and adrenaline-resistant anaphylaxis.",
        ],
      },
    ],
  },
  {
    id: "endo",
    unit: "endo",
    kicker: "Unit O",
    title: "Sugar is the endocrine emergency you can fix. The thyroid ones you recognise.",
    lead: "Hypoglycaemia has a drug. DKA, hyperosmolar states, myxoedema coma and thyroid storm have a hospital.",
    blocks: [
      {
        kind: "pairs",
        items: [
          { k: "Hypoglycaemia", v: "Under 3.5 mmol/L and symptomatic, or collapsed and you suspect it. Awake: oral glucose 25 g. Adult unconscious: thiamine if they might be deficient, then 20 ml of 50% dextrose slowly IV, repeat while still low. No vein, or a child: glucagon." },
          { k: "DKA", v: "Known diabetes, deep sighing breathing, sweet breath, dry, abdominal pain, glucose high. They are acidotic. Adult fluid only if shocked and you understand you are not the ICU. Refer." },
          { k: "HHS", v: "Older, type 2, incredibly high glucose, very dry, little ketones, confused. Same idea: support and refer. Do not slam insulin. You do not carry it as a treatment plan here." },
          { k: "Myxoedema coma", v: "Low thyroid, hypothermic, slow, puffy, hyponatraemic-looking. Warm gently, airway, refer." },
          { k: "Thyroid storm", v: "Hot, fast, agitated, heart failure, often after illness or surgery in someone with hyperthyroidism. Cool, oxygen, refer." },
        ],
      },
    ],
  },
  {
    id: "paeds",
    unit: "paeds",
    kicker: "Unit P",
    title: "A child compensates, then falls off a cliff.",
    lead: "Bigger head, smaller airway, less blood, faster metabolism, more surface to lose heat from. The vital-sign table is not optional.",
    blocks: [
      {
        kind: "table",
        headers: ["Age", "Pulse", "Breaths", "Systolic, roughly"],
        rows: [
          ["Newborn", "120–160", "40–60", "60–80"],
          ["Infant", "100–160", "30–50", "70–90"],
          ["1–5 years", "80–140", "20–30", "80–100"],
          ["6–12 years", "70–120", "15–25", "90–110"],
        ],
      },
      {
        kind: "points",
        items: [
          "History from the caregiver. Exam toe-to-head if they are scared, so the airway is not the first fight.",
          "South African list to recognise: dehydration and gastroenteritis, sepsis, croup, tuberculosis, HIV, hypoxia, shock, hypoglycaemia, fever and febrile seizure, trauma, drowning.",
          "Croup: bark, hoarse, better sitting. Foreign body: sudden, no fever. Epiglottitis is rare and toxic — do not look in the throat.",
          "Dehydration: oral rehydration in small frequent sips. That is your fluid skill. IV paediatric fluid is not.",
          "Weight estimate for doses, 1–10 years: (age in years + 4) × 2. Confirm with a colour tape if you have one.",
          "Oxygen you may give and calculate. Drug doses are weight-based and you halve nebulised salbutamol.",
        ],
      },
      {
        kind: "callout",
        tone: "scope",
        title: "Emotional care is in the outcome",
        text: "Get down to their eye line, keep a parent touching them, say what you are about to do, and do the painful thing once. A fighting child is a desaturating child.",
      },
    ],
  },
  {
    id: "neo",
    unit: "neo",
    kicker: "Unit Q",
    title: "A newborn loses heat, sugar and oxygen in that order of silence.",
    lead: "Dry, stimulate, skin to skin. Most “resuscitation” is a clear airway and a few good breaths.",
    blocks: [
      {
        kind: "steps",
        items: [
          "Clock starts at birth. Dry, discard the wet towel, hat, skin to skin if they are vigorous.",
          "Assess breathing and heart rate. A good cry and a rate over 100: leave them with the mother.",
          "Not breathing: neutral head position, a small roll under the shoulders, five inflation breaths that move the chest, then ventilate about 40–60 a minute.",
          "Heart rate staying under 60 despite ventilation that moves the chest: compressions, three compressions to one breath.",
          "Oxygen you can give. IV dextrose you cannot. Glucagon or a feed once they are stable enough, and a nursery.",
          "Meconium and floppy: start ventilation. Suction only if the airway is blocked. Do not delay breaths for a ritual.",
        ],
      },
      {
        kind: "pairs",
        items: [
          { k: "Keep warm", v: "Dry, hat, skin to skin, or an incubator in the ambulance. Kangaroo mother care: upright between the breasts, airway open, blanket over both." },
          { k: "Blue baby", v: "Heart disease, lung disease, meconium, hypothermia, sepsis, persistent pulmonary hypertension, methaemoglobin. You do not need to pick the lesion. You need oxygen, warmth, ventilation if they need it, and a hospital." },
          { k: "The illnesses", v: "Dehydration, respiratory distress, hypothermia, hypoglycaemia, hypoxia. Small reserves. They look fine, then they do not." },
        ],
      },
    ],
  },
  {
    id: "traps",
    unit: "traps",
    kicker: "Before you walk into the sim",
    title: "The mistakes that fail a competent student.",
    lead: "Simulation 2 and Test 2 are the hurdles. They will offer you a drug you have seen in the drug book and wait.",
    blocks: [
      {
        kind: "points",
        items: [
          "Giving oxytocin, GTN, morphine, amiodarone, furosemide or paediatric IV dextrose because the scenario felt advanced.",
          "Quoting a 3-lead as “no STEMI”.",
          "Massaging a uterus that still contains a placenta, or pulling a cord.",
          "Suctioning a crying baby because there was meconium.",
          "Waking an opioid overdose all the way up with a full ampoule of naloxone.",
          "Flumazenil in a mystery coma.",
          "Charcoal in paraffin or organophosphate.",
          "Calling spinal shock and neurogenic shock the same thing.",
          "Parkland timed from when you met the patient, not from the burn.",
          "Forgetting the two 50% hurdles and doing all your study for test 1.",
        ],
      },
      {
        kind: "callout",
        tone: "do",
        title: "A last line you can say in any sim",
        text: "Airway, breathing, circulation, the one drug I am allowed, the one drug I am not, and the hospital that can finish the job. Then do the thing with your hands.",
      },
    ],
  },
];
