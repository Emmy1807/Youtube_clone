import React from 'react'
import style from './NavbarScroll.module.css'

const NavbarScroll = () => {
  return (
    <div className={style.container}> 
       <div className={style.content}>

        <div className={style.all}>
            <h1>All</h1>
        </div>
        <div className={style.music}>
            <h1>Music</h1>
        </div>

        <div className={style.prem}>
            <h1>Premier League</h1>
        </div>
        <div className={style.drib}>
            <h1>Dribbling</h1>
        </div>
        <div className={style.live}>
            <h1>Live</h1>
        </div>
        <div className={style.game}>
            <h1>Gaming</h1>
        </div>
        <div className={style.club}>
            <h1>Chelsea FC</h1>
        </div>
        <div className={style.mix}>
            <h1>Mixes</h1>
        </div>
        <div className={style.shape}>
            <h1>Shapes</h1>
        </div>
        <div className={style.rhyme}>
            <h1>Rhythms & Blues</h1>
        </div>
        <div className={style.comp}>
            <h1>Computer Files</h1>
        </div>
        <div className={style.free}>
            <h1>Freestyles rap</h1>
        </div>
      </div>
    </div>
  )
}

export default NavbarScroll
