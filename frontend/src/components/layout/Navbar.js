import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/action/authActions";

export const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const gestLinks = (
    <Fragment>
      <form className="d-flex">
        <button
          style={{ margin: 6 }}
          className="btn btn-outline-danger"
          type="submit"
        >
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </button>
        <button
          style={{ margin: 6 }}
          className="btn btn-outline-danger"
          type="submit"
        >
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </button>
      </form>
    </Fragment>
  );
  const authLinks = (
    <Fragment>
      <form className="d-flex">
        <button
          style={{ margin: 6 }}
          className="btn btn-outline-danger"
          type="submit"
        >
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </button>
        <button
          style={{ margin: 6 }}
          className="btn btn-outline-danger"
          onClick={onLogout}
        >
          Logout
        </button>
      </form>
    </Fragment>
  );
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
          <a
            className="navbar-brand  border-bottom border-danger
"
            href="/"
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
            {isAuthenticated ? authLinks : gestLinks}
          </div>
        </div>
      </nav>
    </div>
  );
};
