export type Tone = "exam" | "scope" | "stop" | "do";

export type Block =
  | { kind: "points"; items: string[] }
  | { kind: "steps"; items: string[] }
  | { kind: "callout"; tone: Tone; title: string; text: string }
  | { kind: "pairs"; items: { k: string; v: string }[] }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "split"; leftTitle: string; rightTitle: string; left: string[]; right: string[] };

export type Slide = {
  id: string;
  unit: string;
  kicker: string;
  title: string;
  lead: string;
  blocks: Block[];
};

export type Unit = { id: string; label: string; short: string };

export type Drug = {
  name: string;
  klass: string;
  fence: string;
  action: string;
  use: string[];
  avoid: string[];
  dose: string[];
  watch: string[];
};

export type Question = {
  id: string;
  unit: string;
  prompt: string;
  options: string[];
  answer: number;
  why: string;
};

export type ScopeItem = { name: string; note: string };
export type ScopeGroup = { title: string; items: ScopeItem[] };
