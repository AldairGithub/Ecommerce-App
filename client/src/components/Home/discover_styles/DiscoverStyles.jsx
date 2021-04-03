import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import './DiscoverStyles.css'

export default function DiscoverStyles(props) {
  const { items } = props

  const [list, setList] = useState([])
  const [firstId, setFirstId] = useState(0)
  const [secondId, setSecondId] = useState(1)

  useEffect(() => {
    if (items !== null) {
      setList(
        items.filter((i, j) => j <= 5)
      )
    }
  }, [items])

  const filterById = (id) => {
    const filter = list.filter((i, j) => j === id)
    return filter
  }

  const handleRight = () => {
    if (secondId === 5) {
      setFirstId(0)
      setSecondId(1)
    } else {
      setFirstId(firstId + 2)
      setSecondId(secondId + 2)
    }
  }
  const handleLeft = () => {
    if (firstId === 0) {
      setFirstId(4)
      setSecondId(5)
    } else {
      setFirstId(firstId - 2)
      setSecondId(secondId - 2)
    }
  }

  return (
    <>
      <div className='ds-container'>
        <div onClick={handleLeft}>
          <FontAwesomeIcon icon={ faAngleLeft } size='2x'/>
        </div>
        {filterById(firstId).map(item => (
          <>
            <div className='ds-img-container'>
              <img className='ds-img' src={item.img_url}/>
            </div>
          </>
        ))}
        <div className='ds-title-container'>
          <h4 className='ds-title-text'>Discover new styles everyday!</h4>
        </div>
        {filterById(secondId).map(item => (
          <>
            <div className='ds-img-container'>
              <img className='ds-img' src={ item.img_url }/>
            </div>
          </>
        ))}
        <div onClick={handleRight}>
          <FontAwesomeIcon icon={ faAngleRight } size='2x'/>
        </div>
      </div>
    </>
  )
}