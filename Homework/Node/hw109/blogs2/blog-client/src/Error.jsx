import React from 'react'
import'./Error.css'
import { useEffect } from 'react'

export default function Error({setError,error}) {
    useEffect(()=>{
    const timeout = setTimeout(()=>{
        setError();
    },2000);
    return()=>{
        clearTimeout(timeout)
    }
    },[error])
  return (
    <h5 className='error'>{error}</h5>
   
  )
}
