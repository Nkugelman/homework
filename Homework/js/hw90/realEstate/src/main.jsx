import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'

import {BrowserRouter,Routes,Route,Navigate} from 'react-router'
import Sell from './Sell.jsx'
import Rent from './Rent.jsx'
import Home from './Home.jsx'
import Buy from './buy.jsx'
import PageNotFound from './PageNotFound.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<App/>}>
      <Route index element={<Home />} />
        
          <Route path="/Sell" element={<Sell />}/>
            <Route path="/rent" element={<Rent />}/>
              <Route path="/buy" element={<Buy />}/>

             <Route path="*" element={<PageNotFound/>} />

      </Route>

    </Routes>
    
    
    </BrowserRouter>
    
   
  </StrictMode>,
)
