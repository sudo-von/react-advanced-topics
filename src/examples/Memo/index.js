import React, { useState, useEffect, useMemo } from 'react'
/* Custom components. */
import Input from '../../components/Input'
import Button from '../../components/Button'
import List from './List'

const initialUsers = [
  { id: 1, name: 'Jesús' },
  { id: 2, name: 'Ángel' }
]

const Memo = () => {

  const [users, setUsers] = useState(initialUsers)
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')

  /* Adds a new user. */
  const handleAdd = () => {
    const newUser = { id: users.length + 1, name: input }
    setUsers([...users, newUser])
  }

  const handleSearch = () => {
    setSearch(input)
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  /* Filters users based on the search state. */
  const filteredUsers = useMemo(() =>
    users.filter(user => {
      console.log('Filtered users')
      return user.name.toLowerCase().includes(search.toLowerCase())
    }), [search, users])

  useEffect(()=>{
    console.log('App render')
  })

  return(
    <div className='grid grid-cols-2 gap-4 p-5'>
      <Input value={input} onChange={handleInput}/>
      <div>
        <Button onClick={handleAdd}>Add</Button>
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className='grid grid-cols-1 gap-4 p-5'>
        <List users={filteredUsers}/>
      </div>
    </div>
  )
}

export default Memo