import { configureStore } from "@reduxjs/toolkit";
import colors from "../features/colors/colorsSlice";

export const store = configureStore({
  reducer: {
 
    colors,
  },
});
