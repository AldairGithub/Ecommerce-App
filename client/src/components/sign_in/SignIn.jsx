import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import { loginUser } from '../../services/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default function Login(props) {
  const { setCurrentUser } = props

  const [newUserData, setNewUserData] = useState({
    username: "",
    password: ""
  })
  const [errorUsername, setErrorUsername] = useState(false)
  const [errorUsernameMsg, setErrorUsernameMsg] = useState('')
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorPasswordMsg, setErrorPasswordMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewUserData({
      ...newUserData,
      [name]: value
    })
  }
  const checkForEmptyInputs = () => {
    if (newUserData.password.length === 0) {
      setErrorPassword(true)
      setErrorPasswordMsg('Missing password')
    }
    if (newUserData.username.length === 0) {
      setErrorUsername(true)
      setErrorUsernameMsg('Missing username')
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorUsername(false)
    setErrorPassword(false)
    checkForEmptyInputs()
    if (newUserData.username.length > 0 && newUserData.password.length > 0) {
      try {
        const userData = await loginUser(newUserData)
        setCurrentUser(userData)
        props.history.push('/')
      } catch (error) {
        if (error.response.data.errors === 'unauthorized') {
          setErrorPassword(true)
          setErrorPasswordMsg('Incorrect password, minimum 6 characters')
        }
        if (error.message.substring(error.message.length - 3) === '500') {
          setErrorUsername(true)
          setErrorUsernameMsg('Incorrect username. User not found')
        }
      }
    }
  }

  return (
    <>
      <div className='sign-container'>
        <div className='sign-title-container'>
          <h1 className='sign-title'>Welcome back!</h1>
        </div>
        <form className='sign-column-container' onSubmit={handleSubmit}>
          <div className='sign-display-container'>
            <div className='sign-row-container'>
              <FontAwesomeIcon id='sign-icon' icon={faUser} size='1x'/>
              <input
                className='sign-input'
                placeholder="Username"
                type="text"
                name="username"
                value={setNewUserData.username}
                onChange={handleChange}
              />
            </div>
            {errorUsername &&
              <>
                <div className='sign-error-row-container'>
                  <FontAwesomeIcon className='sign-error-icon' icon={faExclamationTriangle} size='1x' />
                  <label className='sign-error-text'>{errorUsernameMsg}</label>
                </div>
              </>
            }
          </div>


          <div className='sign-display-container'>
            <div className='sign-row-container'>
              <FontAwesomeIcon id='sign-icon' icon={faLock} size='1x'/>
              <input
                className='sign-input'
                placeholder="Password"
                type="password"
                name="password"
                maxLength={6}
                value={setNewUserData.password}
                onChange={handleChange}
              />
            </div>
            {errorPassword &&
              <>
                <div className='sign-error-row-container'>
                  <FontAwesomeIcon className='sign-error-icon' icon={faExclamationTriangle} size='1x' />
                  <label className='sign-error-text'>{errorPasswordMsg}</label>
                </div>
              </>
            }
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
        
        <div>
          <Link to='/register'>
            <button className='sign-button'>
              Sign Up
               <FontAwesomeIcon className='sign-icon-button' icon={ faUserPlus} size='1x'/>
              </button>
          </Link>
        </div>
      </div>
    </>
  )
}
