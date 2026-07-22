export type VoiceTense = {
  name: string;
  active: string;
  passive: string;
  activeFormula: string;
  passiveFormula: string;
  passiveShort: string;
};

export const voices = {
  title: "语态 · Voice",
  intro: "语态表示主语是动作的执行者还是承受者。主动语态中主语做动作；被动语态中主语接受动作。",
};

export const voiceComparison = {
  active: {
    label: "主动语态",
    english: "Active Voice",
    desc: "主语是动作的执行者，强调「谁做的」。",
    example: "Tom broke the window.",
    breakdown: "Tom（主语）做 broke（动作）",
  },
  passive: {
    label: "被动语态",
    english: "Passive Voice",
    desc: "主语是动作的承受者，强调「谁被怎样了」。",
    example: "The window was broken by Tom.",
    breakdown: "The window（主语）承受 broken（动作）",
  },
};

export const voiceTenses: VoiceTense[] = [
  { name: "一般现在时",   active: "He cleans the room.",         passive: "The room is cleaned by him.",             activeFormula: "主语 + 动词原形/单三 + 宾语",         passiveFormula: "主语 + am/is/are + 动词的过去分词 + (by...)",       passiveShort: "am / is / are + done" },
  { name: "一般过去时",   active: "He cleaned the room.",        passive: "The room was cleaned by him.",             activeFormula: "主语 + 动词过去式 + 宾语",             passiveFormula: "主语 + was/were + 动词的过去分词 + (by...)",        passiveShort: "was / were + done" },
  { name: "一般将来时",   active: "He will clean the room.",     passive: "The room will be cleaned by him.",         activeFormula: "主语 + will + 动词原形 + 宾语",        passiveFormula: "主语 + will be + 动词的过去分词 + (by...)",          passiveShort: "will be + done" },
  { name: "过去将来时",    active: "He said he would clean the room.", passive: "He said the room would be cleaned by him.", activeFormula: "主语 + would + 动词原形 + 宾语", passiveFormula: "主语 + would be + 动词的过去分词 + (by...)", passiveShort: "would be + done" },
  { name: "现在进行时",   active: "He is cleaning the room.",    passive: "The room is being cleaned by him.",        activeFormula: "主语 + am/is/are + 动词 ing + 宾语",    passiveFormula: "主语 + am/is/are being + 动词的过去分词 + (by...)",  passiveShort: "am / is / are being + done" },
  { name: "过去进行时",   active: "He was cleaning the room.",   passive: "The room was being cleaned by him.",       activeFormula: "主语 + was/were + 动词 ing + 宾语",     passiveFormula: "主语 + was/were being + 动词的过去分词 + (by...)",   passiveShort: "was / were being + done" },
  { name: "现在完成时",   active: "He has cleaned the room.",    passive: "The room has been cleaned by him.",        activeFormula: "主语 + have/has + 动词的过去分词 + 宾语", passiveFormula: "主语 + have/has been + 动词的过去分词 + (by...)",    passiveShort: "have / has been + done" },
  { name: "过去完成时",   active: "He had cleaned the room.",    passive: "The room had been cleaned by him.",        activeFormula: "主语 + had + 动词的过去分词 + 宾语",     passiveFormula: "主语 + had been + 动词的过去分词 + (by...)",         passiveShort: "had been + done" },
];

export const voiceNote = {
  title: "被动语态的核心公式",
  body: "被动语态 = be + 动词的过去分词。be 动词承载时态和人称变化，过去分词由实义动词变来。原来主动语态里的宾语变成了被动语态的主语。",
  rule: "只有及物动词才有被动语态（不及物动词没有宾语，无法变被动）。",
  byNote: "by + 执行者 可以省略，尤其是当执行者不明确或不重要时：The room is cleaned every day.",
};
