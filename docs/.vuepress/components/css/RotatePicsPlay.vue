<template>
  <div class="_area">
    <div class="rotate" @click="aa">
      <div class="rotate-img">{{ ddd }}</div>
      <div class="rotate-img">2</div>
      <div class="rotate-img">3</div>
      <div class="rotate-img">4</div>
      <div class="rotate-img">5</div>
      <div class="rotate-img">6</div>
      <div class="rotate-img">7</div>
      <div class="rotate-img">8</div>
    </div>
    <ul>
      <li style="background-color: #666;"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
var x = 0;
var index = 0;
var timer;
var box = document.getElementsByClassName("box")[0];
var li = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
//滚动函数
function roll() {
  x = x - 45;
  index = (index == 7) ? 0 : (index + 1);
  for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "#000";
  }
  li[index].style.backgroundColor = "#666";
  box.style.transform = "rotateX(-8deg) rotateY(" + x + "deg)";
}
//切换页面的时候调用(切换页面时本页面还在计时,防止切换页面回来时瞬间快速滚动。)
var hiddenProperty = 'hidden' in document ? 'hidden' :
  'webkitHidden' in document ? 'webkitHidden' :
    'mozHidden' in document ? 'mozHidden' :
      null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
//替换hiddenProperty中的hidden(忽略大小写即Hidden也会被替换形成webkitvisibilitychange)
var onVisibilityChange = function () {
  if (!document[hiddenProperty]) {
    timer = setInterval(roll, 2000);
  } else {

    clearInterval(timer);
  }
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);

//点击图片滚动
box.onclick = function () {
  clearInterval(timer);
  roll();
  setTimeout(function () {
    clearInterval(timer);
    timer = setInterval(roll, 2000);
  }, 2000);
}
timer = setInterval(roll, 2000);
// const props = defineProps({
//   ddd: {
//     type: String,
//     required: true,
//   },
// })
const ddd = 123
onMounted(() => {
  console.log(ddd)
})
const aa = () => {
  console.log(546);

}
</script>

<style scoped lang="sass">

$background: Tomato,red,green,grey,lightblue,yellow,Orange,MediumSeaGreen
._area
  height: 50px
  width: 315px
  // perspective: 10
  // perspective-origin: 199px 146px
  padding-top: 100px
  .rotate
    width: 100px
    height: 50px
    transform: rotateX(-5deg)
    transform-style: preserve-3d
    transition-duration: 1s
    margin: 0 auto
    ul
      list-style: none
      position: absolute
      bottom: 0
      left: 50%
      transform: translateX(-50%)
      li
        background-color: #000
        width: 10px
        height: 10px
        border-radius: 50%
        float: left
        margin-left: 5px
        cursor: pointer
    &-img
      width: 100px
      height: 50px
      line-height: 50px
      text-align: center
      position: absolute
      cursor: pointer
      @for $i from 1 through 8
        &:nth-child(#{$i})
          background: hsla(random(360), 100%, 50%, .7)
          transform: rotateY((45deg * $i - 45deg)) translateZ(125px)
</style>