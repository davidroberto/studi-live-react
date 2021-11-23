import { Link } from "react-router-dom";

const Sidebar = ({ categories }) => {
  return (
    <>
      <aside>
        <h4>Toutes les catégories :</h4>
        {categories ? (
          <>
            {categories.map((category) => {
              return (
                <article>
                  <div>{category.strCategory}</div>
                  <Link to={`/category/${category.strCategory}`}>
                    Voir les recettes
                  </Link>
                  Voir les recettes
                </article>
              );
            })}
          </>
        ) : (
          <p>Pas de catégories</p>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
