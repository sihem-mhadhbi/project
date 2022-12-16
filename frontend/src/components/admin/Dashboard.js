import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/action/userAction";

const Dashboard = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const donor = (
    <Fragment>
      <table className="table">
        <thead className="table-danger">
          <tr className="table-danger">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Blood Group</th>
            <th scope="col">Phone</th>
            <th scope="col">address</th>
            <th scope="col">Date</th>
            <th scope="col">Accepted</th>
          </tr>
        </thead>
        <tbody>
          {users.map((donor, index) => {
            if (donor.role === "isDonor" && donor.isAccepted === false) {
              return (
                <tr key={index}>
                  <td>{donor.name}</td>
                  <td>{donor.email}</td>
                  <td>{donor.bloodgroup}</td>
                  <td>{donor.phone}</td>

                  <td>{donor.address}</td>
                  <td>{donor.date}</td>

                  <td>{donor.isAccepted ? "accepted" : "Not Accepted"}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </Fragment>
  );
  return (
    <>
      <div
        className="d-flex justify-content-start
        p-3 bg-light "
        style={{ width: "250px" }}
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
              <a className="dropdown-item" href="/">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="d-flex position-absolute start-0 top-0 "
        style={{ margin: "100px 0px 0px 250px" }}
      ></div>
    </>
  );
};

export default Dashboard;
