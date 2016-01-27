export function checkTodo(item){
  return {
    type: 'CHECK_TODO',
    payload: item
  }
}

export function addTodo(item){
  return {
    type: 'ADD_TODO',
    payload: item
  }
}

export function clearTodos(){
  return {
    type: 'CLEAR_TODOS'
  }
}
