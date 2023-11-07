import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="Logo-Container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqw7IyPNqFZ3Ee305x-MVZIn_WLEsfZQ8hz4XPA74roy0kSkHsrTZdIvS9Tz6QKY4F-50&usqp=CAU"
        />
      </div>

      <div className="Menu">
        <ul>
          <li>Home</li>
          <li>Orders</li>
          <li>Profile</li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};

const MenuCards = () => {
  return (
    <div className="card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="image"
        alt="loding image"
        src="https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg"
      />
      <h3>Mehfil</h3>
      <h3>5star</h3>
      <h3>Chinese</h3>
      <h3>5min</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="SearchButton">Serach</div>
      <div className="Card-Container">
        <MenuCards />
        <MenuCards />
        <MenuCards />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
