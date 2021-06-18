import React, { useState, useEffect } from 'react'
import { userItems } from '../../services/users'
import { readUser } from '../../services/users'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './UserItems.css'
import DisplayItems from '../user_items/display_items/DisplayItems'

import CreateItem from './create_item/CreateItem'

export default function UserItems(props) {
  const { currentUser, addToCart } = props
  const { id } = props.match.params
  
  const [userPage, setUserPage] = useState(null)
  const [userItemsData, setUserItemsData] = useState([])
  const [itemsLoaded, setItemsLoaded] = useState(false)
  const [addItemComponent, setAddItemComponent] = useState(false)

  useEffect(() => {

    getUserItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const getUserItems = async () => {
    setItemsLoaded(false)
    const { id } = props.match.params

    try {
      const itemListFromUser = await userItems(id)
      // 
      const user = await readUser(id)
      setUserPage(user)
      setUserItemsData(itemListFromUser)
      if (itemListFromUser && user) {
        setItemsLoaded(true)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const isItCurrentUserPage = () => {
    if (currentUser !== null) {
      if (userPage.id === currentUser.id) {
        return true
      } else {
        return false
      }
    }
  }
  const addItem = () => {
    if (isItCurrentUserPage()) {
      setAddItemComponent(!addItemComponent)
    } 
  }

  return (
    <>
      {itemsLoaded ?
        <>
          <div className='user-items-title-container'>
            <label className='user-items-title'>{userPage.username}</label>
            {isItCurrentUserPage() &&
              <>
                <div onClick={() => addItem()} className='user-items-button-container'>
                  <button className='user-items-button'>
                    Add New Item
                    <FontAwesomeIcon
                      className='user-items-add-icon'
                      icon={faPlus}
                      size='1x'
                    />
                  </button>
                </div>
              </>
            }
          </div>
          {addItemComponent ?
            <>
              <CreateItem />
            </>
            :
            <>
              <div className='user-items-container'>
                <DisplayItems
                  id={id}
                  items={userItemsData}
                  getUserItems={getUserItems}
                  isItCurrentUserPage={isItCurrentUserPage}
                  addToCart={addToCart}
                />
              </div>
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