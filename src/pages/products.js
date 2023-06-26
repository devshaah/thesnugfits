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

export default function SimpleAccordion() {
  const demo = [
    {
      category: "tshirt",
      role: "men",
      subcat: "oversized",
      title: "Oversized Tshirt MEn",
    },
    {
      category: "tshirt",
      role: "women",
      subcat: "oversized",
      title: "Oversized Tshirt Women",
    },
    {
      category: "tshirt",
      role: "kid",
      subcat: "oversized",
      title: "Oversized Tshirt kid",
    },
    {
      category: "tshirt",
      role: "kid",
      subcat: "oversized",
      title: "Oversized Tshirt kid",
    },
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
        { title: "Oversized Tshirt", img: img9 },
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
        { title: "Hoodie Men" },
        { title: "Hoodie Men" },
        { title: "Hoodie Men" },
      ],
      women: [
        { title: "Hoodie Women" },
        { title: "Hoodie Women" },
        { title: "Hoodie Women" },
      ],
      kid: [
        { title: "Hoodie Kid" },
        { title: "Hoodie Kid" },
        { title: "Hoodie Kid" },
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
