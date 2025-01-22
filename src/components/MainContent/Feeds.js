import React, { useContext, useRef, useState} from 'react'
import { SearchContext } from '@/contexts/searchcontext'
import styles from './Feeds.module.css'
import { getSubtitle } from '@/util/fetchData'
import NavbarScroll from '../Navbar_component/NavbarScroll'

const Feeds = ({cou}) => {

  const { result, setResult } = useContext(SearchContext)
  const [ playingVideo, setPlayingVideo ] = useState(null) // state to
  // track video playing

const [hoveredVideo, setHoveredVideo] = useState(null)

  const handleplayVideo =(params)=>{
    setPlayingVideo(params)

  }

  const handleMouseEnter =(videoId) =>{
    setHoveredVideo(videoId)
  }

  const handleMouseLeave =() =>{
    setHoveredVideo(null)
  }

  // const handleShowSubtitle = ({ url, subtitles }) => {
  //   const [currentSubtitle, setCurrentSubtitle] = useState("");
  //   const playerRef = useRef(null);

  //   const handleProgress = (state) => {
  //     const currentTime = state.playedSeconds;

  //     const subtitle = subtitles.find(
  //       (s) => currentTime >= s.start && currentTime <= s.end
  //     );
  //     setCurrentSubtitle(subtitle ? subtitle.text : "");
  //   }
  // }

    // console.log(subtitle);
  return (
    
    <div className={styles.container}>
      <div>
      <NavbarScroll/>
      </div>
      {/* <getSubtitle
      ref={playerRef}
      url={url}
      playing
      controls
      onProgress={handleProgress}
      width="100%"
      /> */}
      {
        result.map((eachItem, index, array) => (
       <div key={index} className={styles.content}>
       {

        hoveredVideo === eachItem.video_Id ?(
        <iframe 
        src={`https://www.youtube.com/embed/${eachItem.video_id}?autoplay=1`}
        allow="autoplay"
        allowFullScreen
        >
        </iframe>

        ):

        playingVideo === eachItem.video_id ?
        <iframe
        src={`https://www.youtube.com/embed/${eachItem.video_id}?autoplay=1`}
        allow="autoplay"
        allowFullScreen
        // frameborder="0"
        >
        </iframe>
        :
        (
         <div>
          <img src={eachItem.thumbnails[0].url} alt="image" onClick={() => handleplayVideo(eachItem.video_id)}
          onMouseEnter={() =>handleMouseEnter(eachItem.video_id) && handleShowSubtitle(eachItem.video_id)}
          onMouseLeave={() =>handleMouseLeave}/>
         </div> 
        )
      }
         <h1>{eachItem.title}</h1>
         {/* <p>{eachItem.description}</p> */}
         <h2>{eachItem.video_length}</h2>
         <h3>{eachItem.number_of_views} views . {eachItem.published_time}</h3>
         {/* <img src={eachItem.thumbnails[0].url} alt="image" /> */}
      
       </div>
        ))
      }
      </div>
  )
}


export default Feeds
