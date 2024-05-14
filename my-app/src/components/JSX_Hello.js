import React from "react";

const JSX_Hello = () => {
    // With JSX
    /* return (
        <div>
            <h1>
                Hello Hadeeqa!
            </h1>
        </div>
    ); */

    // Without JSX
    return (
        React.createElement('div', null, React.createElement('h1', null, 'Hello, Hadeeqa!'))
    );
}

export default JSX_Hello