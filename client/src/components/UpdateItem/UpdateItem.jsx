import React, { useState, useEffect } from 'react'
import './UpdateItem.css'
import { putItem } from '../../services/items'

export default function UpdateItem(props) {
  const [itemData, setItemData] = useState({
    name: "",
    price: 0,
    img_url: ""
  })

  useEffect(() => {
    defaultItemData()
  }, [props.items])

  const defaultItemData = () => {
    const itemExist = props.items.find((item) => {
      return item.id === parseInt(props.match.params.id)
    })
    if (itemExist) {
      setItemData({
        name: itemExist.name,
        price: itemExist.price,
        img_url: itemExist.img_url
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setItemData({
      ...itemData,
      [name]: value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { id } = props.match.params
    const newItem = await putItem(id, itemData)
    props.setItems(
      props.items.map((currentItem) => {
        return currentItem.id === parseInt(id) ? newItem : currentItem
      })
    )
    props.history.goBack()
  }

  return (
    <>
    <div>
      <h2>My Business</h2>
    </div>
    <h3>Update Item</h3>
    <div className='create-item-container'>
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
    </>
  )
}