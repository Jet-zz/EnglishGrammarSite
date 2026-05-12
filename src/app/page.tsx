import { LessonCard } from "@/components/LessonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { lessons } from "@/content/lessons";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        title="学习入口"
      />
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.title} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
