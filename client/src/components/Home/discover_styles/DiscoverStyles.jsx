import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './DiscoverStyles.css'

export default function DiscoverStyles(props) {
  const { items } = props

  const [list, setList] = useState([])
  const [firstId, setFirstId] = useState(0)
  const [leftItem, setLeftItem] = useState(null)
  const [secondId, setSecondId] = useState(1)
  const [rightItem, setRightItem] = useState(null)
  const [animation, setAnimation] = useState(null)

  useEffect(() => {
    if (items !== null) {
      setList(
        items.filter((i, j) => j <= 5)
      )
      setLeftItem(items.filter((i, j) => j === 0))
      setRightItem(items.filter((i, j) => j === 1))
    }
  }, [items])

  const filterById = (id) => {
    const filter = list.filter((i, j) => j === id)
    return filter
  }

  const handleRight = () => {
    if (secondId === 5) {
      setFirstId(0)
      setLeftItem(filterById(0))
      setSecondId(1)
      setRightItem(filterById(1))
    } else {
      setFirstId(firstId + 2)
      setLeftItem(filterById(firstId + 2))
      setSecondId(secondId + 2)
      setRightItem(filterById(secondId + 2))
    }
    setAnimation(1)
  }
  const handleLeft = () => {
    if (firstId === 0) {
      setAnimation(0)
      setFirstId(4)
      setLeftItem(filterById(4))
      setSecondId(5)
      setRightItem(filterById(5))
    } else {
      setFirstId(firstId - 2)
      setLeftItem(filterById(firstId - 2))
      setSecondId(secondId - 2)
      setRightItem(filterById(secondId - 2))
    }
    setAnimation(0)
  }

  return (
    <>
      <div className='ds-container'>
        <div className='ds-left-icon-container' onClick={handleLeft}>
          <FontAwesomeIcon className='ds-left-icon' icon={ faAngleLeft } size='2x'/>
        </div>
        {leftItem !== null &&
          <>
            {leftItem.map(item => (
              <>
                <Link to={`/item/${item.name}/${item.id}`}>
                  <div className='ds-img-container'>
                    <img
                      className='ds-img'
                      src={item.img_url}
                      alt={`${item.name}`}
                      // selects which way the user clicked (left or right) and plays their specific animation
                      animation={animation}
                      // resets the animation counter when it ends in case the user whats to keep going one way
                      onAnimationEnd={() => setAnimation(null)}
                    />
                  </div>
                </Link>
              </>
            ))}
          </>
          }
        <div className='ds-title-container'>
          <h4 className='ds-title-text'>Discover new styles everyday!</h4>
        </div>
        {rightItem !== null &&
          <>
            {rightItem.map(item => (
              <>
                <Link to={`/item/${item.name}/${item.id}`}>
                  <div className='ds-img-container'>
                    <img
                      className='ds-img ds-img-onrender'
                      src={item.img_url}
                      alt={`${item.name}`}
                      animation={animation}
                      onAnimationEnd={() => setAnimation(null)}
                    />
                  </div>
                </Link>
              </>
            ))}
          </>
        }
        <div className='ds-right-icon-container' onClick={handleRight}>
          <FontAwesomeIcon className='ds-right-icon' icon={ faAngleRight } size='2x'/>
        </div>
      </div>
    </>
  )
}