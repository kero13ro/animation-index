<script setup lang="ts">
  // import { onMounted, onUnmounted, ref } from 'vue';
  // import gsap from 'gsap-trial';
  // import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
  // import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // const main = ref();
  // const smoother = ref();
  // let ctx;

  // const scrollTo = () => {
  //   smoother.value.scrollTo('.box-c', true, 'center center');
  // };

  // onMounted(() => {
  //   ctx = gsap.context(() => {
  //     // create the smooth scroller FIRST!
  //     smoother.value = ScrollSmoother.create({
  //       smooth: 2, // seconds it takes to "catch up" to native scroll position
  //       effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
  //     });
  //     ScrollTrigger.create({
  //       trigger: '.box-c',
  //       pin: true,
  //       start: 'center center',
  //       end: '+=300',
  //       markers: true,
  //     });
  //   }, main.value);
  // });
  // onUnmounted(() => {
  //   ctx.revert();
  // });
</script>

<template>
  <div id="smooth-wrapper" ref="main">
    <div id="smooth-content">
      <header class="header">
        <h1 class="title">GreenSock ScrollSmoother on a Vue3 App</h1>
        <button class="button" @click="scrollTo">Jump to C</button>
      </header>
      <div class="box box-a" data-speed="0.5">a</div>
      <div class="box box-b" data-speed="0.8">b</div>
      <div class="box box-c" data-speed="1.5">c</div>
      <div class="line"></div>
    </div>
  </div>
  <footer>
    <a href="https://greensock.com/scrollsmoother">
      <img
        class="greensock-icon"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-smoother-logo-light.svg"
        width="220"
        height="70"
      />
    </a>
  </footer>
</template>
