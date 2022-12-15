import { GET_USER, SET_CURRENT, USER_ERROR } from "../action/types";

const initialState = {
  users: [],
  loading: true,
  current: null,
  error: null,
};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
export default userReducer;
