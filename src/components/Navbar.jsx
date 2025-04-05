import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <p>Hello</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/notfound">NotFound</Link>
    </>
  )
}

export default Navbar