import React from 'react'

export default function RecipeList(props) {
    const {recipes,selectedRecipe,selectRecipe} =props
      const recipesJsx = recipes?.map((r, index) => <option key={r.id} value={index}>{r.name}</option>);
  return (
  
     <select id="recipes"  value={selectedRecipe}onChange={selectRecipe}>
          <option hidden>select a recipe</option>
          {recipesJsx}
        </select>
  )
}
