"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { SectionHeading } from "@/components/SectionHeading";

function ItBadge() {
  return (
    <span className="inline rounded-md bg-red-600 px-2 py-0.5 font-bold text-yellow-300">
      It 为形式主语
    </span>
  );
}

function SpecialQuestionBadge() {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const whWords = "what, who, whom, whose, which, when, where, why, how, how much, how many, how long, how far, how often";
  return (
    <>
      <span
        className="inline cursor-help rounded-md bg-yellow-300 px-2 py-0.5 font-bold text-red-600 border-b border-dashed border-red-600"
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        特殊疑问词
      </span>
      {rect ? createPortal(
        <div
          className="fixed pointer-events-none"
          style={{
            top: rect.top - 8,
            left: rect.left + rect.width / 2,
            transform: "translate(-50%, -100%)",
            zIndex: 99999,
          }}
        >
          <div className="rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-lg text-xs whitespace-nowrap">
            {whWords}
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}

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
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 max-w-6xl text-xl font-bold leading-7 text-slate-700 p-0"
      >
        <svg className={`w-3.5 h-3.5 transition-transform shrink-0 ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span>
          分类
        </span>
      </button>
      {open ? (
        <div className="pl-5">
          <div className="mt-3 space-y-0.5">
            {["主语从句", "宾语从句", "表语从句", "同位语从句"].map((name) => (
              <CollapsibleSection label={name} size="base" key={name}>
                {name === "宾语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <p>定义：名词从句作宾语，称为宾语从句。</p>
                    <CollapsibleSection label="动词后面可以跟宾语（动宾）" size="base">
                    <div className="mt-2 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
                      {[
                        ["I know <span class=\"text-yellow-600 font-bold\">that</span> you are a man.", "我知道你是个男人。"],
                        ["He told me <span class=\"text-yellow-600 font-bold\">that</span> he would come.", "他告诉我他会来。"],
                        ["She made it possible <span class=\"text-yellow-600 font-bold\">that</span> she finishes 100 eggs a day.", "她让一天吃完100个鸡蛋成为可能。"],
                        ["I know <span class=\"text-yellow-600 font-bold\">whether</span>(<span class=\"text-yellow-600 font-bold\">if</span>) you love me.", "我知道你是否爱我。"],
                        ["He told me <span class=\"text-yellow-600 font-bold\">if</span>(<span class=\"text-yellow-600 font-bold\">whether</span>) you would come.", "他告诉我你是否会来。"],
                        ["I know <span class=\"text-yellow-600 font-bold\">who</span> you are.", "我知道你是谁。"],
                        ["I like <span class=\"text-yellow-600 font-bold\">what</span> you did.", "我喜欢你所做的。"],
                        ["She loves <span class=\"text-yellow-600 font-bold\">where</span> you go.", "她喜欢你去的地方。"],
                        ["They know <span class=\"text-yellow-600 font-bold\">why</span> you left.", "他们知道你为何离开。"],
                        ["He told me <span class=\"text-yellow-600 font-bold\">when</span> he would come.", "他告诉我他何时会来。"],
                      ].map(([en, zh], i) => (
                        <div key={i} className="contents">
                          <span className="font-mono text-base text-slate-800 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: en }} />
                          <span className="text-sm text-slate-500">{zh}</span>
                        </div>
                      ))}
                    </div>
                    </CollapsibleSection>
                    <CollapsibleSection label="介词后面可以跟宾语（介宾）" size="base">
                    <div className="mt-2 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
                      {[
                        ["I am thinking <span class=\"text-emerald-600 font-bold\">about</span> <span class=\"text-yellow-600 font-bold\">how</span> you did it.", "我正在想你是怎么做到的。"],
                        ["I am good <span class=\"text-emerald-600 font-bold\">at</span> <span class=\"text-yellow-600 font-bold\">what</span> you can not do.", "我擅长你做不了的事。"],
                        ["He is interested <span class=\"text-emerald-600 font-bold\">in</span> <span class=\"text-yellow-600 font-bold\">why</span> you are here.", "他对你为什么在这里感兴趣。"],
                        ["I walked over <span class=\"text-emerald-600 font-bold\">to</span> <span class=\"text-yellow-600 font-bold\">where</span> she sat.", "我走到她坐的地方。"],
                        ["He is a good student <span class=\"text-emerald-600 font-bold\">except</span> <span class=\"text-yellow-600 font-bold\">that</span> he is careless.", "他是一个好学生，除了他比较粗心。"],
                      ].map(([en, zh], i) => (
                        <div key={i} className="contents">
                          <span className="font-mono text-base text-slate-800 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: en }} />
                          <span className="text-sm text-slate-500">{zh}</span>
                        </div>
                      ))}
                    </div>
                    </CollapsibleSection>
                    <CollapsibleSection label="偶尔形容词后面可以跟宾语（形宾）" size="base">
                    <div className="mt-2 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
                      {[
                        ["I am <span class=\"text-emerald-600 font-bold\">happy</span> <span class=\"text-yellow-600 font-bold\">that</span> you got the book.", "我很高兴你拿到了那本书。"],
                        ["I am <span class=\"text-emerald-600 font-bold\">delighted</span> <span class=\"text-yellow-600 font-bold\">that</span> you are here.", "我很高兴你在这里。"],
                        ["He is not <span class=\"text-emerald-600 font-bold\">sure</span> <span class=\"text-yellow-600 font-bold\">whether</span> you will come.", "他不确定你是否会来。"],
                        ["I am <span class=\"text-emerald-600 font-bold\">certain</span> <span class=\"text-yellow-600 font-bold\">what</span> he did.", "我确定他做了什么。"],
                        ["I am not <span class=\"text-emerald-600 font-bold\">clear</span> <span class=\"text-yellow-600 font-bold\">where</span> he will go.", "我不清楚他要去哪里。"],
                      ].map(([en, zh], i) => (
                        <div key={i} className="contents">
                          <span className="font-mono text-base text-slate-800 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: en }} />
                          <span className="text-sm text-slate-500">{zh}</span>
                        </div>
                      ))}
                    </div>
                    </CollapsibleSection>
                  </div>
                ) : name === "表语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <p>定义：名词从句作表语，对主语进行表示说明。</p>
                    <div className="mt-2 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
                      {[
                        ["The new is <span class=\"text-yellow-600 font-bold\">that</span> he was here last night.", "消息是他昨晚在这里。"],
                        ["The truth is <span class=\"text-yellow-600 font-bold\">that</span> he never loved you.", "事实是他从未爱过你。"],
                        ["My dream is <span class=\"text-yellow-600 font-bold\">that</span> i can pass the final exam.", "我的梦想是我能通过期末考试。"],
                        ["The problem is <span class=\"text-yellow-600 font-bold\">whether</span> he can come on time.", "问题是他能否准时来。"],
                        ["The question is <span class=\"text-yellow-600 font-bold\">whether</span> he loved you.", "问题是他是否爱过你。"],
                        ["My confusion is <span class=\"text-yellow-600 font-bold\">whether</span> his is a decent man.", "我的困惑是他是否是个正派的人。"],
                        ["The problem is <span class=\"text-yellow-600 font-bold\">how</span> he did the work on his own.", "问题是他如何独自完成这项工作的。"],
                        ["The question is <span class=\"text-yellow-600 font-bold\">how</span> many apples you have.", "问题是你有多少个苹果。"],
                        ["My confusion is <span class=\"text-yellow-600 font-bold\">why</span> he did not come yesterday.", "我的困惑是他昨天为什么没来。"],
                      ].map(([en, zh], i) => (
                        <div key={i} className="contents">
                          <span className="font-mono text-base text-slate-800 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: en }} />
                          <span className="text-sm text-slate-500">{zh}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : name === "主语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <p>定义：名词从句作主语。<ItBadge /></p>
                    <div className="mt-2 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
                      {[
                        ["<span class=\"text-yellow-600 font-bold\">That</span> I love you is true.", "我爱你这件事是真的。"],
                        ["It is true <span class=\"text-yellow-600 font-bold\">that</span> I love you.", "我爱你这件事是真的。"],
                        ["<span class=\"text-yellow-600 font-bold\">That</span> Sam is a pig makes us laugh.", "Sam是猪这件事让我们发笑。"],
                        ["It makes us laugh <span class=\"text-yellow-600 font-bold\">that</span> Sam is a pig.", "Sam是猪这件事让我们发笑。"],
                        ["<span class=\"text-yellow-600 font-bold\">That</span> Panda is red is impossible.", "熊猫是红色的是不可能的。"],
                        ["It is impossible <span class=\"text-yellow-600 font-bold\">that</span> Panda is red.", "熊猫是红色的是不可能的。"],
                        [null, null],
                        ["<span class=\"text-yellow-600 font-bold\">Whether</span> he can come remains a mystery.", "他能不能来仍然是个谜。"],
                        ["It remains a mystery <span class=\"text-yellow-600 font-bold\">whether</span> he can come.", "他能不能来仍然是个谜。"],
                        ["It is a problem <span class=\"text-yellow-600 font-bold\">whether</span> he can win.", "他能否赢是个问题。"],
                        ["<span class=\"text-yellow-600 font-bold\">Whether</span> he can win is a problem.", "他能否赢是个问题。"],
                        [null, null],
                        ["<span class=\"text-yellow-600 font-bold\">What</span> made him crazy is unknown.", "什么让他发疯是未知的。"],
                        ["It is unknown <span class=\"text-yellow-600 font-bold\">what</span> made him crazy.", "什么让他发疯是未知的。"],
                        ["It is a puzzle <span class=\"text-yellow-600 font-bold\">where</span> he will go.", "他会去哪里是个谜。"],
                        ["<span class=\"text-yellow-600 font-bold\">Where</span> he will go is a puzzle.", "他会去哪里是个谜。"],
                        ["<span class=\"text-yellow-600 font-bold\">When</span> he will come is a big problem.", "他什么时候来是个大问题。"],
                      ].filter((x): x is [string, string] => x[0] !== null).map(([en, zh], i) => (
                        <div key={i} className="contents">
                          <span className="font-mono text-base text-slate-800 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: en }} />
                          <span className="text-sm text-slate-500">{zh}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : name === "同位语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <p>定义：同位语 = 名词解释名词</p>
                    <p className="mt-0.5">同位语从句 = 名词从句对抽象名词的解释说明。</p>
                    <div className="mt-2 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
                      {[
                        ["I can not accept the fact.", "我无法接受这个事实。"],
                        ["I can not accept the fact <span class=\"text-yellow-600 font-bold\">that</span> he ever killed my lovely dog.", "我无法接受他曾杀了我心爱的狗这个事实。"],
                        [null, null],
                        ["Did you hear the news?", "你听到那个新闻了吗？"],
                        ["Did you hear the news <span class=\"text-yellow-600 font-bold\">that</span> Sam used to be pig.", "你听到Sam曾经是头猪那个消息了吗？"],
                        [null, null],
                        ["The question <span class=\"text-yellow-600 font-bold\">whether</span> he will win the game is difficult to be answered.", "他是否会赢得比赛这个问题很难回答。"],
                        [null, null],
                        ["Did you hear the news?", "你听到那个新闻了吗？"],
                        ["Did you hear the news <span class=\"text-yellow-600 font-bold\">what</span> Sam ate last night?", "你听到Sam昨晚吃了什么那个消息吗？"],
                      ].filter((x): x is [string, string] => x[0] !== null).map(([en, zh], i) => (
                        <div key={i} className="contents">
                          <span className="font-mono text-base text-slate-800 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: en }} />
                          <span className="text-sm text-slate-500">{zh}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3">常用的同位语名词：</p>
                    <p className="mt-1 text-base font-bold text-slate-800">
                      news, idea, fact, promise, question, doubt, truth, thought, hope, message, suggestion, dream, possibility, decision 等
                    </p>
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

export default function NounClausesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading
        eyebrow="Noun clauses"
        title="名词从句"
        description={<>名词从句在句子中充当名词的角色，<span className="text-red-600 font-bold">从句=连接词+简单句</span></>}
      />

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">连接词</h2>
        <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
          <p>1、that 不翻译</p>
          <p>2、whether / if 是否</p>
          <p>3、<SpecialQuestionBadge /> 照常翻译</p>
        </div>
      </section>

      <section className="mt-10">
        <ClassificationSection />
      </section>
    </div>
  );
}
