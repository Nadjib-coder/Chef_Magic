export default function IngredientsList(props) {
  const ingredientListItem = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <h2 className="ingredients-title">Ingredients on hand:</h2>
      <span>Add at least four (4) ingredients.</span>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientListItem}
      </ul>
      {props.ingredients.length >= 4 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
