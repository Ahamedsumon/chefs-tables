const Recipe = ({ recipe, handleWantToCook }) => {
  const {
    recipe_id,
    recipe_name,
    recipe_img,
    description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="flex mb-4">
      <div className="card bg-gray-100 shadow-lg">
        <figure className="px-10 pt-10">
          <img src={recipe_img} alt="Shoes" className="rounded-xl w-full" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-left text-gray-500">{description}</p>
          <hr className="text-gray-300" />
          <h3>Ingredients: {ingredients.length}</h3>
          {ingredients.map((ingredient, idx) => (
            <p key={idx}>{ingredient}</p>
          ))}
          <hr className="text-gray-300" />
          <div className="flex text-gray-500 my-5">
            <p>{preparing_time} minutes</p>
            <p>{calories} calories</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleWantToCook(recipe, recipe_id)}
              className="btn bg-[#0BE58A] border-none text-[#150B2B] rounded-3xl"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
