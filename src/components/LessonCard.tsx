import Link from "next/link";
import type { Lesson } from "@/content/lessons";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      href={lesson.href}
      className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      <div className="mb-3">
        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
          {lesson.level}
        </span>
      </div>
      <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-700">
        {lesson.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{lesson.description}</p>
    </Link>
  );
}
