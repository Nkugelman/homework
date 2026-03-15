import React from 'react'
import './Header.css'
import { NavLink } from 'react-router'

export default function Header() {
  return (
   <header>
    <h1>PCS React MongoDB SocketIO Express</h1>
    <NavLink to="/">posts </NavLink> | 
    <NavLink to="./addPosts">add post </NavLink>
    </header>
  )
}
