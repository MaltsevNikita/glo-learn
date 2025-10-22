import React, { useState } from 'react'
import Form from '../components/Form/Form'
import {ToDoList} from '../components/ToDoList/ToDoList'
import { ToDo } from '../components/models/todo-item'

// type Props = {}

export const ToDoListPage = () => {
  const [todos,setToDos] = useState<ToDo[]>([])

    const createNewToDo = (text:string) => {
      const newToDo: ToDo = {
        id: todos.length,
        text:text,
        isDone:false,
      }
      setToDos([...todos, newToDo])
      
    }

    const updateToDo = (toDoItem: ToDo) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === toDoItem.id){
          todo.isDone = !todo.isDone
        }
        return todo
      })
      setToDos(newTodos)
    }

    const deleteToDo = (toDoItem: ToDo) => {
      const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
      setToDos(newTodos)
    }

  return (
    <>
      
      <Form createNewToDo = {createNewToDo}/>
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
    </>
    
  )
}
