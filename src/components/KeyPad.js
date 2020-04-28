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

const OpKeys = ({ handleClear, handleOp, handleEq }) => {
    return (
        <div>
            <button onClick={() => handleOp('+')} id='add'>+</button>
            <button onClick={() => handleOp('-')} id='subtract'>-</button>
            <button onClick={() => handleOp('*')} id='multiply'>*</button>
            <button onClick={() => handleOp('/')} id='divide'>/</button>
            <button onClick={() => handleEq()} id="equals">=</button>
            <button onClick={() => handleClear()} id='clear'>AC</button>
        </div>
    );
}

const KeyPad = ({ handleClear, handleNum, handleOp, handleEq }) => {
    return (
        <div>
            { PadLayout.map((val, i) => <NumKey 
                number={val.number}
                id={val.text}
                handleNum={handleNum}
            />) }
            <OpKeys handleClear={handleClear} handleOp={handleOp} handleEq={handleEq} />
        </div>
    );
}
 
export default KeyPad;