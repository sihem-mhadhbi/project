import React, { Fragment, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getUsers,
  setCurrent,
  updateRequest,
} from "../../redux/action/userAction";

const Dashboard = () => {
  const [menu, setMenu] = useState("Donor");
  const { users, current } = useSelector((state) => state.userReducer);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    bloodgroup: "A+",
    address: "",
    role: "isRecipient",
    isAccepted: false,
  });

  const dispatch = useDispatch();

  const test1 = (
    <Fragment>
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

                <td>
                  <button
                    type="button"
                    value="Donor"
                    className={
                      menu === "Donor" ? "btn btn-danger" : "btn btn-light"
                    }
                    onClick={() => {
                      dispatch(setCurrent(donor));

                      setUser({
                        isAccepted: true,
                      });
                      dispatch(updateRequest(user));
                    }}
                  >
                    {donor.isAccepted ? "accepted" : "Not Accepted"}
                  </button>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </Fragment>
  );
  const test2 = (
    <Fragment>
      <tbody>
        {users.map((Reciepient, index) => {
          if (
            Reciepient.role === "isReciepient" &&
            Reciepient.isAccepted === false
          ) {
            return (
              <tr key={index}>
                <td>{Reciepient.name}</td>
                <td>{Reciepient.email}</td>
                <td>{Reciepient.bloodgroup}</td>
                <td>{Reciepient.phone}</td>

                <td>{Reciepient.address}</td>
                <td>{Reciepient.date}</td>

                <td>
                  <button
                    type="button"
                    value="Donor"
                    className={
                      menu === "Donor" ? "btn btn-danger" : "btn btn-light"
                    }
                    onClick={() => {
                      dispatch(setCurrent(Reciepient));

                      setUser({
                        name: "",
                        email: "",
                        phone: "",
                        bloodgroup: "",
                        address: "",
                        role: "",
                        isAccepted: true,
                      });
                      dispatch(updateRequest(user));
                    }}
                  >
                    {Reciepient.isAccepted ? "accepted" : "Not Accepted"}
                  </button>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </Fragment>
  );
  const test3 = (
    <Fragment>
      <tbody>
        {users.map((donor, index) => {
          if (donor.role === "isDonor" && donor.isAccepted === true) {
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
    </Fragment>
  );

  useEffect(() => {
    dispatch(getUsers());
    if (current !== null) {
      setUser(current);
    } else {
      setUser({ isAccepted: "false" });
    }
  }, [current]);

  return (
    <>
      <div
        className="d-flex justify-content-start
        p-3 bg-light "
        style={{ width: "400px" }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <button
              type="button"
              class={menu === "Reciepient" ? "btn btn-danger" : "btn btn-light"}
              value="requests"
              onClick={() => {
                setMenu("Reciepient");
              }}
            >
              Requests
            </button>
          </li>
          <li>
            <button
              type="button"
              value="Donor"
              className={menu === "Donor" ? "btn btn-danger" : "btn btn-light"}
              onClick={() => {
                setMenu("Donor");
              }}
            >
              Donors
            </button>
          </li>
          <li>
            <button
              type="button"
              class={
                menu === "AcceptedDonors" ? "btn btn-danger" : "btn btn-light"
              }
              value="acceptedDonor"
              onClick={() => {
                setMenu("AcceptedDonors");
              }}
            >
              Accepted Donors
            </button>
          </li>
          <hr />
          <li>
            <div className="dropdown nav nav-pills flex-column mb-auto">
              <a
                href=""
                className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUce-KXLK6N0uUAlTddfLF8PQCt6iiuUJZw&usqp=CAU"
                  alt=""
                  width="30"
                  height="30"
                  className="rounded-circle me-2"
                />
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li>
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div
        className="d-flex position-absolute start-0 top-0 "
        style={{ margin: "80px 0px 0px 250px" }}
      >
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
          {menu === "Donor" ? test1 : menu === "Reciepient" ? test2 : test3}
        </table>
      </div>
    </>
  );
};

export default Dashboard;
