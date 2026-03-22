import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import AddPost from './AddPost.jsx';
import Posts from './Posts.jsx';
import { use } from 'react';
import Home from './Home.jsx';
import { useState } from 'react';
function App() {
  const [error,setError] =useState();
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home error={error} setError={setError}/> }>
          <Route index element={<Posts setError={setError}/>} />
          <Route path="/addPost" element={<AddPost setError={setError} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
