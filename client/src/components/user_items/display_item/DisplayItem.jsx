import React from 'react'
import './DisplayItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

export default function DisplayItem(props) {
  const {id, item} = props
  return (
    <>
      <div className='display-item-container'>
        <div className='display-item-column'>
          <div className='display-item-img-container'>
            <img className='display-item-img' src={item.img_url} alt={ item.name}/>
          </div>
          <div className='display-item-text-container'>
            <div>
              <label>{ item.name }</label>
            </div>
            <div className='display-item-info-container'>
              <div>
                <label className='display-item-price'>$ { item.price }</label>
              </div>
              <Link to={`/users/${id}/item/${item.id}/edit`}>
                <div className='display-item-button-container'>
                  <button className='display-item-button'>
                    Update Item
                    <FontAwesomeIcon className='display-item-icon' icon={ faArrowRight } size='1x'/>
                  </button>
                </div>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}