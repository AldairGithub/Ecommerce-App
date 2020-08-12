import React, { useState } from 'react'
import { loginUser } from '../services/auth'

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
    props.history.push('/home')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        type="text"
        name="username"
        value={setNewUserData.username}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={setNewUserData.password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}
