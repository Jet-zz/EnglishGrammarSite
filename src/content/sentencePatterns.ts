export type SentencePattern = {
  name: string;
  formula: string;
  explanation: string;
  examples: Array<{
    english: string;
    chinese: string;
    breakdown: string;
  }>;
};

export const intro = {
  title: "什么是简单句？",
  body: "只包含一套主谓结构的句子就叫简单句。这几套结构就是句子的主干，去掉修饰成分后剩下的核心骨架。",
};

export const sentencePatterns: SentencePattern[] = [
  {
    name: "主谓",
    formula: "Subject + Verb",
    explanation: "主语+不及物动词，动作本身已经完整，不需要宾语。",
    examples: [
      { english: "Birds fly.", chinese: "鸟会飞。", breakdown: "Birds = 主语，fly = 谓语" },
      { english: "You laugh.", chinese: "你笑了。", breakdown: "You = 主语，laugh = 谓语" },
    ],
  },
  {
    name: "主谓宾",
    formula: "Subject + Verb + Object",
    explanation: "主语+及物动词+宾语，动作作用到一个对象上，这个对象就是宾语。",
    examples: [
      { english: "I love you.", chinese: "我爱你。", breakdown: "I = 主语，love = 谓语，you = 宾语" },
      { english: "She reads books.", chinese: "她读书。", breakdown: "She = 主语，reads = 谓语，books = 宾语" },
    ],
  },
  {
    name: "主系表",
    formula: "Subject + Linking Verb + Complement",
    explanation: "系动词连接主语和表语，表语用来说明主语是什么、怎么样或处于什么状态。",
    examples: [
      { english: "I am a teacher.", chinese: "我是一名老师。", breakdown: "I = 主语，am = 系动词，a teacher = 表语" },
      { english: "The sky looks blue.", chinese: "天空看起来是蓝色的。", breakdown: "The sky = 主语，looks = 系动词，blue = 表语" },
    ],
  },
  {
    name: "主谓双宾",
    formula: "Subject + Verb + Indirect Object + Direct Object",
    explanation: "主语+及物动词+双宾语，人通常是间接宾语，物通常是直接宾语。",
    examples: [
      { english: "I gave you an apple.", chinese: "我给了你一个苹果。", breakdown: "you = 间接宾语，an apple = 直接宾语" },
      { english: "She sent me a message.", chinese: "她给我发了一条消息。", breakdown: "me = 间接宾语，a message = 直接宾语" },
    ],
  },
  {
    name: "主谓宾补",
    formula: "Subject + Verb + Object + Object Complement",
    explanation: "主语+及物动词+宾语+宾语补足语，补语用来说明宾语的状态、身份或结果。",
    examples: [
      { english: "I made you happy.", chinese: "我让你开心。", breakdown: "you = 宾语，happy = 宾语补足语" },
      { english: "They named the dog Max.", chinese: "他们给这只狗取名 Max。", breakdown: "the dog = 宾语，Max = 宾语补足语" },
    ],
  },
];
