import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [mealsData, setMealsData] = useState([]);

  useEffect(() => {
    async function getMeals() {
      try {
        const md = await fetch("http://localhost:3000/meals");
        const meals = await md.json();
        setMealsData(meals);
      } catch (error) {
        console.log(error, "fetching data failed!");
      }
    }

    getMeals();
  }, []);

  return (
    <ul id="meals">
      {mealsData.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
