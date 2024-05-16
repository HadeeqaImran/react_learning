import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    return (
    <h1>
        <button onClick={() => setCount(count + 1)}>
            useState: {count}
        </button>
    </h1>
  )
}

export default Counter