import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Category = ({ categories }) => {
  const [meals, setMeals] = useState([]);
  const { strCategory } = useParams();

  useEffect(() => {
    (async function () {
      const url =
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + strCategory;

      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      const mealsFromApi = await response.json();
      setMeals(mealsFromApi.meals);
    })();
  }, [strCategory]);

  return (
    <>
      <Header categories={categories} />
      <section>
        {meals ? (
          <>
            {meals.map((meal) => {
              return (
                <article key={meal.idMeal}>
                  <p>{meal.strMeal}</p>
                </article>
              );
            })}
          </>
        ) : (
          <p>Pas de recette</p>
        )}
      </section>
    </>
  );
};

export default Category;
