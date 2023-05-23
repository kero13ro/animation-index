<script setup lang="ts">
  import { onMounted, onUnmounted, ref, watch } from 'vue'
  import gsap from 'gsap'
  import { onBeforeRouteLeave } from 'vue-router'
  const wrapper = ref()

  onMounted(() => {
    Array.from(wrapper.value.children).forEach((box) => {
      gsap.to(box, {
        x: 150,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
        },
      })
    })
  })

  onBeforeRouteLeave((to, from, next) => {
    Array.from(wrapper.value.children).forEach((box) => {
      gsap.to(box, {
        x: 1000,
        onComplete: () => {
          next()
        },
      })
    })
  })
</script>

<template>
  <main>
    <section class="section flex-center column blue">
      <h1>Basic ScrollTrigger in VueJS</h1>
      <h2>Scroll down to see the magic happen!!</h2>
    </section>
    <div class="section flex-center column" ref="wrapper">
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
    </div>
    <section class="section flex-center orange column">
      <h1>The End!</h1>
      <h2>
        For more information visit:&nbsp;
        <a
          href="https://greensock.com/scrolltrigger/"
          target="_blank"
          rel="noreferrer"
        >
          greensock.com/scrolltrigger/
        </a>
      </h2>
    </section>
  </main>
</template>
