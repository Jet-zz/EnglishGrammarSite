export const moodIntro = {
  title: "情态 · Mood",
  intro: "概念：表示主语的情绪和态度。",
  role: "在谓语中的作用：情态动词是助动词，必须帮助动词形成复合谓语。",
};

export const modalNote = {
  text: "{r}从词义的角度讲{/r}，情态动词是有其自身意义的，来表示可能、建议、愿望、必要、允许、能力、怀疑等，{y}以表示说话者对某种行为或状态的看法{/y}。",
  verbs: ["can, could", "may, might", "must", "will, would", "shall, should"],
  hint: "这些没有标注翻译是因为：用法不同，意思不同。",
};

export type ModalUsageItem = {
  label: string;
  sub: string;
  introExample?: { example: string; translation: string };
  moreExamples?: ({ example: string; translation: string } | { section: string } | { inline: string })[];
};

export const modalUsage = {
  title: "情态动词的三种用法",
  items: [
    {
      label: "基本意思",
      sub: "may（可以）",
      introExample: { example: "You may come in.", translation: "你可以进来。" },
      moreExamples: [
        { example: "I {b}can(助动词) + do(实义动词)一起构成{r}谓语动词{/r}|{p}can{/p} do{/b} this work.", translation: "我{p}能{/p}做这个工作。" },
        { example: "I {b}can(助动词) + not + do(实义动词)一起构成{r}谓语动词{/r}|{p}can{/p} not do{/b} this work.", translation: "我{p}不能{/p}做这个工作。" },
        { example: "I {b}must(助动词) + do(实义动词)一起构成{r}谓语动词{/r}|{p}must{/p} do{/b} this work.", translation: "我{p}必须{/p}做这个工作。" },
        { example: "You {b}must(助动词) + not + smoke(实义动词)一起构成{r}谓语动词{/r}|{p}must{/p} not smoke{/b} here.", translation: "{p}禁止{/p}在此吸烟。" },
        { example: "I {b}will(助动词) + do(实义动词)一起构成{r}谓语动词{/r}|{p}will{/p} do{/b} this work.", translation: "我{p}将{/p}做这个工作。" },
        { example: "You {b}may(助动词) + come(实义动词)一起构成{r}谓语动词{/r}|{p}may{/p} come{/b} in now.", translation: "你{p}可以{/p}现在进来。" },
        { example: "I {b}shall(助动词) + go(实义动词)一起构成{r}谓语动词{/r}|{p}shall{/p} go{/b} to school now.", translation: "我{p}将{/p}现在去上学。" },
        { example: "He said that he {b}would(助动词) + come(实义动词)一起构成{r}谓语动词{/r}|{p}would{/p} come{/b} today.", translation: "他说他{p}将{/p}今天来。" },
        { example: "He said he {b}could(助动词) + finish(实义动词)一起构成{r}谓语动词{/r}|{p}could{/p} finish{/b} the work today.", translation: "他说他{p}能{/p}今天完成工作。" },
        { example: "I {b}am able to(助动词) + do(实义动词)一起构成{r}谓语动词{/r}|{p}am able to{/p} do{/b} it by myself.", translation: "我{p}能{/p}自己做这个。" },
        { example: "I {b}have got to(助动词) + go(实义动词)一起构成{r}谓语动词{/r}|{p}have got to{/p} go{/b} now.", translation: "我{p}不得不{/p}现在走。" },
        { example: "I {b}have to(助动词) + do(实义动词)一起构成{r}谓语动词{/r}|{p}have to{/p} do{/b} it now.", translation: "我{p}不得不{/p}现在就做。" },
        { example: "You {b}{r}谓语动词{/r}|{p}are supposed to{/p} be{/b} at home now.", translation: "你{p}现在应该{/p}是在家的。" },
        { example: "I {b}am going to(助动词) + leave(实义动词)一起构成{r}谓语动词{/r}|{p}am going to{/p} leave{/b} soon.", translation: "我{p}打算{/p}很快离开。" },
        { example: "You {b}ought to(助动词) + follow(实义动词)一起构成{r}谓语动词{/r}|{p}ought to{/p} follow{/b} the rules.", translation: "你{p}应该{/p}遵循规则。" },
      ],
    },
    {
      label: "表示推测",
      sub: "must（肯定，一定）",
      introExample: { example: "He may be ill.", translation: "他可能病了。" },
      moreExamples: [
        { section: "{r}情态动词{/r} + 一般式" },
        { example: "John isn't in class. He {y}is{/y} sick.", translation: "约翰今天没上课，他病了。" },
        { example: "John isn't in class. He {b}{r}谓语动词{/r}|{p}must{/p} be{/b} sick.", translation: "约翰今天没上课，他一定是病了。" },
        { example: "John isn't in class. He {b}{r}谓语动词{/r}|{p}may{/p} be{/b} sick.", translation: "约翰今天没上课，他可能是病了。" },
        { example: "John isn't in class. He {b}{r}谓语动词{/r}|{p}should{/p} be{/b} sick.", translation: "约翰今天没上课，他应该是病了。" },
        { section: "{r}情态动词{/r} + 完成式 / 进行式 / 完成进行式" },
        { inline: "完成式：{r}may{/r} {p}have done{/p}" },
        { inline: "进行式：{r}should{/r} {p}be doing{/p}" },
        { inline: "完成进行式：{r}must{/r} {p}have been doing{/p}" },
        { example: "He {b}{r}谓语动词{/r}|{p}should{/p} {r}be working{/r}{/b} right now.", translation: "他现在应该在工作。" },
        { example: "My mother {b}{r}谓语动词{/r}|{p}must{/p} {r}be cooking{/r}{/b} in the kitchen.", translation: "我妈肯定在厨房做饭。" },
        { example: "My teacher {b}{r}谓语动词{/r}|{p}may{/p} {r}be sleeping{/r}{/b} in the classroom.", translation: "我的老师可能正在教室睡觉。" },
        { example: "I think I {b}{r}谓语动词{/r}|{p}may{/p} {r}have annoyed{/r}{/b} Mary.", translation: "我想我可能（{g}已经{/g}）惹玛丽生气了。" },
        { example: "He {b}{r}谓语动词{/r}|{p}must{/p} {r}have done{/r}{/b} most of the work.", translation: "他一定（{g}已经{/g}）完成了大多数的工作。" },
        { example: "You look very tired.\nYou {b}{r}谓语动词{/r}|{p}must{/p} {r}have been working{/r}{/b} all day.", translation: "你看起来很累。\n你准是忙了一整天。" },
        { example: "You look very tired.\nYou {b}{r}谓语动词{/r}|{p}may{/p} {r}have been playing{/r}{/b} PC for two hours.", translation: "你看起来很累。\n你可能已经玩了2个小时电脑了。" },
      ],
    },
    {
      label: "虚拟语气",
      sub: "would / could / might / should",
    },
  ] as ModalUsageItem[],
  rule: "情态动词后面",
  ruleRed: "一定",
  ruleEnd: " + 动词原形",
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
