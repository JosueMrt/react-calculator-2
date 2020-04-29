import React from "react";
import '../App.css'

const Display = ({ display, displayBis }) => {
  return (
    <div id="total-display">
      <h3 id="display-bis">{displayBis}</h3>
      <h1 id="display">{display}</h1>
    </div>
  );
};

export default Display;
