<script setup lang="ts"></script>

<template>
  <div class="square"></div>

  <div class="wrapper w-full h-full">
    <div class="txt text-5xl font-bold">Photography</div>
  </div>

  <!-- <div class="card">
    <div class="card-title-wrap">
      <h1 class="title">
        <span class="copy-wrap">Photography</span>
      </h1>
    </div>
    <div class="card-img"></div>
  </div> -->
</template>

<style lang="scss">
  .wrapper {
    // transform: translate3d(-50%, -50%, 0);
    perspective: 400px;
    // position: relative;
    padding: 120px;
  }

  .txt {
    // perspective-origin: center;
    position: absolute;
    top: 50%;
    left: 50%;
    // perspective-origin: 50% 50%;
    // rotate: 10deg;
    transform: translate3d(-50%, 50%, 100px);
  }
  .square {
    cursor: pointer;
    border: solid 0px transparent;
    padding: 120px;
    width: 100%;
    height: 100%;
    transform: translate3d(-50%, -50%, 0);
    position: absolute;
    top: 50%;
    left: 50%;
    background: linear-gradient(230deg, #a24bcf, #4b79cf, #4bc5cf);
    background-clip: content-box;
    background-size: 400% 400%;
    border-color: currentColor;
    animation: partytime 7s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite;
    transition: padding 1s cubic-bezier(0.215, 0.61, 0.355, 1);
    will-change: transform;
  }

  @keyframes partytime {
    0% {
      background-position: 83% 0%;
    }
    50% {
      background-position: 18% 100%;
    }
    100% {
      background-position: 83% 0%;
    }
  }
</style>
