import logo from "../assets/logo.jpg";
import logoname from "../assets/logoname.jpg";
import { useNavigate,  Link as RouterLink } from "react-router-dom";
import "../style.css";
import React, { useState,useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import bar from '../assets/BARS.png'


const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div>
    <div className="nav desktop">
      <div  onClick={() => navigate("/")}>
        <img className="logo" src={logo} onClick={() => navigate("/")}/>
        <img className="logo" src={logoname} onClick={() => navigate("/")}/>
      </div>
      <div className="nav-items desktop">
        <h3 className="nav-list" onClick={() => navigate("/")}>HOME</h3>
        <h3 className="nav-list" onClick={() => navigate("/products")}>PRODUCTS</h3>
        <h3 className="nav-list" onClick={() => navigate("/services")}>SERVICES</h3>
        <h3 className="nav-list" onClick={() => navigate("/printing")}>PRINTING</h3>
        <h3 className="nav-list" onClick={() => navigate("/clients")}>CLIENTS</h3>
        <h3 className="nav-list" onClick={() => navigate("/about")}>ABOUT US</h3>       
        <h3 className="nav-list" onClick={() => navigate("/contact")}>CONTACT US</h3>
      </div>
      </div>
      <div className="nav mobile">
      <img className="logo" src={logoname} onClick={() => navigate("/")}/>
      <img className="logo" src={logo} onClick={() => navigate("/")}/>
      <img src={bar} onClick={toggleNav} className="navbtn"/>
      {(toggleMenu && (    
      <div className="navmob">   
        <h4 className="nav-list listmob" onClick={() => navigate("/products")}>PRODUCTS</h4>
        <h4 className="nav-list listmob" onClick={() => navigate("/services")}>SERVICES</h4>
        <h4 className="nav-list listmob" onClick={() => navigate("/printing")}>PRINTING</h4>
        <h4 className="nav-list listmob" onClick={() => navigate("/clients")}>CLIENTS</h4>
        <h4 className="nav-list listmob" onClick={() => navigate("/about")}>ABOUT US</h4>
        <h4 className="nav-list listmob" onClick={() => navigate("/contact")}>CONTACT</h4>
        <h4 className="nav-list listmob" onClick={() => navigate("/")}>HOME</h4>
        </div>)
      )}


      </div>
    </div>
  );
};

export default Navbar;
