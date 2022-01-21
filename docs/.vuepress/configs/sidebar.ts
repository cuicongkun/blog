import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/es/start/': [
    {
      text: '入门学习',
      children: [
        '/es/start/index.md',
        '/es/start/destructuring.md',
        '/es/start/operators.md',
      ],
    }
  ],
  '/es/': [
    {
      text: '特性学习',
      children: [
        '/es/problems.md',
        '/es/factory.md',
        '/es/regexp.md',
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
  '/css/sass/': [
    {
      text: 'Sass',
      children: [
        '/css/sass/start.md',
        '/css/sass/documentation/syntax.md',
        '/css/sass/documentation/at-rules.md',
        '/css/sass/jupang.md',
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
