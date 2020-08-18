import React, { useState, useEffect } from 'react'
import './DisplayCategory.css'
import { readOneItem } from '../../services/items'

export default function UserItemCategories(props) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const { id } = props
    getItem(id)
    // gets rid of warning on missing dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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