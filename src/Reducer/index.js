const initState = {
  isFetching: false,
  mylist: [],
  recommendations: [],
  err: null
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case "DATA_FETCH_START":
      return {
        ...state,
        isFetching: true
      };
    case "DATA_FETCH_FAIL":
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        err: null,
        mylist: action.data[0].mylist,
        recommendations: action.data[0].recommendations
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
