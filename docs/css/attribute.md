# Css 珍藏属性

### text-rendering

::: tip
该属性是 SVG 的属性而不是标准的 CSS 属性。但是 Gecko（Firefox） 和 Webkit（Chrome、Safari） 内核的浏览器允许该属性在 Windows、Mac OS 和 Linux 操作系统中应用于 HTML 和 XML 内容。
:::

- 语法：

  ```css
  /* Keyword values */
  text-rendering: auto;
  text-rendering: optimizeSpeed;
  text-rendering: optimizeLegibility;
  text-rendering: geometricPrecision;

  /* Global values */
  text-rendering: inherit;
  text-rendering: initial;
  text-rendering: unset;
  ```

- 值： `auto` `optimizeSpeed` `optimizeLegibility` `geometricPrecision`

- 详情：

  **文本渲染**: CSS 属性定义浏览器渲染引擎如何渲染字体。浏览器会在速度、清晰度、几何精度之间进行权衡。

  一个视觉上很明显的效果是，`optimizeLegibility` 属性值会在某些字体（比如，微软的 Calibri，Candara，Constantia 和 Corbel 或者 DejaVu 系列字体）小于 20px 时把有些相邻字符连接起来（ligatures，比如，ff、fi、fl 等，效果见下面的 LiveExample) 。

- 参考：
  - [Web 开发技术>CSS（层叠样式表）>文本渲染](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-rendering)

### font-smooth

- 语法：

  ```css
  body {
    /* 推荐配合 text-rendering 使用 增强应用整体视觉效果 */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ```

- 详情：

**字体平滑**: font-smooth CSS 属性用来控制字体渲染时的平滑效果。

- 参考：
  - [Web 开发技术>CSS（层叠样式表）>字体平滑](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-smooth)

## 性能优化

### contain

- 语法：

```css
 {
  contain: none;
}
```

- 值：`none` `strict` `content` `size` `layout` `style` `paint`
- 详情：

`contain` 属性允许开发者声明当前元素和它的内容尽可能的独立于 DOM 树的其他部分。这使得浏览器在重新计算布局、样式、绘图、大小或这四项的组合时，只影响到有限的 DOM 区域，而不是整个页面，可以有效改善性能。

这个属性在包含大量独立组件的页面非常实用，它可以防止某个小部件的 CSS 规则改变对页面上的其他东西造成影响。

- 详解：
  - [Css 性能优化 - contain](https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain)
- 参考：

  - [Web 开发技术>CSS（层叠样式表）> contain](https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain)

  ### content-visibility

  ### contain-intrinsic-size

  ### will-change

  ## text-align-last

  - 语法：

```html
<style>
  .duiqi {
    display: inline-block;
    width: 100px;
    /* 两端对齐，很好用 */
    text-align-last: justify;
  }
</style>
<div class="app">
  <ul>
    <li><span class="duiqi">我的金币：</span>100</li>
    <li><span class="duiqi">金币：</span>100</li>
    <li><span class="duiqi">贡献值：</span>100</li>
  </ul>
</div>
```

- 值：`auto` `left` `right` `center` `justify` `start` `end` `initial` `inherit`
- 详情：

描述的是一段文本中最后一行在被强制换行之前的对齐规则。

- 参考：

  - [Web 开发技术>CSS（层叠样式表）> text-align-last](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align-last)
