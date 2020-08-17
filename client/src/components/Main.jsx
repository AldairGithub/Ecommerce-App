import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { readAllItems } from '../services/items'
import { readAllUsers } from '../services/users'
import { readAllCategories } from '../services/categories'

import Login from './SignIn/SignIn'
import Register from './SignUp/SignUp'
import UpdateUser from './User/UpdateUser'
import Home from './Home/Home'
import Item from './Item/Item'
import UserItems from './UserItems/UserItems'
import CreateItem from './CreateItem/CreateItem'
import UpdateItem from './UpdateItem/UpdateItem'
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout'
import OrderOut from './OrderOut/OrderOut'

export default function Main(props) {
  const { currentUser } = props
  const { setCurrentUser } = props

  const [items, setItems] = useState([])
  const [item, setItem] = useState({})

  const [users, setUsers] = useState([])

  const [categories, setCategories] = useState([])

  const [cart, setCart] = useState([])

  const [total, setTotal] = useState(0)

  
  useEffect(() => {
    getItems()
    getUsers()
    getCategories()
  }, [])

  const getItems = async () => {
    const itemList = await readAllItems()
    setItems(itemList)
  }
  
  const getUsers = async () => {
    const userList = await readAllUsers()
    setUsers(userList)
  }

  const getCategories = async () => {
    const categoryList = await readAllCategories()
    setCategories(categoryList)
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
      )} />

      <Route exact path='/users/:id' render={(props) => (
        <UpdateUser
          {...props}
          users={users}
          setUsers={setUsers}
        />
      )} />

      <Route exact path='/home' render={() => (
        <Home
          items={items}
        />
      )} />

      <Route exact path='/items/:id/categories' render={(props) => (
        <Item
          {...props}
          item={item}
          cart={cart}
          setCart={setCart}
        />
      )} />

      <Route exact path='/users/:id/items' render={(props) => (
        <UserItems
          {...props}
          currentUser={currentUser}
          items={items}
          setItems={setItems}
          categories={categories}
        />
      )} />

      <Route exact path='/users/:id/new' render={(props) => (
        <CreateItem
          {...props}
          currentUser={currentUser}
          items={items}
          setItems={setItems}
        />
      )} />

      <Route exact path='/users/:userId/item/:id/edit' render={(props) => (
        <UpdateItem
          {...props}
          items={items}
          setItems={setItems}
        />
      )} />

      <Route exact path='/users/:id/cart' render={(props) => (
        <Cart
          {...props}
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
        />
      )} />

      <Route exact path='/users/:id/checkout' render={(props) => (
        <Checkout
          {...props}
          total={total}
          currentUserAddress={currentUser.address}
        />
      )} />

      <Route exact path='/users/:id/orderout' render={(props) => (
        <OrderOut
          setCart={setCart}
        />
      )} />

    </main>
  )
}