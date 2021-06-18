import React, { useState } from 'react'
import './CreateItem.css'
import { postItem } from '../../../services/items'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'
import { faBookMedical } from '@fortawesome/free-solid-svg-icons'

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

  const onFileChange = (e) => {
    e.persist()
    setItemData({
      ...itemData,
      img_url: e.target.files[0]
    })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const newItem = await postItem(itemData)
  //   props.setItems([
  //     ...props.items,
  //     newItem
  //   ])
  //   props.history.push(`/users/${props.match.params.id}/items`)
  // }


  return (
    <>
      <div className='create-item-container'>
        <form>
          <div>
            <div className='create-item-label-container'>
              <label>What name would you describe your item by?</label>
            </div>
            <div className='create-item-input-container'>
              <FontAwesomeIcon id='create-item-icon' icon={faEdit} size='1x' />
              <input
                className='create-item-input'
                type='text'
                name='name'
                value={itemData.name}
                onChange={handleChange}
                placeholder='Name'
              />
            </div>
          </div>
          <div>
            <div className='create-item-label-container'>
              <label>What price would work for you?</label>
            </div>
            <div className='create-item-input-container'>
              <FontAwesomeIcon id='create-item-icon' icon={faDollarSign} size='1x' />
              <input
                className='create-item-input'
                type='number'
                name='price'
                value={itemData.price}
                onChange={handleChange}
                placeholder='Price'
              />
            </div>

          </div>
          <div>
            <div className='create-item-label-container'>
              <label>What image would best describe your product?</label>
            </div>
            <div className='create-item-input-file-container'>
              <FontAwesomeIcon id='create-item-icon-file' icon={faFileImage} size='1x' />
              <input
                className='create-item-input-file'
                type='file'
                name='image'
                accept='.png, .jpg, .jpeg'
                onChange={(e) => onFileChange(e)}
              />
            </div>

          </div>
          <div className='create-item-button-container'>
            <button className='create-item-button'>
              Add to Catalog
              <FontAwesomeIcon id='create-item-add-item-icon'  icon={ faBookMedical } size='1x'/>
            </button>
          </div>
        </form>
      </div>
{/* 
      <div className='create-item-container'>
    <form onSubmit={handleSubmit}>
      <form>
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
      </div> */}
    </>
  )
}