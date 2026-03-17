import './App.css';
import {Outlet} from 'react-router';
import Header from './Header';


function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
