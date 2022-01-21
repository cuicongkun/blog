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

## 通用语句

这些类型的语句可以在 Sass 样式表的任何地方使用：

- 变量声明:  `$var: value`
- [流控制](/css/sass/documentation/at-rules.md#流控制): `@if` `@each` `@for` `@while`
- `@error` `@warn` `@debug`

##  语句

这些语句产生CSS。它们可以在除 a 之外的任何地方使用@function：
@[code](./foo.js)