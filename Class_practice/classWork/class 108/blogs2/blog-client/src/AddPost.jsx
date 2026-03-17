import React from "react";
import useForm from "./useForm";
import { useNavigate } from "react-router";

export default function AddPost() {

  const [formData, setFormData] = useForm({
    title: "",
    body: ""
  });

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      navigate("/posts");

    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <form id="addPost" onSubmit={submit}>
        <label>
          title:
          <input
            name="title"
            value={formData.title}
            onChange={setFormData}
            required
          />
        </label>

        <label>
          content:
          <textarea
            name="body"
            value={formData.body}
            onChange={setFormData}
          />
        </label>

        <button type="submit">add post</button>
      </form>
    </>
  );
}