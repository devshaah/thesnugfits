import React, { useState } from "react";
import Navbar from "../components/navbar";
import "../style.css";
import GoogleMapReact from "google-map-react";
import Footer from "../components/footer";
const Contact = () => {
  const [number, setnumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!number.trim()) {
      validationErrors.number = "Number is required";
    } else if (number.length != 10) {
      validationErrors.number = "Invalid Number";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted:", { name, email, number });
      console.log(name)

      // Reset the form
      setName("");
      setEmail("");
      setSubject("");
      setCompany("");
      setMessage("");
      setnumber("");
      setErrors({});
    }
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
      <div className="contact">
        <div className="map">
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

        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <div className="form-group">
            <input
              placeholder="Enter Name"
              className="form-input"
              type="text"
              value={name}
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
              onChange={(e) => setCompany(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              placeholder="Enter Number"
              className="form-input"
              type="text"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Enter your message"
              className="form-input"
              type="textarea"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
