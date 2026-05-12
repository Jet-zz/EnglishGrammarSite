export type SentenceElement = {
  name: string;
  englishName: string;
  question: string;
  explanation: string;
  example: string;
  breakdown: string;
};

export const sentenceElements: SentenceElement[] = [
  {
    name: "主语",
    englishName: "Subject",
    question: "谁？什么？",
    explanation: "句子谈论的对象，通常是动作的发出者或状态的承载者。",
    example: "Tom likes music.",
    breakdown: "Tom 是主语。",
  },
  {
    name: "谓语",
    englishName: "Predicate / Verb",
    question: "做什么？是什么？怎么样？",
    explanation: "说明主语的动作或状态，通常由动词或动词结构承担。",
    example: "Tom likes music.",
    breakdown: "likes 是谓语。",
  },
  {
    name: "宾语",
    englishName: "Object",
    question: "动作作用到谁？作用到什么？",
    explanation: "动作的承受对象，通常跟在及物动词后面。",
    example: "Tom likes music.",
    breakdown: "music 是宾语。",
  },
  {
    name: "表语",
    englishName: "Complement / Predicative",
    question: "主语是什么？主语怎么样？",
    explanation: "跟在系动词后面，对主语进行说明。",
    example: "Tom is a student.",
    breakdown: "a student 是表语。",
  },
  {
    name: "定语",
    englishName: "Attributive",
    question: "什么样的？哪一个？",
    explanation: "修饰名词，让名词信息更具体。",
    example: "The tall boy is Tom.",
    breakdown: "tall 修饰 boy，是定语。",
  },
  {
    name: "状语",
    englishName: "Adverbial",
    question: "什么时候？在哪里？怎样？为什么？",
    explanation: "修饰动作、形容词、副词或整个句子，说明时间、地点、方式、原因等。",
    example: "Tom studies hard every day.",
    breakdown: "hard 和 every day 都可以看作状语信息。",
  },
  {
    name: "补语",
    englishName: "Complement",
    question: "补充说明谁？补充成什么状态？",
    explanation: "对主语或宾语进行补充说明，让句意完整。",
    example: "The news made Tom happy.",
    breakdown: "happy 补充说明 Tom 的状态，是宾语补足语。",
  },
];
