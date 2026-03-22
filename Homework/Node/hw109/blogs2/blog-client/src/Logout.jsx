import React from 'react';

export default function Logout(props) {
  const { setUserName, userName,setError } = props;

  async function logout(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/authentication/logout', {
        method: 'POST',
        credentials: 'include'
      });

    if (!response.ok) {
          const message = await response.text();
          throw new Error(`${response.status} - ${message?? response.statusText}`);
        }

      setUserName(null); // ✅ explicitly clear
    } catch (e) {
      setError(e.message)
      console.error(e);
    }
  }

  return (
    <div>
      logged in as {userName}
      <button onClick={logout}>Logout</button>
    </div>
  );
}