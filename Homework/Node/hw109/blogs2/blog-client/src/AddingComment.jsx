import React from 'react'
import useForm from './useForm'

export default function AddingComment({ id, setAddingComment, setError }) {
  const [formData, setFormData] = useForm({
    text: ''
  });

  async function addComment(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/posts/${id}/comments`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(`${response.status} - ${message ?? response.statusText}`);
      }

      setFormData({
        target:{
            name:'text',
            value:''
        }
      }); // clear input
      setAddingComment(false);

    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  }

  return (
    <div>
      <form onSubmit={addComment}>
        <input
          name='text'
          required
          value={formData.text}
          onChange={setFormData}
        />
        <button>add</button>
        <button type='button' onClick={() => setAddingComment(false)}>
          cancel
        </button>
      </form>
    </div>
  );
}