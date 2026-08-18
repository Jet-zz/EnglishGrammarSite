"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { SectionHeading } from "@/components/SectionHeading";

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

function CollapsibleSection({ label, children, size, labelClassName }: { label: React.ReactNode; children: React.ReactNode; size?: "sm" | "base"; labelClassName?: string }) {
  const [open, setOpen] = useState(false);
  const cls = size === "base" ? "text-base" : "text-xs";
  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-start justify-start gap-1.5 p-0 ${cls} font-semibold ${labelClassName || "text-slate-500 hover:text-slate-700"} transition`}
      >
        <svg className={`w-3.5 h-3.5 shrink-0 transition-transform ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-left">{label}</span>
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
    "表示让步转折关系的介词和副词",
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
                    <CollapsibleSection label={<>在英文中，还有一些时间连词用来表达主句的动作和从句的动作相继发生，两者之间的时间间隔不长，相当于汉语里<span className="text-red-600 font-bold">"一…… 就"</span>的意思。</>} size="base">
                    <div className="mt-2 max-w-6xl text-base leading-7 text-slate-700">
                      <p className="font-mono text-base text-slate-800">
                        as soon as, once, the minute, the moment, the instant, immediately, directly 和 instantly
                      </p>
                      <p className="mt-3 font-bold text-yellow-600">一、从句动作先于主句动作，从句动作发生之后，紧接着主句动作就发生。</p>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          I will call you <span className="text-yellow-600 font-bold">as soon as</span> he gets on the bus.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">他一上公交车，我就给你打电话。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          <span className="text-yellow-600 font-bold">The moment</span> you finish your work, I will let them go.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">你一完成工作，我就让他们离开。</p>
                      </div>
                      <p className="mt-3 font-bold text-yellow-600">若表示过去的动作，则主句和从句都用一般过去时。</p>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          It began to rain <span className="text-yellow-600 font-bold">as soon as</span> I arrived home.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">我刚到家，天就开始下雨了。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          The doorbell rang <span className="text-yellow-600 font-bold">immediately</span> we began having dinner.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">我们刚开始吃晚饭，门铃就响了。</p>
                      </div>
                      <p className="mt-3 font-bold text-yellow-600">二、主句动作先于从句动作，主句动作发生之后，紧接着从句动作就发生了。</p>
                      <p className="mt-1">
                        <span className="font-mono text-base text-slate-800">hardly… when，scarcely… when，no sooner…than。</span>
                      </p>
                      <p className="mt-1">
                        一般多用来表示过去的动作，此时，主句多用过去完成时，且常倒装，从句用一般过去时。可与 as soon as 等从句、主句互换。
                      </p>
                      <div className="mt-2 rounded-xl border border-slate-200 p-3">
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            <span className="text-yellow-600 font-bold">No sooner</span> had I arrived home <span className="text-yellow-600 font-bold">than</span> it began to rain.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">我刚到家，天就开始下雨了。</p>
                        </div>
                        <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            It began to rain <span className="text-yellow-600 font-bold">as soon as</span> I arrived home.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">我刚到家，天就开始下雨了。</p>
                        </div>
                      </div>
                      <div className="mt-1 rounded-xl border border-slate-200 p-3">
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            <span className="text-yellow-600 font-bold">No sooner</span> had I got into the shower <span className="text-yellow-600 font-bold">than</span> the phone rang.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">我刚进淋浴间，电话就响了。</p>
                        </div>
                        <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            The phone rang <span className="text-yellow-600 font-bold">as soon as</span> I got into the shower.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">我刚进淋浴间，电话就响了。</p>
                        </div>
                      </div>
                      <div className="mt-1 rounded-xl border border-slate-200 p-3">
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            <span className="text-yellow-600 font-bold">No sooner</span> had the storm started <span className="text-yellow-600 font-bold">than</span> all the lights went out.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">暴风雨一开始，所有的灯就都灭了。</p>
                        </div>
                        <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            All the lights went out <span className="text-yellow-600 font-bold">as soon as</span> the storm started.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">暴风雨一开始，所有的灯就都灭了。</p>
                        </div>
                      </div>
                      <div className="mt-1 rounded-xl border border-slate-200 p-3">
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            <span className="text-yellow-600 font-bold">Hardly</span> had I arrived home <span className="text-yellow-600 font-bold">when</span> it began to rain.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">我刚到家，天就开始下雨了。</p>
                        </div>
                        <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            <span className="text-yellow-600 font-bold">Hardly</span> had I got into the shower <span className="text-yellow-600 font-bold">when</span> the phone rang.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">我刚进淋浴间，电话就响了。</p>
                        </div>
                      </div>
                    </div>
                    </CollapsibleSection>
                  </div>
                ) : name === "地点状语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <p>
                      地点状语从句通常是由<span className="text-yellow-600 font-bold">where</span>引导，用来表达<span className="text-yellow-600 font-bold">主句的动作发生的场所</span>，其结构通常是<span className="text-yellow-600 font-bold">"where+陈述句"</span>，从句可以在句首或句末。
                    </p>
                    <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <TooltipBadge tip="主谓结构">You <span className="text-red-600 font-bold">stay</span></TooltipBadge> <TooltipBadge tip="状语从句，修饰谓语stay" className="text-yellow-600">where you are</TooltipBadge>.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">你原地呆着。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        A driver should <span className="text-red-600 font-bold">slow down</span> <TooltipBadge tip="状语从句，修饰谓语slow down" className="text-yellow-600">where there are school</TooltipBadge>.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">在有学校的地方，司机应减速慢行。</p>
                    </div>
                    <div className="mt-1 rounded-xl border border-slate-200 p-3">
                      <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          <span className="text-yellow-600 font-bold">Where there is a will</span>, there <span className="text-red-600 font-bold">is</span> a way.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">有志者，事竟成。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          There <span className="text-red-600 font-bold">is</span> a way <span className="text-yellow-600 font-bold">where there is a will</span>.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">有志者，事竟成。</p>
                      </div>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        I will always <span className="text-red-600 font-bold">help</span> you <TooltipBadge tip="状语从句，修饰谓语help" className="text-yellow-600">wherever you go</TooltipBadge>.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">你不论走到哪里，我都能帮助你。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        We must <span className="text-red-600 font-bold">camp</span> <TooltipBadge tip="状语从句，修饰谓语camp" className="text-yellow-600">where we can get water</TooltipBadge>.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我们必须在能找到水的地方露营。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-red-600 font-bold">Go back</span> <span className="text-yellow-600 font-bold">where you came from</span>.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">回到你来的地方。</p>
                    </div>
                  </div>
                ) : name === "原因状语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <CollapsibleSection label={<>我们常用<span className="text-yellow-600 font-bold">because</span>，<span className="text-yellow-600 font-bold">for</span>，<span className="text-yellow-600 font-bold">as</span> 和 <span className="text-yellow-600 font-bold">since</span>这四个连词来引导原因从句，它们意义和用法不完全相同。<span className="text-yellow-600 font-bold">because</span> 的语气最强，只有它才能用来回答why的提问，所引出的原因往往是听话人所不知道的或最感兴趣的，也只有<span className="text-yellow-600 font-bold">because</span> 才能被强调词如only，just，或perhaps等来修饰。</>} size="base" labelClassName="text-slate-700 font-normal">
                    <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        His friends <span className="text-red-600 font-bold">dislike</span> Jack <TooltipBadge tip="状语从句（相当于副词）修饰谓语dislike" className="text-yellow-600">because he is handsome and successful</TooltipBadge>.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">他的朋友们都不喜欢杰克，因为他长相英俊又事业有成。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        A: Why did Sam stop his online class last night?
                      </p>
                      <p className="font-mono text-base text-slate-800">
                        B: <span className="text-yellow-600 font-bold">Because</span> his PC is broken.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">为啥昨天晚上山姆的网课停了？因为他的电脑坏了。</p>
                    </div>
                    <hr className="mt-3 border-dashed border-slate-300" />
                    <p className="mt-3">
                      连词 <span className="text-yellow-600 font-bold">since</span> 表示人们已知的事实或不需强调的原因，所以常译成 "既然"，通常放在句首。
                    </p>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Since</span> it is raining, why not stay at home and play some games.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500"><span className="text-yellow-600 font-bold">既然</span>天正在下雨，为啥不待在家里玩点游戏呢？</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Since</span> we don't have class tomorrow, why not go out for a picnic?
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500"><span className="text-yellow-600 font-bold">既然</span>明天没有课，我们出去野营如何？</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Since</span> you have been learning English for years, I think you can help me with this sentence.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500"><span className="text-yellow-600 font-bold">既然</span>你已经学习英语多年，我想你能帮我解决这个句子。</p>
                    </div>
                    <hr className="mt-3 border-dashed border-slate-300" />
                    <p className="mt-3">
                      连词 <span className="text-yellow-600 font-bold">as</span> 与 <span className="text-yellow-600 font-bold">since</span> 的用法差不多，所引出的理由在说话人看来已经很明显，或已为听话人所熟悉而不需用 <span className="text-yellow-600 font-bold">because</span> 加以强调。
                    </p>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">As</span>/<span className="text-yellow-600 font-bold">Since</span> Monday is a national holiday, all government offices will be closed.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">由于星期一是国家的法定假日，因此所有的政府办事机构都将关门休息。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">As</span>/<span className="text-yellow-600 font-bold">Since</span> you are tired, you had better rest.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500"><span className="text-yellow-600 font-bold">既然</span>你累了，你最好歇歇吧。</p>
                    </div>
                    <hr className="mt-3 border-dashed border-slate-300" />
                    <p className="mt-3">
                      连词 <span className="text-yellow-600 font-bold">for</span> 表示推断的理由，是对前面分句的内容加以解释或说明。
                    </p>
                    <div className="mt-1 rounded-xl border border-slate-200 p-3">
                      <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          It rained last night, <span className="text-yellow-600 font-bold">for</span> the ground is wet this morning.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">昨晚下雨了，因为今天早上地面都是湿的。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          <span className="text-yellow-600 font-bold">Because</span> it rained last night, the ground is wet this morning.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">因为昨晚下了雨，所以今天早上地面都是湿的。</p>
                      </div>
                    </div>
                    </CollapsibleSection>
                    <CollapsibleSection label={<><span className="text-yellow-600 font-bold">复合连词</span></>} size="base" labelClassName="text-slate-700 font-normal">
                    <div className="mt-2 max-w-6xl text-base leading-7 text-slate-700">
                      <p>
                        <span className="text-yellow-600 font-bold">in that</span>（复合连词表示原因）其基本的意思是 "原因就在于"，其引导的从句要放在主句后面，而且主句通常是在作比较。
                      </p>
                      <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          English has an advantage over most of the other languages <span className="text-yellow-600 font-bold">in that</span> it has become an international language.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">英语比其他大多数语言有优势，原因在于它已成为一种国际语言。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          E-mail is different from the traditional mail <span className="text-yellow-600 font-bold">in that</span> it sends and receives mails in a second.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">电子邮件与传统邮件不同，原因在于它在一秒钟内就能收发邮件。</p>
                      </div>
                      <hr className="mt-3 border-dashed border-slate-300" />
                      <p className="mt-3">
                        这些连词与 <span className="text-yellow-600 font-bold">since</span> 相似，它们都有 "鉴于某个事实，考虑到" 的意思。
                      </p>
                      <p className="mt-1">
                        <span className="text-yellow-600 font-bold">seeing (that), now (that), considering (that), given (that)</span>
                      </p>
                      <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          <span className="text-yellow-600 font-bold">Seeing that</span> it's raining hard, we'll have to stay here for the night.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">鉴于此刻雨下得正大，我们就待在这过夜。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          They did the job very well, <span className="text-yellow-600 font-bold">considering that</span> they had no experience.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">鉴于他们缺乏经验，这项工作他们就算做得很好了。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          <span className="text-yellow-600 font-bold">Given that</span> they are inexperienced, they've done a good job.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">鉴于他们缺乏经验，这项工作他们做得不错。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          <span className="text-yellow-600 font-bold">Now that</span> you are sixteen, you can get a driver's license.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">你已经 16 岁了，可以取得驾驶执照了。</p>
                      </div>
                      <hr className="mt-3 border-dashed border-slate-300" />
                      <p className="mt-3">
                        <span className="text-yellow-600 font-bold">not that…but that</span> "不是因为…… 而是因为……"。
                      </p>
                      <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          I haven't finished writing the report yet, <span className="text-yellow-600 font-bold">not that</span> I'm lazy, <span className="text-yellow-600 font-bold">but that</span> I have no time.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">我还没有写完这个报告，不是因为我懒，而是因为我没时间。</p>
                      </div>
                    </div>
                    </CollapsibleSection>
                  </div>
                ) : name === "目的状语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <p>
                      目的状语从句：<span className="text-yellow-600 font-bold">so that</span>, <span className="text-yellow-600 font-bold">in order that</span>
                    </p>
                    <p className="mt-1">
                      在目的从句中常含有情态动词，比如 may/might 或 can/could 等。
                    </p>
                    <p className="mt-1">
                      <span className="text-yellow-600 font-bold">in order that</span> = <span className="text-yellow-600 font-bold">so that</span>
                    </p>
                    <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        I turned off the TV <span className="text-yellow-600 font-bold">in order that</span> my roommate could study in peace and quiet.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我关掉了电视，好让我的室友安安静静地学习。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        I spoke slowly and clearly <span className="text-yellow-600 font-bold">so that</span>/<span className="text-yellow-600 font-bold">in order that</span> the audience could understand me.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我讲得又慢又清楚，以便（目的是）听众能够听懂我的话。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        The teacher raised his voice <span className="text-yellow-600 font-bold">in order that</span> the students in the back could hear more clearly.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">老师提高了音量，以便（目的是）后排的学生能够听得更清楚。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">In order that</span> my roommate could study in peace and quiet, I turned off the TV.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">为了让我的室友可以安安静静地学习，我关掉了电视。</p>
                    </div>
                    <hr className="mt-3 border-dashed border-slate-300" />
                    <p className="mt-3">
                      <span className="text-yellow-600 font-bold">to</span> / <span className="text-yellow-600 font-bold">in order to</span> /<span className="text-yellow-600 font-bold">so as to</span> + <span className="text-red-600 font-bold">do</span>
                    </p>
                    <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        I decorated my shop <span className="text-yellow-600 font-bold">to</span> / <span className="text-yellow-600 font-bold">in order to</span> /<span className="text-yellow-600 font-bold">so as to</span> <span className="text-red-600 font-bold">attract</span> more customers.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我装修了店铺，为了（目的是）吸引更多顾客。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        All the key words in the article are printed in bold type <span className="text-yellow-600 font-bold">so as to</span> <span className="text-red-600 font-bold">attract</span> readers' attention.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">文章中所有的关键词都用粗体印刷，以此来（目的是）吸引读者的注意。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        I arrived at the cinema early <span className="text-yellow-600 font-bold">so as not to</span> <span className="text-red-600 font-bold">miss</span> the beginning of the film.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我早早来到电影院，以免错过电影的开头。</p>
                    </div>
                    <hr className="mt-3 border-dashed border-slate-300" />
                    <p className="mt-3 font-bold text-slate-800">其他连词的用法</p>
                    <p className="mt-1">
                      <span className="text-yellow-600 font-bold">lest</span>（以免，以防止）
                    </p>
                    <p>
                      <span className="text-yellow-600 font-bold">for fear that</span>（生怕）
                    </p>
                    <p>
                      <span className="text-yellow-600 font-bold">in case that</span>（万一）
                    </p>
                    <p className="mt-1">
                      也可引导目的状语从句。从句的谓语动词一般用情态动词 should，且 should 常常被省去。
                    </p>
                    <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        I was afraid to open the door <span className="text-yellow-600 font-bold">lest</span> he should follow me.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我不敢开门，<span className="text-yellow-600 font-bold">生怕</span>他会跟着我。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        Take an umbrella with you <span className="text-yellow-600 font-bold">lest</span> it should rain.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">随身带一把伞，<span className="text-yellow-600 font-bold">以防</span>下雨。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        People escaped from the building <span className="text-yellow-600 font-bold">for fear that</span> the wall should collapse.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">人们从大楼逃离，<span className="text-yellow-600 font-bold">生怕</span>墙壁会倒塌。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        He worked hard <span className="text-yellow-600 font-bold">for fear that</span> he might be fired by the boss.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">他拼命干活，<span className="text-yellow-600 font-bold">生怕</span>被老板解雇。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        You should arrive there on time <span className="text-yellow-600 font-bold">in case that</span> you might miss some important things.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">你应该准时到那里，<span className="text-yellow-600 font-bold">以防</span>错过一些重要的事情。</p>
                    </div>
                  </div>
                ) : name === "结果状语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <p>
                      在目的状语从句中，从句内部往往有情态动词，而没有情态动词的，依然用到 <span className="text-yellow-600 font-bold">so...that</span> 这种结构，就是结果状语从句。
                    </p>
                    <p className="mt-2">
                      常用的引导结果状语从句的连词有：<span className="text-yellow-600 font-bold">so…that</span>，<span className="text-yellow-600 font-bold">such…that</span>，<span className="text-yellow-600 font-bold">so that</span>，<span className="text-yellow-600 font-bold">such that</span>
                    </p>
                    <p className="mt-2">
                      注意：结果状语从句都要放在主句之后，而不能提到句首。
                    </p>
                    <CollapsibleSection label={<>so…that（<span className="text-yellow-600 font-bold">如此...以至于...</span>）</>} size="base" labelClassName="text-slate-700 font-normal">
                    <div className="mt-2 max-w-6xl text-base leading-7 text-slate-700">
                      <div className="space-y-0.5">
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            I was <span className="text-yellow-600 font-bold">so</span> late <span className="text-yellow-600 font-bold">that</span> I missed an important lesson of English.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">我来得太晚，<span className="text-yellow-600 font-bold">以至于</span>错过了一节重要的英语课。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            Sam drove his car <span className="text-yellow-600 font-bold">so</span> fast <span className="text-yellow-600 font-bold">that</span> he crashed on a lamp-post.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">山姆车开得太快，撞到了路灯杆上。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            He was worried <span className="text-yellow-600 font-bold">so that</span> he couldn't sleep.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">他十分忧虑，<span className="text-yellow-600 font-bold">以至于</span>无法入睡。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            It was very cold, <span className="text-yellow-600 font-bold">so that</span> the river froze.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">天气很冷，所以河水结冰了。</p>
                        </div>
                      </div>
                    </div>
                    </CollapsibleSection>
                    <CollapsibleSection label={<>such（名词）…that（<span className="text-yellow-600 font-bold">如此...以至于...</span>）</>} size="base" labelClassName="text-slate-700 font-normal">
                    <div className="mt-2 max-w-6xl text-base leading-7 text-slate-700">
                      <div className="space-y-0.5">
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            Sam is <span className="text-yellow-600 font-bold">such</span> a good man <span className="text-yellow-600 font-bold">that</span> nobody dislikes him.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">萨姆人这么好，没人讨厌他。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            The shop sells <span className="text-yellow-600 font-bold">such</span> expensive goods <span className="text-yellow-600 font-bold">that</span> I want to buy nothing in it.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">这家商店卖的东西太贵了，所以我什么都不想买。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            It is <span className="text-yellow-600 font-bold">such</span> nice weather <span className="text-yellow-600 font-bold">that</span> I would like to go to the beach.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">天气如此好，<span className="text-yellow-600 font-bold">以至于</span>我想去海滩。</p>
                        </div>
                      </div>
                    </div>
                    </CollapsibleSection>
                    <CollapsibleSection label={<>such that（<span className="text-yellow-600 font-bold">如此...以至于...</span>）</>} size="base" labelClassName="text-slate-700 font-normal">
                    <div className="mt-2 max-w-6xl text-base leading-7 text-slate-700">
                      <p>
                        <span className="text-yellow-600 font-bold">such</span> 就相当于 "so + 形容词"
                      </p>
                      <div className="mt-2 space-y-0.5">
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            His anger was <span className="text-yellow-600 font-bold">such that</span> he lost control of himself.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">他怒火冲天，<span className="text-yellow-600 font-bold">以至于</span>失去了自控。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            His anger was <span className="text-yellow-600 font-bold">so</span> explosive <span className="text-yellow-600 font-bold">that</span> he lost control of himself.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">他的怒火如此猛烈，<span className="text-yellow-600 font-bold">以至于</span>失去了自控。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            The weather is <span className="text-yellow-600 font-bold">such that</span> we can only stay in AC room.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">天气如此（炎热），我们只能待在空调房里。</p>
                        </div>
                        <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                          <p className="font-mono text-base text-slate-800">
                            The weather is <span className="text-yellow-600 font-bold">so</span> hot <span className="text-yellow-600 font-bold">that</span> we can only stay in AC room.
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">天气如此炎热，我们只能待在空调房里。</p>
                        </div>
                      </div>
                    </div>
                    </CollapsibleSection>
                  </div>
                ) : name === "条件状语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <p>
                      这里指的是真实条件状语从句，而非真实条件句在 "虚拟语气"。
                    </p>
                    <p className="mt-2">
                      常用的引导条件状语从句的连词有：
                    </p>
                    <p className="mt-1">
                      <span className="text-yellow-600 font-bold">if</span> 如果
                    </p>
                    <p>
                      <span className="text-yellow-600 font-bold">unless</span> 除非
                    </p>
                    <p>
                      <span className="text-yellow-600 font-bold">as long as</span> 只要
                    </p>
                    <p>
                      <span className="text-yellow-600 font-bold">so long as</span> 只要
                    </p>
                    <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">If</span> winter comes, can spring be far behind?
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">冬天来了，春天还会远吗？</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">If</span> you ask him, he will help you.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">如果你请他帮忙，他会帮你的。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">If</span> you fail in the exam, you will let him down.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">如果你考试不及格，你会让他失望的。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        You can't learn English well <span className="text-yellow-600 font-bold">unless</span> you work hard.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500"><span className="text-yellow-600 font-bold">除非</span>你努力学习，否则你学不好英语。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        Tom will not be happy <span className="text-yellow-600 font-bold">unless</span> the money is back.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">汤姆是不会开心的，<span className="text-yellow-600 font-bold">除非</span>钱回来。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">As long as</span> you're happy, it doesn't matter what you do.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500"><span className="text-yellow-600 font-bold">只要</span>你高兴，你做什么都没有关系。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        You may borrow my book <span className="text-yellow-600 font-bold">as long as</span> you keep it clean.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500"><span className="text-yellow-600 font-bold">只要</span>你保持书的清洁，你就可以把我的书借去。</p>
                    </div>
                    <hr className="mt-3 border-dashed border-slate-300" />
                    <p className="mt-3 font-bold text-slate-800">引导条件状语从句的其他连接词</p>
                    <p className="mt-1">
                      <span className="text-yellow-600 font-bold">providing / provided (that)</span> 假如
                    </p>
                    <p>
                      <span className="text-yellow-600 font-bold">supposing / suppose (that)</span> 假使
                    </p>
                    <p>
                      <span className="text-yellow-600 font-bold">on condition that</span> 在...条件下
                    </p>
                    <p>
                      <span className="text-yellow-600 font-bold">in case</span> 如果
                    </p>
                    <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">In case</span> John comes, please tell him to wait.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">假如约翰来了，请让他等一下。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        I don't mind Hill coming with us, <span className="text-yellow-600 font-bold">provided</span> he pays for his own meals.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">如果希尔自付餐费，我不介意他和我们一起去。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        You may go out <span className="text-yellow-600 font-bold">providing</span> you do your homework first.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">你只要先把家庭作业做完，就可以出去。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Supposing</span> it rains, shall we continue the sports meeting?
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">倘若下雨，我们的运动会还要继续举行吗？</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        He will sign the contract <span className="text-yellow-600 font-bold">provided</span> we offer more favorable terms.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">如果我们提出更优惠的条件，他就会在合同上签字。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        I can tell you the truth <span className="text-yellow-600 font-bold">on condition that</span> you promise to keep a secret.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">我可以告诉你真相，条件是你答应保密。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        You can go swimming <span className="text-yellow-600 font-bold">on condition (that)</span> you don't go too far from the river bank.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">你只有在不远离河岸的条件下才可以下水游泳。</p>
                    </div>
                  </div>
                ) : name === "让步状语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <CollapsibleSection label={<><span className="text-yellow-600 font-bold">though / although</span>、<span className="text-yellow-600 font-bold">even though</span>、<span className="text-yellow-600 font-bold">even if</span> 虽然，尽管，即使等概念</>} size="base" labelClassName="text-slate-700 font-normal">
                    <div className="mt-2 max-w-6xl text-base leading-7 text-slate-700">
                    <p className="mt-2">
                      主句前不可用 but，但可用 yet/still。
                    </p>
                    <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Although</span> he tried hard, (yet / still) he failed.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">尽管他努力了，但仍然失败了。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Although</span> I didn't know anybody at the party, I had a very good time.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">尽管聚会上的人我一个都不认识，但我仍然玩得很愉快。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Though</span> I believe it, yet I must consider.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">尽管我相信这一点，但我还得考虑考虑。</p>
                    </div>
                    <hr className="mt-3 border-dashed border-slate-300" />
                    <p className="mt-3">
                      <span className="text-yellow-600 font-bold">even if</span> 与 <span className="text-yellow-600 font-bold">even though</span> 的区别：两者均可用于引导让步状语从句
                    </p>
                    <p className="mt-1">
                      <span className="text-yellow-600 font-bold">even if</span> 引导的从句往往是假设性的，相当于汉语的 "即使""纵然""就算""哪怕"
                    </p>
                    <p className="mt-1">
                      <span className="text-yellow-600 font-bold">even though</span> 引导的从句内容往往是真实的，主要用于引出不用于主句情况的信息，相当于汉语的 "尽管""虽然"。
                    </p>
                    <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        They'll stand by you <span className="text-yellow-600 font-bold">even if</span> you don't succeed.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">即使你不成功，他们也会支持你。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Even if</span> I have to walk all the way I'll get there.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">即使我得一路走着去，我也要走到那里。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Even though</span> I pass the exam this time, I have to worry about the next exam.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">即使我这次考试及格了，我也不得不去担心下一次的考试。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        He's the best teacher <span className="text-yellow-600 font-bold">even though</span> he has the least experience.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">他尽管经验最少，但教得最好。</p>
                    </div>
                    </div>
                    </CollapsibleSection>
                    <CollapsibleSection label={<><span className="text-yellow-600 font-bold">while</span> 位于句首，一般意为 "尽管"，引导让步状语从句。</>} size="base" labelClassName="text-slate-700 font-normal">
                    <div className="mt-2 max-w-6xl text-base leading-7 text-slate-700">
                      <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          <span className="text-yellow-600 font-bold">While</span> many countries of the world celebrate their own Mother's Day at different times throughout the year, there are some countries such as Denmark, Finland, Italy, Turkey and Australia also celebrate Mother's Day on the second Sunday of May.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">虽然世界上许多国家在一年中的不同时间庆祝各自的母亲节，但也有一些国家，如丹麦、芬兰、意大利、土耳其和澳大利亚，同样在五月的第二个星期日庆祝母亲节。</p>
                      </div>
                      <hr className="mt-3 border-dashed border-slate-300" />
                      <p className="mt-3">
                        <span className="text-yellow-600 font-bold">no matter + what, who, when, where, which, how</span> 或者 <span className="text-yellow-600 font-bold">whatever, whoever, whenever, wherever, whichever, however</span> 来引导让步状语从句，表示 "无论"。请注意，这几个连词除了 <span className="text-yellow-600 font-bold">however</span> 外，一般都是单独使用，而 <span className="text-yellow-600 font-bold">however</span> 后面通常要接形容词或副词。
                      </p>
                      <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          We have decided to do so, <span className="text-yellow-600 font-bold">whatever</span> happens.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">我已经决定这么做了，无论发生什么。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          <span className="text-yellow-600 font-bold">Whoever</span> may trouble you, I will help you to the last.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">无论谁找你的麻烦，我都会帮你到底。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          <span className="text-yellow-600 font-bold">No matter what</span> I did to the money, you still wanted it because it did not decrease in value.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">无论我如何对待那张钞票，你们还是想要它，因为它并没贬值。</p>
                      </div>
                    </div>
                    </CollapsibleSection>
                  </div>
                ) : name === "表示让步转折关系的介词和副词" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <p>
                      <span className="text-yellow-600 font-bold">despite</span> 即使；尽管；
                    </p>
                    <p>
                      <span className="text-yellow-600 font-bold">in spite of</span> 尽管；不管
                    </p>
                    <p>
                      <span className="text-yellow-600 font-bold">notwithstanding</span> 尽管
                    </p>
                    <p className="mt-2">
                      需要注意的是，<span className="text-yellow-600 font-bold">although</span> 和 <span className="text-yellow-600 font-bold">though</span> 等是连词，因此后面只接从句（有时是省略形式的从句），而这里的介词只接名词（短语）
                    </p>
                    <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Though</span> he was inexperienced, he did a very good job.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">尽管他没有经验，但他做得非常好。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">In spite of</span> his inexperience, he did a very good job.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">尽管他没有经验，但他做得非常好。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">In spite of</span> his being inexperienced, he did a very good job.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">尽管他没有经验，但他做得非常好。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Despite</span> her great age, she still looks very graceful.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">尽管她年纪很大，但看起来仍然非常优雅。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Notwithstanding</span> the heat of the sun we must go out.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">尽管太阳很热，我们还是必须出去。</p>
                    </div>
                    <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                      <p className="font-mono text-base text-slate-800">
                        <span className="text-yellow-600 font-bold">Despite</span> a thorough investigation, no trace of Dr Southwell has been found.
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">尽管进行了彻底的调查，仍未发现 Southwell 博士的任何踪迹。</p>
                    </div>
                  </div>
                ) : name === "比较状语从句" ? (
                  <div className="mt-3 max-w-6xl text-base leading-7 text-slate-700">
                    <p>
                      比较状语从句的结构或句型很多，<span className="text-yellow-600 font-bold">as</span> 引导比较状语从句，其基本结构是<span className="text-yellow-600 font-bold">as...as</span>。前一个 as 是副词，而后一个 as 才是比较状语从句的连词。
                    </p>
                    <CollapsibleSection label={<>as + 形容词 或 副词 + as</>} size="base" labelClassName="text-slate-700 font-normal">
                    <div className="mt-2 max-w-6xl text-base leading-7 text-slate-700">
                      <div className="rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          The work is not <span className="text-yellow-600 font-bold">as</span> difficult <span className="text-yellow-600 font-bold">as</span> you think.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">这项工作没有你想象的那么难。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          I can run <span className="text-yellow-600 font-bold">as</span> fast <span className="text-yellow-600 font-bold">as</span> the horse does.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">我能跑得和马一样快。</p>
                      </div>
                      <p className="mt-3 font-bold text-yellow-600">
                        结构1：as（so）+ 形容词 或 副词 + as，在否定句中第一个 as 可用 so 代替
                      </p>
                      <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          This room is not <span className="text-yellow-600 font-bold">so</span> large <span className="text-yellow-600 font-bold">as</span> the one we saw yesterday.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">这个房间没有我们昨天看到的那个大。</p>
                      </div>
                      <p className="mt-3 font-bold text-yellow-600">
                        结构2：as much as 和…… 一样
                      </p>
                      <div className="mt-2 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          I love pandas <span className="text-yellow-600 font-bold">as much as</span> you do.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">我和你一样喜欢熊猫。</p>
                      </div>
                      <div className="mt-1 rounded-lg bg-slate-50 pr-4 py-1.5">
                        <p className="font-mono text-base text-slate-800">
                          I hate Lewis and his kind just <span className="text-yellow-600 font-bold">as much as</span> you do.
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">我和你一样痛恨刘易斯这样的人。</p>
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
        <p><span className="text-red-600 font-bold">从句 = 连接词 + 简单句</span>，<span className="text-red-600 font-bold">什么种类的连接词，就引导什么种类的状语从句。</span></p>
        <p>状语从句 = 一个句子来描述，句子发生的：时间，地点，原因，条件，结果，目的，让步，比较，方式。</p>
        <p className="mt-2 font-mono text-base text-slate-800">I will meet you when you are free.</p>
      </div>

      <section className="mt-10">
        <ClassificationSection />
      </section>
    </div>
  );
}
