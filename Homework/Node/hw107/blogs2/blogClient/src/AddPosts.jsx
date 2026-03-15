import React, { useState } from 'react';

export default function AddPosts() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          body,
          date: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add post');
      }

      setTitle('');
      setBody('');

      alert('Post added successfully');

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Add Posts</h1>

      <form onSubmit={handleSubmit}>

        <label>
          Title:
          <input
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Content:
          <textarea
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>

        <button type="submit">Add Post</button>

      </form>
    </div>
  );
}