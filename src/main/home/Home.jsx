// HomeScreen.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";
import "../../App.scss";

const HomeScreen = () => {
  return (
    <NavLink to="/group">
      <div className="hero_home">
        <div className="herohome"></div>
      </div>
    </NavLink>
  );
};

export default HomeScreen;
