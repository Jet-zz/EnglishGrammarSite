import { ExampleBlock } from "@/components/ExampleBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { sentenceElements } from "@/content/sentenceElements";

export default function SentenceElementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Sentence elements"
        title="句子成分"
        description={'句子成分是单词或短语进入句子后承担的角色。词性回答"它是什么词"，句子成分回答"它在句子里干什么"。'}
      />

      <div className="mt-6 grid gap-3">
        {sentenceElements.map((item) => (
          <section key={item.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <p className="text-xs font-semibold text-blue-600">{item.englishName}</p>
                  <span className="text-xs text-slate-400">|</span>
                  <h2 className="text-base font-bold text-slate-950">{item.name}</h2>
                  <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
                    {item.question}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.explanation}</p>
              </div>
              <div className="w-72 shrink-0">
                <ExampleBlock english={item.example} chinese={item.breakdown} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
