import React, { useState, useRef } from 'react'

const FocusApp = () => {

    const [text, setText] = useState('')
    const inputRef = useRef()

    const handleFocus = () => {
        const { current } = inputRef
        current.focus()
    }

    return (
        <div>
            <input 
                ref={inputRef}
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}

export default FocusApp
