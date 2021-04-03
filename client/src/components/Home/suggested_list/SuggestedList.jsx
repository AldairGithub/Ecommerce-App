import React from 'react'

import './SuggestedList.css'

export default function SuggestedList(props) {
  const { items } = props
  
  return (
    <>
      {/* container */}
      <div className='suggested-list-container'>
        {/* title */}
        <div className='suggested-list-title'>
          <h1>Things you might love</h1>
        </div>

        <div className='suggested-list-items'>
          {items !== null &&
            <>
              {items.map(item => (
                <>
                  <div className='suggested-list-item'>
                    <div className='suggested-list-img-container'>
                      <img className='suggested-list-img' src={ item.img_url} alt={`${item.name} by ${item.user}`}/>
                    </div>

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
          }
        </div>

      </div>
    </>
  )
}