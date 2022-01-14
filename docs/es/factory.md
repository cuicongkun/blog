# 实用工具函数
## 数字操作
### 生成指定范围随机数
Example: `randomNum(50000,99999)`

<CodeGroup>
  <CodeGroupItem title="js" active>

```js
export function randomNum(min, max) {
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
export function randomNum(props: RandomNum): number {
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
