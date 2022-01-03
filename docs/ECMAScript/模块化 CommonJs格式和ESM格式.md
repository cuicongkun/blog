# 模块化 CommonJs、ESM 格式介绍

CommonJs模块化格式主要针对服务端， nodejs 就是该规范的实践者。
实际使用时，使用 `module.exports` 定义当前模块对外输出的接口，使用 `require` 加载模块。

本地有node环境下，新建`export.js`
```js
// 定义模块 
var basicNum = 0;
function add(a, b) {
return a + b;
}
module.exports = { //在这里写上需要向外暴露的函数、变量
add: add,
basicNum: basicNum
}

/** 必须加./路径，不加的话只会去 node_modules 文件找 **/
// 引用自定义的模块时，参数包含路径，可省略.js
var math = require('./math');
math.add(2, 5);

// 引用核心模块时，不需要带路径
var http = require('http');
http.createService(...).listen(3000);
```

ECMA Script Module(ESM)是在 ES6 语言层面提出的一种模块化标准。主要针对浏览器端
