<template>
  <div id="jupang">
    <div class="warrper">
      <div class="sun"></div>
      <div class="cloud"></div>
      <div class="cat">
        <div class="eye left">
          <div class="eye-hide"></div>
        </div>
        <div class="eye right">
          <div class="eye-hide"></div>
        </div>
        <div class="nose"></div>
        <div class="mouth"></div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">

$cat: rgb(252, 180, 125);

:root {
  --bgColor: rgb(81, 136, 168);
  --eyeHideTop: 0px;
  --cloudLeft: 45%;
  --mouthRadius: 10px 10px 0 0;
}

#jupang {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: repeating-linear-gradient(
      0deg,
      hsla(340, 87%, 75%, 0.2) 0px,
      hsla(340, 87%, 75%, 0.2) 30px,
      transparent 30px,
      transparent 60px
    ),
    repeating-linear-gradient(
      90deg,
      hsla(340, 87%, 75%, 0.2) 0px,
      hsla(340, 87%, 75%, 0.2) 30px,
      transparent 30px,
      transparent 60px
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}

.warrper {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 10px solid white;
  position: relative;
  overflow: hidden;
  background-color: var(--bgColor);
  transition: background-color 1s linear;
  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAHwklEQVRYR62XeVRU1x3Hv/e9YYZhGXYQRREKaUQwMbglgHLODBhMTNyiIQoJDKAxPcZqmrRNrTb1EGuMNgclBRmlx4hrD6I2hE1jMDFCXUBByUgQlFW2YRFme7fnvYFBAgO0x99fc977LZ/72+4bAkVCOEPoMiuRKIBSGmAwch4sy3SC0laDkWuioJdAmBIwzA3kpTfiKQshCuXl4Gd8QqRiMexsrCGViGEjkcBOao2qBw3Gy7eqGIPRSIS4FOcoQ46hIOPY0+IgoojEigUz/QP+/t7bkFqLR/V7t64BxeV3UXTtlu72/QdihpBOhiFqhjAuHKij0cjZUkrbQHCNUJRxwB2wKEGe6t54oES0OPFB+HMzvXYlRpsBKu8/hIezA1xk9sPsN6Vk4n7TIwR4T8H5K9cxydkRm1ctQUunBv06Pcru1fZWNzajqa3TVjAkyKWU5oIluZZgCBuZqIma+7xsxzurBIDUnHyknskX7G8f3mMGqGtpxZq/fIHloXPxYfRryC4uwZdnC9De1YPtb6/C0peCzbrq+ibkXr2Jizdu69UPm6yE6hHyAQoyPv9lRggToTSsDn+J3fhaJFwc7ZD8VTayir4X9P6T9imsxYI9si+XYpvqBLI+3oRZftOEZ3XNbUjNyROysfH1SGxcFik8Nxg5dPX0oU+rQ3OHBjfv1eD0dz/qdQbD2caTe1c9CUHEi5Ma1kUs9FwrD8UkVwc0tXcir6QMXm7OkAcHmXVjkg9Ap9cj86ON5lI9bO6Al4eTOWM8QLumF+2aHtS3teOnh404dekHfUNbp3AKhmGajUbjchQdujLomLCKhIIXA38t37ZuJeGdjSa7snLwVUEx9qyPwaLnZwgA3b396Hmshaebg9mEP3VFzUPsOX3OWFXXwFqLxcVana6Mo+QWCC2FlK3CufTHwzLAKJQpLMu8d2rbVuLr5QaWZUYwBMZ9gO2xbyDYzxe+U92E9Pb2aYWxtbe1Nuun5uT3pJ7JtxOLRHlaPbcfRQfPjzsFUCh/Q4CUve/GYkGAP2R2UrMNX9vfp2chLOhZbFm5FI72NnBzHpoMrU4PyUCP8EZXKtVI/CwNFGQZCjNyxgtuGhR5QgQhND82chFiFGEAA1z76Wf8+8frwuyvCJ2HGMUiwdc0T+dhAVvauuDuIhsWZ+3OFN3duvrS/ty00IkBALBesuFbX0/3EFeZTFT+cy00vY8R6DMVK8LmY7avj+DHwU46Ipi6thn+3h7D4uSVlmFr6hFQjsbhwqHM8SBMK1aufJMQHHNzkEERHITQwGcx2dnZbCuVWGGyuxMYxqT+qL17oAckcHUaKgnfF7ZSCTbsPYiSu9U3tLlpL0wMgM9C1PrS10PmzIwODxtqAkBoyinuTpCIRcN8aXWGEc8aWjrhYC/F8QvfY9/pr0EZ4wzkZ94dC8J0JF4ilAmE4uAn76xB0HTTouHF1ckOTjLTZtX09AmLaRCmvqVDgHvcr0NrR7fQUnyflFfX4q2dKaCEvouCQ/+YGAC/KOTKg16TXN/6JGa1jaOdKSi/GwYvqfv1rfBwkZn3QFtnD6ZPcRX0+vp1wy6zlz9M1ta3tmdzBaroCQPgxd9KRfY992f7+7h/HL3CnAGOo8KGG2xE0x7QQWZnLdScl5b2brg/MaKfnzyPo4WXe7U63TwUHa60BDFUgkENecIsQmhZ0qsKRM2ZLTzltx2/dCwJf/o2Ta+QrUGprm/G5gOZxkearpbeXm0eR2jtwDtqVqJM40gA/q0ifgcB2T59khs2r3gF3u5uwsbje+HJZuS7XtPdB53eAGcH22FLjHfzoKUNe06ex9VKNdfT1z9ixTKE6RsdAIDk5SS1zmD04x29Mv8FJETJQQiBk8xGgBFbDZ+Kser8y3d8Cbd+eYRevaO+ahGAKJQ0Y+sGHL/4Awqvl0NmK8Wa8BAsmWsqC58J/vPNWmIlAPVr9ejT6gVAS8IH5i8xflnt/dd5UAbRYwIkK99EoLc3Kmof4Ivsr2lTeyeZ7edD58/wI894TYaPh/sAjBVELCOMqLOjaXqeFEqpsLxuqGtwsbxC+H4gwD6uULXFIoDV4qSOpFfljklL5SipqEbSvnRQguMsIS4cRyP4AFPdXHSK4CDx0gVzQEAw2m3KZ+ZaVQ2OFhXju/I7Ahch2M0VqD4SfltKFxMRn8EQJv7Yn98nf1Kd0Knrmys51noBclO0kCfMAoMwhtIwCqzx95pk3LZ2Fevj6QYnh6EM8Cc/kleM3SfOgmXZLs5oSOXAZaEw89ZgXIsAUMSHMoS5sOi5AKtvb1bwJ9zFFWb8YQRwZNx8CSvJj41cKFsZMh9TPYfukAvXK7Ap5TBve5Rjmd+N9r/CMgAfSR6/hRAifEhSiigUqb4ZLWOMQnlgXoB/3B/XLJf+apqpL/hvQfmWv/I/i2mhaqGlTI8NYNoJ2yUiq5Xab9JmWWxvRfyOQO+p7+9OWufoPdm0mjfv/yculVVqdNToizxV+/8PMJEBHwD4W+I6R/5uuK6uQWzyAVBK1qMoI30sF+Nn4H8A2BkX7cirq/KK+I6/p8nZ7z+e+VMHKKlS49NjZyZ0+jHHcDzyYe8HSsBR6nCnrp4Q4BRXqFo9ER9PJwMRyjdEhMmklN40Uu4MCg99NpHgvM5/Ad8HGnKBJv57AAAAAElFTkSuQmCC"),
    default;
  &:hover {
    --bgColor: rgb(178, 222, 247);
    --eyeHideTop: -20px;
    --cloudLeft: 100%;
    --mouthRadius: 0 0 10px 10px;
  }
}

