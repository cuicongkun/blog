# 规则

## 流控制

### @if and @else

@[code](./at-rules/if_and_else.sass)

编译后

@[code](./at-rules/if_and_else.css)

### @each

```sass
$sizes: 40px, 50px, 80px

@each $size in $sizes
  .icon-#{$size}
    font-size: $size
    height: $size
    width: $size

```

编译后

```css
.icon-40px {
  font-size: 40px;
  height: 40px;
  width: 40px;
}

.icon-50px {
  font-size: 50px;
  height: 50px;
  width: 50px;
}

.icon-80px {
  font-size: 80px;
  height: 80px;
  width: 80px;
}
```

#### 键值对

```sass
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f")

@each $name, $glyph in $icons
  .icon-#{$name}:before
    display: inline-block
    font-family: "Icon Font"
    content: $glyph
```

编译后

```css
@charset "UTF-8";
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f112";
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f12e";
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f12f";
}
```

#### 解构

```sass
$icons: "eye" "\f112" 12px, "start" "\f12e" 16px, "stop" "\f12f" 10px




@each $name, $glyph, $size in $icons
  .icon-#{$name}:before
    display: inline-block
    font-family: "Icon Font"
    content: $glyph
    font-size: $size
```

编译后

```css
@charset "UTF-8";
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f112";
  font-size: 12px;
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f12e";
  font-size: 16px;
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f12f";
  font-size: 10px;
}
```

### @for

```sass
$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```

编译后

```css
ul:nth-child(3n + 1) {
  background-color: #004080;
}

ul:nth-child(3n + 2) {
  background-color: #004d99;
}

ul:nth-child(3n + 3) {
  background-color: #0059b3;
}
```

### @while

```sass
@use "sass:math";

/// Divides `$value` by `$ratio` until it's below `$base`.
@function scale-below($value, $base, $ratio: 1.618) {
  @while $value > $base {
    $value: math.div($value, $ratio);
  }
  @return $value;
}

$normal-font-size: 16px;
sup {
  font-size: scale-below(20px, 16px);
}
```

编译后

```css
sup {
  font-size: 12.36094px;
}
```
