import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../features/location/locationSlice";
import weatherDataReducer from "../features/weatherData/weatherDataSlice";
import loadingReducer from "../features/loading/loadingSlice";
import historyReducer from "../features/history/historySlice";
import darkThemeReducer from "../features/darkTheme/darkThemeSlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
    weather: weatherDataReducer,
    loading: loadingReducer,
    history: historyReducer,
    darkTheme: darkThemeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
