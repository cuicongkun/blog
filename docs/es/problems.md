# 你真的会用 ES6 吗？

随着 ECMA 的规范不断更新，新标准的语法几乎全部的作用方向都是在精简代码量，增进可读性方面。在项目开发中，不要把项目做成一次性产品，做完了连自己都难以维护，要对自己的代码进行评审，看看你的代码是否拥有良好的可读性，和易维护性。

ps：ES5 之后的 JS 语法统称 ES6！！！

## 关于取值

取值在程序中非常常见，比如从对象 obj 中取值:

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
const list = obj.list_xxxx;
const total = obj.total;
const page = obj.page;
const limit = obj.limit;
const page_count = Math.ceil(total / limit);
// 这么取值不对吗?还有谁 ????
console.log(list);
console.log(total);
console.log(page);
console.log(limit);
console.log(page_count);
```

**能不能优雅一点？ yes 可以的!**

注意解构的对象不能为`undefined`、`null`。在不确定被解构的对象是否有效时，要给被解构的对象一个默认值，例如示例第 8 行结尾的`|| {}`。

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
const { list_xxxx: list, total, page, limit } = obj || {};
const page_count = Math.ceil(total / limit);
console.log(list);
console.log(total);
console.log(page);
console.log(limit);
console.log(page_count);
```

## 合并数据

比如合并两个数组或者合并两个对象。

```js
const a = [1, 2, 3];
const b = [1, 5, 6];
const c = a.concat(b);
// 这么合并不对吗?还有谁 ????

const obj1 = {
  a: 1,
};
const obj1 = {
  b: 1,
};
const obj = Object.assgin({}, obj1, obj2);
// 这么合并不对吗?还有谁 ????
```

**能不能优雅一点？ yes 可以的!**

```js
const a = [1, 2, 3];
const b = [1, 5, 6];
const c = [...a, ...b]; // 扩展运算符了解下
const c = [...new Set([...a, ...b])]; // 顺便去重喽~

const obj1 = {
  a: 1,
};
const obj2 = {
  b: 1,
};
const obj = { ...obj1, ...obj2 };
```

## 拼接字符串

```js
const name = "小明";
const score = 59;
let result = "";
if (score > 60) {
  result = `${name}的考试成绩及格`;
} else {
  result = `${name}的考试成绩不及格`;
}
console.log(result);
```

**能不能优雅一点？ yes 可以的!**

```js
const name = "小明";
const score = 59;
const result = `${name}的考试成绩${score > 60 ? "及格" : "不及格"}`;
```

## if 中判断条件

```js
if(
    type == 1 ||
    type == 2 ||
    type == 3 ||
    type == 4 ||
){
   //...
}
```

**能不能优雅一点？ yes 可以的!**

```js
const condition = [1, 2, 3, 4];

if (condition.includes(type)) {
  //...
}
```

## 列表搜索

```js
const a = [1, 2, 3, 4, 5];
const result = a.filter((item) => {
  return item === 3;
});
```

**能不能优雅一点？ yes 可以的!**

```js
const a = [1, 2, 3, 4, 5];
const result = a.find((item) => {
  return item === 3;
});
```

## 扁平化数组

```js
const deps = {
  采购部: [1, 2, 3],
  人事部: [5, 8, 12],
  行政部: [5, 14, 79],
  运输部: [3, 64, 105],
};
let member = [];
for (let item in deps) {
  const value = deps[item];
  if (Array.isArray(value)) {
    member = [...member, ...value];
  }
}
member = [...new Set(member)];
```

**能不能优雅一点？ yes 可以的!**

```js
const deps = {
  采购部: [1, 2, 3],
  人事部: [5, 8, 12],
  行政部: [5, 14, 79],
  运输部: [3, 64, 105],
};
let member = Object.values(deps).flat(Infinity);
```

## 获取对象属性值

```js
const name = obj && obj.name;
```

**能不能优雅一点？ yes 可以的!**

```js
const name = obj?.name;
```

## 添加对象属性

```js
let obj = {};
let index = 1;
let key = `topic${index}`;
obj[key] = "话题内容";
```

**能不能优雅一点？ yes 可以的!**

```js
let obj = {};
let index = 1;
obj[`topic${index}`] = "话题内容";
```

## 输入非空

```js
if (value !== null && value !== undefined && value !== "") {
  //...
}
```

**能不能优雅一点？ yes 可以的!**

```js
if (value ?? "" !== "") {
  //...
}
```

## 异步函数

```js
const fn1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 300);
  });
};
const fn2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 600);
  });
};
const fn = () => {
  fn1().then((res1) => {
    console.log(res1); // 1
    fn2().then((res2) => {
      console.log(res2);
    });
  });
};
```

**能不能优雅一点？ yes 可以的!**

```js
const fn = async () => {
  const res1 = await fn1();
  const res2 = await fn2();
  console.log(res1); // 1
  console.log(res2); // 2
};
// 或者
const fn = () => {
  Promise.all([fn1(), fn2()]).then((res) => {
    console.log(res); // [1,2]
  });
};
```
