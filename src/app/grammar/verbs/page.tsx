import { SectionHeading } from "@/components/SectionHeading";
import { VerbTree } from "@/components/VerbTree";
import { contentVerbs, contentVerbs2, linkingVerbs } from "@/content/verbs";

export default function VerbsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Predicate verbs"
        title={contentVerbs.title}
        description={contentVerbs.intro}
      />

      {/* ── Verb tree diagram ── */}
      <div className="mt-8">
        <VerbTree />
      </div>

      {/* 实义动词 */}
      <section className="mt-6">
        <h2 className="rounded-lg border-l-4 border-amber-500 bg-amber-50 px-4 py-3 text-xl font-bold text-amber-900">实义动词</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {contentVerbs2.map((v) => (
            <div key={v.name} className="rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
              <div className="flex items-baseline gap-2">
                <p className="text-xs font-semibold text-amber-600">{v.englishName}</p>
                <h3 className="text-base font-bold text-amber-900">{v.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{v.description}</p>
              <div className="mt-3 grid gap-1.5">
                {v.examples.map((ex) => (
                  <p key={ex} className="rounded-md bg-amber-50 px-3 py-1.5 font-mono text-xs text-slate-700">{ex}</p>
                ))}
              </div>
              <p className="mt-2 text-xs text-amber-600">{v.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 系动词 */}
      <section className="mt-6">
        <h2 className="rounded-lg border-l-4 border-purple-500 bg-purple-50 px-4 py-3 text-xl font-bold text-purple-900">非实义动词（系动词）</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {linkingVerbs.map((v) => (
            <div key={v.name} className="rounded-xl border border-purple-200 bg-white p-4 shadow-sm">
              <div className="flex items-baseline gap-2">
                <p className="text-xs font-semibold text-purple-600">{v.englishName}</p>
                <h3 className="text-base font-bold text-purple-900">{v.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{v.description}</p>
              <div className="mt-3 grid gap-1.5">
                {v.examples.map((ex) => (
                  <p key={ex} className="rounded-md bg-purple-50 px-3 py-1.5 font-mono text-xs text-slate-700">{ex}</p>
                ))}
              </div>
              <p className="mt-2 text-xs text-purple-600">{v.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
