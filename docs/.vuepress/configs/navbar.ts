import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: 'ECMAScript',
    link: '/ECMAScript/',
  },
  {
    text: 'Css',
    children: [
      {
        text: 'Css3',
        children: [
          '/Css/Css3'
        ],
      },
      {
        text: 'Sass',
        children: [
          '/Css/Sass/jupang.md'
        ],
      },
      {
        text: 'Less',
        children: [
          '/Css/Sass/jupang.md',
        ],
      },
    ],
  },
  {
    text: '规范化开发',
    children: [
      {
        text: '常用功能',
        children: [
          '/Normalization/'
        ],
      }
    ],
  },
  {
    text: '关于我',
    link: '/cuicongkun.md'
  },
]
