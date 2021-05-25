import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.css'

export default function SearchBar(props) {
  const {
    items,
    categories,
    itemList,
    setItemList,
    categoryList,
    setCategoryList,
    showSearchBody,
    openSearchBar,
    closeSearchBar
  } = props
  
  const [search, setSearch] = useState({
    input: ''
  })

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
    if (value.length === 0) {
      closeSearchBar()
    } else {
      openSearchBar()
    }
    filterSearch(value.toLowerCase())
  }

  return (
    <>
      <div>
      <form className='sb-form-container' onClick={openSearchBar}>
        <input
          className='sb-display'
          name='input'
          value={search.input}
          type='search'
          autocomplete='off'
          onChange={handleChange}
          placeholder='&#xF002; Search'
          aria-label='Search'
        />
        <div className='sb-dropdown-top'>
          <div className='sb-dropdown-container' bar={showSearchBody ? '1' : '0'} list={search.input.length === 0 && 'false'}>
              <div className='sb-dropdown-list'>
                {showSearchBody &&
                  <>
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
                            <Link to={`/search/${str.name}`}>
                              <div className='sb-dropdown-element'>
                                <p>{ str.name }</p>
                              </div>
                            </Link>
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
                          <Link to={`/item/${str.name}/${str.id}`}>
                            <div className='sb-dropdown-element'>
                              <p>{ str.name }</p>
                            </div>
                          </Link>
                        </>
                      ))}
                    </>
                  }
                  </>
                  }
                </>
              }
            </div>
          </div>

        </div>

        <Link onClick={() => setSearch({input: ''})} to={`/search/${search.input}`}>
          <button className='sb-submit-button'>
            <FontAwesomeIcon icon={faSearch} size='1x'/>
          </button>
        </Link>
        </form>
      </div>
    </>
  )
}