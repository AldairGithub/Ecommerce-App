import React from 'react'
import './DeleteItem.css'
import { destroyItem } from '../../services/items'

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
      <button className='delete-button' onClick={() => handleClick(props.itemId)}>Delete Item</button>
    </>
  )
}