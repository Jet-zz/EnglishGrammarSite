import { ExampleBlock } from "@/components/ExampleBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { partsOfSpeech } from "@/content/partsOfSpeech";

export default function PartsOfSpeechPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Parts of speech"
        title="词性基础"
        description="词性是单词本身的类型。先知道一个词是什么类型，后面才能判断它在句子里能充当什么成分。"
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {partsOfSpeech.map((item) => (
          <section key={item.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-blue-600">{item.englishName}</p>
            <h2 className="mt-1 text-lg font-bold text-slate-950">{item.name}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.role}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.examples.map((example) => (
                <span key={example} className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-700">
                  {example}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <ExampleBlock english={item.sentence} chinese={item.note} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
