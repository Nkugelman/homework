

import { Component } from 'react'
import './App.css'

export default class App extends Component{

state ={
  first:'donald',
last: 'trump',
age:'80',
relection:true
}
handleChange =(e)=>{
  console.log(e.target.name);
 /* const newState={}
    newState[e.target.name] = e.target.value
  
 this.setState(newState)
}*/
const value =e.target.type === 'checkbox' ? e.target.checked :e.target.value;
this.setState({
  [e.target.name]:value
})
}

render(){
  const {first,last,age ,relection} =this.state
    return (
    <form >
      <div>first: <input value={first} onChange={this.handleChange} name ="first" /></div>
      <div>last: <input value={last}onChange={this.handleChange} name="last"/></div>
      <div>age: <input  type="number" value={age}onChange={this.handleChange} name="age"/></div>
      <div>should run 3rd term <input type="checkbox" name="relection" onChange={this.handleChange} checked={relection}/></div>
    
    </form>
  )
}
}



  


