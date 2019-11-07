import React from "react";
import "./StatusTab.css";
const StatusTab = props => {
  console.log("Props", props);
  return (
    <div
      className={
        "tab-box" + (props.currentTab === props.tab.status ? " active" : "")
      }
      onClick={() => props.changeTab(props.tab.status)}
    >
      <span
        className=""
        style={{
          position: "absolute",
          left: 10,
          top: 10,
          color: props.currentTab === props.tab.status ? "#c2e0f2" : "#0061c2"
        }}
      >
        {/* {props.status} */}
        {props.tab.status}
      </span>
      <div
        className=""
        style={{
          position: "absolute",
          right: 10,
          color: props.currentTab === props.tab.status ? "#c2e0f2" : "#0061c2",
          bottom: 10,
          fontSize: "20px"
        }}
      >
        {props.tab.data.length}

        {/* 87 */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default StatusTab;
