<script setup lang="ts">

import DialogBase from "@/components/dialog/DialogBase.vue";
import UserInput from "@/components/ui/UserInput.vue";
import BaseBtn from "@/components/ui/BaseBtn.vue";
import {reactive, ref} from "vue";
import {type INoteData, notesApiMethods, type IResponseNoteData} from "@/utils/api/notes";
import {useCookies} from "vue3-cookies";
import {useNotesStore} from "@/stores/notesStore";
import {useModalStore} from "@/stores/modalStore";


const notesStore = useNotesStore()
const modalStore = useModalStore()
let errors = ref<string[]>()
const token = useCookies().cookies.get('accessToken')
const noteData = reactive<INoteData>({
    title: '',
    content: ''
  }
)

function changeValueInput(value: string, type: 'title' | 'content') {
  noteData[type] = value
}

function addNote() {
  notesApiMethods.createNote(noteData, token).then(result => {
    if (result.error) errors.value = result.errorMessage
    else {
      const data = result.data as IResponseNoteData
      notesStore.setNote(data)
      noteData.title = ''
      noteData.content = ''
      modalStore.changeModalState()
    }
  })
}
</script>

<template>
  <DialogBase>
    <template #dialogHeader>
      <h2>Добавление заметки</h2>
    </template>
    <template #dialogBody>
      <form class="dialog-create-note__form">
        <UserInput title="Название заметки" type="input" inputType="text" placeholder="Введите название"
                   show-length @changeValueInput="(str) => changeValueInput(str, 'title')"/>
        <UserInput title="Текст заметки" type="area" placeholder="Введите текст"
                   show-length @changeValueInput="(str) => changeValueInput(str, 'content')"/>
        <BaseBtn title="Добавить" @click.prevent="addNote" class="dialog-create-note__form-btn"/>
      </form>
    </template>
    <template #dialogFooter>
      <div class="dialog__errors" v-if="errors">
        <div class="error__message" v-for="item in errors" :key="Date.now()">
          <span class="--text-small">{{ item }}</span>
        </div>
      </div>
    </template>
  </DialogBase>
</template>

<style lang="scss">
.dialog-create-note {
  &__form {
    display: flex;
    flex-direction: column;

    &-btn {
      margin-top: 40px;
      align-self: flex-end;

      @media #{map-get($display-rules, 'xs')} {
        margin-top: 28px;
        align-self: unset;
      }
    }
  }

}
</style>
