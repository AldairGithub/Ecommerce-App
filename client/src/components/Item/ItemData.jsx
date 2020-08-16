import React from 'react'
import './ItemData.css'

export default function ItemData(props) {

  const handleClick = (item) => {
    // adds items to an array for Cart
    props.setCart(prevArray => [
      ...prevArray,
      item
    ])
  }
  return (
    <div className='item-data-container'>
      <img src={props.item.img_url} />
      <p>{props.item.name}</p>
      {props.item.categories && props.item.categories.map((str, index) => (
        <div key={index}>
          <p>{str.name}</p>
        </div>
      ))}
      <p>{props.item.price}</p>
      <div className='button button-cart'>
        <button onClick={() => handleClick(props.item)}>Add to Cart</button>
      </div>
    </div>
  )
}