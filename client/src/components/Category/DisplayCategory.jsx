import React, { useState, useEffect } from 'react'
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
        <>
          <p key={index}>{category.name}</p>
        </>
      ))}
    </>
  )
}