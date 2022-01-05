# 曳尾涂中 互联网的门槛会慢慢变高。 模块化 CommonJs、ESM 格式介绍

CommonJs 模块化格式主要针对服务端， nodejs 就是该规范的实践者。ECMA Script Module(ESM)是在 ES6 语言层面提出的一种模块化标准。主要针对浏览器端

## CommonJs

所有代码都运行在模块作用域，不会污染全局作用域。
在 nodejs 中使用`require`加载执行函数之后，会被模块会被缓存，以便提升效率。

### 输出

本地有 node 环境下，新建`export.js`,使用 `module.exports` 定义当前模块对外输出的接口。用异步加载。


<CodeGroup>
  <CodeGroupItem title="JS" active>

```js
module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

  </CodeGroupItem>

  <CodeGroupItem title="TS">

```ts
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})
```

  </CodeGroupItem>
</CodeGroup>

```js
const x = 5;
function y(value) {
  return value + x;
}
module.exports = {
  re_name_x: x,
  y,
};
```

### 导入

新建`some-controler.js`，使用 `require` 加载模块

```js
const THAT_EXPORT = require("./export");
console.log(THAT_EXPORT.re_name_x);
console.log(THAT_EXPORT.y(3));
```

## ESM

CommonJS用同步的方式加载模块。在服务端，模块文件都存放在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成：export 和 import。export 命令用于规定模块的对外接口，import 命令用于输入其他模块提供的功能。
