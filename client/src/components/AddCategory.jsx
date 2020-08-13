import React, { useState, useEffect } from 'react'
import { addCategory } from '../services/items'

export default function AddCategory(props) {
  const [item, setItem] = useState(null)
  const [categoryId, setCategoryId] = useState(null)

  useEffect(() => {
    getItem()
  })

  const getItem = () => {
    setItem(props.item)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setCategoryId(value)
  }

  const handleSubmit = async (e) => {
    const newCategory = await addCategory(categoryId, item.id)
    setItem(newCategory)
  } 

  return (
    <>
      <p>Add categories will go here</p>
      {
        item && (
          <>
            <form onSubmit={handleSubmit}>
              <select onChange={handleChange}>
                <option selected disabled>-- Select Category --</option>
                {props.categories.map((category, index) => (
                  <option key={index} value={category.id}>{category.name}</option>
                ))}
              </select>
              <button>Add</button>
            </form>
          </>
        )
      }
    </>
  )
}