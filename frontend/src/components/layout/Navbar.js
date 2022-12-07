import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid ">
          <a
            class="navbar-brand  border-bottom border-danger
"
            href="#"
          >
            BloodBank
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex">
              <button
                style={{ margin: 6 }}
                class="btn btn-outline-danger"
                type="submit"
              >
                Login
              </button>
              <button
                style={{ margin: 6 }}
                class="btn btn-outline-danger"
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
