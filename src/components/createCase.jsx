import React from "react";
import "./createCase.css";
import Navbar from "./navbar";

const CreateCase = () => {
  const changetext = () => {
    document.getElementById("myButton1").value = "File Hached";
  };

  return (
    <div>
      <Navbar />
      <div className="addCase">
        <div>
          <h2>Case start date</h2>
          <h4>{localStorage.getItem("date")}</h4>
        </div>
        <div>
          <h2>Case creator</h2>
          <h4>{localStorage.getItem("id")}</h4>
        </div>
        <div>
          <h2>Discription of the evidence</h2>
          <textarea
            placeholder="write evidence's description here ..."
            className="textArea"
          ></textarea>
          <div>
            <h2>Upload evidence</h2>
            <input className="upload" type="file" />
            <input
              className="createCaseBtn"
              onClick={changetext}
              type="button"
              value="Hach File"
              id="myButton1"
            ></input>
          </div>

          <button id="submitBtn" className="registrationBtn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCase;
