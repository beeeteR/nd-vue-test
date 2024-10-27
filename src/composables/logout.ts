import {userApiMethods} from "@/utils/api/user";
import {useCookies} from "vue3-cookies";
import {useUserStore} from "@/stores/userStore";
import {useNotesStore} from "@/stores/notesStore";

export async function tryLogout() {
  const userStore = useUserStore()
  const notesStore = useNotesStore()
  const token = useCookies().cookies.get('accessToken')

  await userApiMethods.logout(token).then(() => {
    useCookies().cookies.remove('accessToken')
    userStore.delUserInfo()
    notesStore.delAllNotes()
  })
  return 'ok'
}
