
import { useState } from 'react';
import './App.css'

function App() {
const [color,setColor]=useState({color:"green",backgroundColor:"black"});


  return (
    <>
    
    <label >Color:
      <input type="color" 
      value={color.color}
      onChange={(e)=>setColor((prev)=>({...prev,color:e.target.value}))

      }
      />
    </label>
      <label >Background Color:
      <input type="color" 
      value={color.backgroundColor}
      onChange={(e)=>setColor((prev)=>({...prev,backgroundColor:e.target.value}))

      }
      />
    </label>
      <div style={color}>
        <h1>This is the current color</h1>
      </div>
    </>
  )
}

export default App
