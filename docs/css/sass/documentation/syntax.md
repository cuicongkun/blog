# 语法

Sass 支持两种不同的语法： `scss` `sass` , 我学习使用的是 `sass` 语法。

PS: 也很推荐这种缩进式的语法，更加的简洁直观！

<CodeGroup>
<CodeGroupItem title="sass" active>

```sass
@mixin button-base()
  @include typography(button)
  @include ripple-surface
  @include ripple-radius-bounded

  display: inline-flex
  position: relative
  height: $button-height
  border: none
  vertical-align: middle

  &:hover
    cursor: pointer

  &:disabled
    color: $mdc-button-disabled-ink-color
    cursor: default
    pointer-events: none
```

  </CodeGroupItem>
  <CodeGroupItem title="scss">

```scss
@mixin button-base() {
  @include typography(button);
  @include ripple-surface;
  @include ripple-radius-bounded;

  display: inline-flex;
  position: relative;
  height: $button-height;
  border: none;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    color: $mdc-button-disabled-ink-color;
    cursor: default;
    pointer-events: none;
  }
}
```

  </CodeGroupItem>
</CodeGroup>

## 声明

Sass 样式表由一系列语句组成，这些语句被编译之后构建生成的CSS

### 通用语句

通用语句可以在 Sass 样式表的任何地方使用：

- 变量声明: `$var: value`
- [流控制](/css/sass/documentation/at-rules.md#流控制): `@if` `@each` `@for` `@while`
- `@error` `@warn` `@debug`

### CSS 语句

CSS 语句可以在 Sass 样式表除@function 之外的任何地方使用：

- 样式规则： `h1 { /* ... */ }`
- `@`规则：`@media` `@font-face`
- `@mixin` `@include`
- [@规则](/css/sass/documentation/at-rules.md#@规则)

### 顶级语句

顶级语句只能在样式表的顶层使用，或者嵌套在顶层的 CSS 语句中:

- 加载模块： `@use`
- 引入： `@import`
- 混入定义： `@mixin`
- 函数定义： `@function`

### 其他语句

- 属性声明：`width:100px` 类似这种声明只能在样式规则和某些特定的@规则中使用。PS: 和平常的 css 样式一样
- 继承属性：`@extend` 只能在样式规则中使用

## 表达式