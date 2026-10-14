import type { ScopeGroup } from "./types";

export const inScope: ScopeGroup[] = [
  {
    title: "Airway",
    items: [
      { name: "Manual opening, choking manoeuvres, OPA, NPA", note: "Every age." },
      { name: "Suction — upper airway and through an extraglottic tube", note: "Not endotracheal suction. You are not intubating." },
      { name: "Magill forceps", note: "For a foreign body you can see and reach." },
      { name: "Supraglottic airway", note: "Cardiac arrest only. Not a breathing overdose, not a seizure." },
      { name: "Needle cricothyroidotomy", note: "Can't intubate, can't oxygenate rescue. Not a surgical cric." },
    ],
  },
  {
    title: "Breathing",
    items: [
      { name: "Oxygen, nebuliser, pulse oximetry", note: "Nebulise only drugs on your list." },
      { name: "Bag-mask and bag-tube ventilation", note: "This is your main ventilation skill." },
      { name: "Oxygen-driven non-invasive ventilation", note: "The device that runs on oxygen, not a mechanical ventilator." },
      { name: "Mechanical infant resuscitator", note: "Yes. Neonatal mechanical ventilator, no." },
      { name: "Needle thoracentesis", note: "Adult and child. Not the neonate." },
      { name: "Capnography", note: "Through the mask or nasal prongs, and through an extraglottic tube." },
      { name: "Peak flow", note: "Measure and interpret." },
    ],
  },
  {
    title: "Circulation",
    items: [
      { name: "IV cannula, limbs and hands, over 1 year", note: "Not under 1 year, not scalp, not external jugular." },
      { name: "Adult intraosseous", note: "Not paediatric IO." },
      { name: "Adult IV fluids", note: "Not infant or child IV fluid therapy. Children get oral rehydration." },
      { name: "IM, SC, IV and IO medicines", note: "Only the medicines on the ECA list." },
      { name: "Tourniquet, haemostatic gauze, direct pressure", note: "Bleeding control is fully yours." },
      { name: "PASG and non-pneumatic anti-shock garment", note: "Know when it harms: chest injury, pulmonary oedema, pregnancy abdomen." },
      { name: "AED, manual defibrillator, precordial thump", note: "Shock VF and pulseless VT. No synchronised cardioversion. No pacing." },
      { name: "3-lead ECG", note: "Rate and rhythm. Not a 12-lead STEMI diagnosis." },
    ],
  },
  {
    title: "The rest of the shift",
    items: [
      { name: "Normal birth, breech, cord prolapse, malpresentation, preterm, obstructed labour, postpartum bleeding", note: "Within the drugs you may actually give. Oxytocin is not one of them." },
      { name: "Cervical spine clearance and spinal motion restriction", note: "Clear only when the rules are met. Otherwise restrict." },
      { name: "Splints, pelvic binder, vacuum mattress, wound care", note: "No suturing." },
      { name: "Finger-prick glucose, vitals, clinical assessment", note: "Glucose before you blame a seizure or a stroke." },
      { name: "Withhold or stop resuscitation", note: "Withhold in decapitation, mortal injury, lividity, putrefaction. Withdrawal is also on your list." },
      { name: "Incubator and inter-facility transfer", note: "At your scope. You do not discharge people on scene." },
    ],
  },
];

export const outScope: ScopeGroup[] = [
  {
    title: "Do not do these",
    items: [
      { name: "Intubation, RSI, video laryngoscope, surgical cric", note: "Practitioner skills." },
      { name: "Supraglottic airway outside cardiac arrest", note: "The annexure marks ECA SGA as CA only." },
      { name: "Nasogastric tube, urinary catheter, ultrasound", note: "Not your column." },
      { name: "IV line or IV fluid in an infant, paediatric IO, umbilical vein", note: "Adult IO and adult fluids. Children: oral routes and oxygen." },
      { name: "IV dextrose in a child or neonate", note: "Adult 50% dextrose only. Child: oral glucose or glucagon." },
      { name: "12-lead diagnosis, thrombolysis, pacing, cardioversion, vagal manoeuvres", note: "All absent from the ECA column." },
      { name: "On-scene discharge", note: "A refusal of transport is not the same thing, and discharge is ECP only." },
    ],
  },
  {
    title: "Do not give these",
    items: [
      { name: "Amiodarone, adenosine, GTN, morphine, fentanyl, ketamine", note: "Higher scope, even if the drug book has a page." },
      { name: "Oxytocin, furosemide, TXA, heparin, clot-busters", note: "Know the illness. Do not give the drug." },
      { name: "IV magnesium, IV salbutamol, calcium, bicarbonate", note: "IM magnesium for eclampsia is the exception." },
      { name: "Paralytics, induction agents, ondansetron", note: "Not on the ECA list." },
    ],
  },
];
