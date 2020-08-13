import React from 'react'
import { destroyItem } from '../services/items'

export default function DeleteItem(props) {
  
  const handleClick = async (id) => {
    await destroyItem(id)
    props.setItems(props.items.filter((deleteItem) => {
      return deleteItem.id !== id
    }))
    props.history.go(0)
  }

  return (
    <>
      <button onClick={() => handleClick(props.itemId)}>Delete</button>
    </>
  )
}