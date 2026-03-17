import React from 'react'
import  './Authentication.css';
import { use } from 'react';
import { useState } from 'react';
import LogOut from './LogOut';
import LogIn from './LogIn';
export default function  () {
  const [userName, setUserName ]=useState();
  return (
    <div id='authentication'> 
    {userName ? <LogOut setUserName={setUserName} userName={userName}/> : <LogIn setUserName={setUserName}/>}
    </div>
  )
}
