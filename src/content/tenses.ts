export type Tense = {
  name: string;
  englishName: string;
  pattern: string;
  function: string;
  positive: string;
  negative: string;
  question: string;
  note: string;
  sentenceTable?: {
    colLabels: Array<{ label: string; pattern: string }>;
    body: Array<{
      sentenceType: string;
      formulas: string[];
      examples: string[][];
    }>;
  };
};

export const tenseMatrix = [
  { time: "现在", simple: "play(s)", continuous: "am/is/are playing", perfect: "have/has played", perfectContinuous: "have/has been playing" },
  { time: "过去", simple: "played", continuous: "was/were playing", perfect: "had played", perfectContinuous: "had been playing" },
  { time: "将来", simple: "will play", continuous: "will be playing", perfect: "will have played", perfectContinuous: "will have been playing" },
  { time: "过去将来", simple: "would play", continuous: "would be playing", perfect: "would have played", perfectContinuous: "would have been playing" },
];

export const tenses: Tense[] = [
  // ── 第 1 组：红色 ──
  {
    name: "一般现在时",
    englishName: "Present Simple",
    pattern: "主语 + am/is/are + 其他\n主语 + 动词原形/单三形式 + 其他",
    function: "功能：经常发生的事情或对客观事实的描述。",
    positive: "She loves music. / She is a teacher.",
    negative: "She doesn't love music. / She is not a teacher.",
    question: "Does she love music? / Is she a teacher?",
    note: "be动词 和 实义动词属于冤家路窄，句子里永远只能出现一个。\n主语是第三人称单数时，实义动词记得加 s。",
    sentenceTable: {
      colLabels: [
        { label: "am / is / are（be 动词）", pattern: "主语 + am/is/are + 其他" },
        { label: "动词原形 / 单三形式（实义动词）", pattern: "主语 + 动词原形/单三形式 + 其他" },
      ],
      body: [
        {
          sentenceType: "肯定句",
          formulas: ["主语 + am/is/are + 其他", "主语 + 动词原形/单三形式 + 其他"],
          examples: [
            ["I am your friend.", "She is my sister."],
            ["You love me.", "She loves me."],
          ],
        },
        {
          sentenceType: "否定句",
          formulas: ["主语 + am/is/are + not + 其他", "主语 + don't/doesn't + 动词原形 + 其他"],
          examples: [
            ["I am not your friend.", "She is not my sister."],
            ["You don't love me.", "He doesn't love me."],
          ],
        },
        {
          sentenceType: "一般疑问句",
          formulas: ["Am/Is/Are + 主语 + 其他", "Do/Does + 主语 + 动词原形 + 其他"],
          examples: [
            ["Am I your friend?", "Is she my sister?"],
            ["Do you love me?", "Does he love me?"],
          ],
        },
        {
          sentenceType: "特殊疑问句",
          formulas: ["特殊疑问词 + 一般疑问句", "特殊疑问词 + 一般疑问句"],
          examples: [
            ["Who is your friend?", "What is that?"],
            ["Who do you love?", "Who does he love?"],
          ],
        },
        {
          sentenceType: "祈使句",
          formulas: ["Be + 其他", "动词原形 + 其他"],
          examples: [
            ["Be your friend.", "Be my sister."],
            ["Love me.", "Come in."],
          ],
        },
      ],
    },
  },
  {
    name: "一般过去时",
    englishName: "Past Simple",
    pattern: "主语 + was/were + 其他\n主语 + 动词过去式 + 其他",
    function: "功能：现在的之前发生的动作（动作完成）。",
    positive: "I visited Beijing last year. / He was tired yesterday.",
    negative: "I didn't visit Beijing last year. / He was not tired yesterday.",
    question: "Did you visit Beijing last year? / Was he tired yesterday?",
    note: "实义动词变疑问句和否定句时，用 did/didn't，后面的动词恢复原形。",
    sentenceTable: {
      colLabels: [
        { label: "was / were（be 动词）", pattern: "主语 + was/were + 其他" },
        { label: "动词的过去式（实义动词）", pattern: "主语 + 动词过去式 + 其他" },
      ],
      body: [
        {
          sentenceType: "肯定句",
          formulas: ["主语 + was/were + 其他", "主语 + 动词过去式 + 其他"],
          examples: [
            ["I am your friend.", "I was your friend."],
            ["You play game.", "You played game."],
          ],
        },
        {
          sentenceType: "否定句",
          formulas: ["主语 + was/were + not + 其他", "主语 + didn't + 动词原形 + 其他"],
          examples: [
            ["I am not your friend.", "I was not your friend."],
            ["You don't love me.", "You didn't love me."],
          ],
        },
        {
          sentenceType: "一般疑问句",
          formulas: ["Was/Were + 主语 + 其他", "Did + 主语 + 动词原形 + 其他"],
          examples: [
            ["Are you my friend?", "Were you my friend?"],
            ["Do you love me?", "Did you love me?"],
          ],
        },
        {
          sentenceType: "特殊疑问句",
          formulas: ["特殊疑问词 + 一般疑问句", "特殊疑问词 + 一般疑问句"],
          examples: [
            ["Who is your friend?", "Who was your friend?"],
            ["Who do you love?", "Who did you love?"],
          ],
        },
        {
          sentenceType: "祈使句",
          formulas: ["Be + 其他", "动词原形 + 其他"],
          examples: [
            ["", "Be your friend."],
            ["", ""],
          ],
        },
      ],
    },
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
    name: "现在进行时",
    englishName: "Present Continuous",
    pattern: "主语 + am/is/are + 动词 ing + 其他",
    function: "表示此刻正在发生的动作，或当前阶段正在进行的事情。",
    positive: "I am studying English now.",
    negative: "I am not watching TV now.",
    question: "Are you studying English now?",
    note: "进行时的核心是 be + doing，be 会随着主语变化。",
  },

  // ── 第 2 组：黄色 ──
  {
    name: "过去将来时",
    englishName: "Past Future Simple",
    pattern: "主语 + would + 动词原形",
    function: "表示从过去某个时间点看将来要发生的事情。",
    positive: "He said he would come.",
    negative: "He said he would not come.",
    question: "Would he come?",
    note: "常见于宾语从句中，主句用过去时，从句用过去将来时。",
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
    name: "现在完成时",
    englishName: "Present Perfect",
    pattern: "主语 + have/has + 过去分词 + 其他",
    function: "表示过去发生的事情对现在有影响，或从过去持续到现在。",
    positive: "I have finished my homework.",
    negative: "I have not finished my homework.",
    question: "Have you finished your homework?",
    note: "它关注「现在的结果或影响」，不是单纯讲过去某个时间。",
  },
  {
    name: "过去完成时",
    englishName: "Past Perfect",
    pattern: "主语 + had + 过去分词 + 其他",
    function: "表示过去某个时间或动作之前已经完成的事情。",
    positive: "I had finished the work before he came.",
    negative: "I had not finished the work before he came.",
    question: "Had you finished the work before he came?",
    note: "可以理解为「过去的过去」。",
  },

  // ── 第 3 组：绿色 ──
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

  // ── 第 4 组：黑色 ──
  {
    name: "过去将来进行时",
    englishName: "Past Future Continuous",
    pattern: "主语 + would be + 动词 ing + 其他",
    function: "表示从过去看将来某个时刻正在进行的动作。",
    positive: "He said he would be working at 8 p.m.",
    negative: "He said he would not be working at 8 p.m.",
    question: "Would he be working at 8 p.m.?",
    note: "很少使用，多出现在间接引语中。",
  },
  {
    name: "过去将来完成时",
    englishName: "Past Future Perfect",
    pattern: "主语 + would have + 过去分词 + 其他",
    function: "表示从过去看将来某个时间之前已完成的动作。",
    positive: "He said he would have finished by Monday.",
    negative: "He said he would not have finished by Monday.",
    question: "Would he have finished by Monday?",
    note: "常用于虚拟语气和间接引语中。",
  },
  {
    name: "过去完成进行时",
    englishName: "Past Perfect Continuous",
    pattern: "主语 + had been + 动词 ing + 其他",
    function: "表示过去某个时间之前一直持续进行的动作。",
    positive: "I had been waiting for two hours before he arrived.",
    negative: "I had not been waiting long.",
    question: "Had you been waiting long?",
    note: "强调过去动作的持续性，常和 for + 时间段连用。",
  },
  {
    name: "将来完成进行时",
    englishName: "Future Perfect Continuous",
    pattern: "主语 + will have been + 动词 ing + 其他",
    function: "表示到将来某个时间为止，动作已持续了多久。",
    positive: "By June, I will have been studying here for a year.",
    negative: "I will not have been studying here that long.",
    question: "Will you have been studying here for a year by June?",
    note: "极为少用，强调将来某时间点之前的持续过程。",
  },
  {
    name: "过去将来完成进行时",
    englishName: "Past Future Perfect Continuous",
    pattern: "主语 + would have been + 动词 ing + 其他",
    function: "表示从过去看将来某时间之前一直持续的动作。",
    positive: "He said that by Friday he would have been working there for a month.",
    negative: "He said he would not have been working there that long.",
    question: "Would he have been working there for a month by Friday?",
    note: "极为罕见，几乎不出现在日常会话中。",
  },
];
