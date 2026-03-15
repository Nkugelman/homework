import React from 'react'
import { useEffect } from 'react'

export default function Posts() {
  const [posts, setPosts] = React.useState([]);
  useEffect(()=>{
     (async()=>{
      try{
    const response = await fetch('http://localhost:3000/posts')
    if(! response.ok){
      throw new Error(` ${response.status} - ${response.statusText}`);
    }
      const posts = await response.json();
      if(!posts.length){
        throw new Error('no posts found');
      }
      posts.forEach(post => {
        post.date = new Date(post.date);
      });
      setPosts(posts);
      console.log(posts);
    
      }catch(e){
        console.error(e);
        
      }
     })();
  },[])
  return (
    <div>
      <h1>Posts</h1>
     {posts.map(post => (
      <div key={post._id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.author} - {post.date.toLocaleString()}</p>
      </div>
     ))}


    </div>
  )
}
/*
app.get('/', async(req, res) => {
  try {
  const posts =await req.posts.find().toArray();
  res.render('layout', {posts,partials:{content:'index'}});
} catch (err) {
  next(err);
}
});

app.post('/',async(req, res,next)=>{
  //console.log(req.body);
  try {
    req.body.date = new Date();
    req.body.author = 'PCS';
 await req.posts.insertOne(req.body);
  
res.redirect('/')
  }catch (err) {
    next(err);
  }
});*/
