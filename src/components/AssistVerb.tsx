"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

function Popover({ rect }: { rect: DOMRect }) {
  return createPortal(
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
        基本助动词有且仅有：<span className="font-mono font-bold text-red-600">be</span>，<span className="font-mono font-bold text-red-600">do</span>，<span className="font-mono font-bold text-red-600">have</span>
      </div>
    </div>,
    document.body
  );
}

/** 单个 "助动词" 文字，带悬浮提示 */
export function AssistVerb({ children }: { children: string }) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  return (
    <>
      <span
        className="text-red-600 font-bold cursor-help border-b border-dashed border-red-400"
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        {children}
      </span>
      {rect ? <Popover rect={rect} /> : null}
    </>
  );
}

/** 将文本中的 "助动词" 替换为带悬浮提示的组件 */
export function RenderWithAssistVerb({ text }: { text: string }) {
  const parts = text.split("助动词");
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 ? <AssistVerb>助动词</AssistVerb> : null}
        </span>
      ))}
    </>
  );
}
