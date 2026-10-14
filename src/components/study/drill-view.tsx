import { useMemo, useState } from "react";
import { questions } from "@/data/quiz";
import type { Question } from "@/data/types";

export function DrillView() {
  const [pool, setPool] = useState<Question[]>(questions);
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correctIds, setCorrectIds] = useState<string[]>([]);
  const [missed, setMissed] = useState<Question[]>([]);
  const [finished, setFinished] = useState(false);

  const question = pool[step];
  const score = correctIds.length;

  const summary = useMemo(() => {
    const wrong = missed.filter((item, index, list) => list.findIndex((q) => q.id === item.id) === index);
    return wrong;
  }, [missed]);

  function choose(index: number) {
    if (!question || picked !== null) return;
    setPicked(index);
    if (index === question.answer) {
      setCorrectIds((prev) => [...prev, question.id]);
    } else {
      setMissed((prev) => [...prev, question]);
    }
  }

  function next() {
    if (step + 1 >= pool.length) {
      setFinished(true);
      return;
    }
    setStep((value) => value + 1);
    setPicked(null);
  }

  function restart(nextPool: Question[]) {
    setPool(nextPool);
    setStep(0);
    setPicked(null);
    setCorrectIds([]);
    setMissed([]);
    setFinished(false);
  }

  if (finished || !question) {
    return (
      <section className="mx-auto flex max-w-2xl flex-col gap-4">
        <h1 className="font-display text-4xl">Drill result</h1>
        <p className="font-display text-5xl">
          {score} / {pool.length}
        </p>
        <p className="leading-relaxed text-muted">
          {summary.length === 0
            ? "Clean run. Do it again next week, not only the night before Test 2."
            : "The ones below are the ones to reread. The why-line is the marking point."}
        </p>
        {summary.length > 0 ? (
          <ul className="flex flex-col gap-3">
            {summary.map((item) => (
              <li key={item.id} className="rounded-xl border border-accent bg-soft px-4 py-3">
                <p className="text-sm font-medium text-accent">{item.unit}</p>
                <p className="mt-1 font-medium">{item.prompt}</p>
                <p className="mt-2 text-sm leading-relaxed">{item.why}</p>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => restart(questions)}
            className="min-h-11 rounded-xl bg-accent px-4 font-medium text-on-accent"
          >
            Start again
          </button>
          {summary.length > 0 ? (
            <button
              type="button"
              onClick={() => restart(summary)}
              className="min-h-11 rounded-xl border border-line bg-paper px-4"
            >
              Drill only the misses
            </button>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-4">
      <div>
        <p className="text-sm font-medium text-accent">
          {question.unit} · {step + 1} of {pool.length}
        </p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
          <div
            className="h-full bg-accent"
            style={{ width: `${Math.round((step / pool.length) * 100)}%` }}
          />
        </div>
      </div>
      <h1 className="font-display text-3xl leading-tight">{question.prompt}</h1>
      <div className="flex flex-col gap-2">
        {question.options.map((option, index) => {
          const selected = picked === index;
          const right = picked !== null && index === question.answer;
          const tone = right
            ? "border-ink bg-ink text-paper"
            : selected
              ? "border-accent bg-soft"
              : "border-line bg-paper";
          return (
            <button
              key={option}
              type="button"
              disabled={picked !== null}
              onClick={() => choose(index)}
              className={`min-h-11 rounded-xl border px-4 py-3 text-left leading-relaxed disabled:cursor-default ${tone}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {picked !== null ? (
        <div className="rounded-xl border border-line bg-paper px-4 py-3">
          <p className="font-medium">{picked === question.answer ? "Yes." : "Not that one."}</p>
          <p className="mt-1 leading-relaxed">{question.why}</p>
          <button
            type="button"
            onClick={next}
            className="mt-3 min-h-11 rounded-xl bg-accent px-4 font-medium text-on-accent"
          >
            {step + 1 === pool.length ? "See the score" : "Next question"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
