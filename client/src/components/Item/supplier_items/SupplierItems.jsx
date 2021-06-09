import React from 'react'
import './SupplierItems.css'
import { Link } from 'react-router-dom'

export default function SupplierItems(props) {
  const { items } = props

  return (
    <>
      <div className='supplier-title'>
        <h1>More from this seller</h1>
      </div>
      <div className='supplier-container'>
      {items.map((item, index) => (
        <>
          <Link style={{textDecoration: 'none'}} to={`/item/${item.name}/${item.id}`}>
            <div className='supplier-item-container'>
              <div key={index} className='supplier-img-container'>
                <img className='supplier-img' src={ item.img_url}/>
              </div>
              <div className='supplier-name'>
                <label>{item.name}</label>
              </div>
              <div className='supplier-price'>
                <label>${ item.price }</label>
              </div>
            </div>
          </Link>
        </>
      ))}
      </div>
    </>
  )
}