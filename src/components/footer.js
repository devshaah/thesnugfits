import React from 'react'
import '../style.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const footer = () => {
  return (
    <div className='footer'>
      <div>
        <h3>Copyrights &copy; </h3>
      </div>
      <div>
        <a href='' className='icon'><InstagramIcon/></a>
        <a href='' className='icon'><FacebookIcon/></a>
        <a href='' className='icon'><TwitterIcon/></a>   
      </div>
    </div>
  )
}

export default footer
