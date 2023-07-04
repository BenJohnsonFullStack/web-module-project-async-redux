import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "../slices/activitySlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    activity: activityReducer,
  },
  middleware: [thunk],
});
