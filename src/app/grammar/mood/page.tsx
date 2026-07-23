"use client";

import { useState, Fragment } from "react";
import { createPortal } from "react-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { moodIntro, modalTable, modalNote, modalUsage } from "@/content/mood";
import { AssistVerb } from "@/components/AssistVerb";

/** 带 hover 提示的圆角矩形标记 */
/** 纯文本颜色标记 */
function colorSpan(t: string): React.ReactNode {
  const parts = t.split(/({r}|{\/r}|{y}|{\/y}|{p}|{\/p}|{g}|{\/g})/g);
  const result: React.ReactNode[] = [];
  let r = false, y = false, p = false, g = false;
  parts.forEach((seg, i) => {
    if (seg === "{r}") { r = true; return; }
    if (seg === "{/r}") { r = false; return; }
    if (seg === "{y}") { y = true; return; }
    if (seg === "{/y}") { y = false; return; }
    if (seg === "{p}") { p = true; return; }
    if (seg === "{/p}") { p = false; return; }
    if (seg === "{g}") { g = true; return; }
    if (seg === "{/g}") { g = false; return; }
    if (!seg) return;
    if (r) result.push(<span key={i} className="text-red-600 font-semibold">{seg}</span>);
    else if (y) result.push(<span key={i} className="text-yellow-600 font-semibold">{seg}</span>);
    else if (p) result.push(<span key={i} className="text-purple-600 font-semibold">{seg}</span>);
    else if (g) result.push(<span key={i} className="text-slate-400">{seg}</span>);
    else result.push(<span key={i}>{seg}</span>);
  });
  return result;
}

function HoverBadge({ tooltip, children }: { tooltip: string; children: React.ReactNode }) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  return (
    <>
      <span
        className="inline cursor-help rounded-md bg-yellow-300 px-1 py-0.5"
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        {children}
      </span>
      {rect ? (
        createPortal(
          <div
            className="fixed pointer-events-none"
            style={{
              top: rect.top - 8,
              left: rect.left + rect.width / 2,
              transform: "translate(-50%, -100%)",
              zIndex: 99999,
            }}
          >
            <div className="rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-lg text-xs whitespace-nowrap">
              {colorSpan(tooltip)}
            </div>
          </div>,
          document.body
        )
      ) : null}
    </>
  );
}

/** 解析 {b}tooltip|content{/b} 标记、{r}...{/r} 红色、{y}...{/y} 黄色、{p}...{/p} 紫色标记 */
function colorMark(text: string) {
  // 先处理 {b}...{/b}，把结果收集到数组
  const badgeRegex = /\{b\}(.+?)\|(.+?)\{\/b\}/g;
  const segments: Array<{ type: "text" | "badge"; value: string; tooltip?: string }> = [];
  let lastEnd = 0;
  let match;
  while ((match = badgeRegex.exec(text)) !== null) {
    if (match.index > lastEnd) {
      segments.push({ type: "text", value: text.slice(lastEnd, match.index) });
    }
    segments.push({ type: "badge", value: match[2], tooltip: match[1] });
    lastEnd = match.index + match[0].length;
  }
  if (lastEnd < text.length) {
    segments.push({ type: "text", value: text.slice(lastEnd) });
  }

  if (segments.length === 0) return colorSpan(text);
  return segments.map((seg, i) =>
    seg.type === "badge"
      ? <HoverBadge key={i} tooltip={seg.tooltip!}>{colorSpan(seg.value)}</HoverBadge>
      : <Fragment key={i}>{colorSpan(seg.value)}</Fragment>
  );
}


