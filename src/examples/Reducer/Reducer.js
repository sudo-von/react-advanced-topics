import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count+1
            }
        case 'DECREMENT':
            return {
                count: state.count-1
            }
        default:
            return state
    }
}

const Reducer = () => {

    const [ state, dispatch ] = useReducer(reducer, {
        count: 0
    })

    const increment = () => dispatch({ type: 'INCREMENT'})
    const decrement = () => dispatch({ type: 'DECREMENT'})

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Reducer
