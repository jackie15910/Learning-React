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
    })
  }, []);

  return <div>Meals</div>
};

export default Meals;