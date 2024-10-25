import {API_SETTINGS, type token} from './main'
import axios from "axios";

interface ICreateNote {
  title: string,
  content: string
}

const methods = {
  get: {
    getNotes: 'notes'
  },
  post: {
    createNote: 'notes',
  },
  delete: {
    deleteNote: (noteId: number) => `notes/${noteId}`
  }
}


export const userApiMethods = {
  getNotes: async (token: token) =>
    await axios.get(API_SETTINGS.url + methods.get.getNotes,
      {
        headers: {Authorization: `Bearer ${token}`}
      }),
  createNote: async (data: ICreateNote, token: token) =>
    await axios.post(API_SETTINGS.url + methods.post.createNote, data, {
      headers: {Authorization: `Bearer ${token}`}
    }),
  deleteNote: async (noteId: number, token: token) =>
    await axios.delete(API_SETTINGS.url + methods.delete.deleteNote(noteId), {
      headers: {Authorization: `Bearer ${token}`}
    })
}
