# 基本理论

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了，成为国际标准。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。
[来自阮一峰老师的入门教学](https://es6.ruanyifeng.com/)

## let 和 const 命令

### let 命令

#### `let` 命令只在其所在的代码块内有效。

```js
{
  let a = 10;
  var b = 1;
}

a; // a is not defined.
b; // 1
```

```js
//for循环的计数器，就很合适使用 let
for (let i = 0; i < 10; i++) {
  // ...
}

console.log(i);
// ReferenceError: i is not defined
```

#### `let` 不存在变量提升

```js
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

#### 暂时性死区（temporal dead zone，简称 TDZ）

```js
// Example 1:
var tmp = 123;
{
  tmp = "abc"; //ReferenceError: Cannot access 'tmp' before initialization
  let tmp;
}

// Example 2:
function bar(x = y, y = 2) {
  return [x, y];
}
bar(); //ReferenceError: Cannot access 'y' before initialization

// Example 3:
var x = x;
let x = x; // ReferenceError: x is not defined
```

#### `let` 不允许重复声明

```js
{
  let a = 10;
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
```

### const 命令

声明一个**不变化的量**，即`常量`。

#### 一旦使用`const`声明，值就不能改变。

PS: 在使用 `const` 声明 `常量` 时 ，尽量 **使用大写格式书写**，虽然 `const` 允许声明对象可修改其属性，但是我们也不要随意修改, 这样不仅保证了 `常量` 的意义，也会在日后的开发工作中受益匪浅。

```js
const SOME_OBJECT = 3;
SOME_OBJECT = 1; //TypeError: Assignment to constant variable.
```

## 其他声明方法

`function` `import` `class`

## 块级作用域

`let` 块级作用域。

```js
{
  let a = 1;
  console.log(a); // 1
  {
    let a = 2;
    console.log(a); // 2
  }
}
console.log(a); // ReferenceError: a is not defined
```

## 顶层对象

在浏览器环境指的是 `window` 对象，在 Node 指的是 `global` 对象

```js
// 浏览器环境
window.a = 123;
console.log(window.a);

// nodejs
global.a = 123;
console.log(global.a);

// 推荐使用新标准 globalThis
globalThis.a = 123;
console.log(globalThis.a);
```

## 函数和方法

```js
class a {
  // 这个叫做类 a 中的 b 方法
  b() {
    console.log(1);
  }
}

// 这个叫做函数 a
function a() {
  console.log(1);
}

```