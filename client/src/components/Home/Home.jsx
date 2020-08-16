import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div className='home-container'>
      {props.items.map((item, index) => (
        <div className='item-container' key={index} >
          <Link to={`/items/${item.id}/categories`}>
            <img src={item.img_url} />
            <p>{item.name}</p>
            <h1>{item.price}$</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}