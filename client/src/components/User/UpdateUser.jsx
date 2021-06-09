import React, { useState, useEffect } from 'react'
import './UpdateUser.css'
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    props.history.push('/home')
  }

  return (
    <div className='update-user-container'>
      <form className='update-user-form-container' onSubmit={handleSubmit}>
        <div className='update-user-title-container'>
          <label className='update-user-title'>UPDATE ACCOUNT</label>
        </div>
        <div className='update-user-input-container'>
          <div className='update-user-label-container'>
            <label className='update-user-label'>Username: </label>
          </div>
          <input
            className='update-user-input'
            type='text'
            name='username'
            value={userData.username}
            onChange={handleChange}
            placeholder='&#xf007; Username'
          />
        </div>

        <div className='update-user-input-container'>
          <div className='update-user-label-container'>
            <label className='update-user-label'>Email: </label>
          </div>
          <input
            className='update-user-input'
            type='text'
            name='email'
            value={userData.email}
            onChange={handleChange}
            placeholder='&#xf0e0; Email'
          />
        </div>

        <div className='update-user-input-container'>
          <div className='update-user-label-container'>
            <label className='update-user-label'>Address: </label>
          </div>
          <input
            className='update-user-input'
            type='text'
            name='address'
            value={userData.address}
            onChange={handleChange}
            placeholder='&#xf015; Address'
          />
        </div>

        <div className='update-user-input-container'>
          <div className='update-user-label-container'>
            <label className='update-user-label'>Password: </label>
          </div>
          <input
            className='update-user-input'
            type='text'
            name='password'
            value={userData.password}
            onChange={handleChange}
            placeholder='&#xf023; Old Password'
          />
        </div>

        <div className='update-user-input-container'>
          <div className='update-user-label-container'>
            <label className='update-user-label'>New Password: </label>
          </div>
          <input
            className='update-user-input'
            type='password'
            name='password'
            value={userData.password}
            onChange={handleChange}
            placeholder='&#xf023; New Password'
          />
        </div>

        <div className='update-user-button-container'>
          <button className='update-user-button'>Submit</button>
        </div>
      </form>
    </div>
  )
}