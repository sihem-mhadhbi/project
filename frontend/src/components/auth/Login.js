import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {
  FacebookLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter all fields");
    } else {
      const formData = { email, password };
      dispatch(login(formData));
    }
  };

  return (
    <div className="login">
      <div className="appAside" />
      <div className="appForm">
        <div className="pageSwitcher">
          <div
            className="formCenter  pageSwitcherItem "
            activeClassName="pageSwitcherItem-active"
          >
            <form className="formFields" onSubmit={onSubmit}>
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
                <button className="formFieldButton">Register</button>{" "}
                <Link to="/register" className="formFieldLink">
                  Create an account
                </Link>
              </div>

              <div className="socialMediaButtons">
                <div className="facebookButton">
                  <FacebookLoginButton onClick={() => alert("Hello")} />
                </div>

                <div className="instagramButton">
                  <InstagramLoginButton onClick={() => alert("Hello")} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
