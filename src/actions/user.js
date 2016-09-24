export function setUser (id, name) {
  window.sessionStorage.setItem('userId', id)
  window.sessionStorage.setItem('userName', name)
  return {
    type: 'SET_USER',
    id,
    name
  }
}
