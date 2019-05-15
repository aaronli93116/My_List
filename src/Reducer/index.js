const initState = {
  mylist: [
    {
      title: "Futurama",

      id: 1,

      img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },

    {
      title: "The Interview",

      id: 2,

      img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },

    {
      title: "Gilmore Girls",

      id: 3,

      img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    }
  ],

  recommendations: [
    {
      title: "Family Guy",

      id: 4,

      img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },

    {
      title: "The Croods",

      id: 5,

      img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },

    {
      title: "Friends",

      id: 6,

      img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
  ]
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
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
