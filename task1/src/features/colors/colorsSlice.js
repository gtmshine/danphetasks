import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  renderedColors: [],
};

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    newColorRendered: (state, action) => {
      const { payload } = action;
      console.log([...state.renderedColors, payload], "col");

      return {
        ...state,
        renderedColors: [...state.renderedColors, payload],
      };
    },
  },
});

export const { newColorRendered } = colorsSlice.actions;

export default colorsSlice.reducer;
