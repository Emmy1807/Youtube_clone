import React, { useContext} from 'react'
import { SearchContext } from '@/contexts/searchcontext'
import styles from './Feeds.module.css'

const Feeds = ({cou}) => {

  const { result, setResult } = useContext(SearchContext)

  return (
    <div className={styles.container}>
      {
        result.map((eachItem, index, array) => (
       <div key={index} className={styles.content}>
        <img src={eachItem.thumbnails[0].url} alt="image" />
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
