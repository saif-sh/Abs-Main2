import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import {Contactpg, Aboutpg, Blog, Blogpg, Servicespg,CareersPg,Partner} from "./Pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <Aboutpg />,
  },
  {
    path: "/CTA",
    element: <Contactpg />,
  },
  {
    path: "/Blogcard",
    element: <Blogpg />,
  },
  {
    path: "/Services",
    element: <Servicespg />,
  },
  {
    path: "/careers",
    element: <CareersPg/>,
  },
  {
    path: "/blog/:id",
    element: <Blog/>,
  },
  {
    path: "/partners",
    element: <Partner/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
