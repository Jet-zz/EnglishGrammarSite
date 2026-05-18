export type PartOfSpeech = {
  name: string;
  englishName: string;
  role: string;
  examples: string[];
  sentence: string;
  note: string;
  linkTo?: string;
};

export const partsOfSpeech: PartOfSpeech[] = [
  {
    name: "名词",
    englishName: "Noun",
    role: "表示人、事物、地点或抽象概念。",
    examples: ["teacher", "apple", "China", "love"],
    sentence: "The teacher likes apples.",
    note: "名词常常可以做主语、宾语或表语。",
  },
  {
    name: "动词",
    englishName: "Verb",
    role: "表示动作或状态，是句子表达事件的核心。",
    examples: ["run", "eat", "be", "have"],
    sentence: "She runs every morning.",
    note: "动词进入句子后，常常承担谓语的核心。",
    linkTo: "/grammar/verbs",
  },
  {
    name: "形容词",
    englishName: "Adjective",
    role: "描述名词的性质、状态或特征。",
    examples: ["happy", "blue", "tall", "important"],
    sentence: "This is a blue bag.",
    note: "形容词可以修饰名词，也可以出现在系动词后做表语。",
  },
  {
    name: "副词",
    englishName: "Adverb",
    role: "修饰动词、形容词、副词或整个句子。",
    examples: ["quickly", "very", "often", "carefully"],
    sentence: "He speaks English clearly.",
    note: "副词常用来说明时间、地点、方式、程度或频率。",
  },
  {
    name: "代词",
    englishName: "Pronoun",
    role: "代替名词，避免重复。",
    examples: ["I", "you", "he", "they"],
    sentence: "I know her.",
    note: "代词有主格、宾格、物主代词等形式变化。",
  },
  {
    name: "介词",
    englishName: "Preposition",
    role: "表示名词和句子其他部分之间的关系。",
    examples: ["in", "on", "at", "for"],
    sentence: "The book is on the desk.",
    note: "介词后面通常接名词、代词或动名词，形成介词短语。",
  },
  {
    name: "连词",
    englishName: "Conjunction",
    role: "连接单词、短语、从句或句子。",
    examples: ["and", "but", "because", "if"],
    sentence: "I stayed home because it rained.",
    note: "连词是理解复合句和从句的重要入口。",
  },
  {
    name: "冠词",
    englishName: "Article",
    role: "放在名词前，帮助限定名词。",
    examples: ["a", "an", "the"],
    sentence: "She bought an umbrella.",
    note: "a/an 常表示泛指，the 常表示特指。",
  },
];
