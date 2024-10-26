<script setup lang="ts">
import DialogBase from "@/components/dialog/DialogBase.vue";
import UserInput from "@/components/ui/UserInput.vue";
import BaseBtn from "@/components/ui/BaseBtn.vue";
import {computed, onMounted, onUnmounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {type IRegister} from "@/utils/api/user";
import {tryAuth} from '@/composables/auth'
import {useModalStore} from "@/stores/modalStore";


const authData = reactive<IRegister>({
  email: '',
  password: '',
  confirm_password: ''
})
let errors = ref<string[]>()
const loginBtnInDialogBody = ref<boolean>()
const route = computed(() => useRoute())
const router = useRouter()
const isReg = computed(() => route.value.name === 'reg')
const textForBtn = computed(() => isReg.value ? 'Зарегистрироваться' : 'Войти')

onMounted(() => {
  window.addEventListener('resize', changeStateBtnLoginInDialogBody)
})
onUnmounted(() => {
  window.removeEventListener('resize', changeStateBtnLoginInDialogBody)
})

function changeStateBtnLoginInDialogBody() {
  loginBtnInDialogBody.value = window.innerWidth <= 540
}

function changeValueInput(value: string, who: keyof IRegister) {
  authData[who] = value
}

async function auth() {
  const resultAuth = await tryAuth(isReg.value, authData)
  if (resultAuth !== 'ok') errors.value = resultAuth
  else {
    useModalStore().changeModalState()
    await router.isReady()
    router.push('/notes')
  }
}

</script>

<template>
  <DialogBase>
    <template #dialogHeader>
      <h2>Вход в ваш аккаунт</h2>
    </template>
    <template #dialogBody>
      <form class="dialog-auth__form" autocomplete="on">
        <UserInput title="Email" type="input" inputType="email" placeholder="Введите значение"
                   @changeValueInput="(str) => changeValueInput(str, 'email')"/>
        <UserInput title="Пароль" type="input" inputType="password" placeholder="Введите пароль" :length="{min: 4, max:12}"
                   @changeValueInput="(str) => changeValueInput(str, 'password')"/>
        <UserInput v-if="isReg" title="Пароль ещё раз" type="input" inputType="password" placeholder="Введите пароль" :length="{min: 4, max:12}"
                   @changeValueInput="(str) => changeValueInput(str, 'confirm_password')"/>
        <BaseBtn v-if="loginBtnInDialogBody" :title="textForBtn" @click="auth"/>
      </form>
    </template>
    <template #dialogFooter>
      <div class="dialog-auth__footer">
        <div class="dialog-auth__btns">
          <div class="dialog-auth__switch">
            <p class="--text-small">
              <span>У вас </span>
              <span>{{ isReg ? 'есть ' : 'нет ' }}</span>
              <span>аккаунт</span>
              <span>{{ isReg ? '' : 'а' }}</span>
              <span>?</span>
            </p>
            <RouterLink :to="isReg ? '/' : '/reg'" class="--text-small">
              {{ isReg ? 'Войдите' : 'Зарегистрируйтесь' }}
            </RouterLink>
          </div>
          <BaseBtn v-if="!loginBtnInDialogBody" :title="textForBtn" @click="auth"/>
        </div>
        <div class="dialog__errors" v-if="errors">
          <div class="error__message" v-for="item in errors" :key="Date.now()">
            <span class="--text-small">{{ item }}</span>
          </div>
        </div>
      </div>
    </template>
  </DialogBase>

</template>

<style lang="scss">
.dialog-auth {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  &__switch {
    display: flex;
    gap: 4px;
    @media #{map-get($display-rules, 'sm')} {
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
