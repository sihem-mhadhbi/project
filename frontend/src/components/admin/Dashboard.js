import React, { Fragment, useState } from "react";
import "../auth/Profile.css";
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
    role: "isReciepient",
    isAccepted: false,
  });
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current !== null) dispatch(updateRequest(user));
  };

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
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    value="Donor"
                    onClick={() => {
                      dispatch(setCurrent(donor));
                    }}
                  >
                    {donor.isAccepted ? "accepted" : "Not Accepted"}
                  </button>
                </td>
                <Fragment>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <div className="formCenter">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                            <form className="formFields" onSubmit={onSubmit}>
                              <div className="formField">
                                <label
                                  className="formFieldLabel1"
                                  htmlFor="name"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  className="formFieldInput1"
                                  placeholder="Enter your full name"
                                  name="name"
                                  defaultValue={user.name}
                                />
                              </div>
                              <div className="formField">
                                <label
                                  className="formFieldLabel1"
                                  htmlFor="email"
                                >
                                  E-Mail Address
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="formFieldInput1"
                                  placeholder="Enter your email"
                                  name="email"
                                  defaultValue={user.email}
                                />
                              </div>

                              <div className="formField">
                                <label
                                  className="formFieldLabel1"
                                  htmlFor="phone"
                                >
                                  Phone
                                </label>
                                <input
                                  type="Number"
                                  id="phone"
                                  className="formFieldInput1"
                                  placeholder="Enter your phone"
                                  name="phone"
                                  defaultValue={user.phone}
                                />
                              </div>
                              <div className="formField">
                                <label
                                  className="formFieldLabel1"
                                  htmlFor="addresse"
                                >
                                  Addresse
                                </label>
                                <input
                                  type="text"
                                  id="address"
                                  className="formFieldInput1"
                                  placeholder="Enter your address"
                                  name="address"
                                  defaultValue={user.address}
                                />
                              </div>

                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input1"
                                  type="radio"
                                  name="isAccepted"
                                  value="true"
                                  checked={user.isAccepted === "true"}
                                  onChange={onChange}
                                />

                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio1"
                                >
                                  Accepted
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input1"
                                  type="radio"
                                  name="isAccepted"
                                  value="false"
                                  checked={user.isAccepted === "false"}
                                  onChange={onChange}
                                />
                                <label
                                  className="form-check-label1"
                                  htmlFor="inlineRadio1"
                                >
                                  Not Accepted
                                </label>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  data-bs-dismiss="modal"
                                >
                                  Save changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
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
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      dispatch(setCurrent(Reciepient));
                    }}
                  >
                    {Reciepient.isAccepted ? "Approuved" : "Not Approuved"}
                  </button>
                </td>
                <Fragment>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <div className="formCenter">
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                            <form className="formFields" onSubmit={onSubmit}>
                              <div className="formField">
                                <label
                                  className="formFieldLabel1"
                                  htmlFor="name"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  className="formFieldInput1"
                                  placeholder="Enter your full name"
                                  name="name"
                                  defaultValue={user.name}
                                />
                              </div>
                              <div className="formField">
                                <label
                                  className="formFieldLabel1"
                                  htmlFor="email"
                                >
                                  E-Mail Address
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="formFieldInput1"
                                  placeholder="Enter your email"
                                  name="email"
                                  defaultValue={user.email}
                                />
                              </div>

                              <div className="formField">
                                <label
                                  className="formFieldLabel1"
                                  htmlFor="phone"
                                >
                                  Phone
                                </label>
                                <input
                                  type="Number"
                                  id="phone"
                                  className="formFieldInput1"
                                  placeholder="Enter your phone"
                                  name="phone"
                                  defaultValue={user.phone}
                                />
                              </div>
                              <div className="formField">
                                <label
                                  className="formFieldLabel1"
                                  htmlFor="addresse"
                                >
                                  Addresse
                                </label>
                                <input
                                  type="text"
                                  id="address"
                                  className="formFieldInput1"
                                  placeholder="Enter your address"
                                  name="address"
                                  defaultValue={user.address}
                                />
                              </div>

                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input1"
                                  type="radio"
                                  name="isAccepted"
                                  value="true"
                                  checked={user.isAccepted === "true"}
                                  onChange={onChange}
                                />

                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio1"
                                >
                                  Approuved
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input1"
                                  type="radio"
                                  name="isAccepted"
                                  value="false"
                                  checked={user.isAccepted === "false"}
                                  onChange={onChange}
                                />
                                <label
                                  className="form-check-label1"
                                  htmlFor="inlineRadio1"
                                >
                                  Not Approuved
                                </label>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  data-bs-dismiss="modal"
                                >
                                  Save changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
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

                <td>
                  {" "}
                  <button
                    type="button"
                    value="Donor"
                    className="btn btn-success"
                  >
                    {donor.isAccepted ? "Accepted" : "Not Accepted"}
                  </button>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </Fragment>
  );
  const test4 = (
    <Fragment>
      <tbody>
        {users.map((Reciepient, index) => {
          if (
            Reciepient.role === "isReciepient" &&
            Reciepient.isAccepted === true
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
                    className="btn btn-success"
                  >
                    {Reciepient.isAccepted ? "Approuved" : "Not Approuved"}
                  </button>
                </td>
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
      setUser({
        name: "",
        email: "",
        phone: "",
        bloodgroup: "A+",
        address: "",
        role: "isRecipient",
        isAccepted: false,
      });
    }
  }, [current]);

  return (
    <>
      <div
        className="d-flex justify-content-start
        p-3 bg-light "
        style={{ width: "200px" }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <button
              type="button"
              className={
                menu === "Reciepient" ? "btn btn-danger" : "btn btn-light"
              }
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
              className={
                menu === "acceptedReciepient"
                  ? "btn btn-danger"
                  : "btn btn-light"
              }
              value="requests"
              onClick={() => {
                setMenu("acceptedReciepient");
              }}
            >
              Accepted Requests
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
              className={
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
          {menu === "Donor"
            ? test1
            : menu === "Reciepient"
            ? test2
            : menu === "acceptedReciepient"
            ? test4
            : test3}
        </table>
      </div>
    </>
  );
};

export default Dashboard;
