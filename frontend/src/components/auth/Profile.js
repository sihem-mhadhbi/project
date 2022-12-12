import React from "react";
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
import { useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      dispatch(loadUser());
    }
  }, []);

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
                  <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                  <MDBCardText></MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <form className="formFields">
                      <div className="formField">
                        <label className="formFieldLabel" htmlFor="name">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="formFieldInput"
                          placeholder="Enter your full name"
                          name="name"
                        />
                      </div>

                      <div className="formField">
                        <label className="formFieldLabel" htmlFor="email">
                          E-Mail Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="formFieldInput"
                          placeholder="Enter your email"
                          name="email"
                        />
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          isReciepient
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          isDonor
                        </label>
                      </div>
                      <hr />
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>BloodGroup</option>
                        <option value="1">A+</option>
                        <option value="2">B+</option>
                        <option value="3">AB+</option>
                        <option value="4">A-</option>
                        <option value="5">B-</option>
                        <option value="6">AB-</option>
                        <option value="7">O+</option>
                        <option value="8">O-</option>
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
