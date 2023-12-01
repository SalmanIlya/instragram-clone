"use client"
import "./Style.css"
import { GoHomeFill } from "react-icons/go";
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { RiVideoLine } from "react-icons/ri";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
const Sidebar = () => {

    return (
    <div className='sidebar'>
      

      
        <div className='logo-div '>
            <Image src={"/images/1.png"} alt='instragram' className='box-1' height={29} width={103}/>
            <FaInstagram className="text-2xl icon box-2 text-center" />
        </div>
        <div className='sidar-nav-item '>

       {/* 1 */}
        <Link  href={"/"} className='nav-item-box '>
            
        <GoHomeFill  className='text-2xl icon '/>
        <h1 className={`text`} >Home</h1>
        </Link>
        {/* 2 */}
        <Link href={"/Search"} className='nav-item-box h-box'>
        <FiSearch className='text-2xl icon '/>
        <h1 className="text " >Search</h1>
    </Link>
    {/* 3 */}
    <Link href={"/Explore"} className='nav-item-box '>
        <FaRegCompass className='text-2xl icon '/>
        <h1 className="text " >Explore</h1>
    </Link>
    {/* 4 */}
    <Link href={"Reels"} className='nav-item-box'>
        < RiVideoLine className='text-2xl icon '/>
        <h1 className=' text '>Reels</h1>
    </Link>
    {/* 5 */}
    <Link href={"/Messages"} className='nav-item-box'>
        <LiaFacebookMessenger className='text-2xl icon '/>
        <h1 className=' text'>Messages</h1>
    </Link>
    {/* 6 */}
    <Link href={"/Notifications"} className='nav-item-box h-box'>
        < FaRegHeart className='text-2xl icon '/>
        <h1 className=' text'>Notifications</h1>
    </Link>
    {/* 7 */}
    <Link href={"/Post"} className='nav-item-box'>
        <FaRegSquarePlus  className='text-2xl icon '/>
        <h1 className=' text'>Post</h1></Link>
        {/* 8 */}
        <Link href={"/Profile"} className='nav-item-box'>
        <BsFillPersonFill  className='text-2xl icon '/>
        <h1 className=' text'>Profile</h1></Link>
        </div>

  <div className='nav-item-box h-box'>
        <RxHamburgerMenu  className='text-2xl icon '/>
        <h1 className=' text'>Manue</h1></div>
    </div>
  )
}

export default Sidebar