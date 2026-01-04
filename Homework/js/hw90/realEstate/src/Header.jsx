import React from 'react'
import {Link,  NavLink} from 'react-router'

export default function Header() {
  return (
    
    <header>
        <h1>PCS Estates</h1>
         <Link to="/">home</Link> | <NavLink to="/buy">buy</NavLink> | <NavLink to="/rent">rent</NavLink> | <NavLink to="/foo">foo</NavLink>
    </header>
  )
}
