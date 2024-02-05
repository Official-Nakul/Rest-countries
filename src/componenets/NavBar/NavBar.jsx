import React from "react";
import ThemeBtn from "./ThemeBtn";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="navBar flex-row">
        <p className="font-800 flex-row">Where in the world?</p>
        <ThemeBtn />
      </div>
    </div>
  );
};

export default NavBar;
