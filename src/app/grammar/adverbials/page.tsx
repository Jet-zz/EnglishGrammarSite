"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { tenseAdverbialSections } from "@/content/timeAdverbials";

const colorMap = {
  amber:  { border: "border-amber-400", bg: "bg-amber-50",  badge: "bg-amber-100 text-amber-700", text: "text-amber-700" },
  blue:   { border: "border-blue-400",  bg: "bg-blue-50",   badge: "bg-blue-100 text-blue-700",   text: "text-blue-700" },
  purple: { border: "border-purple-400", bg: "bg-purple-50", badge: "bg-purple-100 text-purple-700", text: "text-purple-700" },
};

export default function AdverbialsPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Adverbials"
        title="时间状语"
        description="时间状语用来说明动作发生的时间，不同时态常用不同的时间状语。"
      />

      <div className="mt-6 space-y-4">
        {tenseAdverbialSections.map((section) => {
          const c = colorMap[section.color];
          const isOpen = open === section.title;

          return (
            <div key={section.title} className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {/* 标题栏：点击折叠/展开 */}
              <button
                onClick={() => setOpen(isOpen ? null : section.title)}
                className={`w-full flex items-center gap-3 px-5 py-4 text-left transition hover:brightness-95 ${c.bg}`}
              >
                <span className={`text-sm font-semibold uppercase tracking-wide rounded-full px-3 py-1 ${c.badge}`}>
                  {section.title}
                </span>
                <span className="flex-1" />
                <svg
                  className={`w-5 h-5 ${c.text} transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 内容区：折叠/展开 */}
              {isOpen ? (
                <div className="px-5 pt-3 pb-5 grid gap-4 sm:grid-cols-2">
                  {section.groups.map((group) => (
                    <div key={group.label}>
                      <h3 className="text-sm font-semibold text-slate-700 mb-2 ml-4">{group.label}</h3>
                      <div className="grid gap-1.5">
                        {group.items.map((item) => (
                          <div
                            key={item.english}
                            className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2"
                          >
                            <span className="font-mono text-sm font-semibold text-slate-800">{item.english}</span>
                            <span className="text-sm text-slate-500">{item.chinese}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
