import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import Category from "./Category";
import "./Main.css";

const Main = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        setMeals(response.data.categories);
        console.log(response.data.categories);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  console.log(meals);
  return (
    <Row xs={1} md={2} lg={3} xxl={4} className="category-list g-4 py-4">
      {meals.map((meal) => (
        <Category
          id={meal.idCategory}
          image={meal.strCategoryThumb}
          title={meal.strCategory}
        />
      ))}
    </Row>
  );
};

export default Main;
