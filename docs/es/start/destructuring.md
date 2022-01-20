# 解构

## 数组

### 解构

如果解构不成功，变量的值就等于 `undefined`

```js
let [a, b, c] = [1, 2, 3];
```

```js
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

let [, , third] = ["foo", "bar", "baz"];
console.log(third); // "baz"

let [x, , y] = [1, 2, 3];
console.log(x); // 1
console.log(y); // 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]
```

### 默认值

当一个数组成员严格等于 `undefined`，默认值才会生效

```js
{
  let [x = 1] = [undefined];
  console.log(x); // 1
}

{
  let [x = 1] = [null];
  console.log(x); // null
}
```

默认值也可以是一个函数

```js
function defaultValue() {
  return 1;
}
let [x = defaultValue()] = [undefined];
console.log(x);
```

## 对象

### 解构

```js
let { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo); // aaa
console.log(bar); // bbb
```

```js
const node = {
  loc: {
    start: {
      line: 1,
      column: 5,
    },
  },
};

let {
  loc,
  loc: { start },
  loc: {
    start: { line },
  },
} = node;
console.log(line); // 1
console.log(loc); // Object {start: Object}
console.log(start); // Object {line: 1, column: 5}
```

也可以解构对象中的函数

```js
const { log } = console;
log("hello"); // hello
```

### 重命名

```js
let { foo: fooooooo } = { foo: "aaa", bar: "bbb" };
console.log(fooooooo); // aaa
```

### 默认值

```js
const { x = 1 } = {};
console.log(x); // 1

function defaultValue() {
  return 1;
}
const { y = defaultValue() } = {};
console.log(y); // 1
```

## 字符串

```js
const [a, b, c, d, e] = "hello";
console.log(a); // h
console.log(b); // e
console.log(c); // l
console.log(d); // l
console.log(e); // o

const { length: len } = "hello";
console.log(len); // 5
```

## 数值和布尔值

```js
let { toString: s } = 123;
//s === Number.prototype.toString;

let { toString: s } = true;
//s === Boolean.prototype.toString;
```

## 函数参数

```js
function add([x, y]) {
  return x + y;
}
console.log(add([1, 2])); // 3

const result = [
  [1, 2],
  [3, 4],
].map(([x, y]) => {
  console.log(`[${x},${y}]`); // [1,2] [3,4]
  return x + y;
});
console.log(result); // [ 3, 7 ]
```
