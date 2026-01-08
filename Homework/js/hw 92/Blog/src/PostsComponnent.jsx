import React from 'react';
import useFetch from './useFetch';
import { useParams, NavLink } from 'react-router';
import './posts.css';

export default function PostsComponnent() {
  const { userId } = useParams();

  const api = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const { data: posts, loading, error } = useFetch(api);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div className='posts-container'>
      <h2>User {userId} Posts</h2>

      {posts.slice(0, 3).map(post => (
        <div className='postCard' key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <NavLink
            to={`/users/${userId}/posts/${post.id}`}
            className="view-comments"
          >
            View Comments
          </NavLink>
        </div>
      ))}
    </div>
  );
}
