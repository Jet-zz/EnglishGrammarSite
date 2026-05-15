export const overviewData = {
  core: {
    title: "主干（简单句）",
    description: "一个句子最核心的骨架。去掉所有修饰后，剩下的就是主干。",
    patterns: [
      { name: "主谓", example: "Birds fly." },
      { name: "主谓宾", example: "I love you." },
      { name: "主系表", example: "I am a teacher." },
      { name: "主谓双宾", example: "I gave you an apple." },
      { name: "主谓宾补", example: "I made you happy." },
    ],
  },
  modifiers: [
    { name: "冠词", description: "a / an / the，限定名词的范围。" },
    { name: "形容词", description: "修饰名词，让事物更具体。a red apple" },
    { name: "副词", description: "修饰动词或整个句子。run quickly" },
    { name: "介词短语", description: "说明位置、时间、方式等。in the room", hard: true },
    { name: "非谓语动词", description: "to do / doing / done，动词不做谓语时充当其他成分。", hard: true },
    { name: "定语从句", description: "用一个句子修饰名词。the man who came", hard: true },
    { name: "状语从句", description: "用一个句子修饰动作。when I arrived, ..." },
  ],
  hardModifiers: {
    title: "后置修饰：句子理解变难的关键",
    body: "介词短语、非谓语动词、定语从句这三类修饰在英语里通常放在被修饰词的后面。而中文的习惯是修饰在前。所以一旦主干后面接上这几个后置修饰，句子的阅读顺序就不再是线性的，读者需要“回头”去找被修饰的对象。这就是长难句读不懂的根本原因。",
    contrast: {
      cn: "住在隔壁的那个高个子男孩每天早上跑步。",
      en: "The tall boy who lives next door runs every morning.",
      note: "中文修饰在前（前置），英语修饰在后（后置）",
    },
  },
};

export const demo = {
  sentence: "The tall boy who lives next door runs quickly every morning.",
  annotations: [
    { text: "The tall ", color: "bg-blue-100 text-blue-800" },
    { text: "boy", color: "bg-emerald-100 text-emerald-800" },
    { text: " who lives next door ", color: "bg-yellow-100 text-yellow-800" },
    { text: " runs", color: "bg-emerald-100 text-emerald-800" },
    { text: " quickly every morning.", color: "bg-blue-100 text-blue-800" },
  ],
};
