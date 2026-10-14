import { useMemo, useState, type ReactNode } from "react";

type Tool = "sats" | "parkland" | "drip" | "apgar" | "dose";

const tools: { id: Tool; label: string }[] = [
  { id: "sats", label: "SATS" },
  { id: "parkland", label: "Parkland" },
  { id: "drip", label: "Drip" },
  { id: "apgar", label: "APGAR" },
  { id: "dose", label: "Doses" },
];

export function ToolsView() {
  const [tool, setTool] = useState<Tool>("sats");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="font-display text-4xl">The sums they will ask for.</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Adult SATS, Parkland from the time of the burn, drip rate, APGAR, and the weight-based
          doses that sit inside the ECA column. Paediatric SATS uses a different age chart. Do not
          force an adult score onto a child.
        </p>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {tools.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTool(item.id)}
            className={`shrink-0 rounded-xl px-4 py-3 text-sm font-medium ${
              tool === item.id ? "bg-ink text-paper" : "border border-line bg-paper"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {tool === "sats" ? <Sats /> : null}
      {tool === "parkland" ? <Parkland /> : null}
      {tool === "drip" ? <Drip /> : null}
      {tool === "apgar" ? <Apgar /> : null}
      {tool === "dose" ? <DoseCard /> : null}
    </div>
  );
}

function num(value: string): number | null {
  if (value.trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function round(value: number, places = 0): string {
  const factor = 10 ** places;
  const rounded = Math.round(value * factor) / factor;
  return String(rounded);
}

function Sats() {
  const [mobility, setMobility] = useState("0");
  const [rr, setRr] = useState("");
  const [hr, setHr] = useState("");
  const [sbp, setSbp] = useState("");
  const [temp, setTemp] = useState("");
  const [avpu, setAvpu] = useState("0");
  const [trauma, setTrauma] = useState(false);
  const [emergency, setEmergency] = useState(false);

  const parts = useMemo(() => {
    const resp = num(rr);
    const heart = num(hr);
    const pressure = num(sbp);
    const temperature = num(temp);
    const ready = resp !== null && heart !== null && pressure !== null && temperature !== null;
    if (!ready || resp === null || heart === null || pressure === null || temperature === null) {
      return null;
    }
    const rows = [
      { name: "Mobility", score: Number(mobility) },
      { name: "Respiratory rate", score: scoreRr(resp) },
      { name: "Heart rate", score: scoreHr(heart) },
      { name: "Systolic BP", score: scoreSbp(pressure) },
      { name: "Temperature", score: scoreTemp(temperature) },
      { name: "AVPU", score: Number(avpu) },
      { name: "Trauma", score: trauma ? 1 : 0 },
    ];
    const total = rows.reduce((sum, row) => sum + row.score, 0);
    return { rows, total };
  }, [mobility, rr, hr, sbp, temp, avpu, trauma]);

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

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-4">
        <Choice
          label="Mobility"
          value={mobility}
          onChange={setMobility}
          options={[
            ["0", "Walking"],
            ["1", "With help"],
            ["2", "Stretcher"],
          ]}
        />
        <Field label="Respiratory rate" value={rr} onChange={setRr} suffix="/min" />
        <Field label="Heart rate" value={hr} onChange={setHr} suffix="/min" />
        <Field label="Systolic BP" value={sbp} onChange={setSbp} suffix="mmHg" />
        <Field label="Temperature" value={temp} onChange={setTemp} suffix="°C" />
        <Choice
          label="AVPU"
          value={avpu}
          onChange={setAvpu}
          options={[
            ["0", "Alert"],
            ["1", "Voice"],
            ["2", "Pain"],
            ["3", "Unresponsive"],
          ]}
        />
        <Check label="Trauma is part of this presentation" checked={trauma} onChange={setTrauma} />
        <Check
          label="Emergency sign: not breathing, fitting now, or unresponsive to pain"
          checked={emergency}
          onChange={setEmergency}
        />
        <button type="button" onClick={loadRed} className="min-h-11 self-start rounded-xl border border-line px-4 text-sm">
          Load a red example
        </button>
      </div>
      <div className="rounded-xl border border-line bg-paper p-4">
        <h2 className="font-display text-3xl">Adult TEWS</h2>
        {parts && band ? (
          <>
            <ul className="mt-3 flex flex-col gap-1 text-sm">
              {parts.rows.map((row) => (
                <li key={row.name} className="flex justify-between gap-4 border-b border-line py-2">
                  <span>{row.name}</span>
                  <span className="font-medium">{row.score}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-display text-5xl">{parts.total}</p>
            <p
              className={`mt-3 rounded-xl border px-4 py-3 leading-relaxed ${
                band.urgent ? "border-accent bg-soft" : "border-line bg-bg"
              }`}
            >
              <span className="font-medium">{band.name}. </span>
              {band.detail}
            </p>
          </>
        ) : (
          <p className="mt-3 text-muted">Enter rate, heart rate, blood pressure and temperature.</p>
        )}
        <p className="mt-4 text-sm leading-relaxed text-muted">
          0–2 green, 3–4 yellow, 5–6 orange, 7 or more red. An emergency sign is red even if the
          number is small. Mobility: walk 0, help 1, stretcher 2. Trauma adds 1.
        </p>
      </div>
    </section>
  );
}

function scoreRr(value: number): number {
  if (value < 9) return 2;
  if (value <= 14) return 0;
  if (value <= 20) return 1;
  if (value <= 29) return 2;
  return 3;
}

function scoreHr(value: number): number {
  if (value < 41) return 2;
  if (value <= 50) return 1;
  if (value <= 100) return 0;
  if (value <= 110) return 1;
  if (value <= 129) return 2;
  return 3;
}

function scoreSbp(value: number): number {
  if (value < 71) return 3;
  if (value <= 80) return 2;
  if (value <= 100) return 1;
  if (value <= 199) return 0;
  return 2;
}

function scoreTemp(value: number): number {
  if (value < 35) return 2;
  if (value < 38.5) return 0;
  return 2;
}

function satsBand(score: number, emergency: boolean): { name: string; detail: string; urgent: boolean } {
  if (emergency) {
    return {
      name: "Red",
      detail: "Emergency sign overrides the number. Treat and move this patient first.",
      urgent: true,
    };
  }
  if (score >= 7) return { name: "Red", detail: "TEWS of 7 or more.", urgent: true };
  if (score >= 5) return { name: "Orange", detail: "TEWS 5 or 6. Very urgent.", urgent: true };
  if (score >= 3) return { name: "Yellow", detail: "TEWS 3 or 4. Urgent.", urgent: false };
  return { name: "Green", detail: "TEWS 0 to 2. Still look at them. The number is not a discharge.", urgent: false };
}

function Parkland() {
  const [kg, setKg] = useState("70");
  const [pct, setPct] = useState("40");
  const [hours, setHours] = useState("2");
  const [given, setGiven] = useState("0");

  const result = useMemo(() => {
    const weight = num(kg);
    const burn = num(pct);
    const elapsed = num(hours);
    const already = num(given);
    if (weight === null || burn === null || elapsed === null || already === null) return null;
    if (weight <= 0 || burn < 0 || burn > 100 || elapsed < 0 || already < 0) {
      return { error: "Weight must be above 0, burn 0–100%, hours and fluid already given cannot be negative." };
    }
    const total = 4 * weight * burn;
    const half = total / 2;
    if (elapsed >= 24) {
      return {
        error: `Total was ${round(total)} ml. The 24-hour clock from the burn has run out. This is no longer a Parkland catch-up. Hand over and ask the hospital.`,
      };
    }
    if (elapsed < 8) {
      const left = 8 - elapsed;
      const still = Math.max(0, half - already);
      const rate = still / left;
      return {
        total,
        half,
        rate,
        note:
          still === 0
            ? `The first half (${round(half)} ml) is already in. Do not keep pouring until hour 8. The second half starts after that.`
            : `Clock starts at the burn, not at the door. First half is ${round(half)} ml by hour 8. ${round(still)} ml of that half is still owed, over ${round(left, 1)} hours. You do not throw away fluid that was never given.`,
      };
    }
    const left = 24 - elapsed;
    const owed = Math.max(0, total - already);
    return {
      total,
      half,
      rate: owed / left,
      note: `Hour 8 has passed. Everything still owed is ${round(owed)} ml, including any of the first half that was missed. Run it over the ${round(left, 1)} hours left. Do not discard the missed fluid, and do not pretend the clock started when you arrived.`,
    };
  }, [kg, pct, hours, given]);

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-4">
        <Field label="Weight" value={kg} onChange={setKg} suffix="kg" />
        <Field label="Burn area, percent of body" value={pct} onChange={setPct} suffix="%" />
        <Field label="Hours since the burn" value={hours} onChange={setHours} suffix="h" />
        <Field label="Fluid already given" value={given} onChange={setGiven} suffix="ml" />
        <p className="text-sm leading-relaxed text-muted">
          4 ml × kg × % burn in 24 hours. Half in the first 8 hours from the injury. Half over the
          next 16. Only partial-thickness and full-thickness area. This is an adult crystalloid plan.
        </p>
      </div>
      <Result
        title="Parkland"
        body={
          result && "error" in result ? (
            <p className="leading-relaxed">{result.error}</p>
          ) : result && "rate" in result ? (
            <>
              <p className="text-sm text-muted">24-hour total</p>
              <p className="font-display text-4xl">{round(result.total)} ml</p>
              <p className="mt-3 text-sm text-muted">Each half</p>
              <p className="font-display text-3xl">{round(result.half)} ml</p>
              <p className="mt-3 text-sm text-muted">Rate for the window you are in</p>
              <p className="font-display text-5xl">{round(result.rate)} ml/h</p>
              <p className="mt-3 leading-relaxed">{result.note}</p>
            </>
          ) : (
            <p className="text-muted">Fill in all four boxes.</p>
          )
        }
      />
    </section>
  );
}

function Drip() {
  const [ml, setMl] = useState("500");
  const [minutes, setMinutes] = useState("60");
  const [factor, setFactor] = useState("15");

  const result = useMemo(() => {
    const volume = num(ml);
    const time = num(minutes);
    const drops = num(factor);
    if (volume === null || time === null || drops === null) return null;
    if (volume < 0 || time <= 0 || drops <= 0) return { error: "Volume cannot be negative, and time and drop factor must be above 0." };
    const perMin = (volume * drops) / time;
    const perHour = volume / (time / 60);
    return { perMin, perHour };
  }, [ml, minutes, factor]);

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-4">
        <Field label="Volume to give" value={ml} onChange={setMl} suffix="ml" />
        <Field label="Time" value={minutes} onChange={setMinutes} suffix="min" />
        <Choice
          label="Drop factor"
          value={factor}
          onChange={setFactor}
          options={[
            ["10", "10 — blood set"],
            ["15", "15 — giving set"],
            ["20", "20 — giving set"],
            ["60", "60 — microdrop"],
          ]}
        />
        <p className="text-sm text-muted">Drops per minute = (ml × drop factor) ÷ minutes.</p>
      </div>
      <Result
        title="Drip rate"
        body={
          result && "error" in result ? (
            <p>{result.error}</p>
          ) : result && "perMin" in result ? (
            <>
              <p className="font-display text-5xl">{round(result.perMin)} gtt/min</p>
              <p className="mt-2 text-muted">{round(result.perHour)} ml/h</p>
            </>
          ) : (
            <p className="text-muted">Enter a volume and a time.</p>
          )
        }
      />
    </section>
  );
}

const apgarRows = [
  {
    key: "appearance",
    label: "Appearance",
    options: ["Blue or pale", "Body pink, limbs blue", "Pink all over"],
  },
  {
    key: "pulse",
    label: "Pulse",
    options: ["Absent", "Under 100", "100 or more"],
  },
  {
    key: "grimace",
    label: "Grimace",
    options: ["No response", "Grimace", "Cry, cough or sneeze"],
  },
  {
    key: "activity",
    label: "Activity",
    options: ["Limp", "Some flexion", "Active"],
  },
  {
    key: "respiration",
    label: "Respiration",
    options: ["Absent", "Slow or irregular", "Strong cry"],
  },
] as const;

function Apgar() {
  const [scores, setScores] = useState<Record<string, number>>({
    appearance: 2,
    pulse: 2,
    grimace: 2,
    activity: 2,
    respiration: 2,
  });
  const total = apgarRows.reduce((sum, row) => sum + (scores[row.key] ?? 0), 0);
  const reading =
    total >= 7
      ? "7–10. Reassuring. Dry, warm, skin-to-skin, and keep watching."
      : total >= 4
        ? "4–6. Moderate depression. Stimulate, oxygen if needed, and be ready to ventilate."
        : "0–3. Severe. Open the airway and ventilate. Compress if the heart stays under 60 after effective breaths.";

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-4 rounded-xl border border-line bg-paper p-4">
        {apgarRows.map((row) => (
          <fieldset key={row.key}>
            <legend className="text-sm font-medium">{row.label}</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {row.options.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setScores((prev) => ({ ...prev, [row.key]: index }))}
                  className={`min-h-11 rounded-xl border px-2 py-2 text-sm ${
                    scores[row.key] === index ? "border-accent bg-soft" : "border-line bg-bg"
                  }`}
                >
                  {index}. {label}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <Result
        title="APGAR"
        body={
          <>
            <p className="font-display text-6xl">{total}</p>
            <p className="mt-3 leading-relaxed">{reading}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Score at 1 minute, and again if they are not well. Each part is 0, 1 or 2. Do not
              routinely suction a vigorous baby born through meconium.
            </p>
          </>
        }
      />
    </section>
  );
}

function DoseCard() {
  const [kg, setKg] = useState("");
  const [age, setAge] = useState("");

  const weight = num(kg);
  const years = num(age);
  const estimate = years !== null && years >= 1 && years <= 10 ? (years + 4) * 2 : null;

  const lines =
    weight !== null && weight > 0
      ? doseLines(weight, years)
      : [];

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-4">
        <Field label="Weight" value={kg} onChange={setKg} suffix="kg" />
        <Field label="Age, if you need the estimate" value={age} onChange={setAge} suffix="years" />
        {estimate !== null ? (
          <button
            type="button"
            onClick={() => setKg(String(estimate))}
            className="min-h-11 self-start rounded-xl border border-line px-4 text-sm"
          >
            Use estimated weight, {estimate} kg
          </button>
        ) : (
          <p className="text-sm text-muted">Estimated weight is (age + 4) × 2, for about 1 to 10 years.</p>
        )}
        <div className="rounded-xl border border-line bg-bg px-3 py-3 text-sm leading-relaxed">
          <p className="font-medium">Adult doses that do not use the scale</p>
          <ul className="mt-2 flex flex-col gap-1 text-muted">
            <li>Arrest adrenaline: 1 mg IV every 3–5 min.</li>
            <li>Anaphylaxis adrenaline: 0.3 mg IM (0.3 ml of 1:1000).</li>
            <li>Naloxone start: 0.4 mg slow IV, up to 2 mg. Goal is breathing.</li>
            <li>Oral glucose: 25 g if they can swallow.</li>
            <li>Adult D50: 20 ml of 50% slowly. Not for children.</li>
          </ul>
        </div>
      </div>
      <Result
        title="Weight-based ECA doses"
        body={
          lines.length === 0 ? (
            <p className="text-muted">Enter a weight. Child IV dextrose stays off this card on purpose.</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {lines.map((line) => (
                <li key={line.name} className="border-b border-line pb-3">
                  <p className="font-medium">{line.name}</p>
                  <p className="font-display text-2xl">{line.value}</p>
                  <p className="text-sm leading-relaxed text-muted">{line.note}</p>
                </li>
              ))}
            </ul>
          )
        }
      />
    </section>
  );
}

function doseLines(kg: number, age: number | null): { name: string; value: string; note: string }[] {
  const arrestMg = Math.min(0.01 * kg, 1);
  const anaMg = Math.min(0.01 * kg, 0.3);
  const diazRaw = 0.2 * kg;
  const diazCap = age === null ? null : age < 5 ? 5 : 10;
  const diaz = diazCap === null ? diazRaw : Math.min(diazRaw, diazCap);
  const midaz = 0.15 * kg;
  const nal = Math.min(0.1 * kg, 2);
  const hydro = 5 * kg;
  const glucagon = kg < 20 ? 0.5 : 1;

  return [
    {
      name: "Arrest adrenaline",
      value: `${round(arrestMg, 2)} mg`,
      note: `0.01 mg/kg, capped at the adult 1 mg. That is ${round(arrestMg / 0.1, 2)} ml of the 0.1 mg/ml dilution (0.1 ml/kg, max 10 ml).`,
    },
    {
      name: "Anaphylaxis adrenaline, IM",
      value: `${round(anaMg, 2)} mg`,
      note: `0.01 mg/kg, capped at the adult 0.3 mg. Draw ${round(anaMg, 2)} ml of 1 mg/ml (1:1000). Adult stays 0.3 mg.`,
    },
    {
      name: "Diazepam, seizure",
      value: `${round(diaz, 2)} mg slow IV`,
      note:
        diazCap === null
          ? `0.2 mg/kg. Cap is 5 mg under 5 years and 10 mg if older. Enter an age to apply the cap. Adult is about 0.15 mg/kg, max 20 mg, no faster than 5 mg/min. IM is unreliable.`
          : `0.2 mg/kg, capped at ${diazCap} mg for this age. Adult max is 20 mg.`,
    },
    {
      name: "Midazolam, seizure",
      value: `${round(midaz, 2)} mg`,
      note: "0.15 mg/kg slow IV or IM. Not an induction dose. Child rectal is 0.4–1 mg/kg and nasal is 0.4 mg/kg if that is the route you were taught.",
    },
    {
      name: "Naloxone",
      value: `${round(nal, 2)} mg`,
      note: "Child 0.1 mg/kg IV or IM, max 2 mg. Ventilate first. Stop when they breathe.",
    },
    {
      name: "Activated charcoal",
      value: `${round(0.5 * kg)}–${round(kg)} g`,
      note: "0.5–1 g/kg by mouth, only if the airway is safe and the poison is one charcoal binds.",
    },
    {
      name: "Hydrocortisone, asthma",
      value: `${round(hydro)} mg`,
      note: "5 mg/kg IV slowly. Adult anaphylaxis is a fixed 200–500 mg, not this sum. It will not replace adrenaline.",
    },
    {
      name: "Glucagon, hypoglycaemia",
      value: `${glucagon} mg IM`,
      note: "Under 20 kg: 0.5 mg. Otherwise 1 mg. Mix with the water in the box, not saline. Feed them when they wake.",
    },
  ];
}

function Field({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  suffix: string;
}) {
  const id = `tool-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  return (
    <label className="block text-sm font-medium" htmlFor={id}>
      {label}
      <span className="mt-1 flex items-center gap-2 font-normal">
        <input
          id={id}
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-xl border border-line bg-bg px-3 py-3"
        />
        <span className="w-16 shrink-0 text-muted">{suffix}</span>
      </span>
    </label>
  );
}

function Choice({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: [string, string][];
}) {
  const id = `choice-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <label className="block text-sm font-medium" htmlFor={id}>
      {label}
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-3 font-normal"
      >
        {options.map(([optionValue, text]) => (
          <option key={optionValue} value={optionValue}>
            {text}
          </option>
        ))}
      </select>
    </label>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex min-h-11 items-start gap-3 text-sm leading-relaxed">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4"
      />
      <span>{label}</span>
    </label>
  );
}

function Result({ title, body }: { title: string; body: ReactNode }) {
  return (
    <div className="rounded-xl border border-line bg-paper p-4">
      <h2 className="font-display text-3xl">{title}</h2>
      <div className="mt-3">{body}</div>
    </div>
  );
}
