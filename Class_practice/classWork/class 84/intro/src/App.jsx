
import './App.css';
import React from 'react';
import  Welcome , {WelcomeC} from './Welcome';
import Clock from './Clock';
const potus ={
  first:'donald',
  last:'trump'
}
function formatName(person){
  return (
    <div>
      {person.first} {person.last}
    </div>
  )
}

const jsx =(
    <>
    <div>hello {potus.first}{potus.last}!</div>
    <div>{formatName(potus)}</div>
    <div>good bye world!</div>
 <Welcome first ="donald" last ="trump"/> 
 <Welcome first ="elon" last ="musk"/> 
       <WelcomeC first ="donald" last ="trump"/>
       <WelcomeC first ="jd" last ="vance"/>
       <Clock/>
    </>
   
   
  )

function App() {
 

  return jsx;
}

export default App
