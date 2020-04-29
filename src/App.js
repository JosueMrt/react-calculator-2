import React, { useState } from "react";
import "./App.css";
import KeyPad from "./components/KeyPad";
import Display from "./components/Display";

function App() {
  const [display, setDisplay] = useState("0");
  const [displayBis, setDisplayBis] = useState([]);
  const [lastPress, setLastPress] = useState(["none"]);

  const handleClear = () => {
    setDisplay("0");
    setDisplayBis([]);
  };

  const handleNum = (num) => {
    const isDotHere = /\./;
    const isOp = /[+-/*]/;
    if (
      (display[0] === "0" && display.length <= 1 && num !== ".") ||
      isOp.test(display[0])
    ) {
      // If the only number on screen is 0 or an operator, replace it. (Unless it's a 0 we're trying to add a comma)
      setDisplay(num.toString());
    } else if (num === "." && isDotHere.test(display)) {
      // Is there already a comma on the display? We can't have 2 commas
      setDisplay(display);
    } else {
      // If all else is good, add new number to the string
      let operation = display + num.toString();
      setDisplay(operation);
    }
  };

  const handleOp = (op) => {
    if (lastPress === "equals") {
      let operation = display + op;
      setDisplayBis(operation);
      setDisplay(op);
      setLastPress("op");
    } else {
      if (isNaN(Number(display[display.length - 1])) === false) {
        // If a number is on the display add the operator
        let operation = displayBis + display + op;
        setDisplayBis(operation);
        setDisplay(op);
      } else {
        // Else replace old operator with the new one
        let sliced = displayBis.slice(0, -1);
        setDisplayBis(sliced + op);
        setDisplay(op);
      }
    }
  };

  const opPriority = (op) => {
    
  }

  const handleEq = () => {
    let operation = displayBis + display;
    setDisplayBis(operation);
    setDisplay(new Function("return " + operation + ";").call().toString());
    setLastPress("equals");
  };

  return (
    <div className="App">
      <Display display={display} displayBis={displayBis} />
      <KeyPad
        handleClear={handleClear}
        handleNum={handleNum}
        handleOp={handleOp}
        handleEq={handleEq}
      />
    </div>
  );
}

export default App;
