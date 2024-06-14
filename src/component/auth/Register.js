import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function registerUser() {
    if (!isChecked) {
      setErrorMessage("Please check the checkbox to register.");
      return;
    }

    var user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConf,
    };

    axios
      .post("https://medicalstore.mashupstack.com/api/register", user)
      .then((response) => {
        setErrorMessage("");
        navigate("/");
      })
      .catch((error) => {
        if (error.response.data.errors) {
          setErrorMessage(Object.values(error.response.data.errors).join(" "));
        } else {
          setErrorMessage("Failed to connect to the API");
        }
      });
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className=" col-8 offset-2">
            <h3 className="text-center" style={{color:'#0069d9'}}>Register</h3>
            {errorMessage ? (
              <div className="alert alert-danger">{errorMessage}</div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                value={passwordConf}
                onChange={(event) => setPasswordConf(event.target.value)}
              />
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={isChecked}
                onChange={() => setChecked(!isChecked)}
              />&nbsp;
              <label className="form-check-label"> Agree Our Terms and Policies</label>
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary float-right"  style={{width:"150px"}}
                onClick={registerUser}
              >
                Register
              </button>
            </div><br/><br/>
            <div className="form-group text-center">
              <p>
                Have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
