import React, { useState } from 'react'

import './SearchBar.css'

export default function SearchBar(props) {
  const { items, categories } = props
  
  const [search, setSearch] = useState({
    input: ''
  })
  const [itemList, setItemList] = useState([])
  const [categoryList, setCategoryList] = useState([])

  const filter = (i, j) => {
    return i.filter(ele => {
      return ele.name.toLowerCase().includes(j)
    })
  }

  const filterSearch = (str) => {
    if (str.length === 0) {
      const noList = []
      setItemList(noList)
      setCategoryList(noList)
    } else {
      setItemList(filter(items, str))
      setCategoryList(filter(categories, str))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSearch({
      ...search,
      [name] : value
    })
    filterSearch(value.toLowerCase())
  }

  return (
    <>
      <form className='sb-form-container'>
        <input
          className='sb-display'
          name='input'
          value={search.input}
          type='search'
          onChange={handleChange}
          placeholder='&#xF002; Search'
          aria-label='Search'
        />
        <div className='sb-dropdown-top'>
          <div className='sb-dropdown-container' list={search.input.length === 0 && '0'}>
            <div className='sb-dropdown-list'>
              {search.input.length !== 0 && (itemList.length === 0 && categoryList.length === 0) ?
                <>
                  <div className='sb-dropdown-title-container'>
                    <p>No search found, try a different word</p>
                  </div>
                </>
                :
                <>
                  {categoryList.length > 0 &&
                    <>
                    <div className='sb-dropdown-title-container'>
                      <strong className='sb-dropdown-title'>Search by Category</strong>
                    </div>
                    {categoryList.map(str => (
                      <>
                        <div className='sb-dropdown-element'>
                          <p>{ str.name }</p>
                        </div>
                      </>
                    ))}
                    </>
                  }
                  {itemList.length > 0 &&
                    <>
                    <div className='sb-dropdown-title-container'>
                      <strong className='sb-dropdown-title'>Search by Name</strong>
                    </div>
                    {itemList.map(str => (
                      <>
                        <div className='sb-dropdown-element'>
                          <p>{ str.name }</p>
                        </div>
                      </>
                    ))}
                    </>
                  }
                </>
              }
            </div>
          </div>

        </div>
      </form>
    </>
  )
}