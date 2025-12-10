import { Component } from "react";

export default class Counter extends Component{
    state ={
        count:0
    }
    
    handleClick =()=>{
       // console.log("button was clicked");
       this.setState({
        count:this.state.count+1
       });
        
    }
    render(){
        return(
            <button onClick={
                /*this.handleClick*/
                /*() =>this.handleClick();*/
                this.handleClick



            }>{this.state.count}</button>
        )
    }
}