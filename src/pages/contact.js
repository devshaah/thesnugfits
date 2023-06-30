import React, { useState, useRef } from "react";
import Navbar from "../components/navbar";
import "./contact.css";
import GoogleMapReact from "google-map-react";
import Footer from "../components/footer";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";

const Contact = ({ messageinput }) => {
  const [number, setnumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [quantity, setQuantity] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    alert("Form submitted");
    emailjs
      .sendForm(
        "service_e0sqsjf",
        "template_i5cjhra",
        form.current,
        "XHVM0_35vRrk3kiG2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setSubject("");
    setCompany("");
    setMessage("");
    setnumber("");
    setQuantity("");
    setErrors({});
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div>
      <Navbar />
      <div className="backdrop">
        <h1>
          <b>CONTACT US</b>
        </h1>
      </div>
      <div className="map-container">
        <div className="map">
          <h1>REACH US</h1>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}
        <form className="form-container" ref={form} onSubmit={handleSubmit}>
          <h2>GET IN TOUCH</h2>
          <div className="form-group">
            <input
              placeholder="Enter Name"
              className="form-input"
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              placeholder="Company Name"
              className="form-input"
              type="text"
              value={company}
              name="company"
              onChange={(e) => setCompany(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              placeholder="Enter Number"
              className="form-input"
              type="text"
              name="number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
            {errors.number && <span className="error">{errors.number}</span>}
          </div>
          <div className="form-group">
            <input
              placeholder="Enter Your Email"
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              placeholder="Subject"
              className="form-input"
              type="text"
              name="subject"
              value={ messageinput + subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Quantity"
              className="form-input"
              type="text"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Enter your message"
              className="form-input"
              type="textarea"
              rows={4}
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="contact">
        <div className="details">
          <h1 className="detail-head">DETAILS</h1>
          <h4>
            Call us at : <b>+91 98203 32671</b>
          </h4>
          <h4>
            Email us at : <b>thesnugstitch@gmail.com</b>
          </h4>
        </div>
        <div className="address">
          <h1 className="detail-head">ADDRESS</h1>
          <h4>A/24, Navkar Paradise,</h4>
          <h4> Borivali(West), Mumbai.</h4>
        </div>
        <div className="socials">
          <h1 className="detail-head">SOCIALS</h1>
          <div className="social-icons">
            <a
              href="https://instagram.com/thesnugstitch?igshid=MzRlODBiNWFlZA=="
              className="social-icon"
            >
              <InstagramIcon style={{ fontSize: "3rem" }} />
            </a>
            <a href="mailto:thesnugstitch@gmail.com" className="social-icon">
              <GmailIcon style={{ fontSize: "3rem" }} />
            </a>
            <a href="" className="social-icon">
              <FacebookIcon style={{ fontSize: "3rem" }} />
            </a>
            <a href="" className="social-icon">
              <TwitterIcon style={{ fontSize: "3rem" }} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

// if (!name.trim()) {
//   validationErrors.name = "Name is required";
// }

// if (!email.trim()) {
//   validationErrors.email = "Email is required";
// } else if (!/\S+@\S+\.\S+/.test(email)) {
//   validationErrors.email = "Email is invalid";
// }

// if (!number.trim()) {
//   validationErrors.number = "Number is required";
// } else if (number.length != 10) {
//   validationErrors.number = "Invalid Number";
// }

// if (Object.keys(validationErrors).length > 0) {
//   setErrors(validationErrors);
// } else {
