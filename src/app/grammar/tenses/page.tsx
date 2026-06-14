import { ExampleBlock } from "@/components/ExampleBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { tenseMatrix, tenses } from "@/content/tenses";

/** 对文本中指定关键词标红 */
function HighlightText({ text, words }: { text: string; words: string[] }) {
  if (!words.length) return <>{text}</>;
  const pattern = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const regex = new RegExp(`(${pattern})`, 'g');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        words.includes(part)
          ? <span key={i} className="text-red-600 font-semibold">{part}</span>
          : <>{part}</>
      )}
    </>
  );
}

/** be 动词列各句式的关键词高亮配置 */
const beHighlights: Record<string, { words: string[]; formulaWords: string[] }> = {
  "肯定句":     { words: ["am", "is"], formulaWords: ["am/is/are"] },
  "否定句":     { words: ["am not", "is not"], formulaWords: ["am/is/are", "not"] },
  "一般疑问句":  { words: ["Am", "Is"], formulaWords: ["Am/Is/Are"] },
  "特殊疑问句":  { words: ["Who", "What"], formulaWords: ["特殊疑问词"] },
  "祈使句":     { words: ["Be"], formulaWords: ["Be"] },
};
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
            {tense.sentenceTable ? (
              /* ── 双栏表格布局（be动词 vs 实义动词）── */
              <div className="w-full">
                <h2 className={`text-lg font-bold ${tenseNameColor(tense.name)}`}>{tense.name}</h2>
                <div className="mt-1 text-sm leading-6 text-slate-600">{tense.function}</div>

                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[500px] text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="px-3 py-2 w-28 text-slate-400 font-semibold"></th>
                        {tense.sentenceTable.colLabels.map((col) => (
                          <th key={col.label} className="px-3 py-2 whitespace-nowrap">
                            <div className="flex items-center justify-between gap-4">
                              <span className="text-sm font-bold text-blue-700">{col.label}</span>
                              <span className="text-xs text-slate-950">公式</span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tense.sentenceTable.body.map((row) => (
                        <tr key={row.sentenceType} className="border-b border-slate-100 last:border-0">
                          <td className="px-3 py-2.5 font-semibold text-slate-700 align-top whitespace-nowrap">
                            {row.sentenceType}
                          </td>
                          {row.examples.map((col, ci) => (
                            <td key={ci} className="px-3 py-2.5 align-top">
                              <div className="flex items-center justify-between gap-4">
                                <div className="font-mono text-slate-700 leading-6">
                                  {col.map((ex, ei) => (
                                    <span key={ei} className="block">
                                      {ci === 0
                                        ? <HighlightText text={ex} words={beHighlights[row.sentenceType]?.words ?? []} />
                                        : ex}
                                    </span>
                                  ))}
                                </div>
                                <div className="shrink-0 font-mono text-xs leading-6 text-slate-950 whitespace-nowrap">
                                  {ci === 0
                                    ? <HighlightText text={row.formulas[ci]} words={beHighlights[row.sentenceType]?.formulaWords ?? []} />
                                    : row.formulas[ci]}
                                </div>
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-900">
                  {tense.note.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ) : (
              /* ── 旧布局（其他时态）── */
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
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
