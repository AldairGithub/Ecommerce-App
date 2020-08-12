import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
        <h1>My Ecommerce App</h1>
        {
          props.currentUser ? (
          <>
            <Link><p>{props.currentUser.username}</p></Link>
          </>
          )
        }
    </header>
  )
}