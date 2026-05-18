const realBranches = [
  { name: "及物动词", desc: "后面必须接宾语", examples: ["I love you.", "She reads books."] },
  { name: "不及物动词", desc: "动作本身完整", examples: ["Birds fly.", "He runs."] },
];

const linkBranches = [
  { name: "be 动词", keywords: "am / is / are / was / were" },
  { name: "感官动词", keywords: "look / sound / smell / taste / feel" },
  { name: "变化系动词", keywords: "become / get / turn / grow" },
  { name: "表象系动词", keywords: "seem / appear / look" },
  { name: "持续系动词", keywords: "keep / remain / stay" },
  { name: "终止系动词", keywords: "prove / turn out" },
];

export function VerbTree() {
  return (
    <div className="select-none">
      {/* Root */}
      <div className="flex justify-center">
        <div className="rounded-2xl bg-slate-900 px-10 py-4 text-xl font-extrabold text-white shadow-lg">
          谓语动词&ensp;·&ensp;句子的引擎
        </div>
      </div>

      {/* Vertical stem */}
      <div className="flex justify-center py-2">
        <svg width="48" height="32" viewBox="0 0 48 32">
          <line x1="24" y1="0" x2="24" y2="24" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="4" y1="24" x2="44" y2="24" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="4" y1="24" x2="4" y2="32" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="44" y1="24" x2="44" y2="32" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Two main columns */}
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8">
        {/* 实义动词 */}
        <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-amber-50 to-white p-6 shadow-md">
          <div className="text-center">
            <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-700">实义动词</span>
            <p className="mt-2 text-sm text-amber-600">有实际动作含义，独立做谓语</p>
          </div>
          <div className="mt-5 grid gap-4">
            {realBranches.map((b) => (
              <div key={b.name} className="rounded-xl border border-amber-200 bg-white p-4">
                <p className="text-base font-bold text-amber-900">{b.name}</p>
                <p className="mt-0.5 text-sm text-amber-600">{b.desc}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {b.examples.map((ex) => (
                    <span key={ex} className="rounded-lg bg-amber-50 px-3 py-1.5 font-mono text-sm text-slate-700">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 非实义动词 */}
        <div className="rounded-2xl border-2 border-purple-300 bg-gradient-to-b from-purple-50 to-white p-6 shadow-md">
          <div className="text-center">
            <span className="rounded-full bg-purple-100 px-4 py-1.5 text-sm font-bold text-purple-700">
              非实义动词 · 系动词
            </span>
            <p className="mt-2 text-sm text-purple-600">连接主语和表语，说明主语的状态</p>
          </div>
          <div className="mt-5 grid gap-3">
            {linkBranches.map((b) => (
              <div key={b.name} className="rounded-xl border border-purple-200 bg-white p-3">
                <p className="text-base font-bold text-purple-900">{b.name}</p>
                <p className="mt-0.5 font-mono text-xs text-slate-500">{b.keywords}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
