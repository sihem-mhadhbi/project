import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./donor.module.css";

const Accepted = () => {
  const [accepted, setAccepted] = useState([
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
      <h1 className={styles.heading}>Accepted Donors List</h1>
      <table className={styles.styledtable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Blood Group</th>
            <th>phone</th>

            <th>address</th>
            <th>isAccepted</th>
            <th>Update Info</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {accepted.map((accept) => (
            <tr>
              <td>{accept.name}</td>
              <td>{accept.email}</td>
              <td>{accept.bloodgroup}</td>
              <td>{accept.phone}</td>
              <td>{accept.address}</td>
              <td>{accept.isAccepted}</td>
              <td>
                <button className={styles.button}>
                  <Link to="/plasma/login" className={styles.link}>
                    Update
                  </Link>
                </button>
              </td>
              <td>
                <button className={styles.button}>
                  <Link to="/plasma/loginanddelete" className={styles.link}>
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

export default Accepted;
