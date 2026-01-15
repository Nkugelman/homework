
 import React from 'react'
import useFetch from './useFetch'
import './users.css'
import { useParams } from 'react-router';
import './comments.css'



export default function PostsComponnent() {
    const {postId} =useParams();

  const api =`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
  const { data:comments, loading, error } = useFetch(api);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Something went wrong</p>;
  
  

  return (
    
    <div className='comments-container'>
      {/*  <div className="post-card">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>*/}
     
<h3>Comments</h3>
      {comments.slice(0, 3).map(comments => (
        <div className="comment-card" key={comments.id}>
          <h3>{comments.name}</h3>
          <p>{comments.body}</p>
        </div>
              
      ))}
      
    </div>
  )
}
