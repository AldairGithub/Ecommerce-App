import React, { useState } from 'react'
import './CreateItem.css'
import { postItem } from '../../services/items'

export default function CreateItem(props) {
  const [itemData, setItemData] = useState({
    name: "",
    price: 0,
    img_url: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setItemData({
      ...itemData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newItem = await postItem(itemData)
    props.setItems([
      ...props.items,
      newItem
    ])
    props.history.push(`/users/${props.match.params.id}/items`)
  }


  return (
    <div className='create-item-container'>
      <div>
      <h2>My Business</h2>
      <h3>Hello {props.currentUser.username}, what would you like to create today?</h3>
      </div>
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={itemData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type='number'
        name='price'
        value={itemData.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type='text'
        name='img_url'
        value={itemData.img_url}
        onChange={handleChange}
        placeholder="Image"
      />
      <button>Submit</button>
      </form>
    </div>
  )
}