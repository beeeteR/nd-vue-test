import type {MiddlewareContext} from "vue3-middleware";
import {useUserStore} from "@/stores/userStore";

export default function guest({to, next, redirect}: MiddlewareContext) {
  const user = useUserStore();
  if (user.getUserInfo.id === -1 && !to.meta.requiredAuth) {
    return next();
  }
  return redirect('/notes');
}
