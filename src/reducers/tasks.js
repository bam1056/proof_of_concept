function tasks (state = [], action) {
  switch (action.type) {
    case 'CREATE_TASK':
      return state.concat([{
        text: action.text
      }])
    default:
      return state
  }
}

export default tasks
