<script setup lang="ts">
import BaseBtn from "@/components/ui/BaseBtn.vue";
import {useModalStore} from "@/stores/modalStore";
import {useUserStore} from "@/stores/userStore";
import HeaderUserBtn from "@/components/layout/HeaderUserBtn.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";

const modalStore = useModalStore()
const userStore = useUserStore()
const userInfo = computed(() => userStore.getUserInfo)
const smallIcon = ref<boolean>(false)

onMounted(() => {
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

function openModalAuth() {
  modalStore.changeModalState()
}

function resize() {
  smallIcon.value = window.innerWidth <= 540
}

</script>

<template>
  <header class="app__header section-wrapper">
    <RouterLink to="/" class="logo">
      <img v-if="!smallIcon" src="@/assets/img/logo.png" alt="logo">
      <img v-else src="@/assets/img/logo-small.png" alt="logo">
    </RouterLink>
    <BaseBtn v-if="userInfo.id === -1" title="Вход" iconFileName="login.svg" @click="openModalAuth" />
    <HeaderUserBtn v-else />
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

    img {
      @media #{map-get($display-rules, 'lg')} {
        object-fit: cover;
      }
    }
  }
}
</style>
