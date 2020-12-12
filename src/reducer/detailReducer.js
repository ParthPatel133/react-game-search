const initalState = {
  game: {platforms: []},
  screenshot: {
    results: [],
  },
  isLoading: true,
};

const detailReducer = (state = initalState, aciton) => {
  switch (aciton.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        game: aciton.payload.game,
        screenshot: aciton.payload.screenshot,
        isLoading: false,
      };
    case 'LOADING_DETAIL':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {...state};
  }
};

export default detailReducer;
