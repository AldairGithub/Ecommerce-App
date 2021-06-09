import React from 'react'
import {Link} from 'react-router-dom'
import './CategoryItems.css'

export default function CategoryItems(props) {
  const {items} = props
  return (
    <>
      <div className='category-items-title'>
        <h1>More from this item</h1>
      </div>
      <div className='category-items-container'>
        {items.map((item, index) => (
          <>
            <Link style={{textDecoration: 'none'}} to={`/item/${item.name}/${item.id}`}>
              <div className='category-items'>
                <div key={index} className='category-items-img-container'>
                  <img src={item.img_url} className='category-items-img' />
                </div>
                <div className='category-items-text'>
                  <p>{ item.name}</p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  )
}