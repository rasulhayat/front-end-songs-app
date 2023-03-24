import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJsonData } from "../shared/utils/ApiUtilities";

export const getAllSongs = createAsyncThunk("getAllSongs", () => {
  return getJsonData("/songs");
});

const songSlice = createSlice({
  name: "songs",
  initialState: {
    loadingTheSongs: false,
    allSongs: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllSongs.pending, (state, action) => {
      state.loadingTheSongs = true;
    });

    builder.addCase(getAllSongs.fulfilled, (state, action) => {
      state.allSongs = action.payload;
      state.loadingTheSongs = false;
    });
  },
  //   reducers: {
  //     changeAllSongs: (state, action) => {
  //       state.allSongs = action.payload;
  //     },
  //   },
});

// export const { changeAllSongs } = songsSlice.actions;
export default songSlice;
