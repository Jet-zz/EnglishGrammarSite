import { SectionHeading } from "@/components/SectionHeading";
import { moodIntro, moodTypes } from "@/content/mood";

export default function MoodPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Mood"
        title={moodIntro.title}
        description={moodIntro.intro}
      />
      <p className="mt-2 text-sm leading-6 text-slate-600 max-w-3xl">{moodIntro.role}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {moodTypes.map((m, i) => {
          const colors = [
            "border-blue-400 bg-blue-50",
            "border-emerald-400 bg-emerald-50",
            "border-purple-400 bg-purple-50",
          ];
          const badgeColors = [
            "bg-blue-100 text-blue-700",
            "bg-emerald-100 text-emerald-700",
            "bg-purple-100 text-purple-700",
          ];
          return (
            <div key={m.name} className={`rounded-xl border-l-4 ${colors[i]} p-5 shadow-sm`}>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">{m.name}</h2>
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badgeColors[i]}`}>
                  {m.english}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{m.desc}</p>
              <div className="mt-4 rounded-lg bg-white px-4 py-3 font-mono text-sm text-slate-800 shadow-sm">
                {m.example}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
