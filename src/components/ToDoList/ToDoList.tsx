import React from 'react'
import { ToDoListItem } from './ToDoListItem/ToDoListItem'
import './ToDoList.scss'
import { ToDo } from '../models/todo-item'


export const ToDoList = ( props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {

    const checkList = () => {
        return props.todos
                .filter((item) => !item.isDone)
                .map((item,idx) => {
                    return(
                        <ToDoListItem 
                        toDoItem={item} 
                        key={idx}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                        />
                    )
                })
    }

    const uncheckList = () => {
        return props.todos
                .filter((item) => item.isDone)
                .map((item,idx) => {
                    return(
                        <ToDoListItem 
                            toDoItem={item} 
                            key={idx} 
                            updateToDo={props.updateToDo}
                            deleteToDo={props.deleteToDo}/>
                    )
                })
    }

  return (
    <div className="todo-container">

        <ul className="todo-list failed">
            { checkList()}
        </ul>
        <ul className="todo-list completed">
            { uncheckList() }
        </ul>
    </div>
  )
}
