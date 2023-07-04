import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  activity: {},
  status: "idle", // 'idle' | 'loading' | 'success' | 'error'
  error: null,
};

export const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      return {
        ...state,
        status: action.payload,
      };
    },
    activitySuccess: (state, action) => {
      return {
        ...state,
        status: "success",
        error: null,
        activity: action.payload,
      };
    },
    activityError: (state, action) => {
      return {
        ...state,
        status: "error",
        error: action.payload,
      };
    },
  },
});

export const { setStatus, activitySuccess, activityError } =
  activitySlice.actions;

export default activitySlice.reducer;
