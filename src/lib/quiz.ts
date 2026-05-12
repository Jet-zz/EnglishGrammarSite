import { questionBank, levelOrder } from "@/content/quiz";

const ANSWERED_KEY = "quiz_answered";

function getAnswered(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ANSWERED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAnswered(ids: string[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ANSWERED_KEY, JSON.stringify(ids));
}

export function pickQuestions(questionsPerLevel = 5) {
  const answered = getAnswered();
  const picked: string[] = [];
  const totalPool: number[] = [];

  for (const level of levelOrder) {
    const pool = questionBank[level];
    if (!pool) continue;

    const available = pool.filter((q) => !answered.includes(q.id));
    const source = available.length >= questionsPerLevel ? available : pool;
    const count = Math.min(questionsPerLevel, source.length);

    const shuffled = [...source].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);

    picked.push(...selected.map((q) => q.id));
    totalPool.push(...selected.map((s) => pool.indexOf(s)));
  }

  return picked;
}

export function getAllQuestions(ids: string[]) {
  const all = Object.values(questionBank).flat();
  const idSet = new Set(ids);
  return all.filter((q) => idSet.has(q.id));
}

export function markAnswered(ids: string[]) {
  const answered = getAnswered();
  const updated = [...new Set([...answered, ...ids])];
  saveAnswered(updated);
}

export function resetAnswered() {
  saveAnswered([]);
}

export function getAnsweredCount() {
  const answered = getAnswered();
  const all = Object.values(questionBank).flat();
  return { answered: answered.length, total: all.length };
}

export function getStats() {
  const answered = getAnswered();
  const result: Record<string, { answered: number; total: number }> = {};

  for (const level of levelOrder) {
    const pool = questionBank[level];
    if (!pool) continue;
    result[level] = {
      answered: pool.filter((q) => answered.includes(q.id)).length,
      total: pool.length,
    };
  }

  return result;
}
