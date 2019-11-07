import React, { useState } from "react";
import Lists from "./Lists/Lists";
import Timeline from "./Timeline/Timeline";
import { connect } from "react-redux";

const Dashboard = props => {
  const [timeline, setTimeline] = useState(null);
  const getTimelineData = data => {
    console.log("data-scan", data.scan);
    if (
      data.current_status_code == "DEL" &&
      data.scan[0].status_detail != "DELIVERED"
    ) {
      let temp = data.scan[0];
      data.scan[0] = data.scan[1];
      data.scan[1] = temp;
      console.log("data-scan-after", data.scan);
    }
    setTimeline(data.scan);
  };
  console.log("DASHBOARD PROPS", props.data[0] ? props.data[0].data : null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "50px"
      }}
    >
      <div style={{}}>{timeline && <Timeline timeline={timeline} />}</div>
      <div
        style={{
          padding: "20px",
          float: "right",
          border: "2px solid #e8edf1"
        }}
      >
        {props.data[0] && (
          <Lists data={props.data[0].data} getTimelineData={getTimelineData} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
