import React from 'react'
import Navbar from '../components/navbar'

import tshirt from '../assets/tshirt.jpeg'
import hoodies from '../assets/hoodies.jpeg'
import corporate from '../assets/corporate.jpeg'
import uniform from '../assets/uniform.jpeg'
import cap from '../assets/cap.jpeg'
import tote from '../assets/tote.jpeg'
import jersey from '../assets/jersey.jpeg'

const services = () => {

  const images = [
    {
      img:  tshirt,
      name: "Customize Tshirt"
    },
    {
      img: hoodies,
      name: "Hoodies"
    },
    {
      img: corporate,
      name: "Corporate Clothing"
    },
    {
      img: uniform,
      name: "Uniform"
    },
    {
      img: cap,
      name: "Caps"
    },
    {
      img: tote,
      name: "Tote Bags"
    },
    {
      img: jersey,
      name: "Sports Jersey"
    },
  ]

  return (
    <div>
      <Navbar/>
      <div className='services'>
      {
        images.map((item)=>{
          return(
          <div className='servicecard'>
            <img src={item.img} className='serviceimg'/>
            <h2>{item.name}</h2>
          </div>
          )
        })
      }
      </div>

    </div>
  )
}

export default services
