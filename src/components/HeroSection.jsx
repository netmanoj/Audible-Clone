import React from 'react';
import backbook from '/backbook.jpg'; // Adjust the path as needed

const HeroSection = () => (
  <section className="hero" style={{ backgroundImage: `url(${backbook})` }}>
    <div className="hero-content">
      <h1>Listen to audiobooks, podcasts, Audible Originals, and more</h1>
      <button className="hero-btn">Start your 30-day free trial</button>
      <p>Get any audiobook free with a 30-day Audible trial.</p>
    </div>
  </section>
);

export default HeroSection;
