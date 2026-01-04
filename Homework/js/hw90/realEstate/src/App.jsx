
import './App.css'
import Header from './Header'
import {Outlet} from 'react-router'

function App() {
 

  return (
    <>
  <Header/>
  <hr />

  <Outlet/>
    </>
  )
}

export default App
