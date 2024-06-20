import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const foodItems = [
    "Dal",
    "Rice",
    "Chapati",
    "Salad",
    "Green Vegetables",
    "Fruits",
  ];
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
