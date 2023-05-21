import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResultLoading: false,
  searchResultData: [],
  searchResultApiError: false,
};

const apiSlice = createSlice({
  name: "apiSlice",
  initialState,
  reducers: {
    // search result will store to "searchResultData"
    updateSearchResultData: (state, action) => {
      state.searchResultData = action.payload;
    },
  },
});

export const { updateSearchResultData } = apiSlice.actions;
export default apiSlice.reducer;
