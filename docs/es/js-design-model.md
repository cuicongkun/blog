# 前端设计模式

## 代理模式

### 保护代理

### 虚拟代理

```html
<body>
  <input type="checkbox" id="1"></input>1
  <input type="checkbox" id="2"></input>2
  <input type="checkbox" id="3"></input>3
  <input type="checkbox" id="4"></input>4
  <input type="checkbox" id="5"></input>5
  <input type="checkbox" id="6"></input>6
  <input type="checkbox" id="7"></input>7
  <input type="checkbox" id="8"></input>8
  <input type="checkbox" id="9"></input>9
</body>
```
```js
var synchronousFile = function () {
  console.log("开始同步文件,id为：" + id);
};
var checkbox = document.getElementsByTagName("input");
for (var i = 0, c; (c = checkbox[i++]); ) {
  c.onclick = function () {
    if (this.checked === true) {
      synchronousFile(this.id);
    }
  };
}
```
```js
var synchronousFile = function () {
  console.log("开始同步文件,id为：" + id);
};

var proxySynchronousFile = (function () {
  var cache = [], // 保存一段时间内需要同步的ID
    timer; //定时器
  return function (id) {
    cache.push(id);
    if (timer) {
      // 保证不会覆盖已启动的定时器
      return;
    }
    timer = setTimeout(function () {
      synchronousFile(cache.join(",")); // 2秒后向本体发送需要同步的ID集合
      clearTimeout(timer); // 清空定时器
      timer = null;
      cache.length = 0; //清空ID集合
    }, 2000);
  };
})();

```
### 缓存代理

```js
var mult = function () {
  console.log("开始计算乘积");
  var a = 1;
  for (let i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};
mult(2, 3);
mult(2, 3, 4);
```
```js 
var proxyMult = (function () {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ", ");
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = mult.apply(this.arguments));
  };
})();
proxyMult(1, 2, 3, 4);
proxyMult(1, 2, 3, 4);

```
```js
const getFIb = (number) => {
  if (number <= 2) {
    return 1;
  } else {
    return gitFib(number - 1) + getFIb(number - 2);
  }
};

const getCacheProxy = (fn, cache = new Map()) => {
  return new Proxy(fn, {
    apply(target, context, args) {
      const argsString = args.join(" ");
      if (cache.has(argsString)) {
        //如果有缓存，直接返回缓存数据 console.log
        return cache.get(argsString);
      }

      const result = fn(...args);
      cache.set(argsString, result);
      return result;
    },
  });
};

const getFIbProxy = getCacheProxy(getFIb)
getFIbProxy(40)
```

## 前端对象池技术
### 池化技术
池化技术（Pool）是一种编程技巧，在请求量大时可以明显优化应用性能，降低系统资源开销
池化技术应用广泛，如内存池，线程池，连接池等等
数据库连接池、HTTP连接池、Redis连接池

#### 地图 tooltip例子
```js
var tooltipFactory = (function () {
  var toolTipPool = [];
  return {
    create: function () {
      if (!toolTipPool.length) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        return div;
      } else {
        return toolTipPool.pop();
      }
    },
    recover: function (tooltipDom) {
      return toolTipPool.push(tooltipDom);
    },
  };
})();

// 第一次搜索
var divArr = [];
var tooltipArr = ["A", "B"];
for (let i = 0; i < tooltipArr.length; i++) {
  let tooltipDiv = tooltipFactory.create();
  tooltipDiv.innerHTML = tooltipArr[i];
  div.Arr.push(tooltipDiv);
}

// 第2次搜索
for (let i = 0; i < divArr.length; i++) {
  tooltipFactory.recover(divArr[i]);
}
var tooltipArr2 = ["C", "D", "E", "F"];
for (let i = 0; i < tooltipArr2.length; i++) {
  let tooltipDiv = tooltipFactory.create();
  tooltipDiv.innerHTML = tooltipArr[i];
}

// 通用搜索并渲染
var divArr = [];
var searchAndRender = () => {
  for (let i = 0; i < divArr.length; i++) {
    tooltipFactory.recover(divArr[i]);
  }
  var tooltipArr2 = apiResArr || []; //请求接口，返回接口
  for (let i = 0; i < tooltipArr2.length; i++) {
    let tooltipDiv = tooltipFactory.create();
    tooltipDiv.innerHTML = tooltipArr[i];
    divArr.push(tooltipDiv);
  }
};


```

```
对象池（ObjectPool）
1.初始化对象池（initObjectPool）
2.分配对象 (AllocObject)
3.回收对象（freeObject）
```

## 装饰函数使JS满足开闭原则
js设计模式之装饰器模式

```js
var a = () => {
  alert(1);
};
// 要新增一个alert(2)
var a = () => {
  alert(1);
  alert(2);
};

// 开闭原则
// 保存原引用的方式就可以扩展某个函数
var _a = a;
a = () => {
  _a();
  alert(2);
};

```

### 装饰函数应用场景

```js
//别人的代码
window.onload = () => {
  alert(1);
};

// 你的文件
var _onload = window.onload || function () {};
window.onload = () => {
  _onload();
  alert(2);
};
```
装饰函数的问题
- 维护中间变量
- this被劫持

