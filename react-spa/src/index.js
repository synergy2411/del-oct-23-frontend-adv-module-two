import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from './Pages/Todos';
import ErrorPage from './Pages/ErrorPage';
import AddNew from './Pages/AddNew';
import TodoEdit from './Pages/TodoEdit';


const router = createBrowserRouter([
  {
    path: "/",     // http://localhost:3000
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "todos",        // http://localhost:3000/todos
        element: <Todos />
      }, {
        path: "new-todo",
        element: <AddNew />
      }, {
        path: "todos/:todoId",      // http://localhost:3000/todos/t001
        element: <TodoEdit />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);