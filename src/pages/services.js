import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import school from '../assets/services/School colege hoodies.jpg'
import cafe from '../assets/services/cafe uniform.webp'
import varsity from '../assets/services/varsity.jpg'
import college from '../assets/services/college event tshirts.jpg'
import community from '../assets/services/Community Outings.jpg'
import political from '../assets/services/election tshirt.webp'
import corporate from '../assets/services/corporate uniform.jpg'
import cricket from '../assets/services/cricket-team-jesey.jpg'
import custom from '../assets/services/Custom designs.jpg'
import dance from '../assets/services/dance events.jpg'
import family from '../assets/services/family tshirts.jpg'
import jersey from '../assets/services/sports jersy.jpg'

const services = () => {

  const images = [
    {
      img:  school,
      name: "School/College Hoodies"
    },
    {
      img: corporate,
      name: "Corporate Uniform"
    },
    {
      img: cafe,
      name: "Cafe Tshirts"
    },
    {
      img: family,
      name: "Family Outings"
    },
    {
      img: varsity,
      name: "College Varsity Jackets"
    },
    {
      img: dance,
      name: "Festive Event"
    },
    {
      img: custom ,
      name: "Custom Designs"
    },
    {
      img: cricket,
      name: "Cricket Jersey"
    },
    {
      img: political,
      name: "Political Event Tshirts"
    },
    {
      img: jersey,
      name: "Sports Jersey"
    },
    {
      img: college,
      name: "College Festive Merch"
    },
    {
      img: community,
      name: "Community Outings"
    },

  ]

  return (
    <div>
      <Navbar/>
      <div className="backdrop">
        <h1 ><b>SERVICES</b></h1>
      </div>
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
      <Footer/>
    </div>
  )
}

export default services
