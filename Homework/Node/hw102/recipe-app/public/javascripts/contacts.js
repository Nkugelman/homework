/* global $, pcsMessageBox */

import messageBox from './messageBox.js'

const recipesTable = $('#recipesTable tbody');
const titleInput = $('#title');
const descriptionInput = $('#description');
const ingridientsInput = $('#ingridients');
const instructionsInput = $('#instructions');
const recipeForm = $('#recipeForm');
const addRecipe = $('#addRecipe')

let recipes = [];

recipeForm.on('submit', async e => {
  e.preventDefault();

  const newRecipe = {
    title: titleInput.val(),
    description: descriptionInput.val(),
    ingridients: ingridientsInput.val(),
    instructions: instructionsInput.val(),
  };

  const oldRecipe = recipeForm.data('recipe');
  let url = '/recipe-app/';
  if (oldRecipe) {
    url += oldRecipe.id;
  }
  try {
    const response = await fetch(url, {
      method: oldRecipe ? 'PUT' : 'POST',
      body: JSON.stringify(newRecipe),
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    if (!oldRecipe) {
       const createdRecipe = await response.json();
       addRecipes(createdRecipe);
    } else {
      const tds = oldRecipe.row.find('td');
      tds[0].textContent = newRecipe.title;
      tds[1].textContent = newRecipe.description;
      tds[2].textContent = newRecipe.ingridients;
      tds[3].textContent = newRecipe.instructions;

      Object.assign(oldRecipe,newRecipe);
    }
    hideForm();
  } catch (e) {
    messageBox({ msg: e.message });
  }
});

function addRecipes(newRecipe) {
  if (!recipes.length) {
    
    recipesTable.empty();
  }

  recipes.push(newRecipe);

  const row = $(`<tr>
     
                    <td>${ newRecipe.title}</td>
                    <td>${ newRecipe.description}</td>
                    <td>${ newRecipe.ingridients}</td>
                    <td>${ newRecipe.instructions}</td>
                    <td><button class="edit">edit</button> <button class="delete">delete</button></td>
                  </tr>`);

  newRecipe.row = row;
  recipesTable.append(row);

  row.find('.edit').click(async () => {
    showForm(newRecipe);
  });

  row.find('.delete').click(async () => {
    try {
      const response = await fetch(`/recipe-app/${newRecipe.id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        const msg = await response.text();
        throw new Error(`${response.status} - ${response.statusText} - ${msg}`);
      }

      row.remove();

      recipes = recipes.filter(c => c !== newRecipe);

      if (!recipes.length) {
        recipesTable.html(`<tr>
          <td colspan="5">No recipes loaded</td>
        </tr>`);
      }
    } catch (e) {
      messageBox({ msg: e.message });
    }
  });
}

function showForm(recipe) {
  if (recipe) {
    titleInput.val(recipe.title);
    descriptionInput.val(recipe.description);
    ingridientsInput.val(recipe.ingridients);
    instructionsInput.val(recipe.instructions);

    recipeForm.data('recipe', recipe);
  }
 recipeForm.css('display', 'inline-block');
}

function hideForm() {
 
 recipeForm.trigger('reset');

  recipeForm.css('display', 'none');
};

addRecipe.click(() => {
  recipeForm.removeData('recipe');
  recipeForm.trigger('reset')
  showForm();
});

$('#cancel').click(() => {
  hideForm();
});

try {
  const response = await fetch('/recipe-app/');
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  const loadedRecipes = await response.json();
  loadedRecipes.forEach(addRecipes);
} catch (e) {
  messageBox({ msg: `Unable to load recipes - ${e.message}` });
}
