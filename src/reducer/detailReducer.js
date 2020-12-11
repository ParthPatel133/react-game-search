const initalState = {
  game: {},
  screenshot: {},
};

const detailReducer = (state = initalState, aciton) => {
  switch (aciton.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        game: aciton.payload.game,
        screenshot: aciton.payload.screenshot,
      };
    default:
      return {...state};
  }
};

export default detailReducer;
