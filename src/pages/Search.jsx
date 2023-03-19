import React from 'react'
import SideBar from '../components/SideBar'
import SearchItem from '../components/SearchItem'


function Search() {
  return (
    <div className='flex h-screen'>
           <SideBar />
           <SearchItem/>
    </div>
  )
}

export default Search