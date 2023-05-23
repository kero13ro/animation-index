<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'
  import gsap from 'gsap'

  const main = ref()
  const tl = ref()
  let ctx

  function toggleTimeline() {
    tl.value.reversed(!tl.value.reversed())
  }
  console.log(gsap.version)
  onMounted(() => {
    ctx = gsap.context((self) => {
      const boxes = self.selector('.box')
      tl.value = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse()
    }, main.value) // <- Scope!
  })

  onUnmounted(() => {
    ctx.revert() // <- Easy Cleanup!
  })
</script>

<template>
  <main>
    <section class="boxes-container" ref="main">
      <h1>Use the button to toggle a Timeline</h1>
      <div>
        <button @click="toggleTimeline">Toggle Timeline</button>
      </div>
      <div class="box">Box 1</div>
      <div class="box">Box 2</div>
      <div class="box">Box 3</div>
    </section>
  </main>
</template>
