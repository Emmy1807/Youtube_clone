"use client"

import React, { useContext } from 'react'
import { SearchVideos } from '@/util/fetchData'
import { useState } from 'react'
import Image from 'next/image'
import { SearchContext } from '@/contexts/searchcontext'

const SearchBar = () => {

  const { result, setResult } = useContext(SearchContext);

  const [loading, setLoading] = useState(false)
  // const [result, setResult] = useState([])
  const [query, setQuery] = useState("") 

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true)

    const data = await SearchVideos (`search/?query=${query}`)
    setResult(data.videos)
   console.log(data)
   setLoading(false) 
  }

    
    // const VideoPlayer = ({ video }) => {
    //   if ( !video) return
    //   <div>Loading...</div>;

    //   const videoSrc = `"https://www.youtube.com/embed/${video.id.videoId}`;
    //   return (
    //     <div>
    //       <iframe 
    //       src={videoSrc}
    //       title="Video Player"
    //       width="100%"
    //       height="500px"
    //       frameborder="0"
    //       ></iframe>
    //       <h3>{video.snippet.title}</h3>

    //       <p>{video.snippet.description}</p>
    //     </div>
    //   );
    // };
    

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


