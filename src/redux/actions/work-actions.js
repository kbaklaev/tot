export const NEW_WORK_MESSAGE = 'NEW_WORK_MESSAGE'

export const setNewWorkMessage = (str, user) => {
  return {
    type: NEW_WORK_MESSAGE,
    message: str,
    username: user
  }
}
