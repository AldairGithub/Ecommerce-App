import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Checkout(props) {
  let [total, setTotal] = useState(props.total)

  return (
    <>
      <checkout>
        {}
      </checkout>
      <h1>Total: {total}</h1>
      <Link></Link>
    </>
  )
}
