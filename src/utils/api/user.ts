import {API_SETTINGS, type token} from './main'
import axios from "axios";

interface IRegister {
  email: string,
  password: string
  confirm_password: string
}

interface IGetToken {
  email: string,
  password: string
}

const methods = {
  get: {
    getInfoForToken: 'auth'
  },
  post: {
    register: 'reg',
    getToken: 'auth'
  },
  delete: {
    logout: 'auth'
  }
}


export const userApiMethods = {
  getInfoForToken: async (token: token) => {
    await axios.get(API_SETTINGS.url + methods.get.getInfoForToken,
      {
        headers: {Authorization: `Bearer ${token}`}
      })
  },
  register: async (data: IRegister) =>
    await axios.post(API_SETTINGS.url + methods.post.register, data),
  getToken: async (data: IGetToken) =>
    await axios.post(API_SETTINGS.url + methods.post.getToken, data),
  logout: async (token: token) => await
    axios.delete(API_SETTINGS.url + methods.delete.logout, {
      headers: {Authorization: `Bearer ${token}`}
    })
}
