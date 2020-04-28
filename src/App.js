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
    if(display[0] === '0' && display.length <= 1 && num !== '.') {  // If the only number on screen is 0, replace it. (Unless we're trying to add a comma)
      setDisplay(num.toString())
    } else if(num === '.' && isDotHere.test(display)) {             // Is there already a comma on the display? We can't have 2 comma in the same number
        setDisplay(display)
    } else {                                                        // If all else is good, add new number to the string
        setDisplay(display + num.toString());
    }
  }

  return (
    <div className="App">
      <Display display={display} displayBis={displayBis} />
      <KeyPad handleClear={handleClear} handleNum={handleNum}/>
    </div>
  );
}

export default App;
