
import { Component } from 'react';
import './App.css';
import Header from './Header';
import Recipe from './Recipe';
import NoRecipe from './NoRecipe';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

class App extends Component {
  state = {
    recipes: [],
    selectedRecipe: 1,
    showAddRecipe:false
  }

  constructor() {
    super();

    this.selectRecipe = this.selectRecipe.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch('recipes.json');
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      const recipes = await response.json();
      console.log(recipes);

      this.setState({
        recipes
      });

    } catch (e) {
      console.error(e);
    }

    /*this.interval = setInterval(() => {

      this.setState({
        selectedRecipe: this.state.selectedRecipe ? 0 : 1
      })
    }, 5000);*/
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  selectRecipe =e => {
    this.setState({
      selectedRecipe: e.target.value
    });
  }
  addRecipe =(newRecipe) =>{
    const id =this.state.recipes.length+1;
    this.setState(prev =>({
      recipes:[...prev.recipes,{...newRecipe,id}]
    }))
  }
  addRecBtn =()=>{
    this.setState({
      showAddRecipe:true
    })
  }

  render() {
    const { recipes, selectedRecipe } = this.state;

    const recipe = !recipes.length
      ? <NoRecipe />
      : <Recipe recipe={recipes[selectedRecipe]} />

    return (
      <>
        <Header />
       
     <RecipeList recipes={recipes} selectedRecipe={selectedRecipe} selectRecipe={this.selectRecipe}/>

        {recipe}
        {!this.state.showAddRecipe &&(
          <button onClick={ this.addRecBtn}>Add Recipe</button>)}
      {  this.state.showAddRecipe &&(
        <AddRecipe addRecipe={this.addRecipe}/>
      )
      }
      </>
    );
  }
}

export default App