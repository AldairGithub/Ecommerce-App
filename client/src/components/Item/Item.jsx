import React, { useState, useEffect } from 'react'
import { readOneItem, getSupplierItems, getCategoryItems } from '../../services/items'
import Footer from '../footer/Footer'

import ItemData from './item_data/ItemData'
import SupplierItems from './supplier_items/SupplierItems'
import CategoryItems from './category_items/CategoryItems'

export default function Item(props) {
  const { items, cart, setCart, currentUser } = props
  const { id } = props.match.params

  const [item, setItem] = useState({})
  const [supplierItems, setSupplierItems] = useState([])
  const [categoryItems, setCategoryItems] = useState([])
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
    // moreItemsFromCategories(itemData)
    moreItemsFromCategories(itemData)
    setItem(itemData)
  }

  const moreItemsFromCategories = async(item) => {
    const list = []

    const handleCategoryItems = async (id) => {
      const data = await getCategoryItems(id)
      list.push(...data)
    }
    const removeDuplicatesIfAny = (arr) => {
      return arr.reduce((items, item) => {
        // !! converts items to a boolean
        const hasItem = !!items.find((uniqueItem) => (
          uniqueItem.id === item.id
        ))
        if (!hasItem) {
          return [...items, item]
        }
        return items
      }, [])
    }
    
    await Promise.all(item.categories.map(async(ele) => handleCategoryItems(ele.id)))
    // console.log(removeDuplicatesIfAny(list))
    setCategoryItems(removeDuplicatesIfAny(list))
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
              <div style={{marginTop: '50px'}}>
                <CategoryItems items={ categoryItems.filter((ele, index) => ele.id !== parseInt(id) && index <= 7)}/>
              </div>
            </>
          }
          <Footer />
        </>
      }
    </>
  )
}