import { useState } from 'react';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  // const inputref = useRef(null);

  const ingredientListItem = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function submit(formData) {
    // event.preventDefault(); --> old react version
    //const formEl = event.currentTarget; --> old react version
    // const formData = new FormData(formEl); --> old react version
    const newValue = formData.get('ingredient');
    setIngredients((prev) => [...prev, newValue]);
    // inputref.current.value = '';
    // formEl.reset(); --> old react version
  }

  return (
    <main>
      <form action={submit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient"
          name="ingredient"
          // ref={inputref}
        ></input>
        <button>Add ingredient</button>
      </form>

      <section>
        <h2 className="ingredients-title">Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientListItem}
        </ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
    </main>
  );
}
