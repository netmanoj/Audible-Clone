import React from 'react';

const PopularPodcasts = () => (
  <section className="popular-podcasts">
    <h2>Most Popular Podcasts</h2>
    <div className="podcasts-grid">
      <Podcast title="The Joe Rogan Experience" imageUrl="/jre.jpeg" />
      <Podcast title="Impaulsive" imageUrl="/impaulsive.jpeg" />
      <Podcast title="Beerbiceps" imageUrl="/bee.png" />
      <Podcast title="Figuring Out" imageUrl="/figuring.jpeg" />
      <Podcast title="WTF is Podcast" imageUrl="/nikil.jpeg" />
    
    </div>
  </section>
);

const Podcast = ({ title, imageUrl }) => (
  <div className="podcast-item">
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default PopularPodcasts;
