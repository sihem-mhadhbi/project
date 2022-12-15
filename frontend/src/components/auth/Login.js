import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import {
  FacebookLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../../redux/action/authActions";
import { useNavigate } from "react-router-dom";
import { setAlert } from "../../redux/action/alertAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.authReducer);
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
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
    if (error && error.msg === "Invalid credential") {
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
          <div className="formCenter  pageSwitcherItem ">
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
                <button className="formFieldButton">Login</button>{" "}
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
