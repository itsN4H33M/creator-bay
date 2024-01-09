import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthorised: false,
  },
  reducers: {
    authorised: (state) => {
      if (sessionStorage.getItem("token")) {
        state.isAuthorised = true;
      } else {
        state.isAuthorised = false;
      }
    },
  },
});

export const { authorised } = loginSlice.actions;
export default loginSlice.reducer;
