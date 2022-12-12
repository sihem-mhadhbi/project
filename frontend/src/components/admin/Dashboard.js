import React from "react";

const Dashboard = () => {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "280px" }}
    >
      <ul class="nav nav-pills flex-column mb-auto">
        <li>
          <a href="/dashboard" class="nav-link link-dark">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="./requests" class="nav-link link-dark">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Requests
          </a>
        </li>
        <li>
          <a href="./donors" class="nav-link link-dark">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Donors
          </a>
        </li>
        <li>
          <a href="/accepted" class="nav-link link-dark">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Accepted Donors
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUce-KXLK6N0uUAlTddfLF8PQCt6iiuUJZw&usqp=CAU"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
        </a>
        <ul class="dropdown-menu text-small shadow">
          <li></li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
