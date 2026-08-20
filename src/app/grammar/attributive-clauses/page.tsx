"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { SectionHeading } from "@/components/SectionHeading";

function TooltipBadge({ children, tip }: { children: React.ReactNode; tip: string }) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  return (
    <>
      <span
        className="inline cursor-help border-b border-dashed border-slate-400 font-bold text-slate-800"
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        {children}
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
            {tip}
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}

export default function AttributiveClausesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Attributive clauses"
        title="定语从句"
        description="定语从句在句子中修饰名词，由关系代词或关系副词引导，包括限制性定语从句和非限制性定语从句。"
      />

      <div className="mt-8 max-w-6xl text-base leading-7 text-slate-700">
        <p>
          定语：对名词或代词的修饰。
        </p>
        <p className="mt-2">
          从句：连接词 + 简单句（连接词分两大派系：<TooltipBadge tip="起到前后引导作用">关系代词</TooltipBadge> 和 <TooltipBadge tip="时间原因地点（状语）">关系副词</TooltipBadge>）
        </p>
        <p className="mt-2">
          定语从句：一个从句做定语，相当于<span className="text-yellow-600 font-bold">长形容词</span>，对<span className="text-yellow-600 font-bold">名词</span>或<span className="text-yellow-600 font-bold">代词</span>的修饰，位于<span className="text-yellow-600 font-bold">被修饰词</span><span className="text-red-600 font-bold">后面</span>。
        </p>
        <p className="mt-2">
          定语从句属于对名词或代词的后置修饰，由<TooltipBadge tip="起到前后引导作用">关系代词</TooltipBadge>或<TooltipBadge tip="时间原因地点（状语）">关系副词</TooltipBadge>引导。
        </p>
        <p className="mt-2">
          <span className="text-yellow-600 font-bold">关系代词</span> = 连接词，关系代词就是代词，代表被修饰名词或代词。
        </p>
        <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
          <p className="font-mono text-base text-slate-800">
            The man <TooltipBadge tip="定语从句"><span className="text-yellow-600 font-bold">who</span> <span className="text-emerald-600 font-bold">often helps me</span></TooltipBadge> is my brother.
          </p>
          <p className="mt-0.5 text-sm text-slate-500">经常帮助我的那个人是我的哥哥。</p>
        </div>
        <p className="mt-3 font-bold text-slate-800">定语从句的三部分：</p>
        <p className="mt-1">
          （1）the man 是<span className="text-yellow-600 font-bold">被修饰词</span>，叫 <span className="text-yellow-600 font-bold">先行词</span>
        </p>
        <p className="mt-1">
          （2）who <span className="text-yellow-600 font-bold">关系代词</span>，代表 the man <span className="text-yellow-600 font-bold">引导定语从句</span>
        </p>
        <p className="mt-1">
          （3）一定要分清楚关系代词在从中做什么成分，关系代词一定是帮助其后面成分组成一个完整的句子。
        </p>
        <div className="mt-3 rounded-lg bg-slate-50 pr-4 py-1.5">
          <p className="font-mono text-base text-slate-800">
            <span className="text-emerald-600 font-bold">My friend</span> <span className="text-yellow-600 font-bold">who</span> doesn't like the pencil likes <span className="text-emerald-600 font-bold">the pen</span> <span className="text-yellow-600 font-bold">which</span> I gave him.
          </p>
          <p className="mt-0.5 text-sm text-slate-500">那个不喜欢铅笔的朋友喜欢我给他的那支钢笔。</p>
        </div>
        <p className="mt-1">
          (1) <span className="text-emerald-600 font-bold">my friend</span> 和 <span className="text-emerald-600 font-bold">the pen</span> 都是<span className="text-yellow-600 font-bold">先行词</span>
        </p>
        <p className="mt-1">
          (2) who 和 which 为<span className="text-yellow-600 font-bold">关系代词</span>，<span className="text-yellow-600 font-bold">引导定语从句</span>。
        </p>
        <p className="mt-1">
          (3) who 在从句中做<span className="text-yellow-600 font-bold">主语</span>，确实帮助从句组成了完整句子。which 在从句中做<span className="text-yellow-600 font-bold">宾语</span>，确实组成了句子。
        </p>
      </div>
    </div>
  );
}
