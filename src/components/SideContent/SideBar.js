import React from 'react'
import Image from 'next/image'
import styles from './SideBar.module.css'
import { AiFillHome } from "react-icons"

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.section}>
        <div className={styles.item}>
          <Image src='/download (8).png' width={20} height={20}
          alt='Home'/>
          <h1>Home</h1>
        </div>
        <div className={styles.item}>
          <Image src='/icons8-youtube-shorts-24.png' width={20} height={20}
          alt='Home'/>
          <h1>Shorts</h1>
        </div>
        <div className={styles.item}>
          <Image src='/icons8-subscription-24.png' width={20} height={20}
          alt='Home'/>
          <p>Subscription</p>
        </div>
        <div className={styles.item}>
          <Image src='/download (24).png' width={20} height={20}
          alt='Home'/>
          <h1>You</h1>
        </div>



      </div>

    </div>
    // <div className={styles.SideBar}>
    //   <div className={styles.section}>
    //   <div className={styles.item}>
    //    <Image src='/download (8).png' width={20} height={20}
    //   alt="Home"/>
    //   <p>Home</p>
    //   </div> 
    //   <div className={styles.item}>
    //    <Image src='/download (11).png' width={20} height={20}
    //   alt="Shorts"/>
    //   <p>Shorts</p>
    //   </div> 
    //   <div className={styles.item}>
    //    <Image src='/download (12).png' width={20} height={20}
    //   alt="Subscription"/>
    //   <p>Subscription</p>
    //   </div>
    // </div>

    //   <div className={styles.section}>
    //   <div className={styles.item}>
    //     <h3>You</h3>
    //     <Image src='/download (21).png' width={20} height={20}
    //   alt="You"/>
    //   </div>
    //   <div className={styles.item}>
    //    <Image src='/download (14).png' width={20} height={20}
    //   alt="History"/>
    //   <p>History</p>
    //   </div>
    //   <div className={styles.item}>
    //    <Image src='/download (13).png' width={20} height={20}
    //   alt="Playlist"/>
    //   <p>Playlist</p>
    //   </div>
    //   <div className={styles.item}>
    //    <Image src='/download (19).png' width={20} height={20}
    //   alt="Watch Later"/>
    //   <p>Watch Later</p>
    //   </div>
    //   <div className={styles.item}>
    //    <Image src='/download (17).png' width={20} height={20}
    //   alt="Liked videos"/>
    //   <p>Liked videos</p>
    //   </div>
    //   </div>

    // <div className={styles.section}>
    //   <div className={styles.item}>
    //     <h3>Subscription</h3>
    //   </div>
    // </div>
    // </div>
  )
}

export default SideBar
