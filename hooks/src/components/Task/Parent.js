import React, {useState} from 'react'
import Child from './Child'

function Parent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return (
    <div>
        <Child handleClick={increment} value={count}></Child>
    </div>
  )
}

export default Parent