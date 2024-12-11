import React from 'react'
import Image from 'next/image'
import YoutubeImage from './YoutubeImage'
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from './SearchBar';
import { SideContext } from '@/contexts/SideContext';
import { useContext } from 'react';

const Navbar = () => {

    const { toggle, setToggle } = useContext(SideContext)

    const handleChange = () => {
        setToggle((prev) => !prev)
    }

    return (
        <div className='flex gap-14 mt-5'>

            <div className='flex items-center gap-3 ml-5 '>
                <div className='ham'>
            <RxHamburgerMenu onClick={handleChange}/>
                </div>
            <YoutubeImage/>
            </div>

           <div className='image_page'>
            {/* flex w-10 h-8 gap-5 */}
           <div>
             <SearchBar/>
            </div>
            </div> 
            <div className='image_page1'>
             <Image src='/icons8-microphone-50.png' width={25} height={10}
             alt='image'/>
            
           </div>
           <div className='not'>
           <div className='video'>
            <img src='/vd.gif' width={25} height={10}
            alt='image'/>
           </div>
           <div className='note'>
            <img src='/download (26).png' width={20} height={20}
            alt='' />
            </div>
           </div>
    </div>
    )
}

export default Navbar