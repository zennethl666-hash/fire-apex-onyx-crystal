import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as GraduationCap, c as ChevronLeft, i as ListChecks, l as Calculator, n as ShieldCheck, o as Download, r as Pill, s as ChevronRight, t as TriangleAlert, u as BookOpen } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DWe_aYvI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var units = [
	{
		id: "pass",
		label: "How you pass",
		short: "Pass"
	},
	{
		id: "fence",
		label: "The ECA line",
		short: "Scope"
	},
	{
		id: "triage",
		label: "A · Triage",
		short: "A"
	},
	{
		id: "decide",
		label: "B · Decisions",
		short: "B"
	},
	{
		id: "arrest",
		label: "R · Cardiac arrest",
		short: "R"
	},
	{
		id: "airway",
		label: "F · Airway",
		short: "F"
	},
	{
		id: "shock",
		label: "K · Shock and fluid",
		short: "K"
	},
	{
		id: "obs",
		label: "L · Obstetrics",
		short: "L"
	},
	{
		id: "gynae",
		label: "M · Gynaecology",
		short: "M"
	},
	{
		id: "bones",
		label: "C · Bones and burns",
		short: "C"
	},
	{
		id: "neuro",
		label: "D · Neurotrauma",
		short: "D"
	},
	{
		id: "seizure",
		label: "E · Seizures",
		short: "E"
	},
	{
		id: "pain",
		label: "G · Pain",
		short: "G"
	},
	{
		id: "lungs",
		label: "H · Breathing",
		short: "H"
	},
	{
		id: "heart",
		label: "I · Heart and vessels",
		short: "I"
	},
	{
		id: "toxins",
		label: "N · Toxicology",
		short: "N"
	},
	{
		id: "endo",
		label: "O · Endocrine",
		short: "O"
	},
	{
		id: "paeds",
		label: "P · Children",
		short: "P"
	},
	{
		id: "neo",
		label: "Q · Newborn",
		short: "Q"
	},
	{
		id: "traps",
		label: "Exam traps",
		short: "Traps"
	}
];
var slides = [
	{
		id: "welcome",
		unit: "pass",
		kicker: "ECP150S · Higher Certificate",
		title: "This is a second-semester subject about doing the job, not collecting facts.",
		lead: "Emergency Care Practice asks you to make a plan and carry it out, inside the Emergency Care Assistant scope. The drug book is bigger than you are. The subject guide is the exam.",
		blocks: [{
			kind: "points",
			items: [
				"You already did Primary Emergency Care (PEC150S). This subject assumes that work is in place.",
				"It links to anatomy, emergency care skills, clinical emergency care, and rescue. They are one course wearing different names.",
				"16 credits. About 160 hours. Roughly 12 hours a week, of which about 7 are class. The other 5 are yours.",
				"Read: Nancy Caroline’s Emergency Care in the Streets, 8th edition, or the Mosby equivalent. Extra notes live on Blackboard."
			]
		}, {
			kind: "callout",
			tone: "exam",
			title: "How to use this deck",
			text: "Each slide is one idea an examiner can mark. The orange boxes are pass rules or scope fences. If a drug is in the drug book but not on the ECA list, you learn the illness and you do not give the drug."
		}]
	},
	{
		id: "marks",
		unit: "pass",
		kicker: "Continuous assessment",
		title: "Fifty percent overall is not a pass.",
		lead: "You need the overall mark and two separate hurdles. Fail either hurdle and you fail the subject even if the average looks fine.",
		blocks: [{
			kind: "table",
			headers: [
				"Assessment",
				"Weight",
				"Hurdle",
				"2026 date"
			],
			rows: [
				[
					"Simulation 1",
					"20%",
					"None",
					"18 September"
				],
				[
					"Test 1",
					"25%",
					"None",
					"15 September"
				],
				[
					"Test 2",
					"30%",
					"50% subminimum",
					"2 November · remedial 16 November"
				],
				[
					"Simulation 2",
					"25%",
					"50% subminimum",
					"11–12 November · remedial 19 November"
				]
			]
		}, {
			kind: "callout",
			tone: "stop",
			title: "The sentence to memorise",
			text: "Pass mark = 50% overall, AND at least 50% for theory paper 2, AND at least 50% for simulation 2. Dates can move. A remedial is not a second chance after you already wrote and failed without a valid reason."
		}]
	},
	{
		id: "rules",
		unit: "pass",
		kicker: "Rules that remove marks",
		title: "Attendance and test-day rules are part of the subject.",
		lead: "The guide is blunt. Missing the rule is how people with good knowledge still fail.",
		blocks: [{
			kind: "pairs",
			items: [
				{
					k: "Theory attendance",
					v: "At least 80%. Sign in and sign out yourself."
				},
				{
					k: "Practical attendance",
					v: "100%, including nights, weekends and rescue. Without it you do not sit the practical exams."
				},
				{
					k: "Late",
					v: "Collect a late slip from the secretary. Miss more than half the session and you are absent."
				},
				{
					k: "Sick",
					v: "Original medical certificate within five working days of return. No certificate, no mark, no supplementary."
				},
				{
					k: "Test room",
					v: "No phone, tablet, computer or smartwatch. A real calculator only if one is required."
				},
				{
					k: "Fraud",
					v: "Signing for someone else is a disciplinary matter."
				}
			]
		}, {
			kind: "points",
			items: [
				"Uniform: blue cargo pants, safety boots, white embroidered shirt, reflective jacket.",
				"Lecturers: Ms R. Maritz (maritzr@cput.ac.za) and Ms M. Francis (francismu@cput.ac.za), New Education Building, Bellville. By appointment.",
				"Plagiarism, including undeclared AI text, is dealt with as academic dishonesty. Write in your own words."
			]
		}]
	},
	{
		id: "fence-idea",
		unit: "fence",
		kicker: "HPCSA PBEC annexure, 2018",
		title: "Your scope is a column, not a vibe.",
		lead: "The drug book was written for several registers. The ECA column of the capability list decides what you may do in this course. Higher-scope drugs appear so you can recognise them and hand over.",
		blocks: [{
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
				"Adult IV fluids, adult IO, needle decompression"
			],
			right: [
				"Amiodarone, adenosine, GTN, morphine, fentanyl",
				"Oxytocin, furosemide, TXA, thrombolysis",
				"Intubation, RSI, surgical cric, pacing, cardioversion",
				"IV magnesium, IV salbutamol, calcium, bicarbonate",
				"Paediatric IV fluids and paediatric IV dextrose",
				"Supraglottic airway unless the patient is in arrest",
				"12-lead diagnosis and vagal manoeuvres",
				"Flumazenil for a mystery overdose"
			]
		}, {
			kind: "callout",
			tone: "scope",
			title: "The phrase the guide keeps using",
			text: "“Consultation or referral as contextually appropriate” means: do the ABC you are allowed to do, then get a higher practitioner or a hospital. It does not mean invent a drug."
		}]
	},
	{
		id: "fence-same-drug",
		unit: "fence",
		kicker: "Same bottle, different permission",
		title: "Several drugs are only half in your scope.",
		lead: "Examiners write the drug name and wait to see if you quote the whole monograph. Quote the line you are allowed to stand on.",
		blocks: [{
			kind: "table",
			headers: [
				"Drug",
				"You may",
				"You may not"
			],
			rows: [
				[
					"Adrenaline",
					"Arrest bolus. Anaphylaxis IM",
					"Post-ROSC infusion. Routine bradycardia infusion"
				],
				[
					"Atropine",
					"Organophosphate, until dry",
					"Bradycardia and heart block"
				],
				[
					"Magnesium",
					"5 g IM each buttock for eclampsia",
					"IV bolus, infusion, asthma dose"
				],
				[
					"Dextrose 50%",
					"Adult, 20 ml slowly IV",
					"Child and neonate IV dextrose"
				],
				[
					"Flumazenil",
					"Benzo you just gave",
					"Street overdose, tricyclic, status"
				],
				[
					"Salbutamol",
					"Nebulised, half dose in children",
					"IV tocolysis"
				],
				[
					"Lignocaine",
					"Local anaesthetic for adult IO",
					"Anti-arrhythmic infusion"
				],
				[
					"Midazolam",
					"Seizure dose, including IM or nasal",
					"Induction of anaesthesia"
				]
			]
		}]
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
				headers: [
					"Adult TEWS",
					"Colour",
					"Meaning"
				],
				rows: [
					[
						"0–2",
						"Green",
						"Routine, if nothing else is wrong"
					],
					[
						"3–4",
						"Yellow",
						"Urgent"
					],
					[
						"5–6",
						"Orange",
						"Very urgent"
					],
					[
						"7 or more",
						"Red",
						"Emergency"
					]
				]
			},
			{
				kind: "points",
				items: [
					"An emergency sign is red even if the number is small: not breathing, obstructed airway, fitting now, unresponsive, hypoglycaemia, major uncontrolled bleeding.",
					"When two patients compete, the higher colour goes first. Same colour: the higher score, or the one who will die of a time-critical problem, goes first.",
					"Do not finish a full secondary survey on the first green patient while a red patient waits.",
					"Children use an age-specific chart. Do not force adult numbers onto a toddler."
				]
			},
			{
				kind: "callout",
				tone: "do",
				title: "Worked example",
				text: "Stretcher 2, respiratory rate 28 scores 2, heart rate 120 scores 2, systolic 88 scores 1, normal temperature 0, responds to voice 1, trauma 1. Total 9. That is red. A walking patient with normal signs and a sore ankle is green. The red patient is first."
			}
		]
	},
	{
		id: "sats-table",
		unit: "triage",
		kicker: "Unit A · adult TEWS",
		title: "The adult score, in one table.",
		lead: "Add one number from each row. There is a calculator in the Maths tab so you can drill this until it is boring.",
		blocks: [{
			kind: "table",
			headers: [
				"Measure",
				"2 or 3 points",
				"1 point",
				"0"
			],
			rows: [
				[
					"Mobility",
					"Stretcher / immobile = 2",
					"With help",
					"Walking"
				],
				[
					"Respiratory rate",
					"Under 9 = 2 · 21–29 = 2 · 30+ = 3",
					"15–20",
					"9–14"
				],
				[
					"Heart rate",
					"Under 41 = 2 · 111–129 = 2 · 130+ = 3",
					"41–50 or 101–110",
					"51–100"
				],
				[
					"Systolic BP",
					"Under 71 = 3 · 71–80 = 2 · 200+ = 2",
					"81–100",
					"101–199"
				],
				[
					"Temperature",
					"Under 35 = 2 · 38.5 or more = 2",
					"—",
					"35–38.4"
				],
				[
					"AVPU",
					"Pain = 2 · Unresponsive = 3",
					"Voice",
					"Alert"
				],
				[
					"Trauma",
					"—",
					"Yes",
					"No"
				]
			]
		}]
	},
	{
		id: "mims",
		unit: "triage",
		kicker: "Unit A · major incident",
		title: "MIMS is a chain of command so one loud scene does not become ten freelancers.",
		lead: "Major Incident Management System. You will be asked what each level does, and what you do when you are not the commander.",
		blocks: [{
			kind: "pairs",
			items: [
				{
					k: "Gold · strategic",
					v: "Off the scene. Policy, hospitals, extra ambulances, the big picture."
				},
				{
					k: "Silver · tactical",
					v: "On scene. Sets the plan and coordinates the sectors."
				},
				{
					k: "Bronze · operational",
					v: "Does the work: triage sector, treatment sector, transport sector."
				}
			]
		}, {
			kind: "steps",
			items: [
				"Do not become casualty number one. Stop, look for hazards, put PPE on.",
				"Declare it. Send METHANE: major incident, exact location, type, hazards, access, number of casualties, extra services needed.",
				"Triage first. A sieve, not a 20-minute consultation with the first person who grabs your sleeve.",
				"Tag, move, treat what saves a life inside your scope, and talk up the chain.",
				"One commander. If you are bronze, you do not redesign the incident."
			]
		}]
	},
	{
		id: "decide",
		unit: "decide",
		kicker: "Unit B",
		title: "A decision is history plus exam plus one or two tests, then a destination.",
		lead: "The outcome is not “list the steps of a primary survey”. You already know that. It is: change the exam for this patient, fold in the test, and say whether they stay at your level.",
		blocks: [{
			kind: "points",
			items: [
				"Mechanism changes the exam. Ejection, a fall from height, or a pedestrian versus a car means you look for the injury you cannot see yet.",
				"Physiology changes the exam. A pregnant woman is tilted. A child crashes late. An older person shows less tachycardia for the same blood loss.",
				"Altered consciousness: you will not get the history from them. Ask the family, read the medication bag, check glucose.",
				"Tests you can actually do: glucose, saturation, end-tidal CO2, 3-lead, peak flow, blood pressure, temperature, urine dipstick in pregnancy.",
				"Refer up when the problem is outside your drugs, when they do not improve, when the colour is red, or when the clock matters (chest pain, stroke, birth, bleeding)."
			]
		}, {
			kind: "callout",
			tone: "exam",
			title: "A clean answer shape",
			text: "Finding, what it means, what you will do now, what you will not do because it is not your scope, and where the patient is going. Markers can tick that."
		}]
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
					{
						k: "Rate",
						v: "100–120 compressions a minute."
					},
					{
						k: "Depth",
						v: "Adult 5–6 cm. Child about one third of the chest. Let the chest come all the way back."
					},
					{
						k: "Pauses",
						v: "Under 10 seconds. Change the person compressing every 2 minutes."
					},
					{
						k: "Breaths",
						v: "30:2 with a mask. Once an airway is in, continuous compressions and about 10 breaths a minute. Do not blast the lungs."
					},
					{
						k: "CO2",
						v: "A stubbornly low end-tidal CO2 means the CPR is weak or the patient is dead. A sudden rise can mean the pulse is back."
					}
				]
			},
			{
				kind: "split",
				leftTitle: "Shock these",
				rightTitle: "Do not shock these",
				left: ["Ventricular fibrillation", "Pulseless ventricular tachycardia"],
				right: ["Asystole", "Pulseless electrical activity"]
			},
			{
				kind: "callout",
				tone: "do",
				title: "Roles",
				text: "One person leads. Name the jobs out loud: compressions, airway, defibrillator, drugs, time. Closed loop: “Adrenaline 1 mg given.” Shock, then straight back on the chest."
			}
		]
	},
	{
		id: "arrest-hs",
		unit: "arrest",
		kicker: "Unit R · why they arrested",
		title: "Hs and Ts, translated into things an ECA can touch.",
		lead: "You need the whole list in your mouth. You only treat the causes that sit inside your column.",
		blocks: [{
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
				["Thrombosis — lungs", "Sudden collapse, clear lungs, swollen neck veins. Support and transport. No thrombolytic."]
			]
		}]
	},
	{
		id: "arrest-special",
		unit: "arrest",
		kicker: "Unit R · special situations",
		title: "Five arrests that are not a generic manikin.",
		lead: "The outcome lists drowning, pregnancy, trauma, anaphylaxis and asthma. The rhythm treatment stays. The extras change.",
		blocks: [{
			kind: "pairs",
			items: [
				{
					k: "Drowning",
					v: "They died of hypoxia. Ventilate early. Do not roll them to empty the stomach. Think spine if they dived."
				},
				{
					k: "Pregnancy",
					v: "Push the uterus to the left with a hand. Do not tip the board so far that compressions bounce off. Shock and adrenaline still happen."
				},
				{
					k: "Trauma and blood loss",
					v: "External bleeding off. Chest decompression if the chest is the cause. Fluids in the adult. Do not stay on scene for a medical-style 20 minutes."
				},
				{
					k: "Anaphylaxis",
					v: "Arrest adrenaline IV, plus the IM dose if that is all you can reach. Adult fluids. Salbutamol if the tubes are tight. Remove the trigger."
				},
				{
					k: "Asthma",
					v: "They trap air. Squeeze the bag slowly and let them exhale. A tension pneumothorax is possible. Needle it if the signs are there. IV magnesium is not yours."
				}
			]
		}]
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
					"Oxygen failure follows airway failure. Fix the hole before you discuss the gas."
				]
			},
			{
				kind: "split",
				leftTitle: "Hard bag-mask — MOANS",
				rightTitle: "Hard supraglottic — RODS",
				left: [
					"Mask seal (beard, blood, anatomy)",
					"Obesity or obstruction",
					"Age, stiff tissues",
					"No teeth",
					"Stiff lungs (asthma, oedema, pregnancy)"
				],
				right: [
					"Restricted mouth opening",
					"Obstruction",
					"Disrupted airway (trauma, tumour)",
					"Stiff lungs"
				]
			},
			{
				kind: "steps",
				items: [
					"Talk to them. A voice means the airway is open enough, for now.",
					"Position. Adult: head tilt chin lift if no spine risk. Jaw thrust if there is. Child: neutral, a pad under the shoulders, not a big pillow.",
					"Suction what you can see. Adjunct: OPA only if they have no gag. NPA if they do, unless the nose is smashed or the skull base might be open.",
					"Oxygen and a bag-mask. Two hands on the mask if the seal is bad.",
					"In arrest only, a supraglottic airway. Needle cricothyroidotomy if you truly cannot oxygenate any other way."
				]
			}
		]
	},
	{
		id: "vent",
		unit: "airway",
		kicker: "Unit F · ventilation",
		title: "Ventilation is how much the chest moves, not how hard you squeeze.",
		lead: "Respiratory physiology in one breath: oxygen in, carbon dioxide out, driven by a brainstem that fails when it is tired, drunk, injured or poisoned.",
		blocks: [{
			kind: "points",
			items: [
				"Bag-mask: enough volume to see the chest rise. Adult rescue breath about 1 second. Too much air goes into the stomach and drops venous return.",
				"Oxygen-driven non-invasive ventilation is in your scope when they are awake, tiring, and have pulmonary oedema or a suitable respiratory failure. A mechanical ventilator NIV mode is not.",
				"Pulse oximetry is how full the blood is. End-tidal CO2 is how well they are ventilating. A high CO2 with a tiring patient is failure.",
				"Target saturation about 94% or more in most people. In known COPD, about 88–92%, so you do not remove their drive to breathe.",
				"Respiratory failure means they cannot keep oxygen up or carbon dioxide down. ARDS is inflamed, wet, stiff lungs — you support and refer, you do not diagnose it with a stethoscope alone."
			]
		}]
	},
	{
		id: "shock-types",
		unit: "shock",
		kicker: "Unit K",
		title: "Shock is not a low blood pressure. It is cells not getting what they need.",
		lead: "The blood pressure is the last number to fall. A fast heart, cool skin, fast breathing and anxiety are the early chapter.",
		blocks: [{
			kind: "table",
			headers: [
				"Type",
				"The problem",
				"The picture"
			],
			rows: [
				[
					"Hypovolaemic",
					"Not enough volume",
					"Cool, fast, flat neck veins. Blood or fluid left the vessels."
				],
				[
					"Cardiogenic",
					"The pump failed",
					"Cool, wet lungs, swollen neck veins. Often a cardiac history."
				],
				[
					"Distributive",
					"The pipes dilated",
					"Anaphylaxis, sepsis, neurogenic. Early on they can look warm."
				],
				[
					"Obstructive",
					"The pump is blocked",
					"Tension pneumothorax, tamponade, massive clot in the lung."
				]
			]
		}, {
			kind: "points",
			items: [
				"Compensated: still a measurable pressure, but the body is spending its reserves.",
				"Decompensated: pressure falls, consciousness falls.",
				"Then organs fail. You are trying to interrupt the slide, not to normalise a chart."
			]
		}]
	},
	{
		id: "shock-plans",
		unit: "shock",
		kicker: "Unit K · plans",
		title: "Four shock plans, each with a fence.",
		lead: "The guide wants a plan you can execute. Execution includes knowing when to stop and hand over.",
		blocks: [{
			kind: "pairs",
			items: [
				{
					k: "Hypovolaemic",
					v: "Bleeding off, pelvis bound, legs-up if it helps breathing, oxygen, adult IV fluid if they are an adult. Look for hidden loss: thigh, belly, chest, street. PASG is discussable, not first choice, and not on a pregnant abdomen or a wet chest."
				},
				{
					k: "Cardiogenic",
					v: "Sit them up. Oxygen if hypoxic. Do not pour fluid into a failed pump. No furosemide, no GTN. This is a handover."
				},
				{
					k: "Obstructive",
					v: "Tension: needle the chest, adult or child. Tamponade or massive pulmonary clot: recognise, oxygen, move. Do not needle a tamponade."
				},
				{
					k: "Anaphylaxis",
					v: "IM adrenaline first. Then oxygen, lie them flat unless they cannot breathe that way, salbutamol if wheezy, adult fluid if shocked, steroid after, glucagon if a beta-blocker is blocking the adrenaline."
				}
			]
		}, {
			kind: "callout",
			tone: "scope",
			title: "Allergy is not anaphylaxis",
			text: "A rash and an itch, with a clear airway and a normal pressure, is an allergy. Anaphylaxis is airway swelling, bronchospasm, or shock. The moment it crosses that line, adrenaline moves to the front of the plan."
		}]
	},
	{
		id: "fluids",
		unit: "shock",
		kicker: "Unit K · fluid",
		title: "Crystalloid is salty water. Know which salt.",
		lead: "You must compare the bags, calculate a drip, and match the fluid to the illness. Adult veins only for IV fluid.",
		blocks: [{
			kind: "table",
			headers: [
				"Fluid",
				"What is in it",
				"Use"
			],
			rows: [
				[
					"Isotonic saline 0.9%",
					"Sodium and chloride, both about 154. No potassium",
					"Volume. A lot of it can cause a hyperchloraemic acidosis."
				],
				[
					"Ringer’s lactate",
					"A bit less chloride, some potassium, calcium, lactate buffer",
					"Burns and bleeding. Closer to plasma."
				],
				[
					"Balsol",
					"A balanced South African crystalloid, with magnesium and a bicarbonate precursor",
					"Another plasma-like choice when that is what the truck carries."
				],
				[
					"Hypertonic saline",
					"Much more sodium. Pulls water out of cells",
					"Not your routine resuscitation bag."
				],
				[
					"Colloid",
					"Big molecules that stay in the vessel longer, in theory",
					"Not your default. Crystalloid is the prehospital workhorse."
				]
			]
		}, {
			kind: "pairs",
			items: [
				{
					k: "Drops per minute",
					v: "(millilitres × drop factor) ÷ minutes. Factors you will see: 10, 15, 20, or 60 for a micro-drip."
				},
				{
					k: "Example",
					v: "500 ml over 1 hour on a 20-drop set: 500 × 20 ÷ 60 = 167 drops a minute. That is a fast drip."
				},
				{
					k: "Who gets IV fluid",
					v: "Hypovolaemic adults, anaphylactic adults, dehydrated adults, adult burns by Parkland. Not a routine bolus for cardiogenic oedema. Not a paediatric IV infusion."
				}
			]
		}]
	},
	{
		id: "oedema",
		unit: "shock",
		kicker: "Unit K · lungs full of water",
		title: "Heart failure and pulmonary oedema are a backup, not a dry patient.",
		lead: "The guide parked this under shock and fluid. The mistake is to treat wet lungs like bleeding.",
		blocks: [{
			kind: "points",
			items: [
				"Heart failure means the pump does not move blood forward, so pressure backs up.",
				"Pulmonary oedema is fluid pushed into the alveoli. They drown from the inside: pink froth, crackles, sitting bolt upright, often a high pressure.",
				"Causes: heart attack, failed ventricle, fluid overload, kidney failure, altitude, inhaled toxins. Cardiogenic versus non-cardiogenic is the split.",
				"Your plan: sit up, legs down, oxygen to target, a 3-lead, no fluid bolus, urgent care that can give nitrates and diuretics.",
				"Furosemide is not on your list. Saying “I would give it” is an out-of-scope answer."
			]
		}]
	},
	{
		id: "obs-normal",
		unit: "obs",
		kicker: "Unit L",
		title: "Birth is normal until it is not. Your job is to notice the change.",
		lead: "Dignity is an outcome, not a courtesy. Explain, cover, ask, and do not perform for an audience.",
		blocks: [{
			kind: "points",
			items: [
				"Pregnancy raises pulse and respiratory rate, drops the blood pressure a little, and lifts the diaphragm. A “normal” pressure may already be low for her.",
				"After 20 weeks the uterus compresses the vena cava when she lies flat. Tilt her, or wedge her, left side down.",
				"Booking care you should be able to list: blood pressure, urine, bloods, HIV and syphilis, rhesus, tetanus, iron, foetal growth. You are not repeating the clinic. You are asking what it found.",
				"History: dates, previous births, bleeding, headache, swelling, baby moving, waters, contractions.",
				"Exam: fundal height in centimetres roughly matches weeks from 20 to 36. Leopold’s hands tell you lie and which end is down. Listen for a foetal heart, normally 110–160.",
				"Urine protein plus a high pressure is pre-eclampsia until proved otherwise."
			]
		}]
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
					{
						k: "First stage",
						v: "Regular contractions until the cervix is fully open. Comfort, fluids, any position she likes, nitrous if it suits."
					},
					{
						k: "Second stage",
						v: "Full dilation until the baby. Passive first, then the urge to push. Support the perineum. Check for a cord around the neck."
					},
					{
						k: "Third stage",
						v: "Baby out until placenta out. Normally under 30 minutes if managed actively. Do not pull on a cord that has not lengthened, and do not massage a uterus that still holds the placenta."
					},
					{
						k: "Fourth stage",
						v: "The first hour after the placenta. This is when she bleeds. Watch the fundus and the pad."
					}
				]
			},
			{
				kind: "callout",
				tone: "stop",
				title: "Oxytocin",
				text: "Active management is: check there is no second twin, give oxytocin 10 units IM, wait for a contraction, then controlled cord traction with a hand pushing the uterus up. You must be able to describe that. You may not give the oxytocin. Twins: nobody gives it until the second baby is out."
			},
			{
				kind: "points",
				items: [
					"Well baby: delayed cord clamp, about a minute or until the cord stops pulsing, skin to skin, dry hat, feed in the first hour.",
					"Unwell baby: clamp and cut now so you can resuscitate. APGAR at 1 minute.",
					"Nuchal cord: loose, slip it over the head. Tight, do not yank. Somersault the baby out through the loop, or clamp and cut only if the cord is stopping the birth.",
					"Meconium and a vigorous baby: no routine suction."
				]
			}
		]
	},
	{
		id: "apgar",
		unit: "obs",
		kicker: "Unit L · APGAR",
		title: "Five signs, zero to two, at one minute and five.",
		lead: "Score the baby you see, not the baby you hope for. Under 7 at five minutes: keep helping and score again.",
		blocks: [{
			kind: "table",
			headers: [
				"Sign",
				"0",
				"1",
				"2"
			],
			rows: [
				[
					"Appearance",
					"Blue or pale all over",
					"Pink body, blue hands and feet",
					"Pink all over"
				],
				[
					"Pulse",
					"Absent",
					"Under 100",
					"100 or more"
				],
				[
					"Grimace",
					"Nothing",
					"A face, a weak response",
					"Cry, cough, pull away"
				],
				[
					"Activity",
					"Limp",
					"Some flexion",
					"Active, well flexed"
				],
				[
					"Respiration",
					"Absent",
					"Slow, irregular, weak cry",
					"Strong cry"
				]
			]
		}, {
			kind: "pairs",
			items: [
				{
					k: "7–10",
					v: "Reassuring. Keep warm, keep with the mother."
				},
				{
					k: "4–6",
					v: "Needs help. Airway, stimulation, oxygen, ventilation if they are not breathing."
				},
				{
					k: "0–3",
					v: "Emergency. Ventilate. Compress if the heart stays under 60 after ventilation."
				}
			]
		}]
	},
	{
		id: "obs-bad",
		unit: "obs",
		kicker: "Unit L · the emergencies",
		title: "Learn the picture in one line, then the action you are allowed.",
		lead: "Some of these you manage. Some you only recognise and run. Postpartum haemorrhage is both.",
		blocks: [{
			kind: "table",
			headers: [
				"Problem",
				"Picture",
				"Your move"
			],
			rows: [
				[
					"Ectopic",
					"Missed period, one-sided pain, shoulder tip, collapse",
					"Oxygen, shock care, no internal exam, theatre"
				],
				[
					"Praevia",
					"Painless fresh bleeding, late pregnancy",
					"No vaginal exam. Left side. Oxygen. Theatre-capable hospital"
				],
				[
					"Abruption",
					"Painful, woody uterus, dark blood, shock bigger than the blood you see",
					"Same. Concealed abruption can hide the blood"
				],
				[
					"Cord prolapse",
					"Cord at the vulva after the waters go, baby’s heart falls",
					"Knee-chest. Fingers hold the head off the cord. Do not put the cord back"
				],
				[
					"Breech",
					"Bottom or feet first",
					"Hands off. Let the body hang. Help the head only if it delays. Call early"
				],
				[
					"Shoulder dystocia",
					"Head out, turtle sign, body stuck",
					"Help, flat, McRoberts, suprapubic pressure. No fundal shove"
				],
				[
					"Preterm",
					"Labour before 37 weeks",
					"No IV salbutamol. Warm plan. Hospital with a nursery"
				],
				[
					"Obstructed",
					"Hours, no progress, exhausted, Bandl ring",
					"Stop telling her to push harder. Transport"
				],
				[
					"Nuchal cord",
					"Cord around the neck",
					"Slip over if loose. Do not tear it"
				]
			]
		}]
	},
	{
		id: "obs-bp-pph",
		unit: "obs",
		kicker: "Unit L · blood pressure and bleeding",
		title: "Pre-eclampsia kills in South Africa. So does bleeding after birth.",
		lead: "Both outcomes ask you to say why they matter here, then to prioritise a plan.",
		blocks: [{
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
				"Do not chase the blood pressure with nifedipine. That is not your drug."
			],
			right: [
				"Bleeding that shocks her, or roughly more than 500 ml.",
				"Four causes: tone, trauma, tissue, thrombin. Tone is the common one.",
				"South Africa: it is a leading killer because of delay, anaemia and no access to theatre.",
				"Placenta out, uterus soft: rub the fundus until it is a cricket ball.",
				"Baby to the breast. Oxygen. Lie her flat. Adult IV if she is shocked.",
				"Laceration: direct pressure, do not pack blindly.",
				"Inverted uterus: do not keep pulling the cord. Cover, shock care, urgent help.",
				"Oxytocin and tranexamic acid save lives and are not in your hands."
			]
		}]
	},
	{
		id: "obs-trauma",
		unit: "obs",
		kicker: "Unit L · pregnant trauma",
		title: "Treat the mother. The baby is a passenger of her blood pressure.",
		lead: "A normal-looking pressure can still be too low. The uterus hides bleeding and compresses the big vein.",
		blocks: [{
			kind: "points",
			items: [
				"Tilt or manually displace the uterus after mid-pregnancy, including during spinal motion restriction.",
				"Oxygen early. External bleeding off. Adult fluids if she is shocked.",
				"Abruption can follow a seatbelt or a blow, with pain and a irritable uterus, even when the external wound looks minor.",
				"Foetal heart if you can hear it. Distress is a fast or slow rate. Explain, left side, oxygen, and a hospital that can operate.",
				"Rh-negative sensitising is a hospital problem. Do not delay transport to discuss it."
			]
		}]
	},
	{
		id: "gynae",
		unit: "gynae",
		kicker: "Unit M",
		title: "Gynaecology here is two illnesses plus the way you behave.",
		lead: "Ovarian cyst and pelvic inflammatory disease. The marking is the picture, the abdominal-pain assessment, and whether you are safe to be in the room.",
		blocks: [{
			kind: "pairs",
			items: [{
				k: "Ovarian cyst",
				v: "Sudden one-sided lower pain, may follow sex or exercise. Rupture can cause shoulder-tip pain and shock if she bleeds. Support, do not press for sport, transport if peritoneal or pale."
			}, {
				k: "PID",
				v: "Both sides, fever, discharge, pain with intercourse, a sexual history you ask for without a speech. This can become sepsis. You do not start antibiotics."
			}]
		}, {
			kind: "points",
			items: [
				"Ask about the last period before you decide this is “just gynae”. Ectopic lives next door.",
				"Pain: where, where to, sudden or grinding, relation to bleeding, bowel, bladder, fainting.",
				"Vitals, a look for shock, glucose only so you do not miss a collapse from sugar. No speculum exam.",
				"Privacy, a chaperone, consent before you touch the abdomen, and language that does not shame her."
			]
		}]
	},
	{
		id: "bones",
		unit: "bones",
		kicker: "Unit C",
		title: "A fracture is a bleeding wound that happens to involve a bone.",
		lead: "The plan is the limb plus the person. Pain relief and blood loss sit inside the fracture, not after it.",
		blocks: [{
			kind: "split",
			leftTitle: "Closed",
			rightTitle: "Open",
			left: [
				"Skin intact.",
				"Align grossly if the pulse is gone or the limb is blue, then splint where it lies.",
				"Check pulse, colour, movement, sensation before and after.",
				"Ice, elevation if it does not worsen shock, a splint that includes the joint above and below."
			],
			right: [
				"Bone or a wound over the fracture talking to the outside world.",
				"Sterile wet-to-dry cover. Do not shove bone back under the skin for neatness.",
				"Align only to restore a dead pulse or to allow a splint.",
				"Higher infection and higher blood loss. Tell the hospital it is open."
			]
		}, {
			kind: "points",
			items: [
				"Pain: methoxyflurane or nitrous if nothing in the contraindication list says no. Splint is a pain drug.",
				"Femur and pelvis bleed enough to kill. Pelvic binder at the trochanters. Do not rock the pelvis to “see”.",
				"Crush and rhabdomyolysis: muscle dies under a load, releases potassium and myoglobin, urine goes tea-coloured, the kidney fails and the heart arrests.",
				"Recognise it before the concrete comes off. Oxygen, pain control, adult fluid if you are running fluid, and a handover that says the word rhabdomyolysis. Calcium for the potassium is not yours."
			]
		}]
	},
	{
		id: "burns",
		unit: "bones",
		kicker: "Unit C · burns",
		title: "Stop the burning, then count the surface, then fear the airway.",
		lead: "Electrical, thermal and chemical are not the same illness. Inhalation is the one that kills quietly.",
		blocks: [{
			kind: "pairs",
			items: [
				{
					k: "Thermal",
					v: "Cool running water 20 minutes. Not ice. Remove jewellery and non-stuck clothing. Cling film loosely. Warm the person while you cool the burn."
				},
				{
					k: "Chemical",
					v: "Brush powder off, then flood with water for a long time. Do not neutralise acid with alkali. Eyes get water from the nose side outward."
				},
				{
					k: "Electrical",
					v: "Scene safe, switch off. The skin wound lies about the deep burn. Rhythm on the 3-lead. Think falls and other trauma. Think rhabdomyolysis."
				},
				{
					k: "Inhalation",
					v: "Fire in a closed room, soot, singed nasal hair, hoarse voice, stridor. Sit up, oxygen, prepare to lose the airway, do not lie them flat for fun. This is time-critical."
				}
			]
		}, {
			kind: "callout",
			tone: "exam",
			title: "Parkland",
			text: "4 ml × body weight in kg × percent burn = millilitres in 24 hours. Half in the first 8 hours from the time of the burn, half over the next 16. Adult rule of nines: head 9, each arm 9, front of trunk 18, back 18, each leg 18, perineum 1. Use Ringer’s or a balanced crystalloid. Count only partial and full thickness, not simple redness. The Maths tab does the arithmetic."
		}]
	},
	{
		id: "tbi",
		unit: "neuro",
		kicker: "Unit D",
		title: "A brain injury is a pressure problem and an oxygen problem.",
		lead: "Swelling and blood have nowhere to go. Carbon dioxide and low oxygen make the swelling worse. Your exam is the pupils, the motor response, and the sugar.",
		blocks: [{
			kind: "points",
			items: [
				"AVPU or GCS, pupils (size, equal, light), which limbs move, glucose, and whether they are on a blood thinner.",
				"Airway open, oxygen to target, ventilation that does not over-breathe them into a collapsed brain perfusion. A very high CO2 dilates brain vessels.",
				"Head up about 30 degrees if the spine and the pressure allow. Collar tight enough to hurt is not a treatment — a hard collar can raise intracranial pressure.",
				"Do not pour hypotonic fluid. Adult saline if they are shocked. Look for the other injury that is actually dropping the pressure. The head injury rarely causes shock in an adult.",
				"One pupil blowing, a falling score, vomiting, seizure: this is a theatre conversation. You cannot drill the skull."
			]
		}]
	},
	{
		id: "spine",
		unit: "neuro",
		kicker: "Unit D · spine",
		title: "Restrict the spine when the rules fail. Clear it when they all pass.",
		lead: "Cervical clearance is on the ECA list. So is justifying why you did not clear.",
		blocks: [{
			kind: "points",
			items: [
				"Clear only if: sober, no distracting injury, no midline neck pain, no tenderness, normal neurology, and they can rotate the neck without pain. Any doubt, restrict.",
				"Motion restriction is not “strap everyone to a board for an hour”. Boards cause sores and pain. A collar plus blocks plus a scoop, used for the move, is the idea. Log-roll as a team.",
				"Spinal shock: reflexes and tone vanish below the injury for hours to weeks. The cord is stunned.",
				"Neurogenic shock: high cord, sympathetic nerves offline. Low pressure and a slow heart. Skin warm and dry. This is the opposite of bleeding, which is fast and cold.",
				"Autonomic hyperreflexia: later, in someone who already lives with a high cord injury. A full bladder or a tight strap causes a pounding headache, flushing above the injury, and a dangerous blood pressure with a slow pulse. Remove the trigger. This is not acute spinal shock."
			]
		}, {
			kind: "callout",
			tone: "exam",
			title: "The collar question",
			text: "A collar limits movement. It also raises intracranial pressure, makes airway care harder, and hurts. Use it as part of restriction when the neck is at risk. Do not use it as a decoration on a cleared patient, and do not crank it so tight that the neck veins bulge."
		}]
	},
	{
		id: "seizure",
		unit: "seizure",
		kicker: "Unit E",
		title: "Most seizures stop. Status is the one that does not.",
		lead: "Protect, time, oxygen, glucose, then a benzodiazepine if it is still going. You must be able to bag them.",
		blocks: [{
			kind: "points",
			items: [
				"Causes to say out loud: hypoglycaemia, hypoxia, head injury, eclampsia, meningitis, withdrawal, overdose, fever in a child, missed epilepsy tablets.",
				"First aid: nothing in the mouth, recovery position when they stop, oxygen, do not restrain the limbs hard.",
				"Status epilepticus: one seizure around 5 minutes, or repeated seizures with no recovery between. Do not wait half an hour to use the word.",
				"Refractory status: still seizing after an adequate benzodiazepine dose. Reorganise. Consult. Move. Do not keep stacking drug until they stop breathing with no plan.",
				"Lorazepam is the monograph’s preferred first-line because it lasts. Diazepam is acceptable and shorter. Midazolam if there is no vein: IM, buccal or nasal.",
				"Watch the effect of the benzo: slow breathing, a drop in pressure if you pushed it fast, and occasionally more agitation instead of sleep."
			]
		}, {
			kind: "callout",
			tone: "scope",
			title: "Doses to be able to write",
			text: "Lorazepam adult 2–4 mg slowly IV, repeat 4 mg in 10 minutes, max 8 mg in 12 hours. Diazepam adult up to 5 mg per minute slowly IV, max 20 mg. Child diazepam 0.2 mg/kg, max 10 mg over 5 years and 5 mg under 5. Midazolam seizure dose 0.15 mg/kg IV or IM."
		}]
	},
	{
		id: "pain",
		unit: "pain",
		kicker: "Unit G",
		title: "Pain is a vital sign you are trusted to believe.",
		lead: "The guide’s analgesics for you are methoxyflurane and nitrous oxide, plus ice, a splint, distraction and a calm voice. Morphine is not the answer they want.",
		blocks: [{
			kind: "points",
			items: [
				"Pathway, simply: tissue damage releases bradykinin and prostaglandins. The nerve fires glutamate and substance P into the spinal cord. The spinothalamic tract carries it to the brain. Descending fibres using endorphins, serotonin and noradrenaline can turn the volume down.",
				"Scales: number 0–10, a visual line (VAS), words (mild, moderate, severe), Wong-Baker faces for children, FLACC for babies and people who cannot talk (face, legs, activity, cry, consolability).",
				"People get less analgesia when the provider decides their culture, race, gender, age or addiction history means they are exaggerating. That is a patient-rights failure.",
				"Penthrox: conscious, stable, trauma, self-given, up to 6 ml a day. Not a head injury, not shocked, not kidney failure.",
				"Nitrous: self-given, moderate effect, warn about nausea and odd memories. Not a pneumothorax, not a head injury, not a pressure under 90."
			]
		}]
	},
	{
		id: "lungs",
		unit: "lungs",
		kicker: "Unit H",
		title: "Respiratory distress is a position and a cause, not just a mask.",
		lead: "Sit the people who are working hard. Differentiate the cause. Then decide if this is still a nebuliser problem or a failure problem.",
		blocks: [{
			kind: "table",
			headers: [
				"Cause",
				"Clues",
				"Lean"
			],
			rows: [
				[
					"Asthma",
					"Wheeze, known asthma, tight chest, long expiratory phase",
					"Salbutamol neb, ipratropium, oxygen to target, steroid, sit up"
				],
				[
					"COPD",
					"Smoker, sputum, barrel chest, hypoxic drive",
					"Same drugs, smaller oxygen target, 88–92%"
				],
				[
					"Pulmonary oedema",
					"Wet, upright, high pressure, cardiac history",
					"Sit up. No fluid. No furosemide. Move"
				],
				[
					"Pneumonia",
					"Fever, one-sided crackles, pleuritic pain",
					"Oxygen, position, hospital"
				],
				[
					"Tension pneumothorax",
					"One silent side, shock, tracheal shift is late",
					"Needle decompression, adult or child"
				],
				[
					"Failure / ARDS",
					"Tiring, rising CO2, falling oxygen, floppy speech",
					"Support ventilation. Refer. Do not coach them to calm down"
				]
			]
		}, {
			kind: "points",
			items: [
				"Carbon dioxide rides in the blood mostly as bicarbonate, some bound to haemoglobin, a little dissolved. That is the “transport of CO2” line.",
				"Severe or refractory asthma and COPD: if the neb is not working, you are allowed to consult and you are expected to move. Silent chest, falling consciousness and rising CO2 are peri-arrest.",
				"A wheeze can be anaphylaxis or a inhaled foreign body. Look at the story before you label it asthma."
			]
		}]
	},
	{
		id: "heart",
		unit: "heart",
		kicker: "Units I and J",
		title: "The guide lists cardiovascular disorders twice. Learn them once.",
		lead: "Chest pain, acute coronary syndrome, the big vessels, and two impersonators: pulmonary embolism and tamponade. Your drugs are oxygen if hypoxic, and aspirin if it is cardiac.",
		blocks: [{
			kind: "points",
			items: [
				"Chest pain causes worth saying: heart muscle starved of blood, aortic dissection, pulmonary clot, pneumothorax, oesophageal tear, muscle and reflux. Reflux is what you call it after the dangerous ones are impossible, not before.",
				"Framework: onset, what provoked it, quality, radiation, severity, time, plus nausea, sweat, breathlessness, and risk (diabetes, smoking, pressure, family, cocaine).",
				"ACS: recognise it and refer. Aspirin 150–300 mg chewed if they are awake, not allergic, not bleeding, not a child, not pregnant.",
				"A normal 3-lead does not clear ACS. You cannot perform or diagnose a 12-lead on this scope. Say that limitation out loud in the exam.",
				"GTN and morphine are not yours. Do not add them to look thorough."
			]
		}]
	},
	{
		id: "vessels",
		unit: "heart",
		kicker: "Units I and J · the others",
		title: "Four illnesses that look like chest pain and are not a stent you can offer.",
		lead: "Your plan for all four is the same shape: see it, do not make it worse, support, go.",
		blocks: [{
			kind: "pairs",
			items: [
				{
					k: "Aortic dissection",
					v: "Sudden tearing pain to the back, unequal pulses or pressures, neurological deficit, collapse. Aspirin can harm. Do not call it indigestion."
				},
				{
					k: "Aneurysm",
					v: "Abdominal aortic: back or flank pain, a pulsatile mass, shock. Do not press it. This is bleeding until proved otherwise."
				},
				{
					k: "Pulmonary embolism",
					v: "Sudden breathlessness, clear lungs, pleuritic pain, risk of clot, sometimes haemoptysis. Oxygen. Not a needle decompression."
				},
				{
					k: "Tamponade",
					v: "Muffled heart sounds, low pressure, distended neck veins. Trauma or cancer. Distinguish from tension, where the breath sounds are the clue."
				}
			]
		}]
	},
	{
		id: "tox-pictures",
		unit: "toxins",
		kicker: "Unit N",
		title: "A toxidrome is a pattern. Name the pattern before you reach for a vial.",
		lead: "The guide’s list is organophosphate, methamphetamine, cocaine, snake, scorpion, hydrocarbon, benzodiazepine, opioid.",
		blocks: [{
			kind: "table",
			headers: [
				"Pattern",
				"Looks like",
				"Your drug, if any"
			],
			rows: [
				[
					"Organophosphate",
					"Wet, small pupils, slow heart, weak, seizing. SLUDGE",
					"Atropine until the chest dries. No charcoal"
				],
				[
					"Opioid",
					"Slow breathing, pinpoint pupils, low consciousness",
					"Ventilate, then naloxone titrated to breathing"
				],
				[
					"Benzodiazepine",
					"Sleepy, normal-ish pupils, low breathing",
					"Airway. Flumazenil only if you gave the benzo"
				],
				[
					"Meth / cocaine",
					"Hot, fast, agitated, big pupils, chest pain",
					"Cool, calm, benzo if they seize, aspirin only if it is clearly cardiac and safe"
				],
				[
					"Snake",
					"Pain, swelling, bleeding or paralysis depending on the snake",
					"Immobilise, mark the swelling, no cut, no suction, no tight tourniquet. Antivenom is hospital"
				],
				[
					"Scorpion",
					"Severe local pain, sometimes autonomic storm",
					"Pain control if they qualify, supportive, refer"
				],
				[
					"Hydrocarbon",
					"Cough after a sip of paraffin, chemical pneumonia",
					"Do not vomit. Do not give charcoal. Oxygen. Watch the chest"
				]
			]
		}]
	},
	{
		id: "tox-rules",
		unit: "toxins",
		kicker: "Unit N · rules",
		title: "Three antidotes with a trap in each.",
		lead: "Charcoal, atropine, naloxone, flumazenil. The trap is giving them to the wrong patient.",
		blocks: [{
			kind: "points",
			items: [
				"Charcoal: 0.5–1 g/kg by mouth, awake patient, within about an hour, and not for iron, fuel, alcohol, lithium, acids, alkalis, cyanide or organophosphate.",
				"Atropine: poisoning only. Adult 0.5–2.5 mg IV every 4 minutes. Child 0.02 mg/kg. The endpoint is less secretion, not a heart rate of 140.",
				"Naloxone: adult 0.4 mg slowly IV every 5 minutes up to 2 mg. Child 0.1 mg/kg. Not to fully wake them. Not to the baby of a dependent mother.",
				"Flumazenil: adult 0.2 mg then 0.1 mg doses, max 1 mg. Only iatrogenic. Never a diagnostic toy in coma.",
				"Glucagon is also on the antidote page for beta-blocker and calcium-channel overdose. Know it exists. The firm ECA uses are hypoglycaemia and adrenaline-resistant anaphylaxis."
			]
		}]
	},
	{
		id: "endo",
		unit: "endo",
		kicker: "Unit O",
		title: "Sugar is the endocrine emergency you can fix. The thyroid ones you recognise.",
		lead: "Hypoglycaemia has a drug. DKA, hyperosmolar states, myxoedema coma and thyroid storm have a hospital.",
		blocks: [{
			kind: "pairs",
			items: [
				{
					k: "Hypoglycaemia",
					v: "Under 3.5 mmol/L and symptomatic, or collapsed and you suspect it. Awake: oral glucose 25 g. Adult unconscious: thiamine if they might be deficient, then 20 ml of 50% dextrose slowly IV, repeat while still low. No vein, or a child: glucagon."
				},
				{
					k: "DKA",
					v: "Known diabetes, deep sighing breathing, sweet breath, dry, abdominal pain, glucose high. They are acidotic. Adult fluid only if shocked and you understand you are not the ICU. Refer."
				},
				{
					k: "HHS",
					v: "Older, type 2, incredibly high glucose, very dry, little ketones, confused. Same idea: support and refer. Do not slam insulin. You do not carry it as a treatment plan here."
				},
				{
					k: "Myxoedema coma",
					v: "Low thyroid, hypothermic, slow, puffy, hyponatraemic-looking. Warm gently, airway, refer."
				},
				{
					k: "Thyroid storm",
					v: "Hot, fast, agitated, heart failure, often after illness or surgery in someone with hyperthyroidism. Cool, oxygen, refer."
				}
			]
		}]
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
				headers: [
					"Age",
					"Pulse",
					"Breaths",
					"Systolic, roughly"
				],
				rows: [
					[
						"Newborn",
						"120–160",
						"40–60",
						"60–80"
					],
					[
						"Infant",
						"100–160",
						"30–50",
						"70–90"
					],
					[
						"1–5 years",
						"80–140",
						"20–30",
						"80–100"
					],
					[
						"6–12 years",
						"70–120",
						"15–25",
						"90–110"
					]
				]
			},
			{
				kind: "points",
				items: [
					"History from the caregiver. Exam toe-to-head if they are scared, so the airway is not the first fight.",
					"South African list to recognise: dehydration and gastroenteritis, sepsis, croup, tuberculosis, HIV, hypoxia, shock, hypoglycaemia, fever and febrile seizure, trauma, drowning.",
					"Croup: bark, hoarse, better sitting. Foreign body: sudden, no fever. Epiglottitis is rare and toxic — do not look in the throat.",
					"Dehydration: oral rehydration in small frequent sips. That is your fluid skill. IV paediatric fluid is not.",
					"Weight estimate for doses, 1–10 years: (age in years + 4) × 2. Confirm with a colour tape if you have one.",
					"Oxygen you may give and calculate. Drug doses are weight-based and you halve nebulised salbutamol."
				]
			},
			{
				kind: "callout",
				tone: "scope",
				title: "Emotional care is in the outcome",
				text: "Get down to their eye line, keep a parent touching them, say what you are about to do, and do the painful thing once. A fighting child is a desaturating child."
			}
		]
	},
	{
		id: "neo",
		unit: "neo",
		kicker: "Unit Q",
		title: "A newborn loses heat, sugar and oxygen in that order of silence.",
		lead: "Dry, stimulate, skin to skin. Most “resuscitation” is a clear airway and a few good breaths.",
		blocks: [{
			kind: "steps",
			items: [
				"Clock starts at birth. Dry, discard the wet towel, hat, skin to skin if they are vigorous.",
				"Assess breathing and heart rate. A good cry and a rate over 100: leave them with the mother.",
				"Not breathing: neutral head position, a small roll under the shoulders, five inflation breaths that move the chest, then ventilate about 40–60 a minute.",
				"Heart rate staying under 60 despite ventilation that moves the chest: compressions, three compressions to one breath.",
				"Oxygen you can give. IV dextrose you cannot. Glucagon or a feed once they are stable enough, and a nursery.",
				"Meconium and floppy: start ventilation. Suction only if the airway is blocked. Do not delay breaths for a ritual."
			]
		}, {
			kind: "pairs",
			items: [
				{
					k: "Keep warm",
					v: "Dry, hat, skin to skin, or an incubator in the ambulance. Kangaroo mother care: upright between the breasts, airway open, blanket over both."
				},
				{
					k: "Blue baby",
					v: "Heart disease, lung disease, meconium, hypothermia, sepsis, persistent pulmonary hypertension, methaemoglobin. You do not need to pick the lesion. You need oxygen, warmth, ventilation if they need it, and a hospital."
				},
				{
					k: "The illnesses",
					v: "Dehydration, respiratory distress, hypothermia, hypoglycaemia, hypoxia. Small reserves. They look fine, then they do not."
				}
			]
		}]
	},
	{
		id: "traps",
		unit: "traps",
		kicker: "Before you walk into the sim",
		title: "The mistakes that fail a competent student.",
		lead: "Simulation 2 and Test 2 are the hurdles. They will offer you a drug you have seen in the drug book and wait.",
		blocks: [{
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
				"Forgetting the two 50% hurdles and doing all your study for test 1."
			]
		}, {
			kind: "callout",
			tone: "do",
			title: "A last line you can say in any sim",
			text: "Airway, breathing, circulation, the one drug I am allowed, the one drug I am not, and the hospital that can finish the job. Then do the thing with your hands."
		}]
	}
];
var tiles = [
	{
		name: "Simulation 1",
		weight: "20%",
		note: "18 Sep 2026",
		hurdle: false
	},
	{
		name: "Test 1",
		weight: "25%",
		note: "15 Sep 2026",
		hurdle: false
	},
	{
		name: "Simulation 2",
		weight: "25%",
		note: "11–12 Nov · remedial 19 Nov",
		hurdle: true
	},
	{
		name: "Test 2",
		weight: "30%",
		note: "2 Nov · remedial 16 Nov",
		hurdle: true
	}
];
function Brief({ studied, total, onStart }) {
	const pct = total === 0 ? 0 : Math.round(studied / total * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-paper px-5 py-6 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium tracking-wide text-accent",
						children: "CPUT · ECP150S · 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl",
						children: "Emergency Care Practice, written for an ECA."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
						children: "A plain-language master deck of the subject guide, cut to the HPCSA Emergency Care Assistant column, with doses from your drug monograph. Higher-scope drugs stay in the book so you can recognise them. They are marked as not yours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onStart,
							className: "rounded-xl bg-accent px-5 py-3 font-medium text-on-accent",
							children: "Open the slides"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/ecp150s-eca-master.pptx",
							download: true,
							className: "inline-flex items-center gap-2 rounded-xl border border-line bg-bg px-5 py-3 font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download PowerPoint"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							studied,
							" of ",
							total,
							" slides marked done · ",
							pct,
							"%"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: tiles.map((tile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-paper px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: tile.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-4xl",
							children: tile.weight
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: tile.note
						}),
						tile.hurdle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-medium text-accent",
							children: "50% subminimum"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "No separate hurdle"
						})
					]
				}, tile.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "rounded-xl border border-accent bg-soft px-4 py-4 lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "The pass sentence"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed",
							children: "You pass only if the computed mark is at least 50%, Test 2 is at least 50%, and Simulation 2 is at least 50%. A pretty average with a 42% on paper 2 is a fail. Practical attendance is 100% or you do not sit the practical exams. Theory attendance is 80%."
						})] })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-paper px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Where to start"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-2 flex flex-col gap-2 text-sm leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1. Pass rules, then the ECA fence." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2. Arrest, airway, shock, birth. Those carry simulations." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "3. Drug cabinet. Learn the fence line on each card." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "4. Maths, then the drill, then redo the ones you miss." })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Built from the 2026 ECP150S subject guide, the HPCSA PBEC clinical practice guideline annexure (ECA column), and the supplied drug monographs. If your lecturer’s protocol card disagrees, the lecturer wins. This is a study aid, not a licence to practise."
			})
		]
	});
}
var toneClass = {
	exam: "border-accent bg-soft",
	scope: "border-ink bg-paper",
	stop: "border-accent bg-soft",
	do: "border-line bg-paper"
};
function Blocks({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-4",
		children: blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, i))
	});
}
function BlockView({ block }) {
	if (block.kind === "points") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-2",
		children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3 text-base leading-relaxed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
		}, item))
	});
	if (block.kind === "steps") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-col gap-2",
		children: block.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3 text-base leading-relaxed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-medium text-paper",
				children: index + 1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pt-0.5",
				children: item
			})]
		}, item))
	});
	if (block.kind === "callout") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `rounded-xl border px-4 py-3 ${toneClass[block.tone]}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium text-accent",
			children: block.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-base leading-relaxed",
			children: block.text
		})]
	});
	if (block.kind === "pairs") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "grid gap-3 sm:grid-cols-2",
		children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-line bg-bg px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-medium",
				children: item.k
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 text-sm leading-relaxed text-muted",
				children: item.v
			})]
		}, item.k))
	});
	if (block.kind === "split") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column$1, {
			title: block.leftTitle,
			items: block.left,
			hot: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column$1, {
			title: block.rightTitle,
			items: block.right,
			hot: false
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-xl border border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[36rem] border-collapse text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-ink text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: block.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2 font-medium",
					children: header
				}, header)) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: block.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-t border-line bg-paper",
				children: row.map((cell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2 align-top leading-relaxed",
					children: cell
				}, index))
			}, row.join("|"))) })]
		})
	});
}
function Column$1({ title, items, hot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border px-4 py-3 ${hot ? "border-accent bg-soft" : "border-line bg-bg"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 flex flex-col gap-2",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "text-sm leading-relaxed",
				children: item
			}, item))
		})]
	});
}
var drugs = [
	{
		name: "Adrenaline",
		klass: "Adrenoceptor agonist",
		fence: "ECA: cardiac arrest and anaphylaxis only. Not the post-ROSC infusion, not bradycardia, not a routine asthma infusion.",
		action: "Alpha constricts arteries. Beta-1 speeds and strengthens the heart and raises oxygen demand. Beta-2 opens bronchial smooth muscle and frees glucose.",
		use: ["Cardiac arrest", "Anaphylaxis"],
		avoid: [
			"Tachyarrhythmias as a routine use",
			"Phaeochromocytoma",
			"Sulphite allergy",
			"Do not mix with alkaline solutions"
		],
		dose: [
			"Arrest, adult: 1 mg IV push every 3–5 min. That is 1 ml of 1 mg/ml (1:1000), or 10 ml of the 0.1 mg/ml dilution.",
			"Arrest, child: 0.01 mg/kg IV push every 3–5 min.",
			"Anaphylaxis, adult IM: 0.3 mg undiluted (0.3 ml of 1:1000) into the anterolateral thigh. Repeat every 15–20 min.",
			"Anaphylaxis, adult IV: 0.1 mg diluted, slowly over 5 min — only if you are giving the IV anaphylaxis dose on the monograph.",
			"Anaphylaxis, child IM: 0.01 mg/kg undiluted every 5–15 min.",
			"Pack: 1 mg/1 ml. Dilute 1 mg in 9 ml saline = 0.1 mg/ml."
		],
		watch: ["Onset immediate, lasts 10–15 min.", "IM thigh is the anaphylaxis lifesaver. Hydrocortisone is too slow to replace it."]
	},
	{
		name: "Aspirin",
		klass: "Antiplatelet",
		fence: "In scope for suspected myocardial infarction if the patient can swallow safely.",
		action: "Blocks cyclo-oxygenase, so platelets cannot make thromboxane and cannot clump. Does not affect leukotrienes.",
		use: ["Suspected myocardial infarction, patient conscious"],
		avoid: [
			"Aspirin allergy",
			"Active peptic bleeding",
			"Bleeding tendency",
			"Already on a platelet drug or anticoagulant",
			"Pregnancy",
			"Child under 12",
			"Severe renal failure or kidney transplant"
		],
		dose: [
			"150–300 mg orally, chewed, crushed or dissolved.",
			"Do not use the 500 mg tablet. Do not use enteric-coated aspirin.",
			"Packs: 300 mg, dispersible 100 mg and 300 mg."
		],
		watch: ["Can provoke bronchospasm in asthmatics.", "If the story is tearing back pain and unequal pulses, think dissection and do not force aspirin."]
	},
	{
		name: "Atropine",
		klass: "Antimuscarinic",
		fence: "ECA: organophosphate or carbamate poisoning only. Bradycardia atropine is a higher scope.",
		action: "Blocks muscarinic receptors. Dries secretions, speeds the heart, dilates pupils, relaxes bronchi a little.",
		use: ["Organophosphate / carbamate poisoning until secretions dry"],
		avoid: ["Do not use your ECA atropine for routine bradycardia, heart block, or asystole unless a higher-scope provider takes over that indication."],
		dose: [
			"Adult poisoning: 0.5–2.5 mg IV every 4 min until atropinisation (secretions decrease).",
			"Child poisoning: 0.02 mg/kg IV every 4 min until secretions decrease.",
			"Packs include 0.5 mg/ml, 0.6 mg/ml, 1 mg/ml and 1.2 mg/ml."
		],
		watch: ["Hot, dry, flushed, mad, and tachycardic means you may have overshot. The goal is dry lungs, not a racing heart.", "Onset immediate. Half-life 2–4 hours."]
	},
	{
		name: "Activated charcoal",
		klass: "Adsorbent",
		fence: "Oral only, and only with a protected airway. ECA does not place a nasogastric tube.",
		action: "Binds many poisons in the gut so less is absorbed. Works best within the first hour.",
		use: ["Recent oral overdose of a drug charcoal actually binds"],
		avoid: [
			"Iron, organophosphates, ethanol, lithium, boric acid, cyanide, ethylene glycol, methanol, petroleum, strong acids and alkalis",
			"Dropped level of consciousness or an unprotected airway",
			"A damp, unsealed bottle — moisture kills it"
		],
		dose: ["Adult and child: 0.5–1 g/kg mixed with water, swallowed.", "Bottles of 25 g and 50 g."],
		watch: ["Mild constipation. Aspiration is the real danger."]
	},
	{
		name: "Hydrocortisone",
		klass: "Corticosteroid",
		fence: "IV or IM is in scope. It is an adjunct, never the first drug in anaphylaxis.",
		action: "Slows the inflammatory and allergic response and makes beta-2 receptors work better. Onset is 1–2 hours.",
		use: ["Anaphylaxis, after adrenaline", "Acute asthma"],
		avoid: ["Not for cerebral oedema from TBI or stroke. Caution in diabetes, peptic ulcer, epilepsy, heart failure."],
		dose: [
			"Adult anaphylaxis: 200–500 mg IM or IV.",
			"Adult moderate–severe asthma: 5 mg/kg IV slowly.",
			"Child anaphylaxis: 50–100 mg IV or IM.",
			"Child asthma: 5 mg/kg IV slowly.",
			"Packs: 100 mg/2 ml and 500 mg/4 ml. Lasts 6–12 hours."
		],
		watch: ["Does not open an airway in the next five minutes. Adrenaline does."]
	},
	{
		name: "Methylprednisolone",
		klass: "Corticosteroid",
		fence: "IV is in scope for allergy, anaphylaxis and acute asthma. Same idea as hydrocortisone: slow adjunct.",
		action: "Blocks the making of prostaglandins and leukotrienes. Onset 1–2 hours, lasts 30–36 hours.",
		use: ["Severe allergy or anaphylaxis", "Acute asthma"],
		avoid: ["Peptic ulcer, epilepsy, diabetes, psychiatric disease, pregnancy — use caution, do not delay emergency care for the debate."],
		dose: ["Adult: 125 mg IV slowly. Range 40–125 mg.", "Child: 1 mg/kg IV slowly, max 30 mg."],
		watch: ["You do not need both steroids. Use the one on the ambulance."]
	},
	{
		name: "Dextrose 50%",
		klass: "Carbohydrate",
		fence: "ECA: intravenous dextrose is for adults. Paediatric and neonatal IV dextrose is not on the ECA list.",
		action: "Immediate fuel. Threshold in this monograph: glucose under 3.5 mmol/L with symptoms, or a low conscious level you suspect is hypo.",
		use: ["Adult symptomatic hypoglycaemia", "Adult collapsed patient you suspect is hypoglycaemic"],
		avoid: [
			"Extravasation burns the vein.",
			"Thick glucose in a head bleed can worsen swelling.",
			"In alcohol or malnutrition give thiamine as well."
		],
		dose: ["Adult: 10 g, which is 20 ml of 50%, slowly IV. Repeat every 5 min while glucose stays under 3.5.", "Child and neonate IV dilution is on the monograph but is NOT an ECA capability. Use oral glucose if they can swallow, or glucagon, and refer."],
		watch: ["Recheck the glucose. Look for why it fell."]
	},
	{
		name: "Oral glucose",
		klass: "Carbohydrate",
		fence: "In scope for any age if the person can protect their airway.",
		action: "Same sugar, by mouth. Safe first step when they are awake enough to swallow.",
		use: ["Symptomatic hypoglycaemia under 3.5 mmol/L"],
		avoid: ["Do not pour liquid into an unconscious mouth. Aspiration kills."],
		dose: [
			"25 g gel on the oral mucosa, or powder in water if fully conscious.",
			"Repeat every 5 min while glucose stays under 3.5.",
			"Packs: 25 g and 50 g gel or powder."
		],
		watch: ["If they cannot swallow: adult gets IV dextrose; anyone can get glucagon; children do not get ECA IV dextrose."]
	},
	{
		name: "Glucagon",
		klass: "Hyperglycaemic hormone",
		fence: "In scope. Best ECA tool when you cannot get adult IV dextrose, and for anaphylaxis that ignores adrenaline, especially on a beta-blocker.",
		action: "Tells the liver to break glycogen into glucose. Also stimulates the heart by its own receptor, which is why it helps when beta-blockers block adrenaline.",
		use: ["Hypoglycaemia when IV dextrose is not available or not allowed at your scope", "Anaphylaxis not responding to adrenaline, especially on beta-blockers"],
		avoid: [
			"Phaeochromocytoma",
			"Allergy to glucagon",
			"Empty liver stores (some starved or liver-failure patients) may not respond"
		],
		dose: [
			"Adult hypo: 1 mg IM preferred (IV or SC also listed).",
			"Child under 20 kg or under 6 years: 0.5 mg IM.",
			"Child over 20 kg: 1 mg IM.",
			"Anaphylaxis rescue, adult: 1–2 mg every 5 min IM or slow IV.",
			"Anaphylaxis rescue, child: 20 micrograms/kg IM or slow IV, max 1 mg.",
			"Reconstitute the 1 mg vial with the 1 ml of water supplied. Do not mix with saline."
		],
		watch: ["Nausea is common. Once awake, feed them. The monograph also lists calcium-channel and beta-blocker overdose infusions — that is consultation territory, not a solo ECA move."]
	},
	{
		name: "Thiamine",
		klass: "Vitamin B1",
		fence: "In scope. Give it before thick IV glucose when deficiency is likely.",
		action: "A cofactor for carbohydrate metabolism. Without it, glucose can precipitate Wernicke encephalopathy.",
		use: ["Before IV 50% dextrose in alcoholism or malnutrition", "Suspected Wernicke"],
		avoid: ["Rare anaphylaxis. Give it slowly."],
		dose: [
			"Adult: 100 mg IV slowly.",
			"Child: 25–50 mg IV slowly.",
			"Pack: 200 mg/2 ml."
		],
		watch: ["If you remember nothing else: drunk, malnourished, about to get dextrose — thiamine first."]
	},
	{
		name: "Lorazepam",
		klass: "Benzodiazepine",
		fence: "In scope for seizures. Preferred first-line on this monograph because it lasts longer than diazepam.",
		action: "Boosts GABA. Chloride enters the neuron, the cell quiets, the seizure stops. You must be able to ventilate if it works too well.",
		use: ["Seizures, including status"],
		avoid: [
			"Benzo allergy",
			"No way to bag-mask the patient",
			"Do not give before you have checked glucose"
		],
		dose: [
			"Adult: 2–4 mg slowly IV. Repeat 4 mg after 10 min if needed. Max 8 mg in 12 hours.",
			"Child: 0.05–0.1 mg/kg slowly IV, max 4 mg per dose, repeat after 10 min.",
			"Pack: 4 mg/ml. Onset about 3 min. Duration 12–24 hours."
		],
		watch: ["Respiratory depression, hypotension if pushed fast, paradoxical agitation."]
	},
	{
		name: "Diazepam",
		klass: "Benzodiazepine",
		fence: "In scope for seizures. IM absorption is unreliable — do not rely on an IM dose.",
		action: "Same GABA story as lorazepam, shorter and oil-based.",
		use: ["Seizures"],
		avoid: [
			"Benzo allergy",
			"Cannot ventilate",
			"Untreated hypoglycaemia",
			"Active labour if you can avoid it — it sedates the baby"
		],
		dose: [
			"Adult convulsions: 5 mg per minute slowly IV (about 0.15 mg/kg) every 2–5 min. Max 20 mg.",
			"Child: 0.2 mg/kg slowly IV every 2–5 min. Max 10 mg if over 5 years, 5 mg if under 5.",
			"Pack: 10 mg/2 ml. Onset 1–5 min. Duration 15–120 min."
		],
		watch: ["The sedation titration on the monograph is not your induction tool. Status that ignores two proper benzo doses is refractory — consult and move."]
	},
	{
		name: "Midazolam",
		klass: "Benzodiazepine",
		fence: "In scope for seizures, including IM or nasal when there is no vein. Induction doses are not an ECA skill.",
		action: "Water-soluble benzo. Same GABA effect, shorter than lorazepam.",
		use: ["Seizures"],
		avoid: [
			"Benzo allergy",
			"Cannot ventilate",
			"Do not use the RSI induction dose"
		],
		dose: [
			"Adult seizure: 0.15 mg/kg slowly IV. If no vein: 0.15 mg/kg IM.",
			"Child seizure: 0.15 mg/kg slowly IV or IM. Rectal 0.4–1 mg/kg. Nasal 0.4 mg/kg.",
			"Packs: 5 mg/5 ml, 15 mg/3 ml, 50 mg/10 ml. Onset 1–3 min. Duration about 30 min."
		],
		watch: ["Short acting. They can seize again. Watch the airway the whole way in."]
	},
	{
		name: "Flumazenil",
		klass: "Benzodiazepine antagonist",
		fence: "ECA: only for iatrogenic overdose — a benzo you gave. Not for an unknown street overdose.",
		action: "Competes at the GABA-benzo site and blocks the benzo. It has no agonist effect. It wears off before most benzos do.",
		use: ["Respiratory depression or deep sedation after a benzo you administered"],
		avoid: [
			"Unknown or mixed overdose",
			"Suspected tricyclic overdose",
			"Status epilepticus treated with a benzo",
			"Raised ICP being controlled with a benzo",
			"Neonates",
			"Benzo-dependent patients — you can trigger seizures"
		],
		dose: [
			"Adult: 0.2 mg IV over 30 seconds. Then 0.1 mg every minute. Usual total 0.3–0.6 mg. Max 1 mg.",
			"Child: 0.01 mg/kg over 15 seconds. Repeat after 45 seconds, then every minute. Max 0.05 mg/kg.",
			"Onset 1–2 min. Duration about 45 min — they can go sleepy again."
		],
		watch: ["If you are unsure why they are unconscious, do not give it. Ventilate instead."]
	},
	{
		name: "Ipratropium",
		klass: "Inhaled anticholinergic",
		fence: "Nebulised or inhaled is in scope. One dose is usually enough. It is slow — it is not the rescue on its own.",
		action: "Blocks vagal tightening of the airway and dries some mucus. Works with salbutamol, especially if the patient takes beta-blockers.",
		use: ["Asthma exacerbation", "COPD exacerbation"],
		avoid: ["Allergy. Caution in glaucoma, prostate obstruction, myasthenia. Stop if paradoxical bronchospasm."],
		dose: [
			"Adult neb: 0.5 mg in 3–5 ml saline.",
			"Child neb: 0.25 mg in 3–5 ml saline.",
			"Inhaler: 1 puff (40 micrograms).",
			"Onset about 30 min. Lasts 4–6 hours."
		],
		watch: ["Bitter taste and dry mouth are normal. Give it with the beta-2 stimulant, not instead of oxygen and salbutamol."]
	},
	{
		name: "Salbutamol (inhaled)",
		klass: "Beta-2 stimulant",
		fence: "Inhaled or nebulised only. IV salbutamol for tocolysis or hyperkalaemia is not ECA.",
		action: "Opens bronchial muscle. Repeated doses spill into beta-1: tremor, fast heart, low potassium, raised glucose.",
		use: ["Acute bronchospasm — asthma, COPD, anaphylaxis wheeze"],
		avoid: ["Do not push on if the heart rate is already over 120 and they are getting worse — get help.", "Systemic and IV doses are outside your list."],
		dose: [
			"Nebulise salbutamol 5 mg (the monograph: 5 mg/ml solution plus 4 ml saline; or a 2.5 mg / 5 mg unit-dose vial).",
			"Halve the nebulised dose for children.",
			"Onset 5–15 min. Lasts 3–6 hours."
		],
		watch: ["Severe asthma that is tiring, silent, or hypoxic needs oxygen, steroids, and a hospital, not endless nebs in a driveway."]
	},
	{
		name: "Magnesium sulphate",
		klass: "Mineral, anticonvulsant in eclampsia",
		fence: "ECA: intramuscular only. IV magnesium for asthma, torsades or the eclampsia infusion is a higher scope.",
		action: "Stabilises excitable membranes and blocks neuromuscular transmission, which is how it stops eclamptic seizures. Large doses drop the blood pressure.",
		use: ["Prevention and control of seizures in pre-eclampsia and eclampsia, by the IM route"],
		avoid: [
			"Heart block",
			"Myocardial damage",
			"Rapid IV injection — not your route anyway",
			"Renal failure: caution"
		],
		dose: [
			"Eclampsia, the in-scope alternative on the monograph: 5 g deep IM into each buttock.",
			"The 2–4 g IV bolus and the 1–2 g IV asthma dose are not ECA.",
			"IM onset about 1 hour, lasts 3–4 hours. Pack: 1 g/2 ml."
		],
		watch: ["Watch the mother and the baby. Magnesium crosses the placenta and can slow the newborn’s breathing if given close to birth. Loss of reflexes and weak breathing mean too much — that is a higher-scope rescue with calcium, which you do not carry as ECA."]
	},
	{
		name: "Naloxone",
		klass: "Opioid antagonist",
		fence: "In scope. The only goal is breathing, not a wide-awake, vomiting, angry patient.",
		action: "Knocks opioids off their receptors. Lasts about 45 min, often shorter than the opioid, so they can stop breathing again.",
		use: ["Respiratory depression from opioids", "Neonate who will not breathe after the mother had an opioid in the last 4 hours"],
		avoid: ["Allergy", "Infant of an opioid-dependent mother — you can precipitate withdrawal and seizures"],
		dose: [
			"Ventilate first.",
			"Adult: 0.4 mg slowly IV. Repeat every 5 min up to 2 mg. If 2 mg does nothing, it is probably not an opioid.",
			"Child: 0.1 mg/kg slowly IV or IM every 5 min, max 2 mg.",
			"Pack: 0.4 mg/ml. Onset about 2 min."
		],
		watch: ["Titrate. Stay with them. Withdrawal looks like sweating, agitation, vomiting, and sometimes VT."]
	},
	{
		name: "Nitrous oxide",
		klass: "Inhaled analgesic",
		fence: "In scope. Self-administered. The monograph calls the mix Entonox-style: about half nitrous, half oxygen (card says 52/48).",
		action: "Mild pain relief and sedation by depressing the CNS. The oxygen in the mix supports saturation. Onset 30–60 seconds. Stops when the mask comes off.",
		use: [
			"Musculoskeletal pain",
			"Burns that are not airway burns",
			"Labour pain",
			"Ischaemic chest pain, if no contraindication"
		],
		avoid: [
			"Any altered consciousness or head injury",
			"Possible air trapped in the body: pneumothorax, COPD or asthma, pulmonary oedema, chest injury, abdominal trauma, dive injury, airway burns",
			"Systolic BP under 90",
			"Major facial trauma so they cannot hold the mask"
		],
		dose: [
			"They hold the mask themselves. If they get drowsy, take it away and give oxygen.",
			"After long use, give oxygen for 5–10 min so nitrous leaving the blood does not drop their oxygen.",
			"Below 4°C the gases separate. Invert the cylinder a few times and keep it horizontal, or they may breathe pure nitrous."
		],
		watch: ["Warn them: moderate relief, possible nausea, sleepiness, odd memories. That warning is in the CPG."]
	},
	{
		name: "Methoxyflurane",
		klass: "Inhaled analgesic (Penthrox)",
		fence: "In scope. The patient self-administers it. Trauma pain in a conscious, stable person.",
		action: "Low-dose vapour analgesia. The exact pathway is unclear. It can lower blood pressure and sensitise the heart to adrenaline.",
		use: ["Emergency pain relief in conscious, haemodynamically stable trauma"],
		avoid: [
			"Renal impairment",
			"Severe liver impairment",
			"Unstable circulation",
			"Respiratory depression",
			"Head injury or unconscious",
			"Malignant hyperthermia risk",
			"Porphyria",
			"Allergy"
		],
		dose: ["Up to 6 ml a day: two 3 ml bottles, through the Penthrox inhaler, self-administered.", "Pack is the bottle, the inhaler and the charcoal scavenger."],
		watch: ["Drowsiness, nausea, cough, low BP. Not a drug for the shocked or the head-injured."]
	},
	{
		name: "Medical oxygen",
		klass: "Gas",
		fence: "In scope for every age, including neonates. Give it for hypoxia, not out of habit.",
		action: "Raises oxygen in the blood. It does not treat the cause.",
		use: [
			"SpO2 under 94%, or unknown saturation in a sick patient",
			"Cardiac arrest, anaphylaxis, major trauma, seizure, neonatal resuscitation",
			"COPD: usually aim about 88–92% so you do not knock out their drive"
		],
		avoid: ["Routine oxygen in a stroke or chest-pain patient who is not hypoxic.", "Near 100% for hours in a premature baby if you can titrate — hospital problem, but do not blast a well neonate."],
		dose: [
			"Nasal cannula roughly 1–4 L/min, simple mask 6–10 L/min, non-rebreather 15 L/min when they are very hypoxic.",
			"Bag-mask with reservoir and oxygen during resuscitation.",
			"Titrate to the saturation and to how much work of breathing you see."
		],
		watch: ["Read the end-tidal CO2 too. A rising CO2 with a tiring patient is respiratory failure, not a reason to keep chatting."]
	},
	{
		name: "Lignocaine",
		klass: "Local anaesthetic",
		fence: "ECA: intraosseous flush, local anaesthetic only. Not the anti-arrhythmic infusion. That row is empty for ECA.",
		action: "Blocks sodium channels in the nerve so the marrow infusion hurts less.",
		use: ["Adult intraosseous access, to numb the marrow before you flush and run fluid"],
		avoid: ["Allergy to local anaesthetic", "Do not use it to treat VF or VT"],
		dose: ["Use the milligram dose on your current practical protocol card. The supplied monograph pages do not state a clean ECA IO-flush dose.", "Know the idea: slow into the marrow, let it sit, then flush."],
		watch: ["Too much local anaesthetic causes ringing ears, a metallic taste, seizures, then cardiac depression. Stop and support ABC."]
	}
];
var refused = [
	{
		name: "Amiodarone",
		why: "Shock-refractory VF is an ECT / ALS drug. You defibrillate, give adrenaline, and run high-quality CPR."
	},
	{
		name: "Adenosine",
		why: "Not ECA. You also do not do vagal manoeuvres on this capability list. Narrow SVT is support, monitor, refer."
	},
	{
		name: "GTN",
		why: "Not on the ECA list. Chest pain gets aspirin, oxygen only if hypoxic, and a hospital."
	},
	{
		name: "Morphine and fentanyl",
		why: "Not ECA. Your analgesics are methoxyflurane and nitrous oxide, plus ice, splint, distraction and reassurance."
	},
	{
		name: "Ketamine, etomidate, paralytics",
		why: "RSI is Emergency Care Practitioner work. You do not intubate."
	},
	{
		name: "Oxytocin",
		why: "Not ECA. Know active third-stage management, but you do not inject the drug. Call someone who can."
	},
	{
		name: "Furosemide",
		why: "Pulmonary oedema is sit up, oxygen, no fluid flood, urgent handover. The diuretic is not yours."
	},
	{
		name: "TXA, heparin, thrombolytics",
		why: "Not ECA. Control external bleeding and move."
	},
	{
		name: "IV magnesium",
		why: "Your magnesium is the IM eclampsia dose. IV asthma or arrest magnesium is higher scope."
	},
	{
		name: "IV salbutamol",
		why: "Tocolysis and hyperkalaemia infusions are not yours. Nebulise only."
	},
	{
		name: "Calcium and sodium bicarbonate",
		why: "Not ECA. Recognise hyperkalaemia and tricyclic toxicity and transfer."
	},
	{
		name: "Ondansetron, metoclopramide, promethazine",
		why: "Not on the ECA column. Do not invent an antiemetic."
	}
];
function DrugsView() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(drugs[0]?.name ?? "");
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return drugs;
		return drugs.filter((drug) => [
			drug.name,
			drug.klass,
			drug.fence,
			drug.action,
			...drug.use,
			...drug.dose
		].join(" ").toLowerCase().includes(q));
	}, [query]);
	const current = filtered.find((drug) => drug.name === open) ?? filtered[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[16rem_1fr]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium",
						htmlFor: "drug-search",
						children: "Search the ECA cabinet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "drug-search",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Adrenaline, charcoal, dose…",
						className: "rounded-xl border border-line bg-paper px-3 py-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible",
						children: filtered.map((drug) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(drug.name),
							className: `shrink-0 rounded-xl border px-3 py-2 text-left text-sm ${current?.name === drug.name ? "border-accent bg-soft" : "border-line bg-paper"}`,
							children: drug.name
						}, drug.name))
					})
				]
			}),
			current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-line bg-paper px-5 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-accent",
						children: current.klass
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-4xl",
						children: current.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed",
						children: current.action
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 rounded-xl border border-accent bg-soft px-4 py-3 text-sm leading-relaxed",
						children: current.fence
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Use it for",
							items: current.use
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Do not use it when",
							items: current.avoid
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Dose, from the monograph",
							items: current.dose
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
							title: "Watch",
							items: current.watch
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "No drug matches that search."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-paper px-5 py-5 lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "In the drug book. Not in your hands."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-2 md:grid-cols-2",
					children: refused.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-bg px-3 py-3 text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium",
							children: [item.name, ". "]
						}), item.why]
					}, item.name))
				})]
			})
		]
	});
}
function List({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "font-medium",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-2 flex flex-col gap-2",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "text-sm leading-relaxed text-muted",
			children: item
		}, item))
	})] });
}
var inScope = [
	{
		title: "Airway",
		items: [
			{
				name: "Manual opening, choking manoeuvres, OPA, NPA",
				note: "Every age."
			},
			{
				name: "Suction — upper airway and through an extraglottic tube",
				note: "Not endotracheal suction. You are not intubating."
			},
			{
				name: "Magill forceps",
				note: "For a foreign body you can see and reach."
			},
			{
				name: "Supraglottic airway",
				note: "Cardiac arrest only. Not a breathing overdose, not a seizure."
			},
			{
				name: "Needle cricothyroidotomy",
				note: "Can't intubate, can't oxygenate rescue. Not a surgical cric."
			}
		]
	},
	{
		title: "Breathing",
		items: [
			{
				name: "Oxygen, nebuliser, pulse oximetry",
				note: "Nebulise only drugs on your list."
			},
			{
				name: "Bag-mask and bag-tube ventilation",
				note: "This is your main ventilation skill."
			},
			{
				name: "Oxygen-driven non-invasive ventilation",
				note: "The device that runs on oxygen, not a mechanical ventilator."
			},
			{
				name: "Mechanical infant resuscitator",
				note: "Yes. Neonatal mechanical ventilator, no."
			},
			{
				name: "Needle thoracentesis",
				note: "Adult and child. Not the neonate."
			},
			{
				name: "Capnography",
				note: "Through the mask or nasal prongs, and through an extraglottic tube."
			},
			{
				name: "Peak flow",
				note: "Measure and interpret."
			}
		]
	},
	{
		title: "Circulation",
		items: [
			{
				name: "IV cannula, limbs and hands, over 1 year",
				note: "Not under 1 year, not scalp, not external jugular."
			},
			{
				name: "Adult intraosseous",
				note: "Not paediatric IO."
			},
			{
				name: "Adult IV fluids",
				note: "Not infant or child IV fluid therapy. Children get oral rehydration."
			},
			{
				name: "IM, SC, IV and IO medicines",
				note: "Only the medicines on the ECA list."
			},
			{
				name: "Tourniquet, haemostatic gauze, direct pressure",
				note: "Bleeding control is fully yours."
			},
			{
				name: "PASG and non-pneumatic anti-shock garment",
				note: "Know when it harms: chest injury, pulmonary oedema, pregnancy abdomen."
			},
			{
				name: "AED, manual defibrillator, precordial thump",
				note: "Shock VF and pulseless VT. No synchronised cardioversion. No pacing."
			},
			{
				name: "3-lead ECG",
				note: "Rate and rhythm. Not a 12-lead STEMI diagnosis."
			}
		]
	},
	{
		title: "The rest of the shift",
		items: [
			{
				name: "Normal birth, breech, cord prolapse, malpresentation, preterm, obstructed labour, postpartum bleeding",
				note: "Within the drugs you may actually give. Oxytocin is not one of them."
			},
			{
				name: "Cervical spine clearance and spinal motion restriction",
				note: "Clear only when the rules are met. Otherwise restrict."
			},
			{
				name: "Splints, pelvic binder, vacuum mattress, wound care",
				note: "No suturing."
			},
			{
				name: "Finger-prick glucose, vitals, clinical assessment",
				note: "Glucose before you blame a seizure or a stroke."
			},
			{
				name: "Withhold or stop resuscitation",
				note: "Withhold in decapitation, mortal injury, lividity, putrefaction. Withdrawal is also on your list."
			},
			{
				name: "Incubator and inter-facility transfer",
				note: "At your scope. You do not discharge people on scene."
			}
		]
	}
];
var outScope = [{
	title: "Do not do these",
	items: [
		{
			name: "Intubation, RSI, video laryngoscope, surgical cric",
			note: "Practitioner skills."
		},
		{
			name: "Supraglottic airway outside cardiac arrest",
			note: "The annexure marks ECA SGA as CA only."
		},
		{
			name: "Nasogastric tube, urinary catheter, ultrasound",
			note: "Not your column."
		},
		{
			name: "IV line or IV fluid in an infant, paediatric IO, umbilical vein",
			note: "Adult IO and adult fluids. Children: oral routes and oxygen."
		},
		{
			name: "IV dextrose in a child or neonate",
			note: "Adult 50% dextrose only. Child: oral glucose or glucagon."
		},
		{
			name: "12-lead diagnosis, thrombolysis, pacing, cardioversion, vagal manoeuvres",
			note: "All absent from the ECA column."
		},
		{
			name: "On-scene discharge",
			note: "A refusal of transport is not the same thing, and discharge is ECP only."
		}
	]
}, {
	title: "Do not give these",
	items: [
		{
			name: "Amiodarone, adenosine, GTN, morphine, fentanyl, ketamine",
			note: "Higher scope, even if the drug book has a page."
		},
		{
			name: "Oxytocin, furosemide, TXA, heparin, clot-busters",
			note: "Know the illness. Do not give the drug."
		},
		{
			name: "IV magnesium, IV salbutamol, calcium, bicarbonate",
			note: "IM magnesium for eclampsia is the exception."
		},
		{
			name: "Paralytics, induction agents, ondansetron",
			note: "Not on the ECA list."
		}
	]
}];
function ScopeView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
			heading: "You may",
			groups: inScope,
			hot: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
			heading: "You may not",
			groups: outScope,
			hot: false
		})]
	});
}
function Column({ heading, groups, hot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `rounded-xl border px-4 py-4 ${hot ? "border-accent bg-soft" : "border-line bg-paper"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: heading
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-col gap-4",
			children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-medium",
				children: group.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-col gap-2",
				children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-paper px-3 py-3 text-sm leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-medium",
						children: [item.name, ". "]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: item.note
					})]
				}, item.name))
			})] }, group.title))
		})]
	});
}
var tools = [
	{
		id: "sats",
		label: "SATS"
	},
	{
		id: "parkland",
		label: "Parkland"
	},
	{
		id: "drip",
		label: "Drip"
	},
	{
		id: "apgar",
		label: "APGAR"
	},
	{
		id: "dose",
		label: "Doses"
	}
];
function ToolsView() {
	const [tool, setTool] = (0, import_react.useState)("sats");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "The sums they will ask for."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: "Adult SATS, Parkland from the time of the burn, drip rate, APGAR, and the weight-based doses that sit inside the ECA column. Paediatric SATS uses a different age chart. Do not force an adult score onto a child."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto",
				children: tools.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTool(item.id),
					className: `shrink-0 rounded-xl px-4 py-3 text-sm font-medium ${tool === item.id ? "bg-ink text-paper" : "border border-line bg-paper"}`,
					children: item.label
				}, item.id))
			}),
			tool === "sats" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sats, {}) : null,
			tool === "parkland" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parkland, {}) : null,
			tool === "drip" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drip, {}) : null,
			tool === "apgar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apgar, {}) : null,
			tool === "dose" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoseCard, {}) : null
		]
	});
}
function num(value) {
	if (value.trim() === "") return null;
	const n = Number(value);
	return Number.isFinite(n) ? n : null;
}
function round(value, places = 0) {
	const factor = 10 ** places;
	const rounded = Math.round(value * factor) / factor;
	return String(rounded);
}
function Sats() {
	const [mobility, setMobility] = (0, import_react.useState)("0");
	const [rr, setRr] = (0, import_react.useState)("");
	const [hr, setHr] = (0, import_react.useState)("");
	const [sbp, setSbp] = (0, import_react.useState)("");
	const [temp, setTemp] = (0, import_react.useState)("");
	const [avpu, setAvpu] = (0, import_react.useState)("0");
	const [trauma, setTrauma] = (0, import_react.useState)(false);
	const [emergency, setEmergency] = (0, import_react.useState)(false);
	const parts = (0, import_react.useMemo)(() => {
		const resp = num(rr);
		const heart = num(hr);
		const pressure = num(sbp);
		const temperature = num(temp);
		if (!(resp !== null && heart !== null && pressure !== null && temperature !== null) || resp === null || heart === null || pressure === null || temperature === null) return null;
		const rows = [
			{
				name: "Mobility",
				score: Number(mobility)
			},
			{
				name: "Respiratory rate",
				score: scoreRr(resp)
			},
			{
				name: "Heart rate",
				score: scoreHr(heart)
			},
			{
				name: "Systolic BP",
				score: scoreSbp(pressure)
			},
			{
				name: "Temperature",
				score: scoreTemp(temperature)
			},
			{
				name: "AVPU",
				score: Number(avpu)
			},
			{
				name: "Trauma",
				score: trauma ? 1 : 0
			}
		];
		return {
			rows,
			total: rows.reduce((sum, row) => sum + row.score, 0)
		};
	}, [
		mobility,
		rr,
		hr,
		sbp,
		temp,
		avpu,
		trauma
	]);
	const band = parts ? satsBand(parts.total, emergency) : null;
	function loadRed() {
		setMobility("2");
		setRr("32");
		setHr("140");
		setSbp("75");
		setTemp("36");
		setAvpu("3");
		setTrauma(true);
		setEmergency(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 rounded-xl border border-line bg-paper p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					label: "Mobility",
					value: mobility,
					onChange: setMobility,
					options: [
						["0", "Walking"],
						["1", "With help"],
						["2", "Stretcher"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Respiratory rate",
					value: rr,
					onChange: setRr,
					suffix: "/min"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Heart rate",
					value: hr,
					onChange: setHr,
					suffix: "/min"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Systolic BP",
					value: sbp,
					onChange: setSbp,
					suffix: "mmHg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Temperature",
					value: temp,
					onChange: setTemp,
					suffix: "°C"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					label: "AVPU",
					value: avpu,
					onChange: setAvpu,
					options: [
						["0", "Alert"],
						["1", "Voice"],
						["2", "Pain"],
						["3", "Unresponsive"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					label: "Trauma is part of this presentation",
					checked: trauma,
					onChange: setTrauma
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					label: "Emergency sign: not breathing, fitting now, or unresponsive to pain",
					checked: emergency,
					onChange: setEmergency
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: loadRed,
					className: "min-h-11 self-start rounded-xl border border-line px-4 text-sm",
					children: "Load a red example"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-line bg-paper p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Adult TEWS"
				}),
				parts && band ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-1 text-sm",
						children: parts.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-4 border-b border-line py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: row.score
							})]
						}, row.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-5xl",
						children: parts.total
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `mt-3 rounded-xl border px-4 py-3 leading-relaxed ${band.urgent ? "border-accent bg-soft" : "border-line bg-bg"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium",
							children: [band.name, ". "]
						}), band.detail]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Enter rate, heart rate, blood pressure and temperature."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: "0–2 green, 3–4 yellow, 5–6 orange, 7 or more red. An emergency sign is red even if the number is small. Mobility: walk 0, help 1, stretcher 2. Trauma adds 1."
				})
			]
		})]
	});
}
function scoreRr(value) {
	if (value < 9) return 2;
	if (value <= 14) return 0;
	if (value <= 20) return 1;
	if (value <= 29) return 2;
	return 3;
}
function scoreHr(value) {
	if (value < 41) return 2;
	if (value <= 50) return 1;
	if (value <= 100) return 0;
	if (value <= 110) return 1;
	if (value <= 129) return 2;
	return 3;
}
function scoreSbp(value) {
	if (value < 71) return 3;
	if (value <= 80) return 2;
	if (value <= 100) return 1;
	if (value <= 199) return 0;
	return 2;
}
function scoreTemp(value) {
	if (value < 35) return 2;
	if (value < 38.5) return 0;
	return 2;
}
function satsBand(score, emergency) {
	if (emergency) return {
		name: "Red",
		detail: "Emergency sign overrides the number. Treat and move this patient first.",
		urgent: true
	};
	if (score >= 7) return {
		name: "Red",
		detail: "TEWS of 7 or more.",
		urgent: true
	};
	if (score >= 5) return {
		name: "Orange",
		detail: "TEWS 5 or 6. Very urgent.",
		urgent: true
	};
	if (score >= 3) return {
		name: "Yellow",
		detail: "TEWS 3 or 4. Urgent.",
		urgent: false
	};
	return {
		name: "Green",
		detail: "TEWS 0 to 2. Still look at them. The number is not a discharge.",
		urgent: false
	};
}
function Parkland() {
	const [kg, setKg] = (0, import_react.useState)("70");
	const [pct, setPct] = (0, import_react.useState)("40");
	const [hours, setHours] = (0, import_react.useState)("2");
	const [given, setGiven] = (0, import_react.useState)("0");
	const result = (0, import_react.useMemo)(() => {
		const weight = num(kg);
		const burn = num(pct);
		const elapsed = num(hours);
		const already = num(given);
		if (weight === null || burn === null || elapsed === null || already === null) return null;
		if (weight <= 0 || burn < 0 || burn > 100 || elapsed < 0 || already < 0) return { error: "Weight must be above 0, burn 0–100%, hours and fluid already given cannot be negative." };
		const total = 4 * weight * burn;
		const half = total / 2;
		if (elapsed >= 24) return { error: `Total was ${round(total)} ml. The 24-hour clock from the burn has run out. This is no longer a Parkland catch-up. Hand over and ask the hospital.` };
		if (elapsed < 8) {
			const left = 8 - elapsed;
			const still = Math.max(0, half - already);
			return {
				total,
				half,
				rate: still / left,
				note: still === 0 ? `The first half (${round(half)} ml) is already in. Do not keep pouring until hour 8. The second half starts after that.` : `Clock starts at the burn, not at the door. First half is ${round(half)} ml by hour 8. ${round(still)} ml of that half is still owed, over ${round(left, 1)} hours. You do not throw away fluid that was never given.`
			};
		}
		const left = 24 - elapsed;
		const owed = Math.max(0, total - already);
		return {
			total,
			half,
			rate: owed / left,
			note: `Hour 8 has passed. Everything still owed is ${round(owed)} ml, including any of the first half that was missed. Run it over the ${round(left, 1)} hours left. Do not discard the missed fluid, and do not pretend the clock started when you arrived.`
		};
	}, [
		kg,
		pct,
		hours,
		given
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 rounded-xl border border-line bg-paper p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Weight",
					value: kg,
					onChange: setKg,
					suffix: "kg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Burn area, percent of body",
					value: pct,
					onChange: setPct,
					suffix: "%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Hours since the burn",
					value: hours,
					onChange: setHours,
					suffix: "h"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Fluid already given",
					value: given,
					onChange: setGiven,
					suffix: "ml"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "4 ml × kg × % burn in 24 hours. Half in the first 8 hours from the injury. Half over the next 16. Only partial-thickness and full-thickness area. This is an adult crystalloid plan."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
			title: "Parkland",
			body: result && "error" in result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "leading-relaxed",
				children: result.error
			}) : result && "rate" in result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "24-hour total"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-4xl",
					children: [round(result.total), " ml"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Each half"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-3xl",
					children: [round(result.half), " ml"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Rate for the window you are in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-5xl",
					children: [round(result.rate), " ml/h"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed",
					children: result.note
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Fill in all four boxes."
			})
		})]
	});
}
function Drip() {
	const [ml, setMl] = (0, import_react.useState)("500");
	const [minutes, setMinutes] = (0, import_react.useState)("60");
	const [factor, setFactor] = (0, import_react.useState)("15");
	const result = (0, import_react.useMemo)(() => {
		const volume = num(ml);
		const time = num(minutes);
		const drops = num(factor);
		if (volume === null || time === null || drops === null) return null;
		if (volume < 0 || time <= 0 || drops <= 0) return { error: "Volume cannot be negative, and time and drop factor must be above 0." };
		return {
			perMin: volume * drops / time,
			perHour: volume / (time / 60)
		};
	}, [
		ml,
		minutes,
		factor
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 rounded-xl border border-line bg-paper p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Volume to give",
					value: ml,
					onChange: setMl,
					suffix: "ml"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Time",
					value: minutes,
					onChange: setMinutes,
					suffix: "min"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					label: "Drop factor",
					value: factor,
					onChange: setFactor,
					options: [
						["10", "10 — blood set"],
						["15", "15 — giving set"],
						["20", "20 — giving set"],
						["60", "60 — microdrop"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Drops per minute = (ml × drop factor) ÷ minutes."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
			title: "Drip rate",
			body: result && "error" in result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: result.error }) : result && "perMin" in result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-5xl",
				children: [round(result.perMin), " gtt/min"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: [round(result.perHour), " ml/h"]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Enter a volume and a time."
			})
		})]
	});
}
var apgarRows = [
	{
		key: "appearance",
		label: "Appearance",
		options: [
			"Blue or pale",
			"Body pink, limbs blue",
			"Pink all over"
		]
	},
	{
		key: "pulse",
		label: "Pulse",
		options: [
			"Absent",
			"Under 100",
			"100 or more"
		]
	},
	{
		key: "grimace",
		label: "Grimace",
		options: [
			"No response",
			"Grimace",
			"Cry, cough or sneeze"
		]
	},
	{
		key: "activity",
		label: "Activity",
		options: [
			"Limp",
			"Some flexion",
			"Active"
		]
	},
	{
		key: "respiration",
		label: "Respiration",
		options: [
			"Absent",
			"Slow or irregular",
			"Strong cry"
		]
	}
];
function Apgar() {
	const [scores, setScores] = (0, import_react.useState)({
		appearance: 2,
		pulse: 2,
		grimace: 2,
		activity: 2,
		respiration: 2
	});
	const total = apgarRows.reduce((sum, row) => sum + (scores[row.key] ?? 0), 0);
	const reading = total >= 7 ? "7–10. Reassuring. Dry, warm, skin-to-skin, and keep watching." : total >= 4 ? "4–6. Moderate depression. Stimulate, oxygen if needed, and be ready to ventilate." : "0–3. Severe. Open the airway and ventilate. Compress if the heart stays under 60 after effective breaths.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-4 rounded-xl border border-line bg-paper p-4",
			children: apgarRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "text-sm font-medium",
				children: row.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 grid gap-2 sm:grid-cols-3",
				children: row.options.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setScores((prev) => ({
						...prev,
						[row.key]: index
					})),
					className: `min-h-11 rounded-xl border px-2 py-2 text-sm ${scores[row.key] === index ? "border-accent bg-soft" : "border-line bg-bg"}`,
					children: [
						index,
						". ",
						label
					]
				}, label))
			})] }, row.key))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
			title: "APGAR",
			body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-6xl",
					children: total
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed",
					children: reading
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Score at 1 minute, and again if they are not well. Each part is 0, 1 or 2. Do not routinely suction a vigorous baby born through meconium."
				})
			] })
		})]
	});
}
function DoseCard() {
	const [kg, setKg] = (0, import_react.useState)("");
	const [age, setAge] = (0, import_react.useState)("");
	const weight = num(kg);
	const years = num(age);
	const estimate = years !== null && years >= 1 && years <= 10 ? (years + 4) * 2 : null;
	const lines = weight !== null && weight > 0 ? doseLines(weight, years) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 rounded-xl border border-line bg-paper p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Weight",
					value: kg,
					onChange: setKg,
					suffix: "kg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Age, if you need the estimate",
					value: age,
					onChange: setAge,
					suffix: "years"
				}),
				estimate !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setKg(String(estimate)),
					className: "min-h-11 self-start rounded-xl border border-line px-4 text-sm",
					children: [
						"Use estimated weight, ",
						estimate,
						" kg"
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Estimated weight is (age + 4) × 2, for about 1 to 10 years."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-bg px-3 py-3 text-sm leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Adult doses that do not use the scale"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-2 flex flex-col gap-1 text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Arrest adrenaline: 1 mg IV every 3–5 min." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Anaphylaxis adrenaline: 0.3 mg IM (0.3 ml of 1:1000)." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Naloxone start: 0.4 mg slow IV, up to 2 mg. Goal is breathing." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Oral glucose: 25 g if they can swallow." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Adult D50: 20 ml of 50% slowly. Not for children." })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
			title: "Weight-based ECA doses",
			body: lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Enter a weight. Child IV dextrose stays off this card on purpose."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-3",
				children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-b border-line pb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: line.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: line.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: line.note
						})
					]
				}, line.name))
			})
		})]
	});
}
function doseLines(kg, age) {
	const arrestMg = Math.min(.01 * kg, 1);
	const anaMg = Math.min(.01 * kg, .3);
	const diazRaw = .2 * kg;
	const diazCap = age === null ? null : age < 5 ? 5 : 10;
	const diaz = diazCap === null ? diazRaw : Math.min(diazRaw, diazCap);
	const midaz = .15 * kg;
	const nal = Math.min(.1 * kg, 2);
	const hydro = 5 * kg;
	const glucagon = kg < 20 ? .5 : 1;
	return [
		{
			name: "Arrest adrenaline",
			value: `${round(arrestMg, 2)} mg`,
			note: `0.01 mg/kg, capped at the adult 1 mg. That is ${round(arrestMg / .1, 2)} ml of the 0.1 mg/ml dilution (0.1 ml/kg, max 10 ml).`
		},
		{
			name: "Anaphylaxis adrenaline, IM",
			value: `${round(anaMg, 2)} mg`,
			note: `0.01 mg/kg, capped at the adult 0.3 mg. Draw ${round(anaMg, 2)} ml of 1 mg/ml (1:1000). Adult stays 0.3 mg.`
		},
		{
			name: "Diazepam, seizure",
			value: `${round(diaz, 2)} mg slow IV`,
			note: diazCap === null ? `0.2 mg/kg. Cap is 5 mg under 5 years and 10 mg if older. Enter an age to apply the cap. Adult is about 0.15 mg/kg, max 20 mg, no faster than 5 mg/min. IM is unreliable.` : `0.2 mg/kg, capped at ${diazCap} mg for this age. Adult max is 20 mg.`
		},
		{
			name: "Midazolam, seizure",
			value: `${round(midaz, 2)} mg`,
			note: "0.15 mg/kg slow IV or IM. Not an induction dose. Child rectal is 0.4–1 mg/kg and nasal is 0.4 mg/kg if that is the route you were taught."
		},
		{
			name: "Naloxone",
			value: `${round(nal, 2)} mg`,
			note: "Child 0.1 mg/kg IV or IM, max 2 mg. Ventilate first. Stop when they breathe."
		},
		{
			name: "Activated charcoal",
			value: `${round(.5 * kg)}–${round(kg)} g`,
			note: "0.5–1 g/kg by mouth, only if the airway is safe and the poison is one charcoal binds."
		},
		{
			name: "Hydrocortisone, asthma",
			value: `${round(hydro)} mg`,
			note: "5 mg/kg IV slowly. Adult anaphylaxis is a fixed 200–500 mg, not this sum. It will not replace adrenaline."
		},
		{
			name: "Glucagon, hypoglycaemia",
			value: `${glucagon} mg IM`,
			note: "Under 20 kg: 0.5 mg. Otherwise 1 mg. Mix with the water in the box, not saline. Feed them when they wake."
		}
	];
}
function Field({ label, value, onChange, suffix }) {
	const id = `tool-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-medium",
		htmlFor: id,
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mt-1 flex items-center gap-2 font-normal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				inputMode: "decimal",
				value,
				onChange: (event) => onChange(event.target.value),
				className: "w-full rounded-xl border border-line bg-bg px-3 py-3"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-16 shrink-0 text-muted",
				children: suffix
			})]
		})]
	});
}
function Choice({ label, value, onChange, options }) {
	const id = `choice-${label.replace(/\s+/g, "-").toLowerCase()}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-medium",
		htmlFor: id,
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			id,
			value,
			onChange: (event) => onChange(event.target.value),
			className: "mt-1 w-full rounded-xl border border-line bg-bg px-3 py-3 font-normal",
			children: options.map(([optionValue, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: optionValue,
				children: text
			}, optionValue))
		})]
	});
}
function Check({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex min-h-11 items-start gap-3 text-sm leading-relaxed",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked,
			onChange: (event) => onChange(event.target.checked),
			className: "mt-1 h-4 w-4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function Result({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-paper p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3",
			children: body
		})]
	});
}
var questions = [
	{
		id: "pass",
		unit: "Pass mark",
		prompt: "What does a student need to pass Emergency Care Practice?",
		options: [
			"50% overall is enough, even if Test 2 or Simulation 2 is 40%",
			"50% on every single assessment",
			"At least 50% overall, and at least 50% on Test 2, and at least 50% on Simulation 2",
			"50% on Simulation 2 only, because it has the subminimum"
		],
		answer: 2,
		why: "The guide is explicit. Overall 50% is not enough. Theory paper 2 and simulation 2 each carry their own 50% subminimum."
	},
	{
		id: "weights",
		unit: "Pass mark",
		prompt: "Which weighting row is correct?",
		options: [
			"Sim 1 is 20%, Sim 2 is 25%, Test 1 is 25%, Test 2 is 30%",
			"Each of the four assessments is 25%",
			"Test 2 is 50% because of the subminimum",
			"Sim 2 is 30% and Test 2 is 25%"
		],
		answer: 0,
		why: "20 + 25 + 25 + 30 = 100. The subminimum is a hurdle, not a bigger percentage."
	},
	{
		id: "attend",
		unit: "Rules",
		prompt: "Practical attendance required before you can sit the practical exam assessments is:",
		options: [
			"80%, the same as theory",
			"100%",
			"50% plus a sick note",
			"Attendance is not recorded"
		],
		answer: 1,
		why: "Theory is 80%. Practical, including experiential duties, is 100%. Miss practicals and you do not get access to the practical exams."
	},
	{
		id: "adr-arrest",
		unit: "Arrest",
		prompt: "Adult cardiac-arrest adrenaline, from the monograph, is:",
		options: [
			"0.3 mg IM once",
			"1 mg IV push, repeated every 3–5 minutes",
			"300 mg IV once",
			"2–10 micrograms per minute as your first dose"
		],
		answer: 1,
		why: "1 mg IV every 3–5 min. The 0.3 mg IM dose is anaphylaxis. 300 mg is amiodarone, which is not yours. The infusion is post-ROSC and not the ECA line."
	},
	{
		id: "amio",
		unit: "Arrest",
		prompt: "VF has not converted after CPR, a shock and adrenaline. As an ECA you:",
		options: [
			"Give amiodarone 300 mg because it is in the drug book",
			"Keep high-quality CPR, shock again when indicated, repeat adrenaline on time, and treat reversible causes you are allowed to treat",
			"Give adenosine 6 mg fast",
			"Stop after one shock if the patient is still in VF"
		],
		answer: 1,
		why: "Amiodarone and adenosine are not on the ECA medication column. Defibrillation and arrest adrenaline are."
	},
	{
		id: "aspirin",
		unit: "Heart",
		prompt: "Suspected myocardial infarction, patient awake and not allergic. Aspirin dose:",
		options: [
			"500 mg enteric-coated, swallowed whole",
			"150–300 mg chewed, crushed or dissolved. Not enteric-coated",
			"75 mg next morning",
			"Aspirin is not in ECA scope"
		],
		answer: 1,
		why: "The monograph is specific: 150–300 mg, not the 500 mg tablet, not enteric-coated, and the patient must be conscious. Aspirin is on the ECA list."
	},
	{
		id: "atropine",
		unit: "Toxins",
		prompt: "An ECA may give atropine for:",
		options: [
			"Any bradycardia under 50",
			"Asystole, 1 mg every 3–5 min",
			"Organophosphate or carbamate poisoning, until secretions dry up",
			"Asthma, instead of salbutamol"
		],
		answer: 2,
		why: "The capability list splits atropine. ECA has the toxidrome indication only. Adult dose 0.5–2.5 mg IV every 4 min; child 0.02 mg/kg."
	},
	{
		id: "flumazenil",
		unit: "Toxins",
		prompt: "When may an ECA give flumazenil?",
		options: [
			"Any unconscious patient, to see if they wake up",
			"A mixed street overdose that might include benzos",
			"Only after a benzodiazepine you administered has over-sedated the patient",
			"Status epilepticus, to reverse the lorazepam that stopped the seizure"
		],
		answer: 2,
		why: "Iatrogenic only. Unknown overdose, tricyclics, and status epilepticus are contraindications. You can cause a seizure."
	},
	{
		id: "naloxone",
		unit: "Toxins",
		prompt: "The point of naloxone is to:",
		options: [
			"Wake the patient fully so they can walk to the ambulance",
			"Reverse respiratory depression, given slowly, after you are already ventilating",
			"Empty the stomach",
			"Treat benzodiazepine overdose"
		],
		answer: 1,
		why: "Full reversal in a dependent patient causes withdrawal, vomiting and violence. Adult start is 0.4 mg slowly IV, up to 2 mg. It wears off. Stay with them."
	},
	{
		id: "charcoal",
		unit: "Toxins",
		prompt: "Activated charcoal is a bad idea in which ingestion?",
		options: [
			"A tablet overdose 30 minutes ago, patient fully awake",
			"Paraffin / hydrocarbon, or organophosphate, or iron",
			"A patient who can sit up and swallow",
			"Anything within the first hour, automatically"
		],
		answer: 1,
		why: "The monograph bans charcoal in iron, organophosphates, alcohols, lithium, cyanide, petroleum, strong acids and alkalis. Hydrocarbon risk is aspiration. ECA also cannot place the nasogastric tube."
	},
	{
		id: "dextrose",
		unit: "Endocrine",
		prompt: "A 4-year-old is unconscious with glucose 1.8 mmol/L. The ECA plan is:",
		options: [
			"20 ml of 50% dextrose IV, same as an adult",
			"IV dextrose is not on your paediatric list. Glucagon or oral glucose if they can take it, and urgent referral",
			"Insulin, because the number looks like diabetes",
			"Flumazenil"
		],
		answer: 1,
		why: "Adult IV dextrose is ECA. Paediatric and neonatal IV dextrose is not. Glucagon: under 20 kg, 0.5 mg IM."
	},
	{
		id: "mag",
		unit: "Obstetrics",
		prompt: "Eclampsia and you are the ECA. Magnesium:",
		options: [
			"2–4 g IV over 20 minutes, then an infusion",
			"5 g deep IM in each buttock — the IM alternative. IV magnesium is not your column",
			"Magnesium is not used in pregnancy",
			"Nebulised magnesium for the seizure"
		],
		answer: 1,
		why: "ECA magnesium is intramuscular only. The monograph’s pregnancy alternative is 5 g deep IM each buttock. The IV bolus is higher scope."
	},
	{
		id: "oxytocin",
		unit: "Obstetrics",
		prompt: "Active management of the third stage includes oxytocin 10 units IM. You:",
		options: [
			"Draw it up. Every birth attendant gives oxytocin",
			"Can describe the step, check there is no second twin, and must not give oxytocin yourself",
			"Pull the cord immediately to avoid the injection",
			"Massage the uterus hard while the placenta is still inside"
		],
		answer: 1,
		why: "Oxytocin is not on the ECA medication list. Do not massage or yank while the placenta is inside. Rub the fundus after it is out, and get help for the drug."
	},
	{
		id: "parkland",
		unit: "Burns",
		prompt: "Parkland timing. The first half of the fluid is given:",
		options: [
			"Over the first 8 hours from arrival at hospital",
			"Over the first 8 hours from the moment of the burn",
			"As fast as the drip will run, all of it",
			"Only after 24 hours"
		],
		answer: 1,
		why: "4 ml × kg × % burn in 24 hours. Half in the first 8 hours from the time of injury, half over the next 16. If they burned 2 hours ago, you have 6 hours left for that first half."
	},
	{
		id: "ecg",
		unit: "Heart",
		prompt: "What is true of a 3-lead ECG in chest pain?",
		options: [
			"A normal 3-lead excludes a myocardial infarction",
			"It shows rate and rhythm. It cannot map a STEMI or clear ACS. 12-lead diagnosis is not ECA",
			"You should fibrinolyise from it",
			"GTN is mandatory before you look at it"
		],
		answer: 1,
		why: "The outcome asks you to discuss the limits of the 3-lead. Aspirin if the story fits and there is no contraindication. No GTN, no lysis."
	},
	{
		id: "sga",
		unit: "Airway",
		prompt: "When may an ECA place a supraglottic airway?",
		options: [
			"Any unconscious patient",
			"Cardiac arrest",
			"Asthma that is tiring",
			"Before bag-mask has been tried, as the first airway"
		],
		answer: 1,
		why: "The annexure marks ECA supraglottic insertion as cardiac arrest only. Everyone else gets positioning, adjuncts and a bag-mask."
	},
	{
		id: "pfluids",
		unit: "Children",
		prompt: "A vomiting toddler is dry but has a pulse and is awake. ECA fluid therapy is:",
		options: [
			"A 20 ml/kg IV bolus, same as an ECT",
			"Oral rehydration. Paediatric IV fluid therapy is not on the ECA list",
			"No fluids until hospital, even if they can drink",
			"50% dextrose, because dry children are always hypoglycaemic"
		],
		answer: 1,
		why: "Oral rehydration is yours at every age. IV fluid therapy for infants and children is not. Check glucose anyway — treat hypo by the paediatric route you are allowed."
	},
	{
		id: "shocks",
		unit: "Spine",
		prompt: "Which pair is correct?",
		options: [
			"Neurogenic shock is flaccid paralysis that recovers in days. Spinal shock is low BP with a slow heart",
			"Spinal shock is a temporary loss of reflexes below the injury. Neurogenic shock is hypotension with bradycardia from lost sympathetic tone, usually a high cord",
			"They are the same thing",
			"Autonomic hyperreflexia is the name for shock in the first hour"
		],
		answer: 1,
		why: "Examiners love this swap. Hyperreflexia comes later in chronic high cord injury: a full bladder triggers a pounding headache and high BP with a slow heart."
	},
	{
		id: "meconium",
		unit: "Newborn",
		prompt: "A term baby is born through meconium, cries at once, and is vigorous. You:",
		options: [
			"Suction the mouth and nose deeply before drying",
			"Do not routinely suction. Dry, stimulate, skin-to-skin, and watch",
			"Intubate and suction the trachea",
			"Start chest compressions because meconium always means arrest"
		],
		answer: 1,
		why: "CPG: routine oro- and nasopharyngeal suction of neonates is not recommended. Suction only if meconium is blocking the airway. A floppy, apnoeic baby gets ventilation, not a long suction ritual."
	},
	{
		id: "entonox",
		unit: "Pain",
		prompt: "Nitrous oxide is contraindicated in:",
		options: [
			"A sober patient with a broken wrist and a normal chest",
			"Suspected pneumothorax, head injury, or systolic BP under 90",
			"Labour, because it is too weak to mention",
			"Every chest-pain patient"
		],
		answer: 1,
		why: "Nitrous expands trapped gas and sedates. Head injury, air entrapment, hypotension under 90, and facial trauma that stops them holding the mask are the monograph stops. Labour is an indication, and you must warn that relief is only moderate."
	},
	{
		id: "glucose-first",
		unit: "Seizures",
		prompt: "Before you give a benzodiazepine for a seizure you:",
		options: [
			"Always give flumazenil afterwards",
			"Check glucose and be ready to ventilate. Hypoglycaemia is a reversible cause",
			"Give amiodarone in case it is cardiac",
			"Wait 30 minutes to see if it is status"
		],
		answer: 1,
		why: "The diazepam monograph says rule out reversible causes such as hypoglycaemia first. Status is about 5 minutes or repeated seizures without recovery — do not wait half an hour."
	},
	{
		id: "needle",
		unit: "Chest",
		prompt: "Needle thoracentesis for tension pneumothorax is:",
		options: [
			"ECP only",
			"In ECA scope for adults and children, not for neonates",
			"Never done prehospital",
			"The treatment for cardiac tamponade"
		],
		answer: 1,
		why: "Annexure: adult and paediatric yes, neonate no. Tamponade is muffled sounds and a hospital, not a needle in the pleural space."
	},
	{
		id: "svt",
		unit: "Heart",
		prompt: "Stable narrow-complex SVT. Your ECA move is:",
		options: [
			"Adenosine 6 mg with a 20 ml flush",
			"A vagal manoeuvre, because it is harmless",
			"Support, oxygen if hypoxic, monitor, and refer. Adenosine and vagal manoeuvres are not on the ECA list",
			"Synchronised cardioversion"
		],
		answer: 2,
		why: "Read the column, not the drug-book cover. Those three interventions sit with ANT / ECP."
	},
	{
		id: "sats",
		unit: "Triage",
		prompt: "Adult TEWS of 7 or more, with no extra story, is which SATS colour?",
		options: [
			"Green",
			"Yellow",
			"Orange",
			"Red"
		],
		answer: 3,
		why: "0–2 green, 3–4 yellow, 5–6 orange, 7 or more red. A clinical emergency sign (not breathing, fitting now, unresponsive) is red even when the number is smaller."
	},
	{
		id: "cpr",
		unit: "Arrest",
		prompt: "Adult high-quality CPR means:",
		options: [
			"60 compressions a minute, 3 cm deep, so you do not tire",
			"100–120 per minute, 5–6 cm deep, full recoil, pauses under 10 seconds",
			"Continuous breaths at 30 a minute with no compressions until the defib arrives",
			"Adrenaline before you start compressions"
		],
		answer: 1,
		why: "Rate, depth, recoil, and compression fraction are the AHA quality indicators the outcome names. Swap compressor every 2 minutes."
	},
	{
		id: "preg-cpr",
		unit: "Arrest",
		prompt: "Cardiac arrest in late pregnancy. The useful adaptation is:",
		options: [
			"Tilt the whole board steeply onto the left and accept poor compressions",
			"Manual left uterine displacement so the uterus is off the vena cava, and keep compressions effective",
			"No adrenaline, because it harms the foetus",
			"Delay defibrillation until after delivery"
		],
		answer: 1,
		why: "Displacement beats a steep tilt. Shock and adrenaline still happen. Perimortem caesarean is a hospital decision, not an ECA procedure."
	},
	{
		id: "two",
		unit: "Triage",
		prompt: "Two patients, one SATS red and one SATS yellow, one pair of hands. You:",
		options: [
			"Stay with the yellow patient because they can talk to you",
			"Prioritise the red patient for care and transport",
			"Treat whoever is closest to the ambulance",
			"Average the two colours and work alphabetically"
		],
		answer: 1,
		why: "That is outcome A, criterion ii: choose between two patients with SATS. Higher acuity first. Do not get trapped by the talking patient."
	},
	{
		id: "steroid",
		unit: "Allergy",
		prompt: "Hydrocortisone in anaphylaxis:",
		options: [
			"Replaces adrenaline if you would rather not inject",
			"Is given as well as IM adrenaline. Its onset is 1–2 hours, so it will not save the airway now",
			"Is not in ECA scope",
			"Is nebulised"
		],
		answer: 1,
		why: "Adult 200–500 mg IM or IV after adrenaline. Repeat adrenaline every 15–20 min if they are still in trouble. Salbutamol if they wheeze. Adult fluids if they are shocked."
	}
];
function DrillView() {
	const [pool, setPool] = (0, import_react.useState)(questions);
	const [step, setStep] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [correctIds, setCorrectIds] = (0, import_react.useState)([]);
	const [missed, setMissed] = (0, import_react.useState)([]);
	const [finished, setFinished] = (0, import_react.useState)(false);
	const question = pool[step];
	const score = correctIds.length;
	const summary = (0, import_react.useMemo)(() => {
		return missed.filter((item, index, list) => list.findIndex((q) => q.id === item.id) === index);
	}, [missed]);
	function choose(index) {
		if (!question || picked !== null) return;
		setPicked(index);
		if (index === question.answer) setCorrectIds((prev) => [...prev, question.id]);
		else setMissed((prev) => [...prev, question]);
	}
	function next() {
		if (step + 1 >= pool.length) {
			setFinished(true);
			return;
		}
		setStep((value) => value + 1);
		setPicked(null);
	}
	function restart(nextPool) {
		setPool(nextPool);
		setStep(0);
		setPicked(null);
		setCorrectIds([]);
		setMissed([]);
		setFinished(false);
	}
	if (finished || !question) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex max-w-2xl flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Drill result"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-5xl",
				children: [
					score,
					" / ",
					pool.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "leading-relaxed text-muted",
				children: summary.length === 0 ? "Clean run. Do it again next week, not only the night before Test 2." : "The ones below are the ones to reread. The why-line is the marking point."
			}),
			summary.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-3",
				children: summary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-accent bg-soft px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-accent",
							children: item.unit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium",
							children: item.prompt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: item.why
						})
					]
				}, item.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => restart(questions),
					className: "min-h-11 rounded-xl bg-accent px-4 font-medium text-on-accent",
					children: "Start again"
				}), summary.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => restart(summary),
					className: "min-h-11 rounded-xl border border-line bg-paper px-4",
					children: "Drill only the misses"
				}) : null]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex max-w-2xl flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium text-accent",
				children: [
					question.unit,
					" · ",
					step + 1,
					" of ",
					pool.length
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 h-2 overflow-hidden rounded-full bg-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent",
					style: { width: `${Math.round(step / pool.length * 100)}%` }
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl leading-tight",
				children: question.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2",
				children: question.options.map((option, index) => {
					const selected = picked === index;
					const tone = picked !== null && index === question.answer ? "border-ink bg-ink text-paper" : selected ? "border-accent bg-soft" : "border-line bg-paper";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: picked !== null,
						onClick: () => choose(index),
						className: `min-h-11 rounded-xl border px-4 py-3 text-left leading-relaxed disabled:cursor-default ${tone}`,
						children: option
					}, option);
				})
			}),
			picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-paper px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: picked === question.answer ? "Yes." : "Not that one."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 leading-relaxed",
						children: question.why
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: next,
						className: "mt-3 min-h-11 rounded-xl bg-accent px-4 font-medium text-on-accent",
						children: step + 1 === pool.length ? "See the score" : "Next question"
					})
				]
			}) : null
		]
	});
}
var DONE_KEY = "ecp-done";
var INDEX_KEY = "ecp-slide";
var nav = [
	{
		id: "brief",
		label: "Pass",
		icon: GraduationCap
	},
	{
		id: "slides",
		label: "Slides",
		icon: BookOpen
	},
	{
		id: "drugs",
		label: "Drugs",
		icon: Pill
	},
	{
		id: "scope",
		label: "Scope",
		icon: ShieldCheck
	},
	{
		id: "tools",
		label: "Maths",
		icon: Calculator
	},
	{
		id: "drill",
		label: "Drill",
		icon: ListChecks
	}
];
function StudyApp() {
	const [view, setView] = (0, import_react.useState)("brief");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const storedDone = localStorage.getItem(DONE_KEY);
			const storedIndex = localStorage.getItem(INDEX_KEY);
			if (storedDone) {
				const parsed = JSON.parse(storedDone);
				if (Array.isArray(parsed)) setDone(parsed.filter((id) => typeof id === "string"));
			}
			if (storedIndex) {
				const n = Number(storedIndex);
				if (Number.isInteger(n) && n >= 0 && n < slides.length) setIndex(n);
			}
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(DONE_KEY, JSON.stringify(done));
	}, [done, ready]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(INDEX_KEY, String(index));
	}, [index, ready]);
	(0, import_react.useEffect)(() => {
		if (view !== "slides") return;
		const onKey = (event) => {
			const target = event.target;
			if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) return;
			if (event.key === "ArrowRight") setIndex((i) => Math.min(slides.length - 1, i + 1));
			if (event.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [view]);
	const slide = slides[index] ?? slides[0];
	const known = new Set(slides.map((item) => item.id));
	const studied = done.filter((id) => known.has(id)).length;
	const unit = units.find((item) => item.id === slide.unit);
	const marked = done.includes(slide.id);
	function goUnit(unitId) {
		const first = slides.findIndex((item) => item.unit === unitId);
		if (first >= 0) setIndex(first);
	}
	function toggleDone() {
		setDone((prev) => prev.includes(slide.id) ? prev.filter((id) => id !== slide.id) : [...prev, slide.id]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setView("brief"),
						className: "min-h-11 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl leading-none",
							children: "ECP150S Field Manual"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "ECA scope only"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: nav.map((item) => {
							const Icon = item.icon;
							const active = view === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setView(item.id),
								className: `inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-medium ${active ? "bg-ink text-paper" : "text-ink"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-4 w-4",
									"aria-hidden": true
								}), item.label]
							}, item.id);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-6 pb-24 md:pb-10",
				children: [
					view === "brief" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brief, {
						studied,
						total: slides.length,
						onStart: () => setView("slides")
					}) : null,
					view === "slides" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "hidden md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sticky top-24 flex max-h-[calc(100dvh-8rem)] flex-col gap-1 overflow-auto",
								children: units.map((item) => {
									const inUnit = slides.filter((s) => s.unit === item.id);
									const doneCount = inUnit.filter((s) => done.includes(s.id)).length;
									const active = slide.unit === item.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => goUnit(item.id),
										className: `rounded-xl px-3 py-2 text-left text-sm ${active ? "bg-ink text-paper" : "bg-paper text-ink"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-medium leading-snug",
											children: item.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `text-xs ${active ? "text-paper" : "text-muted"}`,
											children: [
												doneCount,
												"/",
												inUnit.length,
												" done"
											]
										})]
									}, item.id);
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "min-w-0 md:col-span-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 grid gap-2 sm:grid-cols-2 md:hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-sm font-medium",
										children: ["Unit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											className: "mt-1 w-full rounded-xl border border-line bg-paper px-3 py-3",
											value: slide.unit,
											onChange: (event) => goUnit(event.target.value),
											children: units.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: item.id,
												children: item.label
											}, item.id))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-sm font-medium",
										children: ["Slide in this unit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											className: "mt-1 w-full rounded-xl border border-line bg-paper px-3 py-3",
											value: slide.id,
											onChange: (event) => {
												const next = slides.findIndex((item) => item.id === event.target.value);
												if (next >= 0) setIndex(next);
											},
											children: slides.filter((item) => item.unit === slide.unit).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: item.id,
												children: item.title
											}, item.id))
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-xl border border-line bg-paper px-5 py-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm font-medium text-accent",
											children: [
												unit?.label ?? slide.unit,
												" · ",
												slide.kicker
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "mt-2 font-display text-3xl leading-tight sm:text-4xl",
											children: slide.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-lg leading-relaxed text-muted",
											children: slide.lead
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: slide.blocks })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setIndex((i) => Math.max(0, i - 1)),
											disabled: index === 0,
											className: "inline-flex min-h-11 items-center gap-1 rounded-xl border border-line bg-paper px-4 disabled:opacity-40",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
												className: "h-4 w-4",
												"aria-hidden": true
											}), "Prev"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setIndex((i) => Math.min(slides.length - 1, i + 1)),
											disabled: index === slides.length - 1,
											className: "inline-flex min-h-11 items-center gap-1 rounded-xl bg-accent px-4 font-medium text-on-accent disabled:opacity-40",
											children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												className: "h-4 w-4",
												"aria-hidden": true
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: toggleDone,
											className: `min-h-11 rounded-xl border px-4 ${marked ? "border-accent bg-soft" : "border-line bg-paper"}`,
											children: marked ? "Marked done" : "Mark done"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm text-muted",
											children: [
												index + 1,
												" / ",
												slides.length
											]
										})
									]
								})
							]
						})]
					}) : null,
					view === "drugs" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrugsView, {}) : null,
					view === "scope" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeView, {}) : null,
					view === "tools" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsView, {}) : null,
					view === "drill" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrillView, {}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-6",
					children: nav.map((item) => {
						const Icon = item.icon;
						const active = view === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView(item.id),
							className: `flex min-h-16 flex-col items-center justify-center gap-1 px-1 text-xs font-medium ${active ? "text-accent" : "text-muted"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-4 w-4",
								"aria-hidden": true
							}), item.label]
						}, item.id);
					})
				})
			})
		]
	});
}
var SplitComponent = StudyApp;
//#endregion
export { SplitComponent as component };
