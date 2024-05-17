import React, {useState} from 'react'

export default function Array() {
    const [arr, setArr] = useState([])
    const addItem = () => {
        setArr([...arr, Math.random()])
    }
  return (
    <>
    <button onClick={addItem}>Add Number</button>
        <ul>
            {arr.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </>
  )
}
