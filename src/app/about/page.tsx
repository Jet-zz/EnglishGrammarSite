import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="关于这个学习站"
        description="这是一个英语语法学习网站 Demo，目标是把语法知识从零散笔记整理成可阅读、可扩展、可练习的网页课程。"
      />

      <div className="mt-10 space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 leading-8 text-slate-600 shadow-sm">
        <p>
          第一版重点放在“看懂结构”：五大句型帮助你找到句子主干，时态总览帮助你理解谓语动词如何表达时间和状态。
        </p>
        <p>
          后续可以继续加入单词词性、从句、非谓语、练习题、错题记录和学习进度，让它从一个内容站逐步变成完整的学习工具。
        </p>
      </div>
    </div>
  );
}
