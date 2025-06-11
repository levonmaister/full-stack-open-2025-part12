import { render, screen } from '@testing-library/react'
import { useEffect, useState } from 'react'
import axios from '../util/apiClient'
import Todo from './Todo'





  const deleteTodo = async (todo) => {
    await axios.delete(`/todos/${todo._id}`)
    refreshTodos()
  }

  const completeTodo = async (todo) => {
    await axios.put(`/todos/${todo._id}`, {
      text: todo.text,
      done: true
    })
    refreshTodos()
  }


  const refreshTodos = async () => {
    const { data } = await axios.get('/todos')
    setTodos(data)
  }




test('renders content', () => {
  const todoItem = {
    text: 'Component testing is done with react-testing-library',
    done: false
  }

  render(<Todo todo={todoItem} deleteTodo={deleteTodo} completeTodo={completeTodo}/>)

  const element = screen.getByText('Component testing is done with react-testing-library')
  expect(element).toBeDefined()
})