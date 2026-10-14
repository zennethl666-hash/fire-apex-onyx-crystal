import type { Block } from "@/data/types";

const toneClass = {
  exam: "border-accent bg-soft",
  scope: "border-ink bg-paper",
  stop: "border-accent bg-soft",
  do: "border-line bg-paper",
} as const;

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.kind === "points") {
    return (
      <ul className="flex flex-col gap-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.kind === "steps") {
    return (
      <ol className="flex flex-col gap-2">
        {block.items.map((item, index) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-medium text-paper">
              {index + 1}
            </span>
            <span className="pt-0.5">{item}</span>
          </li>
        ))}
      </ol>
    );
  }

  if (block.kind === "callout") {
    return (
      <aside className={`rounded-xl border px-4 py-3 ${toneClass[block.tone]}`}>
        <p className="font-medium text-accent">{block.title}</p>
        <p className="mt-1 text-base leading-relaxed">{block.text}</p>
      </aside>
    );
  }

  if (block.kind === "pairs") {
    return (
      <dl className="grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <div key={item.k} className="rounded-xl border border-line bg-bg px-4 py-3">
            <dt className="font-medium">{item.k}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">{item.v}</dd>
          </div>
        ))}
      </dl>
    );
  }

  if (block.kind === "split") {
    return (
      <div className="grid gap-3 md:grid-cols-2">
        <Column title={block.leftTitle} items={block.left} hot />
        <Column title={block.rightTitle} items={block.right} hot={false} />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <thead className="bg-ink text-paper">
          <tr>
            {block.headers.map((header) => (
              <th key={header} className="px-3 py-2 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row.join("|")} className="border-t border-line bg-paper">
              {row.map((cell, index) => (
                <td key={index} className="px-3 py-2 align-top leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Column({ title, items, hot }: { title: string; items: string[]; hot: boolean }) {
  return (
    <div className={`rounded-xl border px-4 py-3 ${hot ? "border-accent bg-soft" : "border-line bg-bg"}`}>
      <p className="font-medium">{title}</p>
      <ul className="mt-2 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
