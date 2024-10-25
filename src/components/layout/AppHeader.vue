<script setup lang="ts">
import BaseBtn from "@/components/ui/BaseBtn.vue";
import {useModalStore} from "@/stores/modalStore";

const modalStore = useModalStore()

function openModalAuth() {
  modalStore.changeModalState()
}

</script>

<template>
  <header class="app__header section-wrapper">
    <RouterLink to="/" class="logo">
      <img src="@/assets/img/logo.png" alt="logo">
    </RouterLink>
    <BaseBtn title="Вход" iconFileName="login.svg" @click="openModalAuth" />
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
