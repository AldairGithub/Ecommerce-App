import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import './SuggestedList.css'

export default function SuggestedList(props) {
  const { items } = props

  const [list, setList] = useState([])

  useEffect(() => {
    if (items !== null) {
      const filteredOnlyFurniture = items.filter((i, j) => j <= 7 && i.categories.length === 1)
      setList(filteredOnlyFurniture)
    }
  }, [items])
  
  return (
    <>
      {/* container */}
      <div className='suggested-list-container'>
        {/* title */}
        <div className='suggested-list-title'>
          <h1>Things you might love</h1>
        </div>

        <div className='suggested-list-items'>
            <>
              {list.map(item => (
                <>
                  <div className='suggested-list-item'>
                    <Link to={`/item/${item.name}/${item.id}`}>
                      <div className='suggested-list-img-container'>
                        <img className='suggested-list-img' src={ item.img_url} alt={`${item.name} by ${item.user}`}/>
                      </div>
                    </Link>

                    <div className='suggested-list-text'>
                      <div className='suggested-list-price'>
                        <p>${ item.price }</p>
                      </div>
                      <div>
                        <p>{ item.name }</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>
        </div>

      </div>
    </>
  )
}