
import { Component } from 'react';
import './App.css';
import Header from './Header';
import Recipe from './Recipe';
import NoRecipe from './NoRecipe';

class App extends Component{
  state ={
    recipes:[],
    selectedRecipie:1
  }
 async componentDidMount(){
  try{
      const response = await fetch('recipies.json');
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    const recipes = await response.json();
    console.log(recipes);
    this.setState({
      recipes
    });
    

  }
  catch(e){
    console.error(e);
  

  }
 /* this.interval = setInterval(()=>{
   this.setState({
    selectedRecipie:this.state.selectedRecipie ? 0 : 1
   })
  },5000)*/
 }
 componentWillUnmount(){
 //clearInterval(this.interval);
 }
 selectRecipe(){
  //console.log('selcted');
  this.setState({
    selectRecipe:0
  })
  
 }
render(){
  const {recipes,selectedRecipie} =this.state
  const recipesJsx =recipes.map(r => <option key={r.id}value={r.id}>{r.name}</option>);
  const recipe =!recipes.length ? <NoRecipe/>
    :<Recipe recipe ={recipes[selectedRecipie]}/>

  return (
    <>
    
  <Header/>
    <hr />
    <select id="recipes" onChange={this.selectRecipe}>
      <option hidden>select a recipe</option>
      {recipesJsx}
    </select>

   { recipe}
   

    </>
  )
}
}

export default App
