import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
export default function Comment(props) {
    const {body,author,date}= props.comments;
  return (
    <>
    <h5>{body}</h5>
    <h6>{author} on {dayjs(date).fromNow()}</h6>
    
    </>
  )
}
