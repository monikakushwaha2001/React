import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "../Components/FoodItems";
import ErrorMessage from "../Components/ErrorMessage";

function App() {
  //const foodItems = [];
  // const foodItems = [
  //   "Dal",
  //   "Rice",
  //   "Chapati",
  //   "Salad",
  //   "Green Vegetables",
  //   "Fruits",
  // ];

  // Using ternary operator
  // let emptyMessage = foodItems.length == 0 ? <h3>I am still hungry</h3> : null;

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ErrorMessage />
      <FoodItems />
    </React.Fragment>
  );
}

export default App;
