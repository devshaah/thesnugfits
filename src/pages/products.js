import Navbar from "../components/navbar";
import React,{useState} from "react";
import "./product.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  const demo = [
    {
      category:"tshirt",
      role:"men",
      subcat : "oversized",
      title:"Oversized Tshirt MEn"
    },
    {
      category:"tshirt",
      role:"women",
      subcat : "oversized",
      title:"Oversized Tshirt Women"
    },
    {
      category:"tshirt",
      role:"kid",
      subcat : "oversized",
      title:"Oversized Tshirt kid"
    },
    {
      category:"tshirt",
      role:"kid",
      subcat : "oversized",
      title:"Oversized Tshirt kid"
    },
  ]
  const [data,setdata] = useState(demo);

  const img = {
    tshirt: {
      men:{
        oversized:[
          {title:"Oversized Tshirt1 men"},
          {title:"Oversized Tshirt2 men"},
          {title:"Oversized Tshirt3 men"},
        ],
        regular:[
          {title:"Regular Tshirt1 men"},
          {title:"Regular Tshirt2 men"},
          {title:"Regular Tshirt3 men"},
        ],
        prints:[
          {title:"Print Tshirt1 men"},
          {title:"Print Tshirt2 men"},
          {title:"Print Tshirt3 men"},
        ]
    },
    women:{
      oversized:[
        {title:"Oversized Tshirt1 women"},
        {title:"Oversized Tshirt2 women"},
        {title:"Oversized Tshirt3 women"},
      ],
      regular:[
        {title:"Regular Tshirt1 women"},
        {title:"Regular Tshirt2 women"},
        {title:"Regular Tshirt3 women"},
      ],
      prints:[
        {title:"Print Tshirt1 women"},
        {title:"Print Tshirt2 women"},
        {title:"Print Tshirt3 women"},
      ],
      crop:[
        {title:"Crop Tshirt1 women"},
        {title:"Crop Tshirt2 women"},
        {title:"Crop Tshirt3 women"},
      ]
  },
  kid:{
    oversized:[
      {title:"Oversized Tshirt1 kid"},
      {title:"Oversized Tshirt2 kid"},
      {title:"Oversized Tshirt3 kid"},
    ],
    regular:[
      {title:"Regular Tshirt1 kid"},
      {title:"Regular Tshirt2 kid"},
      {title:"Regular Tshirt3 kid"},
    ],
    prints:[
      {title:"Print Tshirt1 men"},
      {title:"Print Tshirt2 men"},
      {title:"Print Tshirt3 men"},
    ]
},
    },

    hoodie:{
      men:[
        {title:"Hoodie Men"},
        {title:"Hoodie Men"},
        {title:"Hoodie Men"}
      ],
      women:[
        {title:"Hoodie Women"},
        {title:"Hoodie Women"},
        {title:"Hoodie Women"}
      ],
      kid:[
        {title:"Hoodie Kid"},
        {title:"Hoodie Kid"},
        {title:"Hoodie Kid"}
      ]
    },
    corporate:{
      men:[
        {title:"Corporate Men"},
        {title:"Corporate Men"}
      ],
      women:[
        {title:"Corporate Women"},
        {title:"Corporate Women"}
      ]
    },
    uniform:{
      boy:[
        {title:"Uniform Boy"},
        {title:"Uniform Boy"}
      ],
      girl:[
        {title:"Uniform girl"},
        {title:"Uniform girl"}
      ]
    },
    accesories:{
      caps:[
        {title:"Cap1"},
        {title:"Cap2"},
        {title:"Cap3"}
      ],
      tote:[
        {title:"Tote1"},
        {title:"Tote2"},
        {title:"Tote3"}
      ]
    }
  }


  console.log(data)

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
              <Typography >T-shirts</Typography>
            </AccordionSummary>
            <AccordionDetails>

              <Accordion>
                <AccordionSummary
                // onClick={()=>{setdata(img.tshirt.men.oversized)}}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Men</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="aclist" 
                  onClick={()=>{setdata(img.tshirt.men.oversized)}}>Oversized</Typography>
                  <Typography className="aclist" onClick={()=>setdata(img.tshirt.men.regular)}>Regular</Typography>
                  <Typography className="aclist" onClick={()=>setdata(img.tshirt.men.prints)}>Prints</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography >Women</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="aclist" onClick={()=>setdata(img.tshirt.women.oversized)}>Oversized</Typography>
                  <Typography className="aclist" onClick={()=>setdata(img.tshirt.women.regular)}>Regular</Typography>
                  <Typography className="aclist" onClick={()=>setdata(img.tshirt.women.prints)}>Prints</Typography>
                  <Typography className="aclist" onClick={()=>setdata(img.tshirt.women.crop)}>Crops</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                 onClick={()=>setdata(img.tshirt.kid)}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Kids</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="aclist" onClick={()=>setdata(img.tshirt.kid.oversized)}>Oversized</Typography>
                  <Typography className="aclist" onClick={()=>setdata(img.tshirt.kid.regular)}>Regular</Typography>
                  <Typography className="aclist" onClick={()=>setdata(img.tshirt.kid.prints)}>Prints</Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Hoodies</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="aclist" onClick={()=>setdata(img.hoodie.men)} >Men</Typography>
              <Typography className="aclist" onClick={()=>setdata(img.hoodie.women)}>Women</Typography>
              <Typography onClick={()=>setdata(img.hoodie.kid)} >Kids</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Corporate Clothing</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="aclist" onClick={()=>setdata(img.corporate.men)}>Men</Typography>
              <Typography className="aclist" onClick={()=>setdata(img.corporate.women)}>Women</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Uniform</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="aclist" onClick={()=>setdata(img.uniform.girl)}>Girl</Typography>
              <Typography className="aclist" onClick={()=>setdata(img.uniform.boy)}>Boy</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accessories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="aclist" onClick={()=>setdata(img.accesories.caps)} >Caps</Typography>
              <Typography className="aclist" onClick={()=>setdata(img.accesories.tote)}>Tote Bags</Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="xyz">
        {data.map((item) => {
          return (
            <div className="productbox">
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

// const products = () => {
//   return (
//     <div>
//       <Navbar/>
//       <h1>Products</h1>
//     </div>
//   )
// }

// export default products
