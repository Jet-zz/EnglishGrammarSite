"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

function CollapsibleSection({ label, children, size }: { label: React.ReactNode; children: React.ReactNode; size?: "sm" | "base" }) {
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

function NounPhraseSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 max-w-6xl text-base leading-7 text-slate-700 p-0"
      >
        <svg className={`w-3.5 h-3.5 transition-transform shrink-0 ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span>
          介词<span className="text-yellow-600 font-bold">只能</span>接<span className="text-red-600 font-bold">名词性成分</span>（不能接简单句）
        </span>
      </button>
      {open ? (
        <div className="pl-5">
          <div className="mt-3 space-y-0.5">
            <CollapsibleSection label={<>接名词：for my <span className="text-yellow-600 font-bold">school</span></>} size="base">
            <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">I cooked nice meals <span className="text-yellow-600 font-bold">for</span> <span className="text-emerald-600 font-bold">my mother</span>.</span>
              <span className="text-sm text-slate-500">我为我的妈妈做了美味的饭菜。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap"><span className="text-yellow-600 font-bold">In</span> <span className="text-emerald-600 font-bold">the future</span>, I will be a great teacher.</span>
              <span className="text-sm text-slate-500">将来，我会成为一名伟大的老师。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">I am going <span className="text-yellow-600 font-bold">to</span> <span className="text-emerald-600 font-bold">school</span>.</span>
              <span className="text-sm text-slate-500">我正在去学校。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">He is running <span className="text-yellow-600 font-bold">towards</span> <span className="text-emerald-600 font-bold">the train station</span>.</span>
              <span className="text-sm text-slate-500">他正跑向火车站。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">He took a walk <span className="text-yellow-600 font-bold">near</span> <span className="text-emerald-600 font-bold">the village</span>.</span>
              <span className="text-sm text-slate-500">他在村庄附近散步。</span>
            </div>
            </CollapsibleSection>
            <CollapsibleSection label={<>接代词：for <span className="text-yellow-600 font-bold">him</span></>} size="base">
            <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">I do it <span className="text-yellow-600 font-bold">for</span> <span className="text-emerald-600 font-bold">you</span>.</span>
              <span className="text-sm text-slate-500">我为你做这件事。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">Can you finish the work <span className="text-yellow-600 font-bold">for</span> <span className="text-emerald-600 font-bold">him</span>.</span>
              <span className="text-sm text-slate-500">你能为他完成这项工作吗。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">They are selling something <span className="text-yellow-600 font-bold">on</span> <span className="text-emerald-600 font-bold">it</span>.</span>
              <span className="text-sm text-slate-500">他们在上面卖东西。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">You must take the book to school <span className="text-yellow-600 font-bold">for</span> <span className="text-emerald-600 font-bold">her</span>.</span>
              <span className="text-sm text-slate-500">你必须帮她把书带到学校。</span>
            </div>
            </CollapsibleSection>
            <CollapsibleSection label={<>接动名词：for <span className="text-yellow-600 font-bold">swimming</span></>} size="base">
            <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">I am good <span className="text-yellow-600 font-bold">at</span> <span className="text-emerald-600 font-bold">swimming</span>.</span>
              <span className="text-sm text-slate-500">我擅长游泳。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">He must be interested <span className="text-yellow-600 font-bold">in</span> <span className="text-emerald-600 font-bold">reading books</span>.</span>
              <span className="text-sm text-slate-500">他一定对读书感兴趣。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">I often dream <span className="text-yellow-600 font-bold">of</span> <span className="text-emerald-600 font-bold">meeting her</span> in the street.</span>
              <span className="text-sm text-slate-500">我经常梦想着在街上遇见她。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">I don&apos;t want to talk anything <span className="text-yellow-600 font-bold">about</span> <span className="text-emerald-600 font-bold">sleeping</span> during the day time.</span>
              <span className="text-sm text-slate-500">我不想谈任何关于白天睡觉的事。</span>
            </div>
            </CollapsibleSection>
            <CollapsibleSection label={<>接名词从句：for <span className="text-yellow-600 font-bold">what you want to see</span></>} size="base">
            <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">I am good <span className="text-yellow-600 font-bold">at</span> <span className="text-emerald-600 font-bold">what you can not do</span>.</span>
              <span className="text-sm text-slate-500">我擅长你做不了的事。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">He must be interested <span className="text-yellow-600 font-bold">in</span> <span className="text-emerald-600 font-bold">how she finished the work so quickly</span>.</span>
              <span className="text-sm text-slate-500">他一定对她如何这么快完成工作感兴趣。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">I often dream <span className="text-yellow-600 font-bold">of</span> <span className="text-emerald-600 font-bold">that he stays in the USA</span>.</span>
              <span className="text-sm text-slate-500">我经常梦想着他在美国。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">The true is <span className="text-yellow-600 font-bold">beyond</span> <span className="text-emerald-600 font-bold">what I can imagine</span>.</span>
              <span className="text-sm text-slate-500">真相超出了我的想象。</span>
            </div>
            </CollapsibleSection>
            <CollapsibleSection label={<>接名词短语：of <span className="text-yellow-600 font-bold">how to do the work</span></>} size="base">
            <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">I want to know <span className="text-yellow-600 font-bold">about</span> <span className="text-emerald-600 font-bold">how to do this work</span>.</span>
              <span className="text-sm text-slate-500">我想知道如何做这项工作。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">I am thinking <span className="text-yellow-600 font-bold">of</span> <span className="text-emerald-600 font-bold">what to do now</span>.</span>
              <span className="text-sm text-slate-500">我正在考虑现在该做什么。</span>
              <span className="font-mono text-base text-slate-800 whitespace-nowrap">He is extremely interested <span className="text-yellow-600 font-bold">in</span> <span className="text-emerald-600 font-bold">when to leave</span>.</span>
              <span className="text-sm text-slate-500">他对何时离开非常感兴趣。</span>
            </div>
            </CollapsibleSection>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>等</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function PrepositionPhraseSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 max-w-6xl text-base leading-7 text-slate-950 p-0 mt-3 font-bold"
      >
        <svg className={`w-3.5 h-3.5 transition-transform shrink-0 ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span>
          介词短语的分类及用法功能
        </span>
      </button>
      {open ? (
        <div className="pl-5">
          <CollapsibleSection label="简单介词" size="base">
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 max-w-6xl">
            {[
              "by", "in", "after", "on", "at", "past", "since", "till", "until",
              "over", "opposite", "off", "near", "of", "with", "up", "under",
              "toward(s)", "through", "like", "from", "for", "down",
              "during", "except", "but", "beyond", "between", "besides",
              "beside", "beneath", "below", "behind", "before", "among",
              "along", "against", "above", "across", "about", "onto",
              "unlike", "around", "round", "next", "despite", "than",
            ].map((word) => (
              <span key={word} className="rounded-lg bg-slate-100 px-3 py-1.5 font-mono text-base text-slate-800">
                {word}
              </span>
            ))}
          </div>
          </CollapsibleSection>
          <CollapsibleSection label="介词短语作主语" size="base">
          <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
              <div className="space-y-0.5">
                {["主谓", "主谓宾", "主谓双宾", "主谓宾补", "主系表"].map((pattern) => (
                  <div key={pattern} className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
                    <p><span className="text-yellow-600 font-bold">主</span>{pattern.slice(1)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-0.5">
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    <span className="text-yellow-600 font-bold">From Beijing to Shanghai</span> is a long distance.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">从北京到上海是一段很长的距离。</p>
                </div>
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    <span className="text-yellow-600 font-bold">Between 6 o'clock and 7 o'clock</span> will suit you well.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">六点到七点之间很适合你。</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
          <CollapsibleSection label="介词短语作宾补（介词短语作补语，对宾语的补充说明）" size="base">
          <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
              <div className="space-y-0.5">
                {[
                  { parts: [{ text: "主", yellow: false }, { text: "谓", yellow: false }] },
                  { parts: [{ text: "主", yellow: false }, { text: "谓", yellow: false }, { text: "宾", yellow: false }] },
                  { parts: [{ text: "主", yellow: false }, { text: "谓", yellow: false }, { text: "双宾", yellow: false }] },
                  { parts: [{ text: "主", yellow: false }, { text: "谓", yellow: false }, { text: "宾", yellow: false }, { text: "补", yellow: true }] },
                  { parts: [{ text: "主", yellow: false }, { text: "系", yellow: false }, { text: "表", yellow: false }] },
                ].map(({ parts }, i) => (
                  <div key={i} className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
                    <p>
                      {parts.map((part, j) => (
                        part.yellow ? <span key={j} className="text-yellow-600 font-bold">{part.text}</span> : <span key={j}>{part.text}</span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-0.5">
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    You have to put it <span className="text-yellow-600 font-bold">on the table</span>.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">你不得不把它放在桌子上。</p>
                </div>
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    I found him <span className="text-yellow-600 font-bold">at work</span>.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">我发现他在工作。</p>
                </div>
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    Sam will make him <span className="text-yellow-600 font-bold">in trouble</span>.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">山姆将使他陷入困难。</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
          <CollapsibleSection label="介词短语作表语" size="base">
          <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}>
              <div className="space-y-0.5">
                {[
                  { parts: [{ text: "主", yellow: false }, { text: "谓", yellow: false }] },
                  { parts: [{ text: "主", yellow: false }, { text: "谓", yellow: false }, { text: "宾", yellow: false }] },
                  { parts: [{ text: "主", yellow: false }, { text: "谓", yellow: false }, { text: "双宾", yellow: false }] },
                  { parts: [{ text: "主", yellow: false }, { text: "谓", yellow: false }, { text: "宾", yellow: false }, { text: "补", yellow: false }] },
                  { parts: [{ text: "主", yellow: false }, { text: "系", yellow: false }, { text: "表", yellow: true }] },
                ].map(({ parts }, i) => (
                  <div key={i} className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
                    <p>
                      {parts.map((part, j) => (
                        part.yellow ? <span key={j} className="text-yellow-600 font-bold">{part.text}</span> : <span key={j}>{part.text}</span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-0.5">
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    My son is <span className="text-yellow-600 font-bold">at school</span>.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">我儿子在上课。</p>
                </div>
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    My parents are <span className="text-yellow-600 font-bold">at work</span>.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">我父母在工作。</p>
                </div>
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    They are <span className="text-yellow-600 font-bold">under the tree</span>.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">他们在树下。</p>
                </div>
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    The village is <span className="text-yellow-600 font-bold">across the river</span>.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">村子在河对面。</p>
                </div>
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    My handbag is <span className="text-yellow-600 font-bold">between the table and the chair</span>.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">我的包在桌子和凳子之间。</p>
                </div>
                <div className="rounded-lg bg-slate-50 px-4 py-1.5">
                  <p className="font-mono text-base text-slate-800">
                    He is <span className="text-yellow-600 font-bold">like his mother</span>.
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">他长得像他的妈妈。</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
          <CollapsibleSection label={<>介词短语作定语（<span className="text-red-600 font-bold">重中之重</span>）</>} size="base">
          <div className="mt-3 max-w-6xl">
            <p className="text-base leading-7 text-slate-700">
              定语：修饰名词的东西就是定语。
            </p>
            <p className="mt-2 text-lg leading-8 font-bold text-yellow-600">
              介词短语对名词修饰要放在名词的后面，可以无限修饰。
            </p>
          </div>
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base text-slate-800">
                <span className="text-emerald-600 font-bold">The boy</span> likes <span className="text-emerald-600 font-bold">the girl</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">男孩喜欢女孩。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base text-slate-800">
                <span className="text-emerald-600 font-bold">The boy</span> <span className="text-yellow-600 font-bold">with a bag</span> likes <span className="text-emerald-600 font-bold">the girl</span> <span className="text-yellow-600 font-bold">under the tree</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">背着包的男孩喜欢树下的女孩。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base text-slate-800">
                <span className="text-emerald-600 font-bold">The boy</span> <span className="text-yellow-600 font-bold">between Sam and Jack</span> likes <span className="text-emerald-600 font-bold">the girl</span> <span className="text-yellow-600 font-bold">among the animals</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">Sam和Jack之间的男孩喜欢动物群中的女孩。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base text-slate-800">
                <span className="text-emerald-600 font-bold">The girl</span> <span className="text-yellow-600 font-bold">from the USA</span> liked <span className="text-emerald-600 font-bold">the girl</span> <span className="text-yellow-600 font-bold">without good friends</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">来自美国的女孩喜欢没有好朋友的女孩。</p>
            </div>
          </div>
          <hr className="mt-3 border-dashed border-slate-300" />
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base text-slate-800">
                <span className="text-emerald-600 font-bold">The boy</span> wants to ask <span className="text-emerald-600 font-bold">the girl</span> <span className="text-emerald-600 font-bold">a question</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">男孩想向女孩问一个问题。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base text-slate-800">
                <span className="text-emerald-600 font-bold">The boy</span> <span className="text-yellow-600 font-bold">opposite the bank</span> wants to ask <span className="text-emerald-600 font-bold">the girl</span> <span className="text-yellow-600 font-bold">behind the tree</span> <span className="text-emerald-600 font-bold">a question</span> <span className="text-yellow-600 font-bold">about Chinese history</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">银行对面的男孩想向树后面的女孩问一个关于中国历史的问题。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base text-slate-800">
                <span className="text-emerald-600 font-bold">The boy</span> <span className="text-yellow-600 font-bold">against the wall</span> wants to ask <span className="text-emerald-600 font-bold">the girl</span> <span className="text-yellow-600 font-bold">beside the pig</span> <span className="text-emerald-600 font-bold">a question</span> <span className="text-yellow-600 font-bold">regarding how to make cakes</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">靠着墙的男孩想向小猪旁边的女孩问一个关于如何做蛋糕的问题。</p>
            </div>
          </div>
          <hr className="mt-3 border-dashed border-slate-300" />
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base text-slate-800">
                All <span className="text-emerald-600 font-bold">the students</span> <span className="text-yellow-600 font-bold">except Sam</span> must give these <span className="text-emerald-600 font-bold">people</span> <span className="text-yellow-600 font-bold">around the yellow tree</span> <span className="text-yellow-600 font-bold">near our school</span> some <span className="text-emerald-600 font-bold">noodles</span> <span className="text-yellow-600 font-bold">with much egg</span> <span className="text-yellow-600 font-bold">from South Africa</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">除了Sam之外的所有学生都必须给学校附近那棵黄色大树周围的人一些来自南非的有丰富鸡蛋的面条。</p>
            </div>
          </div>
          </CollapsibleSection>
          <CollapsibleSection label="介词短语作状语" size="base">
          <div className="mt-3 max-w-6xl">
            <p className="text-base leading-7 font-bold text-slate-800">
              状语：
            </p>
            <p className="text-base leading-7 text-slate-700">
              （1）不修饰名词，就是作状语。
            </p>
            <p className="text-base leading-7 text-slate-700">
              （2）状语就是用来描述的。
            </p>
          </div>
          <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-4 py-2.5">状语分类</th>
                  <th className="px-4 py-2.5">举例说明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["时间状语", "in the morning"],
                  ["地点状语", "at home"],
                  ["原因状语", "because of you"],
                  ["条件状语", "in this way"],
                  ["目的状语", "for you"],
                  ["让步状语", "despite her age"],
                  ["比较状语", "than you"],
                  ["方式状语", "by bus"],
                  ["结果状语", "往往是从句"],
                  ["伴随状语", "with you"],
                ].map(([type, example]) => (
                  <tr key={type} className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-mono text-xs text-slate-800">{type}</td>
                    <td className="px-4 py-2 font-mono text-xs text-slate-800">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base font-bold text-slate-800">
                介词短语作时间状语
              </p>
              <p className="mt-1 font-mono text-base text-slate-800">
                I will come <span className="text-yellow-600 font-bold">in the morning</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">我会在早上来。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base font-bold text-slate-800">
                介词短语作地点状语
              </p>
              <p className="mt-1 font-mono text-base text-slate-800">
                I will come <span className="text-yellow-600 font-bold">to school</span> <span className="text-yellow-600 font-bold">in the morning</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">我早上会来学校。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base font-bold text-slate-800">
                介词短语作原因状语
              </p>
              <p className="mt-1 font-mono text-base text-slate-800">
                <span className="text-yellow-600 font-bold">Because of you</span>, I will come <span className="text-yellow-600 font-bold">to school</span> <span className="text-yellow-600 font-bold">in the morning</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">因为你，我早上会来学校。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base font-bold text-slate-800">
                介词短语作方式状语
              </p>
              <p className="mt-1 font-mono text-base text-slate-800">
                <span className="text-yellow-600 font-bold">Because of you</span>, I will come <span className="text-yellow-600 font-bold">to school</span> <span className="text-yellow-600 font-bold">by car</span> <span className="text-yellow-600 font-bold">in the morning</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">因为你，我早上会开车来学校。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base font-bold text-slate-800">
                介词短语作伴随状语
              </p>
              <p className="mt-1 font-mono text-base text-slate-800">
                <span className="text-yellow-600 font-bold">Because of you</span>, I will come <span className="text-yellow-600 font-bold">to school</span> <span className="text-yellow-600 font-bold">with Sam</span> <span className="text-yellow-600 font-bold">by car</span> <span className="text-yellow-600 font-bold">in the morning</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">因为你，我早上会开车和Sam一起来学校。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base font-bold text-slate-800">
                介词短语作让步状语
              </p>
              <p className="mt-1 font-mono text-base text-slate-800">
                <span className="text-yellow-600 font-bold">Despite her great age</span>, he arrived.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">尽管她年事已高，他还是到了。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base font-bold text-slate-800">
                介词短语作条件状语
              </p>
              <p className="mt-1 font-mono text-base text-slate-800">
                <span className="text-yellow-600 font-bold">In this way</span>, you can make more money.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">以这种方式，你可以赚更多的钱。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
              <p className="font-mono text-base font-bold text-slate-800">
                介词短语作目的状语
              </p>
              <p className="mt-1 font-mono text-base text-slate-800">
                <span className="text-yellow-600 font-bold">In this way</span>, you can make more money <span className="text-yellow-600 font-bold">for him</span>.
              </p>
              <p className="mt-0.5 text-sm text-slate-500">以这种方式，你可以为他赚更多的钱。</p>
            </div>
          </div>
          </CollapsibleSection>
        </div>
      ) : null}
    </>
  );
}

export default function PrepositionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading title="介词 · Preposition" />

      <section className="mt-10">
        <NounPhraseSection />
        <PrepositionPhraseSection />
      </section>
    </div>
  );
}
