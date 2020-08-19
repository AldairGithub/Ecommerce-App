import React from 'react'
import './Header.css'
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
      {
        props.currentUser !== null ? (
          <div className='header'>
            <div className='user-nav button'>
              <Link to={`/users/${props.currentUser.id}`}><button>Update User</button></Link>
              <Link to={`/users/${props.currentUser.id}/items`}><button>User Items</button></Link>
              <Link to={`/users/${props.currentUser.id}/cart`}><button>Cart</button></Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className='home'>
              <Link to='/home'><h1>Ecommerce-Marketplace</h1></Link>
            </div>
        </div>
        ) : (
        <div className='header'>
          <div className='user-nav button'>
            <Link to={`/register`}><button>Sign Up</button></Link>
            <Link to={`/`}><button>Sign In</button></Link>
              </div>
          <div className='notHome'>
            <Link className='notHome' to='/home'><h1>Ecommerce-Marketplace</h1></Link>
          </div>
        </div>
        )
      }  
    </header>
  )
}