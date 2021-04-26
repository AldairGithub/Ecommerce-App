import React, { useState, useEffect } from 'react'
import { readOneItem } from '../../services/items'

import ItemData from './ItemData'

export default function Item(props) {
  const { cart, setCart } = props
  const { id } = props.match.params

  const [item, setItem] = useState({})

  useEffect(() => {
    if (id !== null) {
      getItem(id)
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const getItem = async (id) => {
    const itemData = await readOneItem(id)
    setItem(itemData)
  }

  return (
    <>
      {id &&
        <>
          <ItemData item={item} cart={cart} setCart={setCart}/>
        </>
      }
    </>
  )
}