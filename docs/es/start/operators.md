# 运算符

## 一元运算符

一元运算符只有一个参数，即要操作的对象或值。

### delete

```js
cosnt o = new Object({
  name: 'Cui'
});
o.name = "David";
alert(o.name);	//输出 "David"
delete o.name;
alert(o.name);	//输出 "undefined"
```