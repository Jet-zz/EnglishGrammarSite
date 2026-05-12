export function ExampleBlock({
  english,
  chinese,
  breakdown,
}: {
  english: string;
  chinese: string;
  breakdown?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <p className="font-mono text-sm font-semibold text-slate-950">{english}</p>
      <p className="mt-1 text-sm text-slate-600">{chinese}</p>
      {breakdown ? (
        <p className="mt-2 rounded-lg bg-white px-3 py-2 text-xs text-slate-500">
          {breakdown}
        </p>
      ) : null}
    </div>
  );
}
