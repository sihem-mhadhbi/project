import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { clearError, register } from "../../redux/action/authActions";
import { useNavigate } from "react-router-dom";
import { setAlert } from "../../redux/action/alertAction";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.authReducer);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bloodGroup: "",
    hasAgreed: false,
  });
  const { name, email, password, bloodGroup, hasAgreed } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("please enter all fields");
    } else {
      const formData = { name, email, password, bloodGroup, hasAgreed };
      dispatch(register(formData));
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
    if (error) {
      dispatch(setAlert(error.msg, "danger"));
      dispatch(clearError());
    }
  }, [error, isAuthenticated]);

  return (
    <div className="login">
      <div className="appAside" />
      <div className="appForm">
        <div
          className="pageSwitcher d-flex justify-content-center
"
        >
          <div className="formCenter">
            <form className="formFields" onSubmit={onSubmit}>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="formFieldInput"
                  placeholder="Enter your full name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  isReciepient
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  isDonor
                </label>
              </div>
              <select class="form-select" aria-label="Default select example">
                <option selected value={bloodGroup} onChange={onChange}>
                  BloodGroup
                </option>
                <option value="1">A+</option>
                <option value="2">B+</option>
                <option value="3">AB+</option>
                <option value="4">A-</option>
                <option value="5">B-</option>
                <option value="6">AB-</option>
                <option value="7">O+</option>
                <option value="8">O-</option>
              </select>
              <div className="formField">
                <label className="formFieldCheckboxLabel">
                  <input
                    className="formFieldCheckbox"
                    type="checkbox"
                    name="hasAgreed"
                    value={hasAgreed}
                    onChange={onChange}
                  />{" "}
                  I agree all statements in{" "}
                  <a href="null" className="formFieldTermsLink">
                    terms of service
                  </a>
                </label>
              </div>

              <div className="formField">
                <button className="formFieldButton">Register</button>{" "}
                <Link to="/login" className="formFieldLink">
                  I'm already member
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
