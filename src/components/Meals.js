import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Meals = () => {
  const [meal, setMeal] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      const mealsFromAPI = await response.json();
      setMeal(mealsFromAPI.meals[0]);
    })();

    (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      const categoriesFromApi = await response.json();
      setCategories(categoriesFromApi.categories);
    })();
  }, []);

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
    <>
      <Header categories={categories} />
      <main>
        {meal ? (
          <article>
            <p>{meal.strMeal}</p>
            <div class='meal-photo-text'>
                <div class='photo'>
                    <img src={meal.strMealThumb} width="200" ></img>
                </div>
                <div class='text'>
                    {meal.strInstructions}
                </div>
            </div>
          </article>
        ) : (
          <p>Pas de recette</p>
        )}
        <button onClick={handleClick}>Afficher une recette</button>
      </main>
      <Sidebar categories={categories} />
    </>
  );
};

export default Meals;
