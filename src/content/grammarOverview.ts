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
    { name: "形容词", description: "修饰名词，让事物更具体。a **red** apple" },
    { name: "副词", description: "修饰动词或整个句子。run **quickly**" },
    { name: "介词短语", description: "说明位置、时间、方式等。**in the room**" },
    { name: "非谓语动词", description: "to do / doing / done，动词不做谓语时充当其他成分。" },
    { name: "定语从句", description: "用一个句子修饰名词。the man **who came**" },
    { name: "状语从句", description: "用一个句子修饰动作。**when I arrived**, ..." },
  ],
};

export const demo = {
  sentence: "The tall boy who lives next door runs quickly every morning.",
  annotations: [
    { text: "The tall ", color: "bg-blue-100 text-blue-800" },
    { text: "boy", color: "bg-emerald-100 text-emerald-800" },
    { text: " who lives next door ", color: "bg-blue-100 text-blue-800" },
    { text: " runs", color: "bg-emerald-100 text-emerald-800" },
    { text: " quickly every morning.", color: "bg-blue-100 text-blue-800" },
  ],
};
