import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
		<header className="header"> 
			<Link to="/" className="nav__logo" >
			<i className="ri-plant-line" >
				ALPINE
			</i></Link>
		  <ul className="nav">
			<Link to="/AboutUs" style={{color: "white"}} className="navbar-link" data-nav-link>About Us</Link>
			<Link to="/Products" style={{color: "white"}} className="navbar-link" data-nav-link>Products</Link>
      		<Link to="/OurServices" style={{color: "white"}} className="navbar-link" data-nav-link>Our Service</Link>
			<Link to="/Faq" style={{color: "white"}} className="navbar-link" data-nav-link>FAQ</Link>
			<Link to="/Contact" style={{color: "white"}} className="navbar-link" data-nav-link>Contact Us</Link>
			<Link to="/Login" style={{color: "white"}} className="navbar-link" data-nav-link>Sign Up </Link>
		  </ul>
		  
        <Link to="/Cart" className="navbar-link" id="nav-toggle">
        <i className="ri-shopping-cart-line"></i>
        </Link>

		</header>
  )
}

export default Navbar;
