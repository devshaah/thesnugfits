import Navbar from "../components/navbar";
import React, { useState } from "react";
import "./product.css";
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

import hmen from '../assets/images/men hoodie regular.jpg'
import hmen2 from '../assets/images/men oversize hoodie.jpg'
import hmen3 from '../assets/images/men panel hoodie.jpg'
import hmen4 from '../assets/images/without sleeve men.jpg'
import hmen5 from '../assets/images/hoodie men plain.jpg'
import hwomen from '../assets/images/women crop hoodie.jpg'
import hwomen2 from '../assets/images/women hoodie.jpg'
import hwomen3 from '../assets/images/women oversize hoodie.jpg'
import hkid from '../assets/images/kids hoodie.jpg'
import hkid2 from '../assets/images/kids oversize hoodie.jpg'

import zmen from '../assets/images/men zipper regular.jpg'
import zmen2 from '../assets/images/men oversize zipper.jpg'
import zwomen from '../assets/images/women crop zipper.jpg'
import zwomen2 from '../assets/images/women zipper.jpg'
import zwomen3 from '../assets/images/women oversize zipper.jpg'
import zkid from '../assets/images/kids zipper.jpg'
import zkid2 from '../assets/images/kids oversize zipper.jpg'

import smen from '../assets/images/sweatshirt men.jpg'
import smen2 from '../assets/images/men oversize sweatshirt.jpg'
import swomen2 from '../assets/images/women regular sweatshirt.jpg'
import swomen3 from '../assets/images/women oversize sweatshirt.jpg'
import skid from '../assets/images/kids sweatshirt.jpg'

export default function SimpleAccordion() {
  const demo = [
      { title: "Oversized Tshirt", img: img6 },
      { title: "Vest", img: img5 },     
      { title: "Oversized Sweatshirt", img: smen2 },
      { title: "Polo Neck", img: img7 },     
      { title: "Oversize Zipper", img: zwomen3 },
      { title: "Regular Fit", img: img8 },   
      { title: "Regular Sweatshirt" , img: skid },
      { title: "Oversized Dress", img: img9 },
      { title: "Regular Crops", img: img10 },
      { title: "Oversize Zipper" ,img: zkid2},
      { title: "Oversized Crops ", img: img11 }
  ];
  const [data, setdata] = useState(demo);

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
        { title: "Oversized Tshirt2 men" },
        { title: "Oversized Tshirt3 men"},
        { title: "Oversized Tshirt4 men" },
      ],
    },
    hoodie: {
      men: [
        { title: "Oversized Hoodie", img: hmen2 },
        { title: "Regular Hoodie", img: hmen },
        { title: "Plain Hoodie", img: hmen5 },
        { title: "Panel Hoodie", img: hmen3 },
        { title: "Sleeveless Hoodie ", img: hmen4 }
      ],
      women: [
        { title: "Crop Hoodie", img: hwomen },
        { title: "Oversize Hoodie", img: hwomen3 },
        { title: "Regular Hoodie", img: hwomen2 },
      ],
      kid: [
        { title: "Regular Hoodie Kid" , img: hkid },
        { title: "Oversize Hoodie Kid" ,img: hkid2}
      ],
    },
    sweatshirt: {
      men: [
        { title: "Oversized Sweatshirt", img: smen2 },
        { title: "Regular Sweatshirt", img: smen },
      ],
      women: [
        { title: "Oversize Sweatshirt", img: swomen3 },
        { title: "Regular Sweatshirt", img: swomen2 }
      ],
      kid: [
        { title: "Regular Sweatshirt" , img: skid },
      ],
    },
    zipper: {
      men: [
        { title: "Oversized Zipper", img: zmen2 },
        { title: "Regular Zipper", img: zmen },
      ],
      women: [
        { title: "Crop Zipper", img: zwomen },
        { title: "Oversize Zipper", img: zwomen3 },
        { title: "Regular Zipper", img: zwomen2 },
      ],
      kid: [
        { title: "Regular Zipper" , img: zkid },
        { title: "Oversize Zipper" ,img: zkid2}
      ],
    },
    corporate: {
      men: [{ title: "Corporate Men" }, { title: "Corporate Men" }],
      women: [{ title: "Corporate Women" }, { title: "Corporate Women" }],
    },
    uniform: {
      boy: [{ title: "Uniform Boy" }, { title: "Uniform Boy" }],
      girl: [{ title: "Uniform girl" }, { title: "Uniform girl" }],
    },
    accesories: {
      caps: [{ title: "Cap1" }, { title: "Cap2" }, { title: "Cap3" }],
      tote: [{ title: "Tote1" }, { title: "Tote2" }, { title: "Tote3" }],
    },
  };

  console.log(data);

  return (
    <div>
      <Navbar />

      <div className="products">
        <div className="accordion">
          <h2 className="head">Categories</h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="header">T-shirts</Typography>
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
              <Typography className="header">Hoodies</Typography>
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
              <Typography className="header">Sweatshirts</Typography>
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
              <Typography className="header">Zipper</Typography>
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
              <Typography className="header">Corporate Clothing</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="aclist"
                onClick={() => setdata(img.corporate.men)}
              >
                Men
              </Typography>
              <Typography
                className="aclist"
                onClick={() => setdata(img.corporate.women)}
              >
                Women
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="header">Uniform</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="aclist"
                onClick={() => setdata(img.uniform.girl)}
              >
                Girl
              </Typography>
              <Typography
                className="aclist"
                onClick={() => setdata(img.uniform.boy)}
              >
                Boy
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="header">Accessories</Typography>
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
        <div className="displaybox">
          {data.map((item) => {
            return (
              <div class="productbox">
                <img src={item.img} className="productimg" />
                <h4 className="productname">{item.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
