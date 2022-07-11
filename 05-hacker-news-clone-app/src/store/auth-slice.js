import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: 0,
    email: "",
    password: "",
    isLoggedIn: false,
    authToken: "",
  },
  reducers: {
    login: () => {},
    logout: () => {},
    createNewUser: () => {},
  },
});

export const authActions = authSlice.actions;

export default authSlice;
