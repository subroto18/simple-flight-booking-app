import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogedIn: false,
  userName: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // when click on "departure from" button , store it into "departureFrom" state
    updateLoginDetails: (state, action) => {
      state.isLogedIn = action.payload.isLogedIn;
      state.userName = action.payload.userName;
    },
  },
});

export const { updateLoginDetails } = authSlice.actions;
export default authSlice.reducer;
