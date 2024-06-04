import React from 'react'

function Button({handleClick}) {
    console.log(`Button`)
  return (
    <button onClick={handleClick}>
        Increment
    </button>
  )
}

export default Button