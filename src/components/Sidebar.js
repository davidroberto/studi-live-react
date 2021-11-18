const Sidebar = ({ categories }) => {
  return (
    <aside>
      <h4>Toutes les catégories :</h4>
      {categories ? (
        <>
          {categories.map((category) => {
            return (
              <article>
                <div>{category.strCategory}</div>
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
