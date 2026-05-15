import React from 'react';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Reel from './components/Reel';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Reel />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
