import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './assets/scss/style.scss';
import './assets/scss/normalize.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDo } from './components/models/todo-item';
import { NotFound } from './pages/NotFound';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/Layout';

const todos: ToDo[] = [
  {
    id:0,
    text:'Первое действие',
    isDone:false,
  },
  {
    id:0,
    text:'Второе действие',
    isDone:true,
  },
  {
    id:0,
    text:'Третье действие',
    isDone:true,
  },
  {
    id:0,
    text:'Четвёртое действие',
    isDone:true,
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement:<NotFound/>,
    children:[
      {
        path: '/',
        element:<HomePage todos={todos}/>
      },
      {
        path: '/todo',
        element:<ToDoListPage/>
      },
      {
        path: '/list/:id',
        element:<ItemDescription todos={todos}/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
], {basename: '/'})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
