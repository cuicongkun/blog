# 实用工具函数

## 数字操作

### 生成指定范围随机数

Example: `randomNum(50000,99999)`

<CodeGroup>
  <CodeGroupItem title="js" active>

```js
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
interface RandomNum {
  min: number;
  max: number;
}
function randomNum(props: RandomNum): number {
  const { min, max } = props;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

  </CodeGroupItem>
</CodeGroup>

### 数字千分位分隔

Example: `thousandsSeparator(100000000)`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function thousandsSeparator(n) {
  const N_STRING = n.toString();
  const N_LENGTH = N_STRING.length;
  if (N_LENGTH <= 3) {
    return N_STRING;
  } else {
    const n_remainder = N_LENGTH % 3;
    const thounds_reg = /\d{3}/g;
    if (n_remainder > 0) {
      let N_LEFT_STRING = N_STRING.slice(n_remainder, N_LENGTH)
        .match(thounds_reg)
        .join(",");
      return `${N_STRING.slice(0, n_remainder)},${N_LEFT_STRING}`;
    } else {
      return `${N_STRING.slice(0, N_LENGTH).match(thounds_reg).join(",")}`;
    }
  }
}
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function thousandsSeparator(n: number): string {
  const N_STRING = n.toString();
  const N_LENGTH = N_STRING.length;
  if (N_LENGTH <= 3) {
    return N_STRING;
  } else {
    const n_remainder = N_LENGTH % 3;
    const thounds_reg: RegExp = /\d{3}/g;
    if (n_remainder > 0) {
      let N_LEFT_STRING = N_STRING.slice(n_remainder, N_LENGTH)
        .match(thounds_reg)
        ?.join(",");
      return `${N_STRING.slice(0, n_remainder)},${N_LEFT_STRING}`;
    } else {
      return `${N_STRING.slice(0, N_LENGTH).match(thounds_reg)?.join(",")}`;
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>

## 数组操作

### 数组乱序

Example: `arrScrambling([1,2,3,4,5,6,7,8,9])`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function arrScrambling(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function arrScrambling<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}
console.log(arrScrambling<number>([1, 2, 3, 4, 5, 6, 7]));
console.log(arrScrambling<string>(["a", "b", "c", "d"]));
```

  </CodeGroupItem>
</CodeGroup>

### 数组扁平化

