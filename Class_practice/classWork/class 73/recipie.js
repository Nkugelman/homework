/*(async function(){
    'use strict';
     const recipeList =$('#recipes');
     const recipeNameElement = $('name');
     const recipeImageElement = $('#picture');
     const recipeIngredientsElement = $('#ingredients');
     const recipeElements = $('.has-recipe');
     const noRecipeElements = $('.no-recipe');
     const errorElements = $('.error');
    try {
    const response = await fetch('recipes.json');
   
    if(! response.ok){
        throw new Error(`${response.status} - ${response.statusText}`);
    }
    const recipes = await response.json();
    recipes.forEach(recipe => {
        recipeList.append(`<option value="${recipe.id}">${recipe.name}</option>`

        );

    });
    recipeList.change(async e=>{
       // console.log(recipeList.val());
       try {
     const r = await  fetch(`${e.target.value}.json`)
     if(! r.ok){
        throw new Error(`${r.status} - ${r.statusText}`);
     }
        const recipe = await r.json();
        console.log(recipe);
        
       } catch (error){
        //console.error('Fetch error: ', error.message);
        errorElements.text(`Fetch error: ${error.message}`);
       }

    });


    //console.log(recipes);
    recipeElements.show();
    noRecipeElements.hide();
    recipeNameElement.text(recipe.name);
    recipeImageElement.attr('src', recipe.picture);
    recipeIngredientsElement.empty();
    recipe.ingredients.forEach(ingredient =>{
    recipeIngredientsElement.append(`<li>${ingredient}</li>`);
    });
} catch (error){
   /// console.error('Fetch error: ', error.message); 
   errorElements.text(`Fetch error: ${error.message}`); 
}


}());*/

(async function() {
  'use strict';

  const recipeList = $('#recipes');
  const recipeNameElement = $('#name');
  const recipeImageElement = $('#picture');
  const recipeIngredientsElement = $('#ingredients');
  const recipeElements = $('.has-recipe');
  const noRecipeElements = $('.no-recipe');
  const errorElements = $('.error');

  async function fetchJson(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      errorElements.text(`Fetch error: ${error.message}`);
    }
  }

  try {
    // Load list of recipes
    const recipes = await fetchJson('recipes.json');

    recipes.forEach(recipe => {
      recipeList.append(`<option value="${recipe.id}">${recipe.name}</option>`);
    });

    // When user selects a recipe
    recipeList.change(async e => {
      try {
        const r = await fetch(`${e.target.value}.json`);
        if (!r.ok) {
          throw new Error(`${r.status} - ${r.statusText}`);
        }
        const recipe = await r.json();

        // Update UI
        recipeElements.show();
        noRecipeElements.hide();

        recipeNameElement.text(recipe.name);
        recipeImageElement.attr('src', recipe.picture);
        recipeIngredientsElement.empty();

        recipe.ingredients.forEach(ingredient => {
          recipeIngredientsElement.append(`<li>${ingredient}</li>`);
        });

      } catch (error) {
        errorElements.text(`Fetch error: ${error.message}`);
      }
    });
  } catch (error) {
    errorElements.text(`Fetch error: ${error.message}`);
  }

})();
