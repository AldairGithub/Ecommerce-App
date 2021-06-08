import React, { useEffect, useState } from 'react'
import './Home.css'
import SuggestedList from './suggested_list/SuggestedList'
import DiscoverHobbies from './discover_hobbies/DiscoverHobbies'
import DiscoverStyles from './discover_styles/DiscoverStyles'
import EditorPick from './editor_pick/EditorPick'
import DiscoverCategories from './discover_categories/DiscoverCategories'
import Footer from '../footer/Footer'
import { getCategoryItems } from '../../services/items'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
 
export default function Home(props) {
  const { categories } = props

  const [furniture, setFurniture] = useState(null)
  const [music, setMusic] = useState(null)
  const [style, setStyle] = useState(null)
  const [table, setTable] = useState(null)
  const [itemsLoaded, setItemsLoaded] = useState(false)

  const [error, setError] = useState({
    state: false,
    message: ""
  })

  useEffect(() => {
    setItemsLoaded(false)
    setCategories()
  }, [])

  const setCategories = async () => {
    // since this is the standard home component, we can call items based on the id of the category we want to display.
    // Later we can add a randomizer or change the items displayed based on what the user typically searches
    try {
      const styleData = await getCategoryItems(3)
      setStyle(filterByNumberDesired(styleData, 5))
      const furnitureData = await getCategoryItems(7)
      setFurniture(filterByNumberDesired(furnitureData, 6))
      const musicData = await getCategoryItems(1)
      setMusic(filterByNumberDesired(musicData, 5))
      const tablesData = await getCategoryItems(8)
      setTable(filterByNumberDesired(tablesData, 6))
      // renders page once all items are present, since async/await is asyncronous
      if (styleData, furnitureData, musicData, tablesData) {
        setItemsLoaded(true)
      }
    } catch (err) {
      console.log(err)
      setError({
        state: true,
        message: err.message
      })
    }
  }

  const filterByNumberDesired = (arr, num) => {
    const list = arr.filter((ele, index) => index <= num)
    return list
  }

  return (
    <>
      <div>
        {itemsLoaded ?
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
                <DiscoverCategories categories={ filterByNumberDesired(categories, 8) }/>
              </div>
            </div>

            <div className='components-separate'>
              <Footer />
            </div>
          </>
          :
          <>
            <div className='loader'></div>
            {error.state &&
              <>
                <div className='home-error-container'>
                  <FontAwesomeIcon style={{ paddingRight: '9px'}} icon={ faExclamationTriangle} size='1x'/>
                  <label>{error.message}. Please try again later</label>
                </div>
              </>
            }
          </>
        }

      </div>
    </>
  )
}