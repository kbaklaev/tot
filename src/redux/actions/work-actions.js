export const NEW_WORK_MESSAGE = 'NEW_WORK_MESSAGE',
  EDIT_WORK_MESSAGE = 'GET_EXIST_MESSAGE'

export const setNewWorkMessage = (str, user) => {
  return {
    type: NEW_WORK_MESSAGE,
    message: str,
    username: user,
  }
},

editWorkMessage = (str, user, id) => {
  return {
    type: EDIT_WORK_MESSAGE,
    message: str,
    username: user,
    id: id
  }
}

