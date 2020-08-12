import React from 'react'
import { Link } from 'react-router-dom'
import { removeToken } from '../../services/auth'
import { useHistory } from 'react-router-dom'

export default function Header(props) {
  const history = useHistory()

  const handleLogout = () => {
    props.setCurrentUser(null)
    localStorage.removeItem("authToken")
    removeToken()
    history.push('/')
  }

  return (
    <header>
      <Link to='/home'><h1>My Ecommerce App</h1></Link>
      {
        props.currentUser ? (
          <>
            <p>{props.currentUser.username} logged in</p>
            <Link to={`/users/${props.currentUser.id}`}>Update User</Link>
            <Link to={`/users/${props.currentUser.id}/items`}>User Items</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
            <>
              <Link to='/'>Sign In</Link>
              <Link to='/register'>Sign Up</Link>
            </>
        )
      }
    </header>
  )
}