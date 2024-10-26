export function errorsToArray(errors: string[] | string) {
  return Array.isArray(errors) ? errors : [errors]
}
