import React, { useRef } from 'react'

const Ref = () => {

    const reference = useRef()
    const handleFocus = () => reference.current.focus()

    return (
        <div>
            <input 
                type='text'
                ref={reference}
            />
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}

export default Ref
