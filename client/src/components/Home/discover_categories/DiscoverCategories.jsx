import React, { useEffect, useState } from 'react'

import './DiscoverCategories.css'

export default function DiscoverCategories(props) {
  const { categories } = props

  const [list, setList] = useState(null)
  
  useEffect(() => {
    getList()
    // setList(
    //   categories.filter((i, j) => j <= 8)
    // )
  }, [categories])

  const getList = () => {
    if (categories !== null) {
      setList(
        categories.filter((i, j) => j <= 8)
      )
    }
  }
  
  return (
    <>
      <div className='dc-container'>
        <h4 className='dc-title'>Find new categories</h4>
        {list !== null &&
          <>
          <div className='dc-display'>
            {list.map(id => (
              <>
                <div className='dc-name-container'>
                  <label className='dc-name'>{ id.name }</label>
                </div>
              </>
            ))}
          </div>
          </>
        }
      </div>
    </>
  )
}