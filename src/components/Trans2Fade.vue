<script setup>
  import gsap from 'gsap'

  const beforeEnter = (el, done) => {
    console.log('beforeEnter')
    //   gsap.set(el, {
    //     scaleX: 0,
    //     scaleY: 0,
    //     x: 0,
    //     y: 0,
    //     opacity: 0,
    // })
  }
  const enter = (el, done) => {
    console.log('enter')
    gsap.fromTo(
      el,
      {
        opacity: 0,
        scaleY: 0,
      },
      {
        scaleY: 1,
        opacity: 1,
        ease: 'elastic.inOut(1,2, 1)',
        onComplete: done,
      }
    )
  }
  const afterEnter = (el, done) => {
    console.log('afterEnter')
  }
  const enterCancelled = (el, done) => {
    console.log('enterCancelled')
  }
  const beforeLeave = (el, done) => {
    console.log('beforeLeave')
  }
  const leave = (el, done) => {
    console.log('leave')
    gsap.to(el, {
      scaleY: 0,
      opacity: 0,
      ease: 'elastic.inOut(1,2, 1)',
      onComplete: done,
    })
  }
  const afterLeave = (el, done) => {
    console.log('afterLeave')
  }
  const leaveCancelled = (el, done) => {
    console.log('leaveCancelled')
  }
</script>

<template>
  <div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false"
    >
      <slot />
    </transition>
  </div>
</template>

<style lang="scss" scoped></style>
