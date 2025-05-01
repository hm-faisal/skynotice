import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const loadingSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLoading: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
