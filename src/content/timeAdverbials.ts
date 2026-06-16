export type TimeAdverbialGroup = {
  label: string;
  note?: string;
  items: { english: string; chinese: string }[];
};

export type TenseAdverbialSection = {
  title: string;
  color: "amber" | "blue" | "purple";
  groups: TimeAdverbialGroup[];
};

export const tenseAdverbialSections: TenseAdverbialSection[] = [
  {
    title: "一般过去时",
    color: "amber",
    groups: [
      {
        label: "yesterday / last 系列",
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
    ],
  },
  {
    title: "现在进行时",
    color: "blue",
    groups: [
      {
        label: "现在进行时常用时间状语",
        items: [
          { english: "now", chinese: "现在" },
          { english: "right now", chinese: "此时此刻" },
          { english: "at the moment", chinese: "此刻，当下" },
          { english: "for the time being", chinese: "目前" },
          { english: "these days", chinese: "近来" },
          { english: "at present", chinese: "目前，眼下" },
        ],
      },
    ],
  },
  {
    title: "过去进行时",
    color: "purple",
    groups: [
      {
        label: "过去进行时常用时间状语",
        items: [
          { english: "at this time yesterday", chinese: "昨天的这个时候" },
          { english: "at this time last night", chinese: "昨晚的这个时候" },
          { english: "at this time last year", chinese: "去年的这个时候" },
          { english: "at this time last week", chinese: "上周的这个时候" },
          { english: "just then", chinese: "就在那时" },
          { english: "at that time", chinese: "在那个时候" },
        ],
      },
      {
        label: "时间状语从句",
        items: [
          { english: "when ...", chinese: "当……的时候" },
        ],
      },
    ],
  },
];

// 保留旧的 flat groups 给其他可能引用它的地方
export const timeAdverbialGroups = tenseAdverbialSections.flatMap(s => s.groups);
