import React, { useState, useEffect, useLayoutEffect } from 'react'

const LayoutEffect = () => {

    const [count, setCount] = useState(0)

    /* Asynchronous. */
    useEffect(() => {
        console.log('useEffect 1')
    },[count])

    useEffect(() => {
        console.log('useEffect 2')
    },[count])

    /* Synchronous. */
    useLayoutEffect(() => {
        console.log('useLayoutEffect 1')
    },[count])

    useLayoutEffect(() => {
        console.log('useLayoutEffect 2')
    },[count])


    const handleAdd = () => setCount(count => count+1)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default LayoutEffect
