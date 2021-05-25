import React, { useState, useEffect } from 'react'
import { readOneItem } from '../../services/items'
import Footer from '../footer/Footer'

import ItemData from './ItemData'

export default function Item(props) {
  const { cart, setCart, currentUser } = props
  const { id } = props.match.params

  const [item, setItem] = useState({})
  const [itemLoaded, setItemLoaded] = useState(true)

  useEffect(() => {
    setItemLoaded(true)
    if (id !== null) {
      getItem(id)
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const getItem = async (id) => {
    const itemData = await readOneItem(id)
    if (itemData) {
      setItemLoaded(false)
    }
    setItem(itemData)
  }

  return (
    <>
      {itemLoaded ?
        <>
          <div className='loader'></div>
        </>
        :
        <>
          {id &&
            <>
              <ItemData currentUser={currentUser} item={item} cart={cart} setCart={setCart}/>
            </>
          }
          <Footer />
        </>
      }
    </>
  )
}