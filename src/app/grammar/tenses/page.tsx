import { ExampleBlock } from "@/components/ExampleBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { tenseMatrix, tenses } from "@/content/tenses";

export default function TensesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Tenses"
        title="英语时态总览"
        description={'可以把时态理解为"时间 + 动作状态"：现在、过去、将来、过去将来，加上一般、进行、完成、完成进行。'}
      />

      <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-xs">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-3 py-2.5">时间</th>
                <th className="px-3 py-2.5">一般</th>
                <th className="px-3 py-2.5">进行</th>
                <th className="px-3 py-2.5">完成</th>
                <th className="px-3 py-2.5">完成进行</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tenseMatrix.map((row) => (
                <tr key={row.time} className="text-slate-700">
                  <th className="bg-slate-50 px-3 py-2.5 font-semibold text-slate-950">{row.time}</th>
                  <td className="px-3 py-2.5 font-mono text-xs">{row.simple}</td>
                  <td className="px-3 py-2.5 font-mono text-xs">{row.continuous}</td>
                  <td className="px-3 py-2.5 font-mono text-xs">{row.perfect}</td>
                  <td className="px-3 py-2.5 font-mono text-xs">{row.perfectContinuous}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-6 grid gap-3">
        {tenses.map((tense) => (
          <section key={tense.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-72 shrink-0">
                <p className="text-xs font-semibold text-blue-600">{tense.englishName}</p>
                <h2 className="mt-1 text-lg font-bold text-slate-950">{tense.name}</h2>
                <p className="mt-2 rounded-lg bg-blue-50 px-3 py-2 font-mono text-xs leading-6 text-blue-900">
                  {tense.pattern}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{tense.function}</p>
                <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-900">
                  {tense.note}
                </p>
              </div>
              <div className="flex flex-1 gap-3">
                <div className="flex-1">
                  <ExampleBlock english={tense.positive} chinese="肯定句" />
                </div>
                <div className="flex-1">
                  <ExampleBlock english={tense.negative} chinese="否定句" />
                </div>
                <div className="flex-1">
                  <ExampleBlock english={tense.question} chinese="一般疑问句" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
