import React, { useState, useEffect, useRef } from "react";
import "./NavBar.scss";
import { images } from "../../../components/main/constants";
import { RiLogoutCircleLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { useAppContext } from "../../../api/appContext";

const MainNavBar = () => {
  const { logoutUser, user } = useAppContext();
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleLogout = () => {
    logoutUser();
    navigateToDashboard();
  };

  const navigateToDashboard = () => {
    window.location.href = "/group";
  };
  return (
    <>
      <nav className="app__navbar">
        <>
          <div className="app__navbar-logo">
            <img src={images.mainLogo} alt="logo" />
          </div>
          <div className="logout" onClick={() => setOpen(!open)}>
            <GoPerson />
            <span> {user.name}</span>
          </div>
          <div
            className={`dropdown-menu ${open ? "active" : "inactive"}`}
            ref={menuRef}
          >
            <h3>
              Нэмэлт
              <br />
            </h3>
            <ul>
              <DropdownItem
                icon={<RiLogoutCircleLine />}
                text={"Гарах"}
                onClick={handleLogout}
              />
            </ul>
          </div>
        </>
      </nav>
    </>
  );
};

function DropdownItem({ icon, text, onClick }) {
  return (
    <li className="dropdownItem">
      {icon}
      <a onClick={onClick}>{text}</a>
    </li>
  );
}

export default MainNavBar;
