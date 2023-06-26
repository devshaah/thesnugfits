import logo from "../assets/logo.jpg";
import logoname from "../assets/logoname.jpg";
import { useNavigate,  Link as RouterLink } from "react-router-dom";
import "../style.css";
import React, { useState,useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link as ScrollLink } from "react-scroll";



const Navbar = () => {
  const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [show,handleshow] = useState(false);
    const [scrollc,handlescrollc] = useState(false);

    const transitionNavbar = ()=>{
        if(window.scrollY > 100)
        {
            handleshow(true)
        }
        else handleshow(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return ()=>window.removeEventListener("scroll",transitionNavbar)
    },[])
  
  return (
    <div className={`nav ${ show && 'nav_black'} `}>
      <div  onClick={() => navigate("/")}>
        <img className="logo" src={logo} />
        <img className="logo" src={logoname} />
      </div>
      <div className="nav-items desktop">
        <h3 className="nav-list" onClick={() => navigate("/")}>Home</h3>
        <h3 className="nav-list" onClick={() => navigate("/products")}>Our Products</h3>
        <h3 className="nav-list" onClick={() => navigate("/services")}>Services</h3>
        <h3 className="nav-list" onClick={() => navigate("/about")}>About Us</h3>
        <h3 className="nav-list" onClick={() => navigate("/")}>Our Work</h3>
        <ScrollLink
        activeClass="active"
        spy={true}
        smooth={true}
        duration={100}
        component={RouterLink}
        to="clients"
        className={`scroll ${ show && 'scrollc'} `}
      >
        <h3 className="nav-list" onClick={() => navigate("/")}>Clients</h3>
      </ScrollLink>
        
        <h3 className="nav-list" onClick={() => navigate("/contact")}>Contact Us</h3>
      </div>

      <div className="mobile">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        <MenuItem className="nav-list" onClick={() => navigate("/products")}>Our Products</MenuItem>
        <MenuItem className="nav-list" onClick={() => navigate("/services")}>Services</MenuItem>
        <MenuItem className="nav-list" onClick={() => navigate("/about")}>About Us</MenuItem>
        <MenuItem className="nav-list" onClick={() => navigate("/")}>Our Work</MenuItem>
        <ScrollLink
        activeClass="active"
        spy={true}
        smooth={true}
        duration={100}
        component={RouterLink}
        to="clients"
        className="scroll"
      >
        <h3 className="nav-list" onClick={() => navigate("/")}>Clients</h3>
      </ScrollLink>
        <MenuItem className="nav-list" onClick={() => navigate("/about")}>About Us</MenuItem>
        <MenuItem className="nav-list" onClick={() => navigate("/contact")}>Contact Us</MenuItem>
        <MenuItem className="nav-list" onClick={() => navigate("/")}>Home</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
