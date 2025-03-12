import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../style.css"

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res) => {
      console.log(res.data.meals);
      setMeals(res.data.meals);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);
  const mealsList = meals.map(({strMeal, strMealThumb, idMeal}) => {
    return (
      <section className='card'>
        <img src={strMealThumb} alt={strMeal} />
        <section className='content'>
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    )
  })
  return <div className='meals-container'>{mealsList}</div>
};

export default Meals;