import React, { Component } from "react";
import { connect } from "react-redux";
import StatusTab from "./StatusTab";
import * as actions from "../../utils/actions";

const TabList = props => {
  const tablist = ["DEL", "INT", "OOD", "DEX", "NFI"];
  const changeTab = status => {
    props.changeTab(status);
  };
  console.log("TAB_PROPS", props);
  return (
    <div className="" style={{marginTop:"10px"}}>
      {
        <div
          className=""
          style={{
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "center"
          }}
        >
          {props.tab.data.length > 0 &&
            props.tab.data.map(tab => (
              <StatusTab
                key={tab.status}
                tab={tab}
                currentTab={props.currentTab}
                changeTab={changeTab}
              />
            ))}
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentTab: state.currentTab
  };
};

const mapDispatchToPRops = dispatch => {
  return {
    changeTab: status => dispatch(actions.changeTab(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPRops
)(TabList);
