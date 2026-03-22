import React from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import './Post.css'
import Comment from './Comment';
import { useState } from 'react';
import AddingComment from './AddingComment';

  dayjs.extend(relativeTime);

export default function Post(props) {
  const setError =props;
  const { _id:id,title, author, date, body ,comments} = props.post;
  const [addingComment,setAddingComment] = useState();



  return (
    <div>
      <h2>{title}</h2>
      <h3>by {author} on {dayjs(date).fromNow()}</h3>
      <p>{body}</p>
      <div className='comments'>
        {comments?.map(c=> <Comment comments={c}/>)}
        {addingComment&& <AddingComment id={id}setAddingComment={setAddingComment}
        setError ={setError}/>}
        <button onClick={()=>setAddingComment(true)}>add comment</button>
      </div>
      
    </div>
  )
}
