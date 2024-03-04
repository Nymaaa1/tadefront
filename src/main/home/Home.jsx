// HomeScreen.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";
import "../../App.scss";

const HomeScreen = () => {
  return (
    <div className="app">
      <section className="hero">
        <NavLink to="/group">
          <div className="content">
            <h1>TADE</h1>
            <div className="solid-divider"></div>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default HomeScreen;
