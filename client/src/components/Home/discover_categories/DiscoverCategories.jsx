import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import './DiscoverCategories.css'

export default function DiscoverCategories(props) {
  const { categories } = props

  const [list, setList] = useState(null)
  
  useEffect(() => {
    setList(categories)
  }, [categories])

  
  return (
    <>
      <div className='dc-container'>
        <div className='dc-title-container'>
          <label className='dc-title'>Find new categories</label>
        </div>
        {list !== null &&
          <>
          <div className='dc-display'>
            {list.map(id => (
              <>
                <Link className='dc-item-container' to={ `/search/${id.name}` }>
                  <div className='dc-name-container'>
                    <label className='dc-name'>{ id.name }</label>
                  </div>
                </Link>
              </>
            ))}
          </div>
          </>
        }
      </div>
    </>
  )
}