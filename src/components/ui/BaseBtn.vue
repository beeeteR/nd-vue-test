<script setup lang="ts">

interface IBaseBtnProps {
  round?: true,
  title?: string,
  disabled?: true,
  func?: (...args: any[]) => any
}

type TBaseBtnEmits = {
  btnClicked: [result: any]
}

const props = defineProps<IBaseBtnProps>()
const emits = defineEmits<TBaseBtnEmits>()

function btnClicked() {
  emits('btnClicked', props.disabled ? 'disabled' : props.func ? props.func() : 'clicked')
}

</script>

<template>
  <button class="btn" :class="{'btn-round': round}" :disabled="disabled" @click="btnClicked">
    <slot name="btnIcon"></slot>
    <span class="btn__title">{{ title }}</span>
  </button>

</template>

<style lang="scss">

.btn {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  background-color: map-get($colors, "green-light");
  color: map-get($colors, "white");
  border-radius: 2rem;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;

  &:hover {
    background-color: map-get($colors, "green-middle");
  }

  &:active {
    background-color: map-get($colors, "green-dark");
  }

  &:disabled {
    background-color: map-get($colors, "gray");
  }

  &__icon {
    height: fit-content;
    width: fit-content;
  }

  &-round {
    width: auto;
    aspect-ratio: 1;
    border-radius: 50%;
  }
}
</style>
