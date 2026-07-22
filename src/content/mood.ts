export const moodIntro = {
  title: "情态 · Mood",
  intro: "概念：表示主语的情绪和态度。",
  role: "在谓语中的作用：情态动词是助动词，必须帮助动词形成复合谓语。",
};

export const modalNote = {
  text: "从词义的角度讲，情态动词是有其自身意义的，来表示可能、建议、愿望、必要、允许、能力、怀疑等，以表示说话者对某种行为或状态的看法。",
  verbs: ["can, could", "may, might", "must", "will, would", "shall, should"],
  hint: "这些没有标注翻译是因为：用法不同，意思不同。",
};

export const modalTable = {
  title: "情态动词对照表",
  headers: ["现在", "过去", "情态动词短语"],
  rows: [
    ["can", "could", "be able to"],
    ["may", "might", "be allowed to"],
    ["must", "—", "have (got) to"],
    ["shall", "should", "be supposed to / ought to"],
    ["will", "would", "be going to"],
  ],
};

export const moodTypes = [
  {
    name: "陈述语气",
    english: "Indicative Mood",
    desc: "陈述事实或提问，是最常见的语气。",
    example: "She is a teacher.",
  },
  {
    name: "祈使语气",
    english: "Imperative Mood",
    desc: "发出命令、请求或建议。主语通常省略。",
    example: "Open the door.",
  },
  {
    name: "虚拟语气",
    english: "Subjunctive Mood",
    desc: "表达愿望、假设、建议等非事实的情况。",
    example: "If I were you, I would go.",
  },
];
