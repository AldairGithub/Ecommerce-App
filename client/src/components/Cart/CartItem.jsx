import React from 'react'
import './CartItem.css'

export default function CartItem(props) {
  const {
    item,
    index,
    updateQuantity,
    removeItem
  } = props

  return (
    <>
      <div className='cart-item-container' key={index}>
        <img className='cart-item-img' src={item.img_url} alt={item.name}/>
        
        <div>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <div className='quantity-container'>
            {/* <span onClick={e => updateQuantity(1, index)}>+</span>
            <span>{(item.quantity + 1) - item.quantity}</span>
            <span onClick={e => updateQuantity(-1, index)}>-</span> */}
          </div>
        </div>

        {/* <button className='remove-item-button' onClick={e => removeItem(item.id)}>Remove Item</button> */}
        </div>
      </>
  )
}