import React, { useState } from 'react'
import './SignUp.css'
import { registerUser } from '../../services/auth'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSign, faSink, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default function Register(props) {
  const {setCurrentUser} = props
  const [newUserData, setNewUserData] = useState({
    username: "",
    password: "",
    email: "",
    address: ""
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
    try {
      const userData = await registerUser(newUserData)
      setCurrentUser(userData)
      props.history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='sign-container'>
        <div style={{paddingBottom: '42px'}}>
          <h1 className='sign-title'>Create an Account!</h1>
        </div>
        <form className='sign-column-container' onSubmit={handleSubmit}>
          <div className='sign-row-container'>
            <FontAwesomeIcon className='sign-icon' icon={faUser} size='1x'/>
            <input
              className='sign-input'
              type='text'
              name='username'
              value={newUserData.username}
              onChange={handleChange}
              placeholder='Username'
            />
          </div>
          <div className='sign-row-container'>
            <FontAwesomeIcon className='sign-icon' icon={faLock} size='1x'/>
            <input
              className='sign-input'
              type='password'
              name='password'
              value={newUserData.password}
              onChange={handleChange}
              placeholder='Password'
            />
          </div>
          <div className='sign-row-container'>
            <FontAwesomeIcon className='sign-icon' icon={faHome} size='1x'/>
            <input
              className='sign-input'
              type='text'
              name='address'
              value={newUserData.address}
              onChange={handleChange}
              placeholder='Address'
            />
          </div>
          <div className='sign-row-container'>
            <FontAwesomeIcon className='sign-icon' icon={faAt} size='1x'/>
            <input
              className='sign-input'
              type='text'
              name='email'
              value={newUserData.email}
              onChange={handleChange}
              placeholder='Email'
            />
          </div>

          <div className='sign-button-container'>
            <div className='sign-row-container'>
              <button className='sign-button'>
                Submit
                <FontAwesomeIcon className='sign-icon-button' icon={faArrowAltCircleRight} size='1x'/>
              </button>
            </div>
          </div>
        </form>

        <div style={{paddingTop: '35px'}} className='sign-alternate-text'>
          <p>Already have an account?</p>
        </div>

        <div>
          <Link style={{textDecoration: 'none'}} to='/signin'>
            <div className='sign-row-container'>
              <button className='sign-button'>
                Sign In
                <FontAwesomeIcon className='sign-icon-button' icon={ faSignInAlt} size='1x'/>
                </button>
              </div>
          </Link>
        </div>
      </div>
    </>
    // <div className='button sign-up-container'>
    // <form onSubmit={handleSubmit}>
    //   <h3>CREATE AN ACCOUNT</h3>
    //   <input
    //     type='text'
    //     name='username'
    //     value={newUserData.username}
    //     onChange={handleChange}
    //     placeholder='Username'
    //   />
    //   <input
    //     type='password'
    //     name='password'
    //     value={newUserData.password}
    //     onChange={handleChange}
    //     placeholder='Password'
    //   />
    //   <input
    //     type='text'
    //     name='address'
    //     value={newUserData.address}
    //     onChange={handleChange}
    //     placeholder='Address'
    //   />
    //   <input
    //     type='text'
    //     name='email'
    //     value={newUserData.email}
    //     onChange={handleChange}
    //     placeholder='Email'
    //   />
    //   <button>Submit</button>
    //   </form>
    //   <p>Already have an account?</p>
    //   <div className='button'>
    //     <Link to='/'><button>Sign In</button></Link>
    //   </div>
    // </div>
  )
}