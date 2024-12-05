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
            <RxHamburgerMenu onClick={handleChange}/>
            <YoutubeImage/>
            </div>

           <div className='flex w-10 h-8 gap-5'>
             <SearchBar/>
             <Image src='/download (25).png' width={25} height={10}
             alt='image'/> 
           </div> 
        </div>
    )
}

export default Navbar