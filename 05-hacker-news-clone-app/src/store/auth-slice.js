import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  password: "",
  isLoggedIn: false,
  authToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const {
        id,
        email,
        password,
        authToken,
        isLoggedIn,
      } = action.payload.user;
      state.id = id;
      state.email = email;
      state.password = password;
      state.authToken = authToken;
      state.isLoggedIn = isLoggedIn;
      localStorage.setItem("authToken", state.authToken);
    },
    logout: (state, action) => {
      state = initialState;
      localStorage.removeItem("authToken");
      localStorage.clear();
    },
    createNewUser: (state, action) => {},
  },
});

export const authActions = authSlice.actions;

export default authSlice;
