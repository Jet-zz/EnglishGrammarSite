"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

function CollapsibleSection({ label, children }: { label: string; children: React.ReactNode }) {
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

export default function AdjectivesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading title="形容词 · Adjective" />

      <div className="mt-8 max-w-3xl text-base leading-7 text-slate-700">
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
        <p className="mt-3 text-base leading-7 text-slate-700 max-w-3xl">
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
          </div>
        </CollapsibleSection>
      </section>
    </div>
  );
}
