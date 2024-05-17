import React, {useState, useEffect} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Clicked ${count} times`
    })
    return (
    <h1>
        <button onClick={() => setCount(count + 1)}>
            useState: {count}
        </button>
    </h1>
  )
}

export default Counter