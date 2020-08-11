import React from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'

export default function Main(props) {
  const { setCurrentUser } = props

  return (
    <main>
      <Login
          {...props}
          setCurrentUser={setCurrentUser}
      />
      
      
    </main>
  )
}