import React from 'react'
import "./Style.css"
import Sidebar from '../Components/Sidebar/Sidebar'
const page = () => {
  return (
    <div className='main-massage'>
        <Sidebar/>
        <div className='message'>page</div>
    </div>
  )
}

export default page