import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {},
  {
    
    registerRequest: (state, action) => {
      state.loading = true;
    },
    registerRequestSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.message = action.payload.message;
    },
    registerRequestFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.error;
    },

    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.message = action.payload.message;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
