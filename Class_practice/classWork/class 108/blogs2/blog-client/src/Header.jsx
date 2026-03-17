import React from 'react';
import './Header.css';
import { NavLink } from 'react-router';
import Authentication from './Authentication';

export default function Header() {
  return (
    <header>
      <h1>PCS React MongoDB SocketIO Express Blog</h1>
      <NavLink to="/">posts</NavLink> | <NavLink to="/addPost">add post</NavLink>|<Authentication/>
    </header>
  )
}
