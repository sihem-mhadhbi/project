import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/action/userAction";
import styles from "./requester.module.css";

const Requests = () => {
  /*const [requests, setRequests] = useState([
    {
      name: "",
      email: "",
      phone: "",
      bloodgroup: "",
      address: "",
      role: "",
      isAccepted: "",
    },
  ]);
  const request = requests.find((el) => el.role === "isDonor");

  useEffect(() => {
    fetch("/api/user/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setRequests(jsonRes));
  });*/
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <h1 className={styles.heading}>Request List</h1>
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
          {users.map((request, index) => {
            if (request.role === "isRecipient") {
              return (
                <tr key={index}>
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
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
};

export default Requests;
