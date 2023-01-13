import React, { useContext } from "react";
import { ColorsContext } from "../../../Store";

function RenderedColors() {
  const { renderedColors } = useContext(ColorsContext);

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
