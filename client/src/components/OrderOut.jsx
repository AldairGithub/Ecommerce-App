import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function OrderOut(props) {

  const handleClick = () => {
    const emptyCart = new Array()
    props.setCart(emptyCart)
  }

  return (
    <>
      <p>order out</p>
      <button onClick={handleClick}><Link to={'/home'}>Continue</Link></button>
    </>
  )
}