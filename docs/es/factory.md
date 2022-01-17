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
      const thounds_reg = /\d{3}/g
      if (n_remainder > 0) {
        let N_LEFT_STRING = N_STRING.slice(n_remainder, N_LENGTH).match(thounds_reg).join(",")
        return `${N_STRING.slice(0, n_remainder)},${N_LEFT_STRING}`
      } else {
        return `${N_STRING.slice(0, N_LENGTH).match(thounds_reg).join(",")}`
      }
    }
}
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function thousandsSeparator(n:number): string {
  const N_STRING = n.toString();
  const N_LENGTH = N_STRING.length;
  if (N_LENGTH <= 3) {
    return N_STRING;
  } else {
    const n_remainder = N_LENGTH % 3;
    const thounds_reg: RegExp = /\d{3}/g
    if (n_remainder > 0) {
      let N_LEFT_STRING = N_STRING.slice(n_remainder, N_LENGTH).match(thounds_reg)?.join(",")
      return `${N_STRING.slice(0, n_remainder)},${N_LEFT_STRING}`
    } else {
      return `${N_STRING.slice(0, N_LENGTH).match(thounds_reg)?.join(",")}`
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
function arrScrambling<T>(arr:T[]):T[] {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}
console.log(arrScrambling<number>([1, 2, 3, 4, 5, 6, 7]))
console.log(arrScrambling<string>(['a','b','c','d']))
```

  </CodeGroupItem>
</CodeGroup>

### 数组扁平化
Example: `flatten([1,2,[3]])`
<CodeGroup>
  <CodeGroupItem title="js" active>

```js
function flatten (arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten([1,2,[3]]));
console.log([1,2,[3]].flat(Infinity));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function flatten (arr:any[]):any[] {
  let result:any[]=[];
  for(let i:number = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
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
console.log(getArrayRandomTheOne([1,2,3,4,5,6,7,8,9,10]))
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function getArrayRandomTheOne(arr:any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getArrayRandomTheOne([1,2,3,4,5,6,7,8,9,10]))
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
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
    let strLen = chars.length;
    let randomStr = '';
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
function randomString(len:number):string {
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
    let strLen = chars.length;
    let randomStr = '';
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
function fistLetterUpper (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(fistLetterUpper('jim green'));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function fistLetterUpper (str:string):string {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(fistLetterUpper('jim green'));
```
  </CodeGroupItem>
</CodeGroup>

### 手机号中间四位变成 ****
Example: `telFormat(19969665135)`
<CodeGroup>
  <CodeGroupItem title="js" active>

```js
function telFormat (tel) {
  tel = String(tel); 
  return tel.substr(0,3) + "****" + tel.substr(7);
};
console.log(telFormat(19969665135))
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function telFormat(tel: string | number): string {
  tel = String(tel);
  return `${tel.substr(0, 3)}****${tel.substr(7)}`;
};

console.log(telFormat(19969665135))
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
      return item.toUpperCase()
  });
}
console.log(getCamelCase("wo_de_ma_ya"));
```

  </CodeGroupItem>
  <CodeGroupItem title="ts">

```ts
function getCamelCase(str:string):string {
  return str.replace(/_([a-z])/g, (_temp, item) => {
      return item.toUpperCase()
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
function toCDB(str:string):string {
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
function toDBC(str:string):string {
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