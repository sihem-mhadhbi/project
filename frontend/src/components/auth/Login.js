import React from "react";

export const Login = () => {
  return (
    <div className="pt-5">
      <h1 className="text-center">
        Account <span className="text-primary">Login</span>
      </h1>
      <form>
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

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
