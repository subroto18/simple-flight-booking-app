import { createSlice } from "@reduxjs/toolkit";
import {
  DATE_FORMAT,
  LOCAL_STORAGE_GET,
  LOCAL_STORAGE_SET,
} from "../../utils/helper";

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
  booked: false,
};
const bookingDetailsSlice = createSlice({
  name: "bookingDetailsSlice",
  initialState,
  reducers: {
    // when click on "departure from" button , store it into "departureFrom" state
    updateBookingDetails: (state, action) => {
      state.flightName = action.payload.flight_name;
      state.flightLogo = action.payload.flight_logo;
      state.departureFrom = action.payload.departure_from;
      state.departureTo = action.payload.departure_to;
      state.departureTime = action.payload.departure_time;
      state.reachingTime = action.payload.reaching_time;
      state.departureDate = action.payload.departure_date;
      state.flightDuration = action.payload.flight_duration;
      state.flightFare = action.payload.flight_fare;
      state.booked = true;
    },

    updateBookingSeat: (state, action) => {
      let seatAlreadyExist = state.bookedSeat.indexOf(action.payload) == -1;
      let index = state.bookedSeat.indexOf(action.payload);

      if (seatAlreadyExist) {
        state.bookedSeat.push(action.payload);
      } else {
        state.bookedSeat.splice(index, 1);
      }
    },

    updateBooked: (state, action) => {
      let fileName = DATE_FORMAT(action.payload?.[0].departureDate);
      let fileData = action.payload;
      let checkedFlightData = Boolean(LOCAL_STORAGE_GET(fileName));
      if (checkedFlightData) {
        let data = JSON.parse(LOCAL_STORAGE_GET(fileName));
        LOCAL_STORAGE_SET(fileName, [...data, ...fileData]);
      } else {
        LOCAL_STORAGE_SET(fileName, fileData);
      }

      // after booked ticket remove the booked bookingDetailsSlice

      state.flightName = "";
      state.flightLogo = "";
      state.departureFrom = "";
      state.departureTo = "";
      state.departureTime = "";
      state.reachingTime = "";
      state.departureDate = new Date();
      state.flightDuration = "";
      state.flightFare = "";
      state.bookedSeat = [];
      state.booked = false;
    },
  },
});

export const { updateBookingDetails, updateBookingSeat, updateBooked } =
  bookingDetailsSlice.actions;
export default bookingDetailsSlice.reducer;
