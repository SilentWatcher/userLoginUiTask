import React from 'react'
import {Link} from 'react-router-dom'

import  '../../style/Home.css';
function Home() {
  return (
    <>
    <div className="home_main_container">
         <div className="home_container">
            <h1>Welcome to PropX</h1>
            <p>Lorem, ipsum dolor sit amet, <br /> consectetur adipisicing elit.</p>
            <Link to={'/signup'}  ><button className='button'>Create Account</button></Link>
            <Link to={'/login'}  ><button className='button' style={{background:'var(--secondary-color)', color:'var(--color)', marginTop:'-10px'}}>Already Registered? Login</button></Link> 
         </div>
    </div>

        
    </>
  )
}

export default Home