import type { NavbarConfig } from "@vuepress/theme-default";

export const navbar: NavbarConfig = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "ECMAScript",
    children: [
      {
        text: "特性学习",
        children: [
          {
            text: "灵魂拷问",
            link: "/es/problems.md",
          },
          {
            text: "珍藏属性",
            link: "/es/attribute.md",
          },
        ],
      },
    ],
  },
  {
    text: "深入 Css",
    children: [
      {
        text: "特性学习",
        children: [
          {
            text: "核心概念",
            link: "/css/concepts.md",
          },
          {
            text: "珍藏属性",
            link: "/css/attribute.md",
          },
        ],
      },
      {
        text: "预处理语言",
        children: [
          {
            text: "Scss 预处理语言",
            link: "/css/scss/",
          },
        ],
      },
      {
        text: "病鬼开药店",
        children: [
          {
            text: "一些作品",
            link: "/css/scss/",
          },
        ],
      },
    ],
  },
  {
    text: "规范化开发",
    link: "/normalization/",
  },
  {
    text: "关于我",
    link: "/cuicongkun.md",
  },
  {
    text: "VLOG",
    link: "/vlog/",
  },
];
