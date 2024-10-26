import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {} as IUser
  }),
  getters: {
    getUserInfo: (state) => {
      return state.user
    }
  },
  actions: {
    setUserInfo(data: IUser) {
      this.user = data
    },
    delUserInfo() {
      this.user  = {id: -1, email: ''}
    }
  }
})
