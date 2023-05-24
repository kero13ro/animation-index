<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="grid gap-4 grid-cols-6 mb-3">
    <RouterLink class="btn" to="/perspective">perspective</RouterLink>
    <RouterLink class="btn" to="/blob">blob</RouterLink>
    <RouterLink class="btn" to="/ToggleTimeline">ToggleTimeline</RouterLink>
    <RouterLink class="btn" to="/ScrollView">ScrollView</RouterLink>
    <RouterLink class="btn" to="/ScrollView-clean">ScrollView-clean</RouterLink>
    <RouterLink class="btn" to="/trans-slot">trans-slot</RouterLink>
  </header>

  <RouterView />
</template>

<style scoped></style>
