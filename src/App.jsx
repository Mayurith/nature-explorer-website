import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Region from "./pages/Region"
import Wildlife from "./pages/Wildlife"
import Scenery from "./pages/Scenery"
import Difficulty from "./pages/Difficulty"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/region" element={<Region />} />
          <Route path="/destinations/difficulty" element={<Difficulty />} />
          <Route path="/destinations/wildlife" element={<Wildlife />} />
          <Route path="/destinations/scenery" element={<Scenery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App