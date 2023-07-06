import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./printing.css";
import dtf from "../assets/printing/6 DTF.jpg";
import embroidery from "../assets/printing/embroidery.jpg";
import gold from "../assets/printing/gold.jpg";
import sublimation from "../assets/printing/sublimation.jpg";
import puff from "../assets/printing/puff.jpg";
import reflective from "../assets/printing/reflective.jpg";
import screen from "../assets/printing/screen.jpg";

const Printing = () => {

  return (
    <div>
      <Navbar />
      <div className="backdrop">
        <h1>
          <b>PRINTING</b>
        </h1>
      </div>

      <div className="printing">
        <div className="printing-box">
          <img src={dtf} className="printing-img" />
          <div className="printing-info">
            <h1>DTF PRINTING</h1>
            <p>
              DTF printing is a method of direct-to-film printing that allows
              for high-quality and vibrant prints on fabrics. It involves
              printing designs directly onto a film, which is then transferred
              onto the desired fabric using heat and pressure. DTF printing
              offers versatility and durability, making it suitable for apparel,
              fabrics, and other items.
            </p>
          </div>
        </div>
        <div className="printing-box rev">
          <div className="printing-info">
            <h1>REFLECTIVE PRINT</h1>
            <p>
              Refractive printing is a specialized printing technique that uses
              reflective materials to create eye-catching and dynamic designs.
              The process involves printing designs onto a surface that contains
              tiny reflective particles or layers. When light hits the printed
              design, it bounces off the reflective elements, creating a
              visually striking and reflective effect. Refractive printing is
              often used to enhance visibility, add a futuristic touch, or
              create unique patterns on clothes.
            </p>
          </div>
          <img src={reflective} className="printing-img" />
        </div>
        <div className="printing-box">
          <img src={screen} className="printing-img" />
          <div className="printing-info">
            <h1>SCREEN PRINTING</h1>
            <p>
              Screen printing is a versatile and widely used printing method
              that involves applying ink onto a fabric through a mesh screen.
              The process utilizes a stencil to control the ink placement, and a
              squeegee is used to push the ink through the screen onto the
              fabric. Screen printing is valued for its durability, versatility,
              and the ability to reproduce intricate designs with precision.
            </p>
          </div>
        </div>

        <div className="printing-box rev">
          <div className="printing-info">
            <h1>PUFF PRINTING</h1>
            <p>
              Puff printing is a specialized technique that adds depth and
              texture to printed designs. It involves using a special ink that
              expands when exposed to heat, resulting in a raised effect. The
              process typically starts with screen printing the design using the
              puff ink, which contains additives that cause it to puff up. Once
              printed, the design is heated, causing the ink to expand and
              create a three-dimensional effect
            </p>
          </div>
          <img src={puff} className="printing-img" />
        </div>

        <div className="printing-box">
          <img src={embroidery} className="printing-img" />
          <div className="printing-info">
            <h1>EMBROIDERY</h1>
            <p>
              Embroidery is a decorative technique that involves stitching
              designs onto fabric using needle and thread. It is a popular
              method for adding logos, text, and intricate patterns to garments,
              accessories, and other fabric items. The process typically uses
              special embroidery machines that automate the stitching process
              based on a digital design. Embroidery offers a durable and
              high-quality finish, and it can be done in a wide range of colors
              and thread types.
            </p>
          </div>
        </div>
        <div className="printing-box rev">
          <div className="printing-info">
            <h1>GOLD PRINTING</h1>
            <p>
              Gold printing is a specialized printing technique that involves
              using gold ink or foil to create metallic and luxurious designs.
              The process typically involves applying gold ink or foil onto
              fabric using heat and pressure. Gold printing adds a touch of
              sophistication and luxury to printed products, making them stand
              out and catch attention.
            </p>
          </div>
          <img src={gold} className="printing-img" />
        </div>
        <div className="printing-box">
          <img src={sublimation} className="printing-img" />
          <div className="printing-info">
            <h1>SUBLIMATION PRINTING</h1>
            <p>
              Sublimation printing is a method that uses heat to transfer dye
              onto fabrics. The process involves printing the design onto a
              special sublimation paper using sublimation inks. When heat is
              applied, the ink turns into a gas and penetrates the material's
              surface, resulting in vibrant and long-lasting prints. Sublimation
              printing offers excellent color reproduction, durability, and the
              ability to print intricate details. It is commonly used for custom
              apparel, personalized gifts, and promotional items.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Printing;
