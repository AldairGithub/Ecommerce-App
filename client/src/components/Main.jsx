import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { readAllItems } from '../services/items'
import { readAllUsers } from '../services/users'

import Login from './Login'
import Register from './Register'
import UpdateUser from './UpdateUser'
import Home from './Home'
import Item from './Item'

export default function Main(props) {
  const { setCurrentUser } = props

  const [items, setItems] = useState([])
  const [item, setItem] = useState({})

  const [users, setUsers] = useState([])
  
  useEffect(() => {
    getItems()
    getUsers()
  }, [])

  const getItems = async () => {
    const itemList = await readAllItems()
    setItems(itemList)
  }
  
  const getUsers = async () => {
    const userList = await readAllUsers()
    setUsers(userList)
  }

  return (
    <main>
      <Route exact path='/' render={(props) => (
        <Login
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />

      <Route exact path='/register' render={(props) => (
        <Register
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )}
      />

      <Route exact path='/users/:id' render={(props) => (
        <UpdateUser
          {...props}
          users={users}
          setUsers={setUsers}
        />
      )}
      
      />

      <Route exact path='/home' render={() => (
        <Home
          items={items}
        />
      )} />

      <Route exact path='/items/:id/categories' render={(props) => (
        <Item
          {...props}
          item={item}
        />
      )} />

    </main>
  )
}