import { SectionHeading } from "@/components/SectionHeading";
import { irregularVerbs, verbExamples } from "@/content/irregularVerbs";

export default function IrregularVerbsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Irregular Verbs"
        title="动词过去式"
        description="英语中很多动词的过去式不是直接加 -ed，而是有特殊变化。这些动词需要单独记忆。"
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* 左侧：表格 */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-4 py-3 w-14 text-center">序号</th>
                  <th className="px-4 py-3">动词原形</th>
                  <th className="px-4 py-3">中文释义</th>
                  <th className="px-4 py-3">过去式</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {irregularVerbs.map((item, i) => (
                  <tr key={item.verb} className="hover:bg-slate-50">
                    <td className="px-4 py-2 text-center text-slate-400">{i + 1}</td>
                    <td className="px-4 py-2 font-mono font-semibold text-red-600">{item.verb}</td>
                    <td className="px-4 py-2 text-slate-600">{item.chinese}</td>
                    <td className="px-4 py-2 font-mono font-semibold text-blue-600">{item.past}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 右侧：例句 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-950">例句</h2>
          <div className="mt-3 grid gap-2">
            {verbExamples.map((ex) => (
              <p key={ex} className="rounded-lg bg-slate-50 px-4 py-2.5 font-mono text-sm text-slate-800">
                {ex}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
