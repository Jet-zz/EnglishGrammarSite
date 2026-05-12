export type Question = {
  id: string;
  level: string;
  grammarPoint: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type QuizResult = {
  date: string;
  scores: Record<string, { correct: number; total: number }>;
  totalCorrect: number;
  totalQuestions: number;
};

export const levelNames: Record<string, string> = {
  a1: "A1 入门",
  a2: "A2 基础",
  b1: "B1 中级",
  b2: "B2 中高级",
  c1: "C1 高级",
};

export const levelOrder = ["a1", "a2", "b1", "b2", "c1"];
