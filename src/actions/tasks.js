export function createTask (text) {
  return {
    type: 'CREATE_TASK',
    text
  }
}
