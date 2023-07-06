import Navbar from "../components/navbar";
import React, { useState,useEffect } from "react";
import "./product.css";
import up from "../assets/up.png";
import downarrow from "../assets/down.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../components/footer";

import img5 from "../assets/images/men vest.jpg";
import img6 from "../assets/images/oversize tshirt.jpg";
import img7 from "../assets/images/poloneck men.jpg";
import img8 from "../assets/images/regularfit tshirt men.jpg";
import img9 from "../assets/images/women oversize tshirt.jpg";
import img10 from "../assets/images/crop regular.jpg";
import img11 from "../assets/images/oversize tshirt crop.jpg";
import img12 from "../assets/images/regular fit women.jpg";
import img13 from "../assets/images/kids regular.jpg";
import img14 from "../assets/images/kids oversize.jpg";

import hmen from "../assets/images/men hoodie regular.jpg";
import hmen2 from "../assets/images/men oversize hoodie.jpg";
import hmen3 from "../assets/images/men panel hoodie.jpg";
import hmen4 from "../assets/images/without sleeve men.jpg";
import hmen5 from "../assets/images/hoodie men plain.jpg";
import hwomen from "../assets/images/women crop hoodie.jpg";
import hwomen2 from "../assets/images/women hoodie.jpg";
import hwomen3 from "../assets/images/women oversize hoodie.jpg";
import hkid from "../assets/images/kids hoodie.jpg";
import hkid2 from "../assets/images/kids oversize hoodie.jpg";

import zmen from "../assets/images/men zipper regular.jpg";
import zmen2 from "../assets/images/men oversize zipper.jpg";
import zwomen from "../assets/images/women crop zipper.jpg";
import zwomen2 from "../assets/images/women zipper.jpg";
import zwomen3 from "../assets/images/women oversize zipper.jpg";
import zkid from "../assets/images/kids zipper.jpg";
import zkid2 from "../assets/images/kids oversize zipper.jpg";
import varsitym from "../assets/images/MEN VARSITY.jpg";
import varsityw from "../assets/images/WOMEN VARSITY.jpg";
import bomberm1 from "../assets/images/bomberm1.jpg";
import bomberm2 from "../assets/images/bomberm2.jpg";
import bomberw from "../assets/images/bomberw.jpg";

import smen from "../assets/images/sweatshirt men.jpg";
import smen2 from "../assets/images/men oversize sweatshirt.jpg";
import swomen2 from "../assets/images/women regular sweatshirt.jpg";
import swomen3 from "../assets/images/women oversize sweatshirt.jpg";
import skid from "../assets/images/kids sweatshirt.jpg";

import cap from "../assets/images/cap.jpg";
import tote from "../assets/images/totebag.jpg";

import { useNavigate } from "react-router-dom";

