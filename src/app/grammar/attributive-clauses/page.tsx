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
          定语从句：一个从句做定语，相当于长形容词，对名词或代词的修饰，位于被修饰词后面。
        </p>
      </div>
    </div>
  );
}
