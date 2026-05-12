import { ExampleBlock } from "@/components/ExampleBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { sentencePatterns, intro } from "@/content/sentencePatterns";

export default function SentencePatternsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Sentence patterns"
        title="英语五大基本句型"
        description={'英语句子的主干可以先简化成"主语 + 谓语"，再根据动词后面接什么扩展成五种基本结构。'}
      />

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-bold text-slate-950">{intro.title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{intro.body}</p>
      </section>

      <div className="mt-3 grid gap-3">
        {sentencePatterns.map((pattern) => (
          <section key={pattern.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-56 shrink-0">
                <p className="text-xs font-semibold text-blue-600">{pattern.formula}</p>
                <h2 className="mt-1 text-lg font-bold text-slate-950">{pattern.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{pattern.explanation}</p>
              </div>
              <div className="flex flex-1 gap-3">
                {pattern.examples.map((example) => (
                  <ExampleBlock
                    key={example.english}
                    english={example.english}
                    chinese={example.chinese}
                    breakdown={example.breakdown}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
