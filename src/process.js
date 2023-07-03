import React, { useRef, useState, Component } from "react";
import "./style.css";
import fabric from "./assets/PROCESS/fabrics.png";
import cutting from "./assets/PROCESS/cutting.jpg";
import embroidery from "./assets/PROCESS/embroidery.jpg";
import printing from "./assets/PROCESS/printing.jpg";
import sewing from "./assets/PROCESS/sewing.jpg";
import ironing from "./assets/PROCESS/ironing.jpg";
import checking from "./assets/PROCESS/checking.jpg";
import packing from "./assets/PROCESS/packing.jpg";
import delivery from "./assets/PROCESS/delivery.jpg";
import "./process.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Process = () => {
  const boxRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <div className="processhead">
        <h1>HOW IT GOES ...</h1>
        <div className="product-carousel mobile">
          <div>
            <Slider {...settings}>
              <div className="probox-mob">
                <img src={fabric} className="proimg-mob" alt="Fabric" />
                <h3>Fabric Selection</h3>
              </div>
              <div className="probox-mob">
                <img src={cutting} className="proimg-mob" alt="Cutting" />
                <h3>Cutting</h3>
              </div>
              <div className="probox-mob">
                <img src={embroidery} className="proimg-mob" alt="Embroidery" />
                <h3>Embroidery</h3>
              </div>
              <div className="probox-mob">
                <img src={printing} className="proimg-mob" />
                <h3>Printing</h3>
              </div>
              <div className="probox-mob">
                <img src={sewing} className="proimg-mob" />
                <h3>Sewing / Stiching</h3>
              </div>
              <div className="probox-mob">
                <img src={ironing} className="proimg-mob" />
                <h3>Ironing</h3>
              </div>
              <div className="probox-mob">
                <img src={checking} className="proimg-mob" />
                <h3>Checking</h3>
              </div>
              <div className="probox-mob">
                <img src={packing} className="proimg-mob" />
                <h3>Packing</h3>
              </div>
              <div className="probox-mob">
                <img src={delivery} className="proimg-mob" />
                <h3>Delivery</h3>
              </div>
            </Slider>
          </div>
        </div>
        <div className="process desktop">
          <div className="processbox">
            <img src={fabric} className="processimg" />
            <h3>Fabric Selection</h3>
          </div>
          <div className="processbox">
            <img src={cutting} className="processimg" />
            <h3>Cutting</h3>
          </div>
          <div className="processbox">
            <img src={embroidery} className="processimg" />
            <h3>Embroidery</h3>
          </div>
          <div className="processbox">
            <img src={printing} className="processimg" />
            <h3>Printing</h3>
          </div>
          <div className="processbox">
            <img src={sewing} className="processimg" />
            <h3>Sewing / Stiching</h3>
          </div>
          <div className="processbox">
            <img src={ironing} className="processimg" />
            <h3>Ironing</h3>
          </div>
          <div className="processbox">
            <img src={checking} className="processimg" />
            <h3>Checking</h3>
          </div>
          <div className="processbox">
            <img src={packing} className="processimg" />
            <h3>Packing</h3>
          </div>
          <div className="processbox">
            <img src={delivery} className="processimg" />
            <h3>Delivery</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
