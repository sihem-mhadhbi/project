import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="login">
        <div className="appAside" />
        <div className="appForm">
          <div className="pageSwitcher">
            <div className="formCenter">
              <form onSubmit={this.handleSubmit} className="formFields">
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
                    value={this.state.name}
                    onChange={this.handleChange}
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
                    value={this.state.password}
                    onChange={this.handleChange}
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
                    value={this.state.email}
                    onChange={this.handleChange}
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
                  <option selected>BloodGroup</option>
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
                      value={this.state.hasAgreed}
                      onChange={this.handleChange}
                    />{" "}
                    I agree all statements in{" "}
                    <a href="null" className="formFieldTermsLink">
                      terms of service
                    </a>
                  </label>
                </div>

                <div className="formField">
                  <button className="formFieldButton">Login</button>{" "}
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
  }
}
export default Register;
