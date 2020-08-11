import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div>
      <p>This is the home component</p>
      {props.items.map((item) => (
        <div>
          <Link to={`/items/${item.id}`}>
            <img style={{ height: 100, width: 100 }} src={item.img_url} />
            <h2>{item.name}</h2>
            <p>{item.price}$</p>
          </Link>
        </div>
      ))}
    </div>
  )
}