import React from "react";
import '../App.css'

const Display = ({ display, displayBis }) => {
  return (
    <div id="display-container">
      <div id="both-displays"></div>
      <h3 id="display-bis">{displayBis}</h3>
      <h1 id="display">{display}</h1>
    </div>
  );
};

export default Display;
