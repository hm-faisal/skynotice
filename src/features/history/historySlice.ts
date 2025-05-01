import { createSlice } from "@reduxjs/toolkit";
import HistoryType from "../../types/HistoryType";

const initialState: HistoryType[] = localStorage.getItem("weather-history")
  ? [...JSON.parse(localStorage.getItem("weather-history") as string)]
  : [];

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setHistory } = historySlice.actions;

export default historySlice.reducer;
