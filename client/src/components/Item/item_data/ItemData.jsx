import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import { Link } from 'react-router-dom'

import './ItemData.css'

export default function ItemData(props) {
  const {item, cart, setCart, currentUser} = props

  const handleClick = (arr) => {
    // adds items to an array for Cart
    setCart(prevArray => [
      ...prevArray,
      arr
    ])
    
    const newStr = JSON.stringify(arr)
    localStorage.setItem(`${arr.name}`, `${newStr}`)
  }

  return (
    <>
      <div className='item-data-container'>
        <div className='item-data-img-container'>
          {/* <img className='item-data-img' src={item.img_url} alt={item.name} /> */}
          <InnerImageZoom
            className='item-data-img'
            width={500}
            height={500}
            hasSpacer={true}
            src={item.img_url}
            zoomSrc={item.img_url}
            zoomScale='0.4'
            alt={item.name}
          />
        </div>

        <div className='itemdata-column'>
          <h1>{item.name}</h1>

          <h1>${item.price}</h1>

          <div className='itemdata-button'>
            {/* <button onClick={() => handleClick(item)}>Add to Cart</button> */}
            <button onClick={() => handleClick(item)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}