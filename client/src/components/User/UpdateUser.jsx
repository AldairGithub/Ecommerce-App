import React, { useState, useEffect } from 'react'
import { updateUser } from '../../services/users'

export default function UpdateUser(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    address: ""
  })

  useEffect(() => {
    defaultUserData()
  }, [props.users])
  
  const defaultUserData = () => {
    const userExist = props.users.find((user) => {
      return user.id === parseInt(props.match.params.id)
    })
    if (userExist) {
      setUserData({
        username: userExist.username,
        password: userExist.password,
        email: userExist.email,
        address: userExist.address
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { id } = props.match.params
    const newUser = await updateUser(id, userData)
    props.setUsers(
      props.users.map((user) => {
        return user.id === parseInt(id) ? newUser : user
      })
    )
    console.log('user updated')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>UPDATE ACCOUNT</h3>
      <input
        type='text'
        name='username'
        value={userData.username}
        onChange={handleChange}
        placeholder='Username'
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
      <input
        type='text'
        name='password'
        value={userData.password}
        onChange={handleChange}
        placeholder='Password'
      />
      <label>Type password to update account</label>
      <input
        type='password'
        name='password'
        value={userData.password}
        onChange={handleChange}
        placeholder='Password'
      />
      <button>Submit</button>
    </form>
  )
}