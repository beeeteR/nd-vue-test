import {API_SETTINGS, type token} from './main'
import axios from "axios";
import {requestHandler} from "@/utils/api/apiHandlers";

export interface IRegister {
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
  getInfoForToken: (token: token) => requestHandler(axios.get(API_SETTINGS.url + methods.get.getInfoForToken, {headers: {Authorization: `Bearer ${token}`}})),
  register: (data: IRegister) => requestHandler(axios.post(API_SETTINGS.url + methods.post.register, data)),
  getToken: (data: IGetToken) => requestHandler(axios.post(API_SETTINGS.url + methods.post.getToken, data)),
  logout: (token: token) => requestHandler(axios.delete(API_SETTINGS.url + methods.delete.logout, {headers: {Authorization: `Bearer ${token}`}}))
}
