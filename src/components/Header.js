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
                  <p>{category.strCategory}</p>
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
