<script setup lang="ts">
import BaseBtn from "@/components/ui/BaseBtn.vue";
import {useModalStore} from "@/stores/modalStore";

const modalStore = useModalStore()

function closeDialog() {
  useModalStore().changeModalState()
}

</script>

<template>
  <div class="dialog__wrapper" :class="{'dialog-active': modalStore.getModalState}">
    <div class="dialog__content">
      <BaseBtn icon="@/assets/icons/close.svg" round @click="closeDialog" class="dialog__close-btn"/>
      <div class="dialog__header">
        <slot name="dialogHeader"></slot>
      </div>
      <div class="dialog__body">
        <slot name="dialogBody"></slot>
      </div>
      <div class="dialog__footer">
        <slot name="dialogFooter"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dialog {
  &__wrapper {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: scale(0);
    background-color: transparentize(map-get($colors, 'dark'), 0.3);
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    @media #{map-get($display-rules, 'xs')} {
      justify-content: center;
    }
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 80px;
    background-color: map-get($colors, 'dark-middle');
    border-radius: 24px;

    @media #{map-get($display-rules, 'lg')} {
      padding: 56px;
    }
    @media #{map-get($display-rules, 'xs')} {
      padding: 90px 16px;
    }
  }

  &__close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  &-active {
    transform: scale(1);
  }
}

</style>
