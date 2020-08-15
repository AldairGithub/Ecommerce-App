import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Checkout(props) {
  let [total, setTotal] = useState(props.total)

  return (
    <>
      {/* breaks if currentUser is reloaded */}
      <p>
        {props.currentUser == null ? 'string' : props.currentUser}
      </p>
      <h1>Total: {total}</h1>
      <Link to={`/users/${props.match.params.id}/orderout`}>Continue</Link>
    </>
  )
}
