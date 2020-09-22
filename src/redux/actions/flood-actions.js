export const NEW_FLOOD_MESSAGE = 'NEW_FLOOD_MESSAGE',
  EDIT_FLOOD_MESSAGE = 'EDIT_FLOOD_MESSAGE',
  DELETE_FLOOD_MESSAGE = 'DELETE_FLOOD_MESSAGE'

export const setNewFloodMessage = (str, user) => {
  return {
    type: NEW_FLOOD_MESSAGE,
    message: str,
    username: user
  }
},

editFloodMessage = (str, user, id) => {
  return {
    type: EDIT_FLOOD_MESSAGE,
    message: str,
    username: user,
    id: id
  }
},

deleteFloodMessage = (id) => {
  return {
    type: DELETE_FLOOD_MESSAGE,
    id: id
  }
}
