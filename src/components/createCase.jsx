import React from "react";
import "./createCase.css";
import Navbar from "./navbar";

const CreateCase = () => {
  return (
    <div>
      <Navbar />
      <div className="addCase">
        <div>
          <h2>Case start date</h2>
          <h4>24/05/2022</h4>
        </div>
        <div>
          <h2>Case creator</h2>
          <h4>f5b8ess3g5ht8</h4>
        </div>
        <div>
          <h2>Discription of the evidence</h2>
          <textarea className="textArea"></textarea>
        </div>
      </div>
    </div>
  );
};

export default CreateCase;
