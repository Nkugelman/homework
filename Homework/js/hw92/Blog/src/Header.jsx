import React from 'react'
import { NavLink , useNavigate} from 'react-router'
import './header.css'

export default function Header() {
      const navigate = useNavigate();
  return (
     <header className="header">
      <h1 className="logo">My Blog</h1>
        <nav>
             <button
          className="nav-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <NavLink to="/users" className="nav-btn">
          Users
        </NavLink>
      </nav>
    </header>
  )
}
