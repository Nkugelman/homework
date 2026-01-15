import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router'
import './index.css'
import App from './App.jsx'
import UserComponent from "./UserComponnent";
import PostsComponnent from './PostsComponnent.jsx'
import CommentsComponents from './CommentsComponnents.jsx'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
       
         <Route index element={<Home />} />
        <Route path="users" element={<UserComponent />} />

        <Route path="users/:userId" element={<PostsComponnent />} />
        <Route path="users/:userId/posts/:postId" element={<CommentsComponents />} />



      </Route>
    </Routes>
    </BrowserRouter>
   ,
)
