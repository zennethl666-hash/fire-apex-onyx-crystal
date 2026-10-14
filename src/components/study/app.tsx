import { useEffect, useState } from "react";
import {
  BookOpen,
  Calculator,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ListChecks,
  Pill,
  ShieldCheck,
} from "lucide-react";
import { slides, units } from "@/data/slides";
import { Brief } from "@/components/study/brief";
import { Blocks } from "@/components/study/blocks";
import { DrugsView } from "@/components/study/drugs-view";
import { ScopeView } from "@/components/study/scope-view";
import { ToolsView } from "@/components/study/tools-view";
import { DrillView } from "@/components/study/drill-view";

type View = "brief" | "slides" | "drugs" | "scope" | "tools" | "drill";

const DONE_KEY = "ecp-done";
const INDEX_KEY = "ecp-slide";

const nav: { id: View; label: string; icon: typeof BookOpen }[] = [
  { id: "brief", label: "Pass", icon: GraduationCap },
  { id: "slides", label: "Slides", icon: BookOpen },
  { id: "drugs", label: "Drugs", icon: Pill },
  { id: "scope", label: "Scope", icon: ShieldCheck },
  { id: "tools", label: "Maths", icon: Calculator },
  { id: "drill", label: "Drill", icon: ListChecks },
];

export function StudyApp() {
  const [view, setView] = useState<View>("brief");
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const storedDone = localStorage.getItem(DONE_KEY);
      const storedIndex = localStorage.getItem(INDEX_KEY);
      if (storedDone) {
        const parsed = JSON.parse(storedDone) as unknown;
        if (Array.isArray(parsed)) {
          setDone(parsed.filter((id) => typeof id === "string"));
        }
      }
      if (storedIndex) {
        const n = Number(storedIndex);
        if (Number.isInteger(n) && n >= 0 && n < slides.length) setIndex(n);
      }
    } catch {
      /* keep defaults */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(DONE_KEY, JSON.stringify(done));
  }, [done, ready]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(INDEX_KEY, String(index));
  }, [index, ready]);

  useEffect(() => {
    if (view !== "slides") return;
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        return;
      }
      if (event.key === "ArrowRight") {
        setIndex((i) => Math.min(slides.length - 1, i + 1));
      }
      if (event.key === "ArrowLeft") {
        setIndex((i) => Math.max(0, i - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view]);

  const slide = slides[index] ?? slides[0];
  const known = new Set(slides.map((item) => item.id));
  const studied = done.filter((id) => known.has(id)).length;
  const unit = units.find((item) => item.id === slide.unit);
  const marked = done.includes(slide.id);

  function goUnit(unitId: string) {
    const first = slides.findIndex((item) => item.unit === unitId);
    if (first >= 0) setIndex(first);
  }

  function toggleDone() {
    setDone((prev) =>
      prev.includes(slide.id) ? prev.filter((id) => id !== slide.id) : [...prev, slide.id],
    );
  }

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-bg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <button type="button" onClick={() => setView("brief")} className="min-h-11 text-left">
            <p className="font-display text-xl leading-none">ECP150S Field Manual</p>
            <p className="mt-1 text-sm text-muted">ECA scope only</p>
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const Icon = item.icon;
              const active = view === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setView(item.id)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-medium ${
                    active ? "bg-ink text-paper" : "text-ink"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 pb-24 md:pb-10">
        {view === "brief" ? (
          <Brief studied={studied} total={slides.length} onStart={() => setView("slides")} />
        ) : null}

        {view === "slides" ? (
          <div className="grid gap-4 md:grid-cols-4">
            <aside className="hidden md:block">
              <div className="sticky top-24 flex max-h-[calc(100dvh-8rem)] flex-col gap-1 overflow-auto">
                {units.map((item) => {
                  const inUnit = slides.filter((s) => s.unit === item.id);
                  const doneCount = inUnit.filter((s) => done.includes(s.id)).length;
                  const active = slide.unit === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goUnit(item.id)}
                      className={`rounded-xl px-3 py-2 text-left text-sm ${
                        active ? "bg-ink text-paper" : "bg-paper text-ink"
                      }`}
                    >
                      <span className="block font-medium leading-snug">{item.label}</span>
                      <span className={`text-xs ${active ? "text-paper" : "text-muted"}`}>
                        {doneCount}/{inUnit.length} done
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <section className="min-w-0 md:col-span-3">
              <div className="mb-3 grid gap-2 sm:grid-cols-2 md:hidden">
                <label className="text-sm font-medium">
                  Unit
                  <select
                    className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-3"
                    value={slide.unit}
                    onChange={(event) => goUnit(event.target.value)}
                  >
                    {units.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium">
                  Slide in this unit
                  <select
                    className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-3"
                    value={slide.id}
                    onChange={(event) => {
                      const next = slides.findIndex((item) => item.id === event.target.value);
                      if (next >= 0) setIndex(next);
                    }}
                  >
                    {slides
                      .filter((item) => item.unit === slide.unit)
                      .map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title}
                        </option>
                      ))}
                  </select>
                </label>
              </div>

              <article className="rounded-xl border border-line bg-paper px-5 py-6">
                <p className="text-sm font-medium text-accent">
                  {unit?.label ?? slide.unit} · {slide.kicker}
                </p>
                <h1 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">{slide.title}</h1>
                <p className="mt-3 text-lg leading-relaxed text-muted">{slide.lead}</p>
                <div className="mt-5">
                  <Blocks blocks={slide.blocks} />
                </div>
              </article>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIndex((i) => Math.max(0, i - 1))}
                  disabled={index === 0}
                  className="inline-flex min-h-11 items-center gap-1 rounded-xl border border-line bg-paper px-4 disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((i) => Math.min(slides.length - 1, i + 1))}
                  disabled={index === slides.length - 1}
                  className="inline-flex min-h-11 items-center gap-1 rounded-xl bg-accent px-4 font-medium text-on-accent disabled:opacity-40"
                >
                  Next
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={toggleDone}
                  className={`min-h-11 rounded-xl border px-4 ${
                    marked ? "border-accent bg-soft" : "border-line bg-paper"
                  }`}
                >
                  {marked ? "Marked done" : "Mark done"}
                </button>
                <span className="text-sm text-muted">
                  {index + 1} / {slides.length}
                </span>
              </div>
            </section>
          </div>
        ) : null}

        {view === "drugs" ? <DrugsView /> : null}
        {view === "scope" ? <ScopeView /> : null}
        {view === "tools" ? <ToolsView /> : null}
        {view === "drill" ? <DrillView /> : null}
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper md:hidden">
        <div className="grid grid-cols-6">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = view === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 text-xs font-medium ${
                  active ? "text-accent" : "text-muted"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
