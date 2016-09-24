function user (state = {}, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        id: action.id,
        name: action.name
      }
    default:
      return state
  }
}
export default user
