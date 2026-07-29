"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { SectionHeading } from "@/components/SectionHeading";

function BiaoYuBadge() {
  const [rect, setRect] = useState<DOMRect | null>(null);
  return (
    <>
      <span
        className="inline cursor-help rounded-md bg-yellow-300 px-2 py-0.5 font-bold text-red-600 border-b border-dashed border-red-600"
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        表语
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
            说明主语的状态、特征或身份
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}

function DegreeAdverbSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 flex items-center gap-1.5 max-w-6xl text-base leading-7 text-slate-700 p-0"
      >
        <svg className={`w-3.5 h-3.5 transition-transform shrink-0 ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span>
          <span className="text-yellow-600 font-bold">程度类副词</span>一般放在被修饰的动词、形容词或副词<span className="text-red-600 font-bold">前面</span>。
        </span>
      </button>
      {open ? (
        <div className="pl-5">
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>I am <span className="text-yellow-600 font-bold">very</span> happy to be with you.</p>
              <p className="mt-0.5 text-sm text-slate-500">和你在一起我很愉快。（<span className="text-yellow-600 font-bold">very</span> <span className="text-red-600 font-bold">作副词修饰形容词</span><span className="text-yellow-600 font-bold">happy</span>）</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>He speaks English <span className="text-yellow-600 font-bold">quite</span> well.</p>
              <p className="mt-0.5 text-sm text-slate-500">他的英语说得相当好。（<span className="text-yellow-600 font-bold">quite</span> <span className="text-red-600 font-bold">作副词修饰副词</span><span className="text-yellow-600 font-bold">well</span>）</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>He <span className="text-yellow-600 font-bold">nearly</span> get there.</p>
              <p className="mt-0.5 text-sm text-slate-500">他几乎到那里了。（<span className="text-yellow-600 font-bold">nearly</span> <span className="text-red-600 font-bold">作副词修饰行为动词</span><span className="text-yellow-600 font-bold">get</span> <span className="text-red-600 font-bold">前</span>）</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ModalVerbAdverbSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 flex items-center gap-1.5 max-w-6xl text-base leading-7 text-slate-700 p-0"
      >
        <svg className={`w-3.5 h-3.5 transition-transform shrink-0 ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span>
          如果实义动词前<span className="text-red-600 font-bold">有情态动词或助动词</span>，程度副词要放在<span className="text-red-600 font-bold">二者之间</span>，如果<span className="text-red-600 font-bold">是be动词</span>，程度副词要放在be动词<span className="text-red-600 font-bold">之后</span>。
        </span>
      </button>
      {open ? (
        <div className="pl-5">
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>I can <span className="text-yellow-600 font-bold">hardly</span> believe what he said.</p>
              <p className="mt-0.5 text-sm text-slate-500">我很难相信他的话。（<span className="text-yellow-600 font-bold">hardly</span> <span className="text-red-600 font-bold">作副词放在情态动词和实义动词之间</span>）</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>He is <span className="text-yellow-600 font-bold">terribly</span> sorry for his misdeeds.</p>
              <p className="mt-0.5 text-sm text-slate-500">他为自己的不当行为而深感懊悔。（<span className="text-yellow-600 font-bold">terribly</span> <span className="text-red-600 font-bold">作副词放在be动词后</span>）</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function FrequencyAdverbSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 flex items-center gap-1.5 max-w-6xl text-base leading-7 text-slate-700 p-0"
      >
        <svg className={`w-3.5 h-3.5 transition-transform shrink-0 ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span>
          <span className="text-yellow-600 font-bold">频率副词</span>通常放在行为动词<span className="text-red-600 font-bold">前</span>，当句中有<span className="text-red-600 font-bold">情态动词、助动词或 be 动词</span>时，频率副词放在这类动词<span className="text-red-600 font-bold">后</span>
        </span>
      </button>
      {open ? (
        <div className="pl-5">
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>I <span className="text-yellow-600 font-bold">often</span> see her walk in the park.</p>
              <p className="mt-0.5 text-sm text-slate-500">我经常看见她在花园里散步。（<span className="text-yellow-600 font-bold">often</span> <span className="text-red-600 font-bold">作频率副词放在行为动词前</span>）</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>We must <span className="text-yellow-600 font-bold">always</span> remember this.</p>
              <p className="mt-0.5 text-sm text-slate-500">我们必须永远记住这一点。（<span className="text-yellow-600 font-bold">always</span> <span className="text-red-600 font-bold">作频率副词放在情态动词后</span>）</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>He has <span className="text-yellow-600 font-bold">never</span> been late.</p>
              <p className="mt-0.5 text-sm text-slate-500">他从不迟到。（<span className="text-yellow-600 font-bold">never</span> <span className="text-red-600 font-bold">作频率副词放在助动词后</span>）</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>She is <span className="text-yellow-600 font-bold">seldom</span> late.</p>
              <p className="mt-0.5 text-sm text-slate-500">她很少迟到。（<span className="text-yellow-600 font-bold">seldom</span> <span className="text-red-600 font-bold">作频率副词放在be动词后</span>）</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function DingYuBadge() {
  const [rect, setRect] = useState<DOMRect | null>(null);
  return (
    <>
      <span
        className="inline cursor-help rounded-md bg-yellow-300 px-2 py-0.5 font-bold text-red-600 border-b border-dashed border-red-600"
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        定语
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
            修饰名词，说明名词的性质或特征
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}

function JieCiBinYuBadge() {
  const [rect, setRect] = useState<DOMRect | null>(null);
  return (
    <>
      <span
        className="inline cursor-help rounded-md bg-yellow-300 px-2 py-0.5 font-bold text-red-600 border-b border-dashed border-red-600"
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        介词宾语
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
            介词后面的名词或代词，受介词支配
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}

function ZhuangYuBadge() {
  const [rect, setRect] = useState<DOMRect | null>(null);
  return (
    <>
      <span
        className="inline cursor-help rounded-md bg-yellow-300 px-2 py-0.5 font-bold text-red-600 border-b border-dashed border-red-600"
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        状语
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
            描述语，修饰语
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}

function TooltipBadge({ children, tip, className }: { children: React.ReactNode; tip: string; className?: string }) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  return (
    <>
      <span
        className={`inline cursor-help border-b border-dashed border-slate-400 font-bold ${className || "text-slate-800"}`}
        onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        {children}
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
            {tip}
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}

function CollapsibleSection({ label, children, size }: { label: string; children: React.ReactNode; size?: "sm" | "base" }) {
  const [open, setOpen] = useState(false);
  const cls = size === "base" ? "text-sm" : "text-xs";
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

function highlightAdverbs(text: string, adverbs: string[]) {
  let result = text;
  for (const adv of adverbs) {
    result = result.replace(adv, `<span class="text-red-600 font-bold">${adv}</span>`);
  }
  return result;
}

const meaningCategories = [
  {
    label: "时间副词（now, later）",
    example: "I am eating an apple now.",
    adverbs: ["now"],
    translation: "我现在正在吃一个苹果。",
  },
  {
    label: "地点副词（here, up）",
    example: "I am eating an apple here.",
    adverbs: ["here"],
    translation: "我在这儿吃一个苹果。",
  },
  {
    label: "程度副词（very, so）",
    example: "I love eating apple so much.",
    adverbs: ["so"],
    translation: "我非常喜欢吃苹果。",
  },
  {
    label: "频率副词（often, rarely）",
    example: "I often eat apple.",
    adverbs: ["often"],
    translation: "我经常吃苹果。",
  },
  {
    label: "方式副词（quickly, easily）",
    example: "I can eat apples quickly.",
    adverbs: ["quickly"],
    translation: "我可以快速吃苹果。",
  },
  {
    label: "态度副词（maybe, honestly）",
    example: "I maybe hate eating apples.",
    adverbs: ["maybe"],
    translation: "我可能不喜欢吃苹果。",
  },
  {
    label: "连接副词（hence, however）",
    example: "The apple is small; However, I like it.",
    adverbs: ["However"],
    translation: "这个苹果很小；然而，我喜欢它。",
  },
];

const functionCategories = [
  {
    label: "一般副词（there）",
    example: "I will eat apples there.",
    adverbs: ["there"],
    translation: "我会在那儿吃苹果。",
  },
  {
    label: "疑问副词（when）",
    example: "When will you eat apples?",
    adverbs: ["When"],
    translation: "你什么时候吃苹果？",
  },
  {
    label: "连接副词（how, where）",
    example: "He knows how I did it.",
    adverbs: ["how"],
    translation: "他知道我是怎么做到的。",
  },
  {
    label: "关系副词（as, why）",
    example: "I was sleeping when you came in.",
    adverbs: ["when"],
    translation: "你进来时我正在睡觉。",
  },
  {
    label: "解释性副词（namely, for example）",
    example: "I want to know the reason why you like eating apples so much.",
    adverbs: ["why"],
    translation: "我想知道你如此喜欢吃苹果的原因。",
  },
  {
    label: "解释性副词（namely, for example）",
    example: "I think that 西红柿，namely 番茄，are very nice.",
    adverbs: ["namely"],
    translation: "我觉得西红柿，即番茄，很好。",
  },
];

const formationExamples = [
  {
    label: "slow → slowly",
    example: "The slow car is running slowly.",
    adverbs: ["slowly"],
    translation: "这辆慢车正缓慢地行驶。",
  },
  {
    label: "bad → badly",
    example: "The bad man was badly hurt.",
    adverbs: ["badly"],
    translation: "那个坏人受了重伤。",
  },
  {
    label: "final → finally",
    example: "I finally won the race in the final game.",
    adverbs: ["finally"],
    translation: "在决赛中我终于赢得了比赛。",
  },
  {
    label: "exact → exactly",
    example: "Can you tell me exactly why Sam loves eating apples so much.",
    adverbs: ["exactly"],
    translation: "你能确切告诉我为什么Sam如此爱吃苹果吗。",
  },
];

const yEndingExamples = [
  {
    label: "happy → happily",
    example: "The happy man is eating an apple happily.",
    adverbs: ["happily"],
    translation: "那个快乐的男人正开心地吃苹果。",
  },
  {
    label: "angry → angrily",
    example: "The angry man said angrily.",
    adverbs: ["angrily"],
    translation: "那个生气的男人愤怒地说。",
  },
  {
    label: "noisy → noisily",
    example: "The worker is noisily working in the factory.",
    adverbs: ["noisily"],
    translation: "那个工人在工厂里嘈杂地工作着。",
  },
  {
    label: "greedy → greedily",
    example: "The greedy man laughed greedily.",
    adverbs: ["greedily"],
    translation: "那个贪婪的男人贪婪地笑了。",
  },
];

function CategorySection({ categories, end }: { categories: typeof meaningCategories; end?: string }) {
  return (
    <div className="mt-3 space-y-1.5">
      {categories.map((item, i) => (
        <div key={i} className="grid grid-cols-1 gap-8 rounded-lg bg-slate-50 pr-4 py-1.5 sm:grid-cols-[280px_1fr]">
          <div className="font-mono text-base text-slate-800 whitespace-nowrap">{item.label}</div>
          <div>
            <div
              className="font-mono text-base text-slate-800"
              dangerouslySetInnerHTML={{ __html: highlightAdverbs(item.example, item.adverbs) }}
            />
            <p className="mt-0.5 text-sm text-slate-500">{item.translation}</p>
          </div>
        </div>
      ))}
      {end ? (
        <div className="grid grid-cols-1 gap-8 rounded-lg bg-slate-50 pr-4 py-1.5 sm:grid-cols-[280px_1fr]">
          <span className="font-mono text-base text-slate-800">{end}</span>
          <span />
        </div>
      ) : null}
    </div>
  );
}

export default function AdverbsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
      <SectionHeading title="副词 · Adverb" />

      {/* 副词的分类 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">副词的分类</h2>
        <CollapsibleSection label="按意义分类" size="base">
          <CategorySection categories={meaningCategories} end="等" />
        </CollapsibleSection>
        <CollapsibleSection label="按功能分类" size="base">
          <CategorySection categories={functionCategories} />
        </CollapsibleSection>
      </section>

      {/* 副词的构成 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">副词的构成</h2>
        <CollapsibleSection label="一般情况：形容词 + ly" size="base">
          <div className="mt-3 space-y-1.5">
            {formationExamples.map((item, i) => (
              <div key={i} className="grid grid-cols-1 gap-8 rounded-lg bg-slate-50 pr-4 py-1.5 sm:grid-cols-[280px_1fr]">
                <div className="font-mono text-base text-slate-800 whitespace-nowrap">{item.label}</div>
                <div>
                  <div
                    className="font-mono text-base text-slate-800"
                    dangerouslySetInnerHTML={{ __html: highlightAdverbs(item.example, item.adverbs) }}
                  />
                  <p className="mt-0.5 text-sm text-slate-500">{item.translation}</p>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>
        <CollapsibleSection label="y 结尾的词" size="base">
          <div className="mt-3 space-y-1.5">
            {yEndingExamples.map((item, i) => (
              <div key={i} className="grid grid-cols-1 gap-8 rounded-lg bg-slate-50 pr-4 py-1.5 sm:grid-cols-[280px_1fr]">
                <div className="font-mono text-base text-slate-800 whitespace-nowrap">{item.label}</div>
                <div>
                  <div
                    className="font-mono text-base text-slate-800"
                    dangerouslySetInnerHTML={{ __html: highlightAdverbs(item.example, item.adverbs) }}
                  />
                  <p className="mt-0.5 text-sm text-slate-500">{item.translation}</p>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      </section>

      {/* 副词的功能 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">副词的功能</h2>
        <CollapsibleSection label="作状语" size="base">
        <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
          <p>
            作<ZhuangYuBadge />：修饰动词、形容词、副词、介词（短语）、数词、代词、前置限定词、连词或整个句子
          </p>
        </div>
        <div className="mt-3 space-y-0.5">
          <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
            <p>He runs <span className="text-yellow-600 font-bold">fast</span>.</p>
            <p className="mt-0.5 text-sm text-slate-500">他跑得快。（<span className="text-yellow-600 font-bold">fast</span> <span className="text-red-600 font-bold">副词修饰动词</span>）</p>
          </div>
          <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
            <p>The book is <span className="text-yellow-600 font-bold">very</span> interesting.</p>
            <p className="mt-0.5 text-sm text-slate-500">这本书很有趣。（<span className="text-yellow-600 font-bold">very</span> <span className="text-red-600 font-bold">副词修饰形容词</span>）</p>
          </div>
          <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
            <p>The bus came <span className="text-yellow-600 font-bold">quite</span> early.</p>
            <p className="mt-0.5 text-sm text-slate-500">公共汽车到得很早。（<span className="text-yellow-600 font-bold">quite</span> <span className="text-red-600 font-bold">副词修饰副词</span>）</p>
          </div>
          <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
            <p>She left <span className="text-yellow-600 font-bold">just</span> <TooltipBadge tip="介词短语">after the meeting</TooltipBadge>.</p>
            <p className="mt-0.5 text-sm text-slate-500">会议刚刚结束她就走了。（<span className="text-yellow-600 font-bold">just</span> <span className="text-red-600 font-bold">副词修饰介词（短语）</span>）</p>
          </div>
          <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
            <p>He is <span className="text-yellow-600 font-bold">much</span> <TooltipBadge tip="介词短语">against the plan</TooltipBadge>.</p>
            <p className="mt-0.5 text-sm text-slate-500">他坚决反对这项计划。（<span className="text-yellow-600 font-bold">much</span> <span className="text-red-600 font-bold">副词修饰介词（短语）</span>）</p>
          </div>
          <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
            <p>It is <span className="text-yellow-600 font-bold">near</span> <TooltipBadge tip="介词短语">by the bridge</TooltipBadge>.</p>
            <p className="mt-0.5 text-sm text-slate-500">它就在离桥很近的地方。（<span className="text-yellow-600 font-bold">near</span> <span className="text-red-600 font-bold">副词修饰介词（短语）</span>）</p>
          </div>
          <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
            <p>He was ill <span className="text-yellow-600 font-bold">mainly</span> <TooltipBadge tip="连词">because</TooltipBadge> he ate too much.</p>
            <p className="mt-0.5 text-sm text-slate-500">他病了，主要是因为吃的太多了。（<span className="text-yellow-600 font-bold">mainly</span> <span className="text-red-600 font-bold">副词修饰连词</span>）</p>
          </div>
          <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
            <p>I heard of her <span className="text-yellow-600 font-bold">long</span> <TooltipBadge tip="连词">before</TooltipBadge> I met her.</p>
            <p className="mt-0.5 text-sm text-slate-500">在见到她之前，我很早就听说过她。（<span className="text-yellow-600 font-bold">long</span> <span className="text-red-600 font-bold">副词修饰连词</span>）</p>
          </div>
          <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
            <p><span className="text-yellow-600 font-bold">Happily</span>, he was not in the house then.</p>
            <p className="mt-0.5 text-sm text-slate-500">幸运的是，他当时不在那所房子里。（<span className="text-yellow-600 font-bold">Happily</span> <span className="text-red-600 font-bold">副词修饰整个句子</span>）</p>
          </div>
          <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
            <p><span className="text-yellow-600 font-bold">Frankly</span>, I don't agree with you.</p>
            <p className="mt-0.5 text-sm text-slate-500">说实话，我不同意你的意见。（<span className="text-yellow-600 font-bold">Frankly</span> <span className="text-red-600 font-bold">副词修饰整个句子</span>）</p>
          </div>
        </div>
        </CollapsibleSection>
        <CollapsibleSection label="作表语" size="base">
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>I am <span className="text-yellow-600 font-bold">home</span>.</p>
              <p className="mt-0.5 text-sm text-slate-500">我在家。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>I am <span className="text-yellow-600 font-bold">here</span>.</p>
              <p className="mt-0.5 text-sm text-slate-500">我在这里。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>I was <span className="text-yellow-600 font-bold">there</span>.</p>
              <p className="mt-0.5 text-sm text-slate-500">我当时在那里。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>Time is <span className="text-yellow-600 font-bold">up</span>.</p>
              <p className="mt-0.5 text-sm text-slate-500">时间到了。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>The TV is <span className="text-yellow-600 font-bold">on</span>.</p>
              <p className="mt-0.5 text-sm text-slate-500">电视播放着呢。</p>
            </div>
          </div>
        </CollapsibleSection>
        <CollapsibleSection label="作定语，修饰名词" size="base">
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>The boy <TooltipBadge tip="后置定语修饰名词" className="text-yellow-600">here</TooltipBadge> is my son.</p>
              <p className="mt-0.5 text-sm text-slate-500">在这儿的男孩是我儿子。（<span className="text-yellow-600 font-bold">here</span> <span className="text-red-600 font-bold">副词作后置定语修饰名词</span><span className="text-yellow-600 font-bold">boy</span>）</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>The buildings <TooltipBadge tip="后置定语修饰名词" className="text-yellow-600">around</TooltipBadge> are modern style.</p>
              <p className="mt-0.5 text-sm text-slate-500">周围的建筑具有现代风格。（<span className="text-yellow-600 font-bold">around</span> <span className="text-red-600 font-bold">副词作后置定语修饰名词</span><span className="text-yellow-600 font-bold">buildings</span>）</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>I met her on my way <TooltipBadge tip="后置定语修饰名词" className="text-yellow-600">home</TooltipBadge>.</p>
              <p className="mt-0.5 text-sm text-slate-500">我在回家的路上遇见了她。（<span className="text-yellow-600 font-bold">home</span> <span className="text-red-600 font-bold">副词作后置定语修饰名词</span><span className="text-yellow-600 font-bold">way</span>）</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>This is my first day <TooltipBadge tip="后置定语修饰名词" className="text-yellow-600">off</TooltipBadge>.</p>
              <p className="mt-0.5 text-sm text-slate-500">这是我休假的第一天。（<span className="text-yellow-600 font-bold">off</span> <span className="text-red-600 font-bold">副词作后置定语修饰名词</span><span className="text-yellow-600 font-bold">day</span>）</p>
            </div>
          </div>
        </CollapsibleSection>
        <CollapsibleSection label="作介词宾语（很少出现）" size="base">
          <div className="mt-3 space-y-0.5">
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>You can leave the goods anywhere but <TooltipBadge tip="作介词宾语" className="text-yellow-600">here</TooltipBadge>.</p>
              <p className="mt-0.5 text-sm text-slate-500">你把货物放在哪里都行，但就是不能放在这里。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>She looked everywhere except <TooltipBadge tip="作介词宾语" className="text-yellow-600">there</TooltipBadge>.</p>
              <p className="mt-0.5 text-sm text-slate-500">她哪儿都找了，就那边没找。</p>
            </div>
            <div className="rounded-lg bg-slate-50 pr-4 py-1.5 font-mono text-base text-slate-800">
              <p>I did not know her until quite <TooltipBadge tip="作介词宾语" className="text-yellow-600">recently</TooltipBadge>.</p>
              <p className="mt-0.5 text-sm text-slate-500">我直到最近才认识她的。</p>
            </div>
          </div>
        </CollapsibleSection>
      </section>

      {/* 副词的位置 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-950">副词的位置</h2>
        <DegreeAdverbSection />
        <ModalVerbAdverbSection />
        <FrequencyAdverbSection />
      </section>
    </div>
  );
}
