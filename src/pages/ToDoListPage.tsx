import React from 'react'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import {ToDoList} from '../components/ToDoList/ToDoList'

type Props = {}

export const ToDoListPage = (props: Props) => {
  return (
    <>
      <Header/>
      <Form/>
      <ToDoList/>
    </>
    
  )
}
