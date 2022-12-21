import axios from "axios";
import {
  GET_USER,
  SET_CURRENT,
  UPDATE_REQUEST,
  UPDATE_USER,
  USER_ERROR,
} from "./types";

//Get users
export const getUsers = () => async (dispatch) => {
  const config = {};
  if (localStorage.token) {
    config.headers = { authorization: `Bearer ${localStorage.token}` };
  }

  try {
    const res = await axios.get("/api/user", config);
    dispatch({ type: GET_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_ERROR, payload: err.response.data });
  }
};
// set current user
export const setCurrent = (user) => ({
  type: SET_CURRENT,
  payload: user,
});
// update userp
export const updateUser = (userp) => async (dispatch) => {
  const config = {};
  if (localStorage.token) {
    config.headers = {
      authorization: `Bearer ${localStorage.token}`,
      "content-Type": "application/json",
    };
  }
  try {
    const res = await axios.put(`/api/user/${userp._id}`, userp, config);
    console.log(res.data);
    dispatch({ type: UPDATE_USER, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_ERROR });
  }
};
// update user
export const updateRequest = (user) => async (dispatch) => {
  const config = {};
  if (localStorage.token) {
    config.headers = {
      authorization: `Bearer ${localStorage.token}`,
      "content-Type": "application/json",
    };
  }
  try {
    const res = await axios.put(`/api/user/${user._id}`, user, config);
    console.log(res.data);
    dispatch({ type: UPDATE_REQUEST, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_ERROR, payload: err.response.data });
  }
};
