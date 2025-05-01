import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const darkThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setDarkTheme } = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
