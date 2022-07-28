import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],
  },
  reducers: {
    getAll: (state, action) => {
      state = action.payload.items;
    },
    getOne: () => {},
    addComment: () => {},
    addNews: (state, action) => {
      const newItem = action.payload;
      const newId =
        state.items && state.items.length > 0 ? state.items.length + 1 : 1;
      state.items.push({
        id: newId,
        title: newItem.title,
        link: newItem.link,
        description: newItem.description,
        modified_by: newItem.modified_by,
      });
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice;
