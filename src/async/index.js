import axios from "axios";
import {
  activityError,
  activitySuccess,
  setStatus,
} from "../features/activity/activitySlice";

export const fetchActivity = () => (dispatch) => {
  const URL = "https://www.boredapi.com/api/activity";

  dispatch(setStatus("loading"));

  axios
    .get(URL)
    .then((res) => {
      const activity = res.data;
      dispatch(activitySuccess(activity));
    })
    .catch((err) => {
      const message = err.message;
      dispatch(activityError(message));
    });
};
