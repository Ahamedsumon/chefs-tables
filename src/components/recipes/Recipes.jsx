import { useEffect, useState } from "react";
import Cook from "../cookStation/Cook";
import Recipe from "../recipe/Recipe";
import CookContainer from "../cook-container/CookContainer";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="text-center col-span-7">
      <div className=" max-w-6xl mx-auto ">
        <div className="grid lg:grid-cols-2 gap-5 col-span-8">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleWantToCook={handleWantToCook}
            ></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
