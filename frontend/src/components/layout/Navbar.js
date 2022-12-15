import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
          <a
            className="navbar-brand  border-bottom border-danger
"
            href="#"
          >
            BloodBank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <button
                style={{ margin: 6 }}
                className="btn btn-outline-danger"
                type="submit"
              >
                Login
              </button>
              <button
                style={{ margin: 6 }}
                className="btn btn-outline-danger"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
