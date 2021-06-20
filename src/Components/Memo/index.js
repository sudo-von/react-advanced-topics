import React, { useState, useEffect, useMemo } from 'react'
import List from './List'

const initialUsers = [
  { id: 1, name: "Jesús" },
  { id: 2, name: "Ángel" }
]

const Memo = () => {

  const [users, setUsers] = useState(initialUsers)
  const [input, setInput] = useState("")
  const [search, setSearch] = useState("")

  /* Adds a new user. */
  const handleAdd = () => {
    const newUser = { id: users.length + 1, name: input }
    setUsers([...users, newUser])
  }

  const handleSearch = () => {
    setSearch(input)
  }

  /* Filters users based on the search state. */
  const filteredUsers = useMemo(() =>
    users.filter(user => {
      console.log("Filtered users")
      return user.name.toLowerCase().includes(search.toLowerCase())
    }), [search, users])

  useEffect(()=>{
    console.log('App render')
  })

  return(
    <div className="grid grid-cols-2 gap-4 p-5">
      <input
        type="text"
        value={input}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setInput(e.target.value)}
      />
      <div>     
        <button onClick={handleAdd} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-1 rounded">
          Add
        </button>
        <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 p-5">
        <List users={filteredUsers}/>
      </div>
    </div>
  )
}

export default Memo