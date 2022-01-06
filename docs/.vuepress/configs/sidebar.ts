import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/es/': [
    {
      text: '特性学习',
      children: [
        '/es/problems.md',
        '/es/factory.md',
        '/es/attribute.md',
      ],
    }
  ],
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
  '/vlog/': [
    {
      text: 'VLOG',
      children: [
        '/vlog/index.md',
        '/vlog/nervous.md',
      ],
    }
  ],
}
