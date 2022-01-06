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

```html
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
<div id="app" class="app" title="app">Hello, Customer!</div>
```

### 命名的优先级顺序

在没有`important`的情况下，无论如何，处在底部的 Css 样式优先级最高。

```html
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
<div class="app2 app app1">Hello, Customer!</div>
```

## 选择器的伪类

类似 `:active` `:hover` `:hover` 等这种伪类请去参考链接中温习掌握 [参考链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

值得注意的是：掌握好`:nth-child(n)` `:lang(值)` 等伪类选择器可以很大程度上提供代码质量：

<CodeGroup>
  <CodeGroupItem title="一般般的写法" active>

```html
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
```

  </CodeGroupItem>
  <CodeGroupItem title="优雅的写法">

```html
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
```

  </CodeGroupItem>
</CodeGroup>

## 继承和层叠

- 继承是指当你 **没有为元素指定属性值时** 该如何计算值
- 层叠是指当你 **为元素指定多个相同属性时** 该如何计算

```html:no-line-numbers
<style>
  body{
    color:green
  }
  .special {
    color: red;
  }
</style>
<div>我继承了body,我属于继承</div>
<div class="special">我虽然继承了body，但通过层叠规则我变成了红色~</div>
```

## 盒子模型

每个盒子由四个部分：`内容` `内边距` `外边距` `边框`

```html
<style>
  div {
    /* width height 是内容 */
    width: 100px;
    height: 100px;
    /* padding 是内边距 */
    padding: 10px;
    /* margin 是外边距   没有被border-box影响*/
    margin: 10px;
    /* border 是边框 */
    border: 10px solid blue;
    /* 
          如果启用box-sizing: border-box; 属性 
          该盒子的padding border 将在设置好的width和height中绘制 
        */
    /* box-sizing: border-box; */
    background: red;
  }
</style>
<div>我是一个盒子</div>
```

## 外边距合并

如果出现外边距合并，都是**大的值覆盖小的值** `(87px > 13px) = 87px`

### 相邻的两个同级元素

```html
<style>
  .app-1 {
    margin-bottom: 13px;
  }
  .app-2 {
    margin-top: 87px;
  }
</style>

<div class="app-1">我是app-1</div>
<div class="app-2">我是app-2，注意我和app-1的距离不是100px，而是87px哦！</div>
```

### 空的元素

```html
<style type="text/css">
  .父级元素 {
    /* 因为子元素的“上”，我的margin-top 被覆盖，变成了 87px */
    margin-top: 13px;
    margin-bottom: 87px;
    background-color: blueviolet;
  }

  .上 {
    margin-top: 87px;
    margin-bottom: 13px;
    background-color: brown;
  }
  .中 {
    /* 
      如果我不是空元素，
      那么“上”的 margin-bottom: : 13px; 
      和“下”的margin-top: 87px; 就都会生效，
      那么“上” “下”的距离就会使100px 
    */
  }
  .下 {
    /* 
      因为“中”为空元素，
      所以“上”的margin-bottom，
      被我覆盖了，
      我和“上”的距离是87px
     */
    margin-top: 87px;
    /* 
      因为“父级元素”的关系，
      我的margin-bottom，
      被“父级元素”覆盖了，
      我和“footer”的距离是87px 
    */
    margin-bottom: 13px;
    background-color: yellow;
  }
</style>

<div style="background-color: red">top</div>
<div class="父级元素">
  <div class="上">上</div>
  <div class="中"></div>
  <div class="下">下</div>
</div>
<div style="background-color: red">footer</div>
```
