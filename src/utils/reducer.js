import * as actionTypes from "./actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
  currentTab: "DEL"
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case actionTypes.FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actionTypes.CHANGE_TAB:
      return {
        ...state,
        currentTab: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
