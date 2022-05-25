import React from "react";
import "./navbar.css";

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
          <h2>User</h2>
        </div>
        <div className="navItems">
          <h2>Logout</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
