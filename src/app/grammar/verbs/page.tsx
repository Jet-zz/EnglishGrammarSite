import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { contentVerbs, contentVerbs2, linkingVerbs, verbFeatures } from "@/content/verbs";

const featureColors: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  blue:   { border: "border-blue-400",  bg: "bg-blue-50",  text: "text-blue-900",  badge: "bg-blue-100 text-blue-700" },
  emerald:{ border: "border-emerald-400",bg: "bg-emerald-50",text: "text-emerald-900",badge: "bg-emerald-100 text-emerald-700" },
  purple: { border: "border-purple-400",bg: "bg-purple-50",text: "text-purple-900",badge: "bg-purple-100 text-purple-700" },
  amber:  { border: "border-amber-400", bg: "bg-amber-50", text: "text-amber-900", badge: "bg-amber-100 text-amber-700" },
  rose:   { border: "border-rose-400",  bg: "bg-rose-50",  text: "text-rose-900",  badge: "bg-rose-100 text-rose-700" },
};

export default function VerbsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Predicate verbs"
        title={contentVerbs.title}
        description={
          <>
            谓语动词是句子的引擎。它决定主语做什么、是什么、处于什么状态，同时承载时态、语态、语气。
            <br />
            <span className="whitespace-nowrap">
              可以把谓语动词分成两大类：
              <span className="font-bold text-amber-700">实义动词</span>
              和
              <span className="font-bold text-purple-700">非实义动词（系动词）</span>
              。
            </span>
          </>
        }
      />

      {/* ── 对比总览：实义动词 vs 系动词 ── */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {/* 实义动词 */}
        <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-amber-50 to-white p-6 shadow-sm">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-bold text-amber-700">
            实义动词
          </span>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {contentVerbs.overview.left.desc}
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-700">及物</span>
              <span>后面必须接宾语，动作作用到某个对象上</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-700">不及物</span>
              <span>动作本身已经完整，不需要宾语</span>
            </div>
          </div>
        </div>

        {/* 系动词 */}
        <div className="rounded-2xl border-2 border-purple-300 bg-gradient-to-b from-purple-50 to-white p-6 shadow-sm">
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-bold text-purple-700">
            非实义动词 · 系动词
          </span>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {contentVerbs.overview.right.desc}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5 text-xs">
            {["be 动词", "感官", "变化", "表象", "持续", "终止"].map((t) => (
              <span key={t} className="rounded-full bg-purple-100 px-2.5 py-0.5 font-medium text-purple-700">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 三态一否一一致 ── */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">{verbFeatures.title}</h2>
        <p className="mt-1 text-sm text-slate-500">{verbFeatures.subtitle}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {verbFeatures.items.map((f) => {
            const c = featureColors[f.color]!;
            const isTense = f.name === "时态";
            const card = (
              <div className={`rounded-xl border-l-4 ${c.border} ${c.bg} p-4 shadow-sm ${isTense ? "transition hover:shadow-md hover:brightness-95" : ""}`}>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-slate-900">{f.name}</span>
                  <span className={`rounded px-1.5 py-0.5 text-xs font-medium ${c.badge}`}>{f.english}</span>
                </div>
                <p className="mt-2 text-sm leading-5 text-slate-600">{f.desc}</p>
                <p className="mt-2 text-xs text-slate-400">{isTense ? "点击进入时态专题 →" : f.keywords}</p>
              </div>
            );
            return isTense ? (
              <Link key={f.name} href="/grammar/tenses" className="block">
                {card}
              </Link>
            ) : (
              <div key={f.name}>{card}</div>
            );
          })}
        </div>
      </section>

      {/* ── 实义动词详情 ── */}
      <section className="mt-10">
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

      {/* ── 非实义动词详情 ── */}
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
