import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatYouGet from './components/WhatYouGet';
import EditorPicks from './components/EditorPicks';
import ListenAnywhere from './components/ListenAnywhere';
import PopularPodcasts from './components/PopularPodcast';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WhatYouGet />
      <EditorPicks />
      <ListenAnywhere />
      <PopularPodcasts />
      <Footer />
    </div>
  );
}

export default App;
