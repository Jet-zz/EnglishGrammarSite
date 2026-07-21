export type TimeAdverbialGroup = {
  label: string;
  note?: string;
  items?: { english: string; chinese: string }[];
  examples?: { english: string; chinese: string }[];
};

export type TenseAdverbialSection = {
  title: string;
  color: "amber" | "blue" | "purple" | "green" | "rose" | "indigo" | "teal";
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
  {
    title: "一般将来时",
    color: "green",
    groups: [
      {
        label: "将来时间状语",
        items: [
          { english: "tomorrow", chinese: "明天" },
          { english: "the day after tomorrow", chinese: "后天" },
          { english: "next week", chinese: "下周" },
          { english: "next month", chinese: "下个月" },
          { english: "next year", chinese: "明年" },
          { english: "next summer", chinese: "明年夏天" },
          { english: "this week", chinese: "本周" },
          { english: "this month", chinese: "本月" },
          { english: "this year", chinese: "今年" },
          { english: "this winter", chinese: "今年冬天" },
          { english: "two days later", chinese: "两天后" },
          { english: "two weeks later", chinese: "两周后" },
          { english: "two months later", chinese: "两个月后" },
          { english: "two years later", chinese: "两年后" },
          { english: "in June", chinese: "在六月" },
          { english: "in 2035", chinese: "在2035年" },
          { english: "in the future", chinese: "在未来" },
        ],
      },
    ],
  },
  {
    title: "过去将来时",
    color: "rose",
    groups: [
      {
        label: "过去将来时间状语",
        items: [
          { english: "the next day", chinese: "第二天" },
          { english: "the following week", chinese: "接下来的一周" },
          { english: "the following month", chinese: "接下来的一个月" },
          { english: "the following year", chinese: "接下来的一年" },
          { english: "two days later", chinese: "两天后（从过去看）" },
          { english: "soon", chinese: "不久" },
        ],
      },
    ],
  },
  {
    title: "现在完成时",
    color: "indigo",
    groups: [
      {
        label: "现在完成时常配合的副词及时间状语",
        items: [
          { english: "so far", chinese: "到目前为止" },
          { english: "up to now", chinese: "到现在为止" },
          { english: "up till now", chinese: "直到现在" },
          { english: "up to present", chinese: "至今" },
          { english: "since last year", chinese: "自去年以来" },
          { english: "for a long time", chinese: "很长时间" },
          { english: "all along", chinese: "一直，自始至终" },
          { english: "all my life", chinese: "我一辈子" },
          { english: "for ages", chinese: "很久" },
          { english: "all day", chinese: "一整天" },
          { english: "during the past five years", chinese: "在过去的五年里" },
          { english: "during the last five years", chinese: "在最近的五年里" },
          { english: "for the past few years", chinese: "在过去的几年里" },
          { english: "in the past few years", chinese: "在过去的几年里" },
          { english: "for the last few years", chinese: "在最近的几年里" },
          { english: "in the last few years", chinese: "在最近的几年里" },
          { english: "these few days", chinese: "这几天" },
          { english: "these few weeks", chinese: "这几周" },
          { english: "these few months", chinese: "这几个月" },
          { english: "these few years", chinese: "这几年" },
        ],
      },
    ],
  },
  {
    title: "过去完成时",
    color: "teal",
    groups: [
      {
        label: "时间状语",
        items: [
          { english: "by the end of last term", chinese: "到上学期末" },
          { english: "by the end of last year", chinese: "到去年底" },
          { english: "by the end of last month", chinese: "到上个月末" },
          { english: "by the end of last week", chinese: "到上周末" },
          { english: "by the time + 主语 + 动词过去式", chinese: "到……的时候" },
          { english: "by the time of last week", chinese: "到上周为止" },
        ],
      },
      {
        label: "例句",
        examples: [
          { english: "By the end of last term, we had learned 200 new words.", chinese: "到上学期末，我们已经学了200个新词。" },
          { english: "The car had already left by the time I arrived there.", chinese: "我到之前，汽车就已经走了。" },
          { english: "By the time of last week, we had built two houses.", chinese: "到上周为止，我们已经建了两栋房子。" },
        ],
      },
    ],
  },
];

// 保留旧的 flat groups 给其他可能引用它的地方
export const timeAdverbialGroups = tenseAdverbialSections.flatMap(s => s.groups);
