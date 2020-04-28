import React from 'react';

const PadLayout = [
    {number: 7, text: 'seven'},
    {number: 8, text: 'eight'},
    {number: 9, text: 'nine'},
    {number: 4, text: 'four'},
    {number: 5, text: 'five'},
    {number: 6, text: 'six'},
    {number: 1, text: 'one'},
    {number: 2, text: 'two'},
    {number: 3, text: 'three'},
    {number: 0, text: 'zero'},
    {number: '.', text: 'decimal'}
]


const NumKey = ({ number, id, handleNum }) => {
    return (
        <button onClick={() => handleNum(number)} id={id}>{number}</button>
    );
}

const OpKeys = ({ handleClear }) => {
    return (
        <div>
            <button id='add'>+</button>
            <button id='subtract'>-</button>
            <button id='multiply'>*</button>
            <button id='divide'>/</button>
            <button id="equals">=</button>
            <button onClick={() => handleClear()} id='clear'>AC</button>
        </div>
    );
}

const KeyPad = ({ handleClear, handleNum }) => {
    return (
        <div>
            { PadLayout.map((val, i) => <NumKey 
                number={val.number}
                id={val.text}
                handleNum={handleNum}
            />) }
            <OpKeys handleClear={handleClear} />
        </div>
    );
}
 
export default KeyPad;