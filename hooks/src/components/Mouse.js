import React, {useState, useEffect} from 'react'

function Mouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    useEffect(() => {
        console.log("useEffect Called");
        window.addEventListener('mousemove', logMousePosition)
        return() => {
            console.log("Unmounted!");
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    const logMousePosition = event => {
        console.log("Mouse Event");
        setX(event.x)
        setY(event.y)
    }
  return (
    <div>
        <h1>
            {x}, {y}
        </h1>
    </div>
  )
}

export default Mouse