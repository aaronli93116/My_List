import axios from "axios";

export function requestStart() {
  return {
    type: "DATA_FETCH_START"
  };
}
export function requestSuccess(response) {
  return {
    type: "DATA_FETCH_SUCCESS",
    data: response.data
  };
}
export function requestFail(error) {
  return {
    type: "DATA_FETCH_FAIL",
    error
  };
}
export function removeEle(id) {
  return {
    type: "REMOVE_ELE",
    id: id
  };
}
export function addEle(id) {
  return {
    type: "ADD_ONE",
    id: id
  };
}

export function getlist() {
  return (dispatch, store) => {
    dispatch(requestStart());
    axios
      .get("https://5cf057ef5660c40014949832.mockapi.io/api/shows")
      .then(response => {
        dispatch(requestSuccess(response));
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
}
