import React from 'react'

import './DiscoverHobbies.css'

export default function DiscoverHobbies(props) {
  const { items } = props

  const maxSixItems = () => {
    if (items !== null) {
      const filtered = items.filter((item, id) => id <= 5)
      return filtered
    } else {
      return null
    }
  }

  return (
    <>
      <div>
        <div>
          <h1 style={{ marginBottom: '25px'}}>Discover a new hobbie</h1>
        </div>

        {/* all items on row */}
        <div className='discover-hobbies-items-container'>
          {maxSixItems() !== null &&
            <>
            {maxSixItems().map((item, id) => (
              <>
                {id === 0 || id === 3 ?
                  <>
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
                  </>
                  :
                  <>
                    <div className='dh-container dh-sm-container'>
                      <div className='dh-sm-img'>
                        <img className='discover-hobbies-img' src={ item.img_url }/>
                      </div>
                      <div className='dh-name'>
                        <p>{ item.name }</p>
                      </div>
                      <div className='dh-price'>
                        <p>${ item.price }</p>
                      </div>
                    </div>
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