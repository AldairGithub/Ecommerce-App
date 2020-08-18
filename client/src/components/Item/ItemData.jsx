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
      <img src={props.item.img_url} alt={props.item.name}/>
      <h3>{props.item.name}</h3>
      {props.item.categories && props.item.categories.map((str, index) => (
        <div key={index}>
          <h4>{str.name}</h4>
        </div>
      ))}
      <h1>${props.item.price}</h1>
      <div className='button button-cart'>
        <button onClick={() => handleClick(props.item)}>Add to Cart</button>
      </div>
    </div>
  )
}