import axios from "axios";
import { GET_USER, USER_ERROR } from "./types";

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
