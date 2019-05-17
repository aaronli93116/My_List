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
  return {
    type: "GET_DATA"
  };
}
