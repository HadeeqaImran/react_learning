import React, {useState, useEffect} from 'react'

const Function_Counter = (props) => {
    const [count, setCount] = useState(0);
    
  useEffect(() => {
    console.log('Mounted!');
  }, [count]);

  return (
        <div>
            <h1>{count}</h1>
            <button onClick= {() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Function_Counter