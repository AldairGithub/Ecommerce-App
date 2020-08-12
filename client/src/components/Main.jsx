import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { readAllItems } from '../services/items'
import { readAllUsers } from '../services/users'

import Login from './SignIn/SignIn'
import Register from './SignUp/SignUp'
import UpdateUser from './User/UpdateUser'
import Home from './Home/Home'
import Item from './Item/Item'
import UserItems from './UserItems'
import CreateItem from './CreateItem'

export default function Main(props) {
  const { currentUser } = props
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

      <Route exact path='/users/:id/items' render={(props) => (
        <UserItems
          {...props}
          currentUser={currentUser}
        />
      )} />

      <Route exact path='/users/:id/new' render={(props) => (
        <CreateItem
          {...props}
          items={items}
          setItems={setItems}
        />
      )} />
    </main>
  )
}