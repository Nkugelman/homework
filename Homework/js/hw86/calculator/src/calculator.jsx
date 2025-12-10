import React, { Component } from "react";
export default class Calculator extends Component{
  state ={
    display:0,
    total:null,
    operation:null
  }
 
  handleDisplay =(e) =>{
     let value = e.target.innerText;
      let display = this.state.display;
   
  
    if(display === 0 || display === "0"){
      display=value
    }
    else{
     display = display + value;
    }
   

    console.log(value);
    this.setState({
       display:display,
       

    })
  }
    handleOperation = (e)=>{
      const operator =e.target.innerText
   
     
      this.setState({
       total:this.state.display,
       operation:operator,
       display:0
      });
    }
    handleEqual = ()=>{
       const { total, display, operation } = this.state;
          if (!total || !operation) return;
            const num1 = Number(total);
            const num2 =Number(display);
            let result =0;
            switch(operation){
              case "+":
                result =num1 +num2
                break;
                
                
            }
              console.log(result);
            this.setState({
              display:String(result),
               total: null,
             operation: null
            })

    }
  
    
  
  
    render(){
     return (
       <>
    <div className="calculator">
      <div className="display">{this.state.display}</div>

     <div className="buttons">
  <button onClick={this.handleDisplay}>7</button>
  <button onClick= {this.handleDisplay}>8</button>
  <button onClick={this.handleDisplay}>9</button>
  <button onClick={this.handleOperation}>/</button>
  <br />

  <button onClick={this.handleDisplay}>4</button>
  <button onClick={this.handleDisplay}>5</button>
  <button onClick={this.handleDisplay}>6</button>
  <button onClick={this.handleOperation}>*</button>
  <br />

  <button onClick={this.handleDisplay}>1</button>
  <button onClick={this.handleDisplay}>2</button>
  <button onClick={this.handleDisplay}>3</button>
  <button onClick={this.handleOperation}>-</button>
  <br />

  <button onClick={this.handleDisplay}>0</button>
  <button onClick={this.handleDisplay}>.</button>
  <button onClick={this.handleEqual}>=</button>
  <button onClick={this.handleOperation}>+</button>
     </div>
      </div>

</>
)
}
}



     

  



      
      

    
  