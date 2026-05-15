import { overviewData, demo } from "@/content/grammarOverview";

export default function StructureOverviewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      {/* Formula banner */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          英语句子结构公式
        </p>
        <div className="mt-4 flex items-center justify-center gap-3 text-2xl font-black sm:gap-4 sm:text-4xl">
          <span>英语句子</span>
          <span className="text-slate-300">=</span>
          <span className="rounded-lg bg-emerald-100 px-4 py-2 text-emerald-800">主干</span>
          <span className="text-slate-300">+</span>
          <span className="rounded-lg bg-blue-100 px-4 py-2 text-blue-800">修饰</span>
        </div>
      </div>

      {/* Annotated example */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          例句拆解 · 绿 = 主干，蓝 = 前置修饰，黄 = 后置修饰
        </p>
        <div className="mt-4 flex flex-wrap text-lg leading-10">
          {demo.annotations.map((a, i) => (
            <span key={i} className={`rounded-md px-1.5 ${a.color}`}>
              {a.text}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded bg-emerald-200" />
            <span className="text-slate-600">主干</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded bg-blue-200" />
            <span className="text-slate-600">前置修饰</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded bg-yellow-200" />
            <span className="text-slate-600">后置修饰（理解难点）</span>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
          去掉所有修饰，句子只剩：
          <span className="ml-2 font-mono font-semibold">boy runs</span>
          <span className="ml-2 text-slate-500">（主谓）</span>
        </div>
      </section>

      {/* Core + Modifier columns */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Core */}
        <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
          <h2 className="text-lg font-bold text-emerald-900">{overviewData.core.title}</h2>
          <p className="mt-1 text-sm leading-6 text-emerald-700">
            {overviewData.core.description}
          </p>
          <div className="mt-4 grid gap-2">
            {overviewData.core.patterns.map((p) => (
              <div key={p.name} className="rounded-lg border border-emerald-200 bg-white px-4 py-3">
                <span className="font-semibold text-emerald-900">{p.name}</span>
                <span className="ml-4 font-mono text-sm text-slate-500">{p.example}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Modifiers */}
        <section className="rounded-xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
          <h2 className="text-lg font-bold text-blue-900">修饰部分</h2>
          <p className="mt-1 text-sm leading-6 text-blue-700">
            这些成分附着在主干上，让句子的信息更具体、更准确。
          </p>
          <div className="mt-4 grid gap-2">
            {overviewData.modifiers.map((m) => {
              const isHard = (m as { hard?: boolean }).hard;
              return (
                <div
                  key={m.name}
                  className={
                    isHard
                      ? "rounded-lg border border-yellow-300 bg-yellow-50 px-4 py-3"
                      : "rounded-lg border border-blue-200 bg-white px-4 py-3"
                  }
                >
                  <span
                    className={
                      isHard ? "font-semibold text-yellow-800" : "font-semibold text-blue-900"
                    }
                  >
                    {m.name}
                  </span>
                  {isHard ? (
                    <span className="ml-2 rounded bg-yellow-200 px-1.5 py-0.5 text-xs font-semibold text-yellow-800">
                      后置
                    </span>
                  ) : null}
                  <span className="ml-2 text-sm text-slate-600">{m.description}</span>
                </div>
              );
            })}
            <div className="rounded-lg border border-blue-200 bg-white/60 px-4 py-3 text-sm text-slate-500">
              等等：数词、同位语、名词作定语、插入语、比较结构……
            </div>
          </div>
        </section>
      </div>

      {/* Hard modifiers explanation */}
      <section className="mt-6 rounded-xl border border-yellow-300 bg-yellow-50 p-5 shadow-sm">
        <h2 className="text-base font-bold text-yellow-900">
          {overviewData.hardModifiers.title}
        </h2>
        <p className="mt-2 text-sm leading-7 text-yellow-800">
          {overviewData.hardModifiers.body}
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-yellow-200 bg-white px-4 py-3">
            <p className="text-xs font-semibold text-slate-400">中文（修饰在前）</p>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {overviewData.hardModifiers.contrast.cn}
            </p>
          </div>
          <div className="rounded-lg border border-yellow-200 bg-white px-4 py-3">
            <p className="text-xs font-semibold text-slate-400">英语（修饰在后）</p>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {overviewData.hardModifiers.contrast.en}
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-yellow-700">
          {overviewData.hardModifiers.contrast.note}
        </p>
      </section>
    </div>
  );
}
