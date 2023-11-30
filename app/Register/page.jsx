import React from 'react'
import "./Style.css"
import { FaFacebookSquare } from "react-icons/fa";
import Image from 'next/image';
const page = () => {
  return (
    <div>
          <div className="main">
        <div className="box-1 loginform">
            <div className="logo">
               
                <Image src="/images/1.png" width={175} height={85} alt="instragram logo" className="instragram-logo"/>
            </div>
           
            <div className="input-box">
                <div className="text-box-1">
                    <p>Sign up to see photos and videos from your friends.
                    </p>
                </div>
                <button className="btn-2"> <div className="reg flex flex-row  justify-center items-center ">
                <FaFacebookSquare className='facebook' />
                    <p className="reg-text">Log in with Facebook</p>
                </div></button>
                <div className="lines">
                    <div className="line-1"></div>
                    <p>OR</p>
                    <div className="line-2"></div>
                </div>
                <input type="text" className="input" placeholder="Mobile number or email address"/>
                <input type="text" className="input" placeholder="Full Name"/>
                <input type="text" className="input" placeholder="Username"/>
                <input type="text" className="input" placeholder="Password"/>
<p className="text-box-2 mb-5">People who use our service may have uploaded your contact information to Instagram.Learn more</p>

<p className="text-box-2 ">By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.

</p>
                <button className="btn-1 mt-3">Sign up</button>
              
              
    

            </div>
          
        </div>
        <div className="box-2">
           <p>Have an account?  <a href="#">Log in</a></p>
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

export default page