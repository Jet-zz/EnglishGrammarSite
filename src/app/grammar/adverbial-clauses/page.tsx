"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

function CollapsibleSection({ label, children, size }: { label: string; children: React.ReactNode; size?: "sm" | "base" }) {
  const [open, setOpen] = useState(false);
  const cls = size === "base" ? "text-base" : "text-xs";
  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-start gap-1.5 p-0 ${cls} font-semibold text-slate-500 hover:text-slate-700 transition`}
      >
        <svg className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        {label}
      </button>
      {open ? <div className="pl-5">{children}</div> : null}
    </div>
  );
}

function ClassificationSection() {
  const [open, setOpen] = useState(false);
  const categories = [
    "时间状语从句",
    "地点状语从句",
    "条件状语从句",
    "原因状语从句",
    "目的状语从句",
    "结果状语从句",
    "让步状语从句",
    "比较状语从句",
    "方式状语从句",
  ];
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 max-w-6xl text-xl font-bold leading-7 text-slate-700 p-0"
      >
        <svg className={`w-3.5 h-3.5 transition-transform shrink-0 ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span>分类</span>
      </button>
      {open ? (
        <div className="pl-5">
          <div className="mt-3 space-y-0.5">
            {categories.map((name) => (
              <CollapsibleSection label={name} size="base" key={name}>
                {name === "时间状语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <CollapsibleSection label="when / while / as" size="base">
                    <div className="mt-2">
                      <p>
                        <span className="font-bold text-slate-800">when</span> 可指一段时间，也可指一点时间，既可表示一时性的动作，又可表示持续性的动作。<span className="text-red-600 font-bold">when 都可以用。</span>
                      </p>
                      <p className="mt-2">
                        <span className="font-bold text-slate-800">as</span> 所表示的动作与主句动作同时发生，具有延续的含义，一般同延续性动词连用，也可同短暂性动词连用，指短暂情况。表示相逐渐变的情况，常用 as，常译为 "一边…… 一边，正当…… 的时候"。<span className="text-red-600 font-bold">as 强调一边…… 一边。</span>
                      </p>
                      <p className="mt-2">
                        <span className="font-bold text-slate-800">while</span> 表示持续性的动作或状态，主句的情况发生在 while 从句持续或因反复而持续的过程中，一般不表示一时性或短暂性的动作。<span className="text-red-600 font-bold">while 表示持续性的动作或状态。</span>
                      </p>
                    </div>
                    <div className="mt-3 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        He entered the room <span className="text-red-600 font-bold">when</span>/<span className="text-emerald-600 font-bold">while</span>/<span className="text-yellow-600 font-bold">as</span> the meeting was going on.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">正当开会的时候他走进了房间（指一段时间）</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-red-600 font-bold">When</span> she comes, I shall tell her to wait for you.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">她来的时候，我会告诉她等你。（指一点时间，不能用while）</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        I learned French <span className="text-red-600 font-bold">when</span> I was young.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我的法语是年轻时学的。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        He told us his adventures in the UK <span className="text-yellow-600 font-bold">as</span>/<span className="text-red-600 font-bold">when</span> we went along.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我们一边走着，他一边给我们讲他在英国的历险故事。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        She glanced at me curiously <span className="text-yellow-600 font-bold">as</span>/<span className="text-red-600 font-bold">when</span> I opened the door.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我开门时，她用好奇的目光打量着我。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        She stood up <span className="text-yellow-600 font-bold">as</span> I entered.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我刚一进来，她就站起来了。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        I opened the door <span className="text-emerald-600 font-bold">while</span>/<span className="text-red-600 font-bold">when</span>/<span className="text-yellow-600 font-bold">as</span> he was watching TV.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">当他在观看电视的时候，我打开了门。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        He arrived <span className="text-emerald-600 font-bold">while</span> we were having dinner.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">他来的时候我们正吃饭。</p>
                    </div>
                    </CollapsibleSection>
                    <CollapsibleSection label="before / after" size="base">
                    <div className="mt-2 max-w-6xl text-base leading-7 text-slate-700">
                      <p>
                        <span className="text-yellow-600 font-bold">before</span> 和 <span className="text-yellow-600 font-bold">after</span> 表示的是两个时间或两个事件之间的先后关系。
                      </p>
                      <p className="mt-2">
                        <span className="text-yellow-600 font-bold">before</span>引导的从句的动作通常发生在主句动作之后，如果<span className="text-yellow-600 font-bold">从句是过去时</span>，主句一般要用<span className="text-yellow-600 font-bold">过去完成时</span>。
                      </p>
                      <p className="mt-2">
                        <span className="text-yellow-600 font-bold">after</span>引导的从句的动作通常发生在主句动作之前，如果<span className="text-yellow-600 font-bold">主句用过去时</span>，从句要用<span className="text-yellow-600 font-bold">过去完成时</span>。
                      </p>
                      <div className="mt-3 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          They had left here <span className="text-yellow-600 font-bold">before</span> I came.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">在我来之前，他们就已经离开了这里。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          <span className="text-yellow-600 font-bold">After</span> he had worked in the factory for ten years, he went abroad.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">他在这家工厂工作了 10 年后就出国了。</p>
                      </div>
                      <p className="mt-2">
                        <span className="text-yellow-600 font-bold">如果不强调时间的先后</span>，after和before句子结构中的<span className="text-yellow-600 font-bold">谓语动词也可以都用一般过去时</span>。
                      </p>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          He arrived <span className="text-yellow-600 font-bold">after</span> the game started.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">比赛开始后他才到达。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          She did not understand me <span className="text-yellow-600 font-bold">before</span> I explained it to her.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">在我向她解释之前，她不理解我的意思。</p>
                      </div>
                    </div>
                    </CollapsibleSection>
                    <CollapsibleSection label="until" size="base">
                    <div className="mt-2 max-w-6xl text-base leading-7 text-slate-700">
                      <div className="space-y-0.5">
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            Wait <span className="text-yellow-600 font-bold">until</span> he comes back.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">等他回来吧。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            <span className="text-yellow-600 font-bold">Until</span> I came back, he was waiting for me at my home.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">在我回来之前，他一直在我家里等我。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            We'll stay here <span className="text-yellow-600 font-bold">until</span> it stops raining.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">我们将一直呆到雨停了再走。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            He didn't leave the office <span className="text-yellow-600 font-bold">until</span> his boss came back.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">直到老板回来后，他才离开办公室。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            I did not realize how special my mother was <span className="text-yellow-600 font-bold">until</span> I became an adult.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">直到长大成人以后，我才真正懂得母亲是多么的不平凡。</p>
                        </div>
                      </div>
                    </div>
                    </CollapsibleSection>
                  </div>
                ) : (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    {/* TODO */}
                  </div>
                )}
              </CollapsibleSection>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function AdverbialClausesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Adverbial clauses"
        title="状语从句"
        description={
          <>
            状语 = 描述语。
            <br />
            常常描述时间，地点，原因，条件，结果，目的，让步，比较，方式，伴随。
            <br />
            <span className="font-mono text-base text-slate-800">I will meet you here tomorrow.</span>
          </>
        }
      />
      <div className="mt-8 max-w-6xl text-base leading-7 text-slate-700">
        <p><span className="text-red-600 font-bold">从句 = 连接词 + 简单句</span></p>
        <p>状语从句 = 一个句子来描述，句子发生的：时间，地点，原因，条件，结果，目的，让步，比较，方式。</p>
        <p className="mt-2 font-mono text-base text-slate-800">I will meet you when you are free.</p>
      </div>

      <section className="mt-10">
        <ClassificationSection />
      </section>
    </div>
  );
}
