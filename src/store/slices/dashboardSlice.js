import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
  isShowBookedTicketModal: false,
  isShowEmptySeatModal: false,
};

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    // show hide modal
    updateModalStatus: (state, action) => {
      state.isModalVisible = action.payload;
    },
    // total booked or empty seat , which one will show in the modal
    updateShowContentStatus: (state, action) => {
      if (action.payload.showTodayBookedTicket) {
        state.isShowBookedTicketModal = true;
        state.isShowEmptySeatModal = false;
      } else if (action.payload.showTodayEmptySeat) {
        state.isShowBookedTicketModal = false;
        state.isShowEmptySeatModal = true;
      }
    },
  },
});

export const { updateModalStatus, updateShowContentStatus } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
