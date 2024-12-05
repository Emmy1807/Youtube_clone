import React from 'react'
import style from './MaxiSide.module.css'
import Image from 'next/image'

const MaxiSideBar = () => {
  return (

    <div className={style.Sidebar}>
    <div className={style.section}>
    <div className={style.item}>
       <Image src='/download (8).png' width={20} height={20}
      alt="Home"/>
      <p>Home</p>
      </div> 
      <div className={style.item}>
       <Image src='/icons8-youtube-shorts-24.png' width={20} height={20}
      alt="Shorts"/>
      <p>Shorts</p>
      </div> 
      <div className={style.item}>
       <Image src='/download (12).png' width={20} height={20}
      alt="Subscription"/>
      <p>Subscription</p>
      </div>
    </div>

      <div className={style.section}>
      <div className={style.item}>
        <h3>You</h3>
        <Image src='/download (21).png' width={20} height={20}
      alt="You"/>
      </div>
      <div className={style.item}>
       <Image src='/download (14).png' width={20} height={20}
      alt="History"/>
      <p>History</p>
      </div>
      <div className={style.item}>
       <Image src='/download (13).png' width={20} height={20}
      alt="Playlist"/>
      <p>Playlist</p>
      </div>
      <div className={style.item}>
       <Image src='/download (19).png' width={20} height={20}
      alt="Watch Later"/>
      <p>Watch Later</p>
      </div>
      <div className={style.item}>
       <Image src='/download (17).png' width={20} height={20}
      alt="Liked videos"/>
      <p>Liked videos</p>
      </div>
      </div>

    <div className={style.section}>
      <div className={style.item}>
        <h3>Subscription</h3>
      </div>
    </div>
    </div>
  )
}

export default MaxiSideBar
