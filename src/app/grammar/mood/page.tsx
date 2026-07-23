import { SectionHeading } from "@/components/SectionHeading";
import { moodIntro, modalTable, modalNote, modalUsage } from "@/content/mood";
import { AssistVerb } from "@/components/AssistVerb";

export default function MoodPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Mood"
        title={moodIntro.title}
        description={moodIntro.intro}
      />
      <p className="mt-2 text-sm leading-6 text-slate-600 max-w-3xl">
        在谓语中的作用：情态动词是（当作）<AssistVerb>助动词</AssistVerb>，必须帮助动词形成复合谓语。
      </p>

      {/* ── 情态动词对照表 + 词义说明 ── */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-slate-950">{modalTable.title}</h2>
        <div className="mt-4 flex flex-col lg:flex-row gap-4 items-stretch">
          {/* 表格（左半） */}
          <div className="lg:w-1/2 w-full flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  {modalTable.headers.map((h) => (
                    <th key={h} className="px-4 py-2.5 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {modalTable.rows.map((row, ri) => (
                  <tr key={ri} className="hover:bg-slate-50">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-2.5 font-mono text-sm font-semibold text-slate-800">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 词义说明（右半） */}
          <div className="lg:w-1/2 w-full flex flex-col rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
            <p className="text-sm leading-7 text-slate-700">{modalNote.text}</p>
            <div className="mt-3 font-mono text-sm font-semibold text-slate-800 leading-7">
              {modalNote.verbs.map((v) => (
                <p key={v}>{v}</p>
              ))}
            </div>
            <p className="mt-2 text-xs text-amber-700">{modalNote.hint}</p>
          </div>
        </div>
      </section>

      {/* ── 情态动词的三种用法 ── */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-slate-950">{modalUsage.title}</h2>
        <p className="mt-2 text-base font-bold text-slate-600">
          {modalUsage.rule}<span className="text-red-600">{modalUsage.ruleRed}</span>{modalUsage.ruleEnd}
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {modalUsage.items.map((item, i) => {
            const colors = [
              "border-blue-400 bg-blue-50",
              "border-emerald-400 bg-emerald-50",
              "border-purple-400 bg-purple-50",
            ];
            return (
              <div key={item.label} className={`rounded-xl border-l-4 ${colors[i]} p-5 shadow-sm`}>
                <h2 className="text-lg font-bold text-slate-900">{item.label}</h2>
                <p className="mt-2 font-mono text-sm font-bold text-blue-700">{item.sub}</p>
                {item.example ? (
                  <div className="mt-3 rounded-lg bg-white px-4 py-3 font-mono text-sm text-slate-800 shadow-sm">
                    <p>{item.example}</p>
                    {item.translation ? (
                      <p className="mt-1 text-xs text-slate-400">{item.translation}</p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
