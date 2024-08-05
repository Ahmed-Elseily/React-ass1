import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'

function App() {

  let router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },

      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
