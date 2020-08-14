import React from 'react'

export default function ItemData(props) {

  const handleClick = (item) => {
    // adds items to an array for Cart
    props.setCart(prevArray => [
      ...prevArray,
      item
    ])
  }
  return (
    <>
      <p>{props.item.name}</p>
      {props.item.categories && props.item.categories.map((str, index) => (
        <>
          <p key={index}>{str.name}</p>
        </>
      ))}
      <p>{props.item.price}</p>
      <button onClick={() => handleClick(props.item)}>Add to Cart</button>
    </>
  )
}