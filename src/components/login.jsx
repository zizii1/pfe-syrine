import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [organization, setorganization] = useState("");
  const [country, setcountry] = useState("");
  const [department, setdepartment] = useState("");
  const [password, setpassword] = useState("");
  const [confirmePass, setconfirmePass] = useState("");
  const [signInEmail, setsignInEmail] = useState("");
  const [contact, setcontact] = useState("");
  const [signUpEmail, setsignUpEmail] = useState("");
  const [signInPass, setsignInPass] = useState("");

  const [signUpUser, setsignUpUser] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    country: "",
    department: "",
    password: "",
    confirmePassword: "",
    email: "",
    contact: "",
  });

  let navigate = useNavigate();

  const logIn = () => {
    axios
      .get("http://localhost:5000/api/user/findAll")
      .then((res) => {
        res.data.map((ele) => {
          if (
            ele.email == signInEmail &&
            ele.password == signInPass &&
            ele.confirmePassword == signInPass
          ) {
            navigate("/home", { replace: true });
            localStorage.setItem("firstName", ele.firstName);
            localStorage.setItem("id", ele._id);
            localStorage.setItem("date", ele.date);
          }
        });
      })
      .catch((err) => console.log(err));
  };

  const signUp = () => {
    var user = {
      firstName: firstname,
      lastName: lastname,
      organization: organization,
      country: country,
      department: department,
      password: password,
      confirmePassword: confirmePass,
      email: signUpEmail,
      contact: contact,
    };
    axios
      .post("http://localhost:5000/api/user/add", user)
      .then((res) => {
        setsignUpUser(res.data);
        console.log("user added successfully !");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="main">
        <input
          className="inputRegistration"
          type="checkbox"
          id="chk"
          aria-hidden="true"
        />

        <div className="signup">
          <label className="wordSignup" htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <div className="signupInputs">
            <input
              onChange={(e) => setfirstname(e.target.value)}
              className="inputRegistration"
              type="text"
              name="txt"
              placeholder="Firstname"
              required=""
            />
            <input
              onChange={(e) => setlastname(e.target.value)}
              className="inputRegistration"
              type="text"
              name="txt"
              placeholder="LastName"
              required=""
            />
          </div>
          <div className="signupInputs">
            <input
              onChange={(e) => setorganization(e.target.value)}
              className="inputRegistration"
              type="text"
              name="organization"
              placeholder="organization"
              required=""
            />
            <select
              className="inputRegistration"
              id="selectRegi"
              required
              onChange={(e) => setcountry(e.target.value)}
            >
              <option value="">Select country</option>
              <option value="responder">First responder</option>
              <option value="lawyer">Lawyer</option>
              <option value="investigator">Investigator</option>
              <option value="authority">Authority to initiale decision</option>
              <option value="lawEnforcement">Law enforcement</option>
            </select>
          </div>
          <div className="signupInputs">
            <input
              onChange={(e) => setpassword(e.target.value)}
              className="inputRegistration"
              type="password"
              name="password"
              placeholder="Password"
              required=""
            />
            <input
              onChange={(e) => setconfirmePass(e.target.value)}
              className="inputRegistration"
              type="password"
              name="password"
              placeholder="Confirme password"
              required=""
            />
          </div>
          <div className="signupInputs">
            <input
              onChange={(e) => setsignUpEmail(e.target.value)}
              className="inputRegistration"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              onChange={(e) => setcontact(e.target.value)}
              className="inputRegistration"
              type="text"
              name="contact"
              placeholder="Contact No"
              required=""
            />
          </div>
          <select
            className="inputRegistration"
            id="selectReg"
            required
            onChange={(e) => setdepartment(e.target.value)}
          >
            <option value="">Select department/office</option>
            <option value="responder">First responder</option>
            <option value="lawyer">Lawyer</option>
            <option value="investigator">Investigator</option>
            <option value="authority">Authority to initiale decision</option>
            <option value="lawEnforcement">Law enforcement</option>
          </select>
          <button onClick={signUp} className="registrationBtn">
            Sign up
          </button>
        </div>

        <div className="login">
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            onChange={(e) => setsignInEmail(e.target.value)}
            className="inputRegistration"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <input
            onChange={(e) => setsignInPass(e.target.value)}
            className="inputRegistration"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button onClick={logIn} className="registrationBtn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
