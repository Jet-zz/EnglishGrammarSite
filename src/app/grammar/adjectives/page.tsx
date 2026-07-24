"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { SectionHeading } from "@/components/SectionHeading";

function TheBadge() {
  const [rect, setRect] = useState<DOMRect | null>(null);
  return (
    <>
      <span
        className="inline cursor-help text-red-600 font-bold"
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        the
      </span>
      {rect ? createPortal(
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
            <span className="font-bold text-red-600">形容词最高级前</span>要加 <span className="font-bold text-red-600">the</span>，特指
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}

function CollapsibleSection({ label, children, size }: { label: string; children: React.ReactNode; size?: "sm" | "base" }) {
  const [open, setOpen] = useState(false);
  const cls = size === "base" ? "text-sm" : "text-xs";
  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 ${cls} font-semibold text-slate-500 hover:text-slate-700 transition`}
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

function ComparisionBlock({ title, desc, children }: { title: string; desc: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 transition"
      >
        <svg className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-sm font-semibold text-slate-700">{title}</span>
      </button>
      {open ? (
        <div className="mt-2">
          <p className="text-xs text-slate-500 mb-2 ml-5">{desc}</p>
          <div className="ml-5">{children}</div>
        </div>
      ) : null}
    </div>
  );
}

export default function AdjectivesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading title="形容词 · Adjective" />

      <div className="mt-8 max-w-6xl text-base leading-7 text-slate-700">
        <p>
          形容词在<span className="text-red-600 font-bold">名词短语</span>中可以放在
          <span className="text-red-600 font-bold">被修饰名词</span>的前面或者后面，
          于是便构成了<span className="text-red-600 font-bold">前置修饰</span>和<span className="text-red-600 font-bold">后置修饰</span>，
          也叫<span className="text-red-600 font-bold">前置定语</span>和<span className="text-red-600 font-bold">后置定语</span>。<br />
          只要是修饰名词的东西，就是这个名词的定语，<span className="text-red-600 font-bold">不是只有形容词可以修饰名词</span>。<br />
          <span className="inline rounded-md bg-yellow-300 px-2 py-0.5 font-mono text-red-600 font-bold">
            谁修饰名词，谁就是定语。
          </span>
        </p>
      </div>

      {/* 前置定语 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">前置修饰名词（前置定语）</h2>
        <CollapsibleSection label="例句">
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-800">
              <p>I am reading an <span className="text-red-600 font-bold">interesting</span> book.</p>
              <p className="mt-0.5 text-xs text-slate-400">我正在看一本有意思的书。</p>
            </div>
            <div className="rounded-lg bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-800">
              <p>He <span className="text-purple-600 font-bold">should</span> be reading an <span className="text-red-600 font-bold">interesting</span> book.</p>
              <p className="mt-0.5 text-xs text-slate-400">他应该正在看一本有意思的书。</p>
            </div>
            <div className="rounded-lg bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-800">
              <p>He has a <span className="text-red-600 font-bold">beautiful</span> smile.</p>
              <p className="mt-0.5 text-xs text-slate-400">他有灿烂的微笑。</p>
            </div>
            <div className="rounded-lg bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-800">
              <p>He is my <span className="text-red-600 font-bold">best</span> friend.</p>
              <p className="mt-0.5 text-xs text-slate-400">他是我最好的朋友。</p>
            </div>
          </div>
        </CollapsibleSection>
      </section>

      {/* 特殊情况 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">特殊情况</h2>
        <p className="mt-3 text-base leading-7 text-slate-700 max-w-6xl">
          修饰 <span className="text-red-600 font-bold">不定代词</span>（<span className="font-mono font-semibold text-slate-900">something, anything, nothing, everything, somebody, anyone, nobody, everybody</span> 等）的形容词要后置，即<span className="text-red-600 font-bold">形容词要后置</span>。
        </p>
        <CollapsibleSection label="例句">
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-800">
              <p>I want to eat something <span className="text-red-600 font-bold">nice</span>.</p>
              <p className="mt-0.5 text-xs text-slate-400">我想吃点好的。</p>
            </div>
            <div className="rounded-lg bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-800">
              <p>There is nothing <span className="text-red-600 font-bold">important</span>.</p>
              <p className="mt-0.5 text-xs text-slate-400">没什么重要的事。</p>
            </div>
            <div className="rounded-lg bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-800">
              <p>I can give you something <span className="text-red-600 font-bold">interesting</span>.</p>
              <p className="mt-0.5 text-xs text-slate-400">我可以给你有趣的东西。</p>
            </div>
            <div className="rounded-lg bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-800">
              <p>I don't want to see anybody <span className="text-red-600 font-bold">stupid</span> here.</p>
              <p className="mt-0.5 text-xs text-slate-400">我不想在这儿看到任何愚蠢的人。</p>
            </div>
          </div>
        </CollapsibleSection>
      </section>

      {/* 词序排序 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">多个形容词修饰名词时的词序排序</h2>
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          <div className="lg:w-1/2 w-full">
            <CollapsibleSection label="词序规则">
              <div className="mt-3 grid gap-0.5">
                {[
                  "限定词（my, the, three, this）",
                  "观点形容词（beautiful, famous）",
                  "尺寸大小（large, small, long）",
                  "形状（round, square）",
                  "新旧（new, old, ancient）",
                  "颜色（white, yellow）",
                  "国籍、出处或产地",
                  "质地材料",
                  "中心名词",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 text-sm text-slate-800">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>
          <div className="lg:w-1/2 w-full">
            <CollapsibleSection label="例句">
              <div className="mt-3 space-y-0.5">
                <div className="rounded-lg bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-800">
                  <p>Li Bai was a
                    <span className="text-red-600 font-bold"> famous</span>
                    <span className="text-blue-600 font-bold"> ancient</span>
                    <span className="text-emerald-600 font-bold"> Chinese</span> poet.
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">李白是中国古代一位著名的诗人。</p>
                </div>
                <div className="rounded-lg bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-800">
                  <p>
                    <span className="text-slate-600 font-bold">This</span>
                    <span className="text-red-600 font-bold"> beautiful</span>,
                    <span className="text-amber-600 font-bold"> big</span>,
                    <span className="text-blue-600 font-bold"> old</span>,
                    <span className="text-emerald-600 font-bold"> red</span>,
                    <span className="text-purple-600 font-bold"> Chinese</span>
                    <span className="text-rose-600 font-bold"> wooden</span> table was my grandmother's.
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">这张又大又漂亮的红色的中国式旧木桌是我奶奶的。</p>
                </div>
              </div>
            </CollapsibleSection>
          </div>
        </div>
      </section>

      {/* 形容词的比较级和最高级 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">形容词的比较级和最高级</h2>
        <div className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          <p>
            形容词具有<span className="text-yellow-600 font-bold">原级</span>、<span className="text-yellow-600 font-bold">比较级</span>和<span className="text-yellow-600 font-bold">最高级</span>三个等级比较。
          </p>
          <p className="mt-2">
            比较级和最高级有两种表达方式：<br />
            第一种：在词尾<span className="text-yellow-600 font-bold">加 -er</span> 构成比较级，<span className="text-yellow-600 font-bold">加 -est</span> 构成最高级。<br />
            第二种：在形容词<span className="text-yellow-600 font-bold">前面加 more</span> 构成比较级，<span className="text-yellow-600 font-bold">加 most</span> 构成最高级。
          </p>
          <p className="mt-2">
            这两种构成方式与形容词的<span className="text-yellow-600 font-bold">音节数目</span>有关。<br />
            此外，英语中还有一些形容词没有比较级和最高级的变化。
          </p>
        </div>

        <div className="mt-4">
          {/* 单音节词 */}
          <ComparisionBlock
            title="常规形状：单音节词"
            desc={<>一般直接在<span className="text-yellow-600 font-bold">词尾加 -er</span> 和 <span className="text-yellow-600 font-bold">-est</span>，分别构成<span className="text-yellow-600 font-bold">比较级</span>和<span className="text-yellow-600 font-bold">最高级</span>。</>}
          >
            <div className="flex items-start gap-4">
              <div className="inline-block overflow-hidden rounded-xl border border-slate-200 bg-white shrink-0 w-64">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-3 py-2">原级</th>
                      <th className="px-3 py-2">比较级</th>
                      <th className="px-3 py-2">最高级</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["bright", ["brighter", "er"], ["brightest", "est"]],
                      ["tall", ["taller", "er"], ["tallest", "est"]],
                      ["strong", ["stronger", "er"], ["strongest", "est"]],
                      ["long", ["longer", "er"], ["longest", "est"]],
                    ].map((row, ri) => (
                      <tr key={ri} className="hover:bg-slate-50">
                        <td className="px-3 py-1.5 font-mono text-xs text-slate-800">{row[0] as string}</td>
                        {([1, 2] as const).map((ci) => {
                          const [word, suffix] = row[ci] as [string, string];
                          const base = word.slice(0, -suffix.length);
                          return (
                            <td key={ci} className="px-3 py-1.5 font-mono text-xs text-slate-800">
                              {base}<span className="text-yellow-600 font-bold">{suffix}</span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg bg-slate-50 px-4 py-2.5 font-mono text-sm text-slate-800 min-w-0">
                <p>
                  The <span className="text-red-600 font-bold">taller</span> man is looking at <TheBadge /> <span className="text-red-600 font-bold">brightest</span> star.
                </p>
                <p className="mt-0.5 text-xs text-slate-400">这个比较高的男人正在看着最亮的那颗星星。</p>
              </div>
            </div>
          </ComparisionBlock>

          {/* 以-e结尾的单音节词 */}
          <ComparisionBlock
            title="非常规形状：单音节词"
            desc={<>以 <span className="text-yellow-600 font-bold">-e 结尾</span> 的词，直接在<span className="text-yellow-600 font-bold">词尾加 -r</span> 和 <span className="text-yellow-600 font-bold">-st</span>，分别构成<span className="text-yellow-600 font-bold">比较级</span>和<span className="text-yellow-600 font-bold">最高级</span>。</>}
          >
            <div className="flex items-start gap-4">
              <div className="inline-block overflow-hidden rounded-xl border border-slate-200 bg-white shrink-0 w-64">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-3 py-2">原级</th>
                      <th className="px-3 py-2">比较级</th>
                      <th className="px-3 py-2">最高级</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["brave", ["braver", "r"], ["bravest", "st"]],
                      ["late", ["later", "r"], ["latest", "st"]],
                      ["large", ["larger", "r"], ["largest", "st"]],
                      ["safe", ["safer", "r"], ["safest", "st"]],
                    ].map((row, ri) => (
                      <tr key={ri} className="hover:bg-slate-50">
                        <td className="px-3 py-1.5 font-mono text-xs text-slate-800">{row[0] as string}</td>
                        {([1, 2] as const).map((ci) => {
                          const [word, suffix] = row[ci] as [string, string];
                          const base = word.slice(0, -suffix.length);
                          return (
                            <td key={ci} className="px-3 py-1.5 font-mono text-xs text-slate-800">
                              {base}<span className="text-yellow-600 font-bold">{suffix}</span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg bg-slate-50 px-4 py-2.5 font-mono text-sm text-slate-800 min-w-0">
                <p>
                  The <span className="text-red-600 font-bold">braver</span> man wants to eat <TheBadge /> <span className="text-red-600 font-bold">largest</span> burger.
                </p>
                <p className="mt-0.5 text-xs text-slate-400">这个比较英勇的男人想吃更大的汉堡。</p>
              </div>
            </div>
          </ComparisionBlock>

          {/* 以-y结尾的词 */}
          <ComparisionBlock
            title="非常规形状：单音节词"
            desc={<>以 <span className="text-yellow-600 font-bold">-y 结尾</span> 的词应先<span className="text-yellow-600 font-bold">变 y 为 i</span>，再加 <span className="text-yellow-600 font-bold">-er</span> 和 <span className="text-yellow-600 font-bold">-est</span> 分别构成<span className="text-yellow-600 font-bold">比较级</span>和<span className="text-yellow-600 font-bold">最高级</span>。</>}
          >
            <div className="flex items-start gap-4">
              <div className="inline-block overflow-hidden rounded-xl border border-slate-200 bg-white shrink-0 w-64">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-3 py-2">原级</th>
                      <th className="px-3 py-2">比较级</th>
                      <th className="px-3 py-2">最高级</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["shy", ["shier", "er"], ["shiest", "est"]],
                      ["dry", ["drier", "er"], ["driest", "est"]],
                    ].map((row, ri) => (
                      <tr key={ri} className="hover:bg-slate-50">
                        <td className="px-3 py-1.5 font-mono text-xs text-slate-800">{row[0] as string}</td>
                        {([1, 2] as const).map((ci) => {
                          const [word, suffix] = row[ci] as [string, string];
                          const base = word.slice(0, -suffix.length);
                          return (
                            <td key={ci} className="px-3 py-1.5 font-mono text-xs text-slate-800">
                              {base}<span className="text-yellow-600 font-bold">{suffix}</span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg bg-slate-50 px-4 py-2.5 font-mono text-sm text-slate-800 min-w-0 space-y-2">
                <div>
                  <p>
                    The <span className="text-red-600 font-bold">higher</span> boy is <span className="text-red-600 font-bold">shier</span> than me.
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">这个比较高的男孩比我更害羞。</p>
                </div>
                <div>
                  <p>
                    <TheBadge /> <span className="text-red-600 font-bold">tallest</span> man likes <TheBadge /> <span className="text-red-600 font-bold">driest</span> potato.
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">这个最高的男人喜欢最干的土豆。</p>
                </div>
              </div>
            </div>
          </ComparisionBlock>

          {/* 一个元音+辅音结尾的词 */}
          <ComparisionBlock
            title="非常规形状：单音节词"
            desc={<>以"一个元音 + 辅音"结尾的词，要先<span className="text-yellow-600 font-bold">双写词尾的辅音字母</span>，然后再加 <span className="text-yellow-600 font-bold">-er</span> 和 <span className="text-yellow-600 font-bold">-est</span> 分别构成<span className="text-yellow-600 font-bold">比较级</span>和<span className="text-yellow-600 font-bold">最高级</span>。</>}
          >
            <div className="flex items-start gap-4">
              <div className="inline-block overflow-hidden rounded-xl border border-slate-200 bg-white shrink-0 w-64">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-3 py-2">原级</th>
                      <th className="px-3 py-2">比较级</th>
                      <th className="px-3 py-2">最高级</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["fat", ["fatter", "er"], ["fattest", "est"]],
                      ["thin", ["thinner", "er"], ["thinnest", "est"]],
                      ["big", ["bigger", "er"], ["biggest", "est"]],
                      ["sad", ["sadder", "er"], ["saddest", "est"]],
                    ].map((row, ri) => (
                      <tr key={ri} className="hover:bg-slate-50">
                        <td className="px-3 py-1.5 font-mono text-xs text-slate-800">{row[0] as string}</td>
                        {([1, 2] as const).map((ci) => {
                          const [word, suffix] = row[ci] as [string, string];
                          const base = word.slice(0, -suffix.length);
                          return (
                            <td key={ci} className="px-3 py-1.5 font-mono text-xs text-slate-800">
                              {base}<span className="text-yellow-600 font-bold">{suffix}</span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg bg-slate-50 px-4 py-2.5 font-mono text-sm text-slate-800 min-w-0">
                <p>
                  The <span className="text-red-600 font-bold">fatter</span> man is <TheBadge /> <span className="text-red-600 font-bold">saddest</span>.
                </p>
                <p className="mt-0.5 text-xs text-slate-400">这个比较胖的男人是最伤心的。</p>
              </div>
            </div>
          </ComparisionBlock>

          {/* 以-y结尾的双音节词 */}
          <ComparisionBlock
            title="常规形状：双音节词"
            desc={<>以 <span className="text-yellow-600 font-bold">-y 结尾</span> 的双音节形容词，要先<span className="text-yellow-600 font-bold">变 y 为 i</span>，再<span className="text-yellow-600 font-bold">加 -er</span> 和 <span className="text-yellow-600 font-bold">-est</span> 分别构成<span className="text-yellow-600 font-bold">比较级</span>和<span className="text-yellow-600 font-bold">最高级</span>。</>}
          >
            <div className="flex items-start gap-4">
              <div className="inline-block overflow-hidden rounded-xl border border-slate-200 bg-white shrink-0 w-64">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-3 py-2">原级</th>
                      <th className="px-3 py-2">比较级</th>
                      <th className="px-3 py-2">最高级</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["early", ["earlier", "er"], ["earliest", "est"]],
                      ["silly", ["sillier", "er"], ["silliest", "est"]],
                      ["heavy", ["heavier", "er"], ["heaviest", "est"]],
                    ].map((row, ri) => (
                      <tr key={ri} className="hover:bg-slate-50">
                        <td className="px-3 py-1.5 font-mono text-xs text-slate-800">{row[0] as string}</td>
                        {([1, 2] as const).map((ci) => {
                          const [word, suffix] = row[ci] as [string, string];
                          const base = word.slice(0, -suffix.length);
                          return (
                            <td key={ci} className="px-3 py-1.5 font-mono text-xs text-slate-800">
                              {base}<span className="text-yellow-600 font-bold">{suffix}</span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg bg-slate-50 px-4 py-2.5 font-mono text-sm text-slate-800 min-w-0">
                <p>
                  The <span className="text-red-600 font-bold">happier</span> man is talking with <TheBadge /> <span className="text-red-600 font-bold">silliest</span> boy.
                </p>
                <p className="mt-0.5 text-xs text-slate-400">这个比较开心的男人正在跟最愚蠢的男孩交流。</p>
              </div>
            </div>
          </ComparisionBlock>

          {/* 两种方法构成比较级和最高级 */}
          <ComparisionBlock
            title="常规形状：双音节词"
            desc={<>少数几个双音节词分别可以用上述两种基本方法来构成比较级和最高级。</>}
          >
            <div className="flex items-start gap-4">
              <div className="inline-block overflow-hidden rounded-xl border border-slate-200 bg-white shrink-0">
                <table className="text-left text-xs">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-2 py-2 text-xs">原级</th>
                      <th className="px-2 py-2 text-xs">比较级</th>
                      <th className="px-2 py-2 text-xs">最高级</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["common", "more common/commoner", "most common/commonest"],
                      ["clever", "more clever/cleverer", "most clever/cleverest"],
                      ["shallow", "more shallow/shallower", "most shallow/shallowest"],
                    ].map((row, ri) => (
                      <tr key={ri} className="hover:bg-slate-50">
                        <td className="px-2 py-1.5 font-mono text-xs text-slate-800">{row[0]}</td>
                        <td className="px-2 py-1.5 font-mono text-xs text-slate-800">{row[1]}</td>
                        <td className="px-2 py-1.5 font-mono text-xs text-slate-800">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg bg-slate-50 px-4 py-2.5 font-mono text-sm text-slate-800 min-w-0">
                <p>
                  The <span className="text-red-600 font-bold">more common</span> thing is that he is <TheBadge /> <span className="text-red-600 font-bold">cleverest</span> boy.
                </p>
                <p className="mt-0.5 text-xs text-slate-400">比较常见的事情是他是最聪明的男孩。</p>
              </div>
            </div>
          </ComparisionBlock>
        </div>
      </section>

      {/* 特殊形式的比较级和最高级 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">特殊形式的比较级和最高级</h2>
        <div className="mt-4 max-w-md">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-4 py-2.5">原形</th>
                  <th className="px-4 py-2.5">比较级</th>
                  <th className="px-4 py-2.5">最高级</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["good / well", "better", "best"],
                  ["bad / ill", "worse", "worst"],
                  ["far", "farther / further", "farthest / furthest"],
                  ["old", "older / elder", "oldest / eldest"],
                  ["little", "less", "least"],
                  ["many / much", "more", "most"],
                  ["late", "later / latter", "latest / last"],
                  ["up", "upper", "uppermost / upmost"],
                ].map((row, ri) => (
                  <tr key={ri} className="hover:bg-slate-50">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-2 font-mono text-xs text-slate-800">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
          <CollapsibleSection label="farther / further 的区别" size="base">
            <div className="mt-3 space-y-3 pl-5">
              <p className="text-sm leading-6 text-slate-600">
                farther (farthest) / further (furthest) 这四个词都可以指<span className="font-semibold text-slate-800">实际的距离</span>。不过，further / furthest 可用于<span className="text-red-600 font-semibold">抽象意义</span>，表示"进一步的，更多的，更深入的"，常与抽象名词连用：
              </p>
              <div className="mt-3 space-y-1.5">
                {[
                  ["further discussion", "继续讨论"],
                  ["further delays", "继续拖延 / 耽搁"],
                  ["further demands", "进一步的要求"],
                  ["further information", "更多的信息"],
                  ["further study", "深入研究"],
                ].map(([en, zh]) => (
                  <div key={en} className="flex items-center gap-x-3 rounded-lg bg-slate-50 pl-0 pr-3 py-1.5">
                    <span className="font-mono text-xs font-semibold text-slate-800">{en}</span>
                    <span className="text-xs text-slate-500">{zh}</span>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
          <CollapsibleSection label="older / elder 的区别" size="base">
            <div className="mt-3 space-y-3 pl-5">
              <p className="text-sm leading-6 text-slate-600">
                elder 和 eldest 主要是用来表示<span className="font-semibold text-slate-800">家庭成员之间的长幼关系</span>，而并非指年龄的大小。
              </p>
              <div className="flex items-center gap-x-3 rounded-lg bg-slate-50 pl-0 pr-3 py-1.5">
                <span className="font-mono text-xs font-semibold text-slate-800">my elder brother / sister</span>
                <span className="text-xs text-slate-500">我的哥哥 / 姐姐</span>
              </div>
              <div className="flex items-center gap-x-3 rounded-lg bg-slate-50 pl-0 pr-3 py-1.5">
                <span className="font-mono text-xs font-semibold text-slate-800">his eldest son / daughter</span>
                <span className="text-xs text-slate-500">他的长子 / 长女</span>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                而在有 than 的比较级的句子中一般不用 elder，而要用 older。
              </p>
              <div className="flex items-center gap-x-3 rounded-lg bg-slate-50 pl-0 pr-3 py-1.5">
                <span className="font-mono text-xs font-semibold text-slate-800">I am five years older than you.</span>
                <span className="text-xs text-slate-500">我比你年长 5 岁。</span>
              </div>
            </div>
          </CollapsibleSection>
          <CollapsibleSection label="later / latter / latest / last 的区别" size="base">
            <div className="mt-3 space-y-3 pl-5">
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold text-slate-800">later</span>：一般用来表示时间上"较迟的"。
              </p>
              <div className="flex items-center gap-x-3 rounded-lg bg-slate-50 pl-0 pr-3 py-1.5">
                <span className="font-mono text-xs font-semibold text-slate-800">I will call you later.</span>
                <span className="text-xs text-slate-500">我晚一会儿给你打电话。</span>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold text-slate-800">latter</span>：则是表示顺序上的"后者"，与 former（前者）相对应。
              </p>
              <div className="flex items-center gap-x-3 rounded-lg bg-slate-50 pl-0 pr-3 py-1.5">
                <span className="font-mono text-xs font-semibold text-slate-800">I like the small one, but I prefer the latter.<br />Should we take a bus or a taxi? Kim wants to take the bus, but I prefer the latter.</span>
                <span className="text-xs text-slate-500">后者</span>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold text-slate-800">latest</span>：意思是"最近的，最新的"，主要用来指新近的事物。
              </p>
              <div className="flex items-center gap-x-3 rounded-lg bg-slate-50 pl-0 pr-3 py-1.5">
                <span className="font-mono text-xs font-semibold text-slate-800">the latest fashions</span>
                <span className="text-xs text-slate-500">最新款式的服装</span>
              </div>
              <div className="flex items-center gap-x-3 rounded-lg bg-slate-50 pl-0 pr-3 py-1.5">
                <span className="font-mono text-xs font-semibold text-slate-800">the latest news</span>
                <span className="text-xs text-slate-500">最新消息</span>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold text-slate-800">last</span>：最后一个 / 上一个
              </p>
              <div className="flex items-center gap-x-3 rounded-lg bg-slate-50 pl-0 pr-3 py-1.5">
                <span className="font-mono text-xs font-semibold text-slate-800">He is the last one.</span>
                <span className="text-xs text-slate-500">他是最后一个。</span>
              </div>
              <div className="flex items-center gap-x-3 rounded-lg bg-slate-50 pl-0 pr-3 py-1.5">
                <span className="font-mono text-xs font-semibold text-slate-800">He visited Shanghai last summer.</span>
                <span className="text-xs text-slate-500">他去年夏天去了上海。</span>
              </div>
            </div>
          </CollapsibleSection>
      </section>

      {/* 不具有等级的形容词 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">不具有等级的形容词</h2>
        <div className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          <p>
            这些形容词本身就含有<span className="text-yellow-600 font-bold">绝对意义</span>，没有程度之分，因此通常<span className="text-red-600 font-bold">没有比较级和最高级</span>（即使有，逻辑上也不合理）：
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "absolute（完全的，绝对的）",
            "alone（单独的，独一无二的）",
            "dead（死的，无感觉的）",
            "empty（空的，空洞的）",
            "equal（平等的）",
            "eternal（永恒的，不变的）",
            "final（最终的，决定性的）",
            "horizontal（水平的）",
            "perfect（完美的）",
            "primary（第一位的）",
            "pregnant（怀孕的，富有的）",
            "round（圆的，球形的）",
            "single（单一的）",
            "square（正方形的）",
            "straight（直的）",
            "supreme（最高的，至高的）",
            "unique（唯一的，独特的）",
          ].map((w) => (
            <span key={w} className="rounded-lg bg-slate-100 px-3 py-1.5 font-mono text-sm text-slate-800">
              {w}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
