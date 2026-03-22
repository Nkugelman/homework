import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

import Error from './Error'

export default function Home({error,setError}) {
  return (
    <>
    
        <Header setError={setError}/>
        <Error setError={setError} error={error}/>
        <Outlet/>
     </>
  )
}
