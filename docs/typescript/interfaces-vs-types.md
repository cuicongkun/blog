# TypeScript Interfaces vs Types

许多人在使用`type`和`interface`时感到困惑。这是因为它们非常相似，差异很小，所以如果还在初中级水平，那么不必强求，两者之前没有太大区别，使用哪个都是可以的。

```ts
type Milkshake = {
  name: string;
  price: number;
  getIngredients(): string[];
};

interface Milkshake {
  name: string;
  price: number;
  getIngredients(): string[];
}
```

## 个人习惯

对于`基本类型`、`联合类型`和`元组类型`等创建新类型的用例，我选择使用`type`； 而其余所有的用例我都选择使用`interface`

### type

#### 基本类型

```ts
type A = "AA" | "aa" | string;
type B = number;
type C = {
  name: string;
  age: number;
};

//...
```

### 联合类型

```ts
type NavItem = {
  icon: string;
  titile: string;
  badge: number;
  path: string;
};
type Nav = {
  color: string;
  select_color: string;
  list: NavItem[];
};
```

### 元组类型

```ts
type component = [string, string, number];
```
