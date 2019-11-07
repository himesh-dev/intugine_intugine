import React, { useEffect } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import TabList from "./components/StatusTab/index";
import Dashboard from "./components/Dashboard/index";
import * as actions from "./utils/actions";

function App(props) {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      {!props.data.loading ? (
        <>
          <TabList tab={props.data} />
          <Dashboard
            data={props.data.data.filter(
              item => item.status === props.data.currentTab
            )}
          />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
const mapStateToProps = (state, props) => {
  console.log("STATE", state);
  return {
    data: state
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: () => {
      dispatch(actions.fetchData());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
