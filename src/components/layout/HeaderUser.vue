<script setup lang="ts">

import {useUserStore} from "@/stores/userStore";
import {computed, nextTick, ref} from "vue";
import {userApiMethods} from "@/utils/api/user";
import {useCookies} from "vue3-cookies";
import {useRouter} from "vue-router";

const userStore = useUserStore()
const userInfo = computed(() => userStore.getUserInfo)
const stateActionList = ref<boolean>(false)
const token = useCookies().cookies.get('accessToken')

function changeStateActionList() {
  stateActionList.value = !stateActionList.value
}

async function logout() {
  await userApiMethods.logout(token).then(() => {
    nextTick(() => {
      useCookies().cookies.remove('accessToken')
      useRouter().push('/')
    })
  })

}

</script>

<template>
  <div class="user__btn" @click="changeStateActionList">
    <span class="user__email --text-small">{{ userInfo.email }}</span>
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
