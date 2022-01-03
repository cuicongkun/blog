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