<script setup lang="ts">
  import Trans2Fade from '@/components/Trans2Fade.vue'
  import TransFade from '@/components/TransFade.vue'
  import gsap from 'gsap'
  import { ref } from 'vue'
  const fadeShow = ref(false)
  // const fade2Show = ref(false)
  const TransRuns = ref(false)

  const enter = (el, done) => {
    console.log('enter')
    gsap.fromTo(
      el,
      {
        x: '-1000',
      },
      {
        x: '0',
        onComplete: done,
      }
    )
  }

  const leave = (el, done) => {
    gsap.to(el, {
      x: '+2000',
      onComplete: done,
    })
  }
</script>

<template>
  <div class="wrap">
    <div class="row">
      <button @click="fadeShow = !fadeShow">fadeShow</button>
      <TransFade>
        <h1 v-show="fadeShow">13</h1>
      </TransFade>
    </div>
    <!-- 第二個 slot 組件會報錯，可能是 nuxt router 造成 -->
    <!-- <div class="row">
      <button @click="fade2Show = !fade2Show">fade2Show</button>
      <fade2Show>
        <h1 v-show="fade2Show">13</h1>
      </fade2Show>
    </div> -->
    <div class="row">
      <button @click="TransRuns = !TransRuns">TransRuns</button>
      <transition @enter="enter" @leave="leave" :css="false">
        <h2 v-show="TransRuns">111</h2>
      </transition>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    padding: 30px;
  }
  button {
    margin-right: 10px;
  }
  .row {
    margin-bottom: 20px;
  }
</style>
