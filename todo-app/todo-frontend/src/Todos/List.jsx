import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {


  return (
  <div>
    {todos
  .filter(todo => todo !== undefined && todo !== null) 
  .map(todo => (
    <Todo className="todo-item"
      key={todo.text}
      todo={todo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  ))
  .reduce((acc, cur) => [...acc, <hr key={`hr-${Math.random()}`} />, cur], [])}

  </div>
  )
}

export default TodoList
