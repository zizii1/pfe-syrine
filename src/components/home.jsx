import React from "react";
import "./home.css";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const getDate = () => {
    let date = new Date().toUTCString();
    localStorage.setItem("date", date);
  };
  return (
    <div>
      <Navbar />
      <div className="homeBtns">
        <Link to="/createcase">
          <button onClick={getDate} id="homeIdBtn" className="big-button">
            Create a new case
          </button>
        </Link>
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
