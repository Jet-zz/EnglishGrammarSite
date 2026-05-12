import { a1 } from "./a1";
import { a2 } from "./a2";
import { b1 } from "./b1";
import { b2 } from "./b2";
import { c1 } from "./c1";

export { levelNames, levelOrder } from "./types";
export type { Question, QuizResult } from "./types";

export const questionBank: Record<string, import("./types").Question[]> = {
  a1, a2, b1, b2, c1,
};

export const totalQuestions = Object.values(questionBank).reduce(
  (sum, qs) => sum + qs.length, 0
);
