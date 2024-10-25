<script setup lang="ts">
import {computed, ref, watch} from "vue"

enum ETypeUserInput {
  'input',
  'area'
}

enum EInputType {
  'email',
  'password'
}

interface IUserInputPropsBase {
  type: keyof typeof ETypeUserInput,
  title: string,
  placeholder: string,
  textError?: string,
  showLength?: true
}

interface IUserInputPropsBaseInput extends IUserInputPropsBase {
  type: 'input',
  inputType: keyof typeof EInputType
}

interface IUserInputPropsBaseArea extends IUserInputPropsBase {
  type: 'area',
  inputType?: never
}

type TUserInputProps = IUserInputPropsBaseArea | IUserInputPropsBaseInput
type IUserInputEmits = {
  changeValueInput: [value: string]
}


const maxlengthInputField = {
  input: 100,
  area: 500
}
const props = defineProps<TUserInputProps>()
const emits = defineEmits<IUserInputEmits>()
const userInput = ref('')
const inputElem = ref(null)
const isPassword = ref<boolean>(props.inputType === "password")
const userInputLength = computed(() => `${userInput.value.length}/${props.type === 'input' ? maxlengthInputField.input : maxlengthInputField.area}`)

function setInputType(type: 'password' | 'text') {
  if (inputElem.value) {
    inputElem.value.type = type
    isPassword.value = type === 'password'
  }
}

watch(userInput, () => {
  if (userInput.value.length > maxlengthInputField[props.type]) {
    userInput.value = userInput.value.slice(0, maxlengthInputField[props.type])
  }
  emits('changeValueInput', userInput.value)
})

</script>

<template>
  <label class="user-input__wrapper">
    <span class="user-input__title --text-small">{{ title }}</span>
    <span v-if="type === 'input'" class="input__wrapper">
        <input :type="inputType" v-model="userInput" ref="inputElem" class="user-input__elem --text-small"
               :placeholder="placeholder" :maxlength="maxlengthInputField.input">
        <span v-if="inputType === 'password'" class="password__visibility">
          <img v-show="isPassword" src="@/assets/icons/on-password.svg" alt="on-password" @click="setInputType('text')">
          <img v-show="!isPassword" src="@/assets/icons/off-password.svg" alt="off-password"
               @click="setInputType('password')">
        </span>
      </span>
    <textarea v-else v-model="userInput" class="user-input__elem --user-input__area --text-small"
              :placeholder="placeholder" :maxlength="maxlengthInputField.area"></textarea>
    <span class="user-input__info --text-small">
      <span class="user-input__error" v-show="textError">{{ textError }}</span>
      <span v-if="showLength" class="user-input__text-length">{{ userInputLength }}</span>
    </span>
  </label>
</template>

<style lang="scss">
.user-input__wrapper {
  display: flex;
  flex-direction: column;
  gap: .5rem;

  .user-input {
    &__title {
      color: map-get($colors, 'gray');
      @media #{map-get($display-rules, 'sm')} {
        width: fit-content;
      }
    }

    &__elem {
      color: map-get($colors, 'dark');
      background-color: map-get($colors, 'white');
      border-radius: 36px;
      padding: 22.5px 28px;
      width: 100%;

      &::placeholder {
        color: map-get($colors, 'gray');
      }

      &:hover,
      &:active {
        outline: 2px solid map-get($colors, 'green-light');
      }

      &.--user-input__area {
        resize: none;
        min-height: 168px;
      }
    }

    &__info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      .user-input__error {
        color: #FF7461;
      }

      .user-input__text-length {
        grid-column: 2;
        text-align: right;
        color: map-get($colors, 'gray');
      }
    }

    &__title, &__info {
      padding: 0 24px;
    }
  }

  .input__wrapper {
    position: relative;

    &:hover,
    &:active {
      input {
        outline: 2px solid map-get($colors, 'green-light');
      }
    }

    .password__visibility {
      position: absolute;
      top: 50%;
      right: 28px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
}
</style>
