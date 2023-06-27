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
import logo from "./assets/logo.jpg";
import Process from './process';
import atharva from './assets/clients/atharva.png'
import thakur from './assets/clients/5ntf3oqg.jbg.webp'
import fm from './assets/clients/3FM LOGO.jpeg'
import besick from './assets/clients/BESICK LOGO.png'
import secureanx from './assets/clients/securanx.png'
import koverify from './assets/clients/koverify.png'

import fabric from './assets/sticker/quality.png'
import handcrafted from './assets/sticker/handcrafted.png'
import inhouse from './assets/sticker/inhouse cut to pack.png'
import delivery from './assets/sticker/delivery (1).png'

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AddTaskIcon from '@mui/icons-material/AddTask';

import review1 from './assets/reviews/review 1.png'
import review2 from './assets/reviews/review 2.png'
import review3 from './assets/reviews/review 3.png'

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
            <h1 className='header'>HOW WE WORK?</h1>
            <p>Let's get started</p>
        <div className='work'>
            <div className='workcard '>
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

    <div className='whychooseus'>
        <h1 className='chooseheader header'>WHY <b>CHOOSE US </b></h1>
        <div className='boxes'>
            <div className='asd'>
                <div className='box'>
                <div className='chooseicon'><img src={fabric} className='sticker'/></div>
                <h4>Premium Handcrafted Fabric</h4>
                </div>
                <div className='desktop no'>01</div>
            </div>
            <div className='asd'>
                <div className='desktop no'>02</div>
                <div className='box'>
                    <div className='chooseicon'>
                    <img src={delivery} className='sticker'/>
                    </div>       
                <h4>On Time Delivery</h4>
                </div>
            </div>
            <div className='asd'>
                <div className='box'>
                <div className='chooseicon'><img src={inhouse} className='sticker'/></div>
                <h4>In-House cut-to-pack</h4>
                </div>
                <div className='desktop no'>03</div>
            </div>
            <div className='asd'>
                <div className='desktop no'>04</div>
                <div className='box'>
                <div className='chooseicon'><img src={handcrafted} className='sticker'/></div>
                <h4>Quality with Affordability</h4>

                </div>
            </div>


        </div>

    </div>
        <Process/>
    <div id='clie' className='ourclients'>
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

    <div className='testimons'>
        <h1 className='header'>HEAR FROM OUR CUSTOMERS</h1>
        <div className='testimonials'>
        <div className='testimonial'> 
        {/* <h4>High-Quality Clothing</h4> */}
         {/* <p className='review'>I've been a customer of TheSnugFits for a while now, and I must say their clothing is top-notch. The materials used are of excellent quality, and the stitching is always neat and durable. I love how their clothes fit me perfectly and make me feel confident. Keep up the great work!</p> */}
         <img className='review' src={review1}/>
        </div>
        <div className='testimonial'> 
        {/* <h4>Fast and Efficient Service</h4>
         <p className='review'>I recently ordered a few outfits from TheSnugFits, and I was impressed by their speedy and efficient service. The order was processed quickly, and the items arrived well-packaged and in excellent condition. The company's attention to detail and prompt communication made the whole shopping experience hassle-free. I would definitely recommend them.</p> */}
         <img className='review' src={review2}/>
        </div>
        <div  className='testimonial'> 
        {/* <h4>Stylish and Trendy Designs</h4>
         <p className='review'>TheSnugFits truly stands out when it comes to their fashionable and trendy designs. Every time I wear their clothes, I receive compliments and inquiries about where I got them. The company seems to have its finger on the pulse of the latest fashion trends. Their unique and stylish pieces allow me to express my personal style with confidence. I'm a loyal customer and always look forward to their new collections.</p> */}
         <img className='review' src={review3}/>
        </div>
        </div>

    </div>


    <div className='homecontact'>
    <h1>WORK WITH US ?</h1>
    <button onClick={()=>navigate("/contact")} className='contactbtn'>Contact Us</button>
</div>
<Footer/>
    </div>
  )
}

export default Home
