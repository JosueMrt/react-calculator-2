import React from 'react';

const Display = ({ display, displayBis }) => {
    return (
        <div>
            <h3 id='displayBis'>{displayBis}</h3>
            <h1 id='display'>{display}</h1>
        </div>
    );
}
 
export default Display;