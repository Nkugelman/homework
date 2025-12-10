//import { useState } from 'react'

import './App.css'
import Address from './Address'

function App() {
  const address ={
    street: "10 miele",
    city: "monsey",
    state:"NY",
    zip:"11218"
  }
 

  return (
    <>
   <Address street ={address.street} city ={address.city} state ={address.state} zip={address.zip}/>
    </>,
    <Address2 address={address}/>
  )
}

export default App
