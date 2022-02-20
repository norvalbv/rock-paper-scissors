const initialState = {
  result: false,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case "win":
      return {
        result: "win",
      };
    case "lose": {
      return {
        result: "lose",
      };
    }
    case "draw": {
      return {
        result: "draw",
      };
    }
    case "reset": {
      return {
        state: initialState,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default game;
