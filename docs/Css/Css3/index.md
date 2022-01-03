# Css3

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
