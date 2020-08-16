import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userItems } from '../../services/users'
import './UserItems.css'

import DisplayCategory from '../Category/DisplayCategory'
import AddCategory from '../Category/AddCategory'
import DeleteItem from '../DeleteItem/DeleteItem'

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
      <h2>My Business</h2>
      <div className='new-item-button'>
        <Link to={`/users/${props.match.params.id}/new`}><button>New Item</button></Link>
      </div>
      {userItemsData.map((item, index) => (
        <div className='user-item-container' key={index}>
          <img src={item.img_url} />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <DisplayCategory id={item.id} />
          <AddCategory item={item} categories={props.categories} />
          <Link to={`/users/${props.match.params.id}/item/${item.id}/edit`}><button className='update-button'>Update Item</button></Link>
          <DeleteItem
            userId={props.match.params.id}
            itemId={item.id}
            items={props.items}
            setItems={props.setItems}
            history={props.history}
          />
        </div>
      ))}
    </>
  )
}