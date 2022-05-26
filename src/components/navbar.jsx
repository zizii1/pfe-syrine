import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navMenu">
        <div className="navItems">
          <img
            className="logoNav"
            src="https://media.discordapp.net/attachments/902266709568782436/978597668408410132/logo-syrine.png?width=764&height=430"
          />
        </div>
        <div className="navItems">
          <h2>{localStorage.getItem("firstName")}</h2>
          <p>{localStorage.getItem("id")}</p>
        </div>
        <div className="navItems">
          <Link to="/">
            <h2 className="logout">Logout</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
