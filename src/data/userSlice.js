import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "rasul",
    email: "rasulhayat@slice.com",
  },
  reducers: {
    changeUsername: (state, action) => {
      state.username = "Sagar";
    },
  },
});

export const { changeUsername } = userSlice.actions;
export default userSlice;
