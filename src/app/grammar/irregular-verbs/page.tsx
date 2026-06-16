"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { irregularVerbs, presentParticiples, verbExamples, continuousExamples } from "@/content/irregularVerbs";

const badgeClasses = "text-sm font-semibold uppercase tracking-wide rounded-full px-3 py-1";
const descClasses = "flex-1 text-base font-medium";

export default function IrregularVerbsPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Verbs"
        title="动词变形"
        description="英语动词在不同时态下会有过去式和现在分词等形式变化。"
      />

      <div className="mt-6 space-y-4">
        {/* ── 动词过去式 ── */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <button
            onClick={() => setOpen(open === "past" ? null : "past")}
            className="w-full flex items-center gap-3 px-5 py-4 text-left transition hover:brightness-95 bg-amber-50"
          >
            <span className={`${badgeClasses} bg-amber-100 text-amber-700`}>动词过去式</span>
            <span className={`${descClasses} text-amber-600`}>72 个不规则动词</span>
            <svg
              className={`w-5 h-5 text-amber-700 transition-transform ${open === "past" ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open === "past" ? (
            <div className="px-5 pt-3 pb-5 grid gap-6 lg:grid-cols-2">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-4 py-3 w-12 text-center">#</th>
                      <th className="px-4 py-3">动词原形</th>
                      <th className="px-4 py-3">中文</th>
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
              <div>
                <h3 className="text-base font-semibold text-slate-700 mb-2 ml-4">例句</h3>
                <div className="grid gap-2">
                  {verbExamples.map((ex) => (
                    <p key={ex} className="rounded-lg bg-slate-50 px-4 py-2.5 font-mono text-sm text-slate-800">
                      {ex}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* ── 动词现在分词 ── */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <button
            onClick={() => setOpen(open === "participle" ? null : "participle")}
            className="w-full flex items-center gap-3 px-5 py-4 text-left transition hover:brightness-95 bg-purple-50"
          >
            <span className={`${badgeClasses} bg-purple-100 text-purple-700`}>动词现在分词</span>
            <span className={`${descClasses} text-purple-600`}>51 个双写辅音字母 +ing 的动词</span>
            <svg
              className={`w-5 h-5 text-purple-700 transition-transform ${open === "participle" ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open === "participle" ? (
            <div className="px-5 pt-3 pb-5 grid gap-6 lg:grid-cols-2">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-4 py-3 w-12 text-center">#</th>
                      <th className="px-4 py-3">动词原形</th>
                      <th className="px-4 py-3">现在分词</th>
                      <th className="px-4 py-3">中文</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {presentParticiples.map((item, i) => (
                      <tr key={item.verb} className="hover:bg-slate-50">
                        <td className="px-4 py-2 text-center text-slate-400">{i + 1}</td>
                        <td className="px-4 py-2 font-mono font-semibold text-slate-800">{item.verb}</td>
                        <td className="px-4 py-2 font-mono font-semibold text-purple-600">{item.participle}</td>
                        <td className="px-4 py-2 text-slate-600">{item.chinese}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* 进行时例句对比 */}
              <div>
                <h3 className="text-base font-semibold text-slate-700 mb-2 ml-4">例句（现在 vs 过去）</h3>
                <div className="grid gap-2">
                  {continuousExamples.map((item, i) => (
                    <div key={i} className="rounded-lg bg-slate-50 px-4 py-2.5">
                      <p className="font-mono text-sm text-blue-700">{item.present}</p>
                      <p className="font-mono text-sm text-purple-700 mt-1">{item.past}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
