import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import SuggestedList from './suggested_list/SuggestedList'
import DiscoverHobbies from './discover_hobbies/DiscoverHobbies'
import DiscoverStyles from './discover_styles/DiscoverStyles'

export default function Home(props) {
  const { items } = props

  const [furniture, setFurniture] = useState(null)
  const [music, setMusic] = useState(null)
  const [style, setStyle] = useState(null)
  const [itemsLoaded, setItemsLoaded] = useState(true)

  useEffect(() => {
    try {
      items && setTimeout(() => setItemsLoaded(false), 2000)
    } catch(err) {
      console.log(err)
    }
    if (items !== null) {
      setFurniture(
        filterItemsByCategory('Furniture')
      )
      setMusic(
        filterItemsByCategory('Music')
      )
      setStyle(
        filterItemsByCategory('Style')
      )
      // setTimeout(() => {
      //   setItemsLoaded(false)
      // }, 2000)
      // setItemsLoaded(false)
    }
  }, [items])

  const filterItemsByCategory = (category) => {
    const filter = items.filter(item => {
      return item.categories.find(i => {
        return i.name === category
      })
    })
    return filter
  }

  return (
    <>
      <div>
        {itemsLoaded ?
          <>
            <div className='loader'></div>
          </>
          :
          <>
            <div>
              <DiscoverStyles items={ style }/>
            </div>
            <div>
              <SuggestedList items={ furniture }/>
            </div>
            <div>
              <DiscoverHobbies items={ music }/>
            </div>
          </>
        }


        {/* old list of items */}
        {/* <div className='home-container'>
          {items.map((item, index) => (
          <div className='item-container' key={index} >
            <Link to={`/items/${item.id}/categories`}>
              <img src={item.img_url} alt={item.name}/>
              <p>{item.name}</p>
              <h1>{item.price}$</h1>
            </Link>
          </div>
          ))}
        </div> */}

      </div>
    </>
  )
}