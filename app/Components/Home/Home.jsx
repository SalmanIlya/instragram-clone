import React from 'react'
import "./Style.css"
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  return (
    <div className='home-main'>
   <Sidebar/>
   <div className='home'>
<div className='home-box-1'>box-1</div>
<div className='home-box-2'>box-2</div>

    
   </div>
    </div>
  )
}

export default Home