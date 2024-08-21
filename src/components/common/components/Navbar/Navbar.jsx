import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { images } from "../../../main/constants";
import "./Navbar.scss";
import { nav } from "../../../data/Data";
import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";
import LoginPopup from "../../../login/Login";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <nav className="app__navbar">
      {showLoginPopup && <LoginPopup onClose={handleCloseLoginPopup} />}
      {!showLoginPopup && (
        <>
          <div className="app__navbar-logo">
            <Link to="/group">
              <img src={images.mainLogo} alt="" />
            </Link>
          </div>
          <ul className="app__navbar-links">
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
          <div className="login" onClick={handleLoginClick}>
            <CiUser />
          </div>
          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            <NavbarMenu toggle={toggle} setToggle={setToggle} />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
