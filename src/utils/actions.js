import * as actionTypes from "./actionTypes";

export const fetchData = () => {
    return {
      type: actionTypes.FETCH_DATA
    };
  };
export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_DATA_START
  };
};

export const fetchSuccess = payload => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload
  };
};

export const fetchFail = payload => {
  return {
    type: actionTypes.FETCH_DATA_FAIL,
    payload
  };
};
export const changeTab = payload => {
    return {
      type: actionTypes.CHANGE_TAB,
      payload
    };
  };