function CollapsibleSection({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 transition"
      >
        <svg className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        {label}
      </button>
      {open ? children : null}
    </div>
  );
}
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
            <p className="text-sm leading-7 text-slate-700">{colorMark(modalNote.text)}</p>
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
                {item.introExample ? (
                  <div className="mt-3 rounded-lg bg-white px-4 py-3 font-mono text-sm text-slate-800 shadow-sm">
                    {item.introExample.example.includes("\n")
                      ? item.introExample.example.split("\n").map((line, li) => (
                          <p key={li}>{colorMark(line)}</p>
                        ))
                      : <p>{colorMark(item.introExample.example)}</p>
                    }
                    <div className="mt-1 text-xs text-slate-400">
                      {item.introExample.translation.includes("\n")
                        ? item.introExample.translation.split("\n").map((line, li) => (
                            <p key={li}>{colorMark(line)}</p>
                          ))
                        : <p>{colorMark(item.introExample.translation)}</p>
                      }
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* 复合谓语公式 */}
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="font-mono text-base text-slate-800">
            <span className="text-yellow-600 font-bold">主语</span>
            {" + "}
            <span className="text-red-600 font-bold">（情态</span>
            <span className="text-red-600">{" + "}</span>
            <span className="text-purple-600 font-bold">时态</span>
            <span className="text-purple-600">{" + "}</span>
            <span className="text-purple-600 font-bold">语态</span>
            <span className="text-red-600 font-bold">）</span>
            {" + "}
            <span className="text-yellow-600 font-bold">其他</span>
          </p>
        </div>

        {/* ── 扩展例句区 ── */}
        {modalUsage.items.map((item) =>
          item.moreExamples && item.moreExamples.length > 0 ? (
            <div key={item.label} className="mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">{item.label}</h3>
              <CollapsibleSection label="例句">
                <div className="mt-2">
                  {/* 将 flat 列表按 section 分组，每组一个折叠小节 */}
                  {(() => {
                    const groups: { section: string; items: any[] }[] = [];
                    const items = item.moreExamples;
                    for (let i = 0; i < items.length; i++) {
                      const ex: any = items[i];
                      if ("section" in ex) {
                        groups.push({ section: ex.section, items: [] });
                      } else if (groups.length > 0) {
                        groups[groups.length - 1].items.push(ex);
                      } else {
                        // 没有 section 的内容单独放
                        if (!groups.length) groups.push({ section: "", items: [] });
                        groups[0].items.push(ex);
                      }
                    }
                    return groups.map((grp, gi) => (
                      <div key={gi} className="mb-3">
                        {grp.section ? (
                          <CollapsibleSection label={colorMark(grp.section)}>
                            <div className="mt-2">
                              {grp.items.map((ex: any, ei: number) =>
                                "pair" in ex ? (
                                  <div key={ei} className="mt-2 grid grid-cols-2 gap-4">
                                    <div>
                                      {ex.pair.left ? <p className="font-mono text-sm font-bold text-slate-800 mb-2">{colorMark(ex.pair.left)}</p> : null}
                                      {ex.pair.leftItems?.length > 0 ? (
                                        <div className="space-y-2">
                                          {ex.pair.leftItems.map((pair: string[], li: number) => (
                                            <div key={li} className="rounded-lg bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">
                                              <p>{colorMark(pair[0])}</p>
                                              <p className="mt-1 text-xs text-slate-400">{colorMark(pair[1])}</p>
                                            </div>
                                          ))}
                                        </div>
                                      ) : null}
                                    </div>
                                    <div>
                                      <p className="font-mono text-sm font-bold text-slate-800 mb-2">{colorMark(ex.pair.right)}</p>
                                      <CollapsibleSection label="展开">
                                        <div className="mt-1">
                                          {ex.pair.rightItems.map((t: string, li: number) => (
                                            <p key={li} className="font-mono text-sm text-slate-800 mb-0.5">{colorMark(t)}</p>
                                          ))}
                                        </div>
                                      </CollapsibleSection>
                                    </div>
                                  </div>
                                ) : "inline" in ex ? (
                                  <p key={ei} className="font-mono text-sm text-slate-800 mb-1 pl-5">{colorMark(ex.inline)}</p>
                                ) : (
                                  <div key={ei} className="rounded-lg bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800 mb-2">
                                    {ex.example.includes("\n")
                                      ? ex.example.split("\n").map((line: string, li: number) => (
                                          <p key={li}>{colorMark(line)}</p>
                                        ))
                                      : <p>{colorMark(ex.example)}</p>
                                    }
                                    <div className="mt-1 text-xs text-slate-400">
                                      {ex.translation.includes("\n")
                                        ? ex.translation.split("\n").map((line: string, li: number) => (
                                            <p key={li}>{colorMark(line)}</p>
                                          ))
                                        : <p>{colorMark(ex.translation)}</p>
                                      }
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </CollapsibleSection>
                        ) : (
                          // 无 section 的项直接排
                          grp.items.map((ex: any, ei: number) =>
                            "inline" in ex ? (
                              <p key={ei} className="font-mono text-sm text-slate-800 mb-1 pl-5">{colorMark(ex.inline)}</p>
                            ) : (
                              <div key={ei} className="rounded-lg bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800 mb-2">
                                {ex.example.includes("\n")
                                  ? ex.example.split("\n").map((line: string, li: number) => (
                                      <p key={li}>{colorMark(line)}</p>
                                    ))
                                  : <p>{colorMark(ex.example)}</p>
                                }
                                <div className="mt-1 text-xs text-slate-400">
                                  {ex.translation.includes("\n")
                                    ? ex.translation.split("\n").map((line: string, li: number) => (
                                        <p key={li}>{colorMark(line)}</p>
                                      ))
                                    : <p>{colorMark(ex.translation)}</p>
                                  }
                                </div>
                              </div>
                            )
                          )
                        )}
                      </div>
                    ));
                  })()}
                </div>
              </CollapsibleSection>
            </div>
          ) : null
        )}
      </section>

    </div>
  );
}
