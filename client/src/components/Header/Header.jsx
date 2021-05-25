import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { removeToken } from '../../services/auth'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog, faCaretDown, faHouseUser, faUserEdit, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import SearchBar from '../search_bar/SearchBar'

export default function Header(props) {
  const {
    currentUser,
    setCurrentUser,
    items,
    categories,
    itemList,
    setItemList,
    categoryList,
    setCategoryList,
    cart,
    setCart,
    total,
    setTotal
  } = props

  const [showDropdown, setShowDropdown] = useState(false)

  const [showSearchBody, setShowSearchBody] = useState(false)

  const [onCart, setOnCart] = useState()

  const handleDropdown = () => {
    setShowDropdown(!showDropdown)
  }
  const closeDropdown = () => {
    setShowDropdown(false)
  }

  const history = useHistory()

  const handleLogOut = () => {
    setCurrentUser(null)
    setShowDropdown(false)
    localStorage.removeItem("authToken")
    removeToken()
    history.push('/')
  }
  const openSearchBar = () => {
    setShowSearchBody(true)
  }
  const closeSearchBar = () => {
    setShowSearchBody(false)
  }

  return (
    <header>
      {currentUser !== null ? (
          <div className='header' onClick={closeSearchBar}>
            <div className='home' onClick={closeDropdown}>
              <Link to='/'>
                <h1>Markeet</h1>
              </Link>
            </div>
            <div className='search-bar-position'>
            <SearchBar
              openSearchBar={openSearchBar}
              closeSearchBar={closeSearchBar}
              showSearchBody={showSearchBody}
              items={items}
              categories={categories}
              itemList={itemList}
              setItemList={setItemList}
              categoryList={categoryList}
              setCategoryList={setCategoryList}
            />
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
                    <div className='icon-user-row' onClick={closeDropdown}>
                      <FontAwesomeIcon className='icon-user' color={'gray'} icon={faHouseUser} size='2x' />
                      <div className='text-left icon-user-column'>
                        <strong>{currentUser.username}</strong><p>View Profile</p>
                      </div>
                    </div>
                  </Link>

                  {/* Update User */}
                  <Link to={`/users/${currentUser.id}`}>
                    <div className='subicon-container-row' onClick={closeDropdown}>
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
                  <FontAwesomeIcon icon={faShoppingCart} size='2x' />
                  <div className='cart-number-container'>
                    <label className='cart-number'>{ cart.length }</label>
                  </div>
                </div>
              </Link>

            </div>
        </div>
        ) : (
            // not signed in user
        <div className='header' onClick={closeSearchBar}>
          <div className='home'>
            <Link to='/'>
              <h1>Markeet</h1>
            </Link>
            </div>
            <div className='search-bar-position'>
              <SearchBar
                openSearchBar={openSearchBar}
                closeSearchBar={closeSearchBar}
                showSearchBody={showSearchBody}
                items={items}
                categories={categories}
                itemList={itemList}
                setItemList={setItemList}
                categoryList={categoryList}
                setCategoryList={setCategoryList}
              />
            </div>
          <div className='register-buttons'>
            <div className='header-sign-button-container' style={{marginRight: '20px'}}>
              <Link to={`/register`}><p className='header-sign-text'>Sign Up</p></Link>
            </div>
            <div className='header-sign-button-container'>
              <Link to={`/signin`}><p className='header-sign-text'>Sign In</p></Link>
            </div>
          </div>
        </div>
        )
      }  
    </header>
  )
}