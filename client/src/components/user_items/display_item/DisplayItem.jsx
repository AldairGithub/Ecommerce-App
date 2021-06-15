import React from 'react'
import './DisplayItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { destroyItem } from '../../../services/items'

import { Link } from 'react-router-dom'

export default function DisplayItem(props) {
  const { id, item, getUserItems } = props
  
  const handleClick = (itemId) => {
    handleDeleteItem(itemId)
  }
  
  const handleDeleteItem = async(itemId) => {
    await destroyItem(itemId)
    // getUserItems()
  }

  return (
    <>
      <div className='display-item-container'>
        <div className='display-item-column'>
          <div className='display-item-img-container'>
            <img className='display-item-img' src={item.img_url} alt={ item.name}/>
          </div>
          <div className='display-item-text-container'>
            <div className='display-item-text'>
              <label>{ item.name }</label>
            </div>
            <div className='display-item-info-container'>
              <div className='display-item-price-container'>
                <label className='display-item-price'>$ { item.price }</label>
              </div>
              <Link to={`/users/${id}/item/${item.id}/edit`}>
                <div className='display-item-button-container'>
                  <button className='display-item-update-button'>
                    Update Item
                    <FontAwesomeIcon className='display-item-icon' icon={ faArrowRight } size='1x'/>
                  </button>
                </div>
              </Link>
              <div className='display-item-button-container'>
                <button onClick={() => handleClick(item.id)} className='display-item-delete-button'>
                  Delete Item
                  <FontAwesomeIcon className='display-item-icon' icon={faTrashAlt} size='1x'/>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}