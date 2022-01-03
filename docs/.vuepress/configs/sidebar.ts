import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/css/': [
    {
      text: '特性学习',
      children: [
        '/css/concepts.md',
        '/css/attribute.md',
      ],
    }
  ],
  '/css/scss/': [
    {
      text: 'SCSS',
      children: [
        '/css/scss/jupang.md',
      ],
    }
  ],
}
