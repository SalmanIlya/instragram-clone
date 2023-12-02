import React from 'react'
import "./Style.css"
import Sidebar from '../Sidebar/Sidebar'
import Navabr from '../TopNavbar/Navabr'

const Home = () => {
  return (
    <div className='home-main'>
   <Navabr/>
   <Sidebar/>
   <div className='home '>
<div className='home-box-1'>
  {/* status */}
  <div className='Status flex flex-row '>
<div className='flex flex-col justify-center items-center mx-2 '>
  <div className='images-bg'>
  <div className='bg-red-100 h-14 w-14 rounded-full'></div>

  </div>
  <p>name </p>
</div>
<div className='flex flex-col justify-center items-center mx-2 '>
  <div className='images-bg'>
  <div className='bg-red-100 h-14 w-14 rounded-full'></div>

  </div>
  <p>name </p>
</div>
<div className='flex flex-col justify-center items-center mx-2 '>
  <div className='images-bg'>
  <div className='bg-red-100 h-14 w-14 rounded-full'></div>

  </div>
  <p>name </p>
</div><div className='flex flex-col justify-center items-center mx-2 '>
  <div className='images-bg'>
  <div className='bg-red-100 h-14 w-14 rounded-full'></div>

  </div>
  <p>name </p>
</div><div className='flex flex-col justify-center items-center mx-2 '>
  <div className='images-bg'>
  <div className='bg-red-100 h-14 w-14 rounded-full'></div>

  </div>
  <p>name </p>
</div><div className='flex flex-col justify-center items-center mx-2 '>
  <div className='images-bg'>
  <div className='bg-red-100 h-14 w-14 rounded-full'></div>

  </div>
  <p>name </p>
</div>
<div className='flex flex-col justify-center items-center mx-2 '>
  <div className='images-bg'>
  <div className='bg-red-100 h-14 w-14 rounded-full'></div>

  </div>
  <p>name </p>
</div><div className='flex flex-col justify-center items-center mx-2 '>
  <div className='images-bg'>
  <div className='bg-red-100 h-14 w-14 rounded-full'></div>

  </div>
  <p>name </p>
</div>


  </div>
</div>
<div className='home-box-2'></div>

    
   </div>
    </div>
  )
}

export default Home