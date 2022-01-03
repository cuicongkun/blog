import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { navbar, sidebar } from "./configs";
import { path } from "@vuepress/utils";
export default defineUserConfig<DefaultThemeOptions>({
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "码大厨" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "码大厨" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/icons/safari-pinned-tab.svg",
        color: "#219af7",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#219af7" }],
    ["meta", { name: "theme-color", content: "#219af7" }],
  ],
  lang: "zh-CN",
  title: "码大厨",
  description: "码大厨的博客和作品集",
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/logo.png",
    locales: {
      "/": {
        navbar,
        sidebar,
        repo: 'cuicongkun/blog',
        docsDir: 'docs',
        // page meta
        editLinkText: "发现问题，您可以在 GitHub 上编辑此页面内容，感谢您的贡献！",
        lastUpdatedText: "Last update",
        contributorsText: "Contributor",

        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",

        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",

        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
        toggleSidebar: "切换侧边栏",
      },
    },
  },
  plugins: [
    ["@vuepress/plugin-debug"],
    [
      "@vuepress/plugin-register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
    [
      "@vuepress/plugin-docsearch",
      {
        apiKey: "3a539aab83105f01761a137c61004d85",
        indexName: "vuepress",
        searchParameters: {
          facetFilters: ["tags:v2"],
        },
        locales: {
          "/zh/": {
            placeholder: "搜索文档",
          },
        },
      },
    ],
  ],
});
