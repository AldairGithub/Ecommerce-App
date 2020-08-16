import React, { useState, useEffect } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export default function Cart(props) {
  let { cart } = props
  let { setCart } = props
  let { total } = props
  let { setTotal } = props
  
  useEffect(() => {
    allTotal()
  })

  const allTotal = () => {
    let subTotal = cart
      .filter(item => item.quantity > 0)
      .map(item => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0)
    setTotal(subTotal)
  }

  const updateQuantity = (quantity, index) => {
    let oldItems = cart.slice()
    let item = oldItems[index]
    item.quantity = item.quantity + quantity < 1 ? 1 : item.quantity + quantity
    setCart([
      ...oldItems
    ], allTotal())
  }

  const removeItem = (id) => {
    let oldItems = cart.slice()
    let filteredItems = oldItems.filter((item) => item.id !== id)
    setCart([
      ...filteredItems
    ], allTotal())

  }

  return (
    <div className='cart-container'>
      {cart.map((item, index) => (
        <CartItem item={item} index={index} updateQuantity={updateQuantity} removeItem={removeItem}/>
      ))}
      <div className='total-container'>
        <h1>Total: ${total}</h1>
        <Link to={`/users/${cart.length != 0 ? `${props.match.params.id}/checkout` : `${props.match.params.id}/cart`}`}><button className='cart-button'>Checkout</button></Link>
      </div>
    </div>
  )
}