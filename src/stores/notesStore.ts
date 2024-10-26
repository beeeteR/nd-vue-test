import {defineStore} from 'pinia'
import type {IResponseNoteData} from "@/utils/api/notes";

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    notes: [] as IResponseNoteData[]
  }),
  getters: {
    getNotes: (state) => {
      return state.notes
    },
    getNoteById: (state) => {
      return (id: number) => state.notes.find(note => note.id === id)
    }
  },
  actions: {
    setNote(data: IResponseNoteData) {
      this.notes.push(data)
    },
    delNote(id: number) {
      this.notes = this.notes.filter(note => note.id != id)
    },
    delAllNotes() {
      this.notes.length = 0
    }
  }
})
