import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = ({ categories }) => {
  const [meal, setMeal] = useState(null);

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
            <div class="meal-photo-text">
              <div class="photo">
                <img src={meal.strMealThumb} width="200"></img>
              </div>
              <div class="text">{meal.strInstructions}</div>
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

export default Home;