Example: `flatten([1,2,[3]])`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten([1, 2, [3]]));
console.log([1, 2, [3]].flat(Infinity));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function flatten(arr: any[]): any[] {
  let result: any[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
```

  </CodeGroupItem>
</CodeGroup>

### 数组中获取随机数

Example: `flatten([1,2,[3]])`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function getArrayRandomTheOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getArrayRandomTheOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function getArrayRandomTheOne(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getArrayRandomTheOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
```

  </CodeGroupItem>
</CodeGroup>

## 字符串操作

### 生成随机字符串

Example: `randomString(20)`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function randomString(len) {
  let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
  let strLen = chars.length;
  let randomStr = "";
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
}
console.log(randomString(20));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function randomString(len: number): string {
  let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
  let strLen = chars.length;
  let randomStr = "";
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
}
console.log(randomString(20));
```

  </CodeGroupItem>
</CodeGroup>

### 字符串首字母大写

Example: `fistLetterUpper('jim green')`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function fistLetterUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(fistLetterUpper("jim green"));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function fistLetterUpper(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(fistLetterUpper("jim green"));
```

  </CodeGroupItem>
</CodeGroup>

### 手机号中间四位变成 \*\*\*\*

Example: `telFormat(19969665135)`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function telFormat(tel) {
  tel = String(tel);
  return tel.substr(0, 3) + "****" + tel.substr(7);
}
console.log(telFormat(19969665135));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function telFormat(tel: string | number): string {
  tel = String(tel);
  return `${tel.substr(0, 3)}****${tel.substr(7)}`;
}

console.log(telFormat(19969665135));
```

  </CodeGroupItem>
</CodeGroup>

### 驼峰命名转换成下横线`_`命名

Example: `getKebabCase('woDeMaYa')`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function getKebabCase(str) {
  return str.replace(/[A-Z]/g, (item) => {
    return `_${item.toLowerCase()}`;
  });
}
console.log(getKebabCase("woDeMaYa"));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function getKebabCase(str: string): string {
  return str.replace(/[A-Z]/g, (item) => {
    return `_${item.toLowerCase()}`;
  });
}
console.log(getKebabCase("woDeMaYa"));
```

  </CodeGroupItem>
</CodeGroup>

### 下横线`_`命名转换成驼峰命名

Example: `getCamelCase('wo_de_ma_ya')`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function getCamelCase(str) {
  return str.replace(/_([a-z])/g, (_temp, item) => {
    return item.toUpperCase();
  });
}
console.log(getCamelCase("wo_de_ma_ya"));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function getCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_temp, item) => {
    return item.toUpperCase();
  });
}
console.log(getKebabCase("wo_de_ma_ya"));
```

  </CodeGroupItem>
</CodeGroup>

### 全角转换为半角

Example: `toCDB('ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ？！／#＠')`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function toCDB(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 65281 && code <= 65374) {
      result += String.fromCharCode(str.charCodeAt(i) - 65248);
    } else if (code == 12288) {
      result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

console.log(
  toCDB(
    "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ？！／#＠"
  )
);
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function toCDB(str: string): string {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 65281 && code <= 65374) {
      result += String.fromCharCode(str.charCodeAt(i) - 65248);
    } else if (code == 12288) {
      result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

console.log(
  toCDB(
    "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ？！／#＠"
  )
);
```

  </CodeGroupItem>
</CodeGroup>

### 半角转换为全角

Example: `toDBC("abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ?!/#@")`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function toDBC(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 33 && code <= 126) {
      result += String.fromCharCode(str.charCodeAt(i) + 65248);
    } else if (code == 32) {
      result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}
console.log(
  toDBC("abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ?!/#@")
);
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function toDBC(str: string): string {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 33 && code <= 126) {
      result += String.fromCharCode(str.charCodeAt(i) + 65248);
    } else if (code == 32) {
      result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}
console.log(
  toDBC("abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ?!/#@")
);
```

  </CodeGroupItem>
</CodeGroup>

## 格式转化

### 数字转化为大写金额

Example: `digitUppercase(1200)`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function digitUppercase(n) {
  const fraction = ["角", "分"];
  const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  const unit = [
    ["元", "万", "亿"],
    ["", "拾", "佰", "仟"],
  ];
  n = Math.abs(n);
  let s = "";
  for (let i = 0; i < fraction.length; i++) {
    s += (
      digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, "");
  }
  s = s || "整";
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = "";
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
  }
  return s
    .replace(/(零.)*零元/, "元")
    .replace(/(零.)+/g, "零")
    .replace(/^整$/, "零元整");
}

console.log(digitUppercase(1200));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function digitUppercase(n: number): string {
  const fraction = ["角", "分"];
  const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  const unit = [
    ["元", "万", "亿"],
    ["", "拾", "佰", "仟"],
  ];
  n = Math.abs(n);
  let s = "";
  for (let i = 0; i < fraction.length; i++) {
    s += (
      digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, "");
  }
  s = s || "整";
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = "";
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
  }
  return s
    .replace(/(零.)*零元/, "元")
    .replace(/(零.)+/g, "零")
    .replace(/^整$/, "零元整");
}

console.log(digitUppercase(1200));
```

  </CodeGroupItem>
</CodeGroup>

### 数字转化为中文数字

