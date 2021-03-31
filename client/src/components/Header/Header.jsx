import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { removeToken } from '../../services/auth'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog, faCaretDown, faHouseUser, faUserEdit, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
  const { currentUser, setCurrentUser } = props

  const [showDropdown, setShowDropdown] = useState(false)

  const handleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const history = useHistory()

  const handleLogOut = () => {
    setCurrentUser(null)
    setShowDropdown(false)
    localStorage.removeItem("authToken")
    removeToken()
    history.push('/')
  }

  return (
    <header>
      {
        props.currentUser !== null ? (
          <div className='header'>
            <div className='home'>
              <Link to='/'><h1>Ecommerce-Marketplace</h1></Link>
            </div>
            <div className='user-nav button'>
              <div className='dropdown'>
                <div onClick={handleDropdown}>
                  <FontAwesomeIcon style={{marginRight: '3px'}} icon={faUserCog} size='3x' />
                  <FontAwesomeIcon style={{color: 'gray'}} icon={faCaretDown} size='2x'/>
                </div>

                {/* dropwdown content */}
                <div className={`${showDropdown && 'show-dropdown'} dropdown-content`}>

                  {/* User profile */}
                  <Link to={`/users/${currentUser.id}/items`}>
                    <div className='icon-user-row' onClick={handleDropdown}>
                      <FontAwesomeIcon className='icon-user' color={'gray'} icon={faHouseUser} size='2x' />
                      <div className='text-left icon-user-column'>
                        <strong>{currentUser.username}</strong><p>View Profile</p>
                      </div>
                    </div>
                  </Link>

                  {/* Update User */}
                  <Link to={`/users/${currentUser.id}`}>
                    <div className='subicon-container-row' onClick={handleDropdown}>
                      <FontAwesomeIcon className='subicon-icon' icon={faUserEdit} size='1x' />
                      <p className='subicon-text'>Update Account</p>
                    </div>
                  </Link>


                  {/* Sign Out */}
                  <div style={{ marginTop: '15px', paddingBottom: '10px'}} className='subicon-container-row' onClick={handleLogOut}>
                    <FontAwesomeIcon className='subicon-icon' style={{marginLeft: '13px'}} icon={faSignOutAlt} size='1x' />
                    <p className='subicon-text'>Sign Out</p>
                  </div>

                </div>
              </div>
              
              <Link to={`/users/${currentUser.id}/cart`}>
                <div className='dropdown'>
                  <FontAwesomeIcon icon={ faShoppingCart } size='2x'/>
                </div>
              </Link>

            </div>
        </div>
        ) : (
        <div className='header'>
          <div className='user-nav button'>
            <Link to={`/register`}><button>Sign Up</button></Link>
            <Link to={`/signin`}><button>Sign In</button></Link>
              </div>
          <div className='notHome'>
            <Link className='notHome' to='/'><h1>Ecommerce-Marketplace</h1></Link>
          </div>
        </div>
        )
      }  
    </header>
  )
}