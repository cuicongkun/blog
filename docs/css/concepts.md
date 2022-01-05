# CSS 核心概念

本章整理了进阶资深 Web 设计师所需要掌握的 Css 核心概念点。

## 语法和形式

- 使用`通配选择器` 、`元素选择器 ` 、`类选择器` 、`ID 选择器 ` 、`属性选择器` 来选定元素
- 指定元素特性时，由四个部分构建：`属性（property）` `:` `值（value）` `;`

**例如设置某元素的背景色**
<CodeGroup>
<CodeGroupItem title="通配选择器" active>

```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello, Customer!</title>
    <style>
      * {
        /* background是属性、red是值 */
        background: red;
        /* BACKGROUND: RED; 大小写不敏感,这样书写也是可以的 */
      }
    </style>
  </head>
  <body>
    <div>Hello, Customer!</div>
  </body>
</html>
```

  </CodeGroupItem>

  <CodeGroupItem title="元素选择器">

```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello, Customer!</title>
    <style>
      div {
        /* background是属性、red是值 */
        background: red;
        /* BACKGROUND: RED; 大小写不敏感,这样书写也是可以的 */
      }
    </style>
  </head>
  <body>
    <div>Hello, Customer!</div>
  </body>
</html>
```

  </CodeGroupItem>
   <CodeGroupItem title="类选择器">

```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello, Customer!</title>
    <style>
      .app {
        /* background是属性、red是值 */
        background: red;
        /* BACKGROUND: RED; 大小写不敏感,这样书写也是可以的 */
      }
    </style>
  </head>
  <body>
    <div class="app">Hello, Customer!</div>
  </body>
</html>
```

  </CodeGroupItem>
     <CodeGroupItem title="ID 选择器">

```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello, Customer!</title>
    <style>
      #app {
        /* background是属性、red是值 */
        background: red;
        /* BACKGROUND: RED; 大小写不敏感,这样书写也是可以的 */
      }
    </style>
  </head>
  <body>
    <div id="app">Hello, Customer!</div>
  </body>
</html>
```

  </CodeGroupItem>
       <CodeGroupItem title="属性选择器">

```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello, Customer!</title>
    <style>
      div[title] {
        /* background是属性、red是值 */
        background: red;
        /* BACKGROUND: RED; 大小写不敏感,这样书写也是可以的 */
      }
    </style>
  </head>
  <body>
    <div title="app">Hello, Customer!</div>
  </body>
</html>
```

  </CodeGroupItem>
</CodeGroup>

## 选择器的优先级
实际项目中尽量 **避免出现让浏览器通过优先级来判断哪些属性值与一个元素最为相关** 的设计，因为这样做会让你的项目样式难以维护。

### 类型的优先级顺序

`!important` > `ID 选择器` > `类选择器 ` > `属性选择器` > `元素选择器` > `通配选择器`


```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello, Customer!</title>
    <style>
      * {
        /* background: red!important; */
        background: red;
      }
      div {
        background: grey;
      }
      div[title] {
        background: plum;
      }
      .app {
        background: yellow;
      }
      #app {
        background: green;
      }
    </style>
  </head>
  <body>
    <div id="app" class="app" title="app">Hello, Customer!</div>
  </body>
</html>
```

### 命名的优先级顺序
在没有`important`的情况下，无论如何，处在底部的 Css 样式优先级最高。
```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello, Customer!</title>
    <style>
      .app {
        background: yellow;
      }
      .app1 {
        background: green;
      }
      .app2 {
        background: plum;
      }
      /* .app {
        background: red;
      } */
    </style>
  </head>
  <body>
    <div class="app2 app app1" >Hello, Customer!</div>
  </body>
</html>
```

## 选择器的伪类

类似 `:active` `:hover` `:hover` 等这种伪类请去参考链接中温习掌握 [参考链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

值得注意的是：掌握好`:nth-child(n)` `:lang(值)` 等伪类选择器可以很大程度上提供代码质量：

<CodeGroup>
<CodeGroupItem title="一般般的写法" active>

```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello, Customer!</title>
    <style>
      .li-1 {
        background: red;
      }
      .li-2 {
        background: yellow;
      }
      .li-3 {
        background: blue;
      }
      .li-other {
        background: blueviolet;
      }
      .is-me {
        background: cadetblue;
      }
    </style>
  </head>
  <body>
    <ul>
      <li class="li-1">别人的排名是1</li>
      <li class="li-2">别人的排名是2</li>
      <li class="li-3">别人的排名是3</li>
      <li class="li-other">别人的排名是4</li>
      <li class="li-other">别人的排名是5</li>
      <li class="li-other is-me">我的排名是6</li>
      <li class="li-other">别人的排名是7</li>
      <li class="li-other">别人的排名是8</li>
    </ul>
  </body>
</html>


```

  </CodeGroupItem>

  <CodeGroupItem title="优雅的写法">

```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello, Customer!</title>
    <style>
      li {
        background: blueviolet;
      }
      li:nth-child(1) {
        background: red;
      }
      li:nth-child(2) {
        background: yellow;
      }
      li:nth-child(3) {
        background: blue;
      }
      li:lang(is-me) {
        background: cadetblue;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>别人的排名是1</li>
      <li>别人的排名是2</li>
      <li>别人的排名是3</li>
      <li>别人的排名是4</li>
      <li>别人的排名是5</li>
      <li lang="is-me">我的排名是6</li>
      <li>别人的排名是7</li>
      <li>别人的排名是8</li>
    </ul>
  </body>
</html>

```

  </CodeGroupItem>
</CodeGroup>

## 继承和层叠
- 继承是指当你 **没有为元素指定属性值时** 该如何计算值
- 层叠是指当你 **为元素指定多个相同属性时** 该如何计算
```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello, Customer!</title>
    <style>
      body{
        color:green
      }
      .special {
        color: red;
      }
    </style>
  </head>
  <body>
    <div>我继承了body,我属于继承</div>
    <div class="special">我虽然继承了body，但通过层叠规则我变成了红色~</div>
  </body>
</html>

```