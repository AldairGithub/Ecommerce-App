import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { readAllUsers } from '../services/users'

import Login from './sign_in/SignIn'
import Register from './sign_up/SignUp'
import UpdateUser from './user/UpdateUser'
import Home from './home/Home'
import Item from './item/Item'
import UserItems from './user_items/UserItems'
import CreateItem from './create_item/CreateItem'
import UpdateItem from './update_item/UpdateItem'
import Cart from './cart/Cart'
import Checkout from './checkout/Checkout'
import OrderOut from './order_out/OrderOut'
import Display from './display/Display'

export default function Main(props) {
  const {
    currentUser,
    setCurrentUser,
    items, setItems,
    categories,
    itemList,
    setItemList,
    categoryList,
    setCategoryList,
    cart,
    setCart,
    total,
    setTotal
  } = props

  const [item] = useState({})

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const userList = await readAllUsers()
    setUsers(userList)
  }

  return (
    <main>
      <Route exact path='/signin' render={(props) => (
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

      <Route exact path='/' render={(props) => (
        <Home
          {...props}
          items={items}
          categories={categories}
          itemList={itemList}
          setItemList={setItemList}
          categoryList={categoryList}
          setCategoryList={setCategoryList}
        />
      )} />

      <Route path='/search/:word' render={(props) => (
        <Display
          {...props}
          items={items}
          categories={categories}
          itemList={itemList}
          categoryList={categoryList}
        />
      )}/>

      <Route path='/item/:item_name/:id' render={(props) => (
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
          {...props}
          setCart={setCart}
        />
      )} />

    </main>
  )
}