<script setup lang="ts">

import {useModalStore} from "@/stores/modalStore";
import DialogCreateNote from "@/components/dialog/DialogCreateNote.vue";
import BaseNote from "@/components/pages/note/BaseNote.vue";
import {useNotesStore} from "@/stores/notesStore";
import {onMounted} from "vue";
import {type IResponseNoteData, notesApiMethods} from "@/utils/api/notes";
import {useCookies} from "vue3-cookies";

const modalStore = useModalStore()
const notesStore = useNotesStore()
const token = useCookies().cookies.get('accessToken')

onMounted(() => {
  notesApiMethods.getNotes(token).then(result => {
    const notes = result.data as IResponseNoteData[]
    notes.forEach(note => notesStore.setNote(note))
  })
})

function openModal() {
  modalStore.changeModalState()
}

</script>

<template>
  <div class="page-notes section-wrapper">
    <div class="notes__items">
      <BaseNote :title="note.title" :content="note.content" :id="note.id" v-for="note in notesStore.getNotes" :key="note.id"/>
    </div>
    <div class="notes__btn-add-notes" @click="openModal">
      <img src="@/assets/icons/add.svg" alt="add notes btn">
    </div>
    <DialogCreateNote/>
  </div>
</template>

<style lang="scss">
.page-notes {
  position: relative;

  .notes {
    &__btn-add-notes {
      position: absolute;
      bottom: 40px;
      right: 40px;
      padding: 20px;
      background-color: map-get($colors, 'green-light');
      border-radius: 50%;
      cursor: pointer;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
      @media #{map-get($display-rules, 'lg')} {
        gap: 20px;
      }
      @media #{map-get($display-rules, 'md')} {
        grid-template-columns: repeat(2, 1fr);
      }
      @media #{map-get($display-rules, 'sm')} {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
