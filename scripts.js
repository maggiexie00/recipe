/* scripts.js */
/*
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('preferences-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const cuisine = document.getElementById('cuisine').value;
        const diet = document.getElementById('diet').value;

        // Fetch recipes based on user preferences using Spoonacular API
        fetchRecipes(cuisine, diet);
    });
});

function fetchRecipes(cuisine, diet) {
    const apiKey = '00769ec18f914af8beefa3b804401b46';
    const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&diet=${diet}&apiKey=${apiKey}&number=9`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data.results);
        })
        .catch(error => console.error('Error fetching recipes:', error));
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = ''; // Clear previous recipes
    
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>Ready in ${recipe.readyInMinutes} minutes</p>
            <p>Servings: ${recipe.servings}</p>
            <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
        `;
        recipeList.appendChild(recipeCard);
    });
}*/
/* scripts.js */

document.addEventListener('DOMContentLoaded', function() {
    const ingredientForm = document.getElementById('ingredient-form');
    const searchByIngredientBtn = document.getElementById('search-by-ingredient');
    const ingredientInput = document.getElementById('ingredient-input');
    const recipeList = document.getElementById('recipe-list');

    ingredientForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const ingredients = ingredientInput.value;
        
        // Fetch recipes based on user input ingredients using Spoonacular API
        fetchRecipesByIngredients(ingredients);
    });

    searchByIngredientBtn.addEventListener('click', function() {
        ingredientForm.classList.toggle('hidden');
    });
});

function fetchRecipesByIngredients(ingredients) {
    const apiKey = '00769ec18f914af8beefa3b804401b46';
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data);
        })
        .catch(error => console.error('Error fetching recipes:', error));
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = ''; // Clear previous recipes
    
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>Missing ingredients: ${recipe.missedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
            <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
        `;
        recipeList.appendChild(recipeCard);
    });
}
