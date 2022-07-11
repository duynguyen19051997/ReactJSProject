import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {},
  reducers: {
    getAll: () => {},
    getOne: () => {},
    addComment: () => {},
    addNews: () => {},
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice;
