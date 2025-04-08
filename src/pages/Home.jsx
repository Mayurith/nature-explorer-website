import React from 'react'
import styles from '../styles/Home.css'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div>
          <h1>Discover the Beauty of Nature</h1>
          <p>Embark on unforgettable adventures in the wild</p>
          <button>Explore Now</button>
        </div>
      </section>
    </>
  )
}

export default Home