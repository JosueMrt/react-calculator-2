import React from "react";
import "../App.css";
import "../GridLayout.css"

const PadLayout = [
  { number: 7, text: "seven" },
  { number: 8, text: "eight" },
  { number: 9, text: "nine" },
  { number: 4, text: "four" },
  { number: 5, text: "five" },
  { number: 6, text: "six" },
  { number: 1, text: "one" },
  { number: 2, text: "two" },
  { number: 3, text: "three" },
  { number: 0, text: "zero" },
  { number: ".", text: "decimal" },
];

const NumKey = ({ number, id, handleNum }) => {
  return (
    <button className="keys num-keys" onClick={() => handleNum(number)} id={id}>
      {number}
    </button>
  );
};

// const OpKeys = ({ handleClear, handleOp, handleEq }) => {
//   return (
//     <div id='opkeys'>
//       <button onClick={() => handleOp("+")} className="keys" id="add">
//         +
//       </button>
//       <button onClick={() => handleOp("-")} className="keys" id="subtract">
//         -
//       </button>
//       <button onClick={() => handleOp("*")} className="keys" id="multiply">
//         *
//       </button>
//       <button onClick={() => handleOp("/")} className="keys" id="divide">
//         /
//       </button>
//       <button onClick={() => handleEq()} className="keys" id="equals">
//         =
//       </button>
//       <button onClick={() => handleClear()} className="keys" id="clear">
//         AC
//       </button>
//     </div>
//   );
// };

const KeyPad = ({ handleClear, handleNum, handleOp, handleEq }) => {
  return (
    <div id="keypad">
      {PadLayout.map((val, i) => (
        <NumKey
          id={val.text}
          number={val.number}
          handleNum={handleNum}
        />
      ))}
      <button onClick={() => handleOp("+")} className="keys op-keys" id="add">
        +
      </button>
      <button onClick={() => handleOp("-")} className="keys op-keys" id="subtract">
        -
      </button>
      <button onClick={() => handleOp("*")} className="keys op-keys" id="multiply">
        *
      </button>
      <button onClick={() => handleOp("/")} className="keys op-keys" id="divide">
        /
      </button>
      <button onClick={() => handleEq()} className="keys op-keys" id="equals">
        =
      </button>
      <button onClick={() => handleClear()} className="keys op-keys" id="clear">
        AC
      </button>
    </div>
  );
};

export default KeyPad;
