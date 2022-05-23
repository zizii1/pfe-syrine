import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navMenu">
        <a id="logoaNav" href="#">
          Logo
        </a>
        <a id="userNav" href="#">
          User
        </a>
        <a href="#">Logout</a>
        <div className="dot"></div>
      </nav>
    </div>
  );
};

export default Navbar;
