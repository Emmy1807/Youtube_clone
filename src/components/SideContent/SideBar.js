import React from 'react'
import Image from 'next/image'
import styles from './SideBar.module.css'

const SideBar = () => {
  return (
    <div>
      <Image src='/download (8).png' width={20} height={20}
      alt='image'/>
      <p>Home</p>
    </div>
  )
}

export default SideBar
