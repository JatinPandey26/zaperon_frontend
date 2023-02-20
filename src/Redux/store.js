import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./authReducers";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const server = "https://zaperon-backend.vercel.app/api/v1";
