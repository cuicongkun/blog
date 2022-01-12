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
