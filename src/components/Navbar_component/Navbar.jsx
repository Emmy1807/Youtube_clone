import React from 'react'
import Image from 'next/image'
import YoutubeImage from './YoutubeImage'
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <div className='flex gap-14 mt-5'>

            <div className='flex items-center gap-3 ml-5 '>
            <RxHamburgerMenu />
            <YoutubeImage/>
            </div>

           <div>
             <SearchBar/>   
           </div> 
        </div>
    )
}

export default Navbar