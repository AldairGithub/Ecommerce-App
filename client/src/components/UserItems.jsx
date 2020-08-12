import React, { useState, useEffect } from 'react'
import { userItems } from '../services/users'

import UserItemsCategories from './UserItemsCategories'
import ItemData from './Item/ItemData'

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

  return (
    <>
      <h1>This is where user items are displayed</h1>
      {userItemsData.map((item, index) => (
        <>
          <img style={{ height: 100, width: 100 }} src={item.img_url} />
          <p key={index}>{item.name}</p>
          <p>{item.price}</p>
          <UserItemsCategories id={item.id}/>
          {/* <ItemData item={item} /> */}
        </>
      ))}
    </>
  )
}