const Products = ({ setmessage }) => {
  const navigate = useNavigate();

  const [show, setshow] = useState(true);
  const [down, setdown] = useState(true);
  const [load, setload] = useState(false);
  const demo = [
    { title: "Oversized Tshirt", img: img6 },
    { title: "Vest", img: img5 },
    { title: "Oversized Sweatshirt", img: smen2 },
    { title: "Oversize Zipper", img: zwomen3 },
    { title: "Regular Fit", img: img8 },
    { title: "Regular Sweatshirt", img: skid },
    { title: "Oversized Dress", img: img9 },
    { title: "Regular Crops", img: img10 },
    { title: "Oversize Zipper", img: zkid2 },
    { title: "Oversized Crops ", img: img11 },
  ];
  const [data, setdata] = useState(demo);
  const toggle = () => {
    setshow(!show);
    setdown(!down);
  };

  const img = {
    tshirt: {
      men: [
        { title: "Oversized Tshirt", img: img6 },
        { title: "Vest", img: img5 },
        { title: "Polo Neck", img: img7 },
        { title: "Regular Fit", img: img8 },
      ],
      women: [
        { title: "Oversized Tshirt", img: img6 },
        { title: "Oversized Dress", img: img9 },
        { title: "Polo Neck", img: img7 },
        { title: "Regular Fit", img: img12 },
        { title: "Regular Crops", img: img10 },
        { title: "Oversized Crops ", img: img11 },
      ],
      kid: [
        { title: "Oversized Tshirt ", img: img13 },
        { title: "Regular Tshirt ", img: img14 },
      ],
    },
    hoodie: {
      men: [
        { title: "Oversized Hoodie", img: hmen2 },
        { title: "Regular Hoodie", img: hmen },
        { title: "Plain Hoodie", img: hmen5 },
        { title: "Panel Hoodie", img: hmen3 },
        { title: "Sleeveless Hoodie ", img: hmen4 },
      ],
      women: [
        { title: "Crop Hoodie", img: hwomen },
        { title: "Oversize Hoodie", img: hwomen3 },
        { title: "Regular Hoodie", img: hwomen2 },
      ],
      kid: [
        { title: "Regular Hoodie Kid", img: hkid },
        { title: "Oversize Hoodie Kid", img: hkid2 },
      ],
    },
    sweatshirt: {
      men: [
        { title: "Oversized Sweatshirt", img: smen2 },
        { title: "Regular Sweatshirt", img: smen },
      ],
      women: [
        { title: "Oversize Sweatshirt", img: swomen3 },
        { title: "Regular Sweatshirt", img: swomen2 },
      ],
      kid: [{ title: "Regular Sweatshirt", img: skid }],
    },
    zipper: {
      men: [
        { title: "Oversized Zipper", img: zmen2 },
        { title: "Bomber Jacket", img: bomberm1 },
        { title: "Anime Bomber", img: bomberm2 },
        { title: "Regular Zipper", img: zmen },
        { title: "Varsity Jacket", img: varsitym },
      ],
      women: [
        { title: "Crop Zipper", img: zwomen },
        { title: "Oversize Zipper", img: zwomen3 },
        { title: "Bomber Jacket", img: bomberw },
        { title: "Regular Zipper", img: zwomen2 },
        { title: "Varsity Jacket", img: varsityw },
      ],
      kid: [
        { title: "Regular Zipper", img: zkid },
        { title: "Oversize Zipper", img: zkid2 },
      ],
    },
    accesories: {
      caps: [{ title: "Cap", img: cap }],
      tote: [{ title: "Tote Bag", img: tote }],
    },
  };

  return (
    <div>
      <Navbar />
      <div className="backdrop">
        <h1>
          <b>PRODUCTS</b>
        </h1>
      </div>

      <div className="products">
        <div className="accordion mobile">
          <div className="prodhead">
            <h4 className="head"> CATEGORIES</h4>
            {down ? (
              <img onClick={toggle} src={downarrow} className="navbtn" />
            ) : (
              <img onClick={toggle} src={up} className="navbtn" />
            )}
          </div>
          {show && (
            <div>
              <Accordion>
                <AccordionSummary
                  className="accord"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="header">T-SHIRTS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.tshirt.men);
                      toggle();
                    }}
                  >
                    Men
                  </Typography>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.tshirt.women);
                      toggle();
                    }}
                  >
                    Women
                  </Typography>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.tshirt.kid);
                      toggle();
                    }}
                  >
                    Kids
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="header">HOODIES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.hoodie.men);
                      toggle();
                    }}
                  >
                    Men
                  </Typography>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.hoodie.women);
                      toggle();
                    }}
                  >
                    Women
                  </Typography>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.hoodie.kid);
                      toggle();
                    }}
                  >
                    Kids
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="header">SWEATSHIRTS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.sweatshirt.men);
                      toggle();
                    }}
                  >
                    Men
                  </Typography>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.sweatshirt.women);
                      toggle();
                    }}
                  >
                    Women
                  </Typography>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.sweatshirt.kid);
                      toggle();
                    }}
                  >
                    Kids
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="header">JACKETS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.zipper.men);
                      toggle();
                    }}
                  >
                    Men
                  </Typography>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.zipper.women);
                      toggle();
                    }}
                  >
                    Women
                  </Typography>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.zipper.kid);
                      toggle();
                    }}
                  >
                    Kids
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="header">ACCESSORIES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.accesories.caps);
                      toggle();
                    }}
                  >
                    Caps
                  </Typography>
                  <Typography
                    className="aclist"
                    onClick={() => {
                      setdata(img.accesories.tote);
                      toggle();
                    }}
                  >
                    Tote Bags
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          )}
        </div>
        <div className="accordion desktop">
          <div className="prodhead">
            <h4 className="head"> CATEGORIES</h4>
          </div>
          <div>
            <Accordion>
              <AccordionSummary
                className="accord"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="header">T-SHIRTS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.tshirt.men)}
                >
                  Men
                </Typography>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.tshirt.women)}
                >
                  Women
                </Typography>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.tshirt.kid)}
                >
                  Kids
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="header">HOODIES</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.hoodie.men)}
                >
                  Men
                </Typography>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.hoodie.women)}
                >
                  Women
                </Typography>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.hoodie.kid)}
                >
                  Kids
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="header">SWEATSHIRTS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.sweatshirt.men)}
                >
                  Men
                </Typography>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.sweatshirt.women)}
                >
                  Women
                </Typography>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.sweatshirt.kid)}
                >
                  Kids
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="header">JACKETS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.zipper.men)}
                >
                  Men
                </Typography>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.zipper.women)}
                >
                  Women
                </Typography>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.zipper.kid)}
                >
                  Kids
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="header">ACCESSORIES</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.accesories.caps)}
                >
                  Caps
                </Typography>
                <Typography
                  className="aclist"
                  onClick={() => setdata(img.accesories.tote)}
                >
                  Tote Bags
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div>
          <ul className="product-li">
            <li>
              <b>All types of Customization done.</b>
            </li>
            <li>
              <b>Colour Options Available.</b>
            </li>
            <li>
              <b>All Sizes Available.</b>
            </li>
          </ul>
          <div className="displaybox">
            {data.map((item) => {
              return (
                <div>
                  <div class="productbox">
                    <img

                      className= {load ? "loaded productimg" : "loading productimg"}
                      src={item.img}
                      onLoad={() => setload(true)}
                    />
                    <h4 className="productname">{item.title}</h4>
                  </div>
                  <button
                    className="quotebtn"
                    onClick={() => {
                      setmessage(item.title);
                      navigate("/contact");
                    }}
                  >
                    Get Quote
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
