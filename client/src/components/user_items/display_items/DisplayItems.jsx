import React from 'react'
import './DisplayItems.css'

import DisplayItem from '../display_item/DisplayItem'

export default function DisplayItems(props) {
  const { id, items, getUserItems } = props
  
  return (
    <>
      <div className='display-items'>
      <div className='display-items-container'>
        {items.map(item => (
          <>
            <div className='display-items-separator'>
              <DisplayItem id={id} item={item} getUserItems={ getUserItems }/>
            </div>
          </>
        ))}
        </div>
      </div>
    </>
  )
}