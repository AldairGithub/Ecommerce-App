import React, { useState, useEffect } from 'react'

import ItemData from './ItemData'

import { readOneItem } from '../services/items'


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
      <p>This is the item component</p>
      <ItemData item={item} />
    </>
  )
}