import React from 'react'
import "./Style.css"
import Image from 'next/image'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
const Navabr = () => {
  return (
    <div className='Navbar'>
        <div>
            <Image src={"/images/1.png"} alt=' ' className='' height={25} width={90} />
        </div>
        <div className='flex flex-row justify-between items-center '>
          <div className='input-search-box'>
          <IoIosSearch className='search-icon ' />
         
          <input type="text" placeholder='Search' className='' />
          </div>
          <FaRegHeart className='text-2xl'  />
        
        </div>
    </div>
  )
}

export default Navabr