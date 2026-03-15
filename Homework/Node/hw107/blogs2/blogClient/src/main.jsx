import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router'
import AddPosts from './AddPosts.jsx'
import Posts from './Posts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App />}>
      <Route index element={<Posts/>}/>
      <Route path="/addPosts" element={ <AddPosts />}/>
      <Route path ="*" element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)
