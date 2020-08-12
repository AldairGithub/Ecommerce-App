import React, { useState, useEffect } from 'react'

import { userItems } from '../services/users'

export default function UserItems(props) {
  
  const [userItemsData, setUserItemsData] = useState([])

  useEffect(() => {
    getUserItems()
  }, [])

  const getUserItems = async () => {
    const { id } = props.match.params
    const userList = await userItems(id)
    setUserItemsData(userList.items)
  }
  console.log(userItemsData)


  return (
    <>
      <h1>This is where user items are displayed</h1>
      {userItemsData.map((item, index) => (
        <>
          <p key={index}>{item.name}</p>
        </>
      ))}
    </>
  )
}