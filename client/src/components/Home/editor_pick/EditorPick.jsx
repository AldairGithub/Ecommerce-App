import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './EditorPick.css'

export default function EditorPick(props) {
  const { items } = props

  const [list, setList] = useState([])

  useEffect(() => {
    if (items !== null) {
      setList(items)
    }
  }, [items])
  return (
    <>
      <div className='ep-container'>
        <div className='ep-display'>
          <div className='ep-text-container'>
            <h4>Our Pick of the Day</h4>
            <div className='ep-text-seemore'>
              <p>See more</p>
              <FontAwesomeIcon className='ep-text-icon' icon={ faAngleRight } size='1x'/>
            </div>
          </div>
          {list.map((item, id) => (
            <>
              <Link to={`/item/${item.name}/${item.id}`}>
                <div className='ep-img-container' key={id}>
                  <img className='ep-img' src={item.img_url} alt={item.name} />
                  <div className='ep-img-text'>
                    <div>
                      <p>${ item.price }</p>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  )
}