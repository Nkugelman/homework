
import React from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function Post(props) {
  const { title, author, date, body } = props.post;

  dayjs.extend(relativeTime);

  return (
    <div>
      <h2>{title}</h2>
      <h3>by {author} on {dayjs(date).fromNow()}</h3>
      <p>{body}</p>
    </div>
  )
}
