import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import SuggestedList from './suggested_list/SuggestedList'
import DiscoverHobbies from './discover_hobbies/DiscoverHobbies'
import DiscoverStyles from './discover_styles/DiscoverStyles'
import EditorPick from './editor_pick/EditorPick'
import DiscoverCategories from './discover_categories/DiscoverCategories'
import Footer from '../footer/Footer'
 
export default function Home(props) {
  const { items, categories } = props

  const [furniture, setFurniture] = useState(null)
  const [music, setMusic] = useState(null)
  const [style, setStyle] = useState(null)
  const [table, setTable] = useState(null)
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
      setTable(
        filterItemsByCategory('Table')
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
            <div className='components-container'>
              <div className='components-separate'>
                <DiscoverStyles items={ style }/>
              </div>
              <div className='components-separate'>
                <SuggestedList items={ furniture }/>
              </div>
              <div className='components-separate'>
                <DiscoverHobbies items={ music }/>
              </div>
              <div className='components-separate'>
                <EditorPick items={ table }/>
              </div>
              <div className='components-separate'>
                <DiscoverCategories categories={ categories }/>
              </div>
            </div>

            <div className='components-separate'>
              <Footer />
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