import React from "react";
import { connect } from "react-redux";
import { fetchActivity } from "../async";
// import { store } from "../app/store";

function Activity(props) {
  const { activity, status, error, fetchActivity } = props;

  return (
    <section>
      <div>
        <h3 className="error">{error ? `Error: ${error}` : ""}</h3>
        <p>Activity: {activity.activity}</p>
        <p>Type: {activity.type}</p>
        <p>Participants: {activity.participants}</p>
        <p>Price: {activity.price <= 0.5 ? "Low" : "High"}</p>
        <p>Accessibility Rating: {activity.accessibility}</p>
        <a href={activity.link} target="_blank">
          {activity.link}
        </a>
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
