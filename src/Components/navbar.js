import React from 'react'
import image from "../images/navbg.png"
import { Link } from 'react-router-dom'
import App from '../App'


export const Navbar = () => {
  return (
        <div className='bg-image img-fluid'>
            <img src={image} alt="brand" style={{"height":"25vh", "width":"199.4vh", "margin" : "-9px"}}/>
            <div className='nav-container' style={{"position":"absolute", "top":"30px", "left":"0px", "width":"100%"}}>
            <nav className='navbar-nav ml-auto navbar-expand-lg navbar-dark'>
                <a className='navbar-brand' href='#'>BRAND </a>
                {/* <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
                  <ul className="navbar-nav" style={{"float":"right"}}>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                  </ul>
                {/* </div> */}
            </nav>
            </div>
        </div>
  )
}
