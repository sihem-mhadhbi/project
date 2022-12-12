import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./donor.module.css";

const Donors = () => {
  const [donors, setDonors] = useState([
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
      <h1 className={styles.heading}>Donors List</h1>
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
          {donors.map((donor) => (
            <tr>
              <td>{donor.name}</td>
              <td>{donor.email}</td>
              <td>{donor.bloodgroup}</td>
              <td>{donor.phone}</td>
              <td>{donor.address}</td>
              <td>{donor.isAccepted}</td>
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

export default Donors;
