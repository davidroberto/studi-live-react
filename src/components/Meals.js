import { useState } from "react";

const Meals = () => {
  const [meal, setMeal] = useState(null);

  const handleClick = async (event) => {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    const mealsFromAPI = await response.json();
    setMeal(mealsFromAPI.meals[0]);
  };

  return (
    <div>
      {meal ? (
        <article>
          <p>{meal.strMeal}</p>
          <p>{meal.strInstructions}</p>
        </article>
      ) : (
        <p>Pas de recette</p>
      )}
      <button onClick={handleClick}>Afficher une recette</button>
    </div>
  );
};

export default Meals;
