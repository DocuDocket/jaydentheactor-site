const facts = [
  { label: "Playing Age", value: "8–12" },
  { label: "Union", value: "Non-Union" },
  { label: "Height", value: "56 in" },
  { label: "Hair / Eyes", value: "Dark Brown/Black • Brown" },
  { label: "Skills", value: "Stage Acting • Musical Theatre • Physical Comedy • Martial Arts • Tumbling" },
];

export default function QuickFacts() {
  return (
    <div className="card p-6">
      <h3 className="text-sm font-semibold tracking-tight">Quick Facts</h3>
      <dl className="mt-4 grid gap-3">
        {facts.map((f) => (
          <div key={f.label} className="flex items-start justify-between gap-4">
            <dt className="text-sm text-slate-600">{f.label}</dt>
            <dd className="text-sm font-medium text-slate-900 text-right">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