this被劫持的例子
```html
<button id="button"></button>
<script>
var _getElementById = document.getElementById;
document.getElementById = (id) => {
    alert(1)
    return _getElementById(id);
    //　解决
    //　return __getElementById.apply(document, arguments)
}
var button = document.getElementById('button')
// Uncaught TypeError: Illegal invocation 为什么？


</script>
```


完美的方法给函数动态增加功能
AOP编程 ？？？

```js
const username = document.getElementById("name");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const handleSubmit = () => {
  if (username.value === "") {
    return alert("用户名不能为空");
  }
  if (password.value === "") {
    return alert("密码不能为空");
  }
  const params = {
    username: username.value,
    password: password.value,
  };
  ajax("xxxx", params);
};
submitBtn.onclick = handleSubmit;
```
第二个版本
```js
const validate = () => {
  if (username.value === "") {
    alert("用户名不能为空");
    return false;
  }
  if (password.value === "") {
    alert("密码不能为空");
    return false;
  }
  return true;
};

const handleSubmit = () => {
  if (validate === false) {
    return;
  }
  const params = {
    username: username.value,
    password: password.value,
  };
  ajax("xxxx", params);
};

```
before / after 函数
```js
// 上期的alert 例子
Function.prototype.before = function (beforeFn) {
  const self = this;
  return function () {
    beforeFn.apply(this, arguments);
    return self.apply(this, arguments);
  };
};
Function.prototype.after = function (afterFn) {
  const self = this;
  return function () {
    const result = self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return result;
  };
};
document.getElementById = document.getElementById.before(function () {
  alert(1);
});
const button = document.getElementById("button");
console.log(button);

//不污染原型的方式

const before = function (fn, beforeFn) {
  return function () {
    beforeFn.apply(this, arguments);
    return fn.apply(this, arguments);
  };
};
var a = function () {
  alert(2);
};
a = before(a, function () {
  alert(1);
});
a();

```
```js
Function.prototype.before = function (beforeFn) {
  const self = this;
  return function () {
    if (beforeFn.apply(this, arguments) === false) {
      return;
    }
    return self.apply(this, arguments);
  };
};

submitBtn.onclick = handleSubmit.before(validate);
```

装饰器模式应用场景
- 数据上报
- 请求公共参数
- localStorage设置过期时间
- 路由守卫


## 代码如何重构

```js
//单一条件优化;
const getOwner = (pjtName) => {
  if (pjtName === "项目A") {
    return "张三";
  } else if (pjtName === "项目B") {
    return "李四";
  } else if (pjtName === "项目C") {
    return "王五";
  } else {
    return "小马哥";
  }
};
const getOwner2 = (pjtName) => {
  const map = {
    项目A: "张三",
    项目B: "李四",
    项目C: "王五",
  };
  return map[pjtName] ? map[pjtName] : "小马哥";
};

const getImg = (res) => {
  if (res.type === 0) {
    //未中奖
    return "pic1";
  }
  if (res.type === 1 && res.count === 6.6) {
    //现金
    return "pic2";
  }

  if (res.type === 1 && res.count === 8.8) {
    return "pic3";
  }
  if (res.type === 2 && res.count === 1) {
    //会员卡
    return "pic4";
  }
  if (res.type === 2 && res.count === 3) {
    return "pic5";
  }
  if (res.type === 2 && res.count === 5) {
    return "pic6";
  }
  if (res.type === 2 && res.count === 31) {
    return "pic7";
  }
  if (res.type === 2 && res.count === 365) {
    return "pic8";
  }
  if (res.type === 3) {
    //优惠券
    return "pic9";
  }
};

const refactorGetImg = (res) => {
  const arr = [
    [0, false, "pic1"],
    [1, 6.6, "pic2"],
    [1, 8.8, "pic3"],
    [2, 1, "pic4"],
    [2, 3, "pic5"],
    [2, 5, "pic6"],
    [2, 31, "pic7"],
    [2, 365, "pic8"],
    [3, false, "pic9"],
  ];
  return arr.filter((item) => {
    return (
      res.type === item[0] &&
      (res.count === item[1] || !!res.count === !!item[1])
    );
  })[0][2];
};



```

## 惰性模式
```js
var AddEvent = function (dom, type, fn) {
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent("on" + type, fn);
  } else {
    dom["on" + type] = fn;
  }
};

var AddEvent = (function (dom, type, fn) {
  if (dom.addEventListener) {
    return function (dom, type, fn) {
      dom.addEventListener(type, fn, false);
    };
  } else if (dom.attachEvent) {
    return function (dom, type, fn) {
      dom.attachEvent("on" + type, fn);
    };
  } else {
    return function (dom, type, fn) {
      dom["on" + type] = fn;
    };
  }
})();

var AddEvent = function (dom, type, fn) {
  if (dom.addEventListener) {
    AddEvent = function (dom, type, fn) {
      dom.addEventListener(type, fn, false);
    };
  } else if (dom.attachEvent) {
    AddEvent = function (dom, type, fn) {
      dom.attachEvent("on" + type, fn);
    };
  } else {
    AddEvent = function (dom, type, fn) {
      dom["on" + type] = fn;
    };
  }
  AddEvent(dom, type, fn);
};

```

## 约书亚树原则