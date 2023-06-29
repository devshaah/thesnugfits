import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./about.css";
import cutting from "../assets/PROCESS/cutting.jpg";
import sewing from "../assets/PROCESS/sewing.jpg";
import packing from "../assets/PROCESS/packing.jpg";
import printing from "../assets/PROCESS/printing.jpg";
import ironing from "../assets/PROCESS/ironing.jpg";
import checking from "../assets/PROCESS/checking.jpg";
import "../process.css";
import "../style.css";

const about = () => {
  return (
    <div>
      <Navbar />
      <div className="backdrop">
        <h1>
          <b>ABOUT US</b>
        </h1>
      </div>
      <div className="about desktop">
        <div className="aboutus">
          <ul>
            <li className="aboutlist">
              The Snug Stitch is a well-known provider of custom clothes
              manufacturing, wholesale, and contract supply services. We
              specialize in offering a wide range of t-shirts, allowing
              customers to personalize their orders in terms of color, size,
              cuts, and styles.
            </li>
            <li className="aboutlist">
              At The Snug Stitch, we specialize in manufacturing a wide variety
              of garments for men, women, and children. Our product range
              includes round-neck t-shirts in both regular and oversized sizes,
              full-sleeve t-shirts, tank tops, hoodies, and varsity jackets.
            </li>
            <li className="aboutlist">
              We take advantage of cutting-edge synthesizing technology and
              employ a team of highly skilled professionals to create t-shirts
              of outstanding quality. Our garments are crafted to perfection,
              ensuring suitability for any occasion.
            </li>
            <li className="aboutlist">
              The Snug Stitch has built a strong reputation as the go-to
              supplier for start-ups, providing end-to-end solutions
              encompassing design, printing, and packaging. Additionally, they
              collaborate closely with corporate clients to deliver top-notch
              garments and t-shirts tailored for events and office use.
            </li>
            <li className="aboutlist">
              With an extensive collection and diverse quality options, The Snug
              Stitch excels in custom printing on t-shirts, apparels, and
              fabrics. Their market reach extends throughout India, catering to
              various customers seeking customization. Their clientele includes
              start-ups, corporates, resellers, distributors, wholesalers,
              retailers, and traders.
            </li>
          </ul>
        </div>

        <div className="aboutimg">
          <div className="about-box">
            <img src={cutting} className="about-box-img" />
          </div>
          <div className="about-box">
            <img src={sewing} className="about-box-img" />
          </div>
          <div className="about-box">
            <img src={printing} className="about-box-img" />
          </div>
          <div className="about-box">
            <img src={ironing} className="about-box-img" />
          </div>
          <div className="about-box">
            <img src={checking} className="about-box-img" />
          </div>
          <div className="about-box">
            <img src={packing} className="about-box-img" />
          </div>
        </div>
      </div>
      
      <div className="mobile">
        <div className="about-box">
        <img src={cutting} className="about-box-img" />
        <li>
          Snug Stitch offers custom t-shirt manufacturing and wholesale
          services, allowing customers to personalize their orders.
        </li>
        </div>
        <div className="about-box">
        <img src={sewing} className="about-box-img" />
        <li>
          The Snug Stitch specializes in manufacturing a wide range of garments
          for men, women, and children, including t-shirts, tank tops, hoodies,
          and varsity jackets
        </li>
        </div>
        <div className="about-box">
        <img src={printing} className="about-box-img" />
        <li>
          The Snug Stitch uses advanced technology and skilled professionals to
          create top-quality t-shirts suitable for any occasion.
        </li>
        </div>
        <div className="about-box">
        <img src={ironing} className="about-box-img" />
        <li>
          The Snug Stitch is a trusted supplier offering comprehensive solutions
          to start-ups, including design, printing, and packaging. They also
          cater to corporate clients, delivering high-quality customized
          garments and t-shirts for events and office purposes.
        </li>
        </div>
        <div className="about-box">
        <img src={checking} className="about-box-img" />
        <li>
          The Snug Stitch is a prominent company known for its expertise in
          custom printing on t-shirts, apparels, and fabrics. They have a wide
          range of quality options and cater to various customers throughout
          India, including start-ups, corporates, resellers, distributors,
          wholesalers, retailers, and traders.
        </li>
        </div>
        <div className="about-box"> 

        <img src={packing} className="about-box-img" />
        </div>
    



      </div>
      <Footer />
    </div>
  );
};

export default about;
