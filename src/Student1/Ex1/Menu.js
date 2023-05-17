import React from "react";

export const Menu = () => {
  return (
    <div id="Menu">
      <h1> Menu </h1>
      <ul>
        <div className ="Food">
          <h2>Food</h2>
          <hr />
          <li>Hamburger...$1.00</li>
          <li>Cheeseburger...$1.00</li>
          <li>Hot Dog...$1.00</li>
          <li>Fries...$1.00</li>
        </div>
        <div className ="drink">
          <h2>Drink</h2>
          <hr />
          <li>Coffee...$1.00</li>
          <li>Tea...$1.00</li>
          <li>Milk...$1.00</li>
          <li>Coke...$1.00</li>
        </div>
        <div className ="dessert">
          <h2>Dessert</h2>
          <hr />
          <li>Chocalate Pie...$1.00</li>
          <li>Apple Pie...$1.00</li>
          <li>Cannoli...$1.00</li>
        </div>
      </ul>
    </div>
  );
};