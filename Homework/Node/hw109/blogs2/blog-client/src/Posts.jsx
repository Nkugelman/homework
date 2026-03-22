import React, { useState } from 'react'
import { useEffect } from 'react'
import Post from './Post';
import io from 'socket.io-client';

export default function Posts({setError}) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:8080/posts');
        if (!response.ok) {
          const message = await response.text();
          throw new Error(`${response.status} - ${message?? response.statusText}`);
        }
        const postData = await response.json();
        setPosts(postData);
      } catch (e) {
        console.error(e);
        setError(e.message)
      }
    })();
  }, []);

  const socketIo = io('http://localhost:8080');
  useEffect(() => {
    //const socketIo = io('http://localhost:8080');
    function addPost(post) {
      console.log(posts);
      setPosts([...posts, post]);
    }
    socketIo.on('post', addPost);
    function addComment({postId,comment}){
      setPosts(prevPosts=>{
        if(!prevPosts) return prevPosts;
        const newPosts =[...prevPosts];
        const index = newPosts.findIndex(p=>String(p._id )===postId);
        if(index===1)return prevPosts;
        const post ={...newPosts[index]};
        const comments =[...(post.comments||[])];
        comments.push(comment);
        post.comments=comments;
        newPosts[index]=post;
        return newPosts;
      })

      console.log(comment);
      
    }
    socketIo.on('comment', addComment);
    

    return () => {
      //socketIo.close();
      socketIo.off('post', addPost)
      socketIo.off('comment', addComment)
    }
  }, [posts, socketIo]);

  return (
    <div>
      {posts?.map(p => <Post key={p._id} post={p} setError={setError} />)}
    </div>
  )
}
