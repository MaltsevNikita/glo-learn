import { ToDo } from "../models/todo-item"
import classes from './ListItem.module.scss'

export const ListItem = ({ todo }: { todo: ToDo}) => {
  return (
    <a 
      target="_blank"
      className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} 
      href={`/app/list/${todo.id}`}>{todo.text}</a>
  )
}

