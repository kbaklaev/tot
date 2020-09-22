export const NEW_FLOOD_MESSAGE = 'NEW_FLOOD_MESSAGE'

export const setNewFloodMessage = (str, user) => {
  return {
    type: NEW_FLOOD_MESSAGE,
    message: str,
    username: user
  }
}
