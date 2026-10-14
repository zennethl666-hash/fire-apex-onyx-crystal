import { useMemo, useState } from "react";
import { drugs, refused } from "@/data/drugs";

export function DrugsView() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(drugs[0]?.name ?? "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return drugs;
    return drugs.filter((drug) =>
      [drug.name, drug.klass, drug.fence, drug.action, ...drug.use, ...drug.dose]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const current = filtered.find((drug) => drug.name === open) ?? filtered[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[16rem_1fr]">
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium" htmlFor="drug-search">
          Search the ECA cabinet
        </label>
        <input
          id="drug-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Adrenaline, charcoal, dose…"
          className="rounded-xl border border-line bg-paper px-3 py-3"
        />
        <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {filtered.map((drug) => (
            <button
              key={drug.name}
              type="button"
              onClick={() => setOpen(drug.name)}
              className={`shrink-0 rounded-xl border px-3 py-2 text-left text-sm ${
                current?.name === drug.name ? "border-accent bg-soft" : "border-line bg-paper"
              }`}
            >
              {drug.name}
            </button>
          ))}
        </div>
      </div>

      {current ? (
        <article className="rounded-xl border border-line bg-paper px-5 py-5">
          <p className="text-sm font-medium text-accent">{current.klass}</p>
          <h2 className="mt-1 font-display text-4xl">{current.name}</h2>
          <p className="mt-3 leading-relaxed">{current.action}</p>
          <p className="mt-4 rounded-xl border border-accent bg-soft px-4 py-3 text-sm leading-relaxed">
            {current.fence}
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <List title="Use it for" items={current.use} />
            <List title="Do not use it when" items={current.avoid} />
          </div>
          <div className="mt-3">
            <List title="Dose, from the monograph" items={current.dose} />
          </div>
          <div className="mt-3">
            <List title="Watch" items={current.watch} />
          </div>
        </article>
      ) : (
        <p className="text-muted">No drug matches that search.</p>
      )}

      <section className="rounded-xl border border-line bg-paper px-5 py-5 lg:col-span-2">
        <h2 className="font-display text-2xl">In the drug book. Not in your hands.</h2>
        <ul className="mt-3 grid gap-2 md:grid-cols-2">
          {refused.map((item) => (
            <li key={item.name} className="rounded-xl bg-bg px-3 py-3 text-sm leading-relaxed">
              <span className="font-medium">{item.name}. </span>
              {item.why}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-medium">{title}</h3>
      <ul className="mt-2 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
