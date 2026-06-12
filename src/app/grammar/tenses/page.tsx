import { ExampleBlock } from "@/components/ExampleBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { tenseMatrix, tenses } from "@/content/tenses";

/** 根据时态名称返回文字颜色 */
function tenseNameColor(name: string): string {
  const red = new Set(["一般现在时", "一般过去时", "一般将来时", "现在进行时"]);
  const yellow = new Set(["过去将来时", "过去进行时", "现在完成时", "过去完成时"]);
  const green = new Set(["将来进行时", "将来完成时", "现在完成进行时"]);
  if (red.has(name)) return "text-red-600";
  if (yellow.has(name)) return "text-yellow-600";
  if (green.has(name)) return "text-green-600";
  return "text-slate-950";
}

/** 根据时间 + 体返回单元格文字颜色 */
function cellColor(time: string, aspect: string): string {
  const key = `${time}-${aspect}`;
  const red = new Set(["现在-一般", "现在-进行", "过去-一般", "将来-一般"]);
  const yellow = new Set(["过去将来-一般", "过去-进行", "现在-完成", "过去-完成"]);
  const green = new Set(["将来-进行", "将来-完成", "现在-完成进行"]);
  if (red.has(key)) return "text-red-600 font-semibold";
  if (yellow.has(key)) return "text-yellow-600 font-semibold";
  if (green.has(key)) return "text-green-600 font-semibold";
  return "text-slate-500";
}

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
                <tr key={row.time}>
                  <th className="bg-slate-50 px-3 py-2.5 font-semibold text-slate-950">{row.time}</th>
                  <td className={`px-3 py-2.5 font-mono text-xs ${cellColor(row.time, "一般")}`}>{row.simple}</td>
                  <td className={`px-3 py-2.5 font-mono text-xs ${cellColor(row.time, "进行")}`}>{row.continuous}</td>
                  <td className={`px-3 py-2.5 font-mono text-xs ${cellColor(row.time, "完成")}`}>{row.perfect}</td>
                  <td className={`px-3 py-2.5 font-mono text-xs ${cellColor(row.time, "完成进行")}`}>{row.perfectContinuous}</td>
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
                <h2 className={`text-lg font-bold ${tenseNameColor(tense.name)}`}>{tense.name}</h2>
                <div className="mt-2 rounded-lg bg-blue-50 px-3 py-2 font-mono text-xs leading-6 text-blue-900">
                  {tense.pattern.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{tense.function}</p>
                <div className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-900">
                  {tense.note.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
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
