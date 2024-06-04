import React, {useEffect, useRef} from 'react'

function Focus() {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus()
    }, [])
  return (
    <div>
        <input ref={ref} type='text'></input>
    </div>
  )
}

export default Focus