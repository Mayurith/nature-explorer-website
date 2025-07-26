import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

function Navbar() {
  return (
    <>
      {/* <Link to="/" className={styles.link}>Home</Link> */}

      <section className='navbar'>
        <div className='container'>
          {/* Navbar Links */}
          <div className='links'>
            <ul className='nave-list'>
              <li><Link to="/" className='link'>Home</Link></li>
              <li className="dropdown">
                <Link to="/destinations" className="link">Destinations</Link>
                <ul className="submenu">
                  <li><Link to="/destinations/region">Region</Link></li>
                  <li><Link to="/destinations/difficulty">Difficulty</Link></li>
                  <li><Link to="/destinations/wildlife">Wildlife</Link></li>
                  <li><Link to="/destinations/scenery">Scenery</Link></li>
                </ul>
              </li>
              <li><Link to="/blog" className='link'>Blog</Link></li>
              <li><Link to="/shop" className='link'>Shop</Link></li>
              <li><Link to="/gallery" className='link'>Gallery</Link></li>
              <li><Link to="/contact" className='link'>Contact</Link></li>
              <li><Link to="/about" className='link'>About</Link></li>
              {/* <li><Link to="/notfound" className='link'>Not Found</Link></li> */}
            </ul>
          </div>

          {/* Navbar Logo */}
          <div className='logo'>
            <Link to="/">
              {/* <img src="/images/logo.jpg" alt="" className="navbar-logo" /> */}
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}

export default Navbar