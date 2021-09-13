import React, { forwardRef, useImperativeHandle, useState, useRef } from 'react'

const FancyInput = forwardRef((props, ref) => {

    const [text, setText ] = useState('***')
    const entrada = useRef()

    useImperativeHandle(ref, () => ({
        dispatchAlert: () => {
            alert('ALERT')
        },
        setParragraph: (message) => {
            setText(message)
        },
        focusInput: () => {
            entrada.current.focus()
        }
    }))

    return (
        <div>
            {text}
            <input type='text' ref={entrada}/>
        </div>
    )
})

const ImperativeHandle = () => {
    
    const fancyInput = useRef()

    const handleClick = () => {
        fancyInput.current.focusInput()
    }

    return (
        <div>
            <FancyInput ref={fancyInput}/>
            <button onClick={handleClick}>Dispatch</button>
        </div>
    )
}

export default ImperativeHandle
