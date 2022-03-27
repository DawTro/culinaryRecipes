import { useState, useEffect } from "react";
import { Container, Card, Row } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Layout from "./components/Layout";

function App() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        setMeals(res.data.meals);
        console.log(res.data.meals);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let handlerSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  let handlerEnterPress = (e) => {
    if (e.key === "Enter") {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => {
          setMeals(res.data.meals);
          console.log(res.data.meals);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <Container>
      <div className="header d-flex flex-row justify-content-between py-3 border-bottom">
        <div className="text-center">
          <h1>Culinary heaven</h1>
        </div>
        <div className="d-flex align-items-center">
          <input
            className="text-center"
            type="text"
            onChange={handlerSearch}
            onKeyPress={handlerEnterPress}
            value={search}
            placeholder="Search"
          />
        </div>
      </div>
      <div className="main py-3">
        <Row xs={1} md={2} lg={3} xxl={4} className="category-list g-4 py-4">
          {meals.map((meal) => (
            <Card key={meal.idMeal}>
              <Card.Img variant="top" src={meal.strMealThumb} />
              <Card.Body>
                <Card.Title className="text-center">
                  <h3>{meal.strMeal}</h3>
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
      {/*<Layout /> */}
    </Container>
  );
}

export default App;
