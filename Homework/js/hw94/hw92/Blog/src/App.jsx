
import React from "react"
import UserComponnent from "./UserComponnent"
import { Outlet } from "react-router"
import Header from "./Header"


function App() {

 

  return (
    <>
    <Header/>
    <Outlet/>
     
      </>
  )
}

export default App
