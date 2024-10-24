<script setup lang="ts">
import { computed, ref, watch } from "vue"

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


const maxlengthInputField = {
    input: 100,
    area: 500
}
const props = defineProps<TUserInputProps>()
const userInput = ref('')
const userInputLength = computed(() => `${userInput.value.length}/${props.type === 'input' ? maxlengthInputField.input : maxlengthInputField.area}`)

watch(userInput, () => {
    if (userInput.value.length > maxlengthInputField[props.type]) {
        userInput.value = userInput.value.slice(0, maxlengthInputField[props.type])
    }
})

</script>

<template>
    <label class="user-input__wrapper">
        <span class="user-input__title --text-small">{{ title }}</span>
        <input v-if="type === 'input'" :type="inputType" v-model="userInput" class="user-input__elem --text-small"
            :placeholder="placeholder" :maxlength="maxlengthInputField.input">
        <textarea v-else v-model="userInput" class="user-input__elem --user-input__area --text-small"
            :placeholder="placeholder" :maxlength="maxlengthInputField.area"></textarea>
        <div class="user-input__info --text-small">
            <span class="user-input__error" v-show="textError">{{ textError }}</span>
            <span class="user-input__text-length">{{ userInputLength }}</span>
        </div>
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
        }

        &__elem {
            color: map-get($colors, 'dark');
            background-color: map-get($colors, 'white');
            border-radius: 36px;
            padding: 22.5px 28px;

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
}
</style>