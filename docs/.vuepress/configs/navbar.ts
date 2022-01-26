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
        text: "入门学习",
        children: [
          {
            text: "基本理论",
            link: "/es/start/index.md",
          },
        ],
      },
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
      {
        text: "学以致用",
        children: [
          {
            text: "工具函数",
            link: "/es/factory.md",
          },
          {
            text: "正则验证",
            link: "/es/regexp.md",
          }
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
            text: "Sass",
            link: "/css/sass/start.md",
          },
        ],
      },
      {
        text: "病鬼开药店",
        children: [
          {
            text: "一些作品",
            link: "/css/works/3d-rotate",
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
