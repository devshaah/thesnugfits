import React from 'react'
import '../style.css'
import './footer.css'
import logo from '../assets/logo.jpg'
import logoname from '../assets/logoname.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='foot'>
        <div className='hide'>
        <img src={logo} className="logo"/>
          <img src={logoname} className="logo"/>
        </div >
        <div className='hide'>
              <a className='foot-list' onClick={()=>navigate("/")}><h6>HOME</h6></a>
              <a className='foot-list' onClick={()=>navigate("/products")}><h6>PRODUCTS</h6></a>
              <a className='foot-list' onClick={()=>navigate("/services")}><h6>SERVICES</h6></a>
        </div>
        <div className='hide'>
              <a className='foot-list' onClick={()=>navigate("/clients")}><h6>CLIENTS</h6></a>
              <a className='foot-list' onClick={()=>navigate("/about")}><h6>ABOUT</h6></a>
              <a className='foot-list' onClick={()=>navigate("/contact")}><h6>CONTACT</h6></a>
        </div>
        <div className='footdet'>
          <h6>Call us at : <b>+91 98203 32671</b> / <b>+91 97736 99251</b></h6>
          <h6 className='mb'>Address : A/24 , Navkar Paradise , Borivali(West)</h6>
        </div>
          
      </div>

    <div className='footer'>
      <div>
        <h3 className='copy'>Copyrights &copy; 2023 by The Snug Stitch . All Rights Reserved </h3>
      </div>
      <div>
        <a href='https://instagram.com/thesnugstitch?igshid=MzRlODBiNWFlZA==' className='icon'><InstagramIcon/></a>
        <a href='' className='icon'><FacebookIcon/></a>
        <a href='mailto:thesnugstitches@gmail.com' className='icon'><GmailIcon/></a>   
      </div>
    </div>
    </div>
  )
}

export default Footer
