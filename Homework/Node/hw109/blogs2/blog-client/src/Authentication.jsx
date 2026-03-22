import { useState } from 'react';
import './Authentication.css';
import Logout from './Logout';
import Login from './Login';

export default function Authentication({setError}) {
  const [userName, setUserName] = useState();

  return (
    <div id="authentication">
      {userName
        ? <Logout setUserName={setUserName} userName={userName} setError={setError}/>
        : <Login setUserName={setUserName}setError={setError} />}
    </div>
  )
}
