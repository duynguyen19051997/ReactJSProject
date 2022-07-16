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
      sessionStorage.setItem("authToken", state.authToken);
    },
    logout: (state) => {
      state = initialState;
      console.log(state);
      sessionStorage.removeItem("authToken");
      sessionStorage.clear();
    },
    createNewUser: (state, action) => {},
  },
});

export const authActions = authSlice.actions;

export default authSlice;
