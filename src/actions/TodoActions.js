export function createTodo(todo) {
  return {
    type: 'CREATE_TODO',
    payload: { todo }
  }
}


export function deleteTodo(_id) {
  return {
    type: 'DELETE_TODO',
    payload: { _id }
  }
}


export function updateTodo(_id, todo) {
  return {
    type: 'UPDATE_TODO',
    payload: { _id, todo }
  }
}