Example: `intToChinese(1200)`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function intToChinese(value) {
  const str = String(value);
  const len = str.length - 1;
  const idxs = [
    "",
    "十",
    "百",
    "千",
    "万",
    "十",
    "百",
    "千",
    "亿",
    "十",
    "百",
    "千",
    "万",
    "十",
    "百",
    "千",
    "亿",
  ];
  const num = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {
    let pos = 0;
    if ($1[0] !== "0") {
      pos = len - idx;
      if (idx == 0 && $1[0] == 1 && idxs[len - idx] == "十") {
        return idxs[len - idx];
      }
      return num[$1[0]] + idxs[len - idx];
    } else {
      let left = len - idx;
      let right = len - idx + $1.length;
      if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
        pos = left - (left % 4);
      }
      if (pos) {
        return idxs[pos] + num[$1[0]];
      } else if (idx + $1.length >= len) {
        return "";
      } else {
        return num[$1[0]];
      }
    }
  });
}
console.log(intToChinese(1200));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function intToChinese(value: number): string {
  const str = String(value);
  const len = str.length - 1;
  const idxs = [
    "",
    "十",
    "百",
    "千",
    "万",
    "十",
    "百",
    "千",
    "亿",
    "十",
    "百",
    "千",
    "万",
    "十",
    "百",
    "千",
    "亿",
  ];
  const num = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {
    let pos = 0;
    if ($1[0] !== "0") {
      pos = len - idx;
      if (idx == 0 && $1[0] == 1 && idxs[len - idx] == "十") {
        return idxs[len - idx];
      }
      return num[$1[0]] + idxs[len - idx];
    } else {
      let left = len - idx;
      let right = len - idx + $1.length;
      if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
        pos = left - (left % 4);
      }
      if (pos) {
        return idxs[pos] + num[$1[0]];
      } else if (idx + $1.length >= len) {
        return "";
      } else {
        return num[$1[0]];
      }
    }
  });
}
console.log(intToChinese(1200));
```

  </CodeGroupItem>
</CodeGroup>

## 操作存储

### loalStorage

#### 存储

Example: `loalStorageSet("temp", 123);`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function loalStorageSet(key, value) {
  if (!key) return;
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
}
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function loalStorageSet(key: string, value: any): void {
  if (!key) return;
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
}
```

  </CodeGroupItem>
</CodeGroup>

#### 获取

Example: `loalStorageSet("temp", 123);`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function loalStorageGet(key) {
  if (!key) return;
  return window.localStorage.getItem(key);
}
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function loalStorageGet(key: string): any {
  if (!key) return;
  return window.localStorage.getItem(key);
}
```

  </CodeGroupItem>
</CodeGroup>

#### 删除

Example: `loalStorageSet("temp", 123);`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function loalStorageRemove(key) {
  if (!key) return;
  window.localStorage.removeItem(key);
}
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function loalStorageRemove(key: string): void {
  if (!key) return;
  window.localStorage.removeItem(key);
}
```

  </CodeGroupItem>
</CodeGroup>

### sessionStorage

#### 存储

Example: `sessionStorageSet("temp", 123);`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function sessionStorageSet(key, value) {
  if (!key) return;
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  window.sessionStorage.setItem(key, value);
}
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function sessionStorageSet(key: string, value: any): void {
  if (!key) return;
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  window.sessionStorage.setItem(key, value);
}
```

  </CodeGroupItem>
</CodeGroup>

#### 获取

Example: `sessionStorageGet("temp");`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function sessionStorageGet(key) {
  if (!key) return;
  return window.sessionStorage.getItem(key);
}
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function sessionStorageGet(key: string): any {
  if (!key) return;
  return window.sessionStorage.getItem(key);
}
```

  </CodeGroupItem>
</CodeGroup>

#### 删除

Example: `sessionStorageRemove("temp");`
<CodeGroup>
<CodeGroupItem title="js" active>

```js
function sessionStorageRemove(key) {
  if (!key) return;
  window.sessionStorage.removeItem(key);
}

```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function sessionStorageRemove(key: string): void {
  if (!key) return;
  window.sessionStorage.removeItem(key);
}
```

  </CodeGroupItem>
</CodeGroup>

# 异常抛出 异步 stringify 运算符