import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./requester.module.css";

const Requests = () => {
  const [requests, setRequests] = useState([
    {
      name: "",
      email: "",
      phone: "",
      bloodgroup: "",
      address: "",

      isAccepted: "",
    },
  ]);

  return (
    <>
      <h1 className={styles.heading}>Request List</h1>
      <table className={styles.styledtable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Blood Group</th>
            <th>
              Addresse <br />
            </th>

            <th>Update Info</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>{request.bloodgroup}</td>
              <td>{request.address}</td>
              <td>{request.phone}</td>
              <td>{request.isAccepted}</td>
              <td>
                <button className={styles.button}>
                  <Link to="/plasma/requesterlogin" className={styles.link}>
                    Update
                  </Link>
                </button>
              </td>
              <td>
                <button className={styles.button}>
                  <Link
                    to="/plasma/requesterloginanddelete"
                    className={styles.link}
                  >
                    Delete
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Requests;
