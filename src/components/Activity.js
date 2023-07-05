import React from "react";
import { connect } from "react-redux";
import { fetchActivity } from "../async";
import ActivityList from "./ActivityList";

function Activity(props) {
  const { status, error, fetchActivity } = props;

  return (
    <section>
      <div>
        <h3 className="error">{error ? `Error: ${error}` : ""}</h3>
        {status === "success" ? <ActivityList /> : null}
        <button className="activity-button" onClick={fetchActivity}>
          {status === "loading"
            ? "Loading Activity..."
            : "Click to Generate an Activity"}
        </button>
      </div>
    </section>
  );
}

const mapStatetoProps = (state) => {
  return {
    activity: state.activity.activity,
    status: state.activity.status,
    error: state.activity.error,
  };
};

export default connect(mapStatetoProps, { fetchActivity })(Activity);
