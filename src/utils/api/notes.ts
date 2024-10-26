import {API_SETTINGS, type token} from './main'
import axios from "axios";
import {requestHandler} from "@/utils/api/apiHandlers";

export interface INoteData {
  title: string,
  content: string
}

export interface IResponseNoteData extends INoteData {
  id: number
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

export const notesApiMethods = {
  getNotes:  (token: token) => requestHandler(axios.get(API_SETTINGS.url + methods.get.getNotes, {headers: {Authorization: `Bearer ${token}`}})),
  createNote:  (data: INoteData, token: token) => requestHandler(axios.post(API_SETTINGS.url + methods.post.createNote, data, {headers: {Authorization: `Bearer ${token}`}})),
  deleteNote:  (noteId: number, token: token) => requestHandler(axios.delete(API_SETTINGS.url + methods.delete.deleteNote(noteId), {headers: {Authorization: `Bearer ${token}`}}))
}
