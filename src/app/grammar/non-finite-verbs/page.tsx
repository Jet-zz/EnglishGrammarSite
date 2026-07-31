import { SectionHeading } from "@/components/SectionHeading";

export default function NonFiniteVerbsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Non-finite verbs"
        title="非谓语动词"
        description="非谓语动词不做谓语，包括不定式（to do）、动名词（doing）和分词（doing / done）三种形式。"
      />
      <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-400">
        内容建设中…
      </div>
    </div>
  );
}
