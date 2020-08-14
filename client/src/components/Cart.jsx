import React from 'react'

export default function Cart(props) {
  return (
    <div>
      <p>This is the Cart component</p>
      {props.cart.map((item, index) => (
        <div key={index}>
          <img style={{ height: 100, width: 100 }} src={item.img_url} />
          <p key={index}>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}