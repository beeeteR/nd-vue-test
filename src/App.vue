<script setup lang="ts">

import AppHeader from "@/components/layout/AppHeader.vue";

</script>

<template>
  <AppHeader/>
  <main class="app-main">
    <RouterView/>
  </main>
</template>

<style lang="scss">
.app-main {
  background-color: map-get($colors, 'dark');
  height: 100%;
}
</style>
