import React from 'react'
import useFetch from './useFetch'
import './users.css'
import { NavLink } from 'react-router';

export default function UserComponent() {
  const api ='https://jsonplaceholder.typicode.com/users';
  const { data: users, loading, error } = useFetch(api);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Something went wrong</p>;
  
  

  return (
    <div className='users-container'>
      {users.slice(0, 3).map(user => (
        <div className='user-class' key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
         
          <NavLink to={`/users/${user.id}`}
            className="view-comments">
  View Posts
      </NavLink>


        </div>
      ))}
    </div>
  )
}
