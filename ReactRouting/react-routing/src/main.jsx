import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './home.jsx'
import './index.css'
import Lol from './lol.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home/>}/>
    <Route path="/kunal/:userid" element={<Lol/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
