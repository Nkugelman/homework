import { Component } from "react";


export default class AddRecipe extends Component{

state={
     name:"",
     picture:"",
     ingredients:"",
     directions:""
};
handleChange =(e)=>{
  console.log(e.target.name);

const value= e.target.value;
this.setState({
  [e.target.name]:value
})
}
handleSubmit =(e)=>{
     e.preventDefault();
     const {name,picture,ingredients,directions}=this.state
 const newRecipe ={
     name: name,
     picture:picture,
     ingredients:ingredients.split(","),
     directions:directions.split(",")

 }
  this.props.addRecipe(newRecipe);
  this.setState({
      name: "",
      picture: "",
      ingredients: "",
      directions: ""
    });
  

}

render(){
     
  const {name,picture,ingredients,directions} =this.state
    return (
     <>
     
    <form className="form" onSubmit={this.handleSubmit}>
      <div>name: <input name="name" value={name} onChange={this.handleChange} /></div>
     <div>picture:<input name="picture" value={picture} onChange={this.handleChange} /></div>
      <div>ingredients: <input name="ingredients" value={ingredients} onChange={this.handleChange} /></div>
      <div>directions: <input name="directions" value={directions} onChange={this.handleChange} /></div>
      <button>Add Recipe</button>
    
    </form>
    </>
  )
}
}



  

