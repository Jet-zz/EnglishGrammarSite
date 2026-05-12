export type Lesson = {
  title: string;
  description: string;
  href: string;
  level: "入门" | "基础" | "进阶";
};

export const lessons: Lesson[] = [
  {
    title: "英语结构总览",
    description: "主干 + 修饰，从全局看懂英语句子的构成。",
    href: "/grammar/structure-overview",
    level: "入门",
  },
  {
    title: "词性基础",
    description: "先认识单词本身的类型：名词、动词、形容词、副词、介词、连词、代词和冠词。",
    href: "/grammar/parts-of-speech",
    level: "入门",
  },
  {
    title: "句子成分",
    description: "理解单词和短语进入句子后承担的角色：主语、谓语、宾语、表语、定语、状语和补语。",
    href: "/grammar/sentence-elements",
    level: "入门",
  },
  {
    title: "五大基本句型",
    description: "把句子成分组合成五种主干结构，看懂谁、做什么、作用到谁、补充说明什么。",
    href: "/grammar/sentence-patterns",
    level: "基础",
  },
  {
    title: "英语时态总览",
    description: '用"时间 + 状态"的方式理解一般、进行、完成和完成进行。',
    href: "/grammar/tenses",
    level: "基础",
  },
  {
    title: "练习与复盘",
    description: "通过选择题、改错题和中英互译检查自己是否真正掌握。",
    href: "#",
    level: "进阶",
  },
];

export const learningPath = [
  {
    stage: "第一阶段",
    title: "认识单词",
    description: "先知道每个单词本身是什么类型。",
    items: ["英语结构总览", "词性基础"],
  },
  {
    stage: "第二阶段",
    title: "认识句子",
    description: "再看单词进入句子后承担什么角色。",
    items: ["句子成分", "五大基本句型"],
  },
  {
    stage: "第三阶段",
    title: "认识变化",
    description: "最后理解谓语动词如何表达不同时间和状态。",
    items: ["英语时态总览"],
  },
  {
    stage: "第四阶段",
    title: "练习复盘",
    description: "用题目和例句检查自己是否真的掌握。",
    items: ["选择题", "改错题", "中英互译"],
  },
];
