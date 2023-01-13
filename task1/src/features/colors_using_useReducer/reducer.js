//Initial State and Actions
const initialState = {
  renderedColors: ["green"],
};

const actions = {
  newColorRendered: "NEW_COLOR_RENDERED",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.newColorRendered:
      const { payload } = action;

      return {
        ...state,
        renderedColors: [...state.renderedColors, payload],
      };

    default:
      return state;
  }
};

export { initialState, actions, reducer };
