import React, { useState } from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom'

export default function Checkout(props) {
  let [total] = useState(props.total)

  return (
    <div className='credit-card'>
      {/* breaks if currentUser is reloaded */}
      <div className='credit-data'>
        <input className='card-number' type='text' placeholder='Enter Card Number' />
        <input className='card-data'type='text' placeholder='Month' />
        <input className='card-data'type='text' placeholder='Year' />
        <input  className='card-data'type='text' placeholder='CVV'/>  
      </div>
      <div className='checkout'>
        <p>Please type a valid address</p>
        <input className='checkout-input' type='text'/>
        {props.currentUserAddress == null ? <></> : 
          <div className='currentAddress'>
            <p>Or use your address</p>
            <label>{props.currentUserAddress}
              <input type='checkbox'/>
            </label>
          </div>
        }
        <h2>Total: ${total}</h2>
        <Link to={`/users/${props.match.params.id}/orderout`}><button className='checkout-button'>Continue</button></Link>
      </div>
    </div>
  )
}
