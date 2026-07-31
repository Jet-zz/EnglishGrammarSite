import { SectionHeading } from "@/components/SectionHeading";

export default function InversionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Inverted sentences"
        title="倒装句"
        description="倒装句将谓语或部分谓语放在主语之前，包括完全倒装和部分倒装两种形式。"
      />
      <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-400">
        内容建设中…
      </div>
    </div>
  );
}
