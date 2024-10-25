<script setup lang="ts">
import BaseBtn from "@/components/ui/BaseBtn.vue";
import {useModalStore} from "@/stores/modalStore";
import {ref} from "vue";

const modalStore = useModalStore()
const stateDialog = modalStore.getModalState

function closeDialog() {
  useModalStore().changeModalState()
}

</script>

<template>
  <div v-show="stateDialog" class="dialog-wrapper" :class="{'dialog-active': stateDialog}">
    <div class="dialog__header">
      <BaseBtn icon="@/assets/icons/close.svg" round @click="closeDialog"/>
    </div>
    <div class="dialog__body">
      <slot name="dialogBody"></slot>
    </div>
    <div class="dialog__footer">
      <slot name="dialogFooter"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.dialog {
  &-wrapper {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: scale(0);
    background-color: map-get($colors, 'dark');
    opacity: 70%;
  }

  &-active {
    transform: scale(1);
  }
}


</style>
