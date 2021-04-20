import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/header/Header'
import Main from './components/Main'
import { verifyUser } from './services/auth'
import { readAllItems } from './services/items'
import { readOneItem } from './services/items'
import { readAllCategories } from './services/categories'

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [items, setItems] = useState(null)
  const [categories, setCategories] = useState(null)
  const [itemList, setItemList] = useState([])
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    handleVerify()
    getItems()
    getCategories()
  }, [])

  const getItems = async () => {
    const itemList = await readAllItems()

    const getCategory = async (id) => {
      const item = await readOneItem(id)
      return item
    }
    const items = await Promise.all(itemList.map(async (item) => 
      getCategory(item.id)
    ))
    setItems(items)
  }

  const getCategories = async () => {
    const categoryList = await readAllCategories()
    setCategories(categoryList)
  }

  const handleVerify = async () => {
    const userData = await verifyUser()
    setCurrentUser(userData)
  }

  return (
    <div className='App'>
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        items={items}
        categories={categories}
        itemList={itemList}
        setItemList={setItemList}
        categoryList={categoryList}
        setCategoryList={setCategoryList}
      />
      <Main
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        items={items}
        setItems={setItems}
        categories={categories}
        itemList={itemList}
        setItemList={setItemList}
        categoryList={categoryList}
        setCategoryList={setCategoryList}
      />
    </div>
  )
}
