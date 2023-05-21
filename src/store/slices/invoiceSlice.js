import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightName: "",
  departureTime: "",
  departureFrom: "",
  departureTo: "",
  flightLogo: "",
  reachingTime: "",
  departureDate: new Date(),
  flightDuration: "",
  flightFare: "",
  bookedSeat: [],
  showInvoice: false,
};

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {
    updateInVoice: (state, action) => {
      let payload = action.payload?.[0];
      state.flightName = payload.flightName;
      state.flightLogo = payload.flightLogo;
      state.departureFrom = payload.departureFrom;
      state.departureTo = payload.departureTo;
      state.departureTime = payload.departureTime;
      state.reachingTime = payload.reachingTime;
      state.departureDate = payload.departureDate;
      state.flightDuration = payload.flightDuration;
      state.flightFare = payload.flightFare;
      state.bookedSeat = payload.bookedSeat;
      state.showInvoice = true;
    },
  },
});

export const { updateInVoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
