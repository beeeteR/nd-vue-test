import {type IRegister, userApiMethods} from "@/utils/api/user";
import {errorsToArray} from "@/utils/common";
import type {IAnswerRequestHandler} from "@/utils/api/apiHandlers";
import {useCookies} from "vue3-cookies";
import {useUserStore} from "@/stores/userStore";

interface IDataSuccessAuth {
  data: {
    accessToken: string
  }
}

export async function tryAuth(isReg: boolean, authData: IRegister) {
  let response: IAnswerRequestHandler | IDataSuccessAuth
  if (isReg) {
    response = await userApiMethods.register(authData)
    if (response?.error) return errorsToArray(response!.errorMessage)
  }
  response = await userApiMethods.getToken(authData)
  if (response?.error) return errorsToArray(response!.errorMessage)
  else {
    useCookies().cookies.set('accessToken', response.data.accessToken)
    await setUserInfoInStore(response.data.accessToken)
    return 'ok'
  }
}

export async function setUserInfoInStore(token: string) {
  const userStore = useUserStore()
  const res = await userApiMethods.getInfoForToken(token)
  userStore.setUserInfo(res.data)
}
