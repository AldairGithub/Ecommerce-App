import React from 'react'

export default function CartItem(props) {
  const { currentUser } = props

  return (
      <div key={props.index}>
        <img style={{ height: 100, width: 100 }} src={props.item.img_url} />
        <p>{props.item.name}</p>
        <p>{props.item.price}</p>
        <span onClick={e => props.updateQuantity(1, props.index)}>+</span>
        <span>{props.item.quantity}</span>
      <span onClick={e => props.updateQuantity(-1, props.index)}>-</span>
      <button onClick={e => props.removeItem(props.item.id)}>Remove Item</button>
      </div>
  )
}