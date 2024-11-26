"use client"

import React from 'react'
import { SearchVideos } from '@/util/fetchData'
import { useState } from 'react'
import Image from 'next/image'

const SearchBar = () => {

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [query, setQuery] = useState("") 

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true)

    const data = await SearchVideos (`search/?query=${query}`)
    setResult(data.videos)
   console.log(data)
   setLoading(false) 
  }

    
  return (
    <div>
    <form onSubmit={handleSearch}> 
      <input type="text" placeholder='Search...' 
       value={query}
       onChange={(e) =>setQuery(e.target.value)}
       />
    <button>
        Search
    </button>
    </form>  

  {
    loading ? <p>Loading</p> : null
  }  

  {
    result.map((eachItem, index, array) => (
      <div key={index}>
        <h1>{eachItem.title}</h1>
        <h2>{eachItem.video_length}</h2>
        <h3>{eachItem.number_of_views}</h3>
        <img src={eachItem.thumbnails[0].url} alt="image" />
      </div>
    ))
  }    
    </div>
      
  )
}

export default SearchBar


