import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { readAllItems } from '../services/items'

import Login from './Login'
import Home from './Home'
import Item from './Item'

export default function Main(props) {
  const { setCurrentUser } = props

  const [items, setItems] = useState([])
  const [item, setItem] = useState({})
  
  useEffect(() => {
    getItems()
  }, [])

  const getItems = async () => {
    const itemList = await readAllItems()
    setItems(itemList)
  }

  return (
    <main>
      <Route exact path='/' render={(props) => (
        <Login
          {...props}
          setCurrentUser={setCurrentUser}
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
        />
      )} />

    </main>
  )
}