import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as actionTypes from "./actionTypes";

const endpoint =
  "https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank";

const body = { email: "mayankmittal@intugine.com" };
axios.defaults.headers.Authorization = "Bearer tTU3gFVUdP";

const axiosInstance = () => {
  return axios.post(endpoint, body);
};

const status = ["DEL", "INT", "OOD", "DEX", "NFI"];

export function* fetchData() {
  yield put(actions.fetchStart());
  try {
    const response = yield call(axiosInstance);
    const data = response.data.data;
    const filteredData = status.map(el => {
      return {
        status: el,
        data: data.filter(item => item.current_status_code == el)
      };
    });
    console.log("RESPONSE Fetch Data--->", data);

    yield put(actions.fetchSuccess(filteredData));
  } catch {
    console.log("ERROR");
  }
}
export function* watchFetch() {
  yield takeEvery(actionTypes.FETCH_DATA, fetchData);
}
