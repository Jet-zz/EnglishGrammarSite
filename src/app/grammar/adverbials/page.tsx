import { SectionHeading } from "@/components/SectionHeading";
import { timeAdverbialGroups } from "@/content/timeAdverbials";

export default function AdverbialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Adverbials"
        title="时间状语"
        description="时间状语用来说明动作发生的时间，常见于一般过去时等时态中。"
      />

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {timeAdverbialGroups.map((group) => (
          <section key={group.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-950">{group.label}</h2>
            {group.note ? (
              <p className="mt-1 text-xs text-blue-600 font-semibold">{group.note}</p>
            ) : null}
            <div className="mt-4 grid gap-1.5">
              {group.items.map((item) => (
                <div
                  key={item.english}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2"
                >
                  <span className="font-mono text-sm font-semibold text-slate-800">{item.english}</span>
                  <span className="text-sm text-slate-500">{item.chinese}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
