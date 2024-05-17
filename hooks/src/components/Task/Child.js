import React from 'react'

function Child({handleClick, value}) {
  return (
    <>
    <h1>
        {value}
    </h1>
    <button onClick={handleClick}>
        Increment
    </button>
    </>
  );
}

export default Child