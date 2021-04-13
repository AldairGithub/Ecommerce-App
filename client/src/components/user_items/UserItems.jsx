import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userItems } from '../../services/users'
import './UserItems.css'

import DisplayCategory from '../category/DisplayCategory'
import AddCategory from '../category/AddCategory'
import DeleteItem from '../delete_item/DeleteItem'

export default function UserItems(props) {
  const [userItemsData, setUserItemsData] = useState([])
  useEffect(() => {
    getUserItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <img src={item.img_url} alt={item.name}/>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <DisplayCategory id={item.id} />
          <AddCategory item={item} categories={props.categories} />
          <Link to={`/users/${props.match.params.id}/item/${item.id}/edit`}><button className='user-button'>Update Item</button></Link>
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