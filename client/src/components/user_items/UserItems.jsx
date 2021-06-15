import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userItems } from '../../services/users'
import './UserItems.css'
import DisplayItems from '../user_items/display_items/DisplayItems'

import DisplayCategory from '../category/DisplayCategory'
import AddCategory from '../category/AddCategory'
import DeleteItem from '../delete_item/DeleteItem'

export default function UserItems(props) {
  const { currentUser, items, categories } = props
  const { id } = props.match.params
  
  const [currentUserOnPage, setCurrentUserOnPage] = useState(false)
  const [userItemsData, setUserItemsData] = useState([])
  const [itemsLoaded, setItemsLoaded] = useState(false)

  useEffect(() => {
    setCurrentUserOnPage(false)
    getUserItems()
    isCurrentUserOnPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  const isCurrentUserOnPage = () => {
    let id = parseInt(props.match.params.id)
    if (currentUser !== null) {
      if (currentUser.id === id) {
        setCurrentUserOnPage(true)
      } else {
        setCurrentUserOnPage(false)
      }
    }
  }

  const getUserItems = async () => {
    setItemsLoaded(false)
    const { id } = props.match.params

    try {
      const itemListFromUser = await userItems(id)
      setUserItemsData(itemListFromUser)
      if (itemListFromUser) {
        setItemsLoaded(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {itemsLoaded ?
        <>
          {currentUserOnPage ?
            <>
              <div>
                <label>My Business</label>
              </div>
              <div className='user-items-container'>
                <DisplayItems id={id} items={userItemsData} getUserItems={getUserItems}/>
              </div>
            </>
            :
            <>
              <p>not currentUser</p>
            </>
          }
        </>
        :
        <>
          <div className='loader'></div>
        </>
      }
      {/* <h2>My Business</h2>
      <div className='new-item-button'>
        <Link to={`/users/${props.match.params.id}/new`}><button>New Item</button></Link>
      </div> */}
      {/* {userItemsData.map((item, index) => (
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
      ))} */}
    </>
  )
}