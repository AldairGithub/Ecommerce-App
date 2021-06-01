import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import { loginUser } from '../../services/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default function Login(props) {
  const [newUserData, setNewUserData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewUserData({
      ...newUserData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await loginUser(newUserData)
    props.setCurrentUser(userData)
    props.history.push('/')
  }

  return (
    <>
      <div className='sign-container'>
        <div>
          <h1 style={{color: 'white'}}>Welcome back!</h1>
        </div>
        <form className='sign-column-container' onSubmit={handleSubmit}>
          <div className='sign-row-container'>
            <FontAwesomeIcon className='sign-icon' icon={faUser} size='1x'/>
            <input
              className='sign-input'
              placeholder="Username"
              type="text"
              name="username"
              value={setNewUserData.username}
              onChange={handleChange}
            />
          </div>

          <div className='sign-row-container'>
            <FontAwesomeIcon className='sign-icon' icon={faLock} size='1x'/>
            <input
              className='sign-input'
              placeholder="Password"
              type="password"
              name="password"
              value={setNewUserData.password}
              onChange={handleChange}
            />
          </div>

          <div className='sign-button-container'>
            <div className='sign-row-container'>
              <button className='sign-button'>
                Sign In
                <FontAwesomeIcon className='sign-icon-button' icon={faArrowAltCircleRight} size='1x'/>
              </button>
            </div>
          </div>
        </form>
        
        <div className='sign-alternate-text'>
          <p>Don't have an account?</p>
        </div>
        
        <div className='button sign-up-button'>
          <Link to='/register'>
            <button className='sign-button'>
              Sign Up
               <FontAwesomeIcon className='sign-icon-button' icon={ faUserPlus} size='1x'/>
              </button>
          </Link>
        </div>
      </div>
    </>
    // <div className='button sign-in-input'>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     placeholder="Username"
    //     type="text"
    //     name="username"
    //     value={setNewUserData.username}
    //     onChange={handleChange}
    //   />
    //   <input
    //     placeholder="Password"
    //     type="password"
    //     name="password"
    //     value={setNewUserData.password}
    //     onChange={handleChange}
    //   />
    //   <button>Sign In</button>
    //   </form>
      // <p>Don't have an account?</p>
      // <div className='button sign-up-button'>
      //   <Link to='/register'><button>Sign Up</button></Link>
      // </div>
    // </div>
  )
}
