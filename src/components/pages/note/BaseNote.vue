<script setup lang="ts">
import {type IResponseNoteData, notesApiMethods} from "@/utils/api/notes";
import {useCookies} from "vue3-cookies";
import {useNotesStore} from "@/stores/notesStore";


const props = defineProps<IResponseNoteData>()
const token = useCookies().cookies.get('accessToken')
const notesStore = useNotesStore()

function delNote() {
  notesApiMethods.deleteNote(props.id, token).then(() => {
    notesStore.delNote(props.id)
  })
}

</script>

<template>
  <div class="note">
    <div class="note__header">
      <h4 class="note__title">{{ title }}</h4>
    </div>
    <div class="note__body">
      <p class="--text">{{ content }}</p>
    </div>
    <div class="note__footer">
      <div class="note__delete" @click="delNote">
        <img src="@/assets/icons/close.svg" alt="Delete note icon">
        <span class="--text">Удалить</span>
      </div>
    </div>
    <div class="note__angle"></div>
  </div>
</template>

<style lang="scss">
.note {
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: map-get($colors, 'green-light');
  color: map-get($colors, 'white');
  border-radius: 12px;
  box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.4);

  &__header {
    border-bottom: 1px solid map-get($colors, 'green');
    .note__title {
      padding-right: 12px;
    }
  }


  &__body, .note__title {
    white-space: break-spaces;
    word-break: break-all;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__delete {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  &__header, &__body, &__footer {
    padding: 20px 28px;
  }

  &__angle {
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    aspect-ratio: 1;
    background: linear-gradient(45deg, map-get($colors, 'green') 0%, map-get($colors, 'green') 50%, map-get($colors, 'green') 50%, map-get($colors, 'dark') 50%, map-get($colors, 'dark') 100%);
    border-bottom-left-radius: 8px;
  }
}
</style>
