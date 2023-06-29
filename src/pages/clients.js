import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import atharva from '../assets/clients/atharva.png'
import thakur from '../assets/clients/5ntf3oqg.jbg.webp'
import fm from '../assets/clients/3FM LOGO.jpeg'
import besick from '../assets/clients/BESICK LOGO.png'
import secureanx from '../assets/clients/securanx.png'
import koverify from '../assets/clients/koverify.png'
import '../style.css'
const Clients = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
      <div className="backdrop">
        <h1 ><b>CLIENTS</b></h1>
      </div>
      <div>
        <div id='clie' className='ourclients clientpage'>
        <h1 className='header' >OUR CLIENTS</h1>
        <div className='clients'> 
        <img src={atharva} className='client'/>
        <img src={thakur} className='client'/>
        <img src={fm} className='client'/>
        <img src={besick} className='client'/>
        <img src={secureanx} className='client'/>
        <img src={koverify} className='client'/>
        </div>
        <h4>Want to be our Client?</h4>
        <button onClick={()=>navigate("/contact")} className='contactbtn'>Contact Us</button>

    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Clients

