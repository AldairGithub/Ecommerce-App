import React, { useState, useEffect } from 'react'
import './DisplayCategory.css'
import { readOneItem } from '../../services/items'

export default function UserItemCategories(props) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getItem(props.id)
  }, [])

  const getItem = async (id) => {
    const itemData = await readOneItem(id)
    setCategories(itemData.categories)
  }

  return (
    <>
      {categories.map((category, index) => (
        <div className='display-category' key={index}>
          <p>{category.name}</p>
        </div>
      ))}
    </>
  )
}