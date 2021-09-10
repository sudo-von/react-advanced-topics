import React, { useRef } from 'react'

const Ref = () => {

    const reference = useRef()
    const handleFocus = () => reference.current.focus()
    const handleBlur = () => reference.current.blur()

    return (
        <div>
            <input 
                type='text'
                ref={reference}
            />
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleBlur}>Blur</button>
        </div>
    )
}

export default Ref
