const Header = ({ categories }) => {
  const lastCategories = categories.slice(0, 3);

  return (
    <header>
      <ul>
        {lastCategories ? (
          <>
            {lastCategories.map((category) => {
              return (
                <li>
                  {category.strCategory} &nbsp;
                </li>
              );
            })}
          </>
        ) : (
          <p>Pas de catégories</p>
        )}
      </ul>
    </header>
  );
};

export default Header;
