import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Post from './Post';
import { io } from "socket.io-client";

export default function Posts() {
  const  [posts,setPosts] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:8080/posts');
        if (! response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const postsData = await response.json();
       // console.log(posts);
       setPosts(postsData);
      } catch(e) {
        console.error(e);
      }
    })();
  }, []);
  const socketIo =io('http://localhost:8080');
  useEffect(() => {
    function addPost() {
      setPosts([...posts,post]);
    }
   
   socketIo.on('post', addPost);
   return () => {
    socketIo.off('post', addPost);
   }
  },[posts]);

  return (
    <div>
   {posts?.map(post => 
  <Post key={post._id} post={post} />
)}
    </div>
  )
}
