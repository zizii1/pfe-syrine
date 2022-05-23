import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="threeBtns">
      <button id="foot">
        <button className="homeBtn" class="button-os">
          <a href="#">Create a new case</a>
        </button>
      </button>
      <button id="foot">
        <button className="homeBtn" class="button-os">
          <a href="#">Work on current case</a>
        </button>
      </button>
      <button id="foot">
        <button className="homeBtn" class="button-os">
          <a href="#">View a case advancement</a>
        </button>
      </button>
    </div>
  );
};

export default Home;
