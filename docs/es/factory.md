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

### 存储 loalStorage

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
function loalStorageSet(key: string, value: any) {
  if (!key) return;
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
}
```

  </CodeGroupItem>
</CodeGroup>

### 获取 localStorage

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

### 删除 localStorage

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
function loalStorageRemove(key: string): any {
  if (!key) return;
  window.localStorage.removeItem(key);
}
```

  </CodeGroupItem>
</CodeGroup>

```js
export const companyTestMap = [
    {
        "code": "ZJS",
        "id": 103,
        "name": "宅急送",
        "reg_mail_no": "^[a-zA-Z0-9]{10}$|^(42|16)[0-9]{8}$|^A[0-9]{12}"
    },
    {
        "code": "SF",
        "id": 505,
        "name": "顺丰速运",
        "reg_mail_no": "^[A-Za-z0-9-]{4,35}$"
    },
    {
        "code": "STO",
        "id": 100,
        "name": "申通快递",
        "reg_mail_no": "^(268|888|588|688|368|468|568|668|768|868|968)[0-9]{9}$|^(11|22|40|268|888|588|688|368|468|568|668|768|868|968)[0-9]{10}$|^(STO)[0-9]{10}$|^(33)[0-9]{11}$|^(4)[0-9]{12}$|^(55)[0-9]{11}$|^(66)[0-9]{11}$|^(77)[0-9]{11}$|^(88)[0-9]{11}$|^(99)[0-9]{11}$"
    },
    {
        "code": "EMS",
        "id": 2,
        "name": "EMS",
        "reg_mail_no": "^[A-Z]{2}[0-9]{9}[A-Z]{2}$|^(10|11)[0-9]{11}$|^(50|51)[0-9]{11}$|^(95|97)[0-9]{11}$"
    },
    {
        "code": "YUNDA",
        "id": 102,
        "name": "韵达快递",
        "reg_mail_no": "^(10|11|12|13|14|15|16|17|19|18|50|55|58|80|88|66|31|77|39)[0-9]{11}$|^[0-9]{13}$"
    },
    {
        "code": "ZTO",
        "id": 500,
        "name": "中通快递",
        "reg_mail_no": "^((010|768|765|778|779|719|828|618|680|518|688|880|660|805|988|628|205|717|718|728|738|761|762|763|701|757|751|359|358|100|200|118|128|689|738|528|852)[0-9]{9})$|^((5711|2008|2009|2010|2013)[0-9]{8})$|^((91|92|93|94|95|98|36|68|39|50|53|37)[0-9]{10})$|^(4)[0-9]{11}$|^(90)[0-9]{10}$|^(120)[0-9]{9}$|^(780)[0-9]{9}$|^(881)[0-9]{9}$|^(882|885)[0-9]{9}$|^(54|55|56)[0-9]{10}$|^(960)[0-9]{9}$|^(665|666)[0-9]{9}$|^(63)[0-9]{10}$|^(64)[0-9]{10}$|^(72)[0-9]{10}$|^2[1-9][0-9]{10}$"
    },
    {
        "code": "HTKY",
        "id": 502,
        "name": "百世快递",
        "reg_mail_no": "^((A|B|D|E)[0-9]{12})$|^(BXA[0-9]{10})$|^(K8[0-9]{11})$|^(02[0-9]{11})$|^(000[0-9]{10})$|^(C0000[0-9]{8})$|^((21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|61|63)[0-9]{10})$|^((50|51)[0-9]{12})$|^7[0-9]{13}$|^6[0-9]{13}$|^58[0-9]{14}$"
    },
    {
        "code": "YTO",
        "id": 101,
        "name": "圆通速递",
        "reg_mail_no": "^[A-Za-z0-9]{2}[0-9]{10}$|^[A-Za-z0-9]{2}[0-9]{8}$|^[6-9][0-9]{17}$|^[DD]{2}[8-9][0-9]{15}$|^[Y][0-9]{12}$"
    },
    {
        "code": "QFKD",
        "id": 1216,
        "name": "全峰快递",
        "reg_mail_no": "^[0-6|9][0-9]{11}$|^[7][0-8][0-9]{10}$|^[0-9]{15}$|^[S][0-9]{9,11}(-|)P[0-9]{1,2}$|^[0-9]{13}$|^[8][0,2-9][0,2-9][0-9]{9}$|^[8][1][0,2-9][0-9]{9}$|^[8][0,2-9][0-9]{10}$|^[8][1][1][0][8][9][0-9]{6}$"
    },
    {
        "code": "TTKDEX",
        "id": 504,
        "name": "天天快递",
        "reg_mail_no": "(66|77|88|(5(5|6|8)))\d{10}|(99(5|8))\d{9}|TT(66|88|99|(5(6|7)))\d{11}"
    },
    {
        "code": "EYB",
        "id": 3,
        "name": "EMS经济快递",
        "reg_mail_no": "^[A-Z]{2}[0-9]{9}[A-Z]{2}$|^(10|11)[0-9]{11}$|^(50|51)[0-9]{11}$|^(95|97)[0-9]{11}$"
    },
    {
        "code": "UC",
        "id": 1207,
        "name": "优速快递",
        "reg_mail_no": "^VIP[0-9]{9}|V[0-9]{11}|[0-9]{12}$|^LBX[0-9]{15}-[2-9AZ]{1}-[1-9A-Z]{1}$|^(9001)[0-9]{8}$"
    },
    {
        "code": "DBKD",
        "id": 5000000110730,
        "name": "德邦快递",
        "reg_mail_no": "^[0-9]{8,10}$|^\d{15,}[-\d]+$"
    },
    {
        "code": "GTO",
        "id": 200143,
        "name": "国通快递",
        "reg_mail_no": "^(3(([0-6]|[8-9])\d{8})|((2|4|5|6)\d{9})|(7(?![0|1|2|3|4|5|7|8|9])\d{9})|(8(?![2-9])\d{9})|(2|4)\d{11})$"
    },
    {
        "code": "SURE",
        "id": 201174,
        "name": "速尔快运",
        "reg_mail_no": "^(SUR)[0-9]{12}$|^[0-9]{12}$"
    },
    {
        "code": "FEDEX",
        "id": 106,
        "name": "联邦快递",
        "reg_mail_no": "^[0-9]{12}$"
    },
    {
        "code": "SHQ",
        "id": 108,
        "name": "华强物流",
        "reg_mail_no": "^[A-Za-z0-9]*[0|2|4|6|8]$"
    },
    {
        "code": "UAPEX",
        "id": 1259,
        "name": "全一快递",
        "reg_mail_no": "^\d{12}|\d{11}$"
    },
    {
        "code": "HOAU",
        "id": 1191,
        "name": "天地华宇",
        "reg_mail_no": "^[A-Za-z0-9]{8,9}$"
    },
    {
        "code": "BEST",
        "id": 105,
        "name": "百世物流",
        "reg_mail_no": "^[0-9]{11,12}$"
    },
    {
        "code": "LB",
        "id": 1195,
        "name": "龙邦速递",
        "reg_mail_no": "^[0-9]{12}$|^LBX[0-9]{15}-[2-9AZ]{1}-[1-9A-Z]{1}$|^[0-9]{15}$|^[0-9]{15}-[1-9A-Z]{1}-[1-9A-Z]{1}$"
    },
    {
        "code": "XB",
        "id": 1186,
        "name": "新邦物流",
        "reg_mail_no": "^[0-9]{8}$|^[0-9]{10}$"
    },
    {
        "code": "FAST",
        "id": 1204,
        "name": "快捷快递",
        "reg_mail_no": "^(?!440)(?!510)(?!520)(?!5231)([0-9]{9,13})$|^(P330[0-9]{8})$|^(D[0-9]{11})$|^(319)[0-9]{11}$|^(56)[0-9]{10}$|^(536)[0-9]{9}$"
    },
    {
        "code": "NEDA",
        "id": 1192,
        "name": "能达速递",
        "reg_mail_no": "^((88|)[0-9]{10})$|^((1|2|3|5|)[0-9]{9})$|^(90000[0-9]{7})$"
    },
    {
        "code": "BJRFD-001",
        "id": 100034107,
        "name": "如风达配送",
        "reg_mail_no": "^[\x21-\x7e]{1,100}$"
    },
    {
        "code": "DBL",
        "id": 107,
        "name": "德邦物流",
        "reg_mail_no": "^[0-9]{8,10}$|^\d{15,}[-\d]+$"
    },
    {
        "code": "YCT",
        "id": 1185,
        "name": "黑猫宅急便",
        "reg_mail_no": "^[0-9]{12}$"
    },
    {
        "code": "LTS",
        "id": 1214,
        "name": "联昊通",
        "reg_mail_no": "^[0-9]{9,12}$"
    },
    {
        "code": "XFWL",
        "id": 202855,
        "name": "信丰物流",
        "reg_mail_no": "^130[0-9]{9}|13[7-9]{1}[0-9]{9}|18[8-9]{1}[0-9]{9}$"
    },
    {
        "code": "ESB",
        "id": 200740,
        "name": "E速宝",
        "reg_mail_no": "[0-9a-zA-Z-]{5,20}"
    },
    {
        "code": "GDEMS",
        "id": 1269,
        "name": "广东EMS",
        "reg_mail_no": "^[a-zA-Z]{2}[0-9]{9}[a-zA-Z]{2}$"
    },
    {
        "code": "BESTQJT",
        "id": 105031,
        "name": "百世快运"
    },
    {
        "code": "POSTB",
        "id": 200734,
        "name": "邮政快递包裹",
        "reg_mail_no": "^([GA]|[KQ]|[PH]){2}[0-9]{9}([2-5][0-9]|[1][1-9]|[6][0-5])$|^[99]{2}[0-9]{11}$|^[96]{2}[0-9]{11}$|^[98]{2}[0-9]{11}$"
    },
    {
        "code": "QRT",
        "id": 1208,
        "name": "增益速递",
        "reg_mail_no": "^[0-9]{12,13}$"
    }
]
```