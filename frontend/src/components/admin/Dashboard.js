import React from "react";

const Dashboard = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "280px" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <a href="/dashboard" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="./requests" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Requests
          </a>
        </li>
        <li>
          <a href="./donors" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Donors
          </a>
        </li>
        <li>
          <a href="/accepted" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Accepted Donors
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUce-KXLK6N0uUAlTddfLF8PQCt6iiuUJZw&usqp=CAU"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li></li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
