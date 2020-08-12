import React from 'react'

export default function ItemData(props) {

  return (
    <>
      <p>{props.item.name}</p>
      {props.item.categories && props.item.categories.map((str, index) => (
        <>
          <p key={index}>{str.name}</p>
        </>
      ))}
      <p>{props.item.price}</p>
    </>
  )
}