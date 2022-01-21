# 起步

Sass 具有变量、嵌套、混合、继承等优秀的特性，让 CSS 代码更易于阅读和维护！

## 变量 Variables

```sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

## 嵌套 Nesting

```sass
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none

```

## 模块 Modules

可以利用 sass 将项目样式模块化，模块化的文件可以将其命名为 `_partial.sass`，使用 `@use` 规则引入

PS: `下划线 _` 让 Sass 知道该文件只是部分文件，不应将其生成为 CSS 文件

```sass
// _base.sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

```sass
// styles.sass
@use 'base'

.inverse
  background-color: base.$primary-color
  color: white
```

## 混合 Mixins

使用 `mixin` 可以创建需要多次使用的**CSS 声明**，合理使用可以帮助 `Sass代码` 更加整洁、容易阅读

PS: 还可以传入参数 让 `mixin` 更加灵活

```sass
@mixin theme($theme: DarkGray)
  background: $theme
  box-shadow: 0 0 1px rgba($theme, .25)
  color: #fff


.info
  @include theme

.alert
  @include theme($theme: DarkRed)

.success
  @include theme($theme: DarkGreen)
```

## 扩展/继承 Extend/Inheritance

使用 `%` 声明扩展类、 `@extend` 继承扩展类

PS: Sass 很聪明，合理使用**扩展和继承**有助于保持编译后的 CSS 整洁。

<CodeGroup>
<CodeGroupItem title="sass" active>

```sass
/* 此扩展已被继承，所以编译后会被打印. */
%message-shared
  border: 1px solid #ccc
  padding: 10px
  color: #333


/* 此扩展没有被继承，所以不会被打印. */
%equal-heights
  display: flex
  flex-wrap: wrap

.message
  @extend %message-shared


.success
  @extend %message-shared
  border-color: green


.error
  @extend %message-shared
  border-color: red


.warning
  @extend %message-shared
  border-color: yellow

```

  </CodeGroupItem>
  <CodeGroupItem title="css">

```css
.message,
.success,
.error,
.warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

  </CodeGroupItem>
</CodeGroup>

## 运算符 Operators

Sass 有一些标准的数学运算符，例如 `+`  `-` `\` `*` `math.div()` 和 `%`

```sass
@use "sass:math"

.container
  display: flex

article[role="main"]
  width: math.div(600px, 960px) * 100%

aside[role="complementary"]
  width: math.div(300px, 960px) * 100%
  margin-left: auto
```
