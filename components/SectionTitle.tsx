export default function SectionTitle({ kicker, title, subtitle }:{
  kicker?: string; title: string; subtitle?: string;
}) {
  return (
    <div className="mb-6">
      {kicker ? <p className="text-xs font-semibold tracking-widest text-blue-700">{kicker.toUpperCase()}</p> : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
