import React, { useState } from 'react'
import { registerUser } from '../../services/auth'

export default function Register(props) {
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
    const userData = await registerUser(newUserData)
    props.setCurrentUser(userData)
    props.history.push('/home')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>CREATE AN ACCOUNT</h3>
      <input
        type='text'
        name='username'
        value={newUserData.username}
        onChange={handleChange}
        placeholder='Username'
      />
      <input
        type='password'
        name='password'
        value={newUserData.password}
        onChange={handleChange}
        placeholder='Password'
      />
      <input
        type='text'
        name='address'
        value={newUserData.address}
        onChange={handleChange}
        placeholder='Address'
      />
      <input
        type='text'
        name='email'
        value={newUserData.email}
        onChange={handleChange}
        placeholder='Email'
      />
      <button>Submit</button>
    </form>
  )
}