import axios from "axios";
import { server } from "./store";

axios.defaults.withCredentials = true;

export const registerUser = (email, password) => async (dispatch) => {
  try {
    if (!email || !password) {
      return;
    }
    dispatch({
      type: "registerRequest",
    });

    const { data } = await axios.post(
      `${server}/register`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },

        withCredentials: true,
        credentials: "include",
      }
    );

    dispatch({
      type: "registerRequestSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "registerRequestFailure",
      payload: { error: error.response.data.message },
    });
  }
};

export function logoutUser() {
  return async (dispatch) => {
    try {
      dispatch({
        type: "logoutRequest",
      });

      const { data } = await axios.get(`${server}/logout`, {
        withCredentials: true,
        credentials: "include",
      });

      dispatch({
        type: "logoutRequestSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "logoutRequestFailure",
        payload: error.response.data.message,
      });
    }
  };
}


export function getMyProfile() {
  return async (dispatch) => {
    try {
      dispatch({
        type: "loadUserRequest",
      });

      const { data } = await axios.get(`${server}/me`, {
        withCredentials: true,
        credentials: "include",
      });

      dispatch({
        type: "loadUserSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "loadUserFail",
        payload: error.response.data.message,
      });
    }
  };
}
