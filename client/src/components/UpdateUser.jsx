import React, { useState } from 'react'
import { updateUser } from '../services/users'

export default function UpdateUser(props) {
  console.log(props)
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    address: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <form>
      <h3>UPDATE ACCOUNT</h3>
      <input
        type='text'
        name='username'
        value={userData.username}
        onChange={handleChange}
        placeholder='Username'
      />
      <input
        type='password'
        name='password'
        value={userData.password}
        onChange={handleChange}
        placeholder='Password'
      />
      <input
        type='text'
        name='email'
        value={userData.email}
        onChange={handleChange}
        placeholder='Email'
      />
      <input
        type='text'
        name='address'
        value={userData.address}
        onChange={handleChange}
        placeholder='Address'
      />
      <button>Submit</button>
    </form>
  )
}