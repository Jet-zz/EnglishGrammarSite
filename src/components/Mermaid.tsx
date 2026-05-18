"use client";

import { useEffect, useId, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  themeVariables: {
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    fontSize: "14px",
    primaryColor: "#eff6ff",
    primaryBorderColor: "#93c5fd",
    primaryTextColor: "#1e3a5f",
    lineColor: "#94a3b8",
    secondaryColor: "#f0fdf4",
    tertiaryColor: "#fef3c7",
  },
  flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis", padding: 20 },
});

export function Mermaid({ chart }: { chart: string }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    mermaid
      .render(`mermaid-${id}`, chart)
      .then(({ svg }) => {
        if (ref.current) ref.current.innerHTML = svg;
      })
      .catch((err) => {
        if (ref.current) ref.current.innerHTML = `<p class="text-red-500 text-sm">图表渲染失败: ${err}</p>`;
      });
  }, [id, chart]);

  return <div ref={ref} className="mermaid flex justify-center overflow-x-auto" />;
}
