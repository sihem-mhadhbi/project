import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/action/userAction";
import styles from "./donor.module.css";

const Donors = () => {
  /*const [donors, setDonors] = useState([
    {
      name: "",
      email: "",
      phone: "",
      bloodgroup: "",
      address: "",

      isAccepted: "",
    },
  ]);*/
  /* useEffect(() => {
    fetch("/api/user/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setDonors(jsonRes));
  });*/
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

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
          {users.map((donor, index) => {
            if (donor.role === "isDonor" && donor.isAccepted === "false") {
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

export default Donors;
