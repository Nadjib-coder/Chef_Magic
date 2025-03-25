import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RecipeApp(props) {
  const [recipes, setRecipes] = useState([]); // Store all recipes
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Store filtered recipes

  // Fetch recipes from the API when the component mounts
  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/1b3b18b6-1013-4d76-898e-df93a3beab89')
      .then((response) => {
        setRecipes(response.data);
        setFilteredRecipes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filter recipes based on user-input ingredients

  useEffect(() => {
    const filtered = recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) => props.ing.includes(ingredient)),
    );
    setFilteredRecipes(filtered);
  }, [recipes, props.ingredients]);

  return (
    <div className="recipe-app">
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <strong>Ingredient: </strong>
              <ul>
                {recipe.ingredients.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
              <strong>instructions: </strong>
              <ul>
                {recipe.instructions.map((ins, index) => (
                  <li key={index}>{ins}</li>
                ))}
              </ul>
              <p>
                <strong>Preparation Time:</strong> {recipe.prepTime}
              </p>
              <p>
                <strong>Difficulty:</strong> {recipe.difficulty}
              </p>
              <p>
                <strong>Category:</strong> {recipe.category}
              </p>
              <strong>Tags:</strong>
              <ul>
                {recipe.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
              <p>
                <strong>Rating:</strong> {recipe.rating}
              </p>
            </div>
          ))
        ) : (
          <p>
            No recipes found. Try different ingredients like Spaghetti or
            Broccoli.
          </p>
        )}
      </div>
    </div>
  );
}
