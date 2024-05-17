import React, {useState} from 'react'
import Mouse from './Mouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle
        </button>
        {display && <Mouse/>}
    </div>
  )
}

export default MouseContainer