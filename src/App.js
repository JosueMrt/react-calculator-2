import React, { useState } from 'react';
import './App.css';
import KeyPad from './components/KeyPad'
import Display from './components/Display'

function App() {
  const [display, setDisplay] = useState('0');
  const [displayBis, setDisplayBis] = useState([]);

  const handleClear = () => {setDisplay('0'); setDisplayBis([])}

  const handleNum = (num) => {
    const isDotHere = /\./
    const isOp = /[+-/*]/
    if(display[0] === '0' && display.length <= 1 && num !== '.' || isOp.test(display[0])) {  // If the only number on screen is 0 or an operator, replace it. (Unless it's a 0 we're trying to add a comma)
      setDisplay(num.toString())
    } else if(num === '.' && isDotHere.test(display)) {     // Is there already a comma on the display? We can't have 2 commas
        setDisplay(display)
    } else {                                                // If all else is good, add new number to the string
        setDisplay(display + num.toString());
    }
  }

  const handleOp = (op) => {
    if(isNaN(Number(display[display.length-1])) === false) {                       // If a number is on the display add the operator               
      setDisplayBis(displayBis + display + op)
      setDisplay(op)
    } else {
        let sliced = displayBis.slice(0, -1);
        setDisplayBis(sliced + op)
        setDisplay(op);
    }
  }

  const handleEq = () => {
    setDisplayBis(displayBis + display)
    
    // setDisplay(new Function('return ' + displayBis + ';').call())
  }

  return (
    <div className="App">
      <Display display={display} displayBis={displayBis} />
      <KeyPad handleClear={handleClear} handleNum={handleNum} handleOp={handleOp} handleEq={handleEq} />
    </div>
  );
}

export default App;
