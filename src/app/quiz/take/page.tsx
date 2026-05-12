"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { levelNames, levelOrder } from "@/content/quiz";
import type { Question } from "@/content/quiz";
import { getAllQuestions, markAnswered, pickQuestions } from "@/lib/quiz";

type AnswerState = "selecting" | "correct" | "wrong";

function ResultsView({
  scores,
  totals,
  onRetry,
  onBack,
}: {
  scores: Record<string, number>;
  totals: Record<string, number>;
  onRetry: () => void;
  onBack: () => void;
}) {
  const totalCorrect = Object.values(scores).reduce((a, b) => a + b, 0);
  const totalQuestions = Object.values(totals).reduce((a, b) => a + b, 0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Result</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">测试结果</h2>
        <p className="mt-2 text-lg text-slate-600">
          {totalCorrect} / {totalQuestions} 正确
        </p>
      </div>

      <div className="mt-8 grid gap-3">
        {levelOrder.map((level) => {
          const correct = scores[level] || 0;
          const total = totals[level] || 0;
          if (total === 0) return null;
          const pct = Math.round((correct / total) * 100);
          let barColor = "bg-red-400";
          if (pct >= 80) barColor = "bg-emerald-400";
          else if (pct >= 60) barColor = "bg-blue-400";
          else if (pct >= 40) barColor = "bg-amber-400";

          return (
            <div key={level} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-slate-950">{levelNames[level]}</span>
                <span className="text-slate-500">
                  {correct}/{total} ({pct}%)
                </span>
              </div>
              <div className="mt-2 rounded-full bg-slate-100 h-3">
                <div
                  className={`h-3 rounded-full transition-all ${barColor}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-slate-400">
                {pct >= 80 ? "掌握良好" : pct >= 60 ? "基本掌握" : pct >= 40 ? "需要加强" : "建议复习"}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex gap-3">
        <button
          onClick={onRetry}
          className="rounded-full bg-slate-950 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          再来一次
        </button>
        <button
          onClick={onBack}
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-400"
        >
          返回测试页
        </button>
      </div>
    </div>
  );
}

export default function TakeQuizPage() {
  const router = useRouter();
  const [questionIds, setQuestionIds] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("selecting");
  const [scores, setScores] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const ids = pickQuestions(5);
    setQuestionIds(ids);
    setScores(Object.fromEntries(levelOrder.map((l) => [l, 0])));
  }, []);

  const allQuestions: Question[] = useMemo(
    () => getAllQuestions(questionIds),
    [questionIds]
  );

  const totals = useMemo(() => {
    const t: Record<string, number> = {};
    for (const q of allQuestions) {
      t[q.level] = (t[q.level] || 0) + 1;
    }
    return t;
  }, [allQuestions]);

  const currentQuestion = allQuestions[current];

  const handleSelect = (index: number) => {
    if (answerState !== "selecting") return;
    setSelected(index);
    if (index === currentQuestion.answer) {
      setAnswerState("correct");
      setScores((prev) => ({
        ...prev,
        [currentQuestion.level]: (prev[currentQuestion.level] || 0) + 1,
      }));
    } else {
      setAnswerState("wrong");
    }
  };

  const handleNext = () => {
    markAnswered([currentQuestion.id]);
    if (current + 1 >= allQuestions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswerState("selecting");
    }
  };

  const handleRetry = () => {
    markAnswered(allQuestions.map((q) => q.id));
    const ids = pickQuestions(5);
    setQuestionIds(ids);
    setCurrent(0);
    setSelected(null);
    setAnswerState("selecting");
    setScores(Object.fromEntries(levelOrder.map((l) => [l, 0])));
    setFinished(false);
  };

  if (questionIds.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center text-slate-500">
        加载中……
      </div>
    );
  }

  if (finished) {
    return (
      <ResultsView
        scores={scores}
        totals={totals}
        onRetry={handleRetry}
        onBack={() => router.push("/quiz")}
      />
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
      {/* Progress bar */}
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <span>{current + 1} / {allQuestions.length}</span>
        <div className="flex-1 rounded-full bg-slate-100 h-2">
          <div
            className="h-2 rounded-full bg-blue-500 transition-all"
            style={{ width: `${((current + 1) / allQuestions.length) * 100}%` }}
          />
        </div>
        <span className="rounded-md bg-slate-100 px-2 py-0.5 font-semibold text-slate-600">
          {levelNames[currentQuestion?.level] || ""}
        </span>
      </div>

      {/* Question */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs text-slate-400">{currentQuestion?.grammarPoint}</p>
        <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">
          {currentQuestion?.question}
        </p>

        <div className="mt-6 grid gap-3">
          {currentQuestion?.options.map((opt, i) => {
            let btnClass =
              "w-full rounded-xl border px-5 py-3.5 text-left text-sm font-medium transition";
            if (answerState === "selecting") {
              btnClass +=
                " border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50";
            } else if (i === currentQuestion.answer) {
              btnClass += " border-emerald-300 bg-emerald-50 text-emerald-800";
            } else if (i === selected && i !== currentQuestion.answer) {
              btnClass += " border-red-300 bg-red-50 text-red-800";
            } else {
              btnClass += " border-slate-100 bg-slate-50 text-slate-400";
            }
            return (
              <button key={i} className={btnClass} onClick={() => handleSelect(i)}>
                {String.fromCharCode(65 + i)}. {opt}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {answerState !== "selecting" && (
          <div className="mt-6 rounded-xl bg-amber-50 px-5 py-4">
            <p className="text-sm font-semibold text-amber-800">
              {answerState === "correct" ? "答对了 ✓" : "答错了 ✗"}
            </p>
            <p className="mt-2 text-sm leading-6 text-amber-700">{currentQuestion?.explanation}</p>
          </div>
        )}
      </div>

      {/* Next button */}
      {answerState !== "selecting" && (
        <div className="mt-6 text-right">
          <button
            onClick={handleNext}
            className="rounded-full bg-slate-950 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {current + 1 >= allQuestions.length ? "查看结果" : "下一题"}
          </button>
        </div>
      )}
    </div>
  );
}
