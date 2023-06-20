import React from 'react'
import { useNavigate } from "react-router-dom";
import './style.css'
import Navbar from './components/navbar';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import banner1 from './assets/banner1.png'
import banner2 from './assets/Untitled.png'
import Services from './pages/services'
import Footer from './components/footer';

const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
      <Navbar/>

    <div className='desktop'>
        <Carousel controls autoPlay interval={2000} >
            <div>
                <img src={banner1} className='banner'/>
            </div>
            <div>
                <img src={banner1} className='banner'/>
            </div>
        </Carousel>
    </div>
    <div className='mobile'>
        <Carousel controls autoPlay interval={2000} >
            <div>
                <img src={banner2} className='banner'/>
            </div>
            <div>
                <img src={banner2} className='banner'/>
            </div>
        </Carousel>
    </div>

    <div className='howwework'> 
            <h1>How we Work?</h1>
            <p>Let's get started</p>
        <div className='work'>
            <div className='workcard'>
            <h2>Design</h2>
            <ul>
                <li>If you already possess a logo, we can convert it into a digital format for you.</li>
                <li>In case you don't have a logo, we can assist you in creating a unique design.</li>
                <li>Our services offer flexibility in terms of size and color options for your logo.</li>
                <li>You can choose to have your design embroidered or applied using heat transfer methods.</li>
                <li>To gather inspiration, feel free to explore our gallery or check our social media feeds.</li>
            </ul>
            </div>
 
            <div className='workcard'>
            <h2>Clothing</h2>
            <ul>
                <li>We have an extensive range of brands with a wide variety of designs and colors available.</li>
                <li>Our services include embroidery and heat transfer, allowing us to customize apparel items, blankets, towels, backpacks, and more</li>
                <li>To help you find exactly what you're looking for, we encourage you to explore our catalogs.</li>
                <li>If you can't find the specific item you need, please let us know, and we'll be happy to assist you in finding it.</li>
                <li>Additionally, we offer the option to apply your logo or design to an item you provide (with certain restrictions in place)</li>
            </ul>
            </div>

            <div className='workcard'>
            <h2>Orders</h2>
            <ul>
                <li>If you have any inquiries and are not yet ready to proceed, feel free to reach out to us via phone, chat, or email, and we'll be glad to assist you.</li>
                <li>We welcome you to visit our location for a no-cost consultation. Here, you'll have the opportunity to examine and experience samples of our most popular items and designs firsthand.</li>
                <li>Once you've placed your order, we'll promptly send you an example via email or text for your approval before proceeding with processing. </li>
                <li>The completion time for orders may range from a few days to two weeks, depending on the order size.</li>
                <li>No order is considered too small or too large for us to handle. We offer multiple payment options, including cash, checks, credit cards, and PayPal, to accommodate your preferences</li>
            </ul>
            </div>


        </div>

    </div>

    <div className='services'>
        
    </div>
    <div className='homecontact'>
    <h1>Work with Us ?</h1>
    <button onClick={()=>navigate("/contact")} className='contactbtn'>Contact Us</button>
</div>
<Footer/>
    </div>
  )
}

export default Home
