import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import Home from "./pages/Home";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route
          path="/category/:strCategory"
          element={<Category categories={categories} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
