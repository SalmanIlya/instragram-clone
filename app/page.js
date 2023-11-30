// import Link from 'next/link'
import React from 'react'
import Home from './Components/Home/Home'
import Sidebar from './Components/Sidebar/Sidebar'

const page = () => {
  return (
    <div className='homepage'>
        <Sidebar/>

      <Home/>
    </div>
  )
}

export default page