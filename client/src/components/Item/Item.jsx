import React, { useState, useEffect } from 'react'
import { readOneItem, getSupplierItems } from '../../services/items'
import Footer from '../footer/Footer'

import ItemData from './item_data/ItemData'
import SupplierItems from './supplier_items/SupplierItems'

export default function Item(props) {
  const { cart, setCart, currentUser } = props
  const { id } = props.match.params

  const [item, setItem] = useState({})
  const [supplierItems, setSupplierItems] = useState([])
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
    const moreItemsFromSupplier = await getSupplierItems(itemData.user_id)
    if (itemData) {
      setItemLoaded(false)
    }
    setSupplierItems(moreItemsFromSupplier.filter((k, index) => k.id !== parseInt(id) && index <= 4))
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
              <div>
                <ItemData currentUser={currentUser} item={item} cart={cart} setCart={setCart} />
              </div>
              <div style={{marginTop: '50px'}}>
                <SupplierItems items={ supplierItems }/>
              </div>
            </>
          }
          <Footer />
        </>
      }
    </>
  )
}