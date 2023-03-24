import { configureStore } from "@reduxjs/toolkit";
import songsSlice from "./songSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    user: userSlice.reducer,
  },
});
