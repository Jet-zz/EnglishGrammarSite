export type VerbCategory = {
  name: string;
  englishName: string;
  description: string;
  examples: string[];
  note: string;
};

export const contentVerbs = {
  title: "认识谓语动词",
  intro: "谓语动词是句子的引擎。它决定主语做什么、是什么、处于什么状态，同时承载时态、语态、语气。可以把谓语动词分成两大类：实义动词和非实义动词（系动词）。",
  overview: {
    left: { name: "实义动词", desc: "有实际动作含义，可以独立做谓语。" },
    right: { name: "非实义动词（系动词）", desc: "本身没有完整意义，必须连接主语和表语。" },
  },
};

export const verbFeatures = {
  title: "三态一否一一致",
  subtitle: "谓语动词承载的五大语法特征",
  items: [
    {
      name: "情态",
      english: "Mood",
      desc: "说话的语气：陈述事实、发出命令、表达假设等。",
      keywords: "陈述语气 / 祈使语气 / 虚拟语气",
      color: "blue",
    },
    {
      name: "时态",
      english: "Tense",
      desc: "动作发生的时间：过去、现在、将来及其组合。",
      keywords: "16 种时态（见时态专题）",
      color: "emerald",
    },
    {
      name: "语态",
      english: "Voice",
      desc: "主语是动作的执行者还是承受者。",
      keywords: "主动语态 / 被动语态",
      color: "purple",
    },
    {
      name: "一致",
      english: "Agreement",
      desc: "主语和谓语在人称和数上保持一致。",
      keywords: "三单加 -s / be 动词变形",
      color: "amber",
    },
    {
      name: "否定",
      english: "Negation",
      desc: "在助动词或 be 动词后加 not 构成否定句。",
      keywords: "do not / is not / will not",
      color: "rose",
    },
  ],
};

export const contentVerbs2: VerbCategory[] = [
  {
    name: "及物动词",
    englishName: "Transitive Verb",
    description: "后面必须接宾语，动作作用到某个对象上。",
    examples: ["I love you.", "She reads books.", "He bought a car."],
    note: "及物动词的宾语不能省略。",
  },
  {
    name: "不及物动词",
    englishName: "Intransitive Verb",
    description: "动作本身已经完整，不需要宾语。",
    examples: ["Birds fly.", "He runs every morning.", "She laughed."],
    note: "不及物动词后面不能直接接宾语（除非加介词）。",
  },
];

export const linkingVerbs: VerbCategory[] = [
  {
    name: "be 动词",
    englishName: "Be Verb",
    description: "最基础的系动词，表示主语是什么、在哪里。",
    examples: ["I am a student.", "She is in the room.", "They were happy."],
    note: "am/is/are 现在式，was/were 过去式。",
  },
  {
    name: "感官动词",
    englishName: "Sense Verb",
    description: "通过感官感受到的状态。",
    examples: ["The food smells good.", "You look tired.", "This feels soft."],
    note: "感官系动词后面接形容词，不要用副词。",
  },
  {
    name: "变化系动词",
    englishName: "Change Verb",
    description: "表示主语从一个状态变成另一个状态。",
    examples: ["She became a doctor.", "It is getting dark.", "The leaves turned yellow."],
    note: "become / get / turn / grow 表示状态变化。",
  },
  {
    name: "表象系动词",
    englishName: "Appearance Verb",
    description: "表示主语看起来、似乎是什么样。",
    examples: ["He seems happy.", "She appears confident.", "The plan looks good."],
    note: "seem、appear 常表推测语气。",
  },
  {
    name: "持续系动词",
    englishName: "Continuity Verb",
    description: "表示主语持续保持某个状态。",
    examples: ["Keep quiet.", "He remains silent.", "She stayed calm."],
    note: "keep / remain / stay 强调状态不改变。",
  },
  {
    name: "终止系动词",
    englishName: "Result Verb",
    description: "表示主语最终被证明是什么样。",
    examples: ["He proved innocent.", "The rumor turned out false."],
    note: "prove / turn out 表示经过验证后的结果。",
  },
];
