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
        },

        withCredentials: true,
        credentials: "include",
      }
    );
    console.log(data);
    dispatch({
      type: "registerRequestSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "registerRequestError",
      payload: "error",
    });
  }
};

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

      console.log(data);

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
