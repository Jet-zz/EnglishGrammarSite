"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { levelNames, levelOrder, totalQuestions } from "@/content/quiz";
import { getStats, resetAnswered } from "@/lib/quiz";

export default function QuizPage() {
  const router = useRouter();
  const [stats, setStats] = useState<Record<string, { answered: number; total: number }>>({});

  useEffect(() => {
    setStats(getStats());
  }, []);

  const totalAnswered = Object.values(stats).reduce((sum, s) => sum + s.answered, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Level test"
        title="英语水平测试"
        description="每次随机抽取 25 道题（每级 5 题），考察语法范围 A1 → C1+。做完会按级别显示正确率，帮你了解自己的薄弱环节。"
      />

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-950">题库进度</h3>
        <p className="mt-1 text-sm text-slate-500">已做 {totalAnswered} / 共 {totalQuestions} 题，题库用完会自动循环。</p>

        <div className="mt-4 grid gap-2">
          {levelOrder.map((level) => {
            const s = stats[level];
            if (!s) return null;
            const pct = s.total > 0 ? Math.round((s.answered / s.total) * 100) : 0;
            return (
              <div key={level} className="flex items-center gap-3 text-sm">
                <span className="w-24 shrink-0 font-semibold text-slate-700">{levelNames[level]}</span>
                <div className="flex-1 rounded-full bg-slate-100 h-2.5">
                  <div className="h-2.5 rounded-full bg-blue-500 transition-all" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-20 shrink-0 text-right text-slate-400">{s.answered}/{s.total}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-3 text-xs text-slate-400">答过的题不会重复出现，直到该级别所有题都答完。</p>
      </section>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => router.push("/quiz/take")}
          className="rounded-full bg-slate-950 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          开始测试
        </button>
        <button
          onClick={() => { resetAnswered(); setStats(getStats()); }}
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-red-300 hover:text-red-600"
        >
          重置记录
        </button>
      </div>
    </div>
  );
}
