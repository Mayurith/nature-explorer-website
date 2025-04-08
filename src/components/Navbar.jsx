import React from 'react'
import { Link } from 'react-router-dom'
// import styles from '../styles/Navbar.css'

function Navbar() {
  return (
    <>
      {/* <Link to="/" className={styles.link}>Home</Link> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/notfound">NotFound</Link>
    </>
  )
}

export default Navbar