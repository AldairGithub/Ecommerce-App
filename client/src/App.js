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
    setCurrentUser(userData)
  }

  return (
    <div className='App'>
      <Header />
      <Main
        setCurrentUser={setCurrentUser}
      />
    </div>
  )
}
