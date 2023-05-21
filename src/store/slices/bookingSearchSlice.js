import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departureFrom: "kolkata",
  departureTo: "bangalore",
  departureDate: new Date(),
  isDepartureFrom: false, // when click on departure from button , select box will show based on true or false
  isDepartureTo: false, // when click on departure to button , select box will show based on true or false
  isDepartureDate: false, // when click on departure date button , select box will show based on true or false
  isSearch: false, // when click on search btn , search result will show based on true or false
  isLoading: false, // fetching data takes time, in between show loading effect
};

const bookingSearchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    // when click on "departure from" button , store it into "departureFrom" state
    updateDepartureFrom: (state, action) => {
      state.departureFrom = action.payload;
    },

    // when click on "departure from" button , select box will show or hide based on true/ false

    updateIsDeparureFrom: (state, action) => {
      state.isDepartureFrom = action.payload;
    },

    // when click on "departure to" button , store it into "departureTo" state

    updateDepartureTo: (state, action) => {
      state.departureTo = action.payload;
    },

    // when click on "departure to" button , select box will show or hide based on true/ false
    updateIsDeparureTo: (state, action) => {
      state.isDepartureTo = action.payload;
    },

    // when click on "departure date" button , store it into "departuredate" state

    updateDepartureDate: (state, action) => {
      state.departureDate = action.payload;
    },

    // when click on "departure date" button , select box will show or hide based on true/ false
    updateIsDepartureDate: (state, action) => {
      state.isDepartureDate = action.payload;
    },

    // when click on "search" button , search result will show based on true/ false

    updateIsSearch: (state, action) => {
      state.isSearch = action.payload;
    },
    updateIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  updateDepartureFrom,
  updateIsDeparureFrom,
  updateDepartureTo,
  updateIsDeparureTo,
  updateDepartureDate,
  updateIsDepartureDate,
  updateIsSearch,
  updateIsLoading,
} = bookingSearchSlice.actions;
export default bookingSearchSlice.reducer;
