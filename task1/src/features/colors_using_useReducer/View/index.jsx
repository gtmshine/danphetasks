import React from "react";
import MainBody from "./Components/MainBody";
import ColorsProvider from "../Store";
import "./index.css";


function Colors() {
  return (
    <ColorsProvider>
      <MainBody />
    </ColorsProvider>
  );
}

export default Colors;
