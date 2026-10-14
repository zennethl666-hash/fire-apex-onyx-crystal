import { Download, TriangleAlert } from "lucide-react";

const tiles = [
  { name: "Simulation 1", weight: "20%", note: "18 Sep 2026", hurdle: false },
  { name: "Test 1", weight: "25%", note: "15 Sep 2026", hurdle: false },
  { name: "Simulation 2", weight: "25%", note: "11–12 Nov · remedial 19 Nov", hurdle: true },
  { name: "Test 2", weight: "30%", note: "2 Nov · remedial 16 Nov", hurdle: true },
];

export function Brief({
  studied,
  total,
  onStart,
}: {
  studied: number;
  total: number;
  onStart: () => void;
}) {
  const pct = total === 0 ? 0 : Math.round((studied / total) * 100);

  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-xl border border-line bg-paper px-5 py-6 sm:px-8">
        <p className="text-sm font-medium tracking-wide text-accent">CPUT · ECP150S · 2026</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl">
          Emergency Care Practice, written for an ECA.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          A plain-language master deck of the subject guide, cut to the HPCSA Emergency Care
          Assistant column, with doses from your drug monograph. Higher-scope drugs stay in the
          book so you can recognise them. They are marked as not yours.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onStart}
            className="rounded-xl bg-accent px-5 py-3 font-medium text-on-accent"
          >
            Open the slides
          </button>
          <a
            href="/ecp150s-eca-master.pptx"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-bg px-5 py-3 font-medium"
          >
            <Download className="h-4 w-4" />
            Download PowerPoint
          </a>
        </div>
        <p className="mt-4 text-sm text-muted">
          {studied} of {total} slides marked done · {pct}%
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <article key={tile.name} className="rounded-xl border border-line bg-paper px-4 py-4">
            <p className="text-sm text-muted">{tile.name}</p>
            <p className="mt-1 font-display text-4xl">{tile.weight}</p>
            <p className="mt-2 text-sm leading-relaxed">{tile.note}</p>
            {tile.hurdle ? (
              <p className="mt-2 text-sm font-medium text-accent">50% subminimum</p>
            ) : (
              <p className="mt-2 text-sm text-muted">No separate hurdle</p>
            )}
          </article>
        ))}
      </section>

      <section className="grid gap-3 lg:grid-cols-3">
        <article className="rounded-xl border border-accent bg-soft px-4 py-4 lg:col-span-2">
          <div className="flex items-start gap-3">
            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h2 className="font-display text-2xl">The pass sentence</h2>
              <p className="mt-2 leading-relaxed">
                You pass only if the computed mark is at least 50%, Test 2 is at least 50%, and
                Simulation 2 is at least 50%. A pretty average with a 42% on paper 2 is a fail.
                Practical attendance is 100% or you do not sit the practical exams. Theory
                attendance is 80%.
              </p>
            </div>
          </div>
        </article>
        <article className="rounded-xl border border-line bg-paper px-4 py-4">
          <h2 className="font-display text-2xl">Where to start</h2>
          <ol className="mt-2 flex flex-col gap-2 text-sm leading-relaxed">
            <li>1. Pass rules, then the ECA fence.</li>
            <li>2. Arrest, airway, shock, birth. Those carry simulations.</li>
            <li>3. Drug cabinet. Learn the fence line on each card.</li>
            <li>4. Maths, then the drill, then redo the ones you miss.</li>
          </ol>
        </article>
      </section>

      <p className="text-sm leading-relaxed text-muted">
        Built from the 2026 ECP150S subject guide, the HPCSA PBEC clinical practice guideline
        annexure (ECA column), and the supplied drug monographs. If your lecturer’s protocol card
        disagrees, the lecturer wins. This is a study aid, not a licence to practise.
      </p>
    </div>
  );
}
