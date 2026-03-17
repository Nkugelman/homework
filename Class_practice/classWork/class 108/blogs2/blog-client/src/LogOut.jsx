import React from 'react'

export default function LogOut(props) {
      const {setUserName ,userName}=props;
  
  return (
    <div>
        logged in as {userName}
        <button onClick={()=> setUserName('')}>Logout</button>
    </div>
  )
}
