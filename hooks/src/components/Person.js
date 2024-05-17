import React, {useState, useEffect} from 'react'

export default function Person() {
  const [name, setName] = useState({first: "", last: ""});
    useEffect(() => {
        document.title = `${name.first}`
    }, [name.first])
    
    return (
    <> 
        <h2>{name.first} {name.last}</h2>
        <form>
            <label>First Name: </label>
            <input type="text" value={name.first} onChange={(event) => setName({...name, first: event.target.value})}></input>
            <label>Last Name: </label>
            <input type="text" value={name.last} onChange={(event) => setName({...name, last: event.target.value})}></input>
        </form>
    </>
  )
}
