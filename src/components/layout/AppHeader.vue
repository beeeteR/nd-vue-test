<script setup lang="ts">
import BaseBtn from "@/components/ui/BaseBtn.vue";
import {useModalStore} from "@/stores/modalStore";
import {useUserStore} from "@/stores/userStore";
import HeaderUser from "@/components/layout/HeaderUser.vue";

const modalStore = useModalStore()
const userStore = useUserStore()
const userInfo = userStore.getUserInfo

function openModalAuth() {
  modalStore.changeModalState()
}

</script>

<template>
  <header class="app__header section-wrapper">
    <RouterLink to="/" class="logo">
      <img src="@/assets/img/logo.png" alt="logo">
    </RouterLink>
    <BaseBtn v-if="userInfo.id === -1" title="Вход" iconFileName="login.svg" @click="openModalAuth" />
    <HeaderUser v-else />
  </header>
</template>

<style lang="scss">
.app__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 136px;
  background-color: map-get($colors, 'dark');

  .logo {
    max-width: 220px;
  }
}
</style>
