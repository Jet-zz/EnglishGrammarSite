import { SectionHeading } from "@/components/SectionHeading";

export default function EmphasisPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Emphatic sentences"
        title="强调句"
        description="强调句通过特定结构突出句子中的某一部分，常见的强调句型是 It is/was... that/who...。"
      />
      <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-400">
        内容建设中…
      </div>
    </div>
  );
}
