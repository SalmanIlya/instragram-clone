import React from 'react'
import "./Style.css"
import { FaFacebookSquare } from "react-icons/fa";
import Image from 'next/image'
const pages = () => {
  return (
    <div>
        <div className="main">
        <div className="box-1 loginform">
            <div className="logo">
                <Image src="/images/1.png" alt="instragram logo" width={175} 
                height={85}
                className="instragram-logo"/>
            </div>
            
            <div className="input-box">
                <input type="text" className="input" placeholder="Phone number, username or email address"/>
                <input type="text" className="input" placeholder="Password"/>
                <button className="btn-1">Log in</button>
                <div className="lines">
                    <div className="line-1"></div>
                    <p>OR</p>
                    <div className="line-2"></div>
                </div>
                <div className="login">
                <FaFacebookSquare className='facebook' />
                    <p className="login-text">Log in with Facebook</p>
                </div>
                <a href="#" className="link-1 mt-5">Forgotten your password?</a>

            </div>
          
        </div>
        <div className="box-2">
           <p> Don't have an account? <a href="./Register.html"> Sign up</a></p>
        </div>
        <div className="box-3">
            <div className="text-box">
                <p>Get the app.</p>

            </div>
            <div className="img-box">
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" className="botom-img"/>
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" className="botom-img"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default pages