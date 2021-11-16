const Sidebar = ({ categories }) => {
  return (
    <aside>
      <h3>Toutes les catégories :</h3>
      {categories ? (
        <>
          {categories.map((category) => {
            return (
              <article>
                <p>{category.strCategory}</p>
              </article>
            );
          })}
        </>
      ) : (
        <p>Pas de catégories</p>
      )}
    </aside>
  );
};

export default Sidebar;
