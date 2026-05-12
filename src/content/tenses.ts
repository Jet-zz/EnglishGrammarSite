export type Tense = {
  name: string;
  englishName: string;
  pattern: string;
  function: string;
  positive: string;
  negative: string;
  question: string;
  note: string;
};

export const tenseMatrix = [
  { time: "现在", simple: "play(s)", continuous: "am/is/are playing", perfect: "have/has played", perfectContinuous: "have/has been playing" },
  { time: "过去", simple: "played", continuous: "was/were playing", perfect: "had played", perfectContinuous: "had been playing" },
  { time: "将来", simple: "will play", continuous: "will be playing", perfect: "will have played", perfectContinuous: "will have been playing" },
  { time: "过去将来", simple: "would play", continuous: "would be playing", perfect: "would have played", perfectContinuous: "would have been playing" },
];

export const tenses: Tense[] = [
  {
    name: "一般现在时",
    englishName: "Present Simple",
    pattern: "主语 + am/is/are 或 动词原形/三单形式 + 其他",
    function: "表示经常发生的事情、习惯、规律或客观事实。",
    positive: "She loves music. / She is a teacher.",
    negative: "She doesn't love music. / She is not a teacher.",
    question: "Does she love music? / Is she a teacher?",
    note: "be 动词和实义动词通常不要同时做谓语；主语是第三人称单数时，实义动词要用三单形式。",
  },
  {
    name: "一般过去时",
    englishName: "Past Simple",
    pattern: "主语 + was/were 或 动词过去式 + 其他",
    function: "表示过去发生并已经结束的动作或状态。",
    positive: "I visited Beijing last year. / He was tired yesterday.",
    negative: "I didn't visit Beijing last year. / He was not tired yesterday.",
    question: "Did you visit Beijing last year? / Was he tired yesterday?",
    note: "实义动词变疑问句和否定句时，用 did/didn't，后面的动词恢复原形。",
  },
  {
    name: "现在进行时",
    englishName: "Present Continuous",
    pattern: "主语 + am/is/are + 动词 ing + 其他",
    function: "表示此刻正在发生的动作，或当前阶段正在进行的事情。",
    positive: "I am studying English now.",
    negative: "I am not watching TV now.",
    question: "Are you studying English now?",
    note: "进行时的核心是 be + doing，be 会随着主语变化。",
  },
  {
    name: "过去进行时",
    englishName: "Past Continuous",
    pattern: "主语 + was/were + 动词 ing + 其他",
    function: "表示过去某个时刻正在发生的动作。",
    positive: "She was reading at 8 p.m. yesterday.",
    negative: "She was not sleeping at 8 p.m. yesterday.",
    question: "Was she reading at 8 p.m. yesterday?",
    note: "常和 when、while 或明确的过去时间点一起使用。",
  },
  {
    name: "一般将来时",
    englishName: "Future Simple",
    pattern: "主语 + will + 动词原形 / 主语 + am/is/are going to + 动词原形",
    function: "表示将来要发生的动作、计划、预测或临时决定。",
    positive: "I will call you tomorrow. / She is going to buy a car.",
    negative: "I will not call you tomorrow. / She is not going to buy a car.",
    question: "Will you call me tomorrow? / Is she going to buy a car?",
    note: "will 后面必须接动词原形；be going to 更强调计划或较明显的趋势。",
  },
  {
    name: "现在完成时",
    englishName: "Present Perfect",
    pattern: "主语 + have/has + 过去分词 + 其他",
    function: "表示过去发生的事情对现在有影响，或从过去持续到现在。",
    positive: "I have finished my homework.",
    negative: "I have not finished my homework.",
    question: "Have you finished your homework?",
    note: "它关注“现在的结果或影响”，不是单纯讲过去某个时间。",
  },
  {
    name: "过去完成时",
    englishName: "Past Perfect",
    pattern: "主语 + had + 过去分词 + 其他",
    function: "表示过去某个时间或动作之前已经完成的事情。",
    positive: "I had finished the work before he came.",
    negative: "I had not finished the work before he came.",
    question: "Had you finished the work before he came?",
    note: "可以理解为“过去的过去”。",
  },
  {
    name: "将来进行时",
    englishName: "Future Continuous",
    pattern: "主语 + will be + 动词 ing + 其他",
    function: "表示将来某个时刻正在发生的动作。",
    positive: "I will be working at 10 tomorrow morning.",
    negative: "I will not be working at 10 tomorrow morning.",
    question: "Will you be working at 10 tomorrow morning?",
    note: "强调将来某一时间点动作正在进行。",
  },
  {
    name: "将来完成时",
    englishName: "Future Perfect",
    pattern: "主语 + will have + 过去分词 + 其他",
    function: "表示到将来某个时间为止已经完成的动作。",
    positive: "I will have finished the book by Friday.",
    negative: "I will not have finished the book by Friday.",
    question: "Will you have finished the book by Friday?",
    note: "常和 by + 将来时间搭配。",
  },
  {
    name: "现在完成进行时",
    englishName: "Present Perfect Continuous",
    pattern: "主语 + have/has been + 动词 ing + 其他",
    function: "表示动作从过去开始，一直持续到现在，并可能继续。",
    positive: "I have been learning English for two years.",
    negative: "I have not been learning English for two years.",
    question: "Have you been learning English for two years?",
    note: "它强调动作的持续过程，而不仅仅是结果。",
  },
];
