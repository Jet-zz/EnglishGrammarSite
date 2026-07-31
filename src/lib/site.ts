export const site = {
  name: "英语语法学习站",
  description: "用清晰的结构、例句和对比表学习英语语法基础。",
};

export type NavItem = {
  name: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { name: "首页", href: "/" },
  { name: "结构总览", href: "/grammar/structure-overview" },
  { name: "谓语动词", href: "/grammar/verbs" },
  { name: "词性", href: "/grammar/parts-of-speech" },
  {
    name: "三大从句",
    href: "/grammar/noun-clauses",
    children: [
      { name: "名词从句", href: "/grammar/noun-clauses" },
      { name: "状语从句", href: "/grammar/adverbial-clauses" },
      { name: "定语从句", href: "/grammar/attributive-clauses" },
    ],
  },
  { name: "非谓语动词", href: "/grammar/non-finite-verbs" },
  {
    name: "特殊",
    href: "/grammar/emphasis",
    children: [
      { name: "强调句", href: "/grammar/emphasis" },
      { name: "倒装句", href: "/grammar/inversion" },
      { name: "虚拟语气", href: "/grammar/subjunctive" },
    ],
  },
  { name: "五大句型", href: "/grammar/sentence-patterns" },
  { name: "水平测试", href: "/quiz" },
];
