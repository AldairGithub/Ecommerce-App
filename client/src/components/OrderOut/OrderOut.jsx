import React from 'react'
import './OrderOut.css'
import { Link } from 'react-router-dom'

export default function OrderOut(props) {

  const handleClick = () => {
    const emptyCart = new Array()
    props.setCart(emptyCart)
  }

  return (
    <>
      <h3 className='title'>Congratulations! Your order should arrive in 5-10 business days</h3>
      <Link to={'/home'}><button className='go-shopping-button'onClick={handleClick}>Go Shopping</button></Link>
    </>
  )
}