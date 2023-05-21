import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import authSlice from "./slices/authSlice";
import bookingDetailsSlice from "./slices/bookingDetailsSlice";
import bookingSearchSlice from "./slices/bookingSearchSlice";
import dashboardSlice from "./slices/dashboardSlice";
import invoiceSlice from "./slices/invoiceSlice";

export const store = configureStore({
  reducer: {
    searchPortal: bookingSearchSlice,
    searchApi: apiSlice,
    bookingDetails: bookingDetailsSlice,
    authDetails: authSlice,
    invoice: invoiceSlice,
    dashboard: dashboardSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
