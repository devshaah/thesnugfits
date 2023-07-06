import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import atharva from "../assets/clients/atharva.png";
import thakur from "../assets/clients/5ntf3oqg.jbg.webp";
import fm from "../assets/clients/3FM LOGO.jpeg";
import besick from "../assets/clients/BESICK LOGO.png";
import secureanx from "../assets/clients/securanx.jpg";
import koverify from "../assets/clients/koverify.jpg";
import "../style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import school from '../assets/services/School colege hoodies.jpg'
import varsity from '../assets/services/varsity.jpg'
import college from '../assets/services/college event tshirts.jpg'
import community from '../assets/services/Community Outings.jpg'
import corporate from '../assets/services/corporate uniform.jpg'
import custom from '../assets/services/Custom designs.jpg'
import dance from '../assets/services/dance events.jpg'

const Clients = () => {
  const navigate = useNavigate();

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "relative", background: "transparent" ,color: "black", height:"100%" , right:"0" , zIndex:"10" ,width:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}
        onClick={onClick}
      />
    );
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "relative", background: "transparent", height:"100%" , left:"0", zIndex:"10" ,width:"30px",display:"flex",alignItems:"center",justifyContent:"center",fontSize: "30px",}}
        onClick={onClick}
      />
    );
  }



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 500, // Adjust the breakpoint value as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // Optionally hide the arrows on mobile
        },
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="backdrop">
        <h1>
          <b>CLIENTS</b>
        </h1>
      </div>
      <div>
        <div id="clie" className="ourclients clientpage">
          <h1 className="header">OUR CLIENTS</h1>
          <div className="clients">
            <img src={atharva} className="client" />
            <img src={thakur} className="client" />
            <img src={fm} className="client" />
            <img src={besick} className="client" />
            <img src={secureanx} className="client" />
            <img src={koverify} className="client" />
          </div>
          <h4>Want to be our Client?</h4>
          <button
            onClick={() => navigate("/contact")}
            className="contactbtn clientbtn"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="as-seen-on">
        <h2 ><b>AS SEEN ON</b></h2>
        <Slider {...settings}>
          <div className="seenon">
              <img src={school}  className="seenimg"/>
          </div>
          <div className="seenon">
              <img src={varsity}  className="seenimg"/>
          </div>
          <div className="seenon">
              <img src={college}  className="seenimg"/>
          </div>
          <div className="seenon">
              <img src={community} className="seenimg" />
          </div>
          <div className="seenon">
              <img src={custom} className="seenimg" />
          </div>
          <div className="seenon">
              <img src={corporate} className="seenimg" />
          </div>
          <div className="seenon">
              <img src={dance} className="seenimg"/>
          </div>
        </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default Clients;
