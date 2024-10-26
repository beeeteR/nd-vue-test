import {userApiMethods} from "@/utils/api/user";
import {useCookies} from "vue3-cookies";
import {useUserStore} from "@/stores/userStore";
import {useNotesStore} from "@/stores/notesStore";
import {useRouter} from "vue-router";

export async function tryLogout() {
  const userStore = useUserStore()
  const notesStore = useNotesStore()
  const token = useCookies().cookies.get('accessToken')
  const router = useRouter()

  await userApiMethods.logout(token).then(() => {
    useCookies().cookies.remove('accessToken')
    userStore.delUserInfo()
    notesStore.delAllNotes()
  })
  return 'ok'
}
