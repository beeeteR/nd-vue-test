import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    modalState: false as boolean
  }),
  getters: {
    getModalState: (state) => state.modalState
  },
  actions: {
    changeModalState() {
      this.modalState = !this.modalState
    }
  }
})
