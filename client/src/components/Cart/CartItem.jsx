import React from 'react'
import './CartItem.css'

export default function CartItem(props) {

  return (
    <>
      <div className='cart-item-container' key={props.index}>
        <img className='cart-item-img' src={props.item.img_url} alt={props.item.name}/>
        <div>
        <p>{props.item.name}</p>
        <p>${props.item.price}</p>
          <div className='quantity-container'>
            <span onClick={e => props.updateQuantity(1, props.index)}>+</span>
            <span>{props.item.quantity}</span>
            <span onClick={e => props.updateQuantity(-1, props.index)}>-</span>
          </div>
        </div>
        <button className='remove-item-button' onClick={e => props.removeItem(props.item.id)}>Remove Item</button>
        </div>
      </>
  )
}