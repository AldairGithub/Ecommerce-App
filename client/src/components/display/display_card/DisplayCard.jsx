import React from 'react'

import './DisplayCard.css'

export default function DisplayCard(props) {
  const { item } = props
  return (
    <>
      <div className='display-cards-container'>

        <div className='display-cards-img-container'>
          <img className='display-cards-img' width='320' height='320' src={ item.img_url }/>
        </div>
        <div className='display-cards-text'>
          <div className='display-cards-price'>
            <label>${ item.price }</label>
          </div>
          <div className='display-cards-name'>
            <p>{ item.name }</p>
          </div>
        </div>
      </div>
    </>
  )
}