import React, {useEffect, useState} from 'react'

import DisplayCard from './display_card/DisplayCard'

import { readAllItems } from '../../services/items'
import { readOneItem } from '../../services/items'
import { filter } from '../functions/script'
import { filterByCategories } from '../functions/script'

import './Display.css'

export default function Display(props) {
  const { items, categories, itemList, categoryList } = props
  const { word } = props.match.params

  const [resultBasedOnCategory, setResultBasedOnCategory] = useState([])
  const [resultBasedOnItems, setResultBasedOnItems] = useState([])
  const [resultsLoaded, setResultsLoaded] = useState(true)

  useEffect(() => {
    // set it to true so loader can render when user searches multiple times
    setResultsLoaded(true)
    getResults()
  }, [word])

  const getResults = async() => {
    const list = await readAllItems()
    const getCategory = async (id) => {
      const item = await readOneItem(id)
      return item
    }
    const arr = await Promise.all(list.map(async (item) =>
      getCategory(item.id)
    ))
    setResultBasedOnItems(
      filter(arr, word)
    )
    setResultBasedOnCategory(
      filterByCategories(arr, word)
    )
    // when state is updated, loader will disappear
    setResultsLoaded(false)
  }

  return (
    <>
      {resultsLoaded ?
        <>
          <div className='display-loader'></div>
        </>
        :
        <>
          <div className='display-word-container'>
            <div className='display-word-searched'>
              <label style={{fontSize: '15px'}}>List searched by</label>
              <h3>{ props.match.params.word }</h3>
            </div>
          </div>
          {resultBasedOnItems.length === 0 && resultBasedOnCategory.length === 0 ?
            <>
              <p style={{color: 'gray'}}>Sorry, couldn't find items based on your search word</p>
            </>
            :
            <>
              <div className='display-list'>
                <div className='display-list-container'>
                  {(resultBasedOnCategory.length !== 0) &&
                    <>
                      {resultBasedOnCategory.map(ele => (
                        <>
                          <DisplayCard item={ ele }/>
                        </>
                      ))}
                    </>
                  }
                </div>
                <div className='display-list-container'>
                  {(resultBasedOnCategory.length === 0)  &&
                    <>
                      {resultBasedOnItems.map(ele => (
                        <>
                          <DisplayCard item={ ele }/>
                        </>
                      ))}
                    </>
                  }
                </div>
              </div>
            </>
          }
        </>
      }
    </>
  )
}