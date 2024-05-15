import React, {useState, useEffect} from 'react'

const Function_Counter = (props) => {
    const [count, setCount] = useState(0);
    
      // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
        <div>
            <h1>{count}</h1>
            <button onClick= {() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Function_Counter