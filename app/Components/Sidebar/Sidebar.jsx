"use client"
import React, { useEffect, useState } from 'react'
import "./Style.css"
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import Image from 'next/image'

const Sidebar = () => {
    
  
    

    return (
    <div className='w-64 h-screen sidebar px-3 py-2 flex flex-col items-center '>
        <div className='my-5 mr-5 pb-5  w-48 h-9 '>
            <Image src={"/images/1.png"} height={29} width={103}/>
        </div>
        {/*1 */}
        <div className='p-3 my-1 flex flex-row justify-start items-center w-full '>
            
        <GoHomeFill  className='text-3xl '/>
        <h1 className='pl-4 font-bold'>Home</h1>
        </div>
        {/* 2 */}
        <div className='p-3 my-1 flex flex-row justify-start items-center w-full '>
        <GoHome className='text-3xl '/>
        <h1 className='pl-4 font-bold'>Home</h1>
    </div>
    {/* 3 */}
    <div className='p-3 my-1 flex flex-row justify-start items-center w-full '>
        <GoHome className='text-3xl '/>
        <h1 className='pl-4 font-bold'>Home</h1>
    </div>
    {/* 4 */}
    <div className='p-3 my-1 flex flex-row justify-start items-center w-full '>
        <GoHome className='text-3xl '/>
        <h1 className='pl-4 font-bold'>Home</h1>
    </div>
    {/* 5 */}
    <div className='p-3 my-1 flex flex-row justify-start items-center w-full '>
        <GoHome className='text-3xl '/>
        <h1 className='pl-4 font-bold'>Home</h1>
    </div>
    {/* 6 */}
    <div className='p-3 my-1 flex flex-row justify-start items-center w-full '>
        <GoHome className='text-3xl '/>
        <h1 className='pl-4 font-bold'>Home</h1>
    </div>
    {/* 7 */}
    <div className='p-3 my-1 flex flex-row justify-start items-center w-full '>
        <GoHome className='text-3xl '/>
        <h1 className='pl-4 font-bold'>Home</h1></div>
    </div>
  )
}

export default Sidebar