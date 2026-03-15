import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Outlet } from 'react-router'
import Header from './Header'

function App() {
 

  return (
    <>
   <Header/>
    <Outlet/>
     </>
  )
}

export default App
