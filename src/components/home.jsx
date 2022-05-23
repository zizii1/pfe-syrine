import React from "react";
import "./home.css";
import Navbar from "./navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeBtns">
        <button id="homeIdBtn" className="big-button">
          Create a new case
        </button>
        <button id="homeIdBtn" className="big-button">
          Work on current case
        </button>
        <button id="homeIdBtn" className="big-button">
          View a case advancement
        </button>
      </div>
    </div>
  );
};

export default Home;
