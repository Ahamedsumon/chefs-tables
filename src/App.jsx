import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Landingpage from "./components/landing-page/Landingpage";
import Recipe from "./components/recipe/Recipe";
import Recipes from "./components/recipes/Recipes";
import CookContainer from "./components/cook-container/CookContainer";
import Cook from "./components/cookStation/Cook";

function App() {
  // after click card item will be addeded in  the want to cook station
  const [cooks, setCook] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const [times, setTimes] = useState([]);
  const [calories, setCalories] = useState([]);
  const handleWantToCook = (recipe, id) => {
    let newCook = [...cooks, recipe];

    const idOfCooks = cooks.map((itemId) => itemId.recipe_id);
    if (idOfCooks.includes(id)) {
      const showToast = document.getElementById("toast");
      showToast.classList.remove("hidden");
      setTimeout(function () {
        showToast.className = "hidden";
      }, 3000);
    } else {
      setCook(newCook);
    }
  };
  // After click item  will be removed from want to cook station
  const handlePreparing = (id, cook, time, calorie) => {
    const removePreparing = cooks.filter((cook) => cook.recipe_id !== id);
    setCook(removePreparing);

    const newPreparing = [...preparing, cook];

    setPreparing(newPreparing);

    const newTimes = [...times, time];

    setTimes(newTimes);

    const newCalories = [...calories, calorie];
    setCalories(newCalories);
  };

  return (
    <>
      {/* Page header */}
      <Header></Header>
      {/* Landing page */}
      <Landingpage></Landingpage>
      {/* Our Recipe headline and descrition */}
      <h2 className="text-3xl text-center font-bold text-[#150B2B]">
        Our Recipes
      </h2>
      <p className="max-w-4xl mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </p>
      {/* Toast alert: after click the preparing button the toast will show for 3 seconds */}
      {
        <div
          id="toast"
          className="toast toast-top top-25 left-155 sticky hidden"
        >
          <div className="alert bg-gray-100 text-black gap-0 flex flex-col border-none rounded-none">
            <span className="m-0">Already Exists.</span>
            <div className="w-full p-0 m-0 h-1 bg-gray-200 rounded overflow-hidden">
              <div className="h-full bg-primary progress-bar"></div>
            </div>
          </div>
        </div>
      }

      <div className="max-w-11/12 my-10 mx-auto md:grid md:grid-cols-12 md:gap-5">
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <CookContainer
          cooks={cooks}
          preparing={preparing}
          times={times}
          calories={calories}
          handlePreparing={handlePreparing}
        ></CookContainer>
      </div>
    </>
  );
}

export default App;

// flex flex-col md:flex-row gap-5 max-w-7xl mx-auto my-10
