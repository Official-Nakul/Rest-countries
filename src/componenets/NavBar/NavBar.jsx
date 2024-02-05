import React from "react";
import ThemeBtn from "./ThemeBtn";
import "./NavBar.css";
const NavBar = ({ isDark, handleOnClick }) => {
  return (
    <div className="navContainer">
      <div className="navBar flex-row">
        <p className="font-800 flex-row">Where in the world?</p>
        <ThemeBtn toggleTheme={handleOnClick} isDark={isDark} />
      </div>
    </div>
  );
};

export default NavBar;

("Isdark function changes");
