"use client"
import React, { useState } from 'react'
import "./Style.css"
import Sidebar from '../Components/Sidebar/Sidebar'
import Image from 'next/image'
import Post from '../Components/Post/Post'
import Reels from '../Components/Reels/Reels'
import Save from '../Components/Save/Save'
import Tagged from '../Components/Tagged/Tagged'
import { MdOutlineViewCompact } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { BsPersonVideo } from "react-icons/bs";
const page = () => {
  const [State, setState] = useState("post")
  return (
    <div className='main-profile'>
    <Sidebar/>
    <div className='profile h-screen w-screen'>
     <div className='flex flex-row justify-center items-center'>
     <div className="img flex flex-col justify-center items-center">

<Image src={"/images/par.jpg"} height={150} width={150} className='rounded-full h-36 m-5' />
</div>
<div className='mr-40'>
  <h1 className='mx-3 text-2xl font-light'>Salaman ilyas</h1>
  <div className='flex '>
  <div className='flex flex-col justify-center items-center text-sm font-light mx-3  my-5'>
    <span>0</span>
    <span>Post</span>
  </div>  <div className='flex flex-col items-center justify-center text-sm font-light mx-3  my-5'>
    <span>0</span>
    <span>followers</span>
  </div>  <div className='flex flex-col justify-center items-center text-sm font-light mx-3  my-5'>
    <span>0</span>
    <span>Follwoing</span>
  </div>
  </div>

  </div>
 
     </div>
     <hr className='mt-10 w-1/2 m-auto' />
     <div className='flex flex-row justify-center items-center'>
      <p className={State==="post" ?" border-t-2 border-gray-500 text-sm flex flex-row justify-center items-center  pt-3 font-light mr-5 cursor-pointer ":'text-sm flex flex-row justify-center items-center  pt-3 font-light mr-5 cursor-pointer' } onClick={()=>{setState("post")}}><MdOutlineViewCompact className='mr-1' /> <span>POSTS </span> </p>

      <p className={State==="reel" ?" border-t-2 border-gray-500 flex flex-row justify-center items-center text-sm pt-3 font-light mr-5 cursor-pointer ":'flex flex-row justify-center items-center text-sm pt-3 font-light mr-5 cursor-pointer' } onClick={()=>{setState("reel")}}><RiVideoLine className="mr-1"/> <span>REELS</span></p>

      <p className={State==="save" ?" border-t-2 border-gray-500 text-sm flex flex-row justify-center items-center pt-3 font-light mr-5 cursor-pointer ":'text-sm flex flex-row justify-center items-center pt-3 font-light mr-5 cursor-pointer' } onClick={()=>{setState("save")}}><CiBookmark className="mr-1"
      /> <span>SAVE</span>
      </p>

      <p className={State==="tagged" ?" border-t-2 border-gray-500 text-sm flex flex-row justify-center items-center pt-3 font-light mr-5 cursor-pointer ":'text-sm flex flex-row justify-center items-center pt-3 font-light mr-5 cursor-pointer' } onClick={()=>{setState("tagged")}}>  
      <BsPersonVideo className="mr-1" />
      <span>TAGGED</span>
      </p>
     </div>
     
    
  {
    State==="post" ? <Post/> : State==="reel" ? <Reels/> :State==="save" ? <Save/> :State==="tagged" ?<Tagged/> :<Post/>
  }
  

    </div>
</div>
  )
}

export default page