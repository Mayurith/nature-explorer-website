import React from 'react'
import "../styles/home.css"



function Home() {

  // Sample data for highlights and slider
  const natureHighlights = [
    {
      id: 1,
      title: "Hiking Trails",
      description: "Explore breathtaking trails with stunning views.",
      icon: "🥾", // Or use react-icons
    },
    {
      id: 2,
      title: "Wildlife Watching",
      description: "Discover rare species in their natural habitats.",
      icon: "🦉",
    },
    {
      id: 3,
      title: "Camping Spots",
      description: "Sleep under the stars in pristine locations.",
      icon: "⛺",
    },
  ];

  // const sliderImages = [
  //   { id: 1, url: "/images/slider-mountains.jpg", alt: "Mountain Landscape" },
  //   { id: 2, url: "/images/slider-forest.jpg", alt: "Dense Forest" },
  //   { id: 3, url: "/images/slider-beach.jpg", alt: "Sunset Beach" },
  // ];

  return (
    <>
      {/* Hero Section */}
      <div className='home'>
        <section className='hero'>
          <div className='heroContent'>

            <h1>Discover the Beauty of Nature</h1>
            <p>Embark on unforgettable adventures in the wild</p>
            <button className='ctaButton'>Explore Now</button>
          </div>
        </section>


        {/* Nature Highlights */}
        <section className='highlights'>
          <h2>Why Explore Nature?</h2>
          <div className='highlightsGrid'>
            {natureHighlights.map((item) => (
              <div key={item.id} className='highlightCard'>
                <span className='icon'>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

    </>
  )
}

export default Home