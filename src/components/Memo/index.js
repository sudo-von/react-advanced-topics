import React, { useState, useEffect } from 'react'
import List from './List'

const initialUsers = [
  { id: 1, name: "Jesús" },
  { id: 2, name: "Ángel" }
]

export const Memo = () => {

  const [users, setUsers] = useState(initialUsers)
  const [input, setInput] = useState("")

  const handleAdd = () => {
    const newUser = { id: users.length + 1, name: input }
    setUsers([...users, newUser])
  }

  useEffect(()=>{
    console.log('App render')
  })

  return(
    <div>
      <input
        type="text"
        value={input}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
      <List users={users}/>
    </div>
  )
}

export default Memo