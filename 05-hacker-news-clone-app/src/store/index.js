import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import uiSlice from "./ui-slice";
import newsSlice from "./news-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    news: newsSlice.reducer,
  },
});

export default store;
