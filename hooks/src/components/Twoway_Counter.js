import React, {useReducer} from 'react'

const reducer = (count, action) => {
    switch (action.type) {
        case "increment":
            return count + 1;
        case "decrement":
            return count - 1;
        default:
            return count;
    }
}

function Twoway_Counter() {
  const [count, dispatch] = useReducer(reducer, 0)
    return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={() => dispatch({type: "decrement"})}> - </button>
        <h1>{count}</h1>
        <button onClick={() => dispatch({type: "increment"})}> + </button>
    </div>
  )
}

export default Twoway_Counter;