import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newColorRendered } from "../colorsSlice";
import ColorContext from "../renderedColorsContext";
import RenderedColors from "./Components/RenderedColors";
import "./index.css";

const colors = ["red", "green", "blue", "black", "orange"];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const getRandomColor = () => {
  const randomIndex = randomNumber(0, colors.length);
  return colors[randomIndex];
};

function Colors() {
  const dispatch = useDispatch();
  const [state, setState] = useState({ currentColor: "red" });

  const renderedColors = useSelector((st) => st.colors.renderedColors);

  useEffect(() => {
    dispatch(newColorRendered("red"));
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <button
        className="color-button"
        onClick={() => {
          if (state.currentColor === "blue") {
            setState({ ...state, currentColor: "green" });
            dispatch(newColorRendered("green"));
            return;
          }
          const randomColor = getRandomColor();
          setState({ ...state, currentColor: randomColor });
          dispatch(newColorRendered(randomColor));
        }}
        style={{ background: state.currentColor, width: 200, color: "white" }}
      >
        Click me
      </button>
      <ColorContext.Provider value={{ renderedColors }}>
        <RenderedColors />
      </ColorContext.Provider>
    </div>
  );
}

export default Colors;
