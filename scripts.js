/* scripts.js */

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
    const apiKey = 'YOUR_SPOONACULAR_API_KEY';
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
}
