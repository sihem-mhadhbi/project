import React from "react";

const Register = () => {
  return (
    <div>
      <div className="pt-5">
        <h1 className="text-center">
          Account <span className="text-primary">Register</span>
        </h1>
        <form>
          <div className="mb3">
            <label htmlFor="name" className="from-label">
              Name
            </label>
            <input type="text" name="name" className="form-control" id="name" />
          </div>
          <div className="mb3">
            <label htmlFor="email" className="from-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb3">
            <label htmlFor="password" className="from-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb3">
            <label htmlFor="password" className="from-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="password2"
              className="form-control"
              id="password2"
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
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">
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

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
