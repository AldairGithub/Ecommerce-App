import React from 'react'

import { Link } from 'react-router-dom'

import './DiscoverHobbies.css'

export default function DiscoverHobbies(props) {
  const { items } = props

  // const maxSixItems = () => {
  //   if (items !== null) {
  //     const filtered = items.filter((item, id) => id <= 5)
  //     return filtered
  //   } else {
  //     return null
  //   }
  // }

  return (
    <>
      <div className='discover-hobbies-container'>
        <div className='discover-hobbies-title-container'>
          <label className='discover-hobbies-title'>Discover a new hobbie</label>
        </div>
        {/* all items on row */}
        <div className='discover-hobbies-items-container'>
          {items !== null &&
            <>
            {items.map((item, id) => (
              <>
                {id === 0 || id === 3 ?
                  <>
                    <Link to={`/item/${item.name}/${item.id}`}>
                      <div className='dh-container'>
                        <div className='dh-lg-img'>
                          <img className='discover-hobbies-img' src={ item.img_url}/>
                        </div>
                        <div className='dh-lg-img-name'>
                          <p>{ item.name }</p>
                        </div>
                        <div className='dh-lg-price'>
                          <p>${ item.price }</p>
                        </div>
                      </div>                      
                    </Link>
                  </>
                  :
                  <>
                    <Link style={{textDecoration: 'none'}} to={`/item/${item.name}/${item.id}`}>
                      <div className='dh-container dh-sm-container'>
                        <div className='dh-sm-img'>
                          <img className='discover-hobbies-img' src={ item.img_url }/>
                        </div>
                        <div className='dh-name'>
                          <p>{ item.name }</p>
                        </div>
                        <div className='dh-price'>
                          <label>${ item.price }</label>
                        </div>
                      </div>
                    </Link>
                  </>
                }
              </>
            ))}
            </>
          }
        </div>
      </div>
    </>
  )
}