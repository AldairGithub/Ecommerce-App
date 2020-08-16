import React, { useState, useEffect } from 'react'
import { readOneItem } from '../../services/items'

import ItemData from './ItemData'

export default function Item(props) {
  let [item, setItem] = useState({})

  useEffect(() => {
    getItem(props.match.params.id)
  }, [])

  const getItem = async (id) => {
    const itemData = await readOneItem(id)
    setItem(itemData)
  }

  return (
    <>
      <ItemData item={item} cart={props.cart} setCart={props.setCart}/>
    </>
  )
}