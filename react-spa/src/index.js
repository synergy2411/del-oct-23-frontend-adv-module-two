import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from './Pages/Todos';
import ErrorPage from './Pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",     // http://localhost:3000
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "todos",        // http://localhost:3000/todos
        element: <Todos />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);