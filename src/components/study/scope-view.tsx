import { inScope, outScope } from "@/data/scope";

export function ScopeView() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Column heading="You may" groups={inScope} hot />
      <Column heading="You may not" groups={outScope} hot={false} />
    </div>
  );
}

function Column({
  heading,
  groups,
  hot,
}: {
  heading: string;
  groups: typeof inScope;
  hot: boolean;
}) {
  return (
    <section className={`rounded-xl border px-4 py-4 ${hot ? "border-accent bg-soft" : "border-line bg-paper"}`}>
      <h2 className="font-display text-3xl">{heading}</h2>
      <div className="mt-4 flex flex-col gap-4">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="font-medium">{group.title}</h3>
            <ul className="mt-2 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item.name} className="rounded-xl bg-paper px-3 py-3 text-sm leading-relaxed">
                  <span className="font-medium">{item.name}. </span>
                  <span className="text-muted">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
