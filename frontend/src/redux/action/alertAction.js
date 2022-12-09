import { REMOVE_ALERT, SET_ALERT } from "./types";

export const setAlert = (msg, type) => (dispatch) => {
  const id = Math.floor(Math.random() * 1000);
  dispatch({
    type: SET_ALERT,
    payload: { msg, type, id },
  });
  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT, payload: id });
  }, 5000);
};
