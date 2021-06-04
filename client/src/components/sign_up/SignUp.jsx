import React, { useState } from 'react'
import './SignUp.css'
import { registerUser } from '../../services/auth'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faLock,
  faHome,
  faAt,
  faArrowAltCircleRight,
  faSignInAlt,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'

export default function Register(props) {
  const {setCurrentUser} = props
  const [newUserData, setNewUserData] = useState({
    username: "",
    password: "",
    retype_password: "",
    email: "",
    address: ""
  })

  const [errorUsername, setErrorUsername] = useState({
    error: false,
    message: ""
  })
  const [errorPassword, setErrorPassword] = useState({
    error: false,
    message: ""
  })
  const [errorEmail, setErrorEmail] = useState({
    error: false,
    message: ""
  })
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewUserData({
      ...newUserData,
      [name]: value
    })
  }


  const checkForEqualPasswords = () => {
    if (newUserData.password === newUserData.retype_password) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorUsername({
      error: false,
      message: ""
    })
    setErrorPassword({
      error: false,
      message: ""
    })
    setErrorEmail({
      error: false,
      message: ""
    })
    if (checkForEqualPasswords()) {
      const validUserData = {
        username: newUserData.username,
        password: newUserData.password,
        email: newUserData.email,
        address: newUserData.address
      }
      try {
        const userData = await registerUser(validUserData)
        setCurrentUser(userData)
        props.history.push('/')
      } catch (error) {
        const errors = Object.entries(error.response.data)
        errors.forEach(ele => {
          switch (ele[0]) {
            case "username":
              setErrorUsername({
                error: true,
                message: "Username " + ele[1]
              })
              break;
            case "password":
              console.log(ele[1])
              setErrorPassword({
                error: true,
                message: "Password " + ele[1].join(', ')
              })
              break;
            case "email":
              setErrorEmail({
                error: true,
                message: "Email " + ele[1].join(', ')
              })
              break;
            default:
              break;
          }
        })
      }
    } else {
      setErrorPassword({
        error: true,
        message: "Passwords must match"
      })
    }
  }

  return (
    <>
      <div className='sign-container'>
        <div style={{paddingBottom: '42px'}}>
          <h1 className='sign-title'>Create an Account!</h1>
        </div>
        <form className='sign-column-container' onSubmit={handleSubmit}>

          <div className='sign-display-container'>
            <div className='sign-row-container'>
              <FontAwesomeIcon id='sign-icon' icon={faUser} size='1x'/>
              <input
                className='sign-input'
                type='text'
                name='username'
                value={newUserData.username}
                onChange={handleChange}
                placeholder='Username'
              />
            </div>
            {errorUsername.error &&
              <>
                <div className='sign-error-row-container'>
                  <FontAwesomeIcon className='sign-error-icon' icon={faExclamationTriangle} size='1x' />
                  <label className='sign-error-text'>{errorUsername.message}</label>
                </div>
              </>
            }
          </div>

          <div className='sign-display-container'>
            <div className='sign-row-container'>
              <FontAwesomeIcon id='sign-icon' icon={faLock} size='1x'/>
              <input
                className='sign-input'
                type='password'
                name='password'
                value={newUserData.password}
                onChange={handleChange}
                placeholder='Password'
              />
            </div>
            {errorPassword.error &&
              <>
                <div className='sign-error-row-container'>
                  <FontAwesomeIcon className='sign-error-icon' icon={faExclamationTriangle} size='1x' />
                  <label className='sign-error-text'>{errorPassword.message}</label>
                </div>
              </>
            }
          </div>

          <div className='sign-display-container'>
            <div className='sign-row-container'>
              <FontAwesomeIcon id='sign-icon' icon={faLock} size='1x'/>
              <input
                className='sign-input'
                type='password'
                name='retype_password'
                value={newUserData.retype_password}
                onChange={handleChange}
                placeholder='Re-type Password'
              />
            </div>
            {errorPassword.error &&
              <>
                <div className='sign-error-row-container'>
                  <FontAwesomeIcon className='sign-error-icon' icon={faExclamationTriangle} size='1x' />
                  <label className='sign-error-text'>{errorPassword.message}</label>
                </div>
              </>
            }
          </div>

          <div className='sign-display-container'>
            <div className='sign-row-container'>
              <FontAwesomeIcon id='sign-icon' icon={faHome} size='1x'/>
              <input
                className='sign-input'
                type='text'
                name='address'
                value={newUserData.address}
                onChange={handleChange}
                placeholder='Address'
              />
            </div>
          </div>

          <div className='sign-display-container'>
            <div className='sign-row-container'>
              <FontAwesomeIcon id='sign-icon' icon={faAt} size='1x'/>
              <input
                className='sign-input'
                type='text'
                name='email'
                value={newUserData.email}
                onChange={handleChange}
                placeholder='Email'
              />
            </div>
            {errorEmail.error &&
              <>
                <div className='sign-error-row-container'>
                  <FontAwesomeIcon className='sign-error-icon' icon={faExclamationTriangle} size='1x' />
                  <label className='sign-error-text'>{errorEmail.message}</label>
                </div>
              </>
            }
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