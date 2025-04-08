import { useRef, useState, useEffect } from 'react';
import IngredientsList from './IngredientsList';
import ApiRecipe from './ApiRecipe';
import capitalize from 'lodash/capitalize';
// import AiRecipe from './AiRecipe';
// import { getRecipeFromMistral } from '../services/ai';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  // const inputref = useRef(null);
  const [recipe, setRecipe] = useState('');
  const recipeSection = useRef(null);

  console.log(recipeSection);

  // add the auto scroll to the recipe section
  useEffect(() => {
    if (recipe !== '' && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [recipe]);

  function submit(formData) {
    // event.preventDefault(); --> old react version
    //const formEl = event.currentTarget; --> old react version
    // const formData = new FormData(formEl); --> old react version
    const newValue = formData.get('ingredient');
    const capitalized = capitalize(newValue);
    setIngredients((prev) => [...prev, capitalized]);
    // inputref.current.value = '';
    // formData.reset(); --> old react version
  }

  const [clicked, setClicked] = useState(false);

  function getRecipe() {
    // const newRecipe = await getRecipeFromMistral(ingredients);
    setClicked(true);
  }

  function resetSearch() {
    setIngredients([]); // Clear the ingredients list
    setClicked(false); // Hide the ApiRecipe component
  }

  return (
    <main>
      <form action={submit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. Spaghetti, Broccoli..."
          aria-label="Add Ingredient"
          name="ingredient"
          minLength={3}
          maxLength={50}
          // ref={inputref}
          required
        ></input>
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={recipeSection}
        />
      )}
      {/* {recipe && <AiRecipe recipe={recipe} />} */}
      {clicked && <ApiRecipe resetSearch={resetSearch} ing={ingredients} />}
    </main>
  );
}
