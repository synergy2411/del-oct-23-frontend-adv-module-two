import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";


const router = createBrowserRouter([
  {
    path: "/",     // http://localhost:3000
    element: <App />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);