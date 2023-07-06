import React, { useRef, useState, useEffect } from "react";
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

const config = {
  rootMargin: "200px 0px 0px 0px",
  threshold: "0",
};

const Process = () => {
  const boxRef = useRef(null);
  const [load, setload] = useState(false);
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
  const loadimg = (image) => {
    image.src = image.dataset.src;
  };

  useEffect(() => {
    let observer = new window.IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadimg(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);
    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div>
      <div className="processhead">
        <h1>HOW IT GOES ...</h1>
        <div className="product-carousel mobile">
          <div>
            <Slider {...settings}>
              <div className="probox-mob">
                <img
                  data-src={fabric}
                  className={load ? "loaded proimg-mob" : "loading proimg-mob "}
                  alt="Fabric"
                  src={""}
                  onLoad={() => setload(true)}
                />
                <h3>1.Fabric Selection</h3>
              </div>
              <div className="probox-mob">
                <img
                  data-src={cutting}
                  className="proimg-mob"
                  alt="Cutting"
                  src={""}
                  onLoad={() => setload(true)}
                />
                <h3>2.Cutting</h3>
              </div>
              <div className="probox-mob">
                <img
                  data-src={embroidery}
                  className="proimg-mob"
                  alt="Embroidery"
                  src={""}
                  onLoad={() => setload(true)}
                />
                <h3>3.Embroidery</h3>
              </div>
              <div className="probox-mob">
                <img
                  data-src={printing}
                  className="proimg-mob"
                  src={""}
                  onLoad={() => setload(true)}
                />
                <h3>4.Printing</h3>
              </div>
              <div className="probox-mob">
                <img
                  data-src={sewing}
                  className="proimg-mob"
                  src={""}
                  onLoad={() => setload(true)}
                />
                <h3>5.Sewing / Stiching</h3>
              </div>
              <div className="probox-mob">
                <img
                  data-src={ironing}
                  className="proimg-mob"
                  src={""}
                  onLoad={() => setload(true)}
                />
                <h3>6.Ironing</h3>
              </div>
              <div className="probox-mob">
                <img
                  data-src={checking}
                  className="proimg-mob"
                  src={""}
                  onLoad={() => setload(true)}
                />
                <h3>7.Checking</h3>
              </div>
              <div className="probox-mob">
                <img
                  data-src={packing}
                  className="proimg-mob"
                  src={""}
                  onLoad={() => setload(true)}
                />
                <h3>8.Packing</h3>
              </div>
              <div className="probox-mob">
                <img
                  data-src={delivery}
                  className="proimg-mob"
                  src={""}
                  onLoad={() => setload(true)}
                />
                <h3>9.Delivery</h3>
              </div>
            </Slider>
          </div>
        </div>
        <div className="process desktop">
          <div className="processbox">
            <img
              data-src={fabric}
              className="processimg"
              src={""}
              onLoad={() => setload(true)}
            />
            <h3>Fabric Selection</h3>
          </div>
          <div className="processbox">
            <img
              data-src={cutting}
              className="processimg"
              src={""}
              onLoad={() => setload(true)}
            />
            <h3>Cutting</h3>
          </div>
          <div className="processbox">
            <img
              data-src={embroidery}
              className="processimg"
              src={""}
              onLoad={() => setload(true)}
            />
            <h3>Embroidery</h3>
          </div>
          <div className="processbox">
            <img
              data-src={printing}
              className="processimg"
              src={""}
              onLoad={() => setload(true)}
            />
            <h3>Printing</h3>
          </div>
          <div className="processbox">
            <img
              data-src={sewing}
              className="processimg"
              src={""}
              onLoad={() => setload(true)}
            />
            <h3>Sewing / Stiching</h3>
          </div>
          <div className="processbox">
            <img
              data-src={ironing}
              className="processimg"
              src={""}
              onLoad={() => setload(true)}
            />
            <h3>Ironing</h3>
          </div>
          <div className="processbox">
            <img
              data-src={checking}
              className="processimg"
              src={""}
              onLoad={() => setload(true)}
            />
            <h3>Checking</h3>
          </div>
          <div className="processbox">
            <img
              data-src={packing}
              className="processimg"
              src={""}
              onLoad={() => setload(true)}
            />
            <h3>Packing</h3>
          </div>
          <div className="processbox">
            <img
              data-src={delivery}
              className="processimg"
              src={""}
              onLoad={() => setload(true)}
            />
            <h3>Delivery</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