.sun {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: rgb(255, 229, 142);
  border: 7px solid rgb(253, 215, 91);
  border-radius: 50%;
  left: 55%;
  top: 14%;
  box-shadow: 0 0 6px rgb(255, 241, 48);
}

.cloud {
  width: 100px;
  height: 36px;
  background-color: white;
  position: absolute;
  transition: left 0.6s linear;
  left: var(--cloudLeft);
  top: 23%;
  border-radius: 36px;
  animation: bouncy 2s ease-in-out infinite;
  &::before {
    content: "";
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: -23px;
    left: 18px;
  }
  &::after {
    content: "";
    width: 26px;
    height: 26px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: -16px;
    left: 56px;
  }
}

@keyframes bouncy {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.cat {
  width: 180px;
  height: 160px;
  background-color: $cat;
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -90px;
  animation: wait 2s ease-in-out infinite;
  &::after,
  &::before {
    content: "";
    display: block;
    border-style: solid;
    border-width: 20px 30px;
    position: absolute;
    top: -30px;
  }
  &::after {
    right: 0;
    border-color: transparent $cat $cat transparent;
  }
  &::before {
    left: 0;
    border-color: transparent transparent $cat $cat;
  }
  .eye {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    background: white;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .eye-hide {
      height: 20px;
      position: absolute;
      top: var(--eyeHideTop);
      left: -2px;
      right: -2px;
      background-color: $cat;
      transition: top 0.5s ease-in-out;
      z-index: 2;
    }
    &::before {
      content: "";
      height: 36px;
      width: 36px;
      background-color: black;
      border-radius: 50%;
    }
    &::after {
      content: "";
      width: 24px;
      height: 24px;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    &.left {
      left: 24px;
    }
    &.right {
      right: 24px;
    }
  }
  .nose {
    width: 0;
    height: 0;
    border-top: 7px solid rgb(248, 226, 226);
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    position: absolute;
    left: 50%;
    margin-left: -7px;
    top: 70px;
  }
  .mouth {
    width: 26px;
    height: 20px;
    background-color: rgb(255, 217, 217);
    position: absolute;
    top: 85px;
    left: 50%;
    margin-left: -13px;
    border-radius: var(--mouthRadius);
    transition: border-radius 0.2s linear;
    overflow: hidden;
    &::after,
    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      border-top: 7px solid white;
      border-left: 2px solid transparent;
      border-right: 2px solid transparent;
    }
    &::after {
      right: 5px;
    }
    &::before {
      left: 5px;
    }
  }
}

@keyframes wait {
  0% {
    bottom: -20px;
  }
  50% {
    bottom: -25px;
  }
  100% {
    bottom: -20px;
  }
}
</style>
