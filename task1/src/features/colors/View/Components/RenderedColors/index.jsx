import React, { useContext } from "react";
import ColorContext from "../../../renderedColorsContext";

function RenderedColors() {
  const { renderedColors } = useContext(ColorContext);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {renderedColors.map((color, i) => {
        return (
          <p key={i} style={{ color, margin: 2 }}>
            {color}
            {i !== renderedColors.length - 1 && <span>,</span>}
          </p>
        );
      })}
    </div>
  );
}

export default RenderedColors;
