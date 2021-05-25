import React from 'react'
import { Link } from 'react-router-dom'

import './ShowCategories.css'

export default function ShowCategories(props) {
  const { categories } = props

  return (
    <>
      <div style={{ marginBottom: '75px' }}>
        <div style={{textAlign: 'left', marginLeft: '15px'}}>
          <p>Take a look at some of our other categories</p>
        </div>
        <div className='sc-container'>
          {categories !== null &&
            <>
            {categories.map(ele => (
              <>
                <Link to={`/search/${ele.name}`}>
                  <div className='sc-name-container'>
                    <p>{ ele.name }</p>
                  </div>
                </Link>
              </>
            ))}
            </>
          }
        </div>
      </div>
    </>
  )
}