import data from "../Data";
const initState = {
  mylist: data.mylist,
  recommendations: data.recommendations
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        mylist: state.mylist,
        recommendations: state.recommendations
      };
    case "REMOVE_ELE":
      return {
        ...state,
        mylist: [
          ...state.mylist.slice(0, action.id),
          ...state.mylist.slice(action.id + 1)
        ],
        recommendations: [...state.recommendations, state.mylist[action.id]]
      };
    case "ADD_ONE":
      return {
        ...state,
        mylist: [...state.mylist, state.recommendations[action.id]],
        recommendations: [
          ...state.recommendations.slice(0, action.id),
          ...state.recommendations.slice(action.id + 1)
        ]
      };
    default:
      return state;
  }
};

export default listReducer;
