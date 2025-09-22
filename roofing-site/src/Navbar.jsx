import apexMainPic from './assets/apexMainPic.png';
import './Navbar.css';
import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <div className="navContainer">
        {/*Going to use <a href="apex main site" later on */}
        {/* <img src={apexMainPic} /> */}
        <Link to="/" className="logo">
          <img className='mainLogo' src={apexMainPic} />
        </Link>
        <Link to="/" className='homeBtn'>
          Home
        </Link>
        {/* <div className='aboutUsBtn'>
          About Us
        </div> */}
        <Link to="/services" className='servicesBtn'>
          Services
        </Link>
        <Link to="/contact" className='contactUsBtn'>
          Contact Us
        </Link>
        <div className='apexNumber'>
          800-555-5555
        </div>
      </div>

    </>
  )
}

export default Navbar