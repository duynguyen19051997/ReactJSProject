import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {},
  reducers: {
    showNotifications: () => {},
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
