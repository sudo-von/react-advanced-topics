import React, { useState, createContext, useContext } from 'react'

const MyContext = createContext()

/* Traditional context. */
const Grandson = () => (
    <MyContext.Consumer>
        {(context) =>(            
            <div>
                <p>Grandson {context.count}</p>
                <button onClick={context.handleAdd}>Grandson dispatcher</button>
            </div>
        )}
    </MyContext.Consumer>
)

/* Context hook. */
const Son = () => {
    const { count, handleAdd } = useContext(MyContext)
    return(
        <div>
            <p>Son {count}</p>
            <button onClick={handleAdd}>Son dispatcher</button>
        </div>
    )
}

const Context = () => {

    const [count, setCount] = useState(0)
    const handleAdd = () => setCount(count => count+1)

    return (
        <MyContext.Provider value={{
            count,
            handleAdd
        }}>
            <div>
                <p>Count: {count}</p>
                <button onClick={handleAdd}>Add</button>
            </div>
            <Son/>
            <Grandson/>
        </MyContext.Provider>
    )
}

export default Context
