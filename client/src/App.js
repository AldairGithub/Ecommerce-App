import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { verifyUser } from './services/auth'

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser()
    if (userData) {
      console.log('User logged in')
    } else {
      console.log('User not logged')
    }
    setCurrentUser(userData)
  }

  return (
    <div className='App'>
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Main
        setCurrentUser={setCurrentUser}
      />
    </div>
  )
}
