<script setup lang="ts">

import AppHeader from "@/components/layout/AppHeader.vue";
import {setUserInfoInStore} from "@/composables/auth";
import {useCookies} from "vue3-cookies";
import {useUserStore} from "@/stores/userStore";

const token = useCookies().cookies.get('accessToken')
if (token) {
  setUserInfoInStore(token)
}else {
  useUserStore().delUserInfo()
}

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
