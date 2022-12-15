import React, { useState } from "react";
import { useEffect } from "react";
import "./Profile.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { loadUser } from "../../redux/action/authActions";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, updateUser } from "../../redux/action/userAction";

export default function Profile() {
  /* const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      dispatch(loadUser());
    }
  }, []);*/
  const [userp, setUserp] = useState({
    name: "",
    email: "",
    phone: "",
    bloodgroup: "A+",
    address: "",
    role: "isRecipient",
    isAccepted: "false",
  });
  const { name, email, phone, bloodgroup, address, role, isAccepted } = userp;
  const onChange = (e) => {
    setUserp({ ...userp, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userp));
  };
  const { user } = useSelector((state) => state.authReducer);
  //const { name, email, phone, bloodgroup, address, role, isAccepted } = user;
  const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(loadUser());
  }, []);*/
  useEffect(() => {
    if (user !== null) {
      setUserp(user);
    }
  }, [user]);
  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src="https://health.gov.tt/sites/default/files/styles/large/public/inline-images/Blood%20Bank%20logo%202022-03.png?itok=0H-a6QNb"
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "120px" }}
                    fluid
                  />
                  <MDBTypography tag="h5">{name}</MDBTypography>
                  <MDBCardText>
                    {" "}
                    {isAccepted ? "Accepted Donor" : "Not Accepted Donor"}
                  </MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <form className="formFields" onSubmit={onSubmit}>
                      <div className="formField">
                        <label className="formFieldLabel1" htmlFor="name">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="formFieldInput1"
                          placeholder="Enter your full name"
                          name="name"
                          value={name}
                          onChange={onChange}
                        />
                      </div>

                      <div className="formField">
                        <label className="formFieldLabel1" htmlFor="email">
                          E-Mail Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="formFieldInput1"
                          placeholder="Enter your email"
                          name="email"
                          value={email}
                          onChange={onChange}
                        />
                      </div>
                      <div className="formField">
                        <label className="formFieldLabel1" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          type="Number"
                          id="phone"
                          className="formFieldInput1"
                          placeholder="Enter your phone"
                          name="phone"
                          value={phone}
                          onChange={onChange}
                        />
                      </div>
                      <div className="formField">
                        <label className="formFieldLabel1" htmlFor="address">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          className="formFieldInput1"
                          placeholder="Enter your address"
                          name="address"
                          value={address}
                          onChange={onChange}
                        />
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          value="isReciepient"
                          checked={role === "isReciepient"}
                          onChange={onChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          isReciepient
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          value="isDonor"
                          checked={role === "isDonor"}
                          onChange={onChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          isDonor
                        </label>
                      </div>
                      <hr />
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="bloodgroup"
                        value={bloodgroup}
                        onChange={onChange}
                      >
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="AB+">AB+</option>
                        <option value="A-">A-</option>
                        <option value="B-">B-</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                      <hr />
                      <div className="formField">
                        <button className="formFieldButton">Update</button>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
