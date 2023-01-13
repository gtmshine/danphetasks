import React, { useContext, useState } from "react";
import { ColorsContext } from "../../Store";

import RenderedColors from "./RenderedColors";

const colors = ["red", "green", "blue", "black", "orange"];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const getRandomColor = () => {
  const randomIndex = randomNumber(0, colors.length);
  return colors[randomIndex];
};

function Colors() {
  //   const dispatch = useDispatch();
  const { newColorRendered, renderedColors } = useContext(ColorsContext);
  const [state, setState] = useState({ currentColor: renderedColors[0] });

  //   const renderedColors = useSelector((st) => st.colors.renderedColors);

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
            newColorRendered("green");
            return;
          }
          const randomColor = getRandomColor();
          setState({ ...state, currentColor: randomColor });
          newColorRendered(randomColor);
        }}
        style={{ background: state.currentColor, width: 200, color: "white" }}
      >
        Click me
      </button>
      <RenderedColors />
    </div>
  );
}

export default Colors;
