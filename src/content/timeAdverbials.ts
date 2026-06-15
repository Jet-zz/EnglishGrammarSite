export type TimeAdverbialGroup = {
  label: string;
  note?: string;
  items: { english: string; chinese: string }[];
};

export const timeAdverbialGroups: TimeAdverbialGroup[] = [
  {
    label: "yesterday / last 系列",
    note: "常用于一般过去时",
    items: [
      { english: "yesterday", chinese: "昨天" },
      { english: "yesterday morning", chinese: "昨天上午" },
      { english: "yesterday afternoon", chinese: "昨天下午" },
      { english: "yesterday evening", chinese: "昨天晚上" },
      { english: "the day before yesterday", chinese: "前天" },
      { english: "last night", chinese: "昨晚" },
      { english: "last week", chinese: "上周" },
      { english: "last month", chinese: "上个月" },
      { english: "last year", chinese: "去年" },
      { english: "last spring", chinese: "去年春天" },
      { english: "last Monday", chinese: "上星期一" },
    ],
  },
  {
    label: "ago 系列",
    note: "常用于一般过去时",
    items: [
      { english: "a moment ago", chinese: "刚才" },
      { english: "just now", chinese: "刚才" },
      { english: "an hour ago", chinese: "一小时前" },
      { english: "three days ago", chinese: "三天前" },
      { english: "two weeks ago", chinese: "两周前" },
      { english: "four months ago", chinese: "四个月前" },
      { english: "a year ago", chinese: "一年前" },
    ],
  },
];
