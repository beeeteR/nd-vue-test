<script setup lang="ts">

import {useUserStore} from "@/stores/userStore";
import {computed, ref} from "vue";
import {tryLogout} from "@/composables/logout";
import {useRouter} from "vue-router";

const userStore = useUserStore()
const userInfo = computed(() => userStore.getUserInfo)
const router = useRouter()
const stateActionList = ref<boolean>(false)
const slicedEmail = computed(() => {
  return userInfo.value.email ?
    userInfo.value.email.length > 25 ?
      `${userInfo.value.email.slice(0, 25)}...` :
      userInfo.value.email :
    'email'
})

function changeStateActionList() {
  stateActionList.value = !stateActionList.value
}

async function logout() {
  await tryLogout()
  await router.isReady()
  router.push('/')
}

</script>

<template>
  <div class="user__btn" @click="changeStateActionList">
    <span class="user__email --text-small">{{ slicedEmail }}</span>
    <div class="user__icon">
      <img src="@/assets/icons/user.svg" alt="user icon">
    </div>
    <div v-show="stateActionList" class="user__action-list">
      <RouterLink to="/" @click.prevent="logout">Выйти</RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
.user {
  &__btn {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    z-index: 10;
  }

  &__icon {
    padding: 14px 18px;
    background-color: map-get($colors, 'dark-middle');
    border-radius: 50%;
  }

  &__action-list {
    position: absolute;
    top: 77px;
    right: 0;
    padding: 40px;
    background-color: map-get($colors, 'dark-middle');
    border-radius: 12px;
    box-shadow: 0 15px 46px -10px #00000099;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: -5px;
      right: 20px;
      width: 18px;
      aspect-ratio: 1;
      background-color: map-get($colors, 'dark-middle');
      transform: rotate(45deg);
    }
  }
}

</style>
