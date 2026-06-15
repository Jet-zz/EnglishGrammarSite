"use client";

import { ExampleBlock } from "@/components/ExampleBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { tenseMatrix, tenses } from "@/content/tenses";
import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

/* ── 弹出层内容 ── */

const questionWords = [
  ["What", "什么"],
  ["Who", "谁"],
  ["Which", "哪一个"],
  ["When", "何时"],
  ["Where", "何地"],
  ["Why", "为什么"],
  ["How", "如何"],
  ["How + 形", "How + 形容词"],
];

const personRows = [
  ["第一人称", "I（我）", "we（我们）"],
  ["第二人称", "you（你）", "you（你们）"],
  ["第三人称", "he / she / it（他/她/它）", "they（他们/她们/它们）"],
];

function QuestionWordsPopup() {
  return (
    <div className="rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-lg text-xs whitespace-nowrap">
      {questionWords.map(([en, zh]) => (
        <div key={en} className="flex gap-3 py-0.5">
          <span className="font-mono font-semibold text-slate-800">{en}</span>
          <span className="text-slate-500">{zh}</span>
        </div>
      ))}
    </div>
  );
}

function PersonTablePopup() {
  return (
    <div className="rounded-lg border border-slate-300 bg-white shadow-lg text-xs">
      <table>
        <thead>
          <tr className="border-b border-slate-200 bg-slate-100">
            <th className="px-2.5 py-1 text-left font-semibold text-slate-600">人称</th>
            <th className="px-2.5 py-1 text-left font-semibold text-slate-600">单数</th>
            <th className="px-2.5 py-1 text-left font-semibold text-slate-600">复数</th>
          </tr>
        </thead>
        <tbody>
          {personRows.map(([person, singular, plural]) => (
            <tr key={person} className="border-b border-slate-100 last:border-0">
              <td className="px-2.5 py-1 font-semibold text-slate-700">{person}</td>
              <td className="px-2.5 py-1 font-mono text-slate-800">{singular}</td>
              <td className="px-2.5 py-1 font-mono text-slate-800">{plural}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Portal 弹窗 ── */

type TooltipKind = "questionWords" | "personTable" | null;

function PortalTooltip({ kind, rect }: { kind: NonNullable<TooltipKind>; rect: DOMRect }) {
  const [adjustedLeft, setAdjustedLeft] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const estWidth = kind === "questionWords" ? 180 : 280;
    let left = rect.left + rect.width / 2 - estWidth / 2;
    if (left < 8) left = 8;
    setAdjustedLeft(left);
  }, [kind, rect]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed"
      style={{
        top: rect.top - 8,
        left: adjustedLeft,
        transform: "translateY(-100%)",
        zIndex: 99999,
        pointerEvents: "none",
      }}
    >
      {kind === "questionWords" ? <QuestionWordsPopup /> : <PersonTablePopup />}
    </div>,
    document.body
  );
}

/* ── 触发高亮词 ── */

function HoverSpan({
  children,
  kind,
  color,
}: {
  children: string;
  kind: NonNullable<TooltipKind>;
  color?: "red" | "blue" | "gray";
}) {
  const c = color === "blue" ? "text-blue-600 border-blue-400" : color === "gray" ? "text-slate-500 border-slate-400" : "text-red-600 border-red-400";
  const [rect, setRect] = useState<DOMRect | null>(null);

  return (
    <>
      <span
        className={`${c} font-semibold cursor-help border-b border-dashed`}
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        {children}
      </span>
      {rect ? <PortalTooltip kind={kind} rect={rect} /> : null}
    </>
  );
}

/* ── 高亮文本 ── */

function HighlightText({ text, words, color }: { text: string; words: string[]; color?: "red" | "blue" | "gray" }) {
  if (!words.length) return <>{text}</>;
  const c = color === "blue" ? "text-blue-600" : color === "gray" ? "text-slate-500" : "text-red-600";
  const sorted = [...words].sort((a, b) => b.length - a.length);
  const escaped = sorted.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = escaped.join("|");
  const regex = new RegExp(`(${pattern})`, "g");
  const parts = text.split(regex);
  const wordSet = new Set(sorted);
  return (
    <>
      {parts.map((part, i) => {
        if (!(part && wordSet.has(part))) return <span key={i}>{part}</span>;
        if (part === "特殊疑问词") return <HoverSpan key={i} kind="questionWords" color={color}>{part}</HoverSpan>;
        if (part === "单三形式") return <HoverSpan key={i} kind="personTable" color={color}>{part}</HoverSpan>;
        return <span key={i} className={`${c} font-semibold`}>{part}</span>;
      })}
    </>
  );
}

/* ── 高亮配置 ── */

const beHighlights: Record<string, { words: string[]; formulaWords: string[] }> = {
  "肯定句": { words: ["am", "is"], formulaWords: ["am/is/are"] },
  "否定句": { words: ["am not", "is not"], formulaWords: ["am/is/are", "not"] },
  "一般疑问句": { words: ["Am", "Is"], formulaWords: ["Am/Is/Are"] },
  "特殊疑问句": { words: ["Who", "What"], formulaWords: ["特殊疑问词"] },
  "祈使句": { words: ["Be"], formulaWords: ["Be"] },
};

const pastBeHighlights: Record<string, { words: string[]; grayWords: string[]; formulaWords: string[] }> = {
  "肯定句":     { words: ["was", "were"],        grayWords: ["am", "is"],        formulaWords: ["was/were"] },
  "否定句":     { words: ["was not", "were not"], grayWords: ["am not", "is not"], formulaWords: ["was/were", "not"] },
  "一般疑问句":  { words: ["Was", "Were"],        grayWords: ["Are", "Is"],        formulaWords: ["Was/Were"] },
  "特殊疑问句":  { words: ["Who", "What", "was"],  grayWords: ["Who", "What", "is"],  formulaWords: ["特殊疑问词"] },
  "祈使句":     { words: ["Be"],                  grayWords: ["Be"],               formulaWords: ["Be"] },
};

const lexicalHighlights: Record<string, { words: string[]; formulaWords: string[] }> = {
  "肯定句": { words: ["love", "loves"], formulaWords: ["动词原形/", "单三形式"] },
  "否定句": { words: ["don't", "doesn't", "love"], formulaWords: ["don't/doesn't", "动词原形"] },
  "一般疑问句": { words: ["Do", "Does", "love"], formulaWords: ["Do/Does", "动词原形"] },
  "特殊疑问句": { words: ["Who", "do", "does", "love"], formulaWords: ["特殊疑问词"] },
  "祈使句": { words: ["Love", "Come"], formulaWords: ["动词原形"] },
};

const pastLexicalHighlights: Record<string, { words: string[]; grayWords: string[]; formulaWords: string[] }> = {
  "肯定句":     { words: ["played"],       grayWords: ["play"],        formulaWords: ["动词过去式"] },
  "否定句":     { words: ["didn't", "love"], grayWords: ["don't", "love"], formulaWords: ["didn't", "动词原形"] },
  "一般疑问句":  { words: ["Did", "love"],   grayWords: ["Do", "love"],   formulaWords: ["Did", "动词原形"] },
  "特殊疑问句":  { words: ["Who", "did", "love"], grayWords: ["Who", "do", "love"], formulaWords: ["特殊疑问词"] },
  "祈使句":     { words: [], grayWords: [], formulaWords: ["动词原形"] },
};

function getHighlights(tenseName: string, ci: number): Record<string, { words: string[]; formulaWords: string[] }> {
  const isPast = tenseName === "一般过去时";
  if (ci === 0) return isPast ? pastBeHighlights : beHighlights;
  return isPast ? pastLexicalHighlights : lexicalHighlights;
}

/* ── 颜色工具 ── */

function tenseNameColor(name: string): string {
  const red = new Set(["一般现在时", "一般过去时", "一般将来时", "现在进行时"]);
  const yellow = new Set(["过去将来时", "过去进行时", "现在完成时", "过去完成时"]);
  const green = new Set(["将来进行时", "将来完成时", "现在完成进行时"]);
  if (red.has(name)) return "text-red-600";
  if (yellow.has(name)) return "text-yellow-600";
  if (green.has(name)) return "text-green-600";
  return "text-slate-950";
}

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

/* ── 左侧导航高亮颜色 ── */
const tenseNavColorMap: Record<string, string> = {
  "text-red-600":    "bg-red-50 border-red-400 text-red-600",
  "text-yellow-600": "bg-yellow-50 border-yellow-400 text-yellow-600",
  "text-green-600":  "bg-green-50 border-green-400 text-green-600",
  "text-slate-950":  "bg-slate-100 border-slate-500 text-slate-950",
};
function tenseNavActiveClass(name: string): string {
  return tenseNavColorMap[tenseNameColor(name)] ?? "bg-slate-100 border-slate-500 text-slate-950";
}

/* ── 页面 ── */

export default function TensesPage() {
  const [activeTense, setActiveTense] = useState(tenses[0]?.name ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  // IntersectionObserver 检测哪个时态在视口中心附近
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // 找最接近视口顶部的可见 section
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveTense(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sectionRefs.current.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // 重新 observe 当 DOM 更新后
  useEffect(() => {
    const obs = observerRef.current;
    if (!obs) return;
    sectionRefs.current.forEach((el) => obs.observe(el));
  });

  const setRef = useCallback((name: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(name, el);
  }, []);

  const scrollToTense = useCallback((name: string) => {
    const el = sectionRefs.current.get(name);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setActiveTense(name);
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Tenses"
        title="英语时态总览"
        description={'可以把时态理解为"时间 + 动作状态"：现在、过去、将来、过去将来，加上一般、进行、完成、完成进行。'}
      />

      {/* ── 总览表格 ── */}
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

      {/* ── 主体：左侧导航 + 右侧时态详情 ── */}
      <div className="mt-8 flex gap-6">
        {/* 左侧导航 */}
        <nav className="hidden lg:block w-44 shrink-0">
          <div className="sticky top-8 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="bg-slate-950 px-4 py-3 text-sm font-bold text-white">
              时态总览
            </div>
            <div className="divide-y divide-slate-50 max-h-[calc(100vh-6rem)] overflow-y-auto">
              {tenses.map((tense) => {
                const isActive = activeTense === tense.name;
                return (
                  <button
                    key={tense.name}
                    onClick={() => scrollToTense(tense.name)}
                    className={`w-full text-left px-4 py-2.5 text-xs transition ${
                      isActive
                        ? `${tenseNavActiveClass(tense.name)} font-bold border-l-4`
                        : "text-slate-600 hover:bg-slate-50 border-l-4 border-transparent"
                    }`}
                  >
                    {tense.name}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* 右侧时态详情 */}
        <div className="min-w-0 flex-1 grid gap-3">
          {tenses.map((tense) => (
            <section
              key={tense.name}
              id={tense.name}
              ref={setRef(tense.name)}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm scroll-mt-20"
            >
              {tense.sentenceTable ? (
                <div className="w-full">
                  <h2 className={`text-lg font-bold ${tenseNameColor(tense.name)}`}>{tense.name}</h2>
                  <div className="mt-1 text-sm leading-6 text-slate-900 font-semibold">{tense.function}</div>

                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full min-w-[640px] text-left text-xs table-fixed">
                      <colgroup>
                        <col style={{ width: 72 }} />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="px-3 py-2 text-slate-400 font-semibold"></th>
                          {tense.sentenceTable.colLabels.map((col) => (
                            <th key={col.label} className="px-3 py-2">
                              <div className="flex items-center justify-between gap-4">
                                <span className="text-sm font-bold text-blue-700">{col.label}</span>
                                <span className="inline-block min-w-40 text-xs text-slate-950 text-right">公式</span>
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
                                  <div className="font-mono leading-6">
                                    {col.map((ex, ei) => {
                                      const h = getHighlights(tense.name, ci)[row.sentenceType] as any;
                                      const isPast = tense.name === "一般过去时";
                                      const lineColor = isPast && ei === 0 ? "text-slate-400" : "text-slate-950";
                                      const hlColor = isPast && ei === 0 ? "gray" : ci === 0 ? "red" : "blue";
                                      const hlWords = isPast && ei === 0 && h?.grayWords ? h.grayWords : h?.words ?? [];
                                      return (
                                        <span key={ei} className={`block ${lineColor}`}>
                                          <HighlightText text={ex} words={hlWords} color={hlColor} />
                                        </span>
                                      );
                                    })}
                                  </div>
                                  <div className="shrink-0 min-w-40 font-mono text-xs leading-6 text-slate-950 whitespace-nowrap text-right">
                                    {(() => {
                                      const h = getHighlights(tense.name, ci)[row.sentenceType];
                                      return <HighlightText text={row.formulas[ci]} words={h?.formulaWords ?? []} color={ci === 0 ? "red" : "blue"} />;
                                    })()}
                                  </div>
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm leading-6 text-red-700 font-semibold">
                    {tense.note.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="w-72 shrink-0">
                    <h2 className={`text-lg font-bold ${tenseNameColor(tense.name)}`}>{tense.name}</h2>
                    <div className="mt-2 rounded-lg bg-blue-50 px-3 py-2 font-mono text-xs leading-6 text-blue-900">
                      {tense.pattern.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-900 font-semibold">{tense.function}</p>
                    <div className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-900">
                      {tense.note.split("\n").map((line, i) => (
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
    </div>
  );
}
