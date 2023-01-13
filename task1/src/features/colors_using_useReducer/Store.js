/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from "react";
import { actions, initialState, reducer } from "./reducer";

const ColorsContext = React.createContext();

const ColorsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    renderedColors: state.renderedColors,
    newColorRendered: (payload) => {
      dispatch({ type: actions.newColorRendered, payload });
    },
  };

  return (
    <ColorsContext.Provider value={value}>{children}</ColorsContext.Provider>
  );
};

export default ColorsProvider;

export { ColorsContext };
