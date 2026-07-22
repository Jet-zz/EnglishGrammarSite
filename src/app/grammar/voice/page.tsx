import { voiceTenses, voiceNote } from "@/content/voice";

export default function VoicePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      {/* ── 核心公式横幅 ── */}
      <div className="mb-8 text-center">
        <p className="text-3xl font-extrabold text-slate-900">
          <span className="text-red-600">8</span>BE + 动词的过去分词
        </p>
        {/* 向下箭头（实心三角，黄色） */}
        <div className="mt-2 flex justify-center">
          <div style={{ marginLeft: -250 }}>
            <svg width="24" height="16" viewBox="0 0 24 16">
              <polygon points="12,16 0,0 24,0" fill="#facc15" />
            </svg>
          </div>
        </div>
        {/* 8 种 BE 动词 */}
        <div className="mt-2 flex justify-center gap-[3px] flex-wrap">
          {["be", "am", "is", "are", "was", "were", "been", "being"].map((w) => (
            <span key={w} className="rounded-full bg-yellow-400 px-4 py-1.5 font-mono text-base font-bold text-yellow-900">
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* ── 各时态主动被动对照表 ── */}
      <section>
        <h2 className="text-xl font-bold text-slate-950">各时态的主动 / 被动对照</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-4 py-3">时态</th>
                  <th className="px-4 py-3">主动语态</th>
                  <th className="px-4 py-3">被动公式</th>
                  <th className="px-4 py-3">被动语态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {voiceTenses.map((vt) => (
                  <tr key={vt.name} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-800 whitespace-nowrap">{vt.name}</td>
                    <td className="px-4 py-3">
                      <p className="font-mono text-xs text-emerald-800">{vt.active}</p>
                      <p className="mt-1 text-xs text-slate-400">{vt.activeFormula}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-mono text-xs font-semibold text-blue-700 whitespace-nowrap">{vt.passiveShort}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-mono text-xs text-purple-800">{vt.passive}</p>
                      <p className="mt-1 text-xs text-slate-400">{vt.passiveFormula}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 核心公式 ── */}
      <section className="mt-6 rounded-xl border border-purple-200 bg-purple-50 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-purple-900">{voiceNote.title}</h2>
        <p className="mt-3 text-sm leading-7 text-purple-800">{voiceNote.body}</p>
        <div className="mt-4 space-y-2">
          <div className="rounded-lg bg-white px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold text-amber-600">注意：</span>{voiceNote.rule}
          </div>
          <div className="rounded-lg bg-white px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold text-blue-600">提示：</span>{voiceNote.byNote}
          </div>
        </div>
      </section>
    </div>
  );
}
