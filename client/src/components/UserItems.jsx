import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userItems } from '../services/users'

import DisplayCategory from './DisplayCategory'
import AddCategory from './AddCategory'

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
      <h1>My Business</h1>
      <div>
        <Link to={`/users/${props.match.params.id}/new`}>new item</Link>
      </div>
      {userItemsData.map((item, index) => (
        <div key={index}>
          <img style={{ height: 100, width: 100 }} src={item.img_url} />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <DisplayCategory id={item.id} />
          <AddCategory item={item} categories={props.categories} />
          <Link to={`/users/${props.match.params.id}/item/${item.id}/edit`}>Update Item</Link>
        </div>
      ))}
    </>
  )
}