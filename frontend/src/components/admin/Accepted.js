import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/action/userAction";
import styles from "./donor.module.css";

const Accepted = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      <h1 className={styles.heading}> Accepted Donors List</h1>
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
          {users.map((donor, index) => {
            if (donor.role === "isDonor" && donor.isAccepted === true) {
              return (
                <tr key={index}>
                  <td>{donor.name}</td>
                  <td>{donor.email}</td>
                  <td>{donor.bloodgroup}</td>
                  <td>{donor.address}</td>
                  <td>{donor.phone}</td>
                  <td>{donor.isAccepted}</td>
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
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
};

export default Accepted